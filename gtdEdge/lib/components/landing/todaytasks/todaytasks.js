import ng from 'angular'
import am from 'angular-material'

let name = 'todaytasks'

ng.module(name, ['ngMaterial'])
	.component(name, {
  		templateUrl: `./lib/components/landing/${name}/${name}.html`,
			bindings: {
				tasks: '='
			},
			controller : function(){
				
			}
		})

export default name;	