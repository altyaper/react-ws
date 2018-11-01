import React, { Component } from 'react';
import Item from './item';

const TodoItems = (props) => {
    return (
        <ul>
          { props.items.map((item, key) => {
            return (
              <li key={key}>{item}</li>
            )
          })}
        </ul>
      );
}





export default TodoItems;
