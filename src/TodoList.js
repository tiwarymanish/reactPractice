import React, { Component } from 'react';
import List from './List.js';
import Progress from './Progress.js';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      userEnteredText: '',
      TodoList: [
      {
        name:'Manish'
      }
      ]
    }
    this.handleUserEnteredTextChanged = this.handleUserEnteredTextChanged.bind(this);
    this.handleAddNewTask = this.handleAddNewTask.bind(this);
  }

  handleUserEnteredTextChanged(event) {
    this.setState({userEnteredText: event.target.value});
  }

  handleAddNewTask() {
    console.log('Adding Task:', this.state.userEnteredText);
    // var newarr=this.state.TodoList.slice();
    // newarr.push(this.state.userEnteredText);
    // this.setState({
    //   TodoList : newarr;
    // })
    // // TODO: Add new task to task list in List.

    let userEnteredText=this.state.userEnteredText;
    let TodoList=this.state.TodoList;
    TodoList.push({
      name:userEnteredText
    }
    );

    this.setState({});
  }

  render() {
    return (
      <div>
      <input type="text" placeholder="Enter things to do" onChange={this.handleUserEnteredTextChanged}/>
      <input type="submit" onClick={this.handleAddNewTask}/>
      <Progress />
      <List taskList={this.state.TodoList}/>
      </div>
      );
  }
}

export default TodoList;
