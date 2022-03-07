import React, { Component } from 'react'
import './index.css'
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default class Footer extends Component {

  handleCheckAll = (event)=>{
    this.props.checkAllTasks(event.target.checked)
  }

  handleDeleteCompleted = ()=>{
    this.props.deleteAllCompleted()
  }

  render() {
    const {todos} = this.props
    const total = todos.length
    const completed = todos.filter(task => task.done === true).length
    
    return (
      
      <div className="todo-footer">
        <label> 
        <Checkbox {...label} checked={total === completed && total !== 0} onChange={this.handleCheckAll}/>
        </label>
        <span>
          <span>{completed} of {total} </span>tasks done
        </span>
        <button onClick={this.handleDeleteCompleted}className="btn btn-danger">Remove checked</button>
      </div>
    )
  }
}
