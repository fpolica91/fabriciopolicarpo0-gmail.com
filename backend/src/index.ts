import express from 'express'
import routes from './routes'
import cors from 'cors'

const app = express()

app.use(cors({ origin: true }))

app.use(routes)

app.listen(3333)
