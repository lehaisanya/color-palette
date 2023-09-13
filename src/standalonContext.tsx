import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react'
import { PalettesName } from './theme/palettes'

export const useColorPaletteState = (defaultPalette: PalettesName) => {
  return useState<PalettesName>(defaultPalette)
}

interface ColorPaletteContextValue {
  palette: PalettesName
  setPalette: (newPalette: PalettesName) => void
}

export const ColorPaletteContext = createContext<ColorPaletteContextValue>(
  null!
)

export const ColorPaletteProvider: FC<
  PropsWithChildren<ColorPaletteContextValue>
> = ({ children, palette, setPalette }) => {
  return (
    <ColorPaletteContext.Provider value={{ palette, setPalette }}>
      {children}
    </ColorPaletteContext.Provider>
  )
}

export const useColorPalette = () => {
  return useContext(ColorPaletteContext)
}
