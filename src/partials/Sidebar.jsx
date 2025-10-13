import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { RxDashboard } from "react-icons/rx";
import { PiStudent } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { PiMoneyWavyLight } from "react-icons/pi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import logo from "../assets/logo.png"

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        Nova Sabedoria</div>
      <nav className={styles.menu}>
        <NavLink to="/dashboard" className={styles["menu-item"]}>
          <RxDashboard />
          Dashboard
        </NavLink>
        <NavLink to="/professores" className={styles["menu-item"]}>
          <PiStudent />
          Professores
        </NavLink>
        <NavLink to="/alunos" className={styles["menu-item"]}>
          <GoPeople />
          Alunos
        </NavLink>
        <NavLink to="/financas" className={styles["menu-item"]}>
          <PiMoneyWavyLight />
          Finanças
        </NavLink>
        <NavLink to="/config" className={styles["menu-item"]}>
          <IoSettingsOutline />
          Configurações
        </NavLink>
      </nav>
      <button className={styles["logout-btn"]}>
        Terminar sessao <RiLogoutCircleRLine />
      </button>
    </aside>
  );
}
