export default function Skills({skills}) {
    return(
        <>
        
        {
            skills.map(({nome, icon}, indice) =>(
                <div key={indice} className="text-center bg-white rounded-xl hover:scale-110 transform transition duration-300
                                            lg:mx-5 lg:py-3
                                            md:mx-3 md:py-2
                                            mx-6 py-2">
                    <img className='mx-auto
                                    lg:h-12
                                    md:h-10 
                                    h-10' src={icon} alt="icon" />
                    <p className="font-mono text-black
                                lg:text-[12px] lg:mt-2
                                md:text-[10px]
                                text-[10px] mt-1">{nome}</p>
                </div>
            ))
        }
        </>
    )
}