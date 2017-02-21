import { combineReducers } from "redux"
import todo from "./todoReducer"

export default combineReducers({
  tweets,
  user,
  nextStep,
  todo
})
