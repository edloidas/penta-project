/*
Game webpack config. Compiles engine and ui.
Uses $NODE_ENV, `production` or `development` (also default)
*/
const path = require('path');
const R = require('ramda');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const {
  SourceMapDevToolPlugin,
  NamedModulesPlugin,
  NoEmitOnErrorsPlugin,
  DefinePlugin
} = require('webpack');
const extractConfig = require('./util/config/extract');
const htmlConfig = require('./util/config/html');
const minifyConfig = require('./util/config/minify');
const env = require('./util/env');
const project = require('./util/project');
const CONFIG = require('./util/config');

const isProd = env.prod;
const isDev = env.dev;

// appendToArrayByPath :: Array -> Object -> Object -> Object
const appendToArrayByPath = R.curry((objPath, data, object) =>
  R.pipe(
    R.path(objPath),
    R.append(data),
    R.set(R.lensPath(objPath), R.__, object)
  )(object)
);
// addRule :: Object -> Object -> Object
const addRule = appendToArrayByPath(['module', 'rules']);
// addPlugin :: Object -> Object -> Object
const addPlugin = appendToArrayByPath(['plugins']);
// addPlugins :: Array -> Array
const addPlugins = list => R.map(addPlugin, list);

// stringifyBoolProperty :: Array -> Array
const stringifyBoolProperty = R.ifElse(
  v => R.equals(R.last(v), true),
  R.init,
  R.clone
);
// mergeOptions :: Object -> String
const stringifyOptions = R.pipe(
  R.toPairs,
  R.map(
    R.pipe(
      stringifyBoolProperty,
      R.join('=')
    )
  ),
  R.join('&')
);
// stringifyUse :: Object -> String
const stringifyUse = use =>
  `${use.loader}${use.options ? '?' : ''}${stringifyOptions(use.options)}`;

const webpackConfigTemplate = {
  entry: {
    engine: './src/js/engine/index.ts',
    ui: './src/js/ui/index.tsx',
    vendor: [
      // 'classnames',
      // 'mathjs',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'history',
      'redux',
      'redux-actions',
      'react-transition-group',
      'lodash.clonedeep',
      'lodash'
      // 'three',
      // Unnesessary libraries
      // 'styled-components',
      // 'redux-devtools',
      // Vendor libraris, that cause error after extraction
      // 'react-hot-loader',
    ]
  },
  output: {
    path: path.resolve(__dirname, CONFIG.root.dist),
    filename: '[name].js'
  },
  module: {
    rules: []
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(env.type) },
      GAME_VERSION: JSON.stringify(project.version)
    }),
    new NamedModulesPlugin(),
    new NoEmitOnErrorsPlugin()
  ],
  mode: env.type,
  devtool: isProd ? false : 'inline-source-map'
};

// =====================
// Allows to convert pug->html
// Uglifies code in produnction (see `rule.pretty` and `plugin.minify`)
// Injects CSS and JS in production (disabled)
// =====================
function addPugSupport(cfg) {
  const rule = {
    test: /\.pug$/,
    loader: 'pug-loader',
    options: {
      pretty: !isDev,
      self: true
    }
  };
  const plugin = new HtmlWebpackPlugin(htmlConfig);

  return R.pipe(
    addRule(rule),
    addPlugin(plugin)
  )(cfg);
}

// =====================
// Compile TypeScript
// Uglifies code in production
// =====================
function addTypeScriptSupport(cfg) {
  const rule = {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /(node_modules|\.\/build|\.\/dist)/,
    options: {
      configFile: 'src/js/tsconfig.game.json'
    }
  };

  const plugins = [
    ...(isDev
      ? [
          // automatically injected by dev server with --hot flag
          // new HotModuleReplacementPlugin(),
          new SourceMapDevToolPlugin({
            filename: '[name].js.map',
            exclude: ['vendor.js']
          })
        ]
      : []),
    ...(isProd
      ? [
          // UglifyJs is replaced with Babili
          // Babili as preset in `.babelrc` does not optimize vendor chunk.
          new MinifyPlugin(minifyConfig)
        ]
      : [])
  ];

  return R.pipe(
    addRule(rule),
    ...addPlugins(plugins)
  )(cfg);
}

// =====================
// Add support for the css bundle
// - CSS file needs to be required from JS entry
// - ExtractTextPlugin extracts css from JS to a separate file
// =====================
function addPostCSSSupport(cfg) {
  let rule = {
    test: /\.css$/
  };

  const loader = {
    style: {
      loader: 'style-loader'
    },
    css: {
      loader: 'css-loader',
      options: { importLoaders: 1 }
    },
    postcss: {
      loader: 'postcss-loader',
      options: { sourceMap: 'inline' }
    }
  };

  const devLoaders = {
    use: Object.values(loader)
  };

  const prodLoaders = {
    use: ExtractTextPlugin.extract({
      // use `devLoaders` converted to query string as `fallback`
      fallback: stringifyUse(loader.style),
      use: `${stringifyUse(loader.css)}!postcss-loader`
    })
  };
  const loaders = isProd ? prodLoaders : devLoaders;

  rule = R.merge(rule)(loaders);

  const plugin = new ExtractTextPlugin(
    R.merge({ filename: 'style.css' }, extractConfig)
  );

  return R.pipe(
    addRule(rule),
    addPlugin(plugin)
  )(cfg);
}

// =====================
// Make final config support needed rules
// =====================
function makeConfig(cfg) {
  return R.pipe(
    addPugSupport,
    addTypeScriptSupport,
    addPostCSSSupport
  )(cfg);
}

module.exports = makeConfig(webpackConfigTemplate);
