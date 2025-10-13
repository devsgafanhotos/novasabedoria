import styles from "./Topbar.module.css";
import BarraBusca from "./BarraBuscar";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <BarraBusca icon={<IoSearchOutline />} texto={"Pesquisar..."} />
      <div className={styles["topbar-icons"]}>
        <span className={styles["topbar-icons"]}>
          <IoMdNotificationsOutline />
        </span>
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className={styles["user-avatar"]}
        />
      </div>
    </div>
  );
}
