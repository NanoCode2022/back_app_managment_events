import listEvent from './mockEvents.json'
import { Event } from './types'


const events: Event[] = listEvent.events as unknown as Event[]

export const getEvents = (): Event[] => events
