import ng from 'angular'
import am from 'angular-material'

let name = 'newTask'

ng.module(name, ['ngMaterial'])
	.component(name, {
		templateUrl: './components/landing/new-task/new-task.html',
		bindings: {
			title: '=',
			create: '&'
		},
		controller: function(){
			this.onKeyPress = ($event) => {
				var keyCode = $event.which || $event.keyCode;
				if (keyCode === 13 && this.title!='') {
					this.create()
				}
			}
		}
		})

export default name	