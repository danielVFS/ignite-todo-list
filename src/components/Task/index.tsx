import { Trash } from "phosphor-react";
import styles from "./Task.module.scss";

interface TaskProps {
  id: string;
  isCompleted: boolean;
  text: string;
  onCompletedTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({
  id,
  isCompleted,
  text,
  onCompletedTask,
  onDeleteTask,
}: TaskProps) {
  const handleCompleteTask = (): void => {
    onCompletedTask(id);
  };

  const handleDeleteTask = (): void => {
    onDeleteTask(id);
  };

  return (
    <div className={`${styles.task} ${isCompleted ? styles.completed : ""}`}>
      <div className={styles.info}>
        <input
          type="checkbox"
          name="readTask"
          checked={isCompleted}
          onChange={handleCompleteTask}
        />
        <p>{text}</p>
      </div>
      <Trash size={16} weight="bold" onClick={handleDeleteTask} />
    </div>
  );
}
