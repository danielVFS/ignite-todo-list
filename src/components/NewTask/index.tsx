import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { Task } from "../../core/models/Task";
import styles from "./NewTask.module.scss";

interface NewTaskProps {
  onCreateTask: (task: Task) => void;
}

export function NewTask({ onCreateTask }: NewTaskProps) {
  const [newTaskText, setNewTaskText] = useState("");

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault();

    const newTask: Task = { id: uuid(), text: newTaskText, isCompleted: false };
    onCreateTask(newTask);

    setNewTaskText("");
  };

  const handleNewTaskTextInvalid = (
    event: InvalidEvent<HTMLInputElement>
  ): void => {
    event.target.setCustomValidity("Este campo é obrigatório!");
  };

  const handleNewTaskTextChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  };

  return (
    <form className={styles.newTask} onSubmit={handleCreateNewTask}>
      <input
        placeholder="Adicionar uma nova tarefa"
        name="newTask"
        value={newTaskText}
        required
        onInvalid={handleNewTaskTextInvalid}
        onChange={handleNewTaskTextChange}
      />
      <button type="submit">
        Criar <PlusCircle size={22} />
      </button>
    </form>
  );
}
