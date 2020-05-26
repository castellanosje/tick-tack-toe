<template>
	<div id="reset" v-on:click="reset">Jugar de nuevo :)</div>
</template>
<script>
	import { bus } from './main.js'
	export default{
		props:['casillas'],
		methods:{
			reset(){
      			this.resultado1=0;
      			this.resultado2=0;
      			for(var i=0; i<=8; i++){
      				console.log(this.casillas[i]);
      				this.casillas[i].j1 = 0;
      				this.casillas[i].j2 = 0;
      				this.casillas[i].valor='';
      				this.casillas[i].botonEnUso = 0;
      				console.log(this.casillas[i].j2);
      			}
      			bus.anunciarGanador("");
      			bus.jugando(true, 0);
			}
		}
	}
</script>
<style>
	#reset{
	  text-align: center;
	  font-family: century gothic, arial, helvetica, sans-serif;
	  height: 40px;
	  line-height: 40px;
	  clear: both;
	}
</style>