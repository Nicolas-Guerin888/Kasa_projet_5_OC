import Carrousel from "../components/Carrousel/Carrousel"
import Informations from "../components/Informations/Informations"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import data from '../data/data.json'


const HouseSheet = () => {
    // Cette ligne permet de récupérer l'ID du logement à partir de l'URL
    const { id } = useParams()

    const navigate = useNavigate()

    // Cette ligne initialise un état local "rental" pour stocker les détails du logement
    const [rental, setRental] = useState(null)


    // Ce bloc de code permet de rechercher un logement dans le fichier data grâce à l'ID. 
    // Si le code ne trouve pas de logement conforme à un ID, il renvoi vers la page d'erreur 404.
    // Si le code trouve un logement, il met à jour l'état "rental" avec les détails du logement trouvé
    useEffect(() => {
        const foundRental = data.find((item) => item.id === id)
        if (!foundRental) {
            navigate('/404')
        } else {
        setRental(foundRental)
        }
    }, [id, navigate])

    return (
        // "rental" doit être défini pour avoir un rendu
        rental && (
            <>
            <main>
                    <Carrousel key={`${rental.id}-carrousel`} 
                        title={rental.title} 
                        pictures={rental.pictures}/>
                    <Informations key={`${rental.id}-informations`} 
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

export default HouseSheet