import ng from 'angular'

let name = 'components'

import toolbar from './toolbar/toolbar.js'
import sidebar from './sidebar/sidebar.js'

import home from './home/home.js'
import task from './task/task.js'

ng.module(name, [toolbar,sidebar,home,task])

export default name;	