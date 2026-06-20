import type { Meta, StoryObj } from '@storybook/react-vite';
import { Provider } from 'react-redux';
import InboxScreen from './InboxScreen';
import store, { setError, setTasks } from '../../lib/store';
import { expect } from 'storybook/test';

const meta = {
  component: InboxScreen,
  title: 'InboxScreen',
  decorators: [
    (Story) => (
      <div style={{ margin: '2rem' }}>
        <Provider store={store}>
          <Story />
        </Provider>
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof InboxScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  render: () => {
    // set error state in store before rendering and ensure no tasks
    store.dispatch(setTasks([]));
    store.dispatch(setError('Something went wrong'));
    return (
      <div style={{ margin: '2rem' }}>
        <Provider store={store}>
          <InboxScreen skipFetch />
        </Provider>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;

    expect(canvas.textContent).toBeTruthy();
  },
};
