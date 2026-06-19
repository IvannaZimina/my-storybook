import React, { useEffect } from 'react';
import type { RootState, AppDispatch } from '../../lib/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, updateTaskState } from '../../lib/store';
import TaskList from '../TaskList/TaskList';
import './InboxScreen.css';

type InboxProps = {
  skipFetch?: boolean;
};

export default function InboxScreen({ skipFetch = false }: InboxProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { error, tasks, status } = useSelector((state: RootState) => state.taskbox);

  useEffect(() => {
    if (!skipFetch) dispatch(fetchTasks());
  }, [dispatch, skipFetch]);

  if (error) {
    return (
      <div className="inbox-screen">
        <div className="container error">
          <div className="error-illustration" aria-hidden>
            <span className="sad">☹</span>
          </div>
          <h2 className="error-title">Oh no!</h2>
          <div className="error-sub">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className="inbox-screen">
      <div className="container">
        <h2 className="screen-title">Taskbox</h2>
        <TaskList
          loading={status === 'loading'}
          tasks={tasks}
          onPinTask={(id: string) => dispatch(updateTaskState({ id, newTaskState: 'TASK_PINNED' }))}
          onArchiveTask={(id: string) =>
            dispatch(
              updateTaskState({ id, newTaskState: 'TASK_ARCHIVED' })
            )
          }
        />
      </div>
    </div>
  );
}
