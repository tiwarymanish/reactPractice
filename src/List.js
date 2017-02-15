import React from 'react';
import TodoList from './TodoList';

export default class List extends React.Component {
	render() {
		const taskListComponents = this.props.taskList.map((task) => {
			return (
				<li>{task.name}</li>
				);
		});
		return (
			<ul>
			{taskListComponents}
			</ul>
			);
		return (
			<div>{this.props.handleNewTask}</div>
			);

	}

}


// List((props)=> {
// 	<form onSubmit={props.handleNewTask}>
// 	<input type="submit" />
// 	</form>

// })


