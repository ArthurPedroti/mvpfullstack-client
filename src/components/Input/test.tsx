import { render, screen } from '@testing-library/react'

import Input from '.'

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
})
