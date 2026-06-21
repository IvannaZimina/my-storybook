import type { TaskData } from '../../types';
import './Task.css';

type TaskProps = {
  task: TaskData;
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
};

export default function Task({
  task: { id, title, isArchived, isPinned },
  onArchiveTask,
  onPinTask,
}: TaskProps) {
  return (
    <div className={`list-item ${isArchived ? 'TASK_ARCHIVED' : ''} ${isPinned ? 'TASK_PINNED' : ''}`}>
      
      {/* ✅ КАСТОМНЫЙ ЧЕКБОКС */}
      <label className="checkbox" htmlFor={`archiveTask-${id}`}>
        <input
          type="checkbox"
          id={`archiveTask-${id}`}
          checked={isArchived}
          onChange={() => onArchiveTask(id)}
          aria-label={`archiveTask-${id}: ${title}`}
        />
        <span className="checkbox-custom" />
      </label>

      {/* ✅ ТЕКСТ */}
      <label htmlFor={`title-${id}`} className="task_title">
        <input
          type="text"
          value={title}
          readOnly
          id={`title-${id}`}
          aria-label={`title-${id}`}
        />
      </label>

      {/* ✅ PIN */}
      <button
        className={`pin-button ${isPinned ? 'is-pinned' : ''} ${isArchived ? 'is-archived' : ''}`}
        onClick={() => onPinTask(id)}
        aria-label={`pinTask-${id}`}
        aria-pressed={isPinned}
      >
        <span className="icon-star" />
      </button>
    </div>
  );
}