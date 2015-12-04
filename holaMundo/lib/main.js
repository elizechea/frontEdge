import ng from 'angular'
import am from 'angular-material'

import landing from './landing.js'

ng.module('frontEdge', [landing, 'ngMaterial'])

ng.element(document).ready(() => ng.bootstrap(document, ['frontEdge']))