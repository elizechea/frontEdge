import ng from 'angular'

let name = 'tasksData'

ng.module(name, [])
	.service('tasksDataService', tasksDataService)

function tasksDataService() {
	this.tasks = [
				{ id: 1, title: 'Probar Material Design', description: 'Contenedores y listas', createdDate: new Date('2015-12-03'), dueDate: null, doneDate: new Date('2015-12-04'), done: true },
				{ id: 2, title: 'Practicar componentes', description: 'Usar controladores y scope', createdDate: new Date('2015-12-04'), doneDate: null, donedate: null, done: false },
				{ id: 3, title: 'Practicar JSPM', description: 'Importar y referencias', createdDate: new Date('2015-12-04'), dueDate: null, doneDate: null, done: false }]

	this.createTask = (title) => {
				var task = { id: this.tasks.length + 1, title, createdDate: new Date(), dueDate: null, doneDate: null, done: false }
				this.tasks.push(task)
				this.updateCounter()
	}
	this.findTask = (taskId) => {
		return this.tasks.find(task => task.id == taskId)
	}
	this.updateTask = (taskId) => {
		var task = this.findTask(taskId)
		task.updatedDate = new Date()
		if (task.done)
			task.doneDate = new Date()
		else
			task.doneDate = null
		this.updateCounter()
	}
	this.findNotScheduledTasks = () => {
		return this.tasks.filter(task => task.done == false && task.dueDate == null)
	}
	this.findScheduledTasks = () => {
		return this.tasks.filter(task => task.done == false && task.dueDate != null)
	}
	this.findTodayTasks = () => {
		return this.tasks.filter(task => task.done == false && task.dueDate != null && task.dueDate.getDate() <= (new Date().getDate() + 1))
	}
	this.findDoneTasks = () => {
		return this.tasks.filter(task => task.done == true)
	}

	this.taskCounter = {
		notScheduledTasks: this.findNotScheduledTasks().length,
		scheduledTasks: this.findScheduledTasks().length,
		todayTasks: this.findTodayTasks().length,
		doneTasks: this.findDoneTasks().length
	}

	this.updateCounter = () => {
		this.taskCounter.notScheduledTasks = this.findNotScheduledTasks().length
		this.taskCounter.scheduledTasks = this.findScheduledTasks().length
		this.taskCounter.todayTasks = this.findTodayTasks().length
		this.taskCounter.doneTasks = this.findDoneTasks().length
	}

}

export default name	
