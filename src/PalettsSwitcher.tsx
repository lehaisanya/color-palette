import { Button, Group } from '@mantine/core'
import { useColorPalette } from './colorPalette.context'

export const PalettsSwitcher = () => {
  const { setPalette } = useColorPalette()

  return (
    <Group>
      <Button color="brand" onClick={() => setPalette('my-blue')}>
        Blue
      </Button>
      <Button color="brand" onClick={() => setPalette('my-red')}>
        Red
      </Button>
    </Group>
  )
}
