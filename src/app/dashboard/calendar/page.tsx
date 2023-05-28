import { eventsCalendar } from '@/types'
import BigCalendar from '@/components/BigCalendar'
import OptionsCalendarClient from '@/components/OptionsCalendarClient'

const fetcher = async (): Promise<eventsCalendar[]> => await fetch('http://localhost:3000/calendar/events').then(async res => await res.json())

const Calendar = async (): Promise<any> => {
  const events: eventsCalendar[] = await fetcher()
  const eventsMap: eventsCalendar[] = events.map((event: eventsCalendar) => {
    return {
      id: event.id,
      title: event.title,
      start: new Date(event.start),
      end: new Date(event.end)
    }
  })

  return (
    <main className='w-full flex flex-col justify-center my-5'>
      <section className='w-[90%] m-auto'>
        <BigCalendar events={eventsMap} />
      </section>
      <OptionsCalendarClient />
    </main>
  )
}

export default Calendar
