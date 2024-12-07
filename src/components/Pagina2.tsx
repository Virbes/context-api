export const Pagina2 = ({ data }) => {
    return (
        <div>
            Pagina2

            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    )
}
