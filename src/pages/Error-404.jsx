import Footer from "../components/Footer"
import Header from "../components/Header"
import Error from "../components/Error"


const Error404 = () => (
    <>
        <header>
            <Header />
        </header>
        <main>
            <section>
                <Error />
            </section>
        </main>
        <Footer>
            <Footer />
        </Footer>
    </>
)

export default Error404