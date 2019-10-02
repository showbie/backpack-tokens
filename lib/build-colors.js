const fs = require('fs');
const path = require('path');

const chroma = require('chroma-js');
const Handlebars = require('handlebars');

const { capitalize, swiftVarName } = require('./utils/string');

/**
 * Get floating-point values for each colour channel and return a
 * string for `UIColor()` in Swift.
 *
 * @param {String} hex
 * @returns {String}
 */
function rgbFloat(hex) {
  let vals = chroma(hex).gl();
  return `red: ${vals[0]}, green: ${vals[1]}, blue: ${vals[2]}, alpha: ${
    vals[3]
  }`;
}

Handlebars.registerHelper('capitalize', (a) => capitalize(a));
Handlebars.registerHelper('rgbfloat', (a) => rgbFloat(a));
Handlebars.registerHelper('swiftvar', (a, b, c) => swiftVarName(a, b, c));

class BaseBuilder {
  constructor(tokens, version) {
    this.tokens = tokens;
    this.version = version;
  }

  build(file, outputPaths, extraData = {}) {}
}

class ColorBuilder extends BaseBuilder {
  constructor(
    tokens,
    version,
    templatesDir = path.join(__dirname, '..', 'src', 'templates')
  ) {
    super(...arguments);

    let colors = tokens.colors;

    this.templatesDir = templatesDir;
    this.colorsArray = Object.keys(colors)
      .filter((name) => typeof colors[name] !== 'string')
      .map((name) => {
        let scale = colors[name];

        Object.keys(scale).forEach(function(key) {
          if (scale[key] === '') {
            delete scale[key];
          }
        });

        return { name, scale, prefix: this.tokens.prefix };
      }).filter(({scale}) => Object.keys(scale).length);
  }

  build(file, outputPaths, extraData = {}) {
    let template = fs.readFileSync(
      path.join(this.templatesDir, `${file}.hbs`),
      { encoding: 'utf8' }
    );
    let compile = Handlebars.compile(template);

    console.log(this.tokens.prefix)

    let compiled = compile({
      prefix: this.tokens.prefix,
      version: this.version,
      tokens: this.tokens,
      colors: this.colorsArray,
      filter: extraData.filter ? extraData.filter : (color) => color,
    });

    outputPaths.forEach((outputPath) => {
      if (!fs.existsSync(path.dirname(outputPath))) {
        fs.mkdirSync(path.dirname(outputPath));
      }

      fs.writeFileSync(path.join(outputPath), compiled, { flag: 'w' });
    });
  }
}

module.exports = ColorBuilder;
