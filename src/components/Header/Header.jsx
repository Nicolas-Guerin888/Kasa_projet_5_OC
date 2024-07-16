import logoDesktop from '../../assets/LOGO.desktop.png'
import logoMobile from '../../assets/LOGO.mobile.png'
import { NavLink } from 'react-router-dom'

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
                        <NavLink to="/" className={({ isActive }) => isActive ? 'header__link active-link' : 'header__link'}
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li className='header__item'>
                        <NavLink to="/a-propos" className={({ isActive }) => isActive ? 'header__link active-link' : 'header__link'}
                        >
                            À Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </>
)

export default Header