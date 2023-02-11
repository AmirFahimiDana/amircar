import styles from './Categories.module.css'
import Sedan from 'components/icons/Sedan'
import Suv from 'components/icons/Suv'
import Hatchback from 'components/icons/Hatchback'
import Sport from 'components/icons/Sport'
import Link from 'next/link'

function Categories() {
    return (
        <div className={styles.container}>
            <Link href='/categories/sedan'>
                <div>
                    <p>Sedan</p>
                    <Sedan />
                </div>
            </Link>
            <Link href='/categories/suv'>
                <div>
                    <p>SUV</p>
                    <Suv />
                </div>
            </Link>
            <Link href='/categories/hatchback'>
                <div>
                    <p>Hatchback</p>
                    <Hatchback />
                </div>
            </Link>
            <Link href='/categories/sport'>
                <div>
                    <p>Sport</p>
                    <Sport />
                </div>
            </Link>
        </div>
    )
}

export default Categories