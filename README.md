# Ready for scripting Node with Typescript

## Introduction

This is a project template with various adjusted configurations. You can start scripting Node on the base with confidence. It targets to the last NodeJS version still under maintenance, meaning [v12][node-releases] and [ES2019][node-es-compatibility-table].

## Setup and Usage

You can download the project without git index content:

    curl -L https://github.com/towertop/ts-node-ready/tarball/master | tar xf -

After install dependencies, it is ready to open editor and start programing from `src/main.ts`.

If you're going to commit or publish the project, you need to modify `package.json` fields like `name`, `version`, `author` and etc.

You can use the simple workflow with:

    npm run <command> 

Commands include:

<table>
  <tr><td>start</td><td>run production version, depends on build</td></tr>
  <tr><td>build</td><td>build production version, output to dist/</td></tr>
  <tr><td>clean</td><td>remove dist/</td></tr>
  <tr><td>dev</td><td>run developement version main.ts directly</td></tr>
  <tr><td>watch</td><td>automatically restart main.ts</td></tr>
  <tr><td>lint</td><td>check all source code for bad practices</td></tr>
  <tr><td>lintFix</td><td>manage to correct the bad practices</td></tr>
  <tr><td>test</td><td>execute test cases</td></tr>
  <tr><td>testWatch</td><td>automatically re-execute test cases</td></tr>
  <tr><td>release</td><td>release current version as a git tag</td></tr>
  <tr><td>version</td><td>used by 'release' comamnd</td></tr>
  <tr><td>preversion</td><td>used by 'release' comamnd</td></tr>
  <tr><td>postversion</td><td>used by 'release' comamnd</td></tr>
</table>

After all, this is a template, you can modify anything on demand.

## Advices

1. Make your editor support TS type check and code lint.
2. Use new ES2019 syntax as more as you can.
3. Update `@types/node` if targeting to a fresher NodeJS than v12.

## Details

1. Defines a consistent indent style in [`.editorconfig`][editorconfig.org].
2. Declares target node version range by `engines` field in [`package.json`][npm-package.json-doc].
3. Uses officially recommended TSConfig base from [tsconfig/bases][] project, which specified type check for ES2019.
3. Installs [@types/node@12][] to specify type check for Node API of that version.
3. Tunes TSConfig to transpile ESModules to CommonJS for Node. [Current Node][state-of-node-esmodules] has't been ready for native ESModules without flag and `.mjs` file extension. 
4. Includes [TSLint][tslint-repo] and its autofix function. In [`tslint.json`][tslint-usage-configuration] turn on the [`tslint:recommended` presets][tslint-recommended-presets] and additional rules from [tslint-eslint-rules][tslint-eslint-rules]. I added some personal adjustments after a blank line at the `rules` section in that file.
5. Adds basic Unit Test methods with [Mocha][mochajs.org] and [Chai][chaijs.com]. I prefer BDD style interfaces and assertions with `expect()` function.
6. Has double TS configuration `tsconfig.app.json` and `tsconfig.spec.json` like Angular projects. The TS lang server reference all `@types/*` module's declarations when you coding in supporting editors. But the compiler need to  select some of them for strict type checking.
7. Has a simple development workflow by `scripts` section in `package.json`. Use [nodemon][ts-node/issues/232] to have a live restart or retest when you coding.
8. Utilizes [husky][] and [lint-staged][] to enforce code style before every commits. 
9. Has a simple relase method within the workflow based on [npm-version][] command. It would lint and test source code, build production version, and release them as a git tag. I feel it is handy for private projects within a team internally. What you should do before use `release` command is to bump the version in `package.json`, else would get stuck by tag name collision.
10. Use [rollup.js][] to bundle and emit `main.js` while keeping readable javascript code and sourcemap for debugging. 

## Roadmap

2. Collect common Node program patterns as references.
3. Utilize code generators like Yeoman, Schematics and etc.
4. Introduce zeit/pkg.
5. Introduce node-config.
6. Replace tslint with typescript-eslint.
7. Upgrade all deps with builtin compatibility checks
8. Introduce schematic-release?
9. Bring in npm-check-updates tool to confidentially bump dependencies.

[node-releases]: https://nodejs.org/en/about/releases/
[node-es-compatibility-table]: https://node.green/
[editorconfig.org]: https://editorconfig.org/
[npm-package.json-doc]: https://docs.npmjs.com/files/package.json#engines
[state-of-node-esmodules]: https://medium.com/the-node-js-collection/the-current-state-of-implementation-and-planning-for-esmodules-a4ecb2aac07a
[tslint-repo]: https://palantir.github.io/tslint
[tslint-usage-configuration]: https://palantir.github.io/tslint/usage/configuration/
[tslint-recommended-presets]: https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts
[tslint-eslint-rules]: https://github.com/buzinas/tslint-eslint-rules
[mochajs.org]: https://mochajs.org
[chaijs.com]: https://www.chaijs.com/
[ts-node/issues/232]: https://github.com/TypeStrong/ts-node/issues/232
[husky]: https://github.com/typicode/husky
[lint-staged]: https://github.com/okonet/lint-staged
[npm-version]: https://docs.npm.red/cli/version.html
[tsconfig/bases]: https://github.com/tsconfig/bases.
[@types/node@12]: https://www.npmjs.com/package/@types/node
[rollup.js]: https://www.rollupjs.org/
