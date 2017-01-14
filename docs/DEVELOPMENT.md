# Development #

## Issues ##

##### JS: uglify & tree-shaking #####

* [x] UglifyJS2 (webpack plugin) [does not support ES2015+][issue-uglify].

To support ES2015+, the `harmony` branch from git repo is used.
See `uglify-js` dependency and `uglify` task that will remove this dependency from webpack dependencies in `node_modules`.

##### ESLint #####

* [ ] ESLint babel parser does not support `'no-await-in-loop'` rule in [ESLint config](../.eslintrc.js).

##### CSS: scoping #####

* [ ] CSS Modules [doesn't work][issue-css-modules] with webpack's HMR on plain CSS.

It either process everything with React, or reloads the page on CSS update. It was decided to use BEM notation instead.

[issue-uglify]: https://github.com/mishoo/UglifyJS2/issues/448
[issue-css-modules]: https://github.com/webpack/css-loader/issues/186#issuecomment-171042804
