import "./favoritos.css"
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
export default props => {
   const [filmes, setFilmes] = useState([])

     useEffect(() => {
        const minhaLista = localStorage.getItem("@meusfilmes")
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])

    return (
        <div className="meus-favoritos">
            <h1>Meus Favoritos</h1>
            <ul>
                {filmes.map((item) => {
                    return (
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>
                                    Ver detales
                                </Link>
                                <button>Excluir</button>
                            </div>

                        </li>
                    )
                })}
            </ul>

        </div>
    )

}