import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Card from '../../../components/Card'

Enzyme.configure({adapter: new Adapter()})

describe('Card', () => {
  const card = shallow(<Card>Hello</Card>)

  it('renders a Card', () => {
    expect(card.text()).toEqual('Hello')
  })

})
