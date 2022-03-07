//创建外壳组件 App
import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'


export default class App extends Component {

  state = {
    todos: [
      { id: '001', name: 'breakfast', done: true },
      { id: '002', name: 'coding', done: true },
      { id: '003', name: 'yoga', done: false }
    ]
  }

  addTask = (newTask) => {
    const { todos } = this.state
    const newTodos = [newTask, ...todos]
    this.setState({ todos: newTodos })
  }

  changeTask = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map((task) => {
      if (task.id === id) {
        return { ...task, done }
      } else {
        return task
      }
    })
    this.setState({ todos: newTodos })
  }

  deleteTask = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter((task) => {
      return task.id !== id
    })
    this.setState({ todos: newTodos })
  }

  checkAllTasks = (isdone) => {
    const { todos } = this.state
    const newTodos = todos.map(task => {
      return { ...task, done: isdone }
    })
    this.setState({ todos: newTodos })
  }

  deleteAllCompleted = () => {
    const { todos } = this.state
    const newTodos = todos.filter((task) => {
      return task.done === false
    })
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTask={this.addTask} />
            <List todos={todos} changeTask={this.changeTask} deleteTask={this.deleteTask} />
            <Footer todos={todos} checkAllTasks={this.checkAllTasks} deleteAllCompleted={this.deleteAllCompleted} />
          </div>
        </div>
      </div>
    )
  }
}

