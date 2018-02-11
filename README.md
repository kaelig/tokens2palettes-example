# tokens2palettes-example

This is an example showing how to transform [Design tokens](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421) into color palettes usable by designers:

### `.sketchpalette`: Sketch (with the [sketch-palettes plugin](https://github.com/andrewfiorillo/sketch-palettes))

[Download here](https://github.com/kaelig/tokens2palettes-example/raw/master/dist/Material%20Design.sketchpalette)

<img src="https://kaelig.github.io/tokens2palettes-example/images/sketchpalette.png" alt="" width="300" />

### `.ase`: Adobe Swatch Exchange (Photoshop, Illustrator…)

[Download here](https://github.com/kaelig/tokens2palettes-example/raw/master/dist/Material%20Design.ase)

<img src="https://kaelig.github.io/tokens2palettes-example/images/adobeswatchexchange.png" alt="" width="300" />

### `.clr`: macOS color palette

[Download here](https://github.com/kaelig/tokens2palettes-example/raw/master/dist/Material%20Design.clr)

<img src="https://kaelig.github.io/tokens2palettes-example/images/macOS-clr.png" alt="" width="300" />

---

## Quick start

This repository uses [Material Design Colors](https://material.io/guidelines/style/color.html#color-color-palette) as an example.
Follow these steps to generate palettes with your own colors:

1. In a terminal, type:

   ```sh
   git clone https://github.com/kaelig/tokens2palettes-example
   ```

   (or clone your own fork of this repository)

2. Open `package.json` and change the value of `palettename` to something else:

   ```json
     "config": {
       "palettename": "Material Design"
     },
   ```

3. Define the color palette in [`./tokens/colors.yml`](https://github.com/kaelig/tokens2palettes-example/blob/master/tokens/colors.yml) following the [design tokens specification](https://github.com/salesforce-ux/theo#spec).

4. Generate the color palettes:

   ```sh
   yarn
   yarn dist
   ```

5. That’s it! Color palettes are in the `./dist` folder.

## How does it work?

1. The script uses [Theo](https://github.com/salesforce-ux/theo) to consume tokens from `./tokens/colors.yml`. Custom formats for `ase` and `sketchpalette` are passed to the [Theo v6 command line interface](https://github.com/salesforce-ux/theo/blob/master/CLI.md), which does the rest and outputs files to `./dist`.
2. Then, `ase2clr` takes the `ase` file and exports it into a `clr` file
3. Finally, the script renames all of the `colors.*` files something more human-friendly that designers will appreciate.
