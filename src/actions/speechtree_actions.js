import * as types from "./types"


export const addFeature = payload => ({type: types.ADD_FEATURE, payload})
export const removeFeature = payload => ({type: types.REMOVE_FEATURE, payload})

export const addContext = payload => ({type: types.ADD_CONTEXT, payload})
export const removeContext = payload => ({type: types.REMOVE_CONTEXT, payload})

export const addEvent = payload => ({type: types.ADD_EVENT, payload})
export const removeEvent = payload => ({type: types.REMOVE_EVENT, payload})

export const addSentence = payload => ({type: types.ADD_SENTENCE, payload})
export const removeSentence = payload => ({type: types.REMOVE_SENTENCE, payload})

