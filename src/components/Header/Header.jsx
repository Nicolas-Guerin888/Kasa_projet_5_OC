import logoDesktop from '../../assets/LOGO.desktop.png'
import logoMobile from '../../assets/LOGO.mobile.png'
import { Link } from 'react-router-dom'

const Header = () => (
    <>
        <header className='header'>
            <h1 className='header__title'>
                <img src={logoDesktop} alt='Kasa'
                    className='header__title--desktop'/>
                <img src={logoMobile} alt='Kasa'
                    className='header__title--mobile'/>
            </h1>
            <nav className='header__nav'>
                <ul className='header__list'>
                    <li className='header__item'>
                        <Link to="/" className='header__link'>
                            Accueil
                        </Link>
                    </li>
                    <li className='header__item'>
                        <Link to="/a-propos" className='header__link'>
                            À Propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
)

export default Header