import Button from "../components/Button"

function Home() {
    return (
        <div className="flex flex-col  items-center justify-center min-h-dvh gap-4">
            <h1>Home</h1>
            <Button variant="primary">Primario</Button>
            <Button variant="secondary">Secundario</Button>
            <p>Hola Mundo!</p>
        </div>
    )
}

export default Home
