import { useState } from "react";
import styles from './ItemCounter.module.css'

interface Props {
    name: string;
    quantity: number;
}

export const ItemCounter = ({ name, quantity }: Props) => {

    const [count, setCount] = useState(quantity)

    const handleClickIncrement = () => {
        setCount(count + 1)
    }

    const handleClickDecrement = () => {
        if (count == 0) return
        setCount(count - 1)
    }

    return (
        <section className={styles['item-row']} >

            <span className={styles['itemName']}>{name}</span>
            <button onClick={handleClickIncrement}>+1</button>
            <span>{count}</span>
            <button onClick={handleClickDecrement}>-1</button>

        </section>
    )
}


