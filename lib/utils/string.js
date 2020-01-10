function capitalize(text) {
  if (typeof text !== 'string') return '';
  return text[0].toUpperCase() + text.slice(1);
}

function swiftVarName(prefix, name, label) {
  let str = `${prefix}${capitalize(name)}${capitalize(label)}`;

  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (ltr, idx) =>
      idx === 0 ? ltr.toLowerCase() : ltr.toUpperCase()
    )
    .replace(/\s+/g, '')
    .replace(/-+/g, '_');
}
module.exports = {
  capitalize,
  swiftVarName,
};
