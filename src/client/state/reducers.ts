import { ActionTypeInterface, ActionTypes } from './actions'
import { initialState, StateInterface } from './initialState'

const reducer = (
  state: StateInterface = initialState,
  action: ActionTypeInterface<any>
): StateInterface => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return state

    case ActionTypes.DECREMENT:
      return state

    default:
      return state
  }
}

export default reducer
