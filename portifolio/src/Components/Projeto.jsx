import React from 'react'
import { useParams } from 'react-router';
import projetos from './Projetos'

export const Projeto = () => {
    const { id } = useParams();

  const projeto = projetos.find(
    (projeto) => projeto.id === id
  );
  console.log(projeto);
  return (
    <h1 className='text-6xl'>{projeto.nome}</h1>
  )
}
