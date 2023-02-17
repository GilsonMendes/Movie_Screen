import { wait } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import api from "../../services/api";

// url: /movie/changes?api_key=7469f64c97c650cc947bf31db5f7915a

function Home() {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get('/movie/now_playing', {
                params: {
                    api_key: '7469f64c97c650cc947bf31db5f7915a',
                    page: 1,
                }
            })

            setFilmes(response.data.results.slice(0, 10))
        }

        loadFilmes();

    }, [])
    return (
        <div className="container">
            <div className="lista-filmes">

                {filmes.map((filme) => {

                    return (
                        <article key={filme.id}>
                            <strong>
                                {filme.title}
                            </strong>
                        </article>
                    )

                })}

            </div>
        </div>
    )
}

export default Home;