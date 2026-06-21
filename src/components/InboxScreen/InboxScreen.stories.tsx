import type { Meta, StoryObj } from '@storybook/react-vite';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import InboxScreen from './InboxScreen';
import { rootReducer, setError, setTasks } from '../../lib/store';

const meta = {
  component: InboxScreen,
  title: 'InboxScreen',
  decorators: [
    (Story) => (
      <div style={{ margin: '2rem' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof InboxScreen>;

export default meta;
type Story = StoryObj<typeof meta>;


// ✅ Default
export const Default: Story = {
  render: () => {
    const store = configureStore({
      reducer: rootReducer,
    });

    return (
      <Provider store={store}>
        <InboxScreen />
      </Provider>
    );
  },
};


// ✅ Error (ТО, ЧТО ТЕБЕ НУЖНО)
export const Error: Story = {
  render: () => {
    const store = configureStore({
      reducer: rootReducer,
    });

    store.dispatch(setTasks([]));
    store.dispatch(setError('Something went wrong'));

    return (
      <Provider store={store}>
        <InboxScreen skipFetch />
      </Provider>
    );
  },
};