import type { Meta, StoryObj } from '@storybook/react-vite';
import ProfileCard from './ProfileCard';
import { expect } from 'storybook/test';

const meta = {
  title: 'Card/Profile',
  component: ProfileCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Keira Herzog",
    role: "Product Designer",
    bio: "Harum ipsa repellat...",
    image: "/assets/avif-test-image.avif",
  },
    play: async ({ canvasElement }) => {
      const canvas = canvasElement;

      expect(canvas.textContent).toBeTruthy();
  },

};
