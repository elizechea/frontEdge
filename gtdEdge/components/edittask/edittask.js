import ng from 'angular'
import am from 'angular-material'

import tasksdata from '../services/tasksdata.js'
let name = 'edittask'

ng.module(name, ['ngMaterial',tasksdata])
	.controller ('EdittaskController',EdittaskController)

function EdittaskController(tasksdataService) {
			this.tasks = tasksdataService.tasks
		}

export default name;	