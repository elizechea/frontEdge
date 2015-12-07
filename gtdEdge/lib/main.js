import ng from 'angular'

import components from './components/components.js'

ng.module('frontEdge', [components])

ng.element(document).ready(() => ng.bootstrap(document, ['frontEdge']))