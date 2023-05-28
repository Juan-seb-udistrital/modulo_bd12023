export interface valuesExample {
  name: string
  calories: number
  fat: number
  carbs: number
  protein: number
}

export interface attendanceStudent {
  attendance: boolean
  code: string
  first_name: string
  last_name: string
  date: Date
}

export interface eventsCalendar {
  id: number
  title: string
  start: Date | string
  end: Date | string
}

export interface candidates {
  id: string
  first_name: string
  last_name: string
  project: string
  degree: string
  instrument: string
  rating: number
}
