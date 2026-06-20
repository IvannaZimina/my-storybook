import type { Meta, StoryObj } from '@storybook/react-vite';
import ContentCard from './ContentCard';
import { expect } from 'storybook/test';

const meta = {
  title: 'Card/Content',
  component: ContentCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ContentCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Product Marketing Developer",
    excerpt: "Magnam incidunt...",
    image: "/assets/avif-test-image.avif",
  },

  
play: async ({ canvasElement }) => {
    const canvas = canvasElement;

    expect(canvas.textContent).toContain("Product Marketing Developer");
  },

};