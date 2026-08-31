import React from 'react'
import projetos from './Projetos'
import {Link} from 'react-router'
export const Cards = () => {
  return (
    <section className='mt-30 animeLeft' id='projetos'>
        <div className='flex justify-between items-center my-5'>
            <h2 className='text-5xl text-texto'>Projetos em destaque</h2>
            <span className='text-texto/30'>Clique em um projeto para ver o case</span>
        </div>

        <div className='grid grid-cols-3 gap-6 mt-16'>
            <>
                {projetos.map((projeto)=>(
                    <Link to={`/projeto/${projeto.id}`} className='border rounded-2xl bg-card cardHover'>
                        <div className='h-60'>
                            <img src="" alt="" />
                        </div>
                        <div className='px-5'>
                            <span className='text-rosa uppercase text-sm font-bold'>{projeto.tipo}</span>
                            <h2 className='text-3xl text-texto mt-3'>{projeto.nome}</h2>
                            <p className='text-texto/50 py-2 '>{projeto.descricao}</p>
                            <ul className='flex flex-wrap justify-center items-center mt-3 mb-5  gap-4 text-rosa'>
                              {projeto.linguagens.map((l)=>(
                                    <li className='border  border-rosa bg-rosa/15 text-xs p-2 px-4 rounded-2xl '>{l}</li>
                                ))}
                            </ul>
                            <span className='text-rosa mb-3 block'>Ver Projeto ↗</span>
                        </div>
                    </Link>
                ))}
            </>
        </div>
    </section>
  )
}
