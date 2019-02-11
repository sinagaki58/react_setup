export interface ActionTypeInterface<T> {
  type: ActionTypes
  payload: T
}

export enum ActionTypes {
  INCREMENT = 'main/increment',
  DECREMENT = 'main/decrement'
}

export const increment = (payload: number): ActionTypeInterface<number> => ({
  type: ActionTypes.INCREMENT,
  payload
})

export const decrement = (payload: number): ActionTypeInterface<number> => ({
  type: ActionTypes.DECREMENT,
  payload
})
