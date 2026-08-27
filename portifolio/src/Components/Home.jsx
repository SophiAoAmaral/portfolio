import React from 'react'
import { FaGithub } from "react-icons/fa";

export const Home = () => {
  return (
    <section className='container text-texto grid grid-cols-2 mt-20 gap-15'>
        <div>
            <span className='uppercase text-rosa detail-rosa ml-[25px] block font-bold text-sm mb-2'>Front End - São Paulo</span>
            <h1 className='text-8xl mb-2'>Crio interfaces modernas, responsivas e <span className='text-rosa'>acessíveis.</span></h1>
            <p className='text-texto/75 my-5'>Estudante de Análise e Desenvolvimento de Sistemas na PUCRS e desenvolvedora Front-End em formação. Transformo interfaces do Figma em experiências reais, responsivas e funcionais, com foco em React, JavaScript e Tailwind CSS. Busco minha primeira oportunidade na área para continuar evoluindo e contribuindo com projetos reais.</p>
            <div className='flex items-center gap-7 *:cursor-pointer'>
                <a href="" className='border border-rosa py-2 px-4 text-rosa rounded-2xl hover:bg-rosa/30 hover:text-texto transition'>Ver Projetos</a>
                <a href='https://github.com/SophiAoAmaral' target='_blank' className='flex items-center gap-2 text-texto/75 border  border-texto/30 py-2 px-4 rounded-2xl hover:bg-rosa/30 transition'>GitHub <FaGithub /></a>
            </div>
        </div>

        <div className='pl-20'>
            <div className='h-[50%]'>

            </div>

            <div>
            
                <div>
                    <h3 className='detail'>Disponível para começar</h3>
                    <p>Presencial, híbrido ou remoto. CLT ou estágio.</p>
                </div>
                <article className='grid grid-cols-2 *:inline-block border'>
                    <span className='border-b border-r'>a</span>
                    <span className='border-b'>b</span>
                    <span className='border-r'>c</span>
                    <span>d</span>
                </article>
            </div>
        </div>
    </section>
  )
}
