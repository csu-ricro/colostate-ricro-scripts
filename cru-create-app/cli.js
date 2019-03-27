#! /usr/bin/env node

/* eslint-disable no-console */

const Commander = require('commander');
const Shell = require('shelljs');
const pk = require('../package.json');
const Script = require('../_utils/Script');
const updateHtml = require('./scriptFragments/updateHtml');
const updateManifest = require('./scriptFragments/updateManifest');
const updatePackage = require('./scriptFragments/updatePackage');

const scriptName = 'cru-create-app';

const options = {
  dir: ['-d --dir [path]', 'Specify the directory for app installation', '.'],
  manifest__name: [
    '-m --manifest__name [name]',
    'Set the `name` key in `manifest.json`',
    'Create App with colostate-ricro-ui',
  ],
  manifest__short_name: [
    '-M --manifest__short_name [shortName]',
    'Set the `short_name` key in `manifest.json`',
    'Create CRU App',
  ],
  package__author: [
    '-a --package__author [name]',
    'Set the `author` key in `package.json`',
    'RICRO',
  ],
  package__description: [
    '-D --package__description [description]',
    'Specify the `description` key in `package.json`',
    `App template built with colostate-ricro-scripts/${scriptName}`,
  ],
  package__homepage: [
    '-h --package__homepage [path]',
    'Specify the deployment path on the production server',
    '/',
  ],
  package__name: [
    '-n --package__name [name]',
    'Set the `name` key in `package.json`',
    'cru-template',
  ],
  package__private: ['-p, --package__private', 'Set the `private` key in `package.json` to `true`'],
};

const description = 'Create a new RICRO app with create-react-app and colostate-ricro-ui';
const args = Commander.version(pk.version, '-v, --version').description(description);
Object.keys(options).forEach(option => args.option(...options[option]));
args.parse(process.argv);

const script = new Script({
  name: scriptName,
  description,
  pk,
});

// Shell.exec('clear');
script.start();

if (!Shell.which('create-react-app')) {
  script.log(script.color('error', '`create-react-app` must be installed globally'));
  Shell.exit(1);
}

Object.keys(options).forEach(option => {
  if (args[option] && args[option] === options[option][2]) {
    script.log(script.color('warn', `\`${option}\`: Using default value: "${options[option][2]}"`));
  }
});

if (args.dir.charAt(args.dir.length - 1) !== '/') {
  args.dir += '/';
}

script.scripts.exec([{ name: 'create-react-app', exec: `create-react-app ${args.dir}` }]);
updateManifest({ args, script });
updateHtml({ args, script });
updatePackage({ args, options, script });

/**
 * Add dot-files
 */
const dotFiles = ['.eslintrc.js', 'prettier.config.js'];

const moveDotFiles = [];
dotFiles.forEach(dotFile => {
  moveDotFiles.push({
    name: `Copy ${dotFile}`,
    func: 'cp',
    args: [`${__dirname}/assets/dotFiles/-${dotFile}`, args.dir + dotFile],
  });
});
script.scripts.exec(moveDotFiles);

/**
 * Add files to public
 */
const publicFiles = ['favicon.ico'];

const movePublicFiles = [];
publicFiles.forEach(publicFile => {
  movePublicFiles.push({
    name: `Copy ${publicFile}`,
    func: 'cp',
    args: [`${__dirname}/assets/publicFiles/-${publicFile}`, `${args.dir}public/${publicFile}`],
  });
});
script.scripts.exec(movePublicFiles);

/**
 * Add files to src
 */
const srcFiles = ['_placeholder.js', 'App.js', 'index.js'];

const moveSrcFiles = [];
srcFiles.forEach(srcFile => {
  moveSrcFiles.push({
    name: `Copy ${srcFile}`,
    func: 'cp',
    args: [`${__dirname}/assets/srcFiles/${srcFile}`, `${args.dir}src/${srcFile}`],
  });
});

moveSrcFiles.push({
  name: `mkdir assets`,
  func: 'mkdir',
  args: ['-p', `${args.dir}src/assets`],
});
moveSrcFiles.push({
  name: `rm old src`,
  func: 'rm',
  args: ['src/*.css', 'src/*.test.js', 'src/*.svg'],
});
console.log(moveSrcFiles);
moveSrcFiles.push({
  name: `Copy config.js`,
  func: 'cp',
  args: [`${__dirname}/assets/srcFiles/config.js`, `${args.dir}src/assets/config.js`],
});
script.scripts.exec(moveSrcFiles);

/**
 * Install dependencies
 */
const dependencies = 'colostate-ricro-ui';
const devDependencies = 'eslint-plugin-babel eslint-plugin-jest eslint-config-airbnb';

Shell.pushd('-q', args.dir);
script.scripts.exec([
  { name: 'Install deps', exec: `yarn add ${dependencies}` },
  { name: 'Install devDeps', exec: `yarn add -D ${devDependencies}` },
]);
Shell.popd('-q');

script.stop();
