import ng from 'angular'

let name = 'landing'

ng.module(name, [])
	.component("landing", {
  		templateUrl: './lib/states/landing/landing.html',
			controller : function(){
				this.tareasParaHoy = [
					{titulo:'probar Material Design', descripcion:'contenedores y listas', hecha:true},
					{titulo:'Practicar componentes', descripcion:'Usar controladores y scope', hecha:false}]
			}
		})

export default name;	


