import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TreeElement, {AddSection} from '../../../components/TreeElement'

Enzyme.configure({adapter: new Adapter()})

describe('TreeElement', () => {

  const element = {
    id: 1,
    name: "Event 1"
  }

  const treeElement = shallow(
    <TreeElement  element={element} >
      <span className="childrenContent">Hello</span>
    </TreeElement>
  )

  const treeElementAdd = shallow(
    <TreeElement add={true}  element={element} >
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

  
  it('show the area to create a new element', () => {
    treeElementAdd.find('li.listElement').simulate('mouseEnter')
    treeElementAdd.find('.fal.fa-plus').simulate('click')
    expect(treeElementAdd.exists('AddSection')).toBe(true)
  })
})


describe('TreeElement', () => {
  const element = {id:1, name: 'hi'}
  const showAddSection = jest.fn()
  const addAction = jest.fn()
  const setExpand = jest.fn()

  const addSection = shallow(
    <AddSection 
      element={element} 
      showAddSection={showAddSection} 
      addAction={addAction} 
      setExpand={setExpand}
    />
  )

  beforeEach(() => {
    jest.resetAllMocks()
  })



  it('renders a AddSection', () => {
    expect(addSection.exists('.addSection')).toBe(true)
    expect(addSection.exists('.title')).toBe(true)
    expect(addSection.exists('.buttons')).toBe(true)
  })

  it('click on the cancel button', () => {
    addSection.find('.cancel').simulate('click')
    expect(showAddSection).toHaveBeenCalledTimes(1)
  })

  it('click on the add button', () => {
    addSection.find('.add').simulate('click')
    expect(addAction).toHaveBeenCalledTimes(1)
    expect(setExpand).toHaveBeenCalledTimes(1)
    expect(showAddSection).toHaveBeenCalledTimes(1)
  })


})
