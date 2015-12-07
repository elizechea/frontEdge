import ng from 'angular'
import am from 'angular-material'

import newTask from './new-task/new-task.js'
import todayTasks from './today-tasks/today-tasks.js'
import tasksTools from './tasks-tools/tasks-tools.js'

let name = 'landing'

ng.module(name, ['ngMaterial', newTask, todayTasks, tasksTools])
	.controller ('LandingController',LandingController)

function LandingController(tasksDataService) {
			this.tasks = tasksDataService.tasks
}

export default name


