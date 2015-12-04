import ng from 'angular'
import am from 'angular-material'

let name = 'todaytasks'

ng.module(name, ['ngMaterial'])
	.component(name, {
  		templateUrl: `./lib/states/landing/${name}/${name}.html`,
			controller : function(){
				this.tasks = [
					{title:'Probar Material Design', description:'Contenedores y listas', done:true},
					{title:'Practicar componentes', description:'Usar controladores y scope', done:false}]
			}
		})

export default name;	