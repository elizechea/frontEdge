import ng from 'angular'
import am from 'angular-material'

import tasksdata from '../services/tasksdata.js'
let name = 'edittask'

ng.module(name, ['ngMaterial',tasksdata])
	.controller ('EdittaskController',EdittaskController)

function EdittaskController($routeParams,tasksdataService) {
			let taskId = $routeParams.id
			this.task = tasksdataService.tasks.find(t => t.id == taskId)
		}

export default name;	