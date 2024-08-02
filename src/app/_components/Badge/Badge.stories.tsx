import type { Meta } from '@storybook/react'

import Badge from './Badge'

const meta = {
    title: 'UI/Badge',
    component: Badge,
    tags: ['autodocs'],
} satisfies Meta<typeof Badge>

export default meta

export const Simple = {
    args: {},
}

export const SimpleBordered = {
    args: {
        bordered: true,
    },
}
export const Text = {
    args: {
        text: 'جدید',
    },
}

export const TextBordered = {
    args: {
        text: 'جدید',
        bordered: true,
    },
}
export const Number = {
    args: {
        text: '1',
    },
}

export const NumberBordered = {
    args: {
        text: '+99',
        bordered: true,
    },
}
