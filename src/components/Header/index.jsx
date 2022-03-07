import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {

  static propTypes = {
    addTask: PropTypes.func.isRequired
  }

  handleKeyUp = (event) => {
    const { keyCode, target } = event
    if (keyCode !== 13) return
    if (target.value.trim() === "") {
      alert("Task name can not be empty");
      return
    }
    const newTask = { id: nanoid(), name: target.value, done: false }
    this.props.addTask(newTask)
    target.value = ""
  }

  render() {
    return (
      <div className="todo-header">
        <h1>TO DO</h1>
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="Add a new task..." />
      </div>
    )
  }
}
