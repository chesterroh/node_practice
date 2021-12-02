import { createConnection } from "typeorm"
import { Client } from "./entities/Client"
import { Banker } from "./entities/Banker"
import { Transaction } from "./entities/Transaction"
import express from "express"
import { createClientRouter } from "./routes/create_client"
import { createBankerRouter } from "./routes/create_banker"
import { createTransactionRouter } from "./routes/create_transaction"
import { connectBankerToClientRouter } from "./routes/connect_banker_to_client"
import { deleteClientRouter } from "./routes/delete_client"
import { fetchClientRouter } from "./routes/fetch_clients"

const app = express()

const main = async () => {
    try {
        await createConnection({  // strongly suggest to store this information in another file such as env file.
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "chester",
            password: undefined,
            database: "typeorm",
            entities: [Client, Banker, Transaction],
            synchronize: true
        })
        console.log("connnected to postgres server")

        app.use(express.json())
        app.use(createClientRouter)
        app.use(createBankerRouter)
        app.use(createTransactionRouter)
        app.use(connectBankerToClientRouter)
        app.use(deleteClientRouter)
        app.use(fetchClientRouter)

        app.listen(3000, () => {
            console.log("server is listening on port 3000")
        })
    } catch (error) {
        console.log(error)
        throw new Error("Unable to connect to database")
    }
}

main()