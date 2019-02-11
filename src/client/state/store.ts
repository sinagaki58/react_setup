import { applyMiddleware, combineReducers, createStore } from 'redux'
import main from './reducers'

const rootReducer = combineReducers({
  main
})

const middlewares: any[] = []

export default createStore(rootReducer, applyMiddleware(...middlewares))
