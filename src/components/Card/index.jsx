import React from 'react'
import styles from './Card.module.scss'

const Card = props => {

  let classes = `${styles.card} ${props.className}`
  if (props.hasPadding) classes = `${classes} ${styles.hasPadding}`

  return (
    <div 
      className={classes}
      id={props.id}
    >
      {props.children}
    </div>
  )
}


export default Card
