import ng from 'angular'

let name = 'tasksDataService'

ng.module(name, [])
	.service(name, theService)

function theService($window) {
	const tasksStorageKey = "tasks"
	const taskIdStorageKey = "taskId"
	this.tasks = []
	this.taskId = 0
	
	this.loadData = function(){
		let data = $window.localStorage.getItem( tasksStorageKey )
		if(data){
			this.tasks = ng.fromJson( data )
			this.tasks.forEach((t)=>{
				t.createdDate=this.jsonDate(t.createdDate)
				t.doneDate=this.jsonDate(t.doneDate)
				t.dueDate=this.jsonDate(t.dueDate)
				t.updatedDate=this.jsonDate(t.updatedDate)})
			this.updateCounter()
		}
		else{
			this.tasks = [
					{ id: 1, title: 'Try Material Design', description: 'Containers and lists', 
					createdDate: new Date('2015-12-03'), dueDate: null, doneDate: new Date('2015-12-04'), 
					done: true, status: 'done' },
					{ id: 2, title: 'Practicing with components', description: 'Use of controllers and scope', 
					createdDate: new Date('2015-12-04'), dueDate: new Date(), doneDate: null, 
					done: false, status: 'scheduled' },
					{ id: 3, title: 'Install JSPM', description: 'Import and references', 
					createdDate: new Date('2015-12-04'), dueDate: null, doneDate: null, 
					done: false, status: 'new' }]
			this.taskId = 3
			this.saveData()
		}
		this.taskId = $window.localStorage.getItem( taskIdStorageKey )
	}
	
	this.jsonDate= (date)=>{
		if(date)
			return new Date(date)
		else 
			return null
	}
	
	this.saveData = function() {
		$window.localStorage.setItem( tasksStorageKey, ng.toJson(ng.copy(this.tasks)) )
		$window.localStorage.setItem( taskIdStorageKey, ng.toJson(ng.copy(this.taskId)) )
		this.updateCounter()
	}
	
	this.createTask = (title) => {
		if(title=='') return
		this.taskId++;
		var task = { id: this.taskId, title, createdDate: new Date(), dueDate: null, doneDate: null, done: false, status: 'new' }
		this.tasks.push(task)
		this.saveData()
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
			task.status = "done"
		else if (task.dueDate)
			task.status = "scheduled"
		else
			task.status = "new"
		this.saveData()
		
	}
	this.deleteTask= (taskId) => {
		let taskIndex = this.tasks.findIndex(task => task.id == taskId)
		this.tasks.splice(taskIndex,1)
		this.saveData()
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
		return  this.tasks.filter(task => task.done == true)
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

	this.loadData()
	
}

export default name	