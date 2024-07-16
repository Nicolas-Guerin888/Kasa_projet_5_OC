import { Link } from "react-router-dom"

const Error404 = () => (
    <section className="error">
        <h2 className="error__title">404</h2>
        <p className="error__text">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="error__link">Retourner sur la page d'accueil</Link>
    </section>
)

export default Error404