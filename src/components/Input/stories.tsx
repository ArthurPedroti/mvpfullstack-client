import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FieldError } from 'react-hook-form'
import { Input } from '.'

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

export const WithoutLabel: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
)

WithoutLabel.args = {
  name: 'name'
}

export const WithError: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
)

WithError.args = {
  name: 'name',
  label: 'Nome',
  error: {
    message: 'Usuário obrigatório'
  } as FieldError
}
