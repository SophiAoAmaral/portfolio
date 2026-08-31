import React from 'react'
import { FaGithub } from "react-icons/fa";

export const Contato = () => {
  return (
    <section id='contato' className='flex flex-wrap flex-col gap-3  md:items-start rounded-2xl border border-rosa/30 mt-10 md:mt-20 p-5 md:p-10 text-texto bg-rosa/10'>
            <h3 className='md:text-4xl text-2xl text-center md:text-start'>Em busca da minha primeira oportunidade em Front-End</h3>
            <p className='md:w-200 text-texto/60 text-center md:text-start'>Quero transformar ideias em interfaces funcionais, responsivas e bem construídas, enquanto continuo evoluindo como desenvolvedora e colocando meus conhecimentos em prática em projetos reais.</p>
            <div className='flex flex-col md:flex-row gap-3 md:gap-6 items-center'>
              <span className='border py-2 px-4 rounded-2xl text-rosa'>sophiaoliveira2706@outlook.com</span>
              <a
                    href="https://github.com/SophiAoAmaral"
                    target="_blank"
                    className="flex items-center gap-2 text-rosa border  border-rosa py-2 px-4 rounded-2xl hover:bg-rosa/30 transition">
                    GitHub <FaGithub />
              </a>
            </div>
    
          </section>
  )
}
