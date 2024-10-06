import React from 'react';
import { useParams } from 'react-router-dom'
import projetos from '../Projetos/projetos.json'

export default function DetalhesProjeto(){
    const { id } = useParams()
    const projeto = projetos.find((projeto) => projeto.id === parseInt(id));

    if (!projeto) {
    return <p>Projeto não encontrado</p>; // Se o id for inválido
    }

    return(
        <>
            <div className=' mx-auto bg-[#fff] rounded-2xl font-mono
                            lg:w-[70%] lg:my-[13.5vh] lg:p-10'>
    
                <h1 className='font-bold w-full text-center lg:text-[2vw] '>{projeto.titulo}</h1>
                <div className='flex'>
                    <div className='w-6/12 lg:mt-6'>
                        <h2 className='font-bold lg:text-[1.2vw] lg:mt-2 lg:mb-1' >Descrição</h2>
                        <p className='lg:text-[1vw] text-justify'>{projeto.descricao}</p>

                        <h2 className='font-bold lg:text-[1.2vw] lg:mt-4 lg:mb-1'>Tecnologias</h2>
                        <p>{projeto.tecnologias}</p>

                        <h2 className='font-bold lg:text-[1.2vw] lg:mt-4 lg:mb-1'>Links</h2>
                        <p className='inline lg:mr-2 font-normal'>Github:</p><a className='inline text-[#00768C]' href={projeto.link}>{projeto.titulo}</a>
                    </div>
                    <div className='w-6/12 lg:mt-[5vh]'>
                        <img className='bg-[#D9D9D9] w-[90%] mx-auto rounded-lg mb-5 border-2 border-[#080E1C]
                                        lg:h-[12rem]' src={projeto.img} alt="img" />
                    </div>
                </div>
            </div>
        </>
    )
}