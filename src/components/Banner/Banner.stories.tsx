import type { Meta, StoryObj } from '@storybook/react-vite';
import Banner from './Banner';
import { expect } from 'storybook/test';

const items = [
  { id: 'a', title: 'Lorem ipsum', subtitle: 'dolor sit amet', text: 'Lorem ipsum dolor', accent: '#13c2c2' },
  { id: 'b', title: 'Lorem ipsum', subtitle: 'dolor sit amet', text: 'Lorem ipsum dolor', accent: '#6f9eff' },
  { id: 'c', title: 'Lorem ipsum', subtitle: 'dolor sit amet', text: 'Lorem ipsum dolor', accent: '#9b8cff' },
];

const meta = {
  component: Banner,
  title: 'Banner',
  tags: ['autodocs'],
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    items,
    orientation: 'horizontal',
  },
  
  play: async ({ canvasElement }) => {
      const canvas = canvasElement;

      expect(canvas.textContent).toBeTruthy();
  },

};

export const Vertical: Story = {
  args: {
    items,
    orientation: 'vertical',
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;

    expect(canvas.textContent).toBeTruthy();
  },
};
