import React from 'react'
import styles from './Button.module.scss'


const Button = props => {
  let classes = styles.button

  if (props.className) {
    classes = `${classes} ${props.className}`
  }

  if (props.secondary) {
    classes = `${classes} ${styles.secondary}`
  }

  let onClick = props.onClick || null

  return (
    <button className={classes} onClick={onClick} >{props.children}</button>
  )
}

export default Button
