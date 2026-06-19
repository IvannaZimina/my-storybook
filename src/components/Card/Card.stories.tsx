import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import ProfileCard from './ProfileCard';
import ContentCard from './ContentCard';

const meta = {
  title: 'Card',
  component: ProfileCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Profile: Story = {
  render: () => (
    <div style={{ padding: 20 }}>
      <ProfileCard
        name="Keira Herzog"
        role="Product Designer"
        bio="Harum ipsa repellat. Quo fuga et aspernatur dicta. Pariatur sit enim explicabo maiores culpa."
        image="/assets/avif-test-image.avif"
      />
    </div>
  ),
};

export const Content: Story = {
  render: () => (
    <div style={{ padding: 20 }}>
      <ContentCard
        title="Product Marketing Developer"
        excerpt="Magnam incidunt et id. Aut fugiat id odio provident aspernatur culpa saepe. Aut nihil modi veniam."
        image="/assets/avif-test-image.avif"
      />
    </div>
  ),
};
