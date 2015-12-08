import ng from 'angular'
import am from 'angular-material'

let name = 'newTask'

ng.module(name, ['ngMaterial'])
	.component(name, {
		templateUrl: './components/landing/new-task/new-task.html',
		bindings: {
			title: '=',
			create : '&'
		}
		})

export default name	