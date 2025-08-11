import type { CSSProperties } from "react"

// Se colocan afuera las constantes para no gastar recursos en el render del componente
const firstName = 'Samuel'
const lastName = 'Jimenez'
const myStyles: CSSProperties = {
    backgroundColor: '#FAFAFA',
    borderRadius: 20,
    padding: 10,
    marginTop: 30,
}
export function MyAwesomeApp() {

    return (
        <>
            <h1>{firstName}</h1>
            <h3 style={myStyles}>{lastName}</h3>
        </>
    )
}