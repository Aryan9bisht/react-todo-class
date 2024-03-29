import React, { Component } from 'react';

export class AddTodo extends Component {
    state={
        title:''
    }
    onChange=(e)=>{
        this.setState({[e.target.name]: e.target.value}); 
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.AddTodo(this.state.title);
        this.setState({title: ""})
    }
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input type="text" style={{ flex: '10', padding: '5px' }} name="title" placeholder="Add Todo..." value={this.state.title} 
        onChange={this.onChange}/>
        <input type="submit" className="btn" style={{ flex: '1' }} /> {/* Corrected typo here */}
      </form>
    );
  }
}

export default AddTodo;
