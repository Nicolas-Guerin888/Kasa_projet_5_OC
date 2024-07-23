import Carrousel from "../components/Carrousel/Carrousel"
import Informations from "../components/Informations/Informations"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import data from '../data/data.json'


const FicheLogement = () => {
    let { id } = useParams()
    
    const [rental, setRental] = useState(null)

    useEffect(() => {
        const foundRental = data.find((item) => item.id === id)
        console.log("Found rental: ", foundRental)
        setRental(foundRental)
    }, [id])

    return (
        rental && (
            <>
            <main>
                    <Carrousel key={rental.id} 
                        title={rental.title} 
                        pictures={rental.pictures}/>
                    <Informations key={rental.id} 
                        title={rental.title} 
                        location={rental.location} 
                        host={rental.host}
                        tags={rental.tags}
                        description={rental.description}
                        equipments={rental.equipments}
                        rating={rental.rating}
                        />
            </main>
        </>    
        )
    )
}

export default FicheLogement