

















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
