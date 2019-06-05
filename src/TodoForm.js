import React, { Component } from 'react'
import todosAPI from './todos-api'
import { Link } from 'react-router-dom';

export default class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      taskName: '',
      assignee: ''
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }
  async componentDidMount(){
    if(!this.props.addTodo){
      try {
        const { data } = await todosAPI.get(`/todos/${this.props.match.params.id}`)
        this.setState(data)
      } catch (err) {
        console.error(err)
      }
    }
  }

  async handleSubmit(event) {
    event.preventDefault()
    if(this.props.addTodo){
      try {
        const { data } = await todosAPI.post('/todos', this.state)
        this.props.addTodo(data)
        this.setState({
          taskName: '',
          assignee: ''
        })
      } catch (err) {
        console.error(err)
      }
    }
    else {
      try {
        const { data } = await todosAPI.put(`/todos/${this.props.match.params.id}`, this.state)
        this.props.history.push('/');
      } catch (err) {
        console.error(err)
      }
    }
  }

  render() {
    const updating = !this.props.addTodo;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="taskName">Task Name:</label>
        <input
          type="text"
          name="taskName"
          value={this.state.taskName}
          onChange={this.handleChange}
        />
        <label htmlFor="assignee">Assignee:</label>
        <input
          type="text"
          name="assignee"
          value={this.state.assignee}
          onChange={this.handleChange}
        />
        <button type="submit" disabled={ !this.state.assignee || !this.state.taskName}>{ updating ? 'Edit' : 'Create'}</button>
      {
        updating && <Link to='/'>Cancel</Link>
      }
      </form>
    )
  }
}
