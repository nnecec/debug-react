# debug-react

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Build status](https://badgen.net/github/checks/debug-react)](https://github.com/debug-react/actions/)
[![License](https://badgen.net/github/license/debug-react)](https://github.com/debug-react/blob/master/LICENSE)

## Features

- Use [TSDX](https://github.com/formium/tsdx) to develop, build, test.
- Use ESLint to lint.
- Use [commitizen](https://github.com/commitizen/cz-cli), [commitlint](https://github.com/conventional-changelog/commitlint) to limit input commit messages.
- Use [@changesets/cli](https://github.com/atlassian/changesets) to generate changelog, manage versions, and publish.
- Use husky to automatic trigger git hooks.
- Use [docz](https://github.com/doczjs/docz) to write document, develop.
- Base on yarn@berry to manage dependencies.

## Get started

0. Click `Use this template`, and clone your repo.
1. Search `debug-react`, `debug-react`, then replace all with your module name.

then it'll be your repository totally.

## Usage

0. write your code.
1. execute `npm run changeset` or `yarn changeset` to add a changeset, then execute `git commit`, will trigger `commitzen`.
2. push your branch, then visit your github repo, create a PR
3. if actions complete, confirm merge.
4. changeset/actions will create a `Version Packages` PR.
5. confirm merge `Version Packages` PR will trigger `changeset publish`, it's really publish.

## Presets

- .yarnrc.yml: `npmRegistryServer: "https://registry.npm.taobao.org/"`
- commitlint.config.js: `extends: ['@commitlint/config-conventional']`
- peerDependencies:

  ```json
  "peerDependencies": {
    "react": "^16.8.0 || ^17.0.0"
  },
  ```

- tsconfig.json: `"module": "esnext"`

## Contributors

This project exists thanks to all the people who contribute.

<a href="https://github.com/debug-react/graphs/contributors"><img src="https://contrib.rocks/image?repo=debug-react" /></a>
