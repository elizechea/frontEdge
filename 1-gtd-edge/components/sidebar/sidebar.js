import ng from 'angular'
import am from 'angular-material'


let name = 'sidebar'
	// empty 1.5 component
ng.module(name, ['ngMaterial'])
	.component(name, {
		templateUrl: './components/sidebar/sidebar.html',
		bindings: {

		},
		controller: function () {

		}
	})

export default name
