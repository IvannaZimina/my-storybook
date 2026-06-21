import type { Meta, StoryObj } from '@storybook/react-vite';
import type { TaskData } from '../../types';
import { useState, useEffect } from 'react';
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

// ✅ Default (обычная таска)
export const Default: Story = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      isArchived: false,
      isPinned: false,
    },
  },
};

// ✅ Pinned (только звездочка)
export const Pinned: Story = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      isArchived: false,
      isPinned: true,
    },
  },
};

// ✅ Archived (только выполнена)
export const Archived: Story = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      isArchived: true,
      isPinned: false,
    },
  },
};

// ✅ Раньше этого не могло быть: И архивная, И пиннутая одновременно!
export const PinnedAndArchived: Story = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      isArchived: true,
      isPinned: true,
    },
  },
};

// ✅ Interactive (теперь полностью раздельная логика)
export const Interactive: Story = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      isArchived: false,
      isPinned: false,
    },
  },
  render: (args) => {
    const [task, setTask] = useState<TaskData>(args.task);

    useEffect(() => {
      setTask(args.task);
    }, [args.task]);

    return (
      <Task
        {...args}
        task={task}
        // Инвертируем только флаг архива
        onArchiveTask={() =>
          setTask((prev) => ({ ...prev, isArchived: !prev.isArchived }))
        }
        // Инвертируем только флаг пина
        onPinTask={() =>
          setTask((prev) => ({ ...prev, isPinned: !prev.isPinned }))
        }
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive: independent clickable checkbox and pin state.',
      },
    },
  },
};