import ng from 'angular'
import am from 'angular-material'


let name = 'home'

ng.module(name, ['ngMaterial'])
	.controller('HomeController', HomeController)

function HomeController($mdToast) {
	$mdToast.show($mdToast.simple().textContent('Hello!'));
}

export default name