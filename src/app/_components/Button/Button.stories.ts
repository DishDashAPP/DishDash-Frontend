import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'UI/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        variant: 'primary',
        label: 'باتن',
        className: 'w-[311px]',
    },
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        label: 'باتن',
        className: 'w-[311px]',
    },
}

export const Outline: Story = {
    args: {
        variant: 'outline',
        label: 'باتن',
        className: 'w-[311px]',
    },
}

export const Disabled: Story = {
    args: {
        variant: 'primary',
        label: 'باتن',
        disabled: true,
        className: 'w-[311px]',
    },
}

export const Red: Story = {
    args: {
        variant: 'danger',
        label: 'باتن',
        className: 'w-[311px]',
    },
}
