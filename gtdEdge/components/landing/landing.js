import ng from 'angular'
import am from 'angular-material'

import tasksdata from '../services/tasksdata.js'


import newtask from './newtask/newtask.js'
import todaytasks from './todaytasks/todaytasks.js'
import taskstools from './taskstools/taskstools.js'

let name = 'landing'

ng.module(name, ['ngMaterial', tasksdata, newtask, todaytasks, taskstools])
	.controller ('LandingController',LandingController)

function LandingController(tasksdataService) {
			this.tasks = tasksdataService.tasks
}

export default name


