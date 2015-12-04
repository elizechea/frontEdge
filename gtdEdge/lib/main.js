import ng from 'angular'

import common from './common/common.js'
import states from './states/states.js'

ng.module('frontEdge', [common, states])

ng.element(document).ready(() => ng.bootstrap(document, ['frontEdge']))