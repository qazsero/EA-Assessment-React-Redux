import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Button from '../../../components/Button'

Enzyme.configure({adapter: new Adapter()})

describe('Button', () => {
  const primaryButton = shallow(<Button>Hello</Button>)
  const customButton = shallow(<Button className="testclass">Hello</Button>)
  const secondaryButton = shallow(<Button secondary>Hello</Button>)

  it('renders the Primary button', () => {
    expect(primaryButton.find('button').prop('className')).toEqual('button')
  })

  it('renders the custom button', () => {
    expect(customButton.find('button').prop('className')).toEqual('button testclass')
  })

  it('renders the Secondary button', () => {
    expect(secondaryButton.find('button').prop('className')).toEqual('button secondary')
  })
})
