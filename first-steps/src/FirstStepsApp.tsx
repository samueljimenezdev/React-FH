import { ItemCounter } from "./shopping-cart/ItemCounter";

export interface ItemInCart {
    productName: string,
    quantity: number
}

const itemsInCart: ItemInCart[] = [
    { productName: 'Nintendo', quantity: 0 },
    { productName: 'Xbox', quantity: 0 },
    { productName: 'Play Station', quantity: 0 }
]

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de compra</h1>
            {
                itemsInCart.map(({ productName, quantity }) => (
                    <ItemCounter key={productName} name={productName} quantity={quantity} />
                ))
            }
        </>

    )
}