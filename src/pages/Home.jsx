import Banner from '../components/Banner/Banner'
import RentalList from '../components/RentalList/RentalList'
import imageBanner from '../assets/image-banner-Home.jpg'

const Home = () => (
    <>
        <main>
            <Banner 
                backgroundImage={imageBanner}
                imageAlt="Vue en plongée d'une falaise et de l'océan, sur un fond de ciel nuageux."
                text="Chez vous, partout et ailleurs"
                opacity={0.3} />
            <RentalList />
        </main>
    </>
)

export default Home