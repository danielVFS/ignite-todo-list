import { PlusCircle } from "phosphor-react";
import styles from "./Button.module.scss";

export function Button() {
  return (
    <button className={styles.button}>
      Criar <PlusCircle size={22} />
    </button>
  );
}
