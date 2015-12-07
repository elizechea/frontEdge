import ng from 'angular'
import am from 'angular-material'

let name = 'taskstools'

ng.module(name, ['ngMaterial'])
	.component(name, {
  		templateUrl: `./components/landing/${name}/${name}.html`,
			bindings: {
				tasks: '='
			},
			controller: function () { }
			})

export default name;	