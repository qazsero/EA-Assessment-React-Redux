import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as actions from '../../../actions/speechtree_actions'
import TreeElement from '../../../components/TreeElement'
import Events from '../Events'


const Contexts = ({featureId}) => {
  const prefix = 'Context'
  const dispatch = useDispatch()

  const {contexts, eventCount} = useSelector(({speechTree}) => ({
    contexts: speechTree.contexts.filter(co => co.feId === featureId),
    eventCount: speechTree.events.length
  }))

  const addEvent = context => {
    const newEvent = {
      id: eventCount+1,
      feId: context.feId,
      coId: context.id,
      name: context.name
    }
    return dispatch(actions.addEvent(newEvent))
  }

  const removeContext = context => {
    return dispatch(actions.removeContext(context))
  }

  return (
    <ul>
      {contexts.map((co, index) => (
        <TreeElement 
          key={index}
          prefix={prefix}
          element={co}
          add={true}
          addAction={addEvent}
          remove={true}
          removeAction={removeContext}
        >
          <Events contextId={co.id} />
        </TreeElement>
      ))}
    </ul>
  )
}

export default Contexts
