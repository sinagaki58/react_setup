import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
  Reducer
} from 'redux'
import { StateInterface } from './initialState'
import main from './reducers'

const rootReducer: Reducer<
  { main: StateInterface },
  AnyAction
> = combineReducers({
  main
})

const middlewares: any[] = []

export default createStore(rootReducer, applyMiddleware(...middlewares))
