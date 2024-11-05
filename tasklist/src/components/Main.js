import React, { Component } from "react";
import './Main.css'

// Form
import { FaPlus } from 'react-icons/fa'

// Tasks
import { FaWindowClose, FaEdit } from "react-icons/fa";


export default class Main extends Component{
  state = {
    newTask: '',
    tasks: [
      'Fazer café',
      'Beber água',
      'Fazer a janta'
    ],
    index: -1
  }

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { tasks, index } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    const newTasks = [...tasks]

    if(index === -1){
      this.setState({
        tasks: [...newTasks, newTask],
        newTask: '',
      })
    } else{
      newTasks[index] = newTask
      this.setState({
        tasks: [ ...newTasks],
        index: -1
      })
    }
  }

  handleDelete = (e) => {
    e.preventDefault()
    const { tasks, index } = this.state
    const newTasks = [...tasks]
    newTasks.splice(index, 1)

    this.setState({
      tasks: [...newTasks]
    })
  }

  handleEdit = (e, index) => {
    const { tasks } = this.state;

    this.setState({
      index,
      newTask: tasks[index],
    })

  }

  render(){
    const {newTask, tasks } = this.state

    return (
      <div className="main">
        <h1>Task List</h1>

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
          type="text"
          onChange={this.handleChange}
          value={newTask}>
          </input>
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tasks">
          {tasks.map((task, index) => (
            <li key={task}>
              {task}
              <div>
                <FaEdit onClick={(e) => this.handleEdit(e, index)} className="edit"/>
                <FaWindowClose onClick={(e) => this.handleDelete(e, index)} className="close"/>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
