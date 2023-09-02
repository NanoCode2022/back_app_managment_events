import express from 'express'
import cors from 'cors'
import events_entrys from './events'
const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (_req, res) => {
  res.send("server started")
})

app.use("/api/events", events_entrys)


const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
  console.log("server Started " + PORT)
})
