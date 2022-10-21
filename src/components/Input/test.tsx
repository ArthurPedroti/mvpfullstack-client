import { render, screen } from '@testing-library/react'
import { FieldError } from 'react-hook-form'

import { Input } from '.'

const error = {
  message: 'Usuário obrigatório'
} as FieldError

describe('<Input />', () => {
  it('should render the label', () => {
    render(<Input name="name" label="Name" />)

    expect(screen.getByLabelText('Name')).toBeInTheDocument()
  })

  it('should render an input with the name attribute correctly', () => {
    render(<Input name="address" label="Address" />)

    expect(screen.getByRole('textbox', { name: 'Address' })).toHaveAttribute(
      'name',
      'address'
    )
  })

  it('should render an input without a label', () => {
    render(<Input name="name" />)

    expect(screen.queryByLabelText('')).not.toBeInTheDocument()
  })

  it('should render an input with an error', () => {
    render(<Input name="name" error={error} />)

    expect(screen.getByText('Usuário obrigatório')).toBeInTheDocument()
  })
})
