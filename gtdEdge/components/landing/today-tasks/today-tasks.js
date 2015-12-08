import ng from 'angular'
import am from 'angular-material'

let name = 'todayTasks'

ng.module(name, ['ngMaterial'])
	.component(name, {
  		templateUrl: './components/landing/today-tasks/today-tasks.html',
			bindings: {
				tasks: '=',
				update: '&'
			},
			controller : function(){
				this.updateTask= function(taskId){
					this.update({ taskId: taskId })				
				}
			}
		})

export default name;	