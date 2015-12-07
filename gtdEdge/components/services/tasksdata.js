import ng from 'angular'

let name = 'tasksdata'

ng.module(name, [])
	.service ('tasksdataService',tasksdataService)

function tasksdataService() {
			this.tasks = [
				{ title: 'Probar Material Design', description: 'Contenedores y listas', done: true },
				{ title: 'Practicar componentes', description: 'Usar controladores y scope', done: false }]
		}

export default name	
