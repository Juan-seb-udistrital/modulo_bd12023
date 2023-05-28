'use client'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'
import { eventsCalendar } from '@/types'

const localizer = momentLocalizer(moment)

const BigCalendar = ({ events }: { events: eventsCalendar[] }): JSX.Element => {
  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor='start'
      endAccessor='end'
      style={{ height: 500 }}
    />
  )
}

export default BigCalendar
