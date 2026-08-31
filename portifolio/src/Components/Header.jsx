import React from 'react'
import {Link} from 'react-router'
export const Header = () => {
  return (
    <header className='border-b border-rosa/30 bg-fundo'>
        <nav className='container flex justify-between items-center py-7'>
            <Link to='/' className='detail relative text-xl font-semibold text-texto'>Sophia Oliveira</Link>
            <ul className='flex items-center gap-5 text-texto/70 *:cursor-pointer *:transition [&>li]:hover:text-rosa'>
                <a href='#contato' className='border border-rosa px-4 py-1 rounded-2xl text-rosa hover:bg-rosa/30 hover:text-texto '>Contato</a>
            </ul>
        </nav>
    </header>
  )
}
