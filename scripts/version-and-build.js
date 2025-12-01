#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import readline from 'readline';

const packageJsonPath = './package.json';

// Read current version
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
const currentVersion = packageJson.version;

console.log(`\n📦 Current version: ${currentVersion}\n`);

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

function parseVersion(version) {
  const parts = version.split('.').map(Number);
  return { major: parts[0], minor: parts[1], patch: parts[2] };
}

function incrementVersion(current, type) {
  const { major, minor, patch } = parseVersion(current);
  
  switch (type) {
    case 'major':
      return `${major + 1}.0.0`;
    case 'minor':
      return `${major}.${minor + 1}.0`;
    case 'patch':
      return `${major}.${minor}.${patch + 1}`;
    default:
      return current;
  }
}

function isValidVersion(version) {
  return /^\d+\.\d+\.\d+$/.test(version);
}

async function main() {
  try {
    console.log('Select version bump type:');
    console.log('  1) patch  (1.0.0 → 1.0.1)');
    console.log('  2) minor  (1.0.0 → 1.1.0)');
    console.log('  3) major  (1.0.0 → 2.0.0)');
    console.log('  4) custom (enter your own version)');
    console.log('  5) cancel\n');

    const choice = await question('Enter your choice (1-5): ');

    let newVersion;

    switch (choice.trim()) {
      case '1':
        newVersion = incrementVersion(currentVersion, 'patch');
        break;
      case '2':
        newVersion = incrementVersion(currentVersion, 'minor');
        break;
      case '3':
        newVersion = incrementVersion(currentVersion, 'major');
        break;
      case '4':
        const customVersion = await question(`Enter version (current: ${currentVersion}): `);
        if (!isValidVersion(customVersion.trim())) {
          console.error('\n❌ Invalid version format. Please use semantic versioning (e.g., 1.0.0)');
          rl.close();
          process.exit(1);
        }
        newVersion = customVersion.trim();
        break;
      case '5':
        console.log('\n❌ Cancelled.');
        rl.close();
        process.exit(0);
        break;
      default:
        console.error('\n❌ Invalid choice. Please select 1-5.');
        rl.close();
        process.exit(1);
    }

    // Confirm version
    console.log(`\n📌 New version will be: ${newVersion}`);
    const confirm = await question('Continue? (y/n): ');

    if (confirm.trim().toLowerCase() !== 'y') {
      console.log('\n❌ Cancelled.');
      rl.close();
      process.exit(0);
    }

    // Update package.json
    packageJson.version = newVersion;
    writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
    console.log(`\n✅ Updated package.json to version ${newVersion}`);

    rl.close();

    // Run build
    console.log('\n🔨 Building package...\n');
    execSync('npm run build', { stdio: 'inherit' });
    
    console.log(`\n✅ Build complete! Version ${newVersion} is ready.`);
    console.log(`\n📤 To publish, run: npm publish --access public\n`);

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    rl.close();
    process.exit(1);
  }
}

main();

