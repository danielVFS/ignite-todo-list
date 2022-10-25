import { Header } from "./components/Header";
import { ListTasks } from "./components/ListTasks";
import { NewTask } from "./components/NewTask";
import "./styles/global.scss";

export function App() {
  return (
    <>
      <Header />
      <NewTask />
      <ListTasks />
    </>
  );
}
