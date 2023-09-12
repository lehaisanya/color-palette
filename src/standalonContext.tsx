import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react'
import { PalettsName } from './theme/paletts'

export const useColorPaletteState = (defaultPalette: PalettsName) => {
  return useState<PalettsName>(defaultPalette)
}

interface ColorPaletteContextValue {
  palette: PalettsName
  setPalette: (newPalette: PalettsName) => void
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
