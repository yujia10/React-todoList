import React, { Component } from 'react'
import Item from '../Item'
import PropTypes from 'prop-types'
import './index.css'

export default class List extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    changeTask: PropTypes.func.isRequired, 
    deleteTask: PropTypes.func.isRequired
  }

  render() {
    const{todos, changeTask, deleteTask} = this.props
    return (
      <ul className="todo-main" >
        {todos.map(todoItem => <Item changeTask={changeTask} deleteTask={deleteTask} key={todoItem.id} {...todoItem}/>
        )}
      </ul>
    )
  }
}
