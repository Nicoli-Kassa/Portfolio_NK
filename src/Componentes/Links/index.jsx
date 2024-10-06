import { NavLink } from "react-router-dom";
export default function Links({links}) {
    return(
        <>
        <div className="lg:px-[13vw]
                        md:my-12 md:px-[10vw]
                        my-6 w-full px-[8vw]">
        {
            links.map(({titulo, link}, indice) =>(
                
                <NavLink to={link} key={indice}>
                    <div  className="font-mono bg-[#0F1F2E] text-white flex items-center rounded-lg relative w-full
                                    h-[5vh] my-2 pl-4 text-[11px]
                                    md:h-[8vh] md:my-3 md:pl-6 md:text-[15px]
                                    lg:h-[10vh] lg:my-5 lg:pl-8 lg:text-[18px]">
                        {titulo}
                        <span className="absolute material-symbols-outlined
                                        md:right-6
                                        right-2 text-[13px]">arrow_forward_ios</span>    
                    </div>
                </NavLink>
            ))
        }</div>
        </>
    )
}