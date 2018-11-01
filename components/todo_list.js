import React, { Component } from 'react';
import TodoItems from './todo_items';

class TodoList extends Component {

  constructor(props){
    super();
    this.state = {
      items: [],
      currentText: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    let { currentText, items } = this.state;
    let currentItems = items;
    currentItems.push(currentText);
    this.setState({
      items: currentItems,
      currentText: ''
    });
  }

  handleChange(event) {
    let currentText = event.target.value;
    this.setState({
      currentText
    });
  }


  render() {
    return (
      <div className="todo-wrapper">

        <TodoItems items={this.state.items}/>

        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.currentText} onChange={this.handleChange}/>
          <button>+</button>
        </form>

      </div>
    )
  }

}

export default TodoList;
