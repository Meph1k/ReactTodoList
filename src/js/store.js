import { applyMiddleware, createStore, compose } from "redux"

import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers/index"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [promise(), thunk, ];

export default createStore(reducer, composeEnhancers(
    applyMiddleware(...middleware)
))
