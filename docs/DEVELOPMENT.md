# Development #

## Running a project ##

#### Prepare: ####

  1. Prepare your System environment:
    * Download and install the latest [Node.js](https://nodejs.org);
  2. Prepare your Editor or IDE:
    * Add __ESLint__ and __TSLint__ support;
    * Add __Typescript__ support.
  3. Prepare to build the project for the __first time__:
    * Run `npm install` to install dependencies;
    * Run `npm run download` to download  and save all required binaries under `/build/data`.

#### Build: ####

  * Testing:
    - `npm test` — run test with Jest;
    - `npm run prettier` — cformat code with Prettier;
    - `npm run lint` — lint code with TSLint, ESLint, Stylelint and try to fix the errors.
    - `npm run review` — full review: lint and tests.
  * Building:
    - `npm run build` — build the `app`, `engine` and `ui` for production.
    - `npm run dist` — build the desktop Electron application (installer and unpacked) only. Uses code from `build` stage.
    - `npm run package` — full build cycle for releases.
  * Developing:
    - `npm run dev` — run dev server and open new `localhost:8080` tab in browser.
    - `npm run try` — build `app` and open whole application in Electron. Modules `ui` and `engine` are not rebuilt.

Some scripts are composite tasks. See [package.json](../package.json) to find how to run those scripts for a specific module.

## Issues ##

--
