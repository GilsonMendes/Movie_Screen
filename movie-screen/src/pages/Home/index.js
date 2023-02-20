import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css"



// url: /movie/changes?api_key=7469f64c97c650cc947bf31db5f7915a

function Home() {
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get('/movie/now_playing', {
                params: {
                    api_key: '7469f64c97c650cc947bf31db5f7915a',
                    page: 1,
                }
            })

            setFilmes(response.data.results.slice(0, 10))
            setLoading(false);
        }

        loadFilmes();

    }, [])
    if (loading) {
        return (
            <div>
                <h2> Caregando Filmes..... </h2>
            </div>
        )
    }
    return (
        <div className="container">
            <div className="lista-filmes">

                {filmes.map((filme) => {

                    return (
                        <article key={filme.id}>
                            <strong>
                                {filme.title}
                            </strong>

                            <div className="imagens">
                                <img
                                    src={
                                        `https://image.tmdb.org/t/p/original/${filme.poster_path}`
                                    } alt={filme.title}
                                />
                            </div>
                            <Link style={{color: '#FFF'}} to={`/Filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )

                })}

            </div>
        </div>
    )
}

export default Home;