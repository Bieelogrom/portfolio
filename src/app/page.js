"use client";

import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import eu from "../../public/Eu.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import codificador from "../../public/Codificador.jpeg";
import cinemark from "../../public/Cinemark.png";
import mapa from "../../public/Mapa.jpeg";
import conectavel from "../../public/Conectavel.jpeg";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">
              @Gabriel.fav
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Currículo
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-300">
              Gabriel Ferreira Amorim
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Desenvolvedor Fullstack.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              Desenvolvedor empenhado em construir o software de melhor
              qualidade. Tenho facilidade em aprender rapidamente novas
              tecnologias e conceitos, o que me permite adaptar-me
              eficientemente a diferentes ambientes de trabalho e projetos.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://www.instagram.com/gabriel.fav/" target="_black">
              <AiFillInstagram className="dark:text-white" />
            </a>
            <a href="https://www.linkedin.com/in/gabrielfav/" target="_black">
              <AiFillLinkedin className="dark:text-white" />
            </a>
            <a href="https://github.com/Bieelogrom" target="_black">
              <AiFillGithub className="dark:text-white" />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={eu} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">
              Projetos anteriores
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Olá, sou Gabriel Ferreira Amorim, residente em São Paulo, com 19
              anos de idade, imerso no mundo da tecnologia. Iniciei minha
              jornada educacional na ETEC de Guaianazes, onde me formei em{" "}
              <span className="text-teal-500">
                técnico de desenvolvimento de sistemas
              </span>
              , e atualmente estou cursando desenvolvimento fullstack Java no
              Instituto PROA.{" "}
              <span className="text-teal-500">
                Minha paixão reside no desenvolvimento back-end e na gestão de
                bancos de dados
              </span>
              , reconhecendo a importância dessas áreas no cerne da inovação
              tecnológica.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Estou constantemente em busca de aprimoramento e desafios que me
              permitam expandir meus horizontes neste fascinante universo
              tecnológico.
            </p>
          </div>
          <div className="lg:flex gap-10 justify-center">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div className="w-auto flex justify-center">
                <Image src={design} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Básico em Prototipação
              </h3>
              <p>Criando designs elegantes adequados à sua teoria de design.</p>
              <h4 className="py-4 text-teal-600">As ferramentas que utilizo</h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Photoshop</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div className="w-auto flex justify-center">
                <Image src={code} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Linguagens e Frameworks
              </h3>
              <p>
                Desenvolvendo aplicações com o que há de mais recente no
                mercado.
              </p>
              <h4 className="py-4 text-teal-600">As ferramentas que utilizo</h4>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">Spring boot</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Ao longo da minha carreira, participei de{" "}
              <span className="text-teal-500">diversos projetos</span> que
              exemplificam minhas habilidades e meu compromisso com a
              excelência. Cada projeto é uma{" "}
              <span className="text-teal-500">
                oportunidade de aplicar meus conhecimentos
              </span>{" "}
              e de aprender algo novo, sempre com o objetivo de superar as
              expectativas dos clientes e usuários.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Eu busco sempre aplicar o máximo de tudo que aprendi em meus
              projetos.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={codificador}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={cinemark}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={mapa}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={conectavel}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
