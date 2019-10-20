import * as actions from '../../actions/speechtree_actions'
import * as types from '../../actions/types'

const payload = {
  id: 1
}

describe('ACTIONS => SPEECHTREE => ADD FEATURE', () => {
  it('creates an action to add a feature', () => {
    const expectedAction = {type: types.ADD_FEATURE, payload}
    expect(actions.addFeature(payload)).toEqual(expectedAction)
  })
})

describe('ACTIONS => SPEECHTREE => REMOVE FEATURE', () => {
  it('creates an action to remove a feature', () => {
    const expectedAction = {type: types.REMOVE_FEATURE, payload}
    expect(actions.removeFeature(payload)).toEqual(expectedAction)
  })
})

describe('ACTIONS => SPEECHTREE => ADD CONTEXT', () => {
  it('creates an action to add a context', () => {
    const expectedAction = {type: types.ADD_CONTEXT, payload}
    expect(actions.addContext(payload)).toEqual(expectedAction)
  })
})

describe('ACTIONS => SPEECHTREE => REMOVE CONTEXT', () => {
  it('creates an action to remove a context', () => {
    const expectedAction = {type: types.REMOVE_CONTEXT, payload}
    expect(actions.removeContext(payload)).toEqual(expectedAction)
  })
})

describe('ACTIONS => SPEECHTREE => ADD EVENT', () => {
  it('creates an action to add a event', () => {
    const expectedAction = {type: types.ADD_EVENT, payload}
    expect(actions.addEvent(payload)).toEqual(expectedAction)
  })
})

describe('ACTIONS => SPEECHTREE => REMOVE EVENT', () => {
  it('creates an action to remove a event', () => {
    const expectedAction = {type: types.REMOVE_EVENT, payload}
    expect(actions.removeEvent(payload)).toEqual(expectedAction)
  })
})

describe('ACTIONS => SPEECHTREE => ADD SENTENCE', () => {
  it('creates an action to add a sentence', () => {
    const expectedAction = {type: types.ADD_SENTENCE, payload}
    expect(actions.addSentence(payload)).toEqual(expectedAction)
  })
})

describe('ACTIONS => SPEECHTREE => REMOVE SENTENCE', () => {
  it('creates an action to remove a sentence', () => {
    const expectedAction = {type: types.REMOVE_SENTENCE, payload}
    expect(actions.removeSentence(payload)).toEqual(expectedAction)
  })
})
