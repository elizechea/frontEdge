import ng from 'angular'

let name = 'components'

import titlebar from './titlebar/titlebar.js'
import landing from './landing/landing.js'
import alltasks from './alltasks/alltasks.js'
import edittask from './edittask/edittask.js'

ng.module(name, [titlebar,landing,alltasks,edittask])

export default name;	