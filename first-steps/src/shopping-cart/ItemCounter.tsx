interface Props {
    name: string;
    quantity?: number; // No es obligatorio
}

const handleClickIncrement = () => {
    console.log('click increment')
}

const handleClickDecrement = () => {
    console.log('click decrement')
}


export const ItemCounter = ({ name, quantity }: Props) => {
    return (
        <section style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10
        }}>
            <span style={{
                minWidth: 100
            }}>{name}</span>
            <button onClick={handleClickIncrement}>+1</button>
            <span>{quantity}</span>
            <button onClick={handleClickDecrement}>-1</button>

        </section>
    )
}


