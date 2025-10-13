import { Link } from "react-router-dom";
export default function Button({
  className,
  type = "submit",
  content,
  link = false,
  path = "",
}) {
  // Aqui é feita a verificao para um (botao simples ou linkado)
  const btn = link ? (
    <Link className={className} to={path}>
      {content}
    </Link>
  ) : (
    <button className={className} type={type}>
      {content}
    </button>
  );
  return btn;
}
