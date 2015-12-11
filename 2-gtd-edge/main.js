import ng from 'angular'
import am from 'angular-material'
import ngnr from 'angular-new-router'

import tasksDataService from './services/tasks-data-service.js'
import components from './components/components.js'


ng.module('frontEdge', ['ngMaterial', 'ngNewRouter', tasksDataService, components])

ng.element(document).ready(() => ng.bootstrap(document, ['frontEdge']))

ng.module('frontEdge')
	.controller('AppController', ['$router', AppController])

function AppController($router) { }

AppController.$routeConfig = [
	{ path: '/', redirectTo: '/_' },
	{ path: '/:id', component: 'home'} ,
 	{ path: '/task/:id', component:'task'}
 ]