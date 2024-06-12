<p align="center">
<a href="https://www.npmjs.com/package/verify-commit-msg" target="_blank" rel="noopener noreferrer">
<img src="https://api.iconify.design/uil:comment-verify.svg?color=%23b3ff75" alt="logo" width='100'/></a>
</p>

<p align="center">
  A script to verify the commit message format.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/verify-commit-msg" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/verify-commit-msg.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/verify-commit-msg" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dt/verify-commit-msg.svg?logo=npm" alt="NPM Downloads" /></a>
  <a href="https://bundlephobia.com/result?p=verify-commit-msg" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/bundlephobia/minzip/verify-commit-msg" alt="Minizip" /></a>
  <a href="https://github.com/hunghg255/verify-commit-msg/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg" alt="Contributors" /></a>
  <a href="https://github.com/hunghg255/verify-commit-msg/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/hunghg255/verify-commit-msg" alt="License" /></a>
</p>

## Git Commit Message Convention

> This is adapted from [Commit convention](https://www.conventionalcommits.org/en/v1.0.0/).

## Installation

```bash
npm i verify-commit-msg -D
```

## Usage with `git-scm-hooks`

[git-scm-hooks](https://github.com/hunghg255/git-scm-hooks)

```bash
  npm pkg set scripts.verify-commit=verify-commit-msg
  npm pkg set git-hooks.commit-msg="npm run verify-commit"
```

## Usage with `husky`

### Config `.husky/commit-msg`

- Bash
```bash
npm pkg set scripts.verify-commit=verify-commit-msg
npx husky add .husky/commit-msg "npm run verify-commit"
```

- Or manually update `.husky/commit-msg`

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run verify-commit
```

