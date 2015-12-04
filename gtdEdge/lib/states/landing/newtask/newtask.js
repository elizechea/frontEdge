import ng from 'angular'
import am from 'angular-material'

let name = 'newtask'

ng.module(name, ['ngMaterial'])
	.component(name, {
  		templateUrl: `./lib/states/landing/${name}/${name}.html`,
			controller : function(){
				this.task = {}
			}
		})

export default name;	