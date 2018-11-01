import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import TodoList from './todo_list';
import CSS from '../css/styles.scss';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo app</h1>
        <TodoList />
      </div>
    );
  }
}

let container = document.getElementById('app');
let component = <App />;

ReactDOM.render(component, container);
