
const data = {
    nombre: 'Pedro',
    edad: 40
}

export const BotonCambiarData = ({ setData }) => {
    return (
        <>
            <button
                onClick={() => setData(data)}
            >Cambiar Data</button>
        </>
    )
}
