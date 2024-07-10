import { Fragment } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import RentalList from '../components/RentalList'
import Footer from '../components/Footer'

const Home = () => (
    <>
        <header>
            <Header />
        </header>
        <main>
            <section>
                <Banner />
            </section>
            <section>
                <RentalList />
            </section>
        </main>
        <Footer>
            <Footer />
        </Footer>
    </>
)

export default Home