import ng from 'angular'
import am from 'angular-material'

let name = 'taskstools'

ng.module(name, ['ngMaterial'])
	.component(name, {
  		templateUrl: `./lib/components/landing/${name}/${name}.html`,
			controller : function(){}
		})

export default name;	