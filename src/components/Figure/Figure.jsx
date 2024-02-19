import styles from './Figure.module.css'
import {useState} from "react";

const Figure = () => {
    const [variant, setVariant] = useState(0)
    console.log(variant)
    return (
        <div>

            <div className={` ${styles.figure} ${variant === 1 ? styles.blue : styles.red} `}/>
            <button onClick={()=>setVariant(0)} className={styles.btn}>Red</button>
            <button onClick={()=>setVariant(1)} className={styles.btn}>Blue</button>
        </div>
    );
};

export default Figure;