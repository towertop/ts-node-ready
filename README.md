# Ready for scripting Node with Typescript

## Introduction

This is a project template with various adjusted configurations. You can start scripting Node on the base with confidence.

Arrangements in this project:

1. Declare a consistent indent style in [`.editorconfig`](https://editorconfig.org/).
2. Fullly support ES2017 with `engines` section in [`package.json`](https://docs.npmjs.com/files/package.json#engines) (according to [node.green](https://node.green/)) and ts compiler option `target` in [`tsconfig.json`](http://www.typescriptlang.org/docs/handbook/compiler-options.html).
3. TS supports ESModules and works well with Node builtin modules. [Current Node](https://medium.com/the-node-js-collection/the-current-state-of-implementation-and-planning-for-esmodules-a4ecb2aac07a) only supports ESModules with flags and `.mjs` extension. 
4. Include [TSLint](https://palantir.github.io/tslint) and its autofix function. In [`tslint.json`](https://palantir.github.io/tslint/usage/configuration/) turn on the [`tslint:recommended` presets](https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts) as well as appliable ESLint rules from [tslint-eslint-rules](https://github.com/buzinas/tslint-eslint-rules). I added some personal adjustments after a blank line at the `rules` section in that file.
5. Add basic Unit Test methods with [Mocha](https://mochajs.org) and [Chai](https://www.chaijs.com/). I prefer BDD style interfaces and assertions with `expect()` function.
6. Have double TS configuration `tsconfig.app.json` and `tsconfig.spec.json` like Angular projects. The TS lang server reference all `@types/*` module's declarations when you coding in supporting editors. But the compiler need to  select some of them for strict type checking.
7. Have a simple workflow by `scripts` section in `package.json` which supports building production version, running and testing developement version, linting and fixing code. Use [nodemon](https://github.com/TypeStrong/ts-node/issues/232) to have a live restart or retest when you coding.

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
  <tr><td>version</td><td>builtin subcommand to bump the version</td></tr>
  <tr><td>preversion</td><td>help bumping version with npm</td></tr>
  <tr><td>postversion</td><td>help bumping version with npm</td></tr>
</table>

After all, this is a template, you can modify anything on demand.

## Advices

1. Make your editor support TS type check and code lint.
2. Use new ES2017 syntax as more as you can.

## Roadmap

1. Add lint-staged to force only commit clean code.
2. Use rollup.js to reduce runtime depencencies and still able to debug with sourcemap. 
3. Collect common Node program patterns as references.
4. Utilize code generators like Yeoman, Schematics and etc.

