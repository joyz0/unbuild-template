import type { Meta, StoryObj } from '@storybook/html'
import { createFooter, FooterProps } from '../src/components/footer/footer'

const meta = {
  title: 'Example/Footer',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<FooterProps>

export default meta
type Story = StoryObj<FooterProps>

export const LoggedIn: Story = {
  render: (args) => createFooter(args.container).element,
  args: {
    container: document.createElement('div'),
  },
}
