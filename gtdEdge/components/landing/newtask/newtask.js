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
			this.save = ()=>{
					var task = {title:ng.copy(this.title)}
					this.tasks.push(task)
					this.title = ''
				}
		}
		})

export default name	