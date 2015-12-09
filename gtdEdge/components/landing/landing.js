import ng from 'angular'
import am from 'angular-material'

import newTask from './new-task/new-task.js'
import todayTasks from './today-tasks/today-tasks.js'
import newTasks from './new-tasks/new-tasks.js'
import tasksTools from './tasks-tools/tasks-tools.js'

let name = 'landing'

ng.module(name, ['ngMaterial', newTask, todayTasks, newTasks, tasksTools])
	.controller('LandingController', LandingController)

function LandingController(tasksDataService) {
	this.tasks = tasksDataService.tasks
	this.taskCounter = tasksDataService.taskCounter
	this.todayTasks = tasksDataService.findTodayTasks()
	this.newTasks = tasksDataService.findNotScheduledTasks()
	this.newTaskTitle = ''
	this.createTask = () => {
		tasksDataService.createTask(this.newTaskTitle)
		this.newTaskTitle = ''
		this.newTasks = tasksDataService.findNotScheduledTasks()
	}
	this.update = (taskId) => {
		tasksDataService.updateTask(taskId)
	}
}

export default name


