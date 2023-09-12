import { PalettsName } from "./theme/paletts";
import { createColorPaletteContext } from "./createColorPaletteContext";

export const {
    ColorPaletteContext,
    ColorPaletteProvider,
    useColorPaletteState,
    useColorPalette
} = createColorPaletteContext<PalettsName>()
