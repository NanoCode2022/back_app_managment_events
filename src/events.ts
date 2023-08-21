import express from 'express'
import { getEvents } from './services/eventService'


const router = express.Router()



router.get('/', (req, res) => {
  const filters = req.query
  const filteredEvents = getEvents().filter((data: any): boolean => {
    let isValid = true
    for (let key in filters) {
      isValid = isValid && data[key].toLowerCase().includes(filters[key])
    }
    return isValid
  })
  res.send(filteredEvents)
})

router.put('/edit/:id', (req, res) => {
  const data = req.body
  const id = req.params.id
  const indice = getEvents().findIndex(value => value.name == id)

  if (indice >= 0) {
    getEvents()[indice] = data
  }
  res.status(200).send(getEvents())
})
export default router
