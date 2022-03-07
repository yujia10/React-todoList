import React, { Component } from 'react'
import './index.css'
import DeleteIcon from '@mui/icons-material/Delete';


export default class Item extends Component {

  state = {mouse:false}
 handleMouse = (flag)=>{
   return ()=>{
     this.setState({mouse:flag})
   }
 }

 handleCheck = (id)=>{
  return (event)=>{
    this.props.changeTask(id,event.target.checked)
  }
 }

 handleDelete = (id)=>{
  return this.props.deleteTask(id)
}

  render() {
    const {mouse}=this.state
    const {id, name,done} = this.props
    return (
      <li style={{backgroundColor: mouse?'#F9E4D4':'#f1f5f8'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
          <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />            
          <span>{name}</span>
          </label>
          <button className="btn btn-danger" onClick={()=>{this.handleDelete(id)}} style={{display:mouse?'block':'none'}}><DeleteIcon/></button>
        </li>
    )
  }
}
