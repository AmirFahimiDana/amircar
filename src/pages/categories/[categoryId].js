import { useRouter } from 'next/router'
import carsData from 'data/carsData';
import CarList from "components/templates/CarList";

function Category() {
    const router = useRouter();
    const { categoryId } = router.query;
    const carsFiltered = carsData.filter(car => car.category === categoryId)
    
    return (
         <div><CarList data = {carsFiltered} /></div>
    )
}

export default Category