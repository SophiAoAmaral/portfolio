import React from 'react'

export const Header = () => {
  return (
    <header className='border-b border-rosa/30'>
        <nav className='container flex justify-between items-center py-7'>
            <h1 className='detail relative text-xl font-semibold text-texto'>Sophia Oliveira</h1>
            <ul className='flex items-center gap-5 text-texto/70 *:cursor-pointer *:transition [&>li]:hover:text-rosa'>
                <li className=''>Projetos</li>
                <li>Stack</li>
                <li>Formação</li>
                <button className='border border-rosa px-4 py-1 rounded-2xl text-rosa hover:bg-rosa/30 hover:text-texto '>Contato</button>
            </ul>
        </nav>
    </header>
  )
}
