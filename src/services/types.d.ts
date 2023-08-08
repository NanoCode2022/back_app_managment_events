export interface Event {
  name: string,
  date: string,
  time: string,
  location: string,
  description: string,
  asisst: Asisst[],
}

interface Asisst {
  name: string,
  surname: string,
}
