import {Link} from 'react-router-dom';
export default props => {
    return (
        <div>
            <h1>404</h1>
            <h2> Pagina não encontrada! </h2>
            <Link to={'/'}>Veja nossos filmes.</Link>
        </div>
    )
}