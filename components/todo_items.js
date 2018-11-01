import React, { Component } from 'react';
import Item from './item';

class TodoItems extends Component {
  render() {
      return (
        <ul>
          { this.props.items.map((item, key) => {
            return (
              <Item key={key} text={item}/>
            )
          })}
        </ul>
      );
  }
}

export default TodoItems;
