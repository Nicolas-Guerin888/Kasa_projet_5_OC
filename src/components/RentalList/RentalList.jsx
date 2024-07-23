import RentalCard from '../RentalCard/RentalCard'
import { useEffect, useState } from "react"
import data from '../../data/data.json'

const RentalList = () => {
    const [rentals, setRentals] = useState([])

    useEffect(() => {
        setRentals(data)
    },[])

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