# Verify Commit Messgae

## Git Commit Message Convention

> This is adapted from [Commit convention](https://www.conventionalcommits.org/en/v1.0.0/).

## Installation

```bash
npm i verify-commit-msg -D
```

## Update script `package.json`

```bash
 "scripts": {
    "verify-commit": "verify-commit-msg"
  },
```

## Usage with `husky`

### Config `.husky/commit-msg`

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run verify-commit
```

## Usage with `git-scm-hooks`


### Update `package.json`

```bash
"git-hooks": {
  "commit-msg": "npm run verify-commit"
},
```
