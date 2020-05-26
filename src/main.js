import Vue from 'vue'
import App from './App.vue'

export var bus = new Vue({
	methods:{
		anunciarGanador(ganador){
			this.$emit('anunciarGanador',ganador);
		},
		jugando(jugando, contador){
			this.$emit('jugando',jugando,contador);

		}
	}
})

new Vue({
  el: '#app',
  render: h => h(App)
})
