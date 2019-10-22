import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Features, {FeatureTreeList} from '../../../../pages/SpeechTree/Features'


jest.mock('react-redux', () => (
  {
    useDispatch: ()=> {},
    useSelector: () => ({
      features: [{id:1,  name: 'one feature'}]
    })
  }
))

const featureArray = [{id:1, name: 'one feature'}]
Enzyme.configure({adapter: new Adapter()})

describe('Features', () => {
  const features = shallow(<Features />)

  it('renders a panel to create a feature', () => {
    expect(features.exists('TreeElement')).toBe(true)
  })
})

describe('FeatureTreeList', () => {
  const featureList = shallow(<FeatureTreeList features={featureArray} />)

  it('renders a list of features', () => {
    expect(featureList.exists('ul')).toBe(true)
    expect(featureList.exists('TreeElement')).toBe(true)
  })
})
