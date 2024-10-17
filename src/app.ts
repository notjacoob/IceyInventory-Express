import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import cors from 'cors'
import batchRouter from './batches/batches.routes'
import flavorRouter from './flavors/flavors.routes'

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(helmet())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

if (process.env.NODE_ENV == 'development') {
    console.log("Booting in dev mode!")
}
app.get('/', (req, res) => {
    res.status(200).json({Greeting: "Hello and welcome!"})
})
app.use('/', [batchRouter, flavorRouter])
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}/`)
})