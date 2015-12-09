import ng from 'angular'
import am from 'angular-material'

let name = 'editTask'

ng.module(name, ['ngMaterial'])
	.controller('EditTaskController', EditTaskController)

function EditTaskController($routeParams, $router, tasksDataService) {
	let taskId = $routeParams.id
	this.task = tasksDataService.findTask(taskId)
	this.saveTask = () => {
		console.log("saving:" + taskId)
		tasksDataService.updateTask(taskId)
		$router.parent.navigate('/')
	}
	this.deleteTask = () => {
		console.log("deleting:" + taskId)
		tasksDataService.deleteTask(taskId)
		$router.parent.navigate('/')
	}
}

export default name;	