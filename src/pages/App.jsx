import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import {useLocation} from "react-router"

import SpeechTree from './SpeechTree'
import styles from './App.module.scss'


const App = () => {

  const location = useLocation()
  const eaLogo = require('../assets/img/ea-logo.svg')

  return (
    <React.Fragment>
      <div className={styles.navBar}>
        <div className={styles.navContainer}>
          <div className={styles.logoContainer}>
            <img className={styles.eaLogo} src={eaLogo} alt="Electronic Arts Logo" />
            <h2 className={styles.title}>LocCMS</h2>
          </div>
          <div className={styles.nav}>
            <ul>
              <li><Link to="/">Speech Tree</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <Switch location={location}>
          <Route path="/" exact component={SpeechTree} />
        </Switch>
      </div>
    </React.Fragment>
  )
}

export default App
