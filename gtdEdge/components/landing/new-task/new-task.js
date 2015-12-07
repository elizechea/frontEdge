import ng from 'angular'
import am from 'angular-material'

let name = 'newTask'

ng.module(name, ['ngMaterial'])
	.component(name, {
		templateUrl: './components/landing/new-task/new-task.html',
		bindings: {
			tasks: '='
		},
		controller:  function(tasksDataService) {
			this.save = ()=>{
					tasksDataService.createTask(ng.copy(this.title))
					this.title = ''
				}
		}
		})

export default name	