import express from "express"
import { Transaction, TransactionTypes } from "../entities/Transaction"
import { Client } from "../entities/Client"

const router = express.Router()

router.post('/api/client/:clientId/transaction', async (req, res) => {
    const { clientId } = req.params   // param 은 URL 에서 꺼냄 
    const { type, amount } = req.body  // body 가 request 에서 넘어오는 데이터

    const client = await Client.findOne(parseInt(clientId))

    if (!client) {
        return res.json({
            msg: "client not found"
        })
    }

    const transaction = Transaction.create({
        amount: Number(amount),
        type,
        client
    })

    await transaction.save()

    if (type === TransactionTypes.DEPOSIT) {
        client.balance = Number(client.balance) + Number(amount)
    } else if (type === TransactionTypes.WITHDRAW) {
        client.balance = Number(client.balance) - Number(amount)
    }
    await client.save()

    return res.json({
        msg: "successful",
        client
    })
})



export {
    router as createTransactionRouter
}

