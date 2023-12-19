#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import color from 'picocolors';

const msgPath = path.resolve('.git/COMMIT_EDITMSG');
const msg = fs.readFileSync(msgPath, 'utf-8').trim();

const commitRE = /^((feat|fix|docs|style|core|i18n|a11y|report|misc|cli|audits|improve|security|deprecated|refactor|perf|test|workflow|build|ci|chore|types|wip|release|deps?|merge|examples?|revert)(\(.+\))?(\:|\!\:)|(Merge|Revert|Version)) .{1,200}$/;

if (!commitRE.test(msg)) {
  console.error(
    `${color.red(`ERROR: invalid commit message format.`)}\n\n` +
    color.yellow(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`,
      ) +
      `    ${color.green(`feat(compiler): add 'comments' option`)}\n` +
      `    ${color.green(`fix(modal): handle events on blur (close #28)`)}\n\n` +
      color.yellow(`  See .github/commit-convention.md for more details.\n`),
  );
  process.exit(1);
}
