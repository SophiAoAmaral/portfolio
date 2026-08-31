import React from 'react'
import { useParams } from 'react-router';
import projetos from '../Objetos/ProjetosObj'
import { Contato } from '../Components/Contato';

export const Projeto = () => {
    const { id } = useParams();

  const projeto = projetos.find(
    (projeto) => projeto.id === id
  );
  console.log(projeto);
  return (
    <div className='container'>
      <h1 className='text-6xl'>{projeto.nome}</h1>

      <Contato/>
    </div>
  )
}
