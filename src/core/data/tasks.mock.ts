import { v4 as uuid } from "uuid";
import { Task } from "../models/Task";

export const tasks: Task[] = [
  {
    id: uuid(),
    text: "Formulário de cadastro de usuários",
    isCompleted: false,
  },
  {
    id: uuid(),
    text: "Arrumar bug nas fontes",
    isCompleted: true,
  },
  {
    id: uuid(),
    text: "Corrigir header da aplicação",
    isCompleted: true,
  },
  {
    id: uuid(),
    text: "Formulário de compras",
    isCompleted: false,
  },
  {
    id: uuid(),
    text: "Funcionalidade de logout",
    isCompleted: false,
  },
];
