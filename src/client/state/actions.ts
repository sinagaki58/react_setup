export interface ActionTypeInterface<T> {
  type: ActionTypes
  payload: T
}

enum ActionTypes {
  INCREMENT = 'main/increment',
  DECREMENT = 'main/decrement'
}

export const incrementAmount = (
  payload: number
): ActionTypeInterface<number> => ({
  type: ActionTypes.INCREMENT,
  payload
})

export const decrementAmount = (
  payload: number
): ActionTypeInterface<number> => ({
  type: ActionTypes.DECREMENT,
  payload
})
