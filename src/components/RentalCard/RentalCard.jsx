import imageCard from '../../assets/Rectangle 1.png'

const RentalCard = () => (
    <div className="card">
        <img className="card__img" src={imageCard} alt="" />
        <div className='card__content'>
            <h3 className="card__title">Titre de la location</h3>
        </div>
    </div>
)

export default RentalCard