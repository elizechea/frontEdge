import ng from 'angular'

let name = 'tasksData'

ng.module(name, [])
	.service('tasksDataService', tasksDataService)

function tasksDataService() {
	this.tasks = [
				{ id: 1, title: 'Probar Material Design', description: 'Contenedores y listas', done: true, datecreated: new Date('2015-12-03'), duedate: null, donedate: new Date('2015-12-04') },
				{ id: 2, title: 'Practicar componentes', description: 'Usar controladores y scope', done: true, datecreated: new Date('2015-12-04'), dudate: new Date('2015-12-06'), donedate: null },
				{ id: 3, title: 'Practicar JSPM', description: 'Importar y referencias', done: false, datecreated: new Date('2015-12-04'), dudate: null, donedate: null }]
	
	this.createTask = (title) => {
				var task = { id: this.tasks.length + 1, title, datecreated: new Date(), duedate: null, donedate: null, done: false }
				this.tasks.push(task)
				this.updateCounter()
	}
	this.findTask = (taskId) => {
		return this.tasks.find(task => task.id == taskId)
	}
	this.updateTask = (taskId) => {
				var task = this.findTask(taskId)
				if(task.done)
					task.donedate = new Date()
				else
					task.donedate = null
				this.updateCounter()
	}
	this.findNotScheduledTasks = () => {
		return this.tasks.filter(task => task.done == false && task.dudate == null)
	}
	this.findScheduledTasks = () => {
		return this.tasks.filter(task => task.done == false && task.dudate != null)
	}
	this.findTodayTasks = () => {
		return this.tasks.filter(task => task.done == false && task.dudate != null && task.dudate.toLocaleDateString() == new Date().toLocaleDateString())
	}
	this.findDoneTasks = () => {
		return this.tasks.filter(task => task.done == true)
	}

	this.taskCounter = {
		notScheduledTasks : this.findNotScheduledTasks().length,
		scheduledTasks : this.findScheduledTasks().length,
		todayTasks : this.findTodayTasks().length,
		doneTasks : this.findDoneTasks().length
	}
	
	this.updateCounter = () => {
		this.taskCounter.notScheduledTasks = this.findNotScheduledTasks().length
		this.taskCounter.scheduledTasks = this.findScheduledTasks().length
		this.taskCounter.todayTasks = this.findTodayTasks().length
		this.taskCounter.doneTasks = this.findDoneTasks().length
	}
	

}

export default name	
