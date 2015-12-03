import ng from 'angular'

let name = 'landing'

ng.module(name, [])
	.component("landing", {
		templateUrl : '/lib/landing.html'
	})

export default name;	


