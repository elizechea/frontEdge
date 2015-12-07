import ng from 'angular'
import ngnr from 'angular-new-router'

import components from './components/components.js'

ng.module('frontEdge', ['ngNewRouter', components])

ng.element(document).ready(() => ng.bootstrap(document, ['frontEdge']))

ng.module('frontEdge')
	.controller('AppController', ['$router', AppController])

AppController.$routeConfig = [
  { path: '/', component: 'landing'  },
	{ path: '/alltasks', component: 'alltasks'  },
	{ path: '/edittask', component: 'edittask'  }
]

function AppController($router) { }