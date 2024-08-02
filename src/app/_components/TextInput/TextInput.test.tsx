import { render, screen, fireEvent } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import TextInput from './TextInput'

test('renders TextInput component with label and id', () => {
    render(<TextInput label="Username" id="username" />)
    const labelElement = screen.getByLabelText(/Username/i)
    expect(labelElement).toBeInTheDocument()
})

test('handles change events', () => {
    const handleChange = vi.fn()
    render(<TextInput label="Username" id="username" onChange={handleChange} />)
    const inputElement = screen.getByLabelText(/Username/i)
    fireEvent.change(inputElement, { target: { value: 'new value' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith('new value', expect.any(Object))
})

test('displays error message', () => {
    render(<TextInput label="Username" id="username" error="This field is required" />)
    const errorElement = screen.getByText(/This field is required/i)
    expect(errorElement).toBeInTheDocument()
})

test('renders with fullWidth class when fullWidth prop is true', () => {
    render(<TextInput label="Username" id="username" fullWidth />)
    const inputElement = screen.getByLabelText(/Username/i)
    expect(inputElement).toHaveClass('w-full')
})

test('displays "optional" text when isOptional prop is true', () => {
    render(<TextInput label="Username" id="username" isOptional />)
    const labelElement = screen.getByText(/اختیاری/i)
    expect(labelElement).toBeInTheDocument()
})

test('renders with disabled state', () => {
    render(<TextInput label="Username" id="username" disabled />)
    const inputElement = screen.getByLabelText(/Username/i)
    expect(inputElement).toBeDisabled()
})

test('renders textarea element when element prop is "textarea"', () => {
    render(<TextInput label="Description" id="description" element="textarea" />)
    const textareaElement = screen.getByLabelText(/Description/i)
    expect(textareaElement.tagName).toBe('TEXTAREA')
})

test('renders with correct type', () => {
    render(<TextInput label="Password" id="password" type="password" />)
    const inputElement = screen.getByLabelText(/Password/i)
    expect(inputElement).toHaveAttribute('type', 'password')
})
