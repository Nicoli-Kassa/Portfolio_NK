import React from "react";
import { Link } from "react-router-dom";

import projetos from "./projetos.json";

export default function Projetos() {
  return (
    <>
      <div className="flex flex-col items-center bg-gray-100 min-h-[90vh]">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 mt-5 md:mt-10 lg:mt-[15vh] lg:mb-[8vh]">
          Meus Projetos
        </h1>

        {/* Container principal */}
        <div className="w-full overflow-x-scroll scrollbar-hide">
          <div className="flex justify-center items-center mb-10 gap-4 py-5">
            {/* Mapeamento de projetos */}
            {projetos.map((projeto, index) => {
              if (projeto.tamanho === "large") {
                // Bolinha grande
                return (
                  <Link to={`${projeto.id}`} key={projeto.id}>
                    <div className="flex-shrink-0 w-[45vw] h-[45vw] md:w-40 md:h-40 lg:w-[20vw] lg:h-[20vw] rounded-full bg-[#080F1E] hover:scale-110 transform transition duration-300 hover:bg-[#00768C]">
                      <h1 className="font-mono text-white w-full h-full flex justify-center items-center
                                    lg:text-[20px]
                                    md:text-[14px] md:px-2 
                                    text-[12px] text-center">{projeto.titulo}</h1>
                    </div>
                  </Link>
                );
              } else if (index % 3 === 1) {
                // Coluna com 2 bolinhas pequenas
                return (
                  <div key={projeto.id} className="flex flex-col gap-2">
                    {projetos.slice(index, index + 2).map((smallProjeto) => (
                      <Link to={`${smallProjeto.id}`} key={smallProjeto.id}>
                        <div className="w-[24vw] h-[24vw] md:w-[12vw] md:h-[12vw] lg:w-[12vw] lg:h-[12vw] rounded-full bg-[#080F1E] hover:scale-110 transform transition duration-300 hover:bg-[#00768C]">
                          <h1 className="font-mono text-white w-full h-full flex justify-center items-center text-center
                                        lg:text-[14px] lg:px-4
                                        md:text-[10px] md:px-2
                                        text-[8px] px-2">{smallProjeto.titulo}</h1>
                        </div>
                      </Link>
                    ))}
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
