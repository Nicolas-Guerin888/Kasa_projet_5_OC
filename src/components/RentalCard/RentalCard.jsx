import { Link } from 'react-router-dom'

// Ce composant va créé l'URL /fiche-logement avec l'ID correspondant au logement cliqué sur la page Home
const RentalCard = ({id, title, cover}) => (
    <Link to={`/house-sheet/${id}`} className="card">
        <img className="card__img" src={cover} alt={title} />
        <div className='card__content'>
            <h3 className="card__title">{title}</h3>
        </div>
    </Link>
)

export default RentalCard