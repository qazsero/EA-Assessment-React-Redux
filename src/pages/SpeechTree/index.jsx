import React from 'react'
import Card from '../../components/Card'
import Features from './Features'

import styles from './SpeechTree.module.scss'


const SpeechTree = () => {
  return (
    <React.Fragment>
      <h2>Speech tree editor</h2>
      <p>Here you can add or remove features, contexts, events or sentences</p>
      <Card className={styles.card}>
        <div className={styles.cardHead}>
          <i title="Expand all - Not implemented" className="fas fa-plus-circle" />
          <i title="Contract all - Not implemented" className="fas fa-minus-circle" />
        </div>
        <div className={styles.cardBody}>
          <Features />
        </div>      
      </Card>
    </React.Fragment>
  )
}
export default SpeechTree
