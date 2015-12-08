import ng from 'angular'
import am from 'angular-material'

let name = 'tasksTools'

ng.module(name, ['ngMaterial'])
	.component(name, {
  		templateUrl: './components/landing/tasks-tools/tasks-tools.html',
		bindings: {
			counter: '='
		}
	})

export default name;	