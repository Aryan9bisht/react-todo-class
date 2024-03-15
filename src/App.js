import React, { Component } from 'react';

import Todos from './components/Todos';
import './App.css';
import AddTodo from './components/addTodo';
import Header from './components/layout/header';

import { v4 as uuidv4 } from 'uuid'; // Import v4 function from uuid and rename it as uuidv4

class App extends Component {
  state = {
    todos: [
     
    ],
    show: false, // Corrected syntax: using colon instead of semicolon
    filteredTodos: [] ,
  
  };
  delTodo =(id)=>{
    this.setState({todos: [...this.state.todos.filter(todo=>todo.id!==id)] })
  };

  componentDidMount() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.setState({ todos: JSON.parse(storedTodos) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  addTodo =(title)=>{
    const newTodo = {
      id: uuidv4(),
       title,
      completed: false
    }
    console.log(newTodo.id);
this.setState({todos:[...this.state.todos,newTodo]})
  }
  showCompleted = () => {
    const { todos } = this.state;
    const completedTasks = todos.filter(todo => todo.completed);
    this.setState({
      show: true,
      filteredTodos: completedTasks
    });
  };
  showActive = () => {
    const activeTasks = this.state.todos.filter(todo => !todo.completed);
    this.setState({
      show: true,
      filteredTodos: activeTasks
    });
  };
  
  allTask =()=>{
    this.setState({ show: false, filteredTodos: [] });
  }
  markComplete = (id)=>{
   this.setState({ todos: this.state.todos.map(todo=>{
    if(todo.id===id){
      todo.completed = !todo.completed;
    }
    return todo;
   })})
  } 
  clearAll=()=>{
    this.setState({todos:[], show:false, filteredTodos:[]});
  }
  edited=()=>{
    console.log('inside');
  }
  render() {
    return (
      <div className="App">
        <div className='container'>
        <Header />
        <AddTodo AddTodo={this.addTodo}/>
       {!this.state.show ? (
        <Todos todos={this.state.todos} markComplete={this.markComplete}
  delTodo={this.delTodo} edited={this.edited}/>
       ):(
        <Todos  todos={this.state.filteredTodos} markComplete={this.markComplete}
        delTodo={this.delTodo}  showCompleted={this.showCompleted}  edited={this.edited}/>
       
       )}
<button style={btnStyle} onClick={this.showCompleted}>show Completed</button>
<button style={btnStyle} onClick={this.allTask}>All Task</button>
<button style={btnStyle} onClick={this.showActive}>Active Task</button>
<button style={btnStyle} onClick={this.clearAll}>Clear All</button>

        </div>

      
      </div>
    );
  }
}
const btnStyle={
background: 'blue',
color:'white',
margin:'15px'

}

export default App;
