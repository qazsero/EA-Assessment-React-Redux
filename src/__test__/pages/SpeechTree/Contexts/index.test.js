import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Contexts from '../../../../pages/SpeechTree/Contexts'

jest.mock('react-redux', () => (
  {
    useDispatch: ()=> {},
    useSelector: () => ({
      contexts: [{id:1, feId:1, name: 'one context'}]
    })
  }
))


Enzyme.configure({adapter: new Adapter()})

describe('Contexts', () => {
  const contexts = shallow(<Contexts featureId="1" />)

  it('renders a list of contexts', () => {
    expect(contexts.exists('ul')).toBe(true)
    expect(contexts.exists('TreeElement')).toBe(true)
  })
})
