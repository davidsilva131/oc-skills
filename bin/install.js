#!/usr/bin/env node
'use strict';

var fs = require('node:fs');
var path = require('node:path');
var os = require('node:os');

function getTargetDir() {
  var home = os.homedir();
  if (process.platform === 'win32') {
    return path.join(process.env.USERPROFILE || home, '.config', 'opencode', 'skills');
  }
  return path.join(home, '.config', 'opencode', 'skills');
}

function getSourceDir() {
  return path.resolve(path.dirname(process.argv[1]), '..', 'skills');
}

function isBucketDir(name) {
  return ['engineering', 'productivity', 'design', 'misc', 'personal', 'in-progress'].includes(name);
}

function copyDirSync(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  var entries = fs.readdirSync(src, { withFileTypes: true });
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    var srcPath = path.join(src, entry.name);
    var destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function validatePath(base, target) {
  var resolved = path.resolve(base, target);
  if (resolved.indexOf(base) !== 0) {
    throw new Error('Path traversal detected: ' + target);
  }
  return resolved;
}

function findSkillDirs(sourceDir) {
  var skills = [];
  var entries = fs.readdirSync(sourceDir, { withFileTypes: true });

  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (!entry.isDirectory()) continue;

    if (isBucketDir(entry.name)) {
      var bucketPath = path.join(sourceDir, entry.name);
      var bucketEntries = fs.readdirSync(bucketPath, { withFileTypes: true });
      for (var j = 0; j < bucketEntries.length; j++) {
        var be = bucketEntries[j];
        if (be.isDirectory()) {
          skills.push({ name: be.name, src: path.join(bucketPath, be.name) });
        }
      }
    } else {
      skills.push({ name: entry.name, src: path.join(sourceDir, entry.name) });
    }
  }
  return skills;
}

(function main() {
  var args = process.argv.slice(2);
  var dryRun = args.indexOf('--dry-run') !== -1;

  var targetDir = getTargetDir();
  var sourceDir = getSourceDir();

  if (!fs.existsSync(sourceDir)) {
    console.error('Error: skills directory not found at ' + sourceDir);
    process.exit(1);
  }

  var skills = findSkillDirs(sourceDir);

  if (skills.length === 0) {
    console.error('Error: no skill directories found in ' + sourceDir);
    process.exit(1);
  }

  if (!fs.existsSync(targetDir)) {
    if (dryRun) {
      console.log('Would create: ' + targetDir);
    } else {
      fs.mkdirSync(targetDir, { recursive: true });
      console.log('Created: ' + targetDir);
    }
  }

  var installed = 0;
  var updated = 0;
  var skipped = 0;

  for (var i = 0; i < skills.length; i++) {
    var skillName = skills[i].name;
    var srcPath = skills[i].src;
    var destPath = path.join(targetDir, skillName);

    validatePath(sourceDir, skillName);
    validatePath(targetDir, skillName);

    if (fs.existsSync(destPath)) {
      if (dryRun) {
        console.log('Would update: ' + skillName);
        updated++;
      } else {
        fs.rmSync(destPath, { recursive: true, force: true });
        copyDirSync(srcPath, destPath);
        console.log('Updated: ' + skillName);
        updated++;
      }
    } else {
      if (dryRun) {
        console.log('Would install: ' + skillName);
        installed++;
      } else {
        copyDirSync(srcPath, destPath);
        console.log('Installed: ' + skillName);
        installed++;
      }
    }
  }

  console.log('');
  if (dryRun) {
    console.log('Dry run: ' + installed + ' would install, ' + updated + ' would update, ' + skills.length + ' total');
  } else {
    console.log('Done: ' + installed + ' installed, ' + updated + ' updated, ' + skills.length + ' total');
    console.log('Skills installed to: ' + targetDir);
    console.log('OpenCode will auto-discover them on next session.');
  }
})();
