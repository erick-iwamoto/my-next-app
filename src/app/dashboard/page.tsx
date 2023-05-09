export default async function Dashboard() {
    // STATIC GENERATION
    // revalidate do next a cada 30 sec
    // somente o revalidade é gerado dnovo, a pag nao
    const response = await fetch('https://api.github.com/users/erick-iwamoto', {
        next: {
            revalidate: 30,
        }
    })

    // SERVER SIDE RENDERING
    // const response = await fetch('https://api.github.com/users/erick-iwamoto', {
    //     cache: 'no-store'
    // })

    const user = await response.json()

    return (
        <>
            <div>Minha dashboard ----------------</div>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
    )
}