// main file
// import external libs *ES6
import ng from 'angular'
import am from 'angular-material'
	// import our libs
import landing from './landing.js'
	// angular module declaration
ng.module('frontEdge', [landing, 'ngMaterial'])
	// manual bootstrap AngularJS *ES6 arrow functions
ng.element(document).ready(() => ng.bootstrap(document, ['frontEdge']))
