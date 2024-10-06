import foto1 from './Fotos/foto1.png'
import foto2 from './Fotos/foto2.png'

export default function SobreMim(){
    return(
        <>
            <div className='md:flex font-mono items-center 
                            md:mx-10 md:mt-10 md:gap-10 
                            lg:mx-[8vw] lg:mt-20 lg:gap-20
                            mx-5 mt-6'>
                <div>
                    <h2 className='lg:text-[35px] lg:mb-3
                                    md:text-[30px] md:mb-2
                                    text-[18px] mb-2'>Minha descendência</h2>
                    <p className='text-justify lg:text-[15px]
                                    md:text-[12px]
                                    text-[10px] mb-3'>Não tem como falar de mim, e não falar do Japão. Faz parte de quem sou. Está no meu sangue. Por parte de mãe sou sansei (neta de japoneses) e por parte de pai sou yonsei (bisnetos de japoneses). Portanto, a cultura japonesa sempre esteve presente na minha vida, mesmo que eu nunca tenha morado no Japão. </p>
                </div>
                <img className='w-full lg:h-[40vh]
                                md:h-[30vh]' src={foto1} alt="foto1" />
            </div>
            <div className='md:flex font-mono items-center 
                            md:mx-10 md:mt-10 md:gap-10 
                            lg:mx-[8vw] lg:mt-20 lg:gap-20
                            mx-5 mt-6'>
                <img className='hidden md:block w-full lg:h-[40vh]
                                md:h-[30vh]' src={foto2} alt="foto2" />
                <div>
                    <h2 className='lg:text-[35px] lg:mb-3
                                    md:text-[30px] md:mb-2
                                    text-[18px] mb-2'>O mundo da tecnologia</h2>
                    <p className='text-justify lg:text-[15px]
                                    md:text-[12px]
                                    text-[10px] mb-3'>Conheci o mundo por trás das telas no ensino médio, e estou me aventurando nele até hoje. Acho incrível poder criar algo que no começo pode parecer absurdo, complexo e impossível, mas depois que você entende, depois que as coisas se encaixam, esse processo e ver um projeto pronto é satisfatório, só quem é programador vai me entender.</p>
                </div>
                
            </div>
        </>
    )
}