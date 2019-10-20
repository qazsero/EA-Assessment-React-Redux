import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TreeElement from '../../../components/TreeElement'

Enzyme.configure({adapter: new Adapter()})

describe('TreeElement', () => {

  const element = {
    id: 1,
    name: "Event 1"
  }

  const treeElement = shallow(
    <TreeElement 
      element={element}
    >
      <span className="childrenContent">Hello</span>
    </TreeElement>
  )

  it('renders a TreeElement', () => {
    expect(treeElement.exists('li.listElement')).toBe(true)
    expect(treeElement.exists('.treeElement')).toBe(true)
    expect(treeElement.exists('.fa-plus-square')).toBe(true)
    expect(treeElement.exists('.fa-minus-square')).toBe(false)
    expect(treeElement.exists('.childrenContent')).toBe(false)
  })

  it('renders an expanded TreeElement', () => {
    treeElement.find('.fa-plus-square').simulate('click')
    expect(treeElement.exists('.fa-plus-square')).toBe(false)
    expect(treeElement.exists('.fa-minus-square')).toBe(true)
    expect(treeElement.exists('.childrenContent')).toBe(true)
    treeElement.find('.fa-minus-square').simulate('click')
    expect(treeElement.exists('.fa-plus-square')).toBe(true)
    expect(treeElement.exists('.fa-minus-square')).toBe(false)
    expect(treeElement.exists('.childrenContent')).toBe(false)
  })


})
