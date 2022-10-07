import { render, screen } from '@testing-library/react'

import { Select } from '.'

const mockItems = [
  {
    value: 0,
    label: 'Janeiro'
  },
  {
    value: 1,
    label: 'Fevereiro'
  }
]

describe('<Select />', () => {
  it('should render the label', () => {
    render(<Select name="name" label="Name" items={mockItems} />)

    expect(screen.getByLabelText('Name')).toBeInTheDocument()
  })

  it('should render an input with the name attribute correctly', () => {
    render(<Select name="address" label="Address" items={mockItems} />)

    expect(screen.getByRole('combobox', { name: 'Address' })).toHaveAttribute(
      'name',
      'address'
    )
  })

  it('should render the select options', () => {
    render(<Select name="address" label="Address" items={mockItems} />)

    expect(screen.getByRole('option', { name: 'Janeiro' })).toHaveAttribute(
      'value',
      '0'
    )
    expect(screen.getByRole('option', { name: 'Fevereiro' })).toHaveAttribute(
      'value',
      '1'
    )
  })

  it('should render an input without a label', () => {
    render(<Select name="name" items={mockItems} />)

    expect(screen.queryByLabelText('')).not.toBeInTheDocument()
  })
})
