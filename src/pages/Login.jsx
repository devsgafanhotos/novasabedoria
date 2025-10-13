// Login.jsx
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import styles from "./Login.module.css";
import Button from "../components/Button";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: implementar lógica de autenticação
    const email = event.target.email.value;
    const senha = event.target.senha.value;

    if (!email || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    console.log("Email:", email);
    console.log("Senha:", senha);
    // lógica para autenticar o usuário
  };

  return (
    <div className={styles.Container}>
      {/* Logo da aplicação */}
      <img src={logo} alt="Logo da aplicação" className={styles.Logo} />

      {/* Formulário de login */}
      <form onSubmit={handleSubmit} className={styles.LoginForm}>
        <legend>Conecte-se</legend>

        <input type="email" placeholder="Email" name="email" />

        <input type="password" placeholder="Senha" name="senha" />

          <Button content={"Entrar"} className={styles.btn}/>
        <Link to="/recuperar-senha">Esqueceste-te da palavra-passe?</Link>
      </form>
    </div>
  );
}
