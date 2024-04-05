#!/usr/bin/env zx
// This scrip will reset the passed-in number of commits and commit again with the same message

const numberOfCommits = process.argv[3] || 1;

// Get the latest commit message
const commitMessage = await $`git log -1 --pretty=%B`;

// Run git reset HEAD~1
await $`git reset HEAD~${numberOfCommits}`;

// Run git add .
await $`git add .`;

// Commit again with the stored message
await $`git commit -m ${commitMessage}`;