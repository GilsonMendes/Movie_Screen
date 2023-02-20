import "./favoritos.css"
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {toast} from 'react-toastify'
export default props => {
   const [filmes, setFilmes] = useState([])

     useEffect(() => {
        const minhaLista = localStorage.getItem("@meusfilmes")
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])

    function excluirFilme(id){
        let filtroFilme = filmes.filter((item)=>{
            return(item.id !== id)
        })
        setFilmes(filtroFilme);
        localStorage.setItem("@meusfilmes", JSON.stringify(filtroFilme))
        toast.success("Filme removido com sucesso!")
    }

    return (
        <div className="meus-favoritos">
            <h1>Meus Favoritos</h1>
            {filmes.length === 0 && <span>Não possui filmes salvos</span>}
            <ul>
                {filmes.map((item) => {
                    return (
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>
                                    Ver detales
                                </Link>
                                <button onClick={()=>{

                                    excluirFilme(item.id)

                                }}>Excluir</button>
                            </div>

                        </li>
                    )
                })}
            </ul>

        </div>
    )

}