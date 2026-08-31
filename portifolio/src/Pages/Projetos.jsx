import React from 'react'
import { Cards } from '../Components/Cards'
import { Link } from 'react-router'

export const Projetos = () => {
  return (
    <div className='container'>
      <Link to='/' className='text-rosa block mt-5 md:mt-10 hover:underline'>← Voltar</Link>
        <Cards/>
    </div>
  )
}
