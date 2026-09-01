import React from 'react'
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { Cards } from './Cards';
import {Link} from 'react-router'
import { frontEnd, backEnd, design, ferramentas } from '../Objetos/Linguagens';
import { formacao } from '../Objetos/Formacoes';
import { Contato } from './Contato';
import { FloresCaindo } from '../Pages/FloresCaindo';
import { useEffect, useState } from "react";

export const Home = () => {
  const [ativo, setAtivo] = useState(0);

useEffect(() => {
  const intervalo = setInterval(() => {
    setAtivo((atual) => (atual + 1) % 6);
  }, 1000);

  return () => clearInterval(intervalo);
}, []);

  return (
    <section className="container ">
      <div className="text-texto grid md:grid-cols-2 md:mt-20 mt-5 md:gap-15 relative animeLeft">
        <div className="relative">
          <div className="neon"></div>
          <span className="uppercase text-rosa detail-rosa ml-[25px]  block font-bold text-xs md:text-sm mb-2">
            ReactJS • JavaScript • Tailwind CSS
          </span>
          <h1 className="md:text-8xl text-5xl mb-2 text-center md:text-start">
            Crio interfaces modernas, responsivas e{" "}
            <span className="text-rosa">acessíveis.</span>
          </h1>
          <p className="text-texto/75 my-5">
            Estudante de Análise e Desenvolvimento de Sistemas na PUCRS e
            desenvolvedora Front-End em formação. Transformo interfaces do Figma
            em experiências reais, responsivas e funcionais, com foco em React,
            JavaScript e Tailwind CSS. Busco minha primeira oportunidade na área
            para continuar evoluindo e contribuindo com projetos reais.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-7 *:cursor-pointer">
            <Link
              to="/projetos"
              className=" text-rosa border py-2 px-4 rounded-2xl  hover:bg-rosa/30 transition border-rosa"
            >
              Ver Projetos
            </Link>
            <a
              href="https://github.com/SophiAoAmaral"
              target="_blank"
              className="flex items-center gap-2 text-texto/75 border  border-texto/30 py-2 px-4 rounded-2xl hover:bg-rosa/30 transition"
            >
              GitHub <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sophia-oliveira-665246337/"
              target="_blank"
              className="flex items-center gap-2 text-texto/75 border  border-texto/30 py-2 px-4 rounded-2xl hover:bg-rosa/30 transition"
            >
              Linkedin <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="md:pl-20 mt-7 md:mt-0">
          
          <div className="md:h-[20%]">
            <FloresCaindo />
          </div>

          <div>
            <article className="border border-texto/50 rounded-2xl mt-10">
              <div className="flex gap-5 bg-rosa/20 **:block p-2 rounded-t-2xl">
                <span className="bols before:bg-rosa ml-7"></span>
                <span className="bols before:bg-rosa/30"></span>
                <span className="bols before:bg-rosa/30"></span>
                <p className="text-texto/60">sophia.jsx</p>
              </div>
              <div className="flex flex-col p-5 font-semibold bg-[#150f19] leading-7">
                <span className="text-texto/50">
                  <span className="text-rosa-escuro">const</span> sophia ={" "}
                  {"{"}{" "}
                </span>
                <div className="flex flex-col pl-5 ">
                  <span className="text-texto/75">
                    stack:{" "}
                    <span className="text-rosa-claro">
                      ["React", "Tailwind", "JS"]
                    </span>
                    ,
                  </span>
                  <span className="text-texto/75">
                    <span>design:</span>
                    <span className="text-rosa-claro">"Figma + Adobe XD",</span>
                  </span>
                  <span className="text-texto/75">
                    <span>vaga:</span>{" "}
                    <span className="text-rosa-claro">
                      "front-end full-time"
                    </span>
                  </span>
                  <span className="text-texto/75">
                    <span>skills:</span>{" "}
                    <span className="text-rosa-claro">
                      ["Responsive Design", "UI/UX", "APIs REST"]
                    </span>
                  </span>
                </div>
                <span className="text-texto/75">{"}"};</span>
              </div>
            </article>
          </div>
        </div>
      </div>

      <Cards limite={3} />
      <Link
        to="/projetos"
        className="text-center font-semibold text-rosa block uppercase mt-8 hover:underline"
      >
        Ver todos os projetos{" "}
      </Link>

      <section className="grid md:grid-cols-2 mt-10 md:mt-20 gap-5 md:gap-40 animeLeft">
        <div>
          <h2 className=" text-4xl md:text-5xl text-texto">
            Stack e ferramentas
          </h2>
          <p className="text-texto/70 my-2 md:text-lg">
            Trabalho com HTML, CSS e JavaScript para transformar ideias em
            interfaces funcionais, organizadas e responsivas. No dia a dia, uso
            React para criar componentes reutilizáveis, organizar melhor a
            aplicação e construir experiências que funcionem bem em diferentes
            tamanhos de tela. Também tenho conhecimento de Node.js e SQL, o que
            me ajuda a entender melhor a comunicação com APIs, trabalhar com
            dados e enxergar o projeto além do front-end.
          </p>
          <p className="text-texto/70 my-2 text-lg ">
            Antes de começar a codar, gosto de organizar a ideia visualmente.
            Uso o Figma para criar wireframes e protótipos, testar a disposição
            dos elementos e pensar no fluxo que o usuário vai seguir dentro da
            aplicação. Procuro tomar decisões de layout considerando
            usabilidade, clareza e facilidade de navegação, e não apenas a
            aparência da interface. Meu objetivo é criar páginas bonitas, mas
            principalmente simples de entender, responsivas e agradáveis de
            usar.
          </p>
        </div>
        <div>
          <div className="mb-7">
            <div className="neon2"></div>
            <h3 className="uppercase text-texto/80 font-bold">Front-end</h3>
            <ul className="flex mt-4 gap-3 items-start flex-wrap **:text-texto/70 **:border **:px-4 **:rounded-2xl **:py-2 **:hover:text-rosa">
              {frontEnd.map((i) => (
                <li>{i}</li>
              ))}
            </ul>
          </div>

          <div className="mb-7">
            <h3 className="uppercase text-texto/80 font-bold">Back-End</h3>
            <ul className="flex mt-4 gap-3 items-start flex-wrap **:text-texto/70 **:border **:px-4 **:rounded-2xl **:py-2 **:hover:text-rosa">
              {backEnd.map((i) => (
                <li>{i}</li>
              ))}
            </ul>
          </div>

          <div className="mb-7">
            <h3 className="uppercase text-texto/80 font-bold">Desing</h3>
            <ul className="flex mt-4 gap-3 items-start flex-wrap **:text-texto/70 **:border **:px-4 **:rounded-2xl **:py-2 **:hover:text-rosa">
              {design.map((i) => (
                <li>{i}</li>
              ))}
            </ul>
          </div>

          <div className="mb-3">
            <h3 className="uppercase text-texto/80 font-bold">Ferramentas</h3>
            <ul className="flex mt-4 gap-3 items-start flex-wrap **:text-texto/70 **:border **:px-4 **:rounded-2xl **:py-2 **:hover:text-rosa">
              {ferramentas.map((i) => (
                <li>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-15 md:mt-30 animeLeft">
        <h1 className="text-texto text-5xl">Formação e trajetória</h1>
        <div className="text-texto">
          {formacao.map((item) => (
            <div
              key={item.title}
              className="grid md:grid-cols-[220px_1fr] gap-x-90 items-center border-b border-texto/20 py-8"
            >
              <h2 className="text-rosa">{item.title}</h2>

              <div className="flex flex-col gap-5">
                <h3 className="text-2xl">{item.subtitle}</h3>
                <p className="text-texto/40 text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Contato />
    </section>
  );
}
