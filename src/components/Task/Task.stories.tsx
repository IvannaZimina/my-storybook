import type { Meta, StoryObj } from '@storybook/react-vite';
import type { TaskData } from '../../types';
import { useState } from 'react';
import { fn } from 'storybook/test';
import Task from './Task';


export const ActionsData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

const meta = {
  title: 'Task',
  component: Task,
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
} satisfies Meta<typeof Task>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
  
};

export const Pinned: Story = {
  args: {
    task: {
      ...Default.args.task!,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived: Story = {
  args: {
    task: {
      ...Default.args.task!,
      state: 'TASK_ARCHIVED',
    },
  },
};


export const Interactive: Story = {
  args: {
    ...ActionsData,
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },

  render: () => {
    const [task, setTask] = useState<TaskData>({
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    });

    return (
      <Task
        task={task}
        onArchiveTask={() =>
          setTask({
            ...task,
            state:
              task.state === 'TASK_ARCHIVED'
                ? 'TASK_INBOX'
                : 'TASK_ARCHIVED',
          })
        }
        onPinTask={() =>
          setTask({ ...task, state: 'TASK_PINNED' })
        }
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive: visualization of the task checkbox — demonstrates appearance and states (hover, checked, pinned). Intended for visual testing and layout verification, not for full business logic.',
      },
    },
  },
};
