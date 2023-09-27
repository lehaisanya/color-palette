import React from 'react'
import {
  Button,
  Center,
  Checkbox,
  MantineProvider,
  Paper,
  Stack,
  Text,
} from '@mantine/core'
import { palettes } from './theme/palettes'
import {
  ColorPaletteProvider,
  useColorPaletteState,
} from './colorPalette.context'
import { PalettsSwitcher } from './PalettsSwitcher'

export const App = () => {
  // Стейт для вибраної палети
  const [palette, setPalette] = useColorPaletteState('light-blue')

  // Провайдер потрібен для того, щоб прокинути setPalette,
  // якщо нищестоящі компоненти будуть міняти палету
  return (
    <ColorPaletteProvider palette={palette} setPalette={setPalette}>
      <MantineProvider
        // Передаєм колірну схему вибраної палети
        forceColorScheme={palettes[palette].colorScheme}
        theme={{
          // Передаєм кольори вибраної палети
          colors: palettes[palette].colors,
        }}
      >
        <Center h="100vh">
          <Paper shadow="xs" p="md">
            <Stack>
              {/* Використовуєм кастомний колір */}
              <Button color="brand">Button</Button>
              <Checkbox color="brand" label="Checkbox" checked />
              <Text c="brand">Text</Text>

              <PalettsSwitcher />
            </Stack>
          </Paper>
        </Center>
      </MantineProvider>
    </ColorPaletteProvider>
  )
}
