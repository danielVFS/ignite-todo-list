import Logo from "../../assets/Logo.svg";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo da aplicação" />
    </header>
  );
}
