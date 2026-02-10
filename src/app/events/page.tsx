/* eslint-disable @typescript-eslint/no-unused-vars */
 


"use client";

// import PendulumTextReveal from "@/components/Pendulum";
// import { motion, useMotionValue, useTransform } from "framer-motion";

// export default function SponsorsPage() {
//   return (
//     <main className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto">

//       <PendulumTextReveal/>
//     </main>
//   );
// }





// import EventCard from "@/components/EventCard"
// import type { Event } from "@/types/event"
// import data from "../data/events.json"

// const EventDashboard = () => {
//   const events = data.events as Event[]   // ✅ tell TS explicitly

//   return (
//     <div className="px-6">
//       {events.map((event) => (
//         <EventCard key={event.id} event={event} />
//       ))}
//     </div>
//   )
// }

// export default EventDashboard








// import EventCard from "@/components/EventCard"
// import type { Event } from "@/types/event"
// import data from "../data/events.json"

// const EventsPage = () => {
//   const events = data.events as Event[]

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white px-8 py-6">
//       {/* PAGE TITLE */}
//       <h1 className="text-3xl font-bold mb-6 tracking-wide">
//         LAKSHYA SPORTS FEST
//       </h1>

//       {/* MAIN LAYOUT */}
//       <div className="grid grid-cols-12 gap-6">
//         {/* LEFT: TIMELINE + EVENTS */}
//         <div className="col-span-9 relative">
//           {/* Vertical line */}
//           <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />

//           <div className="space-y-8">
//             {events.map((event) => (
//               <div key={event.id} className="flex gap-6">
//                 {/* TIME */}
//                 <div className="w-20 text-sm text-gray-400 pt-3">
//                   {new Date(event.start_time).toLocaleTimeString([], {
//                     hour: "2-digit",
//                     minute: "2-digit",
//                   })}
//                 </div>

//                 {/* EVENT CARD */}
//                 <div className="flex-1">
//                   <EventCard event={event} />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT: SIDEBAR */}
//         <div className="col-span-3 space-y-6">
//           {/* POINTS TABLE */}
//           <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
//             <h3 className="font-semibold mb-3">Points Table</h3>
//             <ul className="text-sm space-y-2 text-gray-300">
//               <li className="flex justify-between">
//                 <span>🥇 CSE</span>
//                 <span>5</span>
//               </li>
//               <li className="flex justify-between">
//                 <span>🥈 ME</span>
//                 <span>3</span>
//               </li>
//               <li className="flex justify-between">
//                 <span>🥉 ECE</span>
//                 <span>2</span>
//               </li>
//             </ul>
//           </div>

//           {/* CAMPUS MAP */}
//           <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
//             <h3 className="font-semibold mb-3">Campus Map</h3>
//             <div className="h-40 rounded-lg bg-black/40 flex items-center justify-center text-gray-400 text-sm">
//               Map Preview
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default EventsPage









// import EventCard from "@/components/EventCard"
// import type { Event } from "@/types/event"
// import data from "../data/events.json"
// import { useState } from "react"

// const EventsPage = () => {
//   const events = data.events as Event[]

//   const [selectedDay, setSelectedDay] = useState("DAY 01")
//   const [selectedSport, setSelectedSport] = useState("All")
//   const [selectedStatus, setSelectedStatus] = useState("All")

//   const filteredEvents = events.filter((event) => {
//     if (event.day !== selectedDay) return false
//     if (selectedSport !== "All" && event.sport !== selectedSport) return false
//     if (selectedStatus !== "All" && event.status !== selectedStatus) return false
//     return true
//   })

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white px-8 pb-10 pt-20">
//       {/* TITLE */}
//       <h1 className="text-4xl font-bold text-center tracking-wide mb-15">
//         LAKSHYA SPORTS FEST
//       </h1>

     


//      {/* DAY SLIDER TAB */}
//       <div className="flex justify-center mb-10">
//         <div className="bg-white/10 backdrop-blur-md rounded-full px-2 py-2 flex items-center gap-2">
//           {/* MAIN TAB */}
//           <span className="px-5 py-2 text-sm font-semibold text-black bg-yellow-400 rounded-full">
//             EVENT DAYS
//           </span>

//           {/* SLIDING DAYS */}
//           {["DAY 01", "DAY 02", "DAY 03"].map((day) => (
//             <button
//               key={day}
//               onClick={() => setSelectedDay(day)}
//               className={`px-4 py-2 rounded-full text-sm transition-all duration-300
//                 ${
//                   selectedDay === day
//                     ? "bg-white text-black shadow-md"
//                     : "text-gray-300 hover:bg-white/20"
//                 }`}
//             >
//               {day}
//             </button>
//           ))}
//         </div>
//       </div>










//       {/* SPORTS + STATUS FILTERS */}
//       <div className="flex justify-center flex-wrap gap-3 mb-10">
//         {["All", "Cricket", "Football", "Badminton", "Athletics","Basketball","Volleyball","Hockey","WaterPolo","Swimming"
//           ,"Table tennis","Lawn tennis","Squash","Chess"].map(

//           (sport) => (
//             <button
//               key={sport}
//               onClick={() => setSelectedSport(sport)}
//               className={`px-4 py-1.5 rounded-full text-xs
//                 ${
//                   selectedSport === sport
//                     ? "bg-white text-black"
//                     : "bg-white/10 text-gray-300 hover:bg-white/20"
//                 }`}
//             >
//               {sport}
//             </button>
//           )
//         )}



//         {[ "live", "upcoming", "completed"].map((status) => (
//           <button
//             key={status}
//             onClick={() => setSelectedStatus(status)}
//             className={`px-4 py-1.5 rounded-full text-xs uppercase
//               ${
//                 selectedStatus === status
//                   ? "bg-red-500 text-white"
//                   : "bg-white/10 text-gray-300 hover:bg-white/20"
//               }`}
//           >
//             {status}
//           </button>
//         ))}
//       </div>






//       {/* MAIN GRID */}
//       <div className="grid grid-cols-12 gap-6">
//         {/* LEFT: TIMELINE */}
//         <div className="col-span-9 relative">
//           <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />

//           <div className="space-y-8">
//             {filteredEvents.map((event) => (
//               <div key={event.id} className="flex gap-6">
//                 {/* TIME */}
//                 <div className="w-20 text-sm text-gray-400 pt-3">
//                   {new Date(event.start_time).toLocaleTimeString([], {
//                     hour: "2-digit",
//                     minute: "2-digit",
//                   })}
//                 </div>

//                 {/* EVENT CARD */}
//                 <div className="flex-1">
//                   <EventCard event={event} />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT: SIDEBAR */}
//         <div className="col-span-3 space-y-6">
          
         

//           {/* CAMPUS MAP */}
//           <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
//             <h3 className="font-semibold mb-3 flex items-center gap-2">
//               📍 Campus Map
//             </h3>
//             {/* <div className="h-40 rounded-lg bg-black/40 flex items-center justify-center text-gray-400 text-sm">
//               Map Preview
//             </div> */}


//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default EventsPage












// "use client"

// import { useState } from "react"
// import EventCard from "@/components/EventCard"
// import type { Event } from "@/types/event"
// import data from "../data/events.json"

// type DayBlock = {
//   day: string
//   events: Event[]
//   pagination: {
//     current_page: number
//     per_page: number
//     total_events: number
//     total_pages: number
//     has_next: boolean
//     has_prev: boolean
//   }
// }

// const EventsPage = () => {
//   const daysData = data as DayBlock[]

//   // selected day index (0 = first day)
//   const [selectedDayIndex, setSelectedDayIndex] = useState(0)
//   const [selectedSport, setSelectedSport] = useState("All")
//   const [selectedStatus, setSelectedStatus] = useState("All")

//   const currentDay = daysData[selectedDayIndex]

//   const filteredEvents = currentDay.events.filter((event) => {
//     if (selectedSport !== "All" && event.sport !== selectedSport) return false
//     if (selectedStatus !== "All" && event.status !== selectedStatus) return false
//     return true
//   })

//   const dayLabel = (index: number) =>
//     `DAY ${String(index + 1).padStart(2, "0")}`

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white px-8 pb-10 pt-20">
//       {/* TITLE */}
//       <h1 className="text-4xl font-bold text-center tracking-wide mb-12">
//         LAKSHYA SPORTS FEST
//       </h1>

//       {/* DAY SLIDER */}
//       <div className="flex justify-center mb-10">
//         <div className="bg-white/10 backdrop-blur-md rounded-full px-2 py-2 flex items-center gap-2">
//           <span className="px-5 py-2 text-sm font-semibold text-black bg-yellow-400 rounded-full">
//             EVENT DAYS
//           </span>

//           {daysData.map((dayObj, index) => (
//             <button
//               key={dayObj.day}
//               onClick={() => setSelectedDayIndex(index)}
//               className={`px-4 py-2 rounded-full text-sm transition-all duration-300
//                 ${
//                   selectedDayIndex === index
//                     ? "bg-white text-black shadow-md"
//                     : "text-gray-300 hover:bg-white/20"
//                 }`}
//             >
//               {dayLabel(index)}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* DATE DISPLAY */}
//       <p className="text-center text-sm text-gray-400 mb-10">
//         {new Date(currentDay.day).toDateString()}
//       </p>

//       {/* SPORTS + STATUS FILTERS */}
//       <div className="flex justify-center flex-wrap gap-3 mb-10">
//         {[
//           "All",
//           "Cricket",
//           "Football",
//           "Badminton",
//           "Athletics",
//           "Basketball",
//           "Volleyball",
//           "Hockey",
//           "WaterPolo",
//           "Swimming",
//           "Table tennis",
//           "Lawn tennis",
//           "Squash",
//           "Chess",
//         ].map((sport) => (
//           <button
//             key={sport}
//             onClick={() => setSelectedSport(sport)
//               setSelectedStatus("All")
//             }
//             className={`px-4 py-1.5 rounded-full text-xs
//               ${
//                 selectedSport === sport
//                   ? "bg-white text-black"
//                   : "bg-white/10 text-gray-300 hover:bg-white/20"
//               }`}
//           >
//             {sport}
//           </button>
//         ))}




//          {["live", "upcoming", "completed"].map((status) => (
//           <button
//             key={status}
//             onClick={() => setSelectedStatus(status)}
//             className={`px-4 py-1.5 rounded-full text-xs uppercase
//               ${
//                 selectedStatus === status
//                   ? "bg-red-500 text-white"
//                   : "bg-white/10 text-gray-300 hover:bg-white/20"
//               }`}
//           >
//             {status}
//           </button>
//         ))}
          
//        </div>
  


//       {/* MAIN GRID */}
//       <div className="grid grid-cols-12 gap-6">
//         {/* LEFT: EVENTS */}
//         <div className="col-span-9 relative">
//           <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />

//           <div className="space-y-8">
//             {filteredEvents.map((event) => (
//               <div key={event.id} className="flex gap-6">
//                 <div className="w-20 text-sm text-gray-400 pt-3">


//                   {/* {new Date(event.start_time).toLocaleTimeString([], {
//                     hour: "2-digit",
//                     minute: "2-digit",
//                   })} */}
                 


//                  {new Date(event.start_time).toLocaleTimeString("en-IN", {
//                     hour: "2-digit",
//                     minute: "2-digit",
//                     hour12: true,
//                     timeZone: "Asia/Kolkata",
//                     })}


//                 </div>

//                 <div className="flex-1">
//                   <EventCard event={event} />
//                 </div>
//               </div>
//             ))}

//             {filteredEvents.length === 0 && (
//               <p className="text-gray-400 text-center mt-10">
//                 No events for selected filters
//               </p>
//             )}
//           </div>
//         </div>

//         {/* RIGHT SIDEBAR */}
//         <div className="col-span-3">
//           <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
//             <h3 className="font-semibold mb-3 flex items-center gap-2">
//               📍 Campus Map
//             </h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default EventsPage














// "use client"

// import { useState } from "react"
// import EventCard from "@/components/EventCard"
// import type { Event } from "@/types/event"
// import data from "../data/events.json"

// type DayBlock = {
//   day: string
//   events: Event[]
//   pagination: {
//     current_page: number
//     per_page: number
//     total_events: number
//     total_pages: number
//     has_next: boolean
//     has_prev: boolean
//   }
// }

// const EventsPage = () => {
//   const daysData = data as DayBlock[]

//   const [selectedDayIndex, setSelectedDayIndex] = useState(0)
//   const [selectedSport, setSelectedSport] = useState("All")
//   const [selectedStatus, setSelectedStatus] = useState("All")

//   const currentDay = daysData[selectedDayIndex]

 
//   const filteredEvents = currentDay.events.filter((event) => {
//     if (selectedSport !== "All" && event.sport !== selectedSport) return false
//     if (selectedStatus !== "All" && event.status !== selectedStatus) return false
//     return true
//   })

//   const dayLabel = (index: number) =>
//     `DAY ${String(index + 1).padStart(2, "0")}`

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white px-8 pb-10 pt-20">
//       {/* TITLE */}
//       <h1 className="text-4xl font-bold text-center tracking-wide mt-7">
//         SCHEDULE
//       </h1>

//       {/* DAY SLIDER */}
//       <div className="flex justify-center mt-9">
//         <div className="bg-white/10 backdrop-blur-md rounded-full px-2 py-2 flex items-center gap-2">
//           <span className="px-5 py-2 text-sm font-semibold text-black bg-yellow-400 rounded-full">
//             EVENT DAYS
//           </span>

//           {daysData.map((dayObj, index) => (
//             <button
//               key={dayObj.day}
//               onClick={() => setSelectedDayIndex(index)}
//               className={`px-4 py-2 rounded-full text-sm transition-all duration-300
//                 ${
//                   selectedDayIndex === index
//                     ? "bg-white text-black shadow-md"
//                     : "text-gray-300 hover:bg-white/20"
//                 }`}
//             >
//               {dayLabel(index)}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* DATE */}
//       <p className="text-center text-sm text-gray-400 mb-10">
//         {new Date(currentDay.day).toDateString()}
//       </p>

//       {/* SPORTS + STATUS FILTERS */}
//       <div className="flex justify-center flex-wrap gap-3 mb-10">
//         {[
//           "All",
//           "Cricket",
//           "Football",
//           "Badminton",
//           "Athletics",
//           "Basketball",
//           "Volleyball",
//           "Hockey",
//           "WaterPolo",
//           "Swimming",
//           "Table tennis",
//           "Lawn tennis",
//           "Squash",
//           "Chess",
//         ].map((sport) => (
//           <button
//             key={sport}
//             onClick={() => {
//               setSelectedSport(sport)
//               setSelectedStatus("All") 
//             }}
//             className={`px-4 py-1.5 rounded-full text-xs
//               ${
//                 selectedSport === sport
//                   ? "bg-white text-black"
//                   : "bg-white/10 text-gray-300 hover:bg-white/20"
//               }`}
//           >
//             {sport}
//           </button>
//         ))}

//         {["live", "upcoming", "completed"].map((status) => (
//           <button
//             key={status}
//             onClick={() => {
//               setSelectedStatus(status)
//               setSelectedSport("All") 
//             }}
//             className={`px-4 py-1.5 rounded-full text-xs uppercase
//               ${
//                 selectedStatus === status
//                   ? "bg-red-500 text-white"
//                   : "bg-white/10 text-gray-300 hover:bg-white/20"
//               }`}
//           >
//             {status}
//           </button>
//         ))}
//       </div>

//       {/* MAIN GRID */}
//       <div className="grid grid-cols-12 gap-6">
//         {/* LEFT */}
//         <div className="col-span-9 relative">
//           <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />

//           <div className="space-y-8">
//             {filteredEvents.map((event) => (
//               <div key={event.id} className="flex gap-6">
//                 {/* TIME */}
//                 <div className="w-20 text-sm text-gray-400 pt-3">
//                   {new Date(event.start_time).toLocaleTimeString("en-IN", {
//                     hour: "2-digit",
//                     minute: "2-digit",
//                     hour12: true,
//                     timeZone: "Asia/Kolkata",
//                   })}
//                 </div>

//                 {/* CARD */}
//                 <div className="flex-1">
//                   <EventCard event={event} />
//                 </div>
//               </div>
//             ))}

//             {filteredEvents.length === 0 && (
//               <p className="text-gray-400 text-center mt-10">
//                 No events for selected filter
//               </p>
//             )}
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="col-span-3">
//           <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
//             <h3 className="font-semibold mb-3 flex items-center gap-2">
//               📍 Campus Map
//             </h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default EventsPage















// "use client"

// import { useState } from "react"
// import EventCard from "@/components/EventCard"
// import type { Event } from "@/types/event"
// import data from "../data/events.json"

// type DayBlock = {
//   day: string
//   events: Event[]
//   pagination: {
//     current_page: number
//     per_page: number
//     total_events: number
//     total_pages: number
//     has_next: boolean
//     has_prev: boolean
//   }
// }

// const EventsPage = () => {
//   const daysData = data as DayBlock[]

//   const [selectedDayIndex, setSelectedDayIndex] = useState(0)
//   const [selectedSport, setSelectedSport] = useState("All")

//   const currentDay = daysData[selectedDayIndex]

//   const filteredEvents = currentDay.events.filter((event) => {
//     if (selectedSport !== "All" && event.sport !== selectedSport) return false
//     return true
//   })

//   const dayLabel = (index: number) =>
//     `DAY ${String(index + 1).padStart(2, "0")}`

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white px-8 pb-10 pt-20">
//       <h1 className="text-4xl font-bold text-center tracking-wide mt-7">
//         SCHEDULE
//       </h1>

//       {/* DAY SLIDER */}
//       <div className="flex justify-center mt-9">
//         <div className="bg-white/10 backdrop-blur-md rounded-full px-2 py-2 flex items-center gap-2">
//           <span className="px-5 py-2 text-sm font-semibold text-black bg-yellow-400 rounded-full">
//             EVENT DAYS
//           </span>

//           {daysData.map((dayObj, index) => (
//             <button
//               key={dayObj.day}
//               onClick={() => setSelectedDayIndex(index)}
//               className={`px-4 py-2 rounded-full text-sm transition-all duration-300
//                 ${
//                   selectedDayIndex === index
//                     ? "bg-white text-black shadow-md"
//                     : "text-gray-300 hover:bg-white/20"
//                 }`}
//             >
//               {dayLabel(index)}
//             </button>
//           ))}
//         </div>
//       </div>

//       <p className="text-center text-sm text-gray-400 mb-10">
//         {new Date(currentDay.day).toDateString()}
//       </p>

//       {/* SPORTS FILTER ONLY */}
//       <div className="flex justify-center flex-wrap gap-3 mb-10">
//         {[
//           "All",
//           "Cricket",
//           "Football",
//           "Badminton",
//           "Athletics",
//           "Basketball",
//           "Volleyball",
//           "Hockey",
//           "WaterPolo",
//           "Swimming",
//           "Table tennis",
//           "Lawn tennis",
//           "Squash",
//           "Chess",
//         ].map((sport) => (
//           <button
//             key={sport}
//             onClick={() => setSelectedSport(sport)}
//             className={`px-4 py-1.5 rounded-full text-xs
//               ${
//                 selectedSport === sport
//                   ? "bg-white text-black"
//                   : "bg-white/10 text-gray-300 hover:bg-white/20"
//               }`}
//           >
//             {sport}
//           </button>
//         ))}
//       </div>

//       {/* MAIN GRID */}
//       <div className="grid grid-cols-12 gap-6">
//         <div className="col-span-9 relative">
//           <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />

//           <div className="space-y-8">
//             {filteredEvents.map((event) => (
//               <div key={event.id} className="flex gap-6">
//                 <div className="w-20 text-sm text-gray-400 pt-3">
//                   {new Date(event.start_time).toLocaleTimeString("en-IN", {
//                     hour: "2-digit",
//                     minute: "2-digit",
//                     hour12: true,
//                     timeZone: "Asia/Kolkata",
//                   })}
//                 </div>

//                 <div className="flex-1">
//                   <EventCard event={event} />
//                 </div>
//               </div>
//             ))}

//             {filteredEvents.length === 0 && (
//               <p className="text-gray-400 text-center mt-10">
//                 No events for selected sport
//               </p>
//             )}
//           </div>
//         </div>

      
//       </div>
//     </div>
//   )
// }

// export default EventsPage





















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

// const EVENTS_PER_PAGE = 5

// const EventsPage = () => {
//   const [events, setEvents] = useState<Event[]>([])
//   const [pagination, setPagination] = useState<Pagination | null>(null)

//   const [selectedDay, setSelectedDay] = useState("2026-03-15")
//   const [selectedSport, setSelectedSport] = useState("All")
//   const [page, setPage] = useState(1)
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     const fetchEvents = async () => {
//       setLoading(true)

//       const params = new URLSearchParams({
//         day: selectedDay,
//         limit: EVENTS_PER_PAGE.toString(),
//         page: page.toString(),
//       })

//       if (selectedSport !== "All") {
//         params.append("sport", selectedSport)
//       }

//       const res = await fetch(
//         `http://localhost:8000/api/events?${params.toString()}`
//       )

//       const data = await res.json()

//       setEvents(data.events)
//       setPagination(data.pagination)
//       setLoading(false)
//     }

//     fetchEvents()
//   }, [selectedDay, selectedSport, page])

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white px-8 pb-10 pt-20">
//       <h1 className="text-4xl font-bold text-center tracking-wide mt-7">
//         SCHEDULE
//       </h1>

//       {/* SPORT FILTER */}
//       <div className="flex justify-center flex-wrap gap-3 my-10">
//         {[
//           "All",
//           "Cricket",
//           "Football",
//           "Badminton",
//           "Athletics",
//           "Basketball",
//           "Volleyball",
//           "Hockey",
//           "WaterPolo",
//           "Swimming",
//           "Table tennis",
//           "Lawn tennis",
//           "Squash",
//           "Chess",
//         ].map((sport) => (
//           <button
//             key={sport}
//             onClick={() => {
//               setSelectedSport(sport)
//               setPage(1)
//             }}
//             className={`px-4 py-1.5 rounded-full text-xs
//               ${
//                 selectedSport === sport
//                   ? "bg-white text-black"
//                   : "bg-white/10 text-gray-300 hover:bg-white/20"
//               }`}
//           >
//             {sport}
//           </button>
//         ))}
//       </div>

//       {/* EVENTS LIST */}
//       <div className="max-w-5xl mx-auto space-y-8">
//         {loading && (
//           <p className="text-center text-gray-400">Loading events...</p>
//         )}

//         {!loading && events.length === 0 && (
//           <p className="text-center text-gray-400">
//             No events found for this selection
//           </p>
//         )}

//         {events.map((event) => (
//           <div key={event.id} className="flex gap-6">
//             <div className="w-24 text-sm text-gray-400 pt-3">
//               {new Date(event.start_time).toLocaleTimeString("en-IN", {
//                 hour: "2-digit",
//                 minute: "2-digit",
//                 hour12: true,
//                 timeZone: "Asia/Kolkata",
//               })}
//             </div>

//             <div className="flex-1">
//               <EventCard event={event} />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* PAGINATION */}
//       {pagination && (
//         <div className="flex justify-center items-center gap-4 mt-12">
//           <button
//             disabled={!pagination.has_prev}
//             onClick={() => setPage((p) => p - 1)}
//             className="px-4 py-2 rounded bg-white/10 disabled:opacity-40"
//           >
//             Prev
//           </button>

//           <span className="text-sm text-gray-300">
//             Page {pagination.current_page} of {pagination.total_pages}
//           </span>

//           <button
//             disabled={!pagination.has_next}
//             onClick={() => setPage((p) => p + 1)}
//             className="px-4 py-2 rounded bg-white/10 disabled:opacity-40"
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

//   // 🎯 SPORT FILTER (frontend only)
 




//   const filteredEvents =
//   selectedSport === "All"
//     ? events
//     : events.filter(
//         (e) => e.sport.toLowerCase() === selectedSport.toLowerCase()
//       )

//   const dayLabel = (index: number) =>
//     `DAY ${String(index).padStart(2, "0")}`

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white px-8 pb-10 pt-20">
//       <h1 className="text-4xl font-bold text-center tracking-wide mt-7">
//         SCHEDULE
//       </h1>

//       {/* DAY SLIDER */}
//       <div className="flex justify-center mt-9">
//         <div className="bg-white/10 backdrop-blur-md rounded-full px-2 py-2 flex items-center gap-2">
//           <span className="px-5 py-2 text-sm font-semibold text-black bg-yellow-400 rounded-full">
//             EVENT DAYS
//           </span>

//           {EVENT_DAYS.map((day, index) => (
//             <button
//               key={day}
//               onClick={() => setSelectedDayIndex(index)}
//               className={`px-4 py-2 rounded-full text-sm transition-all
//                 ${
//                   selectedDayIndex === index
//                     ? "bg-white text-black"
//                     : "text-gray-300 hover:bg-white/20"
//                 }`}
//             >
//               {dayLabel(index)}
//             </button>
//           ))}
//         </div>
//       </div>

//       <p className="text-center text-sm text-gray-400 mb-10">
//         {new Date(selectedDay).toDateString()}
//       </p>

//       {/* SPORTS FILTER */}
//       <div className="flex justify-center flex-wrap gap-3 mb-10">
//         {SPORTS.map((sport) => (
//           <button
//             key={sport}
//             onClick={() => setSelectedSport(sport)}
//             className={`px-4 py-1.5 rounded-full text-xs
//               ${
//                 selectedSport === sport
//                   ? "bg-white text-black"
//                   : "bg-white/10 text-gray-300 hover:bg-white/20"
//               }`}
//           >
//             {sport}
//           </button>
//         ))}
//       </div>

//       {/* EVENTS */}
//       <div className="max-w-5xl mx-auto space-y-8">
//         {loading && (
//           <p className="text-center text-gray-400">Loading events…</p>
//         )}

//         {!loading && filteredEvents.map((event) => (
//           <div key={event.id} className="flex gap-6">
//             <div className="w-20 text-sm text-gray-400 pt-3">
//               {new Date(event.start_time).toLocaleTimeString("en-IN", {
//                 hour: "2-digit",
//                 minute: "2-digit",
//                 hour12: true,
//                 timeZone: "Asia/Kolkata",
//               })}
//             </div>

//             <div className="flex-1">
//               <EventCard event={event} />
//             </div>
//           </div>
//         ))}

//         {!loading && filteredEvents.length === 0 && (
//           <p className="text-gray-400 text-center">
//             No events for selected sport
//           </p>
//         )}
//       </div>

//       {/* PAGINATION */}
//       {pagination && (
//         <div className="flex justify-center gap-4 mt-10">
//           <button
//             disabled={!pagination.has_prev}
//             onClick={() => setPage((p) => p - 1)}
//             className="px-4 py-2 rounded bg-white/10 disabled:opacity-40"
//           >
//             Prev
//           </button>

//           <span className="text-sm text-gray-400 pt-2">
//             Page {pagination.current_page} of {pagination.total_pages}
//           </span>

//           <button
//             disabled={!pagination.has_next}
//             onClick={() => setPage((p) => p + 1)}
//             className="px-4 py-2 rounded bg-white/10 disabled:opacity-40"
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
