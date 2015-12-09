import ng from 'angular'

let name = 'tasksData'

ng.module(name, [])
	.service('tasksDataService', tasksDataService)

function tasksDataService() {
	this.tasks = [
				{ id: 1, title: 'Try Material Design', description: 'Containers and lists', createdDate: new Date('2015-12-03'), dueDate: null, doneDate: new Date('2015-12-04'), done: true, status: 'completed' },
				{ id: 2, title: 'Practicing with components', description: 'Use of controllers and scope', createdDate: new Date('2015-12-04'), dueDate: new Date(), doneDate: null, done: false, status: 'scheduled' },
				{ id: 3, title: 'Install JSPM', description: 'Import and references', createdDate: new Date('2015-12-04'), dueDate: null, doneDate: null, done: false, status: 'pending' }]

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
		if (task.doneDate)
			task.status = "completed"
		else if (task.dueDate)
			task.status = "scheduled"
		else
			task.status = "pending"
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
	this.findTasks = (status, query) => {
		if (query)
			return this.tasks.filter(task => task.title.indexOf(query) >= 0)
		else
			if (status)
				return this.tasks.filter(task => task.status == status)
			else
				return this.tasks
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
