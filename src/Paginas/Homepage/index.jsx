
import Hero from "../../Componentes/Hero";
import Links from "../../Componentes/Links";
import foto1 from "./Fotos/foto1.png";

export default function HomePage(){
    const hero = [
        {titulo:'Nicoli Kassa', descricao:'Engenheira de Software', img:foto1, botao:'Sobre mim'}
    ];

    const links = [
        {titulo: 'Meus Projetos', link:'/projetos'},
        {titulo: 'Entre em contato', link:'/contato'},
        {titulo: 'Redes Sociais', link:'/contato'}
    ]

    return(
        <>
            <Hero hero={hero}/>
            <Links links={links}/>
        </>
    )
}