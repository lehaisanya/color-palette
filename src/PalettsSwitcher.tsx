import { Button, Group } from '@mantine/core'
import { useColorPalette } from './colorPalette.context'

export const PalettsSwitcher = () => {
  const { setPalette } = useColorPalette()

  return (
    <Group>
      <Button color="brand" onClick={() => setPalette('light-blue')}>
        Light Blue
      </Button>
      <Button color="brand" onClick={() => setPalette('light-red')}>
        Light Red
      </Button>

      <Button color="brand" onClick={() => setPalette('dark-blue')}>
        Dark Blue
      </Button>
      <Button color="brand" onClick={() => setPalette('dark-red')}>
        Dark Red
      </Button>
    </Group>
  )
}
