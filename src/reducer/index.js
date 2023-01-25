import { combineReducers } from "redux"
import calls from "./calls"
import authReducer from './Auth';


export default combineReducers({ calls, authReducer })
