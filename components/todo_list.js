import React, { Component } from 'react';
import TodoItems from './todo_items';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let { currentItem, items } = this.state;
    let newItems = items;
    newItems.push(currentItem);
    this.setState({items: newItems, currentItem: ''});
  }

  handleChange(event) {
    let currentItem = event.target.value;
    this.setState({ currentItem });
  }

  render() {
    let { items } = this.state;
    return (
      <div className="todo-wrapper">

        <TodoItems items={this.state.items}/>

        <form onSubmit={this.handleSubmit}>
          <label>Add a task:</label>
          <input type="text" value={this.state.currentItem} onChange={this.handleChange}/>
          <button>+</button>
        </form>

      </div>
    )
  }
}

export default TodoList;
