import * as types from "../actions/types"

const initialState = {
  features:[],
  contexts:[],
  events:[],
  sentences:[]
}

const speechTreeReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.ADD_FEATURE:
    return  {
      ...state, 
      features:[...state.features, action.payload]
    }
  case types.REMOVE_FEATURE:
    return  {
      features: state.features.filter(fe => fe.id !== action.payload.id),
      contexts: state.contexts.filter(co => co.feId !== action.payload.id),
      events: state.events.filter(ev => ev.feId !== action.payload.id),
      sentences: state.sentences.filter(se => se.feId !== action.payload.id)
    }
  case types.ADD_CONTEXT:
    return  {
      ...state, 
      contexts:[...state.contexts, action.payload]
    }
  case types.REMOVE_CONTEXT:
    return  {
      ...state,
      contexts: state.contexts.filter(co => co.id !== action.payload.id),
      events: state.events.filter(ev => ev.coId !== action.payload.id),
      sentences: state.sentences.filter(se => se.coId !== action.payload.id)
    }
  case types.ADD_EVENT:
    return  {
      ...state, 
      events:[...state.events, action.payload]
    }
  case types.REMOVE_EVENT:
    return  {
      ...state,
      events: state.events.filter(ev => ev.id !== action.payload.id),
      sentences: state.sentences.filter(se => se.evId !== action.payload.id)
    }
  case types.ADD_SENTENCE:
    return  {
      ...state, 
      sentences:[...state.sentences, action.payload]
    }
  case types.REMOVE_SENTENCE:
    return  {
      ...state,
      sentences: state.sentences.filter(se => se.id !== action.payload.id)
    }
  default: 
    return state
  }
}

export default speechTreeReducer
