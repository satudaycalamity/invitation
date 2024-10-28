export interface User {
  name: string
  token: string
}

export interface Action {
  type: string
  payload: any
}
