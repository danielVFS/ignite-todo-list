import { PlusCircle } from "phosphor-react";
import styles from "./NewTask.module.scss";

export function NewTask() {
  return (
    <div className={styles.newTask}>
      <input placeholder="Adicionar uma nova tarefa" />
      <button>
        Criar <PlusCircle size={22} />
      </button>
    </div>
  );
}
