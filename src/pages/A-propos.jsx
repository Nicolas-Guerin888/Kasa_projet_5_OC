import Banner from "../components/Banner"
import Collapses from "../components/Collapses"
import Footer from "../components/Footer"
import Header from "../components/Header"


const APropos = () => (
    <>
        <header>
            <Header />
        </header>
        <main>
            <section>
                <Banner />
            </section>
            <section>
                <Collapses />
            </section>
        </main>
        <Footer>
            <Footer />
        </Footer>
    </>
)

export default APropos
