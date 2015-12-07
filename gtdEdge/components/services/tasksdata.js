import ng from 'angular'

let name = 'tasksdata'

ng.module(name, [])
	.service ('tasksdataService',tasksdataService)

function tasksdataService() {
			this.tasks = [
				{ id:1, title: 'Probar Material Design', description: 'Contenedores y listas', done: true , datecreated : new Date('2015-12-03'), donedate : new Date('2015-12-04')},
				{ id:2, title: 'Practicar componentes', description: 'Usar controladores y scope', done: false , datecreated : new Date('2015-12-04'), dudate : new Date('2015-12-06')}]
		}

export default name	
