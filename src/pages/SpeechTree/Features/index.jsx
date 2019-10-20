import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as actions from '../../../actions/speechtree_actions'
import TreeElement from '../../../components/TreeElement'
import Contexts from '../Contexts'


const Features = () => {

  const dispatch = useDispatch()

  const {features, featureCount} = useSelector(({speechTree}) => ({
    features: speechTree.features,
    featureCount: speechTree.features.length,
  }))

  const addFeature = event => {
    const newEvent = {
      id: featureCount+1,
      name: event.name
    }
    return dispatch(actions.addFeature(newEvent))
  }

  return (
    <React.Fragment>
      <TreeElement 
        element={{name: "Add Feature"}} 
        add={true} 
        addAction={addFeature}
        remove={false} 
        hideExpand
      />
      <FeatureTreeList features={features}/>
    </React.Fragment>
  )
}

const FeatureTreeList = props => {
  const prefix = 'Feature'
  const dispatch = useDispatch()

  const {contextCount} = useSelector(({speechTree}) => ({
    contextCount: speechTree.contexts.length,
  }))

  const {features} = props

  const addContext = feature => {
    const newContext = {
      id: contextCount+1,
      feId: feature.id,
      name: feature.name
    }
    return dispatch(actions.addContext(newContext))
  }

  const removeFeature = feature => {
    return dispatch(actions.removeFeature(feature))
  }

  return (
    <ul>
      {features.map((fe, index) => (
        <TreeElement 
          key={index}
          prefix={prefix}
          element={fe}
          add={true}
          addAction={addContext}
          remove={true}
          removeAction={removeFeature}
        >
          <Contexts featureId={fe.id} />
        </TreeElement>
      ))}
    </ul>
  )
}

export default Features
