import ng from 'angular'
import am from 'angular-material'

let name = 'allTasks'

ng.module(name, ['ngMaterial'])
	.controller ('AllTasksController',AllTasksController)

function AllTasksController(tasksDataService) {
			this.tasks = tasksDataService.tasks
		}

export default name;	