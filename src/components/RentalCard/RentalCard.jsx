import { Link } from 'react-router-dom'


const RentalCard = ({id, title, cover}) => (
    <Link to={`/fiche-logement/${id}`} className="card">
        <img className="card__img" src={cover} alt={title} />
        <div className='card__content'>
            <h3 className="card__title">{title}</h3>
        </div>
    </Link>
)

export default RentalCard