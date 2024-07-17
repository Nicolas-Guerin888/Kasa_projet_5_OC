import { useState } from "react";
import { Collapse } from "react-collapse";
import boutonOpen from '../../assets/Vector open.png';
import boutonClose from '../../assets/Vector close.png';

const MyCollapse = ({title, text}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
            <div className="collapse__banner">
                <h3 className="collapse__title">{title}</h3>
                <button className="collapse__button" onClick={() => setIsOpen(!isOpen)}>
                    <img src={isOpen ? boutonClose : boutonOpen} alt={isOpen ? "Fermer" : "Ouvrir"} />
                </button>
            </div>
            <Collapse isOpened={isOpen}>
                <div className="collapse__content">
                    <p className="collapse__text">{text}</p>
                </div>
            </Collapse>
        </div>
    );
}

export default MyCollapse