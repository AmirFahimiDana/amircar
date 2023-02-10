import { useRouter } from 'next/router'
import carsData from 'data/carsData';
import CarsDetail from 'components/templates/CarsDetail';

function CarDetail() {
    const router = useRouter();
    const { cardId } = router.query;
    const carDetails = carsData[cardId - 1]


    return (
        <div>{<CarsDetail {...carDetails} />} </div>
    )
}

export default CarDetail