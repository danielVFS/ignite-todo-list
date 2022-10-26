import { tasks } from "../../core/data/tasks.mock";
import { Task } from "../Task";
import styles from "./ListTasks.module.scss";

export function ListTasks() {
  return (
    <div className={styles.listTasks}>
      <header className={styles.header}>
        <div>
          <p className={styles.createdTasks}>Tarefas Criadas</p>
          <span className={styles.badge}>5</span>
        </div>
        <div>
          <p className={styles.concludedTasks}>Concluídas</p>
          <span className={styles.badge}>2 de 5</span>
        </div>
      </header>
      <section className={styles.tasks}>
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              isCompleted={task.isCompleted}
              text={task.text}
            />
          );
        })}
      </section>
    </div>
  );
}
