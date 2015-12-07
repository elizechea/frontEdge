import ng from 'angular'
import am from 'angular-material'

let name = 'todayTasks'

ng.module(name, ['ngMaterial'])
	.component(name, {
  		templateUrl: './components/landing/today-tasks/today-tasks.html',
			bindings: {
				tasks: '='
			},
			controller : function(tasksDataService){
				this.update=(taskId)=>{
					tasksDataService.updateTask(taskId)
				}
			}
		})

export default name;	