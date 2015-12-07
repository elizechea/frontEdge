import ng from 'angular'
import ngnr from 'angular-new-router'

import services from './services/services.js'
import components from './components/components.js'


ng.module('frontEdge', ['ngNewRouter', services, components])

ng.element(document).ready(() => ng.bootstrap(document, ['frontEdge']))

ng.module('frontEdge')
	.controller('AppController', ['$router', AppController])

AppController.$routeConfig = [
  { path: '/', component: 'landing'  },
	{ path: '/alltasks', component: 'allTasks'  },
	{ path: '/edittask/:id', component: 'editTask'  }
]

function AppController($router) { }