const tinycolor2 = require("tinycolor2");
const ase = require("ase-utils");

const convertToRGBArray = input => {
  const { r, g, b } = tinycolor2(input).toRgb();
  return [r / 255, g / 255, b / 255];
};

module.exports = result =>
  ase.encode({
    version: "1.0",
    groups: [],
    colors: result.toJS().props.map(({ name, value }) => ({
      name,
      model: "RGB",
      type: "global",
      color: convertToRGBArray(value)
    }))
  });
