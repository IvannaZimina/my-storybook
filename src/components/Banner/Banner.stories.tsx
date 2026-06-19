import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import Banner from './Banner';

const items = [
  { id: 'a', title: 'Lorem ipsum', subtitle: 'dolor sit amet', accent: '#13c2c2' },
  { id: 'b', title: 'Lorem ipsum', subtitle: 'dolor sit amet', accent: '#6f9eff' },
  { id: 'c', title: 'Lorem ipsum', subtitle: 'dolor sit amet', accent: '#9b8cff' },
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
};

export const Vertical: Story = {
  args: {
    items,
    orientation: 'vertical',
  },
};
