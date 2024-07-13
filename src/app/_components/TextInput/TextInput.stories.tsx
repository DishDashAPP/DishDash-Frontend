import TextInput, { ITextInputProps } from './TextInput'
import { useState } from '@storybook/client-api'

import type { Meta } from '@storybook/react'

const meta = {
  title: 'UI/TextInput',
  component: TextInput,
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>

export default meta

const Render = (args: ITextInputProps) => {
  const [val, setVal] = useState('')
  return (
    <div className="min-w-[400px] flex flex-col items-center">
      <TextInput
        {...args}
        value={val}
        onChange={(val: string) => {
          setVal(val)
        }}
      />
      <div>{val}</div>
    </div>
  )
}

export const Default = { render: Render, args: { label: 'لیبل', id: 'unique' } }

export const Disabled = {
  render: Render,
  args: { label: 'لیبل', disabled: true, id: 'unique' },
}

export const FullWidth = {
  render: Render,
  args: {
    label: 'لیبل',
    id: 'unique',
    fullWidth: true,
  },
}

export const Error = {
  render: Render,
  args: { label: 'لیبل', id: 'unique', error: 'ایمیل صحیح نیست.' },
}

export const IsOptional = {
  render: Render,
  args: {
    label: 'لیبل',
    id: 'unique',
    isOptional: true,
  },
}

export const Required = {
  render: Render,
  args: {
    label: 'لیبل',
    id: 'unique',
    required: true,
    icon: 'info',
  },
}

export const Textarea = {
  render: Render,
  args: {
    label: 'لیبل',
    id: 'unique',
    element: 'textarea',
  },
}
