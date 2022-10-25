import { Trash } from "phosphor-react";
import { tasks } from "../../core/data/tasks.mock";
import styles from "./ListTasks.module.scss";

export function ListTasks() {
  return (
    <div className={styles.listTasks}>
      <header>
        <div>
          <p>Tarefas Criadas</p>
          <span>5</span>
        </div>
        <div>
          <p>Concluídas</p>
          <span>2 de 5</span>
        </div>
      </header>
      <section>
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
