import ng from 'angular'
import am from 'angular-material'


let name = 'sidebar'

ng.module(name, ['ngMaterial'])
	.component(name, {
		templateUrl: './components/sidebar/sidebar.html',
		bindings: {

		},
		controller: function (tasksDataService) {
				this.taskCounter = tasksDataService.taskCounter
		}
		})

export default name