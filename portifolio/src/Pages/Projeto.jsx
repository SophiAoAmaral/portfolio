import React from 'react'
import { useParams, Link } from 'react-router';
import projetos from '../Components/ProjetosObj';
import { Contato } from '../Components/Contato';
import { useState, useEffect } from 'react';
export const Projeto = () => {
  const { id } = useParams()

  const [fotoAtual, setFotoAtual] = useState(0)

  const projeto = projetos.find(
    (projeto) => projeto.id === id
  )

  useEffect(() => {
    console.log('Mudou projeto:', id)

    setFotoAtual(0)
  }, [id])

  if (!projeto) {
    return <p>Projeto não encontrado</p>
  }

  function proximaFoto() {
    setFotoAtual((atual) => {
      return (atual + 1) % projeto.img.length
    })
  }

  function fotoAnterior() {
    setFotoAtual((atual) => {
      return atual === 0
        ? projeto.img.length - 1
        : atual - 1
    })
  }

  return (
    <div className="container2 animeLeft">
      <Link to="/projetos" className="text-rosa block mt-5 md:mt-10 hover:underline">
        ← Voltar
      </Link>
      <div>
        <div className="border-b pb-10 border-texto/10 ">
          <div className="flex justify-between my-3 md:my-6 items-center">
            <span className="detail-rosa text-rosa uppercase font-bold block ml-7">
              {projeto.tipo}
            </span>
            <a
              href={projeto.projeto}
              target="blank"
              className="text-rosa uppercase font-bold border py-2 px-4 rounded-2xl hover:bg-rosa/10 hover:text-texto"
            >
              Ver Site
            </a>
          </div>
          <h1 className="text-6xl text-texto mb-3 font-semibold">
            {projeto.nome}
          </h1>
          <p className="text-texto/60 md:w-200 mb-6">{projeto.sobre}</p>
          <img
            src={projeto.img[0]}
            alt={projeto.nome}
            className="md:h-150 m-auto rounded-2xl"
          />
        </div>

        <div className="mt-10 border-b border-texto/10 pb-10 ">
          <h3 className="text-3xl text-center mb-5 text-texto font-semibold">
            Funcionalidades
          </h3>
          <ul className="flex gap-5 items-center justify-center flex-wrap">
            {projeto.funcionalidades.map((i) => (
              <li className="text-rosa bg-texto/5 hover:bg-rosa/20 font-semibold border py-2 px-4 rounded-2xl text-xs md:text-base">
                {i}
              </li>
            ))}
          </ul>
        </div>

        <article className="grid md:grid-cols-3 gap-10 md:gap-20 p-5 items-start justify-center border-b pb-10 border-texto/10 mb-10">
          <div>
            <h4 className='text-xl text-rosa-claro font-semibold'>Desafio</h4>
            <p className='text-texto/50 mt-3 '>{projeto.desafio}</p>
          </div>
          <div>
            <h4 className='text-xl text-rosa-claro font-semibold'>Desenvolvimento</h4>
            <p  className='text-texto/50 mt-3 '>{projeto.desenvolvimento}</p>
          </div>
          <div>
            <h4 className='text-xl text-rosa-claro font-semibold'>Aprendizagem</h4>
            <p className='text-texto/50 mt-3 '>{projeto.aprendizado}</p>
          </div>
        </article>

        <div className="relative">
          <img
            src={projeto.img[fotoAtual] || projeto.img[0]}
            alt={projeto.nome}
            className="w-full rounded-2xl object-contain md:h-150 "
          />
          <button
            onClick={fotoAnterior}
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-rosa cursor-pointer hover:bg-rosa-escuro text-white w-10 h-10 rounded-full"
          >
            ←
          </button>

          <button
            onClick={proximaFoto}
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-rosa cursor-pointer hover:bg-rosa-escuro text-white  w-10 h-10 rounded-full "
          >
            →
          </button>
        </div>
      </div>

      <Contato />
    </div>
  );
};
