import { PalettesName } from './theme/palettes'
import { createColorPaletteContext } from './createColorPaletteContext'

export const {
  ColorPaletteContext,
  ColorPaletteProvider,
  useColorPaletteState,
  useColorPalette,
} = createColorPaletteContext<PalettesName>()
