import SHOWBIE from '../src/backpack-showbie';
import SOCRATIVE from '../src/backpack-socrative';

const path = require('path');

const pkg = require('../package.json');
const ColorBuilder = require('./build-colors');

const ShowbieTokens = new ColorBuilder(
  SHOWBIE,
  pkg.version
);
const SocrativeTokens = new ColorBuilder(
  SOCRATIVE,
  pkg.version
);

ShowbieTokens.build('backpack-tokens.scss', [
  path.join(__dirname, '..', 'dist', 'backpack-showbie.scss'),
]);
ShowbieTokens.build('backpack-tokens.swift', [
  path.join(__dirname, '..', 'dist', 'backpack-showbie.swift'),
]);
ShowbieTokens.build('backpack-tokens.js', [
  path.join(__dirname, '..', 'dist', 'backpack-showbie.js'),
]);

SocrativeTokens.build('backpack-tokens.less', [
  path.join(__dirname, '..', 'dist', 'backpack-socrative.less'),
]);
// SocrativeColors.build('showbie-color.scss', [
//   path.join(__dirname, '..', 'dist', 'socrative-color.scss'),
// ]);
// SocrativeColors.build('showbie-color.swift', [
//   path.join(__dirname, '..', 'dist', 'socrative-color.swift'),
// ]);
// SocrativeColors.build('showbie-color.js', [
//   path.join(__dirname, '..', 'dist', 'socrative-color.js'),
// ]);
