var _ = require('lodash');

function getAbstract(schema) {
  const unImplemented = {};
  const defs = _.keys(schema.definitions);
  const props = _.concat(
    _.keys(schema.properties),
    _.keys(schema.allOf),
    _.keys(schema.oneOf),
    _.keys(schema.anyOf));

  const unused = _.difference(defs, props);
  for (let u of unused) {
    unImplemented[u] = _.clone(schema.definitions[u]);
  }
  return unImplemented;
}
module.exports = {
  getAbstract: getAbstract
};
