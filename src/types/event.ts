



// export type Participant = {
//   name: string
// }


// export type EventResult = {
//   winner: string
//   summary: string
// }






// export type VenueLocation =
//   | string
//   | {
//       name: string
//       map_url: string
//     }

// export type Event = {
//   id: number
//   title: string
//   sport: string
//   event_type: string
//   start_time: string
//   venue: string
//   venue_location: VenueLocation
//   status: "live" | "completed" | "upcoming"
//   participants: { name: string }[]
//   result?: {
//     winner: string
//     sets: string
//   }
// }









// export type Event = {
//   id: number
//   title: string
//   sport: string
//   event_type: "team" | "individual"
//   gender: "men" | "women" | "mixed"
//   start_time: string
//   day: string
//   status: "live" | "upcoming" | "completed"



//   venue: string         
//   venue_location: string 

  
  
//   participants?: {
//   id: number
//   name: string
// }[]


//   result?: {
//     winner: string
//     summary?: string
//   }
// }




















export type Event = {
  id: number
  title: string
  sport: string
  event_type: "team" | "individual"
  gender: "men" | "women" | "mixed"
  start_time: string
  day: string
  status: "live" | "upcoming" | "completed"


  venue: string
  venue_location: string

  participants?: {
    id: number
    name: string
  }[]



  result?:
    | {
        type: "score" // football, hockey, water polo, basketball
        label: "Goals" | "Points"
        teamA: number
        teamB: number
        winner: string
      }
    | {
        type: "sets" // badminton, volleyball, tennis, squash
        totalSets: number
        sets: { teamA: number; teamB: number }[]
        winner: string
      }
    | {
        type: "table" // athletics, swimming
        headers: string[]
        rows: string[][]
      }
    | {
        type: "link" // cricket
        winner: string
        scorecardUrl: string
      }
    | {
        type: "text" // chess
        result: string
      }
}
