import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Sentences from '../../../../pages/SpeechTree/Sentences'

jest.mock('react-redux', () => (
  {
    useDispatch: ()=> {},
    useSelector: () => ({
      sentences: [{id:1, feId:1, name: 'one sentence'}]
    })
  }
))


Enzyme.configure({adapter: new Adapter()})

describe('Sentences', () => {
  const sentences = shallow(<Sentences featureId="1" />)

  it('renders a list of sentences', () => {
    expect(sentences.exists('ul')).toBe(true)
    expect(sentences.exists('TreeElement')).toBe(true)
  })
})
