import { execSync } from 'child_process';
import fs from 'fs';

// Read the package.json file
const packageJson = fs.readFileSync('./package.json');
const { commitCount } = JSON.parse(packageJson);

// Increment the commit count
const newCommitCount = commitCount + 1;

// Update the package.json file with the new commit count
const updatedPackageJson = {
  ...JSON.parse(packageJson),
  commitCount: newCommitCount
};
fs.writeFileSync('./package.json', JSON.stringify(updatedPackageJson, null, 2));

// Get the commit message from the command-line argument
const commitMessage = process.argv[2] || `Version ${newCommitCount}`;

// Execute the remaining commands
execSync('npm run build');
execSync('git add .');
execSync(`git commit -m "${commitMessage}"`);
execSync('git push -u origin main');
