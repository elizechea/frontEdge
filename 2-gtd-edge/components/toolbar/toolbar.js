import ng from 'angular'
import am from 'angular-material'


let name = 'toolbar'

ng.module(name, ['ngMaterial'])
	.component(name, {
		templateUrl: './components/toolbar/toolbar.html',
		controller: function ($router) {
			this.onKeyPress = ($event) => {
				var keyCode = $event.which || $event.keyCode;
				if (keyCode === 13) {
					if(this.searchInput)
						$router.navigate('/_/'+this.searchInput)
					else
						$router.navigate('/_/_')
				}
			}
		}
		})

export default name