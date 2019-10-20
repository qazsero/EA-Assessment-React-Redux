import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as actions from '../../../actions/speechtree_actions'
import TreeElement from '../../../components/TreeElement'


const Sentences = ({eventId}) => {
  const prefix = 'Sentence'
  const dispatch = useDispatch()

  const {sentences} = useSelector(({speechTree}) => ({
    sentences: speechTree.sentences.filter(se => se.evId === eventId),
  }))

  const removeEvent = event => {
    return dispatch(actions.removeSentence(event))
  }

  return (
    <ul>
      {sentences.map((ev, index) => (
        <TreeElement 
          key={index}
          prefix={prefix}
          element={ev}
          add={false}
          remove={true}
          removeAction={removeEvent}
          hideExpand
        />
      ))}
    </ul>
  )
}

export default Sentences
