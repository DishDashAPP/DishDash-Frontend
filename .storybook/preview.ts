import type { Preview } from '@storybook/react'
import '../src/app/_styles/tailwind.css'
// import '../src/app/_assets/FontIcon/style.css'
import './main.css'

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    tags: ['autodocs'],
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
