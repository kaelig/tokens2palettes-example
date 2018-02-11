const theo = require("theo");
const sketchpalette = require("./formats/sketchpalette.js");
const ase = require("./formats/ase.js");

module.exports = theo => {
  theo.registerFormat("sketchpalette", sketchpalette);
  theo.registerFormat("ase", ase);
};
