#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');

function getTargetDir() {
  const home = os.homedir();
  if (process.platform === 'win32') {
    const appData = process.env.USERPROFILE || home;
    return path.join(appData, '.config', 'opencode', 'skills');
  }
  return path.join(home, '.config', 'opencode', 'skills');
}

function getSourceDir() {
  const scriptDir = path.dirname(__filename);
  return path.resolve(scriptDir, '..', 'skills');
}

function copyDirSync(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function validatePath(base, target) {
  const resolved = path.resolve(base, target);
  if (!resolved.startsWith(base)) {
    throw new Error('Path traversal detected');
  }
  return resolved;
}

(function main() {
  const targetDir = getTargetDir();
  const sourceDir = getSourceDir();

  if (!fs.existsSync(sourceDir)) {
    console.error('Error: skills directory not found at ' + sourceDir);
    process.exit(1);
  }

  const validateSource = path.resolve(sourceDir);
  const skills = fs.readdirSync(validateSource, { withFileTypes: true })
    .filter(function (entry) { return entry.isDirectory(); });

  if (skills.length === 0) {
    console.error('Error: no skill directories found in ' + sourceDir);
    process.exit(1);
  }

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log('Created: ' + targetDir);
  }

  for (const skill of skills) {
    const skillName = skill.name;
    const srcPath = path.join(validateSource, skillName);
    const destPath = path.join(targetDir, skillName);

    validatePath(validateSource, skillName);
    validatePath(targetDir, skillName);

    if (fs.existsSync(destPath)) {
      console.log('Exists: ' + skillName + ' (skipped)');
      continue;
    }

    copyDirSync(srcPath, destPath);
    console.log('Installed: ' + skillName);
  }

  var count = skills.length;
  console.log('');
  console.log('Done: ' + count + ' skills installed to ' + targetDir);
  console.log('OpenCode will auto-discover them on next session.');
})();
