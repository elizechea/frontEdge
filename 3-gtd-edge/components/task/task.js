import ng from 'angular'
import am from 'angular-material'


let name = 'task'

ng.module(name, ['ngMaterial'])
	.controller('TaskController', TaskController)

function TaskController(tasksDataService) {
	
}

export default name