import { ListPlus } from "phosphor-react";
import { Task as TaskModel } from "../../core/models/Task";
import { Task } from "../Task";
import styles from "./ListTasks.module.scss";

interface ListTasksProps {
  tasks: TaskModel[];
  onCompleteTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function ListTasks({
  tasks,
  onCompleteTask,
  onDeleteTask,
}: ListTasksProps) {
  const completedTasksCount = tasks.reduce(
    (prev, current) => (current.isCompleted ? prev + 1 : prev),
    0
  );

  return (
    <div className={styles.listTasks}>
      <header className={styles.header}>
        <div>
          <p className={styles.createdTasks}>Tarefas Criadas</p>
          <span className={styles.badge}>{tasks.length}</span>
        </div>
        <div>
          <p className={styles.concludedTasks}>Concluídas</p>
          <span className={styles.badge}>
            {completedTasksCount} de {tasks.length}
          </span>
        </div>
      </header>
      {tasks.length > 0 ? (
        <section className={styles.tasks}>
          {tasks
            .sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted))
            .map((task) => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  isCompleted={task.isCompleted}
                  text={task.text}
                  onCompletedTask={onCompleteTask}
                  onDeleteTask={onDeleteTask}
                />
              );
            })}
        </section>
      ) : (
        <div className={styles.emptyList}>
          <ListPlus size={56} />
          <div className={styles.info}>
            <h4 className={styles.title}>
              Você ainda não tem tarefas cadastradas
            </h4>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </div>
      )}
    </div>
  );
}
