import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LoginForm } from '.'

export default {
  title: 'LoginForm',
  component: LoginForm
} as ComponentMeta<typeof LoginForm>

export const Default: ComponentStory<typeof LoginForm> = () => <LoginForm />
