import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SpeechTree from '../../../pages/SpeechTree'

Enzyme.configure({adapter: new Adapter()})

describe('Speechtree', () => {
  const speechTree = shallow(<SpeechTree>Hello</SpeechTree>)

  it('renders the Speech Tree', () => {
    expect(speechTree.find('Card').prop('className')).toEqual('card')
    expect(speechTree.exists('Features')).toBe(true)
  })
})
