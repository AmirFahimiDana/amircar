import styles from './CarsPage.module.css'
import Card from '../module/Card.js'

function CarsPage({data}) {
  return (
    <div className={styles.container}>{
        data.map(car => <Card key={car.id} {...car}/>)
        }</div>
  )
}

export default CarsPage