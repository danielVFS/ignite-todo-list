import { useState } from "react";
import { Header } from "./components/Header";
import { ListTasks } from "./components/ListTasks";
import { NewTask } from "./components/NewTask";
import { tasks as tasksMock } from "./core/data/tasks.mock";
import { Task } from "./core/models/Task";
import "./styles/global.scss";

export function App() {
  const [tasks, setTasks] = useState<Task[]>(tasksMock);

  const handleCreateTask = (task: Task): void => {
    setTasks([...tasks, task]);
  };

  const handleCompleteTask = (id: string): void => {
    const updatedTasks = tasks.filter((task) =>
      task.id === id ? (task.isCompleted = true) : task
    );

    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id: string): void => {
    const tasksWithouDeletedOne = tasks.filter((task) => task.id !== id);

    setTasks(tasksWithouDeletedOne);
  };

  return (
    <>
      <Header />
      <NewTask onCreateTask={handleCreateTask} />
      <ListTasks
        tasks={tasks}
        onCompleteTask={handleCompleteTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
