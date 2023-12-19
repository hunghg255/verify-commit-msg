# Verify Commit Messgae

## Git Commit Message Convention

> This is adapted from [Commit convention](https://www.conventionalcommits.org/en/v1.0.0/).

## Installation

```bash
npm i verify-commit-msg -D
```

## Update script `package.json`

- Bash
```bash
npm pkg set scripts.verify-commit=verify-commit-msg
```

- Or manually update `package.json`

```bash
"scripts": {
  "verify-commit": "verify-commit-msg"
},
```

## Usage with `husky`

### Config `.husky/commit-msg`

- Bash
```bash
npx husky add .husky/commit-msg "npm run verify-commit"
```

- Or manually update `.husky/commit-msg`

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run verify-commit
```

## Usage with `git-scm-hooks`

[git-scm-hooks](https://github.com/hunghg255/git-scm-hooks)

### Update `package.json`

```bash
"git-hooks": {
  "commit-msg": "npm run verify-commit"
},
```
