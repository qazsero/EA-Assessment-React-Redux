import {combineReducers} from 'redux'
import SpeechTreeReducer from './speechTreeReducer'

const rootReducer = combineReducers({
  speechTree: SpeechTreeReducer
})

export default rootReducer
