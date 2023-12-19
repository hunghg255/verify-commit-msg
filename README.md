# Verify Commit Messgae

## Git Commit Message Convention

> This is adapted from [Commit convention](https://www.conventionalcommits.org/en/v1.0.0/).

## Installation

```bash
npm i verify-commit-msg -D
```

## Update script `package.json`

```bash
  npm pkg set scripts.verify-commit=verify-commit-msg
```

## Usage with `husky`

### Config `.husky/commit-msg`

```bash
npx husky add .husky/commit-msg "npm run verify-commit"
```

## Usage with `git-scm-hooks`

[git-scm-hooks](https://github.com/hunghg255/git-scm-hooks)

### Update `package.json`

```bash
"git-hooks": {
  "commit-msg": "npm run verify-commit"
},
```
