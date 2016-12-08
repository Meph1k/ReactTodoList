import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import user from "./userReducer"
import nextStep from "./nextStepReducer"

export default combineReducers({
  tweets,
  user,
  nextStep
})
