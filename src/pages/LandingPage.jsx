import Header from "../partials/Header";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../partials/Footer";

export default function LandingPage() {
  return (
    <div className="bg-gray-300">
      <Header />
      {/* Conteúdo principal da página de aterragem */}

      <main className="">
        <Hero />
        <Features />

        
        

        <section className="mt-8 mb-8  *:px-4 md:px-8 lg:px-16    max-w-7xl mx-auto px-4 sm:px-6 ">
          <h2 className="text-3xl md:text-4xl">Contato</h2>
          <p className="mt-4 text-lg">
            Para mais informações, entre em contato conosco:
          </p>
          <ul className="mt-2 list-disc list-inside">
            <li>Email: <a href="mailto:contato@novasabedoria.com" className="text-blue-500 hover:underline">contato@novasabedoria.com</a></li>
            <li>Telefone: <a href="tel:+5511999999999" className="text-blue-500 hover:underline">+55 11 99999-9999</a></li>
          </ul>
        </section>



      </main>

      {/* Rodapé da página de aterragem */}

      <Footer />
    </div>
  );
}
