import CarsPage from "components/templates/carsPage"
import carsData from "data/carsData"

function Details() {
  return (
    <div>
        <CarsPage data={carsData} />
    </div>
  )
}

export default Details