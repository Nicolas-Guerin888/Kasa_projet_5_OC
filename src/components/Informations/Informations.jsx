import Tag from '../Tag/Tag'
import Collapse from '../Collapse/Collapse'
import Rating from '../Rating/Rating'

const Informations = ({title, location, host, tags, description, equipments, rating}) => {
    const {name, picture} = host

    return (
        <>
        <section className="informations">
            <div className="informations__left">
                <h2 className="informations__title">{title}</h2>
                <p className="informations__location">{location}</p>
                <div className="informations__tags">
                    {tags.map((tag, index) => (
                        <Tag key={index} tag={tag} />
                    ))}
                </div>
            </div>
            <div className="informations__right">
                <div className="informations__host">
                    <p className="informations__host--name">{name}</p>
                    <img className="informations__host--picture" src={picture} alt={name} />
                </div>
                <Rating rating={rating} />
            </div>
        </section>
        <section className="collapses">
            <div className="collapses__description">
                <Collapse
                    text={description}
                    title="Description" />
            </div>
            <div className="collapses__equipements">
                <Collapse
                    list={equipments}
                    title="Équipements"/>  
            </div>
        </section>
        </>
    )
}

export default Informations