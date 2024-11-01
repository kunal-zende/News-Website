import React, { Component } from 'react'
import NavBar from './componenets/NavBar'
import NewsComponenet from './componenets/NewsComponenet'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <NewsComponenet/>
      </div>
    )
  }
}
