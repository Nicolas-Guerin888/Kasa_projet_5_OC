import RentalCard from '../RentalCard/RentalCard'
import { useEffect, useState } from "react"
import data from '../../data/data.json'

const RentalList = () => {

    // Cette ligne initialise un état local "rental" avec un tableau vide
    const [rentals, setRentals] = useState([])

    // Cette ligne récupère les données "data" provenant du fichier data.json, et met à jour l'état "rental" avec
    useEffect(() => {
        setRentals(data)
    },[])

    // Ce bloc de code mappe chaque éléments de "rentals" (data) et il crée une card pour chaque
    return (
    <section className="rentalList">
        {rentals.map(rental => (
            <RentalCard key={rental.id} 
                id={rental.id} 
                title={rental.title} 
                cover={rental.cover} 
            />
        ))}
    </section>
    )
}

export default RentalList