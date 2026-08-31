import React from 'react'
import { FaGithub } from "react-icons/fa";

export const Contato = () => {
  return (
    <section id='contato' className='flex flex-col gap-3 items-start rounded-2xl border border-rosa/30 mt-20 p-10 text-texto bg-rosa/10'>
            <h3 className='text-4xl'>Em busca da minha primeira oportunidade em Front-End</h3>
            <p className='w-200 text-texto/60'>Quero transformar ideias em interfaces funcionais, responsivas e bem construídas, enquanto continuo evoluindo como desenvolvedora e colocando meus conhecimentos em prática em projetos reais.</p>
            <div className='flex gap-6 items-center'>
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
