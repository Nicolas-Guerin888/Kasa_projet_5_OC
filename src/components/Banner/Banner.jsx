const Banner = ({ backgroundImage, ImageAlt, text, opacity }) => (
    <section className="banner">
        <img className="banner__img" src={backgroundImage} alt={ImageAlt} style={{opacity: opacity}} />
        <h2 className="banner__text">{text}</h2>
    </section>

)

export default Banner