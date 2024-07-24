import logo from '../../assets/LOGO.footer.png'

const Footer = () => (
    <>
        <footer className='footer'>
            <img src={logo} alt='Logo de la marque Kasa' 
                className='footer__logo'/>
            <p className='footer__text'>
                © 2020 Kasa. All rights reserved
            </p>
        </footer>
    </>
)

export default Footer