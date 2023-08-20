# Verify Commit Messgae

## Git Commit Message Convention

> This is adapted from [Commit convention](https://www.conventionalcommits.org/en/v1.0.0/).

## Installation

```bash
npm i verify-commit-msg -D
```

## Usage with `husky`

```bash
 "scripts": {
    "verify-commit-msg": "verify-commit-msg"
  },
```

### Config `.husky/commit-msg`

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run verify-commit-msg
```

## Usage with `simple-git-hooks@2.8.1`

### Install
```
npm i simple-git-hooks@2.8.1 -D
```

### Config `package.json`

```bash
"simple-git-hooks": {
  "commit-msg": "verify-commit-msg"
},
```
