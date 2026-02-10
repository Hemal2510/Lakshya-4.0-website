



// "use client"

// import { useEffect, useState } from "react"
// import EventCard from "@/components/EventCard"
// import type { Event } from "@/types/event"



// type Pagination = {
//   current_page: number
//   per_page: number
//   total_events: number
//   total_pages: number
//   has_next: boolean
//   has_prev: boolean
// }

// const EVENT_DAYS = [
//   "2026-02-12",
//   "2026-02-13",
//   "2026-02-14",
//   "2026-02-15",
// ]

// const SPORTS = [
//   "All",
//   "Cricket",
//   "Football",
//   "Badminton",
//   "Athletics",
//   "Basketball",
//   "Volleyball",
//   "Hockey",
//   "WaterPolo",
//   "Swimming",
//   "Table tennis",
//   "Lawn tennis",
//   "Squash",
//   "Chess",
// ]

// const EventsPage = () => {
//   const [selectedDayIndex, setSelectedDayIndex] = useState(0)
//   const [selectedSport, setSelectedSport] = useState("All")
//   const [events, setEvents] = useState<Event[]>([])
//   const [pagination, setPagination] = useState<Pagination | null>(null)
//   const [page, setPage] = useState(1)
//   const [loading, setLoading] = useState(false)

//   const selectedDay = EVENT_DAYS[selectedDayIndex]

//   // 🔁 FETCH EVENTS






//   useEffect(() => {
//     const fetchEvents = async () => {
//       setLoading(true)
//       try {
//         const res = await fetch(

//           `http://localhost:8000/api/events?day=${selectedDay}&page=${page}&limit=3`
//           // `${process.env.NEXT_PUBLIC_API_BASE}/api/events?day=${selectedDay}&page=${page}&limit=3`

//         )
//         const data = await res.json()
//         setEvents(data.events)
//         setPagination(data.pagination)
//       } catch (err) {
//         console.error("Failed to fetch events", err)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchEvents()
//   }, [selectedDay, page])









//   // 🔁 RESET PAGE WHEN DAY OR SPORT CHANGES
//   useEffect(() => {
//     setPage(1)
//   }, [selectedDayIndex, selectedSport])

//   // 🎯 SPORT FILTER (frontend)
//   const filteredEvents =
//     selectedSport === "All"
//       ? events
//       : events.filter(
//           (e) => e.sport.toLowerCase().includes(selectedSport.toLowerCase())
//         )

//   const dayLabel = (index: number) =>
//     `DAY ${String(index).padStart(2, "0")}`

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white px-4 sm:px-8 pb-10 pt-20">
//       <h1 className="text-3xl sm:text-4xl font-bold text-center tracking-wide mt-7">
//         SCHEDULE
//       </h1>
    

// {/* DAY SLIDER */}
// <div className="mt-8">
//   <div className="overflow-x-auto sm:overflow-visible scrollbar-hide">
//     <div
//       className="
//         flex items-center gap-2
//         px-4 py-2
//         bg-white/10 backdrop-blur-md
//         rounded-full
//         min-w-max sm:min-w-0
//         w-max sm:w-fit
//         mx-0 sm:mx-auto
//       "
//     >
//       {/* FIXED LABEL */}
//       <span
//         className="
//           px-4 py-2
//           text-xs sm:text-sm
//           font-semibold
//           text-black
//           bg-yellow-400
//           rounded-full
//           shrink-0
//         "
//       >
//         EVENT DAYS
//       </span>

//       {/* DAY BUTTONS */}
//       {EVENT_DAYS.map((day, index) => (
//         <button
//           key={day}
//           onClick={() => setSelectedDayIndex(index)}
//           className={`px-4 py-2 rounded-full text-xs sm:text-sm shrink-0 transition-all
//             ${
//               selectedDayIndex === index
//                 ? "bg-white text-black"
//                 : "text-gray-300 hover:bg-white/20"
//             }`}
//         >
//           {dayLabel(index)}
//         </button>
//       ))}
//     </div>
//   </div>
// </div>



//       <p className="text-center text-xs sm:text-sm text-gray-400 mb-8 mt-3">
//         {new Date(selectedDay).toDateString()}
//       </p>







//       {/* SPORTS FILTER */}








//     <div className="relative mb-10">
//   <div className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide px-1 py-1">
//     {SPORTS.map((sport) => (
//       <button
//         key={sport}
//         onClick={() => setSelectedSport(sport)}
//         className={`px-4 py-1.5 rounded-full text-xs whitespace-nowrap shrink-0 transition
//           ${
//             selectedSport === sport
//               ? "bg-white text-black"
//               : "bg-white/10 text-gray-300 hover:bg-white/20"
//           }`}
//       >
//         {sport}
//       </button>
//     ))}
//   </div>
// </div>











//       {/* EVENTS */}
//       <div className="max-w-5xl mx-auto space-y-6">
//         {loading && (
//           <p className="text-center text-gray-400">Loading events…</p>
//         )}

//         {!loading &&
//           filteredEvents.map((event) => (
//             <div
//               key={event.id}
//               className="flex flex-col sm:flex-row gap-3 sm:gap-6"
//             >
//               {/* TIME */}
//               <div className="sm:w-20 text-xs sm:text-sm text-gray-400 pt-1 sm:pt-3">
//                 {new Date(event.start_time).toLocaleTimeString("en-IN", {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                   hour12: true,
//                   timeZone: "Asia/Kolkata",
//                 })}
//               </div>

//               {/* CARD */}
//               <div className="flex-1">
//                 <EventCard event={event} />
//               </div>
//             </div>
//           ))}

//         {!loading && filteredEvents.length === 0 && (
//           <p className="text-gray-400 text-center">
//             No events for selected sport
//           </p>
//         )}
//       </div>

//       {/* PAGINATION */}
//       {pagination && (
//         <div className="flex justify-center items-center gap-4 mt-10 flex-wrap">
//           <button
//             disabled={!pagination.has_prev}
//             onClick={() => setPage((p) => p - 1)}
//             className="px-5 py-2 rounded bg-white/10 disabled:opacity-40"
//           >
//             Prev
//           </button>

//           <span className="text-xs sm:text-sm text-gray-400">
//             Page {pagination.current_page} of {pagination.total_pages}
//           </span>

//           <button
//             disabled={!pagination.has_next}
//             onClick={() => setPage((p) => p + 1)}
//             className="px-5 py-2 rounded bg-white/10 disabled:opacity-40"
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }

// export default EventsPage








































// "use client"

// import { useEffect, useState } from "react"
// import EventCard from "@/components/EventCard"
// import type { Event } from "@/types/event"

// import data from "../data/events.json"


// const EVENT_DAYS = [
//   "2026-02-12",
//   "2026-02-13",
//   "2026-02-14",
//   "2026-02-15",
// ]

// const SPORTS = [
//   "All",
//   "Cricket",
//   "Football",
//   "Badminton",
//   "Athletics",
//   "Basketball",
//   "Volleyball",
//   "Hockey",
//   "WaterPolo",
//   "Swimming",
//   "Table tennis",
//   "Lawn tennis",
//   "Squash",
//   "Chess",
// ]

// const EventsPage = () => {
//   const [selectedDayIndex, setSelectedDayIndex] = useState(0)
//   const [selectedSport, setSelectedSport] = useState("All")
//   const [events, setEvents] = useState<Event[]>([])
//   const [loading, setLoading] = useState(false)

//   const selectedDay = EVENT_DAYS[selectedDayIndex]

//   // ✅ LOAD LOCAL JSON
//   useEffect(() => {
//     setLoading(true)

//     setTimeout(() => {
//       setEvents(data as Event[])
//       setLoading(false)
//     }, 300)
//   }, [])

//   // 🎯 FILTER BY DAY
//   const dayFilteredEvents = events.filter(
//     (e) => e.day === selectedDay
//   )

//   // 🎯 FILTER BY SPORT
//   const filteredEvents =
//     selectedSport === "All"
//       ? dayFilteredEvents
//       : dayFilteredEvents.filter((e) =>
//           e.sport.toLowerCase().includes(selectedSport.toLowerCase())
//         )

//   const dayLabel = (index: number) =>
//     `DAY ${String(index ).padStart(2, "0")}`

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white px-4 sm:px-8 pb-10 pt-20">
//       <h1 className="text-3xl sm:text-4xl font-bold text-center tracking-wide mt-7">
//         SCHEDULE
//       </h1>

//       {/* DAY SLIDER */}
//       <div className="mt-8">
//         <div className="overflow-x-auto scrollbar-hide">
//           <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full w-max mx-auto">
//             <span className="px-4 py-2 text-xs sm:text-sm font-semibold text-black bg-yellow-400 rounded-full">
//               EVENT DAYS
//             </span>

//             {EVENT_DAYS.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedDayIndex(index)}
//                 className={`px-4 py-2 rounded-full text-xs sm:text-sm transition
//                   ${
//                     selectedDayIndex === index
//                       ? "bg-white text-black"
//                       : "text-gray-300 hover:bg-white/20"
//                   }`}
//               >
//                 {dayLabel(index)}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       <p className="text-center text-xs sm:text-sm text-gray-400 mb-8 mt-3">
//         {new Date(selectedDay).toDateString()}
//       </p>

//       {/* SPORTS FILTER */}
//       <div className="relative mb-10 ml-15">
//         <div className="flex gap-2 overflow-x-auto scrollbar-hide px-1 py-1">
//           {SPORTS.map((sport) => (
//             <button
//               key={sport}
//               onClick={() => setSelectedSport(sport)}
//               className={`px-4 py-1.5 rounded-full text-xs whitespace-nowrap transition
//                 ${
//                   selectedSport === sport
//                     ? "bg-white text-black"
//                     : "bg-white/10 text-gray-300 hover:bg-white/20"
//                 }`}
//             >
//               {sport}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* EVENTS */}


     
//              <div className="max-w-5xl mx-auto space-y-6">
//            {loading && (
//       <p className="text-center text-gray-400">Loading events…</p>
//                )}

//         {!loading &&
//          filteredEvents.map((event) => (
//             <div
//                key={event.id}
//                className="flex flex-col sm:flex-row gap-3 sm:gap-6" >
                
//                               {/* TIME */}
//               <div className="sm:w-20 text-xs sm:text-sm text-gray-400 pt-1 sm:pt-3">
//                  {new Date(event.start_time).toLocaleTimeString("en-IN", {
//                   hour: "2-digit",
//                  minute: "2-digit",
//                   hour12: true,
//                   timeZone: "Asia/Kolkata",
//                })}
//                  </div>







//         {/* EVENT CARD */}
//         <div className="flex-1">
//           <EventCard event={event} />
//         </div>
//       </div>
//     ))}
// </div>



             
//         {!loading && filteredEvents.length === 0 && (
//           <p className="text-gray-400 text-center">
//             No events for selected filters
//           </p>
//         )}
//       </div>

//   )
// }

// export default EventsPage



























































"use client"

import { useEffect, useState } from "react"
import EventCard from "@/components/EventCard"
import type { Event } from "@/types/event"

const EVENT_DAYS = [
  "2026-02-12",
  "2026-02-13",
  "2026-02-14",
  "2026-02-15",
]

type SportsMap = Record<string, number>

const LIMIT = 5

const EventsPage = () => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0)
  const [selectedSportId, setSelectedSportId] = useState<number | null>(null)

  const [sportsMap, setSportsMap] = useState<SportsMap>({})
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(false)

  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const selectedDay = EVENT_DAYS[selectedDayIndex]

  /* 🔹 FETCH SPORTS (Param API) */
  useEffect(() => {
    fetch("http://localhost:8000/api/events/sports") // ✅ FIXED
      .then(res => res.json())
      .then(data => {
        setSportsMap(data.sports || {})
      })
      .catch(console.error)
  }, [])

  /* 🔹 Reset page on filter change */
  useEffect(() => {
    setPage(1)
  }, [selectedSportId, selectedDay])

  /* 🔹 FETCH EVENTS (day + sports_id + pagination) */
  useEffect(() => {
    const params = new URLSearchParams()

    params.append("day", selectedDay)
    params.append("page", String(page))
    params.append("limit", String(LIMIT))

    if (selectedSportId !== null) {
      params.append("sport_id", String(selectedSportId)) // ✅ FIXED
    }

    console.log("EVENTS API:", `/api/events?${params.toString()}`)

    setLoading(true)

    fetch(`http://localhost:8000/api/events?${params.toString()}`)
      .then(res => res.json())
      .then(data => {
        setEvents(data.events || [])
        setTotalPages(data.pagination?.total_pages || 1) // ✅ FIXED
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [selectedSportId, selectedDay, page])

  const dayLabel = (index: number) =>
    `DAY ${String(index + 1).padStart(2, "0")}`

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white px-4 sm:px-8 pb-10 pt-20">

      <h1 className="text-3xl sm:text-4xl font-bold text-center mt-7">
        SCHEDULE
      </h1>

      {/* DAY SLIDER */}
      <div className="mt-8">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full w-max mx-auto">
            <span className="px-4 py-2 text-xs font-semibold text-black bg-yellow-400 rounded-full">
              EVENT DAYS
            </span>

            {EVENT_DAYS.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedDayIndex(index)}
                className={`px-4 py-2 rounded-full text-xs transition ${
                  selectedDayIndex === index
                    ? "bg-white text-black"
                    : "text-gray-300 hover:bg-white/20"
                }`}
              >
                {dayLabel(index)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-3 mb-8">
        {new Date(selectedDay).toDateString()}
      </p>

      {/* SPORTS FILTER */}
      <div className="mb-10">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide px-1 py-1">
          <button
            onClick={() => setSelectedSportId(null)}
            className={`px-4 py-1.5 rounded-full text-xs transition ${
              selectedSportId === null
                ? "bg-white text-black"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}
          >
            All
          </button>

          {Object.entries(sportsMap).map(([name, id]) => (
            <button
              key={id}
              onClick={() => setSelectedSportId(id)}
              className={`px-4 py-1.5 rounded-full text-xs transition ${
                selectedSportId === id
                  ? "bg-white text-black"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* EVENTS LIST */}
      <div className="max-w-5xl mx-auto space-y-6">
        {loading && (
          <p className="text-center text-gray-400">Loading events…</p>
        )}

        {!loading &&
          events.map(event => (
            <div
              key={event.id}
              className="flex flex-col sm:flex-row gap-3 sm:gap-6"
            >
              <div className="sm:w-20 text-xs sm:text-sm text-gray-400 pt-1 sm:pt-3 whitespace-nowrap">
                {new Date(event.start_time)
                  .toLocaleTimeString("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                    timeZone: "Asia/Kolkata",
                  })
                  .toUpperCase()}
              </div>




              <div className="flex-1">
                <EventCard event={event} />
              </div>



            </div>
          ))}
      </div>

      {!loading && events.length === 0 && (
        <p className="text-gray-400 text-center mt-8">
          No events for selected filters
        </p>
      )}

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            disabled={page === 1}
            onClick={() => setPage(p => p - 1)}
            className="px-4 py-2 rounded-md bg-white/10 text-sm disabled:opacity-40"
          >
            Prev
          </button>

          <span className="text-sm text-gray-400">
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage(p => p + 1)}
            className="px-4 py-2 rounded-md bg-white/10 text-sm disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default EventsPage
