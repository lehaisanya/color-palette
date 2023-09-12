import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react'

interface ColorPaletteContextValue<TPaletts> {
  palette: TPaletts
  setPalette: (newPalette: TPaletts) => void
}

// Можна не робити цю функцію
// А захардкодить наявні типи
// А так цю функцію можна переіспользовать
export function createColorPaletteContext<TPaletts>() {
  const useColorPaletteState = (defaultPalette: TPaletts) => {
    return useState<TPaletts>(defaultPalette)
  }

  const ColorPaletteContext = createContext<ColorPaletteContextValue<TPaletts>>(
    null!
  )

  const ColorPaletteProvider: FC<
    PropsWithChildren<ColorPaletteContextValue<TPaletts>>
  > = ({ children, palette, setPalette }) => {
    return (
      <ColorPaletteContext.Provider value={{ palette, setPalette }}>
        {children}
      </ColorPaletteContext.Provider>
    )
  }

  const useColorPalette = () => {
    return useContext(ColorPaletteContext)
  }

  return {
    ColorPaletteContext,
    ColorPaletteProvider,
    useColorPaletteState,
    useColorPalette,
  }
}
