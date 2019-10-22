import React, {useState} from 'react'
import Button from '../../components/Button'
import styles from './TreeElement.module.scss'

const TreeElement = props => {
  const [expanded, setExpand] = useState(false)
  const [addSection, showAddSection] = useState(false)
  const [hovered, setHovered] = useState(false)
  const {prefix, element, add, remove, hideExpand} = props
  
  return (
    <li
      className={styles.listElement} 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`${styles.treeElement} ${hovered ? styles.hovered : ''}`}>
        {!hideExpand && expanded && <i onClick={() => setExpand(!expanded)} title="Contract" className={`fas fa-minus-square ${styles.expand}`} />}
        {!hideExpand && !expanded && <i onClick={() => setExpand(!expanded)} title="Expand" className={`fas fa-plus-square ${styles.expand}`} />}
        <span className={styles.name}>{prefix ? <span className={styles.title}>{prefix}: </span> : ''} {element.name}</span>
        {add && hovered && <i onClick={() => showAddSection(true)} title="Add children" className="fal fa-plus" />}
        {remove && hovered && <i onClick={() => props.removeAction(element)} title="Remove" className="fal fa-times" />}
      </div>
      {addSection && <AddSection element={element} showAddSection={showAddSection} addAction={props.addAction} setExpand={setExpand} />}
      {expanded && props.children}
    </li>
  )
}
  
export const AddSection = props => {
  const [input, setInput] = useState('')


  const addAction = input => {
    props.addAction({
      ...props.element,
      name: input
    })
    props.setExpand(true)
    props.showAddSection(false)
  }
  
  return (
    <div className={styles.addSection}>
      <div><span className={styles.title}>Name </span><input onChange={e => setInput(e.target.value)}  /></div>
      <div className={styles.buttons}><Button className="cancel" secondary onClick={() => props.showAddSection(false)}>Cancel</Button><Button className="add" onClick={() => addAction(input)}>Add</Button></div>
    </div>
  )
}

export default TreeElement
  