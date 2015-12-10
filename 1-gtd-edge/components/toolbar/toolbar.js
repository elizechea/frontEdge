import ng from 'angular'
import am from 'angular-material'


let name = 'toolbar'

ng.module(name, ['ngMaterial'])
	.component(name, {
		templateUrl: './components/toolbar/toolbar.html',
		bindings: {

		},
		controller: function () {

		}
		})

export default name