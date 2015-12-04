import ng from 'angular'
import am from 'angular-material'

let name = 'todaytasks'

ng.module(name, ['ngMaterial'])
	.component(name, {
  		templateUrl: `./lib/states/landing/${name}/${name}.html`,
			bindings: {
				tasks: '='
			},
			controller : function(){
				
			}
		})

export default name;	