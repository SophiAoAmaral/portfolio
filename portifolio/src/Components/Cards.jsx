import React from 'react'
import projetos from './Projetos'
import {Link} from 'react-router'
export const Cards = () => {
  return (
    <section className='mt-30'>
        <div className='flex justify-between items-center my-5'>
            <h2 className='text-5xl text-texto'>Projetos em destaque</h2>
            <span className='text-texto/30'>Clique em um projeto para ver o case</span>
        </div>

        <div className='grid grid-cols-3 gap-6 mt-16'>
            <>
                {projetos.map((projeto)=>(
                    <Link to={`/projeto/${projeto.id}`} className='border cardHover'>
                        <div className='h-40'>
                            <img src="" alt="" />
                        </div>
                        <div className='p-4'>
                            <h2>{projeto.nome}</h2>
                            <p>{projeto.descricao}</p>
                            <Link >Ver projeto</Link>
                        </div>
                    </Link>
                ))}
            </>
        </div>
    </section>
  )
}
