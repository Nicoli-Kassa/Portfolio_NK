import { Link } from "react-router-dom";

export default function CardProjeto({id, titulo}) {
    return(
        <div className="mx-5">
            <h2>{titulo}</h2>
            <Link to={`/Projetos/${id}`}>Saber mais</Link> {/*Concatenando a rota movie com o id do filme*/}
        </div>
    )

}
