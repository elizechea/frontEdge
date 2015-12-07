import ng from 'angular'
import am from 'angular-material'

import newtask from './newtask/newtask.js'
import todaytasks from './todaytasks/todaytasks.js'
import taskstools from './taskstools/taskstools.js'

let name = 'landing'

ng.module(name, [newtask, todaytasks, taskstools, 'ngMaterial'])
//	.component(name, {
//  		templateUrl: `./component/${name}/${name}.html`,
//			controller: LandingController})
	.controller ('LandingController',LandingController)

function LandingController() {
			this.tasks = [
				{ title: 'Probar Material Design', description: 'Contenedores y listas', done: true },
				{ title: 'Practicar componentes', description: 'Usar controladores y scope', done: false }]
		}

export default name;	


