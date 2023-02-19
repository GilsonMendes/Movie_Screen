import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api';
function Filmes() {
    const { id } = useParams();
    const [filme, setFilmes] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilmes() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "7469f64c97c650cc947bf31db5f7915a",
                    page: 1,
                }
            })
                .then((response) => {
                    setFilmes(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    console.log("Filme não encontrado!");
                })
        }
        loadFilmes()
        return (() => {
            console.log("Componente foi desmontado.");
        })
    }, [])
    if (loading) {
        return (
            <div>
                <h2>Carregando detalhes...</h2>
            </div>
        )
    }
    return (
        <div>
            <h1>{filme.title}</h1>
            <img
                src={
                    `https://image.tmdb.org/t/p/original/${filme.backdrop_path}`
                } alt={filme.title}
            />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10</strong>
        </div>
    )
}

export default Filmes;