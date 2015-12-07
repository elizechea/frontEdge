import ng from 'angular'
import am from 'angular-material'

let name = 'editTask'

ng.module(name, ['ngMaterial'])
	.controller ('EditTaskController',EditTaskController)

function EditTaskController($routeParams,tasksDataService) {
			let taskId = $routeParams.id
			this.task = tasksDataService.findTask(taskId)
			this.saveTask = ()=>{
				tasksDataService.updateTask(taskId)
			}
		}

export default name;	