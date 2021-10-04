import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import focus from './focus'

const reducer = combineReducers({
  focus,
})
const store = configureStore({
  reducer,
})
export default store;