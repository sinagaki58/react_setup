import { initialState, StateInterface } from './initialState'

export interface ActionInterface<T> {
  type: string
  payload: T
  error: Error
}

export default (
  state = initialState,
  action: ActionInterface<StateInterface>
): StateInterface => {
  switch (action.type) {
    default:
      return state
  }
}
