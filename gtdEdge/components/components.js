import ng from 'angular'

let name = 'components'

import titleBar from './title-bar/title-bar.js'
import landing from './landing/landing.js'
import allTasks from './all-tasks/all-tasks.js'
import editTask from './edit-task/edit-task.js'

ng.module(name, [titleBar,landing,allTasks,editTask])

export default name;	