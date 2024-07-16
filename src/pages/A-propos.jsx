import Banner from "../components/Banner/Banner"
import CollapsesList from "../components/CollapsesList/CollapsesList"
import imageBanner from '../assets/image-banner-A-propos.jpg'


const APropos = () => (
    <>
        <main>
            <Banner
                backgroundImage={imageBanner}
                ImageAlt="Vue d'une vallée au creux de montagnes enneigées."
                opacity={0.7} />
            <CollapsesList />
        </main>
    </>
)

export default APropos
