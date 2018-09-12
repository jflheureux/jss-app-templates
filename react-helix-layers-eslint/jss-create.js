const { applyNameToProject } = require('@sitecore-jss/sitecore-jss-cli/dist/create');
const chalk = require('chalk');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

/**
 * This function is invoked by `jss create` when an app based on this template is created.
 * It should perform tasks necessary to instantiate the app according to the argv, which
 * correspond to the allowed arguments of `jss create`.
 *
 * Note: npm packages for the new app are already installed before this script is run.
 * Note: this file is deleted in the new app after it has been run.
 *
 * @param {object} argv Arguments passed to `jss create` script
 * @param {string[]} nextSteps Array of default 'next steps' to show at the console
 * @returns {string[]} The next steps to display to the console user (enables customization from this script)
 */
module.exports = function createJssProject(argv, nextSteps) {
  console.log(`Executing create script: ${__filename}...`);

  applyNameToProject(__dirname, argv.name, argv.hostName);
  applyNameToProjectModule(__dirname, argv.name);

  return nextSteps;
};

function applyNameToProjectModule(projectFolder, name) {
  console.log(chalk.default.cyan(`Setting package name ${name} to project layer module...`));

  applyNameToJavaScriptFilesContent(projectFolder, name);
  applyNameToProjectModuleFolder(projectFolder, name);
}

function applyNameToJavaScriptFilesContent(projectFolder, name) {
  glob.sync(path.join(projectFolder, '**', '*.js')).forEach(javaScriptFilePath => {
    if (javaScriptFilePath.toLowerCase().startsWith(path.join(projectFolder, 'node_modules').toLocaleLowerCase().replace(/\\/g, '/'))) {
      return;
    }

    applyNameToJavaScriptFileContent(javaScriptFilePath, name);
  });
}

function applyNameToJavaScriptFileContent(javaScriptFilePath, name) {
  let javaScriptFileContent = fs.readFileSync(javaScriptFilePath, 'utf8');
  javaScriptFileContent = javaScriptFileContent.replace(/JssReactWeb/ig, name);
  fs.unlinkSync(javaScriptFilePath);
  fs.writeFileSync(javaScriptFilePath, javaScriptFileContent);
}

function applyNameToProjectModuleFolder(projectFolder, name) {
  let projectFolderPath = path.join(projectFolder, 'src', 'Project');
  let oldProjectModuleFolderPath = path.join(projectFolderPath, 'JssReactWeb');
  let newProjectModuleFolderPath = path.join(projectFolderPath, name);
  fs.renameSync(oldProjectModuleFolderPath, newProjectModuleFolderPath);
}