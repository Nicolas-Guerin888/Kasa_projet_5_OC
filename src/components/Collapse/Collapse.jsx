import { useState } from "react"
import boutonOpen from '../../assets/Vector open.png'
import boutonClose from '../../assets/Vector close.png'
import boutonOpenMobile from '../../assets/open-mobile.png'
import boutonCloseMobile from '../../assets/close-mobile.png'

const Collapse = ({title, text, list}) => {
    const [isOpen, setIsOpen] = useState(false)

    
    return (
        <div className="collapse">
            <div className="collapse__banner">
                <h3 className="collapse__title">{title}</h3>
                <button className="collapse__button" onClick={() => setIsOpen(!isOpen)}>
                    <img src={isOpen ? boutonClose : boutonOpen} alt={isOpen ? "Fermer" : "Ouvrir"} />
                </button>
                <button className="collapse__button-mobile" onClick={() => setIsOpen(!isOpen)}>
                    <img src={isOpen ? boutonCloseMobile : boutonOpenMobile} alt={isOpen ? "Fermer" : "Ouvrir"} />
                </button>
            </div>
            <div className={`collapse__content ${isOpen ? 'open' : 'closed'}`}>
                {list ? (
                    <ul className="collapse__text collapse__text--list">
                        {list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="collapse__text">{text}</p>
                )}
            </div>        
        </div>
    )
}

export default Collapse
