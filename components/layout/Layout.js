import Link from 'next/link'
import styles from './Layout.module.css'

function Layout({ children }) {
    return (
        <>
            <header className={styles.header}>
                <Link href="/ ">
                    <h2>BotoCar</h2>
                    <p>Choose And Buy your car</p>
                </Link>
            </header>
            <div className={styles.container}>{children}</div>
            <footer className={styles.footer}>
                <a href="https://botostart.ir" target="_blank"> Botostart </a>{" "} Next.js Course | BotoCar Project &copy;
            </footer>
        </>
    )
}

export default Layout