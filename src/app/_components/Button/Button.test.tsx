import { render, screen, fireEvent } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import Button from './Button'

test('renders button with primary variant by default', () => {
    render(<Button label="Primary Button" />)
    const buttonElement = screen.getByRole('button', { name: /Primary Button/i })
    expect(buttonElement).toHaveClass('bg-primary text-white')
})

test('renders button with secondary variant', () => {
    render(<Button label="Secondary Button" variant="secondary" />)
    const buttonElement = screen.getByRole('button', { name: /Secondary Button/i })
    expect(buttonElement).toHaveClass('bg-gray-primary text-white')
})

test('renders button with outline variant', () => {
    render(<Button label="Outline Button" variant="outline" />)
    const buttonElement = screen.getByRole('button', { name: /Outline Button/i })
    expect(buttonElement).toHaveClass('bg-transparent border border-gray-primary text-gray-primary')
})

test('renders button with danger variant', () => {
    render(<Button label="Danger Button" variant="danger" />)
    const buttonElement = screen.getByRole('button', { name: /Danger Button/i })
    expect(buttonElement).toHaveClass('bg-red text-white')
})

test('renders disabled button', () => {
    render(<Button label="Disabled Button" disabled />)
    const buttonElement = screen.getByRole('button', { name: /Disabled Button/i })
    expect(buttonElement).toBeDisabled()
    expect(buttonElement).toHaveClass('bg-gray-disabled text-white cursor-not-allowed')
})

test('renders button with custom class name', () => {
    render(<Button label="Custom Class Button" className="custom-class" />)
    const buttonElement = screen.getByRole('button', { name: /Custom Class Button/i })
    expect(buttonElement).toHaveClass('custom-class')
})

test('renders button with children', () => {
    render(
        <Button>
            <span>Child Element</span>
        </Button>
    )
    const childElement = screen.getByText(/Child Element/i)
    expect(childElement).toBeInTheDocument()
})

test('calls onClick handler when button is clicked', () => {
    const handleClick = vi.fn()
    render(<Button label="Click Me" onClick={handleClick} />)
    const buttonElement = screen.getByRole('button', { name: /Click Me/i })
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
})
