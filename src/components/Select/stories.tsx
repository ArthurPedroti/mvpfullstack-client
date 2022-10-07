import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Select } from '.'

export default {
  title: 'Select',
  component: Select
} as ComponentMeta<typeof Select>

export const Default: ComponentStory<typeof Select> = (args) => (
  <Select {...args} />
)

Default.args = {
  name: 'month',
  label: 'Mês',
  items: [
    {
      value: 0,
      label: 'Janeiro'
    },
    {
      value: 1,
      label: 'Fevereiro'
    }
  ]
}
