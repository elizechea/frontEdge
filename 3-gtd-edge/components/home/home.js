import ng from 'angular'
import am from 'angular-material'


let name = 'home'

ng.module(name, ['ngMaterial'])
	.controller('HomeController', HomeController)

function HomeController($routeParams,$router, $mdToast, tasksDataService) {
	this.status = $routeParams.s != '_' ? $routeParams.s : null
	this.query = $routeParams.q != '_' ? $routeParams.q : null

	this.tasks = tasksDataService.findTasks(this.status, this.query)
	this.onKeyPress = ($event) => {
		var keyCode = $event.which || $event.keyCode;
		if (keyCode === 13 && this.title != '') {
			this.createTask()
		}
	}
	this.createTask = () => {
		tasksDataService.createTask(this.title)
		this.title = ''
		this.tasks = tasksDataService.findTasks(this.status, this.query)
		this.creating = false
		$router.parent.navigate('/')
		$mdToast.show(
      $mdToast.simple()
        .content('Task created!')
        .hideDelay(3000)
    )
	
	}
	this.deleteTask = (taskId) => {
		tasksDataService.deleteTask(taskId)
		this.tasks = tasksDataService.findTasks(this.status, this.query)
		$mdToast.show(
      $mdToast.simple()
        .content('Task deleted!')
        .hideDelay(3000)
    )
	}
	this.doTask = (taskId) => {
		let task = tasksDataService.findTask(taskId)
		task.done=true
		tasksDataService.updateTask(taskId)
		this.tasks = tasksDataService.findTasks(this.status, this.query)
		$mdToast.show(
      $mdToast.simple()
        .content('Task done!')
        .hideDelay(3000)
    )
	}
	this.scheduleTask = (taskId) => {
		let task = tasksDataService.findTask(taskId)
		task.dueDate=new Date()
		tasksDataService.updateTask(taskId)
		this.tasks = tasksDataService.findTasks(this.status, this.query)
		$mdToast.show(
      $mdToast.simple()
        .content('Task done!')
        .hideDelay(3000)
    )
	}
	this.editTask = (taskId)=>{
		$router.parent.navigate('/task/'+taskId)
	}
}

export default name