import ng from 'angular'
import am from 'angular-material'

import tasksdata from '../services/tasksdata.js'
let name = 'alltasks'

ng.module(name, ['ngMaterial',tasksdata])
	.controller ('AlltasksController',AlltasksController)

function AlltasksController(tasksdataService) {
			this.tasks = tasksdataService.tasks
		}

export default name;	