import { render, screen } from '@testing-library/react'

import Select from '.'

describe('<Select />', () => {
  it('should render the heading', () => {
    render(<Select />)

    expect(screen.getByRole('heading', { name: /Select/i })).toBeInTheDocument()
  })
})
