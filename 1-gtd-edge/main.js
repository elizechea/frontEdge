import ng from 'angular'
import am from 'angular-material'
	//Angular New Router for 1.4
import ngnr from 'angular-new-router'

import tasksDataService from './services/tasks-data-service.js'
import components from './components/components.js'


ng.module('frontEdge', ['ngMaterial', 'ngNewRouter', tasksDataService, components])

ng.element(document).ready(() => ng.bootstrap(document, ['frontEdge']))

ng.module('frontEdge')
	.controller('AppController', ['$router', AppController])

function AppController($router) {}
// router configuration requires a main controller
AppController.$routeConfig = [
	{
		path: '/',
		component: 'home'
	},
	{
		path: '/task/:id',
		component: 'task'
	}
 ]


// convention first: component -> /components/{component}/{component}.html + '{component}Controller'
