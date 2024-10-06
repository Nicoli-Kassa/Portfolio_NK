import React, { useState } from 'react';
export default function FormularioContato(){
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulário preenchido:', formData);
    };
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 mt-2">
                    <label className="block font-mono mb-1 lg:text-[15px] 
                                        md:text-[14px]
                                        text-[13px]" htmlFor="nome">
                        Nome:
                    </label>
                    <input type="text"  id="nome"  name="nome" value={formData.nome} onChange={handleChange} required 
                        className="p-2 border-none bg-[#DFDFDF] rounded-md 
                                    md:w-[90%] md:h-[4.5vh]
                                    w-[92%] h-[4vh]" />
                </div>

                <div className="mb-4">
                    <label className="block font-mono mb-1 lg:text-[15px] md:text-[14px] text-[13px]" htmlFor="email">
                        Email:
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                        className="p-2 border-none bg-[#DFDFDF] rounded-md 
                                    md:w-[90%] md:h-[4.5vh]
                                    w-[92%] h-[4vh]"/>
                </div>

                <div className="mb-4">
                    <label className="block font-mono mb-1 lg:text-[15px] md:text-[14px] text-[13px]" htmlFor="mensagem">
                        Mensagem:
                    </label>
                    <textarea
                        id="mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        className="p-2 border-none bg-[#DFDFDF] rounded-md 
                                    md:w-[90%] md:h-[10vh]
                                    w-[92%] h-[9vh]"
                        rows="4"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-[#080F1E] font-mono text-white lg:py-1 lg:px-2 md:text-[15px] md:py-[0.2rem] md:px-[0.5rem] md:text-[13px] rounded hover:bg-[#00C0DB] text-[12px] py-1 px-1"
                >
                    Enviar
                </button>
            </form>
        </>
    )
}