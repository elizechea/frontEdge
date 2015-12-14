import ng from 'angular'
import am from 'angular-material'


let name = 'task'

ng.module(name, ['ngMaterial'])
	.controller('TaskController', TaskController)

function TaskController($routeParams, $router,tasksDataService) {
	let taskId = $routeParams.id
	this.task = tasksDataService.findTask(taskId)
	this.saveTask = () => {
		tasksDataService.updateTask(taskId)
		$router.parent.navigate('/')
	}
	this.deleteTask = () => {
		tasksDataService.deleteTask(taskId)
		$router.parent.navigate('/')
	}
}

export default name