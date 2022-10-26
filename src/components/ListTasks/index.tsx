import { Trash } from "phosphor-react";
import { tasks } from "../../core/data/tasks.mock";
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
            <div key={task.id}>
              <div>
                <input
                  type="checkbox"
                  name="readTask"
                  checked={task.isCompleted}
                />
                <p>{task.text}</p>
              </div>
              <Trash />
            </div>
          );
        })}
      </section>
    </div>
  );
}
