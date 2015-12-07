import ng from 'angular'

let name = 'components'

import titlebar from './titlebar/titlebar.js'
import landing from './landing/landing.js'


ng.module(name, [titlebar,landing])

export default name;	