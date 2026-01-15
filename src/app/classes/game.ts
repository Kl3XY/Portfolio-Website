export interface Root {
  games: Game[]
}

export interface Game {
  cover_url: string
  created_at: string
  downloads_count: number
  id: number
  min_price: number
  p_android: boolean
  p_linux: boolean
  p_osx: boolean
  p_windows: boolean
  published: boolean
  published_at: string
  purchases_count: number
  short_text: string
  title: string
  type: string
  url: string
  views_count: number
  earnings: Earning[]
}

export interface Earning {
  currency: string
  amount_formatted: string
  amount: number
}
