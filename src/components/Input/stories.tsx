import { ComponentStory, ComponentMeta } from '@storybook/react'
import Input from '.'

export default {
  title: 'Input',
  component: Input
} as ComponentMeta<typeof Input>

export const Default: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
)

Default.args = {
  name: 'name',
  label: 'Nome'
}
