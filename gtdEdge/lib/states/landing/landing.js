import ng from 'angular'
import am from 'angular-material'

import newtask from './newtask/newtask.js'
import todaytasks from './todaytasks/todaytasks.js'
import taskstools from './taskstools/taskstools.js'

let name = 'landing'

ng.module(name, [newtask, todaytasks, taskstools, 'ngMaterial'])
	.component(name, {
  		templateUrl: `./lib/states/${name}/${name}.html`,
		controller: function () {

		}
		})

export default name;	


