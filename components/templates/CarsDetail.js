import Calender from 'components/icons/Calender'
import Company from 'components/icons/Company'
import Location from 'components/icons/Location'
import Model from 'components/icons/Model'
import Money from 'components/icons/Money'
import Road from 'components/icons/Road'
import styles from './CarsDetail.module.css'

function CarsDetail(props) {
    const { id, name, model, year, distance, location, image, price, description } = props

    return (
        <div className={styles.container}>
            <img src={image} className={styles.image} />
            <h3 className={styles.header}>{name} {model}</h3>
            <div className={styles.details}>
                <div>
                    <Company />
                    <p>Company</p>
                    <span>{name}</span>
                </div>
                <div>
                    <Model />
                    <p>Model</p>
                    <span>{model}</span>
                </div>
                <div>
                    <Calender />
                    <p>First Registeration</p>
                    <span>{year}</span>
                </div>
                <div>
                    <Road />
                    <p>KMS driven</p>
                    <span>{distance}</span>
                </div>

            </div>
            <div className={styles.details}>
                <div>
                    <Location />
                    <p>Location</p>
                    <span>{location}</span>
                </div>
            </div>
            <div className={styles.details}>
                <p className={styles.descriptionTitle}>Extra Information</p>
                <p className={styles.descriptionText}>{description}</p>
            </div>
            <div className={styles.details}>
                <div className={styles.price}>
                    <Money />
                    <p>Price:</p>
                    <span>{price}</span>
                </div>
            </div>
            <button className={styles.button}>Buy</button>
        </div>
    )
}

export default CarsDetail