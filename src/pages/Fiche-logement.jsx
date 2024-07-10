import Carrousel from "../components/Carrousel"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Informations from "../components/Informations"


const FicheLogement = () => (
    <>
        <header>
            <Header />
        </header>
        <main>
            <section>
                <Carrousel />
            </section>
            <section>
                <Informations />
            </section>
        </main>
        <Footer>
            <Footer />
        </Footer>
    </>
)

export default FicheLogement