import type { TaskData } from '../../types';
import './Task.css';

type TaskProps = {
  /** Composition of the task */
  task: TaskData;
  /** Event to change the task to archived */
  onArchiveTask: (id: string) => void;
  /** Event to change the task to pinned */
  onPinTask: (id: string) => void;
};

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}: TaskProps) {
  return (
    <div className={`list-item ${state}`}>
      <label
        htmlFor={`archiveTask-${id}`}
        aria-label={`archiveTask-${id}`}
        className="checkbox"
      >
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`archiveTask-${id}`}
          checked={state === "TASK_ARCHIVED"}
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>

      <label htmlFor={`title-${id}`} aria-label={title} className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          id={`title-${id}`}
          placeholder="Input title"
        />
      </label>
      <button
        className={`pin-button ${state === 'TASK_PINNED' ? 'is-pinned' : ''} ${state === 'TASK_ARCHIVED' ? 'is-archived' : ''}`}
        onClick={() => onPinTask(id)}
        id={`pinTask-${id}`}
        aria-label={`pinTask-${id}`}
        aria-pressed={state === 'TASK_PINNED'}
        key={`pinTask-${id}`}
      >
        <span className={`icon-star`} />
      </button>
    </div>
  );
}