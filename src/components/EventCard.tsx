

// "use client"


// import { useState } from "react"
// import type { Event } from "../types/event"

// type Props = {
//   event: Event
// }

// const EventCard = ({ event }: Props) => {
//   const [open, setOpen] = useState<boolean>(false)

//   const isLive = event.status === "live"
//   const isCompleted = event.status === "completed"

//   return (
//     <div
//       className={`rounded-xl p-5 mb-4 border
//         ${isLive ? "border-red-500/40 bg-red-900/20" : "border-white/10 bg-white/5"}
//       `}
//     >
//       {/* TIME + STATUS */}
//       <div className="flex justify-between items-center">
//         <span className="text-sm text-gray-400">
//           {new Date(event.start_time).toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           })}
//         </span>

//         {isLive && (
//           <span className="text-xs px-3 py-1 rounded-full bg-red-600">
//             LIVE
//           </span>
//         )}

//         {isCompleted && (
//           <span className="text-xs px-3 py-1 rounded-full bg-yellow-500 text-black">
//             COMPLETED
//           </span>
//         )}
//       </div>

//       {/* TITLE */}
//       <h3 className="font-semibold mt-2">{event.title}</h3>

//       {/* PARTICIPANTS */}
//       <p className="text-sm text-gray-300">
//         {event.participants.map((p) => p.name).join(" vs ")}
//       </p>

//       {/* VENUE + LOCATION LINK */}
//       {/* <p className="text-xs text-gray-400 mt-1">
//         Venue: {event.venue} ·{" "}
//         <a
//           href={event.venue_location}
//           target="_blank"
//           rel="noreferrer"
//           className="underline text-blue-400"
//         >
//           View Location
//         </a>
//       </p> */}


     

//      {/* VENUE + LOCATION LINK */}
// <p className="text-xs text-gray-400 mt-1">
//   Venue: {event.venue} ·{" "}
//   <a
//     href={event.venue_location.map_url}
//     target="_blank"
//     rel="noreferrer"
//     className="underline text-blue-400"
//   >
//     {event.venue_location.name}
//   </a>
// </p>





//       {/* COMPLETED → RESULT DRAWER */}
//       {isCompleted && event.result && (
//         <>
//           <button
//             onClick={() => setOpen(!open)}
//             className="mt-3 text-sm text-yellow-400"
//           >
//             {open ? "Hide Result" : "View Result"}
//           </button>

//           {open && (
//             <div className="mt-3 p-3 rounded-lg bg-black/40 text-sm">
//               <p>
//                 🏆 <strong>Winner:</strong> {event.result.winner}
//               </p>
//               <p>
//                 🎯 <strong>Sets:</strong> {event.result.sets}
//               </p>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   )
// }

// export default EventCard
















// "use client"

// import { useState } from "react"
// import type { Event } from "@/types/event"

// type Props = {
//   event: Event
// }

// const EventCard = ({ event }: Props) => {
//   const [open, setOpen] = useState(false)

//   const isLive = event.status === "live"
//   const isCompleted = event.status === "completed"

//   return (
//     <div
//       className={`rounded-2xl p-5 border backdrop-blur-md
//         ${
//           isLive
//             ? "border-red-500/40 bg-red-500/10 shadow-[0_0_30px_rgba(239,68,68,0.2)]"
//             : isCompleted
//             ? "border-yellow-500/30 bg-yellow-500/10"
//             : "border-white/10 bg-white/5"
//         }
//       `}
//     >
//       {/* STATUS */}
//       <div className="flex justify-between items-center mb-2">
//         {isLive && (
//           <span className="text-xs px-3 py-1 rounded-full bg-red-600">
//             LIVE
//           </span>
//         )}
//         {isCompleted && (
//           <span className="text-xs px-3 py-1 rounded-full bg-yellow-500 text-black">
//             COMPLETED
//           </span>
//         )}
//       </div>

//       {/* TITLE */}
//       <h3 className="font-semibold">{event.title}</h3>

//       {/* PARTICIPANTS */}
//       <p className="text-sm text-gray-300 mt-1">
//         {event.participants.map((p) => p.name).join(" vs ")}
//       </p>

//       {/* VENUE */}
//       <p className="text-xs text-gray-400 mt-1">
//         Venue: {event.venue} ·{" "}
//         <a
//           href={event.venue_location.map_url}
//           target="_blank"
//           rel="noreferrer"
//           className="underline text-blue-400"
//         >
//           {event.venue_location.name}
//         </a>
//       </p>

//       {/* RESULT DRAWER */}
//       {isCompleted && event.result && (
//         <>
//           <button
//             onClick={() => setOpen(!open)}
//             className="mt-3 text-sm text-yellow-400"
//           >
//             {open ? "Hide Result" : "View Result"}
//           </button>

//           {open && (
//             <div className="mt-3 p-3 rounded-lg bg-black/40 text-sm">
//               <p>🏆 <strong>Winner:</strong> {event.result.winner}</p>
//               <p>🎯 <strong>Sets:</strong> {event.result.sets}</p>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   )
// }

// export default EventCard










// "use client"

// import { useState } from "react"
// import type { Event } from "@/types/event"
// import {
//   Trophy,
//   MapPin,
//   Flame,
//   Clock,
// } from "lucide-react"

// type Props = {
//   event: Event
// }


// const sportIcon = (sport: string) => {
//   switch (sport.toLowerCase()) {
//     case "football":
//       return "⚽"

//     case "cricket":
//       return "🏏"

//     case "basketball":
//       return "🏀"

//     case "volleyball":
//       return "🏐"

//     case "hockey":
//       return "🏑"

//     case "waterpolo":
//       return "🤽‍♂️"

//     case "swimming":
//       return "🏊‍♂️"

//     case "athletics":
//       return "🏃‍♂️"

//     case "badminton":
//       return "🏸"

//     case "table tennis":
//       return "🏓"

//     case "lawn tennis":
//       return "🎾"

//     case "squash":
//       return "🎾"

//     case "chess":
//       return "♟️"

//     default:
//       return "🎯"
//   }
// }






// const EventCard = ({ event }: Props) => {
//   const [open, setOpen] = useState(false)

//   const isLive = event.status === "live"
//   const isCompleted = event.status === "completed"

//   return (
//     <div
//       className={`rounded-2xl p-5 border backdrop-blur-md transition
//         ${
//           isLive
//             ? "border-red-500/40 bg-red-500/10 shadow-[0_0_35px_rgba(239,68,68,0.25)]"
//             : isCompleted
//             ? "border-yellow-500/30 bg-yellow-500/10"
//             : "border-white/10 bg-white/5"
//         }
//       `}
//     >
//       {/* TOP ROW */}
//       <div className="flex justify-between items-center mb-2">
//         {/* SPORT + ICON */}
//         <div className="flex items-center gap-2 text-sm text-gray-300">
//           <span className="text-lg">{sportIcon(event.sport)}</span>
//           <span>{event.sport}</span>
//         </div>

//         {/* STATUS */}
//         {isLive && (
//           <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-red-600">
//             <Flame size={14} /> LIVE
//           </span>
//         )}
//         {isCompleted && (
//           <span className="text-xs px-3 py-1 rounded-full bg-yellow-500 text-black">
//             COMPLETED
//           </span>
//         )}
//       </div>

//       {/* TITLE */}
//       <h3 className="font-semibold mt-1">{event.title}</h3>

//       {/* PLAYERS */}
//       <div className="flex items-center gap-3 mt-2 text-sm">
//         <span className="font-semibold text-white">
//           {event.participants[0]?.name}
//         </span>

//         <span className="px-3 py-0.5 rounded-full bg-white/10 text-xs tracking-widest text-gray-300">
//           VS
//         </span>

//         <span className="font-semibold text-white">
//           {event.participants[1]?.name}
//         </span>
//       </div>

//       {/* VENUE */}
//       <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
//         <MapPin size={12} />
//         {event.venue} ·{" "}
//         <a
//           href={event.venue_location.map_url}
//           target="_blank"
//           rel="noreferrer"
//           className="underline text-blue-400"
//         >
//           {event.venue_location.name}
//         </a>
//       </p>

//       {/* FOOTER */}
//       <div className="flex justify-between items-center mt-4">
//         {/* TIME */}
//         <div className="flex items-center gap-1 text-xs text-gray-400">
//           <Clock size={12} />
//           {new Date(event.start_time).toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           })}
//         </div>

//         {/* VIEW RESULT (RIGHT SIDE) */}
//         {isCompleted && event.result && (
//           <button
//             onClick={() => setOpen(!open)}
//             className="flex items-center gap-1 text-sm text-yellow-400 hover:text-yellow-300"
//           >
//             <Trophy size={14} />
//             {open ? "Hide Result" : "View Result"}
//           </button>
//         )}
//       </div>

//       {/* RESULT DRAWER */}
//       {open && isCompleted && event.result && (
//         <div className="mt-3 p-3 rounded-xl bg-black/40 text-sm">
//           <p className="flex items-center gap-2">
//             🏆 <strong>Winner:</strong> {event.result.winner}
//           </p>
//           <p className="flex items-center gap-2 mt-1">
//             🎯 <strong>Sets:</strong> {event.result.sets}
//           </p>
//         </div>
//       )}
//     </div>
//   )
// }

// export default EventCard




















// "use client"

// import { useState } from "react"
// import type { Event } from "@/types/event"
// import { Trophy, MapPin, Flame, Clock } from "lucide-react"

// type Props = {
//   event: Event
// }

// const sportIcon = (sport: string) => {
//   switch (sport.toLowerCase()) {
//     case "football":
//       return "⚽"
//     case "cricket":
//       return "🏏"
//     case "basketball":
//       return "🏀"
//     case "volleyball":
//       return "🏐"
//     case "hockey":
//       return "🏑"
//     case "waterpolo":
//       return "🤽‍♂️"
//     case "swimming":
//       return "🏊‍♂️"
//     case "athletics":
//       return "🏃‍♂️"
//     case "badminton":
//       return "🏸"
//     case "table tennis":
//       return "🏓"
//     case "lawn tennis":
//     case "squash":
//       return "🎾"
//     case "chess":
//       return "♟️"
//     default:
//       return "🎯"
//   }
// }

// // 🔹 Google Maps pin-point helper







// // const getMapLink = (
// //   venue: string,
// //   location?: { lat?: number; lng?: number }
// // ) => {
// //   if (location?.lat && location?.lng) {
// //     return `https://www.google.com/maps?q=${location.lat},${location.lng}`
// //   }

// //   return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
// //     venue
// //   )}`
// // }





// const getMapLink = (venue: string, location: { map_url: string }) => {
//   if (location?.map_url?.trim()) {
//     return location.map_url
//   }

//   return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//     venue
//   )}`
// }







// const EventCard = ({ event }: Props) => {
//   const [open, setOpen] = useState(false)

//   const isLive = event.status === "live"
//   const isCompleted = event.status === "completed"

//   return (
//     <div
//       className={`rounded-2xl p-5 border backdrop-blur-md transition
//         ${
//           isLive
//             ? "border-red-500/40 bg-red-500/10 shadow-[0_0_35px_rgba(239,68,68,0.25)]"
//             : isCompleted
//             ? "border-yellow-500/30 bg-yellow-500/10"
//             : "border-white/10 bg-white/5"
//         }
//       `}
//     >
//       {/* TOP ROW */}
//       <div className="flex justify-between items-center mb-2">
//         <div className="flex items-center gap-2 text-sm text-gray-300">
//           <span className="text-lg">{sportIcon(event.sport)}</span>
//           <span>{event.sport}</span>
//         </div>

//         {isLive && (
//           <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-red-600">
//             <Flame size={14} /> LIVE
//           </span>
//         )}

//         {isCompleted && (
//           <span className="text-xs px-3 py-1 rounded-full bg-yellow-500 text-black">
//             COMPLETED
//           </span>
//         )}
//       </div>

//       <h3 className="font-semibold mt-1">{event.title}</h3>

//       <div className="flex items-center gap-3 mt-2 text-sm">
//         <span className="font-semibold text-white">
//           {event.participants[0]?.name}
//         </span>

//         <span className="px-3 py-0.5 rounded-full bg-white/10 text-xs tracking-widest text-gray-300">
//           VS
//         </span>

//         <span className="font-semibold text-white">
//           {event.participants[1]?.name}
//         </span>
//       </div>



      


//       <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
//   <MapPin size={12} />
//   {event.venue} ·{" "}
//   {typeof event.venue_location === "string" ? (
//     <span>{event.venue_location}</span>
//   ) : (
//     <a
//       href={event.venue_location.map_url}
//       target="_blank"
//       rel="noreferrer"
//       className="underline text-blue-400"
//     >
//       {event.venue_location.name}
//     </a>
//   )}
// </p>



//       <div className="flex justify-between items-center mt-4">
//         <div className="flex items-center gap-1 text-xs text-gray-400">
//           <Clock size={12} />
//           {new Date(event.start_time).toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           })}
//         </div>

//         {isCompleted && event.result && (
//           <button
//             onClick={() => setOpen(!open)}
//             className="flex items-center gap-1 text-sm text-yellow-400 hover:text-yellow-300"
//           >
//             <Trophy size={14} />
//             {open ? "Hide Result" : "View Result"}
//           </button>
//         )}
//       </div>

//       {open && isCompleted && event.result && (
//         <div className="mt-3 p-3 rounded-xl bg-black/40 text-sm">
//           <p className="flex items-center gap-2">
//             🏆 <strong>Winner:</strong> {event.result.winner}
//           </p>
//           <p className="flex items-center gap-2 mt-1">
//             🎯 <strong>Sets:</strong> {event.result.sets}
//           </p>
//         </div>
//       )}
//     </div>
//   )
// }

// export default EventCard




































// "use client"

// import { useState } from "react"
// import type { Event } from "@/types/event"
// import { Trophy, MapPin, Flame, Clock } from "lucide-react"

// type Props = {
//   event: Event
// }





// const sportIcon = (sport: string) => {
//   switch (sport.toLowerCase()) {
//     case "football":
//       return "⚽"
//     case "cricket":
//       return "🏏"
//     case "basketball":
//       return "🏀"
//     case "volleyball":
//       return "🏐"
//     case "hockey":
//       return "🏑"
//     case "waterpolo":
//       return "🤽‍♂️"
//     case "swimming":
//       return "🏊‍♂️"
//     case "athletics":
//       return "🏃‍♂️"
//     case "badminton":
//       return "🏸"
//     case "table tennis":
//       return "🏓"
//     case "lawn tennis":
//     case "squash":
//       return "🎾"
//     case "chess":
//       return "♟️"
//     default:
//       return "🎯"
//   }
// }





// const getMapLink = (venue: Event["venue"]) => {
//   if (venue.map_url) return venue.map_url
//   return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//     venue.name + " " + venue.location
//   )}`
// }

// const EventCard = ({ event }: Props) => {
//   const [open, setOpen] = useState(false)

//   const isLive = event.status === "live"
//   const isCompleted = event.status === "completed"
  
//   const participants = event.participants ?? []

//   return (
//     <div
//       className={`rounded-2xl p-5 border backdrop-blur-md transition
//         ${
//           isLive
//             ? "border-red-500/40 bg-red-500/10 shadow-[0_0_35px_rgba(239,68,68,0.25)]"
//             : isCompleted
//             ? "border-yellow-500/30 bg-yellow-500/10"
//             : "border-white/10 bg-white/5"
//         }`}
//     >
//       {/* TOP */}
//       <div className="flex justify-between items-center mb-2">
//         <div className="flex items-center gap-2 text-sm text-gray-300">
//           <span className="text-lg">{sportIcon(event.sport)}</span>
//           <span>{event.sport}</span>
//         </div>

//         {isLive && (
//           <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-red-600">
//             <Flame size={14} /> LIVE
//           </span>
//         )}

//         {isCompleted && (
//           <span className="text-xs px-3 py-1 rounded-full bg-yellow-500 text-black">
//             COMPLETED
//           </span>
//         )}
//       </div>

//       <h3 className="font-semibold mt-1">{event.title}</h3>

//       {/* PARTICIPANTS */}
//       {/* <div className="flex items-center gap-3 mt-2 text-sm">
//         <span className="font-semibold">{event.participants[0]?.name}</span>
//         <span className="px-3 py-0.5 rounded-full bg-white/10 text-xs">VS</span>
//         <span className="font-semibold">{event.participants[1]?.name}</span>
//       </div> */}

//       <div className="flex items-center gap-3 mt-2 text-sm">
//   {participants.length >= 2 ? (
//     <>
//       <span className="font-semibold">{participants[0].name}</span>
//       <span className="px-3 py-0.5 rounded-full bg-white/10 text-xs">VS</span>
//       <span className="font-semibold">{participants[1].name}</span>
//     </>
//   ) : (
//     <span className="text-gray-400 text-xs italic">
//       Participants TBA
//     </span>
//   )}
// </div>






//       {/* VENUE */}
//       <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
//         <MapPin size={12} />
//         <a
//           href={getMapLink(event.venue)}
//           target="_blank"
//           rel="noreferrer"
//           className="underline"
//         >


//           {event.venue.name} · {event.venue.location}
//         </a>
//       </p>

//       {/* FOOTER */}
//       <div className="flex justify-between items-center mt-4">
//         <div className="flex items-center gap-1 text-xs text-gray-400">
//           <Clock size={12} />
//           {new Date(event.start_time).toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           })}
//         </div>

//         {isCompleted && event.result && (
//           <button
//             onClick={() => setOpen(!open)}
//             className="flex items-center gap-1 text-sm text-yellow-400"
//           >
//             <Trophy size={14} />
//             {open ? "Hide Result" : "View Result"}
//           </button>
//         )}
//       </div>

//       {open && event.result && (
//         <div className="mt-3 p-3 rounded-xl bg-black/40 text-sm">
//           <p>🏆 <strong>Winner:</strong> {event.result.winner}</p>
//           {event.result.sets && (
//             <p className="mt-1">🎯 <strong>Sets:</strong> {event.result.sets}</p>
//           )}
//         </div>
//       )}
//     </div>
//   )
// }

// export default EventCard





















// "use client"

// import { useState } from "react"
// import type { Event } from "@/types/event"
// import { Trophy, MapPin, Flame, Clock } from "lucide-react"

// type Props = {
//   event: Event
// }

// // ICONS FOR SPORTS
// const sportIcon = (sport: string) => {
//   switch (sport.toLowerCase()) {
//     case "football":
//       return "⚽"
//     case "cricket":
//       return "🏏"
//     case "basketball":
//       return "🏀"
//     case "volleyball":
//       return "🏐"
//     case "hockey":
//       return "🏑"
//     case "waterpolo":
//       return "🤽‍♂️"
//     case "swimming":
//       return "🏊‍♂️"
//     case "athletics":
//       return "🏃‍♂️"
//     case "badminton":
//       return "🏸"
//     case "table tennis":
//       return "🏓"
//     case "lawn tennis":
//     case "squash":
//       return "🎾"
//     case "chess":
//       return "♟️"
//     default:
//       return "🎯"
//   }
// }

// const EventCard = ({ event }: Props) => {
//   const [open, setOpen] = useState(false)

//   const isLive = event.status === "live"
//   const isCompleted = event.status === "completed"
  
//   const participants = event.participants ?? []

//   return (
//     <div
//       className={`rounded-2xl p-5 border backdrop-blur-md transition
//         ${
//           isLive
//             ? "border-red-500/40 bg-red-500/10 shadow-[0_0_35px_rgba(239,68,68,0.25)]"
//             : isCompleted
//             ? "border-yellow-500/30 bg-yellow-500/10"
//             : "border-white/10 bg-white/5"
//         }`}
//     >
//       {/* TOP */}
//       <div className="flex justify-between items-center mb-2">
//         <div className="flex items-center gap-2 text-sm text-gray-300">
//           <span className="text-lg">{sportIcon(event.sport)}</span>
//           <span>{event.sport}</span>
//         </div>

//         {isLive && (
//           <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-red-600">
//             <Flame size={14} /> LIVE
//           </span>
//         )}

//         {isCompleted && (
//           <span className="text-xs px-3 py-1 rounded-full bg-yellow-500 text-black">
//             COMPLETED
//           </span>
//         )}
//       </div>

//       <h3 className="font-semibold mt-1">{event.title}</h3>

//       {/* PARTICIPANTS */}
//       <div className="flex items-center gap-3 mt-2 text-sm">
//         {participants.length >= 2 ? (
//           <>
//             <span className="font-semibold">{participants[0].name}</span>
//             <span className="px-3 py-0.5 rounded-full bg-white/10 text-xs">VS</span>
//             <span className="font-semibold">{participants[1].name}</span>
//           </>
//         ) : (
//           <span className="text-white text-s text-bold ">
//               TBD V/S TBD
//           </span>
//         )}
//       </div>

//       {/* VENUE */}

         
//          <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
//   <MapPin size={12} />
//   <span>{event.venue}</span>
//   <span>·</span>
//   <a
//     href={event.venue_location}       // Directly clickable
//     target="_blank"
//     rel="noreferrer"
//     className="underline text-blue-400"
//   >
//     {event.venue}                  
//   </a>
// </p>
        









//       {/* FOOTER */}
//       <div className="flex justify-between items-center mt-4">
//         <div className="flex items-center gap-1 text-xs text-gray-400">
//           <Clock size={12} />
//           {new Date(event.start_time).toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           })}
//         </div>

//         {isCompleted && event.result && (
//           <button
//             onClick={() => setOpen(!open)}
//             className="flex items-center gap-1 text-sm text-yellow-400"
//           >
//             <Trophy size={14} />
//             {open ? "Hide Result" : "View Result"}
//           </button>
//         )}
//       </div>

//       {open && event.result && (
//         <div className="mt-3 p-3 rounded-xl bg-black/40 text-sm">
//           <p>🏆 <strong>Winner:</strong> {event.result.winner}</p>
//           {event.result.sets && (
//             <p className="mt-1">🎯 <strong>Sets:</strong> {event.result.sets}</p>
//           )}
//         </div>
//       )}
//     </div>
//   )
// }

// export default EventCard











// "use client"

// import { useState } from "react"
// import type { Event } from "@/types/event"
// import { Trophy, MapPin, Flame, Clock } from "lucide-react"

// type Props = {
//   event: Event
// }

// // ICONS FOR SPORTS
// const sportIcon = (sport: string) => {
//   switch (sport.toLowerCase()) {
//     case "football":
//       return "⚽"
//     case "cricket":
//       return "🏏"
//     case "basketball":
//       return "🏀"
//     case "volleyball":
//       return "🏐"
//     case "hockey":
//       return "🏑"
//     case "waterpolo":
//       return "🤽‍♂️"
//     case "swimming":
//       return "🏊‍♂️"
//     case "athletics":
//       return "🏃‍♂️"
//     case "badminton":
//       return "🏸"
//     case "table tennis":
//       return "🏓"
//     case "lawn tennis":
//     case "squash":
//       return "🎾"
//     case "chess":
//       return "♟️"
//     default:
//       return "🎯"
//   }
// }

// const EventCard = ({ event }: Props) => {
//   const [open, setOpen] = useState(false)

//   const isLive = event.status === "live"
//   const isCompleted = event.status === "completed"

//   const participants = event.participants ?? []

//   return (
//     <div
//       className={`rounded-2xl p-5 border backdrop-blur-md transition
//         ${
//           isLive
//             ? "border-red-500/40 bg-red-500/10 shadow-[0_0_35px_rgba(239,68,68,0.25)]"
//             : isCompleted
//             ? "border-yellow-500/30 bg-yellow-500/10"
//             : "border-white/10 bg-white/5"
//         }`}
//     >
//       {/* TOP */}
//       <div className="flex justify-between items-center mb-2">
//         <div className="flex items-center gap-2 text-sm text-gray-300">
//           <span className="text-lg">{sportIcon(event.sport)}</span>
//           <span>{event.sport}</span>
//         </div>

//         {isLive && (
//           <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-red-600">
//             <Flame size={14} /> LIVE
//           </span>
//         )}

//         {isCompleted && (
//           <span className="text-xs px-3 py-1 rounded-full bg-yellow-500 text-black">
//             COMPLETED
//           </span>
//         )}
//       </div>

//       <h3 className="font-semibold mt-1">{event.title}</h3>

//       {/* PARTICIPANTS */}
//       {event.event_type === "team" && (
//         <div className="flex items-center gap-3 mt-2 text-sm">
//           {participants.length >= 2 ? (
//             <>
//               <span className="font-semibold">{participants[0].name}</span>
//               <span className="px-3 py-0.5 rounded-full bg-white/10 text-xs">
//                 VS
//               </span>
//               <span className="font-semibold">{participants[1].name}</span>
//             </>
//           ) : (
//             <span className="font-semibold text-white">
//               TBD VS TBD
//             </span>
//           )}
//         </div>
//       )}

//       {/* VENUE */}
//       <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
//         <MapPin size={12} />
//         <span>{event.venue}</span>
//         <span>·</span>
//         <a
//           href={event.venue_location}
//           target="_blank"
//           rel="noreferrer"
//           className="underline text-blue-400"
//         >
//           {event.venue}
//         </a>
//       </p>

//       {/* FOOTER */}
//       <div className="flex justify-between items-center mt-4">
//         <div className="flex items-center gap-1 text-xs text-gray-400">
//           <Clock size={12} />
//           {new Date(event.start_time).toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           })}
//         </div>

//         {isCompleted && event.result && (
//           <button
//             onClick={() => setOpen(!open)}
//             className="flex items-center gap-1 text-sm text-yellow-400"
//           >
//             <Trophy size={14} />
//             {open ? "Hide Result" : "View Result"}
//           </button>
//         )}
//       </div>

//       {open && event.result && (
//         <div className="mt-3 p-3 rounded-xl bg-black/40 text-sm">
//           <p>🏆 <strong>Winner:</strong> {event.result.winner}</p>
//           {event.result.sets && (
//             <p className="mt-1">
//               🎯 <strong>Sets:</strong> {event.result.sets}
//             </p>
//           )}
//         </div>
//       )}
//     </div>
//   )
// }

// export default EventCard



























// "use client"

// import { useState } from "react"
// import type { Event } from "@/types/event"
// import { Trophy, MapPin, Flame, Clock } from "lucide-react"

// type Props = {
//   event: Event
// }

// // ICONS FOR SPORTS
// const sportIcon = (sport: string) => {
//   switch (sport.toLowerCase()) {
//     case "football":
//       return "⚽"
//     case "cricket":
//       return "🏏"
//     case "basketball":
//       return "🏀"
//     case "volleyball":
//       return "🏐"
//     case "hockey":
//       return "🏑"
//     case "waterpolo":
//       return "🤽‍♂️"
//     case "swimming":
//       return "🏊‍♂️"
//     case "athletics":
//       return "🏃‍♂️"
//     case "badminton":
//       return "🏸"
//     case "table tennis":
//       return "🏓"
//     case "lawn tennis":
//     case "squash":
//       return "🎾"
//     case "chess":
//       return "♟️"
//     default:
//       return "🎯"
//   }
// }

// const EventCard = ({ event }: Props) => {
//   const [open, setOpen] = useState(false)

//   const isLive = event.status === "live"
//   const isCompleted = event.status === "completed"
//   const participants = event.participants ?? []

//   return (
//     <div
//       className={`rounded-2xl p-4 sm:p-5 border backdrop-blur-md transition
//         ${
//           isLive
//             ? "border-red-500/40 bg-red-500/10 shadow-[0_0_35px_rgba(239,68,68,0.25)]"
//             : isCompleted
//             ? "border-yellow-500/30 bg-yellow-500/10"
//             : "border-white/10 bg-white/5"
//         }`}
//     >
//       {/* TOP */}
//       <div className="flex justify-between items-center mb-2">
//         <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
//           <span className="text-lg">{sportIcon(event.sport)}</span>
//           <span>{event.sport}</span>
//         </div>

//         {isLive && (
//           <span className="flex items-center gap-1 text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full bg-red-600">
//             <Flame size={14} /> LIVE
//           </span>
//         )}

//         {isCompleted && (
//           <span className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full bg-yellow-500 text-black">
//             COMPLETED
//           </span>
//         )}
//       </div>

//       {/* TITLE */}
//       <h3 className="font-semibold mt-1 text-sm sm:text-base">
//         {event.title}
//       </h3>

//       {/* PARTICIPANTS */}
//       {event.event_type === "team" && (
//         <div className="flex flex-wrap items-center gap-2 mt-2 text-xs sm:text-sm">
//           {participants.length >= 2 ? (
//             <>
//               <span className="font-semibold">{participants[0].name}</span>
//               <span className="px-3 py-0.5 rounded-full bg-white/10 text-[10px] sm:text-xs">
//                 VS
//               </span>
//               <span className="font-semibold">{participants[1].name}</span>
//             </>
//           ) : (
//             <span className="font-semibold text-white">
//               TBD VS TBD
//             </span>
//           )}
//         </div>
//       )}

//       {/* VENUE */}
//       <p className="text-[11px] sm:text-xs text-gray-400 mt-2 flex flex-wrap items-center gap-1">
//         <MapPin size={12} />
//         <span>{event.venue}</span>
//         <span>·</span>
//         <a
//           href={event.venue_location}
//           target="_blank"
//           rel="noreferrer"
//           className="underline text-blue-400 break-all"
//         >
//           View on Map
//         </a>
//       </p>

//       {/* FOOTER */}
//       <div className="flex justify-between items-center mt-4">
//         <div className="flex items-center gap-1 text-[11px] sm:text-xs text-gray-400">
//           <Clock size={12} />
//           {new Date(event.start_time).toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           })}
//         </div>

//         {isCompleted && event.result && (
//           <button
//             onClick={() => setOpen(!open)}
//             className="flex items-center gap-1 text-xs sm:text-sm text-yellow-400"
//           >
//             <Trophy size={14} />
//             {open ? "Hide Result" : "View Result"}
//           </button>
//         )}
//       </div>

//       {/* RESULT */}
//       {open && event.result && (
//         <div className="mt-3 p-3 rounded-xl bg-black/40 text-xs sm:text-sm">
//           <p>
//             🏆 <strong>Winner:</strong> {event.result.winner}
//           </p>

//           {/* flexible result — NOT only sets */}
//           {event.result.detail && (
//             <p className="mt-1">
//               🎯 <strong>Result:</strong> {event.result.detail}
//             </p>
//           )}
//         </div>
//       )}
//     </div>
//   )
// }

// export default EventCard


















// "use client"

// import { useState } from "react"
// import type { Event } from "@/types/event"
// import { Trophy, MapPin, Flame, Clock } from "lucide-react"

// type Props = {
//   event: Event
// }

// // ICONS FOR SPORTS
// const sportIcon = (sport: string) => {
//   switch (sport.toLowerCase()) {
//     case "football":
//       return "⚽"
//     case "cricket":
//       return "🏏"
//     case "basketball":
//       return "🏀"
//     case "volleyball":
//       return "🏐"
//     case "hockey":
//       return "🏑"
//     case "waterpolo":
//       return "🤽‍♂️"
//     case "swimming":
//       return "🏊‍♂️"
//     case "athletics":
//       return "🏃‍♂️"
//     case "badminton":
//       return "🏸"
//     case "table tennis":
//       return "🏓"
//     case "lawn tennis":
//     case "squash":
//       return "🎾"
//     case "chess":
//       return "♟️"
//     default:
//       return "🎯"
//   }
// }

// const EventCard = ({ event }: Props) => {
//   const [open, setOpen] = useState(false)

//   const isLive = event.status === "live"
//   const isCompleted = event.status === "completed"
//   const participants = event.participants ?? []

//   return (
//     <div
//       className={`w-full rounded-2xl p-4 sm:p-5 border backdrop-blur-md transition
//         ${
//           isLive
//             ? "border-red-500/40 bg-red-500/10 shadow-[0_0_35px_rgba(239,68,68,0.25)]"
//             : isCompleted
//             ? "border-yellow-500/30 bg-yellow-500/10"
//             : "border-white/10 bg-white/5"
//         }`}
//     >
//       {/* TOP */}
//       <div className="flex justify-between items-center mb-2">
//         <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
//           <span className="text-lg">{sportIcon(event.sport)}</span>
//           <span>{event.sport}</span>
//         </div>

//         {isLive && (
//           <span className="flex items-center gap-1 text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full bg-red-600">
//             <Flame size={14} /> LIVE
//           </span>
//         )}

//         {isCompleted && (
//           <span className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full bg-yellow-500 text-black">
//             COMPLETED
//           </span>
//         )}
//       </div>

//       {/* TITLE */}
//       <h3 className="font-semibold mt-1 text-sm sm:text-base">
//         {event.title}
//       </h3>

//       {/* PARTICIPANTS — ONLY FOR TEAM EVENTS */}
//       {event.event_type === "team" && (
//         <div className="flex flex-wrap items-center gap-2 mt-2 text-xs sm:text-sm">
//           {participants.length >= 2 ? (
//             <>
//               <span className="font-semibold">{participants[0].name}</span>
//               <span className="px-3 py-0.5 rounded-full bg-white/10 text-[10px] sm:text-xs">
//                 VS
//               </span>
//               <span className="font-semibold">{participants[1].name}</span>
//             </>
//           ) : (
//             <span className="font-semibold text-white">
//               TBD VS TBD
//             </span>
//           )}
//         </div>
//       )}

//       {/* VENUE */}
//       <p className="text-[11px] sm:text-xs text-gray-400 mt-2 flex flex-wrap items-center gap-1">
//         <MapPin size={12} />
//         <span>{event.venue}</span>
//         <span>·</span>
//         <a
//           href={event.venue_location}
//           target="_blank"
//           rel="noreferrer"
//           className="underline text-blue-400 whitespace-nowrap"
//         >
//           View on Map
//         </a>
//       </p>

//       {/* FOOTER */}
//       <div className="flex justify-between items-center mt-4">
//         <div className="flex items-center gap-1 text-[11px] sm:text-xs text-gray-400">
//           <Clock size={12} />
//           {new Date(event.start_time).toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           })}
//         </div>

//         {isCompleted && event.result && (
//           <button
//             onClick={() => setOpen(!open)}
//             className="flex items-center gap-1 text-xs sm:text-sm text-yellow-400"
//           >
//             <Trophy size={14} />
//             {open ? "Hide Result" : "View Result"}
//           </button>
//         )}
//       </div>

//       {/* RESULT — FLEXIBLE FOR ANY SPORT */}








//      {open && event.result && (
//   <div className="mt-3 p-3 rounded-xl bg-black/40 text-xs sm:text-sm space-y-2">
//     {/* SCORE BASED */}
//     {event.result.type === "score" && (
//       <>
//         <p className="font-semibold">
//           {event.result.label}:{" "}
//           {event.result.teamA} - {event.result.teamB}
//         </p>
//         <p>🏆 Winner: {event.result.winner}</p>
//       </>
//     )}

//     {/* SET BASED */}
//     {event.result.type === "sets" && (
//       <>
//         <p className="font-semibold">Sets</p>
//         {event.result.sets.map((set, i) => (
//           <p key={i}>
//             Set {i + 1}: {set.teamA} - {set.teamB}
//           </p>
//         ))}
//         <p>🏆 Winner: {event.result.winner}</p>
//       </>
//     )}

//     {/* TABLE BASED */}
//     {event.result.type === "table" && (
//       <div className="overflow-x-auto">
//         <table className="w-full text-left text-xs border-collapse">
//           <thead>
//             <tr>
//               {event.result.headers.map((h) => (
//                 <th key={h} className="pb-1 text-gray-300">
//                   {h}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {event.result.rows.map((row, i) => (
//               <tr key={i}>
//                 {row.map((cell, j) => (
//                   <td key={j} className="py-0.5">
//                     {cell}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     )}

//     {/* CRICKET */}
//     {event.result.type === "link" && (
//       <>
//         <p>🏆 Winner: {event.result.winner}</p>
//         <a
//           href={event.result.scorecardUrl}
//           target="_blank"
//           className="text-blue-400 underline"
//         >
//           View Scorecard
//         </a>
//       </>
//     )}

//     {/* CHESS */}
//     {event.result.type === "text" && (
//       <p>♟️ Result: {event.result.result}</p>
//     )}
//   </div>
// )}



//     </div>
//   )
// }

// export default EventCard












































"use client"

import { useState } from "react"
import type { Event } from "@/types/event"
import { Trophy, MapPin, Flame, Clock } from "lucide-react"

type Props = {
  event: Event
}

const sportIcon = (sport: string) => {
  switch (sport.toLowerCase()) {
    case "football":
      return "⚽"
    case "cricket":
      return "🏏"
    case "basketball":
      return "🏀"
    case "volleyball":
      return "🏐"
    case "hockey":
      return "🏑"
    case "waterpolo":
      return "🤽‍♂️"
    case "swimming":
      return "🏊‍♂️"
    case "athletics":
      return "🏃‍♂️"
    case "badminton":
      return "🏸"
    case "table tennis":
      return "🏓"
    case "lawn tennis":
    case "squash":
      return "🎾"
    case "chess":
      return "♟️"
    default:
      return "🎯"
  }
}

const EventCard = ({ event }: Props) => {
  const [open, setOpen] = useState(false)

  const isLive = event.status === "live"
  const isCompleted = event.status === "completed"
  const participants = event.participants ?? []

  const teamA = participants[0]?.name ?? "Team A"
  const teamB = participants[1]?.name ?? "Team B"

  return (
    <div
      className={`w-full rounded-2xl p-4 sm:p-5 border backdrop-blur-md transition
        ${
          isLive
            ? "border-red-500/40 bg-red-500/10"
            : isCompleted
            ? "border-yellow-500/30 bg-yellow-500/10"
            : "border-white/10 bg-white/5"
        }`}
    >
      {/* TOP */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
          <span className="text-lg">{sportIcon(event.sport)}</span>
          <span>{event.sport}</span>
        </div>

        {isLive && (
          <span className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-red-600">
            <Flame size={14} /> LIVE
          </span>
        )}

        {isCompleted && (
          <span className="text-xs px-2 py-1 rounded-full bg-yellow-500 text-black">
            COMPLETED
          </span>
        )}
      </div>

      {/* TITLE */}
      <h3 className="font-semibold text-sm sm:text-base">{event.title}</h3>

      {/* PARTICIPANTS */}
      {event.event_type === "team" && (
        <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm">
          <span className="font-semibold">{teamA}</span>
          <span className="px-2 py-0.5 rounded-full bg-white/10">VS</span>
          <span className="font-semibold">{teamB}</span>
        </div>
      )}

      {/* VENUE */}
      <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
        <MapPin size={12} />
        <span>{event.venue}</span>
        <span>·</span>
        <a
          href={event.venue_location}
          target="_blank"
          className="underline text-blue-400"
        >
          View on Map
        </a>
      </p>

      {/* FOOTER */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-1 text-xs text-gray-400">
          <Clock size={12} />
          {new Date(event.start_time).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>

        {isCompleted && event.result && (
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 text-sm text-yellow-400"
          >
            <Trophy size={14} />
            {open ? "Hide Result" : "View Result"}
          </button>
        )}
      </div>

      {/* ================= RESULT ================= */}

      {open && event.result && (
        <div className="mt-3 p-3 rounded-xl bg-black/40 text-xs space-y-2">

          {/* SCORE (Football / Hockey / Basketball) */}
          {event.result.type === "score" && (
            <>
              <p className="font-semibold text-sm sm:text-sm">
                {event.sport === "Basketball" ? "Baskets" : event.result.label}:
                {" "}
                {event.result.teamA} - {event.result.teamB}
              </p>
              <p className="text-sm sm:text-sm">🏆 Winner: {event.result.winner}</p>
            </>
          )}

          {/* SETS → TABLE WITH TOTAL */}
          {event.result.type === "sets" && (
            <div className="overflow-x-auto">


           <table className="w-full text-sm sm:text-sm  table-fixed border-collapse">
       <thead>
       <tr className="text-gray-300 border-b border-white/20">
         <th className="p-2 text-left">Team</th>

      {event.result.sets.map((_, i) => (
        <th key={i} className="p-2 text-center">
          {i + 1}
        </th>
      ))}

      <th className="p-2 text-center font-semibold">T</th>
    </tr>
  </thead>

  <tbody>
    <tr className="border-b border-white/10">
      <td className="p-2 text-left font-medium">{teamA}</td>

      {event.result.sets.map((s, i) => (
        <td key={i} className="p-2 text-center">
          {s.teamA}
        </td>
      ))}

      <td className="p-2 text-center font-semibold">
        {event.result.sets.reduce((a, s) => a + s.teamA, 0)}
      </td>
    </tr>

    <tr>
      <td className="p-2 text-left font-medium">{teamB}</td>

      {event.result.sets.map((s, i) => (
        <td key={i} className="p-2 text-center">
          {s.teamB}
        </td>
      ))}

      <td className="p-2 text-center font-semibold">
        {event.result.sets.reduce((a, s) => a + s.teamB, 0)}
      </td>
    </tr>
  </tbody>
</table>



              <p className="mt-2  text-sm sm:text-sm">🏆 Winner: {event.result.winner}</p>
            </div>
          )}

          {/* TABLE (Athletics / Swimming) */}


          {event.result.type === "table" && (

            <table className="w-full text-sm sm:text-sm table-fixed border-collapse">
  <thead>
    <tr className="text-gray-300 border-b border-white/20">
      {event.result.headers.map((h, i) => (
        <th
          key={i}
          className={`p-2 ${
            i === 0 ? "text-left" : "text-center"
          }`}
        >
          {h}
        </th>
      ))}
    </tr>
  </thead>

  <tbody>
    {event.result.rows.map((row, i) => (
      <tr key={i} className="border-b border-white/10 last:border-0">
        {row.map((cell, j) => (
          <td
            key={j}
            className={`p-2 ${
              j === 0 ? "text-left font-medium" : "text-center"
            }`}
          >
            {cell}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</table>

          )}

          {/* CRICKET */}
          {event.result.type === "link" && (
            <>
              <p className="text-sm sm:text-sm">🏆 Winner: {event.result.winner}</p>
              <a
                href={event.result.scorecardUrl}
                target="_blank"
                className="underline text-blue-400"
              >
                View Scorecard
              </a>
            </>
          )}

          {/* CHESS */}
          {event.result.type === "text" && (
            <p className="text-sm sm:text-sm">♟️ Result: {event.result.result}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default EventCard

























