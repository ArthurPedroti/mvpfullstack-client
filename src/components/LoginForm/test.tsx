import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { LoginForm } from '.'

describe('<LoginForm />', () => {
  it('should be able to login', async () => {
    const signIn = jest.fn()
    render(<LoginForm signIn={signIn} />)

    await userEvent.type(screen.getByLabelText('Usuário'), 'John Doe')
    await userEvent.type(screen.getByLabelText('Senha'), '123456')

    await userEvent.click(screen.getByText('Entrar'))

    expect(signIn).toBeCalledWith({
      username: 'John Doe',
      password: '123456'
    })
  })
})
