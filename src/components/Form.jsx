export default function Form(
    title,
    text
    
) {
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
    <form onSubmit={handleSubmit} className={styles.LoginForm}>
      <legend>Conecte-se</legend>

      <input type="email" placeholder="Email" name="email" />

      <input type="password" placeholder="Senha" name="senha" />

      <Button content={"Entrar"} />
      <Link to="/recuperar-senha">Esqueceste-te da palavra-passe?</Link>
    </form>
  );
}
