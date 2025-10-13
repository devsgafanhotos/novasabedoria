/**
 * ======================================================
 * Arquivo: Erro.jsx
 * Responsabilidade: Exibir uma página genérica de erro (404)
 * Descrição: Este componente apresenta uma mensagem e uma ilustração
 *             centralizada quando o utilizador acessa uma rota inexistente.
 * Estilos: Importados de Erro.module.css
 * ======================================================
 */

import { Link } from "react-router-dom";
import style from "./Erro.module.css";

/**
 * Componente funcional que representa a página de erro.
 *
 * @returns {JSX.Element} - Estrutura visual da página de erro.
 */
export default function Erro() {
  return (
    /**
     * Container principal da página.
     * A classe `style.container` aplica os estilos definidos
     * em `Erro.module.css`, que incluem:
     *  - Centralização total do conteúdo (via flexbox)
     *  - Imagem SVG de fundo
     *  - Altura e largura em toda a viewport
     */
    <div className={style.container}>
      {/* Mensagem principal exibida ao utilizador */}
      <h1>Page Not Found</h1>
      <p>Oops! A página que procura não existe.</p>
      <Link to="/">Voltar para a página inicial</Link>
    </div>
  );
}
