import ng from 'angular'
import am from 'angular-material'

let name = 'newTasks'

ng.module(name, ['ngMaterial'])
	.component(name, {
  		templateUrl: './components/landing/new-tasks/new-tasks.html',
			bindings: {
				tasks: '='
			}
		})

export default name;	