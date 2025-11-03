import { PiStudentLight } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { SiCoursera,SiGoogleclassroom  } from "react-icons/si";



/**
 * Componente que renderiza uma seção com cards que apresentam recursos da aplicação.
 * @returns {JSX.Element} Um componente JSX que renderiza uma seção com cards.
 */

const features = [
  {
    name: "Gestão de Alunos",
    description:
      "Gerencie informações dos alunos, incluindo dados pessoais, histórico acadêmico e desempenho. Facilite a comunicação entre escola, alunos e pais.",
    icon: GiTeacher  ,
  },
  {
    name: "Gestão de Professores",
    description:
      "Facilite o gerenciamento de informações dos professores, incluindo dados pessoais, disciplinas ministradas e horários de aula.",
    icon:PiStudentLight,
  },
  {
    name: "Gestão de Turmas",
    description:
      "Crie e gerencie turmas, horários e disciplinas com facilidade. Facilite a organização acadêmica da sua instituição.",
    icon: SiGoogleclassroom,
  },
  {
    name: "Gestão de Cursos",
    description:
      "Ofereça uma variedade de cursos e programas educacionais. Gerencie inscrições, currículos e avaliações de forma eficiente.",
    icon: SiCoursera,
  },
];

export default function Features() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-lg text-gradient ">
            Recursos Principais
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
            A melhor solução para gestão escolar
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
            Nossa plataforma oferece uma gama de recursos projetados para
            simplificar a gestão escolar. Desde o gerenciamento de alunos e
            professores até a organização de turmas e cursos, tudo em um só
            lugar.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-white">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
