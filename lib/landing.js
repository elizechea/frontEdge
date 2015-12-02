import ng from 'angular'

let name = 'landing'

ng.module(name, [])
	.component("landing", {
  		template: "<div>Hola Mundo</div>"
		})

export default name;	


