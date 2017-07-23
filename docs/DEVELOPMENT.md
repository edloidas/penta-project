# Development #

## Running a project ##

##### Prepare: #####

  1. Prepare your System environment:
    * Download and install the latest [Node.js](https://nodejs.org);
    * This project uses __Yarn__, so install it globally with __npm__ from terminal `npm install -g yarn` or choose any other way from the [official guide](https://yarnpkg.com/en/docs/install);
  2. Prepare your Editor or IDE:
    * Add __ESLint__ support;
    * Add __Flow__ support. You may also need to install it globally. See the [guide](https://flow.org/en/docs/install/) for additional information;
    * Add [Tern.js](http://ternjs.net/) support or use build-in code-analysis tools.
  3. Prepare to build the project for the __first time__:
    * Run `yarn install` to install dependencies;
    * Run `yarn run download` to download  and save all required binaries under `/build/data`.

##### Build: #####

  * Testing:
    - `yarn test` — run test with Jest;
    - `yarn run typecheck` — check code types with Flow;
    - `yarn run lint` — lint code with ESLint, Stylelint and Prettier, and try fix errors.
  * Building:
    - `yarn run build` — build the `app`, `engine` and `ui` for production.
    - `yarn run dist` — build the desktop Electron application (installer and unpacked) only. Uses code from `build` stage.
    - `yarn run package` — full build cycle for releases.
  * Developing:
    - `yarn run dev` — run dev server and open new `localhost:8080` tab in browser.
    - `yarn run try` — build `app` and open whole application in Electron. Modules `ui` and `engine` are not rebuilt.

Some scripts are a composite tasks. See [package.json](../package.json) to find how to run those scripts for a specific module.

## Issues ##

##### ESLint #####

* ESLint babel parser does not support `'no-await-in-loop'` rule in [ESLint config](../.eslintrc.js).
* ESLint `react/require-default-props` does not encourage to use __Default props values__ in pure components, cause they are not the same, as __Default props__, although there is [example](https://flow.org/en/docs/frameworks/react/) in the Flow docs. See the discussion [discussion](https://github.com/yannickcr/eslint-plugin-react/issues/1009#issuecomment-269111018).
