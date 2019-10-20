import passwordReducer from '../../reducers/speechTreeReducer'
import * as types from '../../actions/types'

describe('>>>R E D U C E R --- Test speechTreeReducer',()=>{

  const initialState = {
    features:[],
    contexts:[],
    events:[],
    sentences:[]
  }

  const featurePayload = {
    id: 1,
    name: 'test'
  }

  const contextPayload = {
    id: 1,
    feId: 1,
    name: 'test'
  }

  const eventPayload = {
    id: 1,
    feId: 1,
    coId: 1,
    name: 'test'
  }

  const sentencePayload = {
    id: 1,
    feId: 1,
    coId: 1,
    evId: 1,
    name: 'test'
  }

  const completeState = {
    features:[featurePayload],
    contexts:[contextPayload],
    events:[eventPayload],
    sentences:[sentencePayload]
  }


  it('+++ reducer for initial rendering', () => {
    let state = passwordReducer(undefined, {})
    expect(state).toEqual(initialState)
  })

  it('+++ reducer for ADD_FEATURE', () => {
    let state = passwordReducer(initialState, {type:types.ADD_FEATURE, payload:featurePayload})
    expect(state).toEqual({
      ...initialState,
      features: [featurePayload]
    })
  })

  
  it('+++ reducer for REMOVE_FEATURE', () => {
    let state = passwordReducer(completeState, {type:types.REMOVE_FEATURE, payload:featurePayload})
    expect(state).toEqual(initialState)
  })

  it('+++ reducer for ADD_CONTEXT', () => {
    let state = passwordReducer(initialState, {type:types.ADD_CONTEXT, payload:contextPayload})
    expect(state).toEqual({
      ...initialState,
      contexts: [contextPayload]
    })
  })

  
  it('+++ reducer for REMOVE_CONTEXT', () => {

    let state = passwordReducer(completeState, {type:types.REMOVE_CONTEXT, payload:contextPayload})
    expect(state).toEqual({
      ...completeState,
      contexts:[],
      events: [],
      sentences:[]
    })
  })

  it('+++ reducer for ADD_EVENT', () => {
    let state = passwordReducer(initialState, {type:types.ADD_EVENT, payload:eventPayload})
    expect(state).toEqual({
      ...initialState,
      events: [eventPayload]
    })
  })

  
  it('+++ reducer for REMOVE_EVENT', () => {

    let state = passwordReducer(completeState, {type:types.REMOVE_EVENT, payload:eventPayload})
    expect(state).toEqual({
      ...completeState,
      events: [],
      sentences:[]
    })
  })

  it('+++ reducer for ADD_SENTENCE', () => {
    let state = passwordReducer(initialState, {type:types.ADD_SENTENCE, payload:sentencePayload})
    expect(state).toEqual({
      ...initialState,
      sentences: [sentencePayload]
    })
  })

  
  it('+++ reducer for REMOVE_SENTENCE', () => {

    let state = passwordReducer(completeState, {type:types.REMOVE_SENTENCE, payload:sentencePayload})
    expect(state).toEqual({
      ...completeState,
      sentences:[]
    })
  })
})
