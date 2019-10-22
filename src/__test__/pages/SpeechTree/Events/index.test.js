import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Events from '../../../../pages/SpeechTree/Events'

jest.mock('react-redux', () => (
  {
    useDispatch: ()=> {},
    useSelector: () => ({
      events: [{id:1, feId:1, coId:1, name: 'one event'}]
    })
  }
))


Enzyme.configure({adapter: new Adapter()})

describe('Events', () => {
  const events = shallow(<Events featureId="1" />)

  it('renders a list of events', () => {
    expect(events.exists('ul')).toBe(true)
    expect(events.exists('TreeElement')).toBe(true)
  })
})
