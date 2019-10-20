import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as actions from '../../../actions/speechtree_actions'
import TreeElement from '../../../components/TreeElement'
import Sentences from '../Sentences'


const Events = ({contextId}) => {
  const prefix = 'Event'
  const dispatch = useDispatch()

  const {events, sentenceCount} = useSelector(({speechTree}) => ({
    events: speechTree.events.filter(ev => ev.coId === contextId),
    sentenceCount: speechTree.sentences.length
  }))

  const addSentence = event => {
    const newSentence = {
      id: sentenceCount+1,
      feId: event.feId,
      coId: event.coId,
      evId: event.id,
      name: event.name
    }
    return dispatch(actions.addSentence(newSentence))
  }

  const removeEvent = event => {
    return dispatch(actions.removeEvent(event))
  }

  return (
    <ul>
      {events.map((ev, index) => (
        <TreeElement 
          key={index}
          prefix={prefix}
          element={ev}
          add={true}
          addAction={addSentence}
          remove={true}
          removeAction={removeEvent}
        >
          <Sentences eventId={ev.id} />
        </TreeElement>
      ))}
    </ul>
  )
}

export default Events
