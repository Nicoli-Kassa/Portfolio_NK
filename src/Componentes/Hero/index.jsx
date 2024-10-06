import { Link } from "react-router-dom"

export default function Hero({hero}) {
    return(
        <>
        {
            hero.map(({titulo,descricao,img,botao}, indice) =>(
                <div key={indice}>
                    <div className="flex justify-center w-full bg-gradient-to-b from-[#080D1B] to-[#00C0DB]">
                        <div>
                            <h1 className="text-white font-mono font-bold
                                        text-[20px] mt-[5vh] ml-[2vw]
                                        md:text-[45px] md:mt-[13vh] md:ml-[4vw]
                                        lg:text-[80px] lg:mt-[25vh]">{titulo}</h1>

                            <p className="text-white font-jaldi 
                                        text-[12px] ml-[2vw] mb-[5vh] 
                                        md:text-[16px] md:mt-[0.5vh] md:ml-[4vw]
                                        lg:text-[32px] lg:mt-[0.1vh]">{descricao}</p>
                            { botao !== null &&(
                                <Link to='/Sobre'><button className="text-black font-mono bg-white md:rounded-lg 
                                                text-[10px] ml-[2vw] py-0.5 px-2 mb-[5vh] rounded-md 
                                                md:text-[16px] md:mt-[8vh] md:ml-[4vw] md:py-1 md:px-4
                                                lg:mt-[6vh] lg:text-[24px] ">{botao}</button></Link>
                            )
                            }
                           
                        </div>
                        <img className="hidden 
                                        md:block lg:block 
                                        lg:w-auto lg:h-[72vh] lg:mt-[15vh]
                                        md:w-auto  md:h-[50vh] md:mt-[10vh]" src={img} alt="img1" />
                    </div>
                    
                </div>
            ))
        }
            
            
        </>
    )
}