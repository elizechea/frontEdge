import ng from 'angular'
import am from 'angular-material'

let name = 'tasksTools'

ng.module(name, ['ngMaterial'])
	.component(name, {
  		templateUrl: './components/landing/tasks-tools/tasks-tools.html',
			controller: function (tasksDataService) {
				this.taskCounter = tasksDataService.taskCounter
			}
	})

export default name;	