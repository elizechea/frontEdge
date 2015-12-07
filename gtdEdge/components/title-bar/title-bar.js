import ng from 'angular'
import am from 'angular-material'

let name = 'titleBar'

ng.module(name, ['ngMaterial'])
	.component(name, {
  		templateUrl: './components/title-bar/title-bar.html'
		})

export default name;	