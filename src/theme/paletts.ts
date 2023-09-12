import { DefaultMantineColor, Tuple } from "@mantine/core";

type CustomColors = 'brand'
// Цей тип перелічує всі доступні палети
export type PalettsName = 'my-red' | 'my-blue'

// Цей тип потрібен, якщо палети описані в окремому файлі
// Бо тс не розуміє що там масив із 10 строк завжди
type Palette = Record<CustomColors, Tuple<string, 10>>

export const paletts: Record<PalettsName, Palette> = {
    'my-red': {
        brand: ['#fff5f5', '#ffe3e3', '#ffc9c9', '#ffa8a8', '#ff8787', '#ff6b6b', '#fa5252', '#f03e3e', '#e03131', '#c92a2a']
    },
    'my-blue': {
        brand: ['#e7f5ff', '#d0ebff', '#a5d8ff', '#74c0fc', '#4dabf7', '#339af0', '#228be6', '#1c7ed6', '#1971c2', '#1864ab']
    }
}


// Додаємо кастомні кольори до мантін-теми
// Щоб отримати автокомпліт в пропсі color компонентів
type ExtendedCustomColors = 'brand' | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}
