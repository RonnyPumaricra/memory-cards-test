export interface BasicCardData {
  clue: string
  type: 'img' | 'txt'
  answer: string
}
export interface ExtendedCardData {
  clue: string
  title?: string
  type: 'img' | 'txt'
  answer: string
  revealed: boolean
}
