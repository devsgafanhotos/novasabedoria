import style from "./Card.module.css";


export default function Card({ title, description, image }) {
  return (
    <div className={style.card}>
      <img src={image} alt={title} className={style['card-image']} />
      <h3 className={style['card-title']}>{title}</h3>
      <p className={style['card-description']}>{description}</p>
    </div>
  );
}
