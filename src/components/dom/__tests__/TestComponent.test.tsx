import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { TestComponent } from '../TestComponent'
import React from 'react'

test('renders the text prop correctly', () => {
  const { getByText } = render(<TestComponent text='Hello, world!' />)
  const textElement = getByText(/Hello, world!/i)
  expect(textElement).toBeInTheDocument()
})
