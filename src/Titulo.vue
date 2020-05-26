<template>
	<div>
		<h1 class="titulo">{{ titulo }}</h1>
		<h2 class="ganador">{{ganador}}</h2>
	</div>
</template>
<script>
	import { bus } from './main.js'
	export default{
		data(){
			return{
				ganador:''
			}
		},
		props:{
			titulo: {
				default: 'mi titulo',
				type: String
			}
		},
		created(){
			bus.$on('anunciarGanador', (ganador)=>{
				this.ganador = ganador;
			})
		}
	}
</script>
<style scoped>
.titulo{
  text-align: center;
  font-family: century gothic, arial, helvetica, sans-serif;
}
.ganador{
  text-align: center;
  font-family: century gothic, arial, helvetica, sans-serif;
}
</style>