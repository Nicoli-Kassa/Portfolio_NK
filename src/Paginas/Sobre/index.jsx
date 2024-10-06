
import Hero from "../../Componentes/Hero"
import Skills from "../../Componentes/Skills"
import SobreMim from "../../Componentes/SobreMim"
// import foto2 from "./Fotos/foto2.png"

// icones
import html from './Fotos/htmlIcon.svg'
import css from './Fotos/cssIcon.svg'
import js from './Fotos/jsIcon.svg'
import tailwind from './Fotos/tailwindIcon.svg'

import python from './Fotos/pythonIcon.svg'
import c1 from './Fotos/c1Icon.svg'
import c2 from './Fotos/c2Icon.svg'
import php from './Fotos/phpIcon.svg'

import github from './Fotos/githubIcon.svg'
import figma from './Fotos/figmaIcon.svg'
import excel from './Fotos/excelIcon.svg'
import ppt from './Fotos/pptIcon.svg'

//foto 
import foto1 from './Fotos/foto1.png'


export default function Sobre(){
    const hero = [
        {titulo:'Sobre mim',descricao:'Meu nome é Nicoli Amy Kassa, tenho 18 anos, e sou descendente de japoneses. Sou apaixonada por taiko, música, livros, escrever, tecnologia, cultura, tudo que envolve desenvolvimento. Tudo que cresce, é algo bonito de se observar. ', img:foto1 , botao:null}
    ];

    const skillsFront = [
        {nome:'HTML' ,icon: html},
        {nome:'CSS', icon: css},
        {nome:'JavaScript', icon:js},
        {nome:'Tailwind', icon: tailwind},
    ]

    const skillsBack =[
        {nome:'Python', icon: python},
        {nome:'C#', icon: c1},
        {nome:'C++', icon: c2},
        {nome:'PHP', icon: php},
    ]

    const skillsProgramas =[
        {nome:'GitHub', icon: github},
        {nome:'Figma', icon: figma},
        {nome:'Excel', icon: excel},
        {nome:'PPT', icon: ppt},
    ]

    return(
        <>
            <Hero hero={hero}/>
            <SobreMim />

            <div className="w-full bg-gradient-to-b from-[#07B4CD] to-[#080D1B] font-mono text-white 
                            lg:px-20 lg:py-[8vh]
                            md:px-20 md:py-[5vh]
                            px-8 py-[5vh]">
                            
                <h1 className="lg:text-[35px] font-bold
                                lg:mb-10
                                md:mb-5 md:text-[20px]
                                mb-3">Skills</h1>

                <div className=" md:flex justify-center lg:gap-12 md:gap-10">

                    <div className="bg-white bg-opacity-60 rounded-xl hover:scale-110 transform transition duration-300
                                    lg:w-[25vw] lg:py-3
                                    md:w-[24vw] md:h-full md:py-3
                                    h-full py-3 mb-6">
                        <h2 className="text-center font-bold border-b-[3px]
                                        lg:pb-5 
                                        md:text-[20px]
                                        text-[14px] pb-2">Front-End</h2>
                        <div className="grid grid-rows-2 grid-cols-2 gap-y-5 
                                        lg:mt-5 lg:mb-2
                                        md:mb-2
                                        mt-3 mb-3">
                            <Skills skills={skillsFront} />
                        </div>
                    </div>

                    <div className="bg-white bg-opacity-60 rounded-xl hover:scale-110 transform transition duration-300
                                    lg:w-[25vw] lg:py-3
                                    md:w-[24vw] md:h-full md:py-3
                                    h-full py-3 mb-6">
                        <h2 className="text-center font-bold border-b-[3px]
                                        lg:pb-5 
                                        md:text-[20px]
                                        text-[14px] pb-2">Back-End</h2>
                        <div className="grid grid-rows-2 grid-cols-2 gap-y-5 
                                        lg:mt-5 lg:mb-2
                                        md:mb-2
                                        mt-3 mb-3">
                            <Skills skills={skillsBack} />
                        </div>
                    </div>

                    <div className="bg-white bg-opacity-60 rounded-xl hover:scale-110 transform transition duration-300
                                    lg:w-[25vw] lg:py-3
                                    md:w-[24vw] md:h-full md:py-3
                                    h-full py-3 mb-6">
                        <h2 className="text-center font-bold border-b-[3px]
                                        lg:pb-5 
                                        md:text-[20px]
                                        text-[14px] pb-2">Programas</h2>
                        <div className="grid grid-rows-2 grid-cols-2 gap-y-5 
                                        lg:mt-5 lg:mb-2
                                        md:mb-2
                                        mt-3 mb-3">
                            <Skills skills={skillsProgramas} />
                        </div>
                    </div>

                </div>
                    

                
            </div>
            
        </>
    )
}