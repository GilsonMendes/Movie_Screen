import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../services/api';
import "./filmes_styles.css"
function Filmes() {
    const { id } = useParams();
    const [filme, setFilmes] = useState({});
    const [loading, setLoading] = useState(true);
    const navigation = useNavigate()

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
                    navigation("/", { replace: true })
                    return;
                })
        }
        loadFilmes()
        return (() => {
            console.log("Componente foi desmontado.");
        })
    }, [navigation, id])
    function salvarFilmes() {
        const minhaLista = localStorage.getItem("@meusfilmes");
        let filmesSalvos = JSON.parse(minhaLista) || [];
        const hasFilme = filmesSalvos.some(
            (filmeSalvo) =>
                filmeSalvo.id === filme.id
        )

        if (hasFilme) {
            alert("ESSE FILTE JÁ ESTA NA LISTA!");
            return;
        }
        filmesSalvos.push(filme);
        localStorage.setItem("@meusfilmes",
            JSON.stringify(filmesSalvos)
        );
        alert("FILME SALVO COM SUCESSO!")
    }
    if (loading) {
        return (
            <div>
                <h2>Carregando detalhes...</h2>
            </div>
        )
    }
    return (
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img
                src={
                    `https://image.tmdb.org/t/p/original/${filme.backdrop_path}`
                } alt={filme.title}
            />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10</strong>
            <div className='area-button'>
                <button onClick={salvarFilmes}>Salvar</button>
                <button>
                    <a target="blank" real="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                        Trailer
                    </a>
                </button>

            </div>
        </div>
    )
}

export default Filmes;