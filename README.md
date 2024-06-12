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
  npm pkg set git-hooks.commit-msg="npm run verify-commit"
```
