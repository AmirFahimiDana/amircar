import { useRouter } from 'next/router'
import { useState } from 'react'
import Styles from './SearchBar.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SearchBar() {
    const router = useRouter();
    const [min, setMin] = useState("")
    const [max, setMax] = useState("")
    // const notify = () => toast("Wow so easy!");

    const searchHandler = () => {
        if (min && max) {
            router.push(`/filter/${min}/${max}`)
        } else {
            toast.warn("Please enter",{position:"top-right"})
        }
    }

    return (
        <div className={Styles.container}>
            <div>
                <input placeholder='Enter min-price' value={min} onChange={e => setMin(e.target.value)} />
                <input placeholder='Enter Max-price' value={max} onChange={e => setMax(e.target.value)} />
                <button onClick={searchHandler}>Search</button>
                <ToastContainer />
            </div>
        </div>
    )
}

export default SearchBar