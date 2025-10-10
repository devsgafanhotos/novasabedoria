import logo from "../assets/logo.png";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {

  return (
   <header className={styles.Header}>
     <img src={logo} alt="Logo" />

     <Link to="/login" className={styles.Link}>Entrar</Link>
   </header>
  );
}
