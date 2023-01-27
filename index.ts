import {server, PORT } from "./app"


try {
    server.listen(PORT, async () => {
        console.log("Server is up and ready at port "+PORT)
    })
} catch (error) {
    console.log("An error had happen trying to start the server: "+error)
}
