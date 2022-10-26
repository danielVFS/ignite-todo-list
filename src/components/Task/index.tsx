import { Trash } from "phosphor-react";
import styles from "./Task.module.scss";

interface TaskProps {
  isCompleted: boolean;
  text: string;
}

export function Task({ isCompleted, text }: TaskProps) {
  return (
    <div className={`${styles.task} ${isCompleted ? styles.completed : ""}`}>
      <div className={styles.info}>
        <input type="checkbox" name="readTask" checked={isCompleted} />
        <p>{text}</p>
      </div>
      <Trash size={16} weight="bold" />
    </div>
  );
}
