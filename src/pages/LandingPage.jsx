import style from "./LandingPage.module.css";
import Header from "../partials/Header";
import logo2 from "../assets/td.jpg";
import aluno1 from "../assets/alunos.jpg";

import c from "../assets/c.jpg";


import professor1 from "../assets/profesores.jpeg";
import Card from "../components/Card";

export default function LandingPage() {
  return (
    <div className={style.LandingPage}>
      <Header />
      {/* Conteúdo principal da página de aterragem */}
      
      <main className={style.MainContent}>
        <section className={style.HeroSection}>
          
          <h1>Bem-vindo a Nova Sabedoria</h1>
          <p>
            Plataforma de gestão escolar para escolas primárias e secundárias.
            Simplifique a administração escolar com nosso sistema fácil de usar.
          </p>
          
        </section>

        <section>

          <h2>Nossos Serviços</h2>
          <hr />
          <div className={style.CardContainer}>
            <Card
              title="Gestão de Alunos"
              description="Registre e gerencie informações dos alunos de forma eficiente."
              image={aluno1}
            />

              <Card
                title="Gestão de Professores"
                description="Organize dados dos professores e facilite a comunicação."
                image={professor1}
              />

              <Card
                title="Gestão de Turmas"
                description="Crie e gerencie turmas, horários e disciplinas com facilidade."
                image={logo2}
              />  

              <Card
                title="Gestão de Cursos"
                description="Administre cursos, turmas e horários com facilidade."
                image={c}
              />  



          </div>
          
        </section>


        <section className={style.AboutSection}>  
          <h2>Sobre Nós</h2>
          <p>
            Os Dev's Gafanhotos é dedicada a fornecer soluções tecnológicas para
            facilitar a gestão escolar. Nossa missão é ajudar escolas a
            otimizar seus processos administrativos, permitindo que se
            concentrem no que realmente importa: a educação dos alunos.
          </p>
    
        </section>


        <section className={style.ContactSection}>
          <h2>Contato</h2>
          <p>Para mais informações, entre em contato conosco:</p>
          <ul>
            <li>Email: contato@novasabedoria.com</li>
            <li>Telefone: (11) 1234-5678</li>
          </ul>
        </section>

      </main>
    </div>
  );
}
