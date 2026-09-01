import React from 'react'
import projetos from './ProjetosObj'
import {Link} from 'react-router'
export const Cards = ({ limite }) => {
  const projetosExibidos = limite
    ? projetos.slice(0, limite)
    : projetos;


  return (
    <section className='mt-10 md:mt-20 animeLeft' id='projetos'>
        <div className='flex flex-wrap md:flex-none md:justify-between items-center md:my-5'>
            <h2 className='text-3xl md:text-5xl text-texto mb-1'>Projetos em destaque</h2>
            <span className='text-rosa font-semibold text-xs'>Clique em um projeto para ver o case</span>
        </div>

        <div className='grid md:grid-cols-3 gap-6 mt-5 md:mt-16'>
            <>
                {projetosExibidos.map((projeto)=>(
                    <Link to={`/projeto/${projeto.id}`} key={projeto.nome} className='border rounded-2xl bg-card cardHover img__box'>
                        <div className=' w-auto'>
                            <img src={projeto.img[0]} alt="" className='h-full w-full object-cover rounded-t-2xl' />
                        </div>
                        <div className='px-5 mt-6'>
                            <span className='text-rosa uppercase text-sm font-bold'>{projeto.tipo}</span>
                            <h2 className='text-3xl text-texto mt-3'>{projeto.nome}</h2>
                            <p className='text-texto/50 py-2 '>{projeto.descricao}</p>
                            <ul className='flex flex-wrap justify-center items-center mt-3 mb-5  gap-4 text-rosa'>
                              {projeto.linguagens.map((l)=>(
                                    <li className='border  border-rosa bg-rosa/15 text-xs p-2 px-4 rounded-2xl '>{l}</li>
                                ))}
                            </ul>
                        
                        </div>
                    </Link>
                ))}
            </>
        
        </div>
    </section>
  )
}
