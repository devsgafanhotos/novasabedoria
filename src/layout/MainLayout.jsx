import Sidebar from "../partials/Sidebar";
import Topbar from "../partials/Topbar";
import styles from "./MainLayout.module.css";

export default function MainLayout({ children }) {
  return (
    <div className={styles.layout}>
      {/* Menu lateral fixo */}
      <Sidebar />

      {/* Área principal, praticamente é aqui onde o conteudo é centralizado  */}
      <div className={styles["layout-content"]}>
        <Topbar />
        <main className={styles["layout-main"]}>{children}</main>
      </div>
    </div>
  );
}
