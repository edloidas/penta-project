Penta Project
=============

[![Travis Build Status][travis-image]][travis-url]
[![AppVeyor Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url]

> Action platformer with roguelike elements.

## Description ##

Penta project is currently in pre-alpha.

## Development ##

##### JS: uglify & tree-shaking #####

* [x] UglifyJS2 (webpack plugin) [does not support ES2015+][UglifyJS2-es2015].

To support ES2015+, the `harmony` branch from git repo is used.
See `uglify-js` dependency and `uglify` task that will remove this dependency from webpack dependencies in `node_modules`.

##### ESLint #####

* [ ] ESLint babel parser does not support `'no-await-in-loop'` rule ( ✘ in [ESLint config](.eslintrc.js) )

##### CSS: scoping #####

* [ ] CSS Modules [doesn't work](https://github.com/webpack/css-loader/issues/186#issuecomment-171042804) with webpack's HMR on plain CSS.
It either process everything with React, or reloads the page on CSS update. It was decided to use BEM notation instead.

## License ##

[GPL-3.0](LICENSE) © [Mikita Taukachou](https://edloidas.com)

Take a note, that all project data in the `public/base/` directory (present only in compiled version) are licensed under the [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License][base-license-url]. ![CC BY-NC-SA][base-license-image]

<!-- Links -->
[travis-url]: https://travis-ci.org/edloidas/penta-project
[travis-image]: https://img.shields.io/travis/edloidas/penta-project.svg?label=linux%20build

[appveyor-url]: https://ci.appveyor.com/project/edloidas/penta-project
[appveyor-image]: https://img.shields.io/appveyor/ci/edloidas/penta-project.svg?label=windows%20build

[coveralls-url]: https://coveralls.io/github/edloidas/penta-project?branch=master
[coveralls-image]: https://coveralls.io/repos/github/edloidas/penta-project/badge.svg?branch=master

[dep-url]: https://david-dm.org/edloidas/penta-project
[dep-image]: https://david-dm.org/edloidas/penta-project.svg

[devdep-url]: https://david-dm.org/edloidas/penta-project#info=devDependencies
[devdep-image]: https://david-dm.org/edloidas/penta-project/dev-status.svg

[base-license-url]: http://creativecommons.org/licenses/by-nc-nd/4.0/
[base-license-image]: http://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-nc-sa.svg

[UglifyJS2-es2015]: https://github.com/mishoo/UglifyJS2/issues/448
