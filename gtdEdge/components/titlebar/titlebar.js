import ng from 'angular'
import am from 'angular-material'

let name = 'titlebar'

ng.module(name, ['ngMaterial'])
	.component(name, {
  		templateUrl: `./components/${name}/${name}.html`
		})

export default name;	