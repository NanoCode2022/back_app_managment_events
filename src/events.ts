import express from 'express'
import { getEvents } from './services/eventService'


const router = express.Router()



router.get('/', (req, res) => {
  const filters = req.query
  const filteredEvents = getEvents().filter((data:any):boolean => {
    let isValid = true
    for (let key in filters) {
      isValid = isValid && data[key].toLowerCase().includes(filters[key])
    }
    return isValid
  })
  res.send(filteredEvents)
})

export default router
