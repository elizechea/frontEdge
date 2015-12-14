// always impor references, no global variables
import ng from 'angular'
	// let is the new var *ES6
let name = 'landing'

// Minimal component delaration *ng1.5
ng.module(name, [])
	.component("landing", {
		templateUrl: '/lib/landing.html'
	})
	// module-file variables are privet by default, export what you want *ES6
export default name;
