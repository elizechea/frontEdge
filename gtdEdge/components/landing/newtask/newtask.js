import ng from 'angular'
import am from 'angular-material'

let name = 'newtask'

ng.module(name, ['ngMaterial'])
	.component(name, {
		templateUrl: `./components/landing/${name}/${name}.html`,
		bindings: {
			tasks: '='
		},
		controller: function () {
			// to do: tasksDataService.create(ng.copy(this.title))
			this.save = ()=>{
					var task = {id: this.tasks.length, title:ng.copy(this.title) , datecreated: new Date()}
					this.tasks.push(task)
					this.title = ''
				}
		}
		})

export default name	