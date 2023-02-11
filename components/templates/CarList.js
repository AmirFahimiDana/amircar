import Back from 'components/icons/Back';
import Card from 'components/module/Card';
import { useRouter } from 'next/router'
import styles from './CarList.module.css'


function CarList({ data }) {
    const router = useRouter();
    const backHandler = () => {
        router.back()
    }

    return (
        <div className={styles.container}>
            <div className={styles.back} onClick={backHandler}>
                <Back />
                <p>back</p>
            </div>
            <div className={styles.cards}>
                {data.map(car => <Card key={car.id} {...car} />)}
            </div>
        </div>
    )
}

export default CarList