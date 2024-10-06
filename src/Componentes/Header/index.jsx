import { NavLink } from "react-router-dom";
import {useState} from "react";

export default function Header(){
    const [nav, setNav] = useState(false);

    // Função para alternar o menu
    const handleClick = () => {
        setNav(!nav);
    };

    return(
        <>
            <header className="font-mono text-black hidden absolute z-10 w-full justify-center fixed top-0 
                                md:flex md:text-[15px]
                                lg:flex lg:justify-around lg:text-[18px] ">
                <nav>
                    <ul className="bg-white bg-opacity-60 
                                    md:flex md:gap-10 md:h-[30px] md:items-center md:px-[80px] md:rounded-b-xl 
                                    lg:gap-20 lg:px-[100px] lg:h-[6vh]">
                        <li className="hover:border-b-2 hover:border-black"><NavLink to='/'>Home</NavLink></li>
                        <li className="hover:border-b-2 hover:border-black"><NavLink to='/Sobre'>Sobre</NavLink></li>
                        <li className="hover:border-b-2 hover:border-black"><NavLink to='/Projetos'>Projetos</NavLink></li>
                        <li className="hover:border-b-2 hover:border-black"><NavLink to='/Contato'>Contato</NavLink></li>
                    </ul>
                </nav>
            </header>

                {/* Menu hambúrguer */}
                <div className="md:hidden flex items-center justify-end space-x-4 text-black mr-4 mt-2">
                    <div onClick={handleClick}>
                        <svg className="w-8 h-8 text-black cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                </div>

                {/* Menu lateral para mobile */}
                <div className={
                     nav
                        ? 'fixed right-0 top-0 w-[60%] h-full bg-[#F4F4F4] border-l border-gray-300 z-10 ease-in-out duration-500 '
                        : 'fixed right-[-100%]'
                    }>

                    <ul className="p-4 font-mono">
                    <NavLink to='/'>
                        <li className="p-5 border-b border-gray-300 flex flex-row items-center">
                            Home
                        </li>
                    </NavLink>
                    <NavLink to='/Sobre'>
                        <li className="p-5 border-b border-gray-300 flex flex-row items-center">
                            Sobre
                        </li>
                    </NavLink>
                    <NavLink to='/Projetos'>
                        <li className="p-5 border-b border-gray-300 flex flex-row items-center">
                            Projetos
                        </li>
                    </NavLink>
                    <NavLink to='/Contato'>
                        <li className="p-5 border-b border-gray-300 flex flex-row items-center">
                            Contato
                        </li>
                    </NavLink>
                    </ul>

                    <button
                        type="button"
                        onClick={handleClick}
                        className="-m-2.5 p-2"
                    >
                        <span className="font-mono rounded-md text-white bg-[#0F1F2E] p-3 m-8">Fechar menu</span>
                    </button>
                
                    </div>



        </>
    )
}