import type { TaskData } from '../../types';
import React from 'react';
import Task from '../Task/Task';
import './TaskList.css';

type TaskListProps = {
  loading?: boolean;
  tasks: TaskData[];
  onPinTask: (id: string) => void;
  onArchiveTask: (id: string) => void;
};

export default function TaskList({
  loading = false,
  tasks,
  onPinTask,
  onArchiveTask,
}: TaskListProps) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  const LoadingRow = (
    <div className="list-item loading-row">
      <div className="checkbox-placeholder" />
      <div className="title-placeholder">
        <div className="line short" />
        <div className="line long" />
      </div>
      <div className="pin-placeholder" />
    </div>
  );

  if (loading) {
    return (
      <div className="task-list">
        <div className="list-items">
          {LoadingRow}
          {LoadingRow}
          {LoadingRow}
          {LoadingRow}
          {LoadingRow}
          {LoadingRow}
        </div>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="task-list">
        <div className="list-items empty">
          <div className="empty-state">
            <div className="empty-check">✓</div>
            <div className="empty-title">You have no tasks</div>
            <div className="empty-sub">Sit back and relax</div>
          </div>
        </div>
      </div>
    );
  }

  const tasksInOrder = [
    ...tasks.filter((t) => t.state === 'TASK_PINNED'),
    ...tasks.filter((t) => t.state !== 'TASK_PINNED'),
  ];

  return (
    <div className="task-list">
      <div className="list-items">
        {tasksInOrder.map((task) => (
          <Task key={task.id} task={task} {...events} />
        ))}
      </div>
    </div>
  );
}
