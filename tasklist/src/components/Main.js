import React, { Component } from "react";
import './Main.css'

// Form
import { FaPlus } from 'react-icons/fa'


export default class Main extends Component{
  state = {
    newTask: '',
  }

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value
    })
  }

  render(){
    const {newTask} = this.state

    return (
      <div className="main">
        <h1>Task List</h1>

        <form action="#" className="form">
          <input
          type="text"
          onChange={this.handleChange}
          value={newTask}>
          </input>
          <button type="submit">
            <FaPlus />
          </button>
        </form>
      </div>
    )
  }
}
