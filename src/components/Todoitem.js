import React, { Component } from 'react';
import PropTypes from 'prop-types';
const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
};

export class Todoitem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p onDoubleClick={this.props.edited.bind(this,id)}>
          <input style={{float:'left'}} checked={this.props.todo.completed}  type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}
          {title}
          <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
        </p>
      
      </div>
    );
  }
}

Todoitem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired
};


export default Todoitem;
