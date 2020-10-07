import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class About extends Component {
  render () {
    return (
      <div className="task">
        <h3>About CheckIt</h3><br/>
        <p>CheckIt is a simple task manager app that allows you to stay on top of the things you need to do.</p><br/>
        <p>You should not have to read a manual to use a task manager app and with CheckIt, you do not have to! CheckIt is a simple way to allow you to manage your tasks.</p><br/>
        <p>By using the famous Eisenhower Matrix, you choose your priority levels and check each task off as you complete it.</p>
        <img src="menu.png" height="450"></img><br/>
        <br/>
        <p></p>
        <Link className="back" to='/#/'>Back to home</Link>
      </div>
    )
  }
}

export default About
