import { applyMiddleware, createStore } from 'redux'
import reducer from './reducers'

const middlewares: any[] = []

export default createStore(reducer, applyMiddleware(...middlewares))
