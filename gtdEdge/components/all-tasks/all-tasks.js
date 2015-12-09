import ng from 'angular'
import am from 'angular-material'

let name = 'allTasks'

ng.module(name, ['ngMaterial'])
	.controller('AllTasksController', AllTasksController)

function AllTasksController($routeParams, tasksDataService) {
	this.status = $routeParams.id != '_' ? $routeParams.id : null
	this.tasks = tasksDataService.findTasks(this.status, this.query)
	this.search = () => {
		this.tasks = tasksDataService.findTasks(this.status, this.query)
	}
	this.deleteTask = (taskId) => {
		tasksDataService.deleteTask(taskId)
	}
	this.onKeyPress = ($event) => {
		var keyCode = $event.which || $event.keyCode;
		if (keyCode === 13) {
			this.tasks = tasksDataService.findTasks(this.status, this.query)
		}
	}
}

export default name;	