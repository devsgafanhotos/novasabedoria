import style from "./BarraBusca.module.css";

export default function BarraBusca({ texto, icon }) {
  return (
    <div className={style.barraBusca}>
      <i className={style.icon}>{icon}</i>
      <input type="text" placeholder={texto}  className={style['search-input']}/>
    </div>
  );
}
