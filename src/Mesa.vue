<template>	
	<div class="rejilla">
		<div class="fila" v-for="(casilla, indice) in casillas" v-if="indice == 0">
			<div v-for="(casilla, indice) in casillas" v-if="indice < 3" class="boton" v-on:click="controlCasilla(indice);" v-bind:id="casilla.id"><p>{{casilla.valor}}</p></div>
		</div>
		<div class="fila" v-for="(casilla, indice) in casillas" v-if="indice == 3">
			<div v-for="(casilla, indice) in casillas" v-if="indice < 6 && indice > 2" class="boton" v-on:click="controlCasilla(indice)" v-bind:id="casilla.id"><p>{{casilla.valor}}</p></div>
		</div>
		<div class="fila" v-for="(casilla, indice) in casillas" v-if="indice == 5">
			<div v-for="(casilla, indice) in casillas" v-if="indice < 9 && indice > 5" class="boton" v-on:click="controlCasilla(indice)" v-bind:id="casilla.id"><p>{{casilla.valor}}</p></div>
		</div>
		<div class="linea" v-bind:class="controlCaso()"></div>
	</div>
</template>
<script>
	import { bus } from './main.js'
	export default{
		props:['casillas'],
		data(){
			return {contador:0, enJuego:true}
		},
		methods:{
			controlCasilla(indice){
				if(this.contador % 2 == 0 && this.casillas[indice].botonEnUso == 0 && this.enJuego){
					this.casillas[indice].valor = 'X';
					this.contador++
					this.casillas[indice].botonEnUso = 1;
					this.casillas[indice].j1 = 1;
				}else if(this.casillas[indice].botonEnUso == 0 && this.enJuego){
					this.casillas[indice].valor = 'O';
					this.contador++;
					this.casillas[indice].botonEnUso = 1;
					this.casillas[indice].j2 = 1;
				}else if(!this.enJuego){
					alert('el juego ha terminado');
				}else{
					alert('esta casilla ya fue utilizada, intenta con otra casilla');
				}
			},
			controlCaso(){
				var caso = "";
				if(this.casillas[0].j1==1 && this.casillas[1].j1==1 && this.casillas[2].j1==1){
					return 'hor1';
				}
				else if(this.casillas[3].j1==1 && this.casillas[4].j1==1 && this.casillas[5].j1==1){
					return 'hor2';
				}
				else if(this.casillas[6].j1==1 && this.casillas[7].j1==1 && this.casillas[8].j1==1){
					return 'hor3';
				}
				else if(this.casillas[0].j1==1 && this.casillas[3].j1==1 && this.casillas[6].j1==1){
					return 'vert1';
				}
				else if(this.casillas[1].j1==1 && this.casillas[4].j1==1 && this.casillas[7].j1==1){
					return 'vert2';
				}
				else if(this.casillas[2].j1==1 && this.casillas[5].j1==1 && this.casillas[8].j1==1){
					return 'vert3';
				}
				else if(this.casillas[0].j1==1 && this.casillas[4].j1==1 && this.casillas[8].j1==1){
					return 'diag1';
				}
				else if(this.casillas[2].j1==1 && this.casillas[4].j1==1 && this.casillas[6].j1==1){
					return 'diag2';
				}
				else if(this.casillas[0].j2==1 && this.casillas[1].j2==1 && this.casillas[2].j2==1){
					/*logica del ganador2 */
					return 'hor1';
				}
				else if(this.casillas[3].j2==1 && this.casillas[4].j2==1 && this.casillas[5].j2==1){
					return 'hor2';
				}
				else if(this.casillas[6].j2==1 && this.casillas[7].j2==1 && this.casillas[8].j2==1){
					return 'hor3';
				}
				else if(this.casillas[0].j2==1 && this.casillas[3].j2==1 && this.casillas[6].j2==1){
					return 'vert1';
				}
				else if(this.casillas[1].j2==1 && this.casillas[4].j2==1 && this.casillas[7].j2==1){
					return 'vert2';
				}
				else if(this.casillas[2].j2==1 && this.casillas[5].j2==1 && this.casillas[8].j2==1){
					return 'vert3';
				}
				else if(this.casillas[0].j2==1 && this.casillas[4].j2==1 && this.casillas[8].j2==1){
					return 'diag1';
				}
				else if(this.casillas[2].j2==1 && this.casillas[4].j2==1 && this.casillas[6].j2==1){
					return 'diag2';
				}
				else{
					return '';
				}
			}
		},
		updated(){
			/*logica del ganador1*/
			if(this.casillas[0].j1==1 && this.casillas[1].j1==1 && this.casillas[2].j1==1){
				this.resultado1 = 1;
			}
			else if(this.casillas[3].j1==1 && this.casillas[4].j1==1 && this.casillas[5].j1==1){
				this.resultado1 = 1;
			}
			else if(this.casillas[6].j1==1 && this.casillas[7].j1==1 && this.casillas[8].j1==1){
				this.resultado1 = 1;
			}
			else if(this.casillas[0].j1==1 && this.casillas[3].j1==1 && this.casillas[6].j1==1){
				this.resultado1 = 1;
			}
			else if(this.casillas[1].j1==1 && this.casillas[4].j1==1 && this.casillas[7].j1==1){
				this.resultado1 = 1;
			}
			else if(this.casillas[2].j1==1 && this.casillas[5].j1==1 && this.casillas[8].j1==1){
				this.resultado1 = 1;
			}
			else if(this.casillas[0].j1==1 && this.casillas[4].j1==1 && this.casillas[8].j1==1){
				this.resultado1 = 1;
			}
			else if(this.casillas[2].j1==1 && this.casillas[4].j1==1 && this.casillas[6].j1==1){
				this.resultado1 = 1;
			}
			else{
				this.resultado1 = 0;
			}

			/*logica del ganador2 */
			if(this.casillas[0].j2==1 && this.casillas[1].j2==1 && this.casillas[2].j2==1){
				this.resultado2 = 1;
			}
			else if(this.casillas[3].j2==1 && this.casillas[4].j2==1 && this.casillas[5].j2==1){
				this.resultado2 = 1;
			}
			else if(this.casillas[6].j2==1 && this.casillas[7].j2==1 && this.casillas[8].j2==1){
				this.resultado2 = 1;
			}
			else if(this.casillas[0].j2==1 && this.casillas[3].j2==1 && this.casillas[6].j2==1){
				this.resultado2 = 1;
			}
			else if(this.casillas[1].j2==1 && this.casillas[4].j2==1 && this.casillas[7].j2==1){
				this.resultado2 = 1;
			}
			else if(this.casillas[2].j2==1 && this.casillas[5].j2==1 && this.casillas[8].j2==1){
				this.resultado2 = 1;
			}
			else if(this.casillas[0].j2==1 && this.casillas[4].j2==1 && this.casillas[8].j2==1){
				this.resultado2 = 1;
			}
			else if(this.casillas[2].j2==1 && this.casillas[4].j2==1 && this.casillas[6].j2==1){
				this.resultado2 = 1;
			}
			else{
				this.resultado2 = 0;
			}

			if(this.resultado1 == 1){
				bus.anunciarGanador("El jugador 1 Gana!");
				console.log('gana1');
				bus.jugando(false);
			}else if(this.resultado2 == 1){
				bus.anunciarGanador("El jugador 2 Gana!");
				console.log('gana2');
				bus.jugando(false);
			}else if(this.contador == 9){
				bus.anunciarGanador("¡Empate!");
			}else{
				/*seguimos jugando ;)*/
			}
			bus.$on('jugando', (jugando, contador)=>{
				this.enJuego = jugando;
				this.contador = contador;
			})
		}
	}
</script>
<style>
	.rejilla{
		width: 330px;
		overflow: hidden;
		margin:0px auto;
		position: relative;
		height: 330px;
	}
	.fila{
		clear: both;
		overflow: hidden;
	}
	.rejilla .linea{
	}
	.hor1{
		content:"";
		position:absolute;
		top:55px;
		left: 0px;
		border-top:3px solid red;
	  	width:100%;
	  	z-index: 1
	}
	.hor2{
		content:"";
		position:absolute;
		top:165px;
		left: 0px;
		border-top:3px solid red;
	  	width:100%;
	  	z-index: 1
	}
	.hor3{
		content:"";
		position:absolute;
		top:275px;
		left: 0px;
		border-top:3px solid red;
	  	width:100%;
	  	z-index: 1
	}
	.vert1{
		content:"";
		position:absolute;
		bottom:0px;
		left: 55px;
		border-left:3px solid red;
	  	width:2px;
	  	height: 100%;
	  	z-index: 1
	}
	.vert2{
		content:"";
		position:absolute;
		bottom:0px;
		left: 165px;
		border-left:3px solid red;
	  	width:2px;
	  	height: 100%;
	  	z-index: 1
	}
	.vert3{
		content:"";
		position:absolute;
		bottom:0px;
		left: 275px;
		border-left:3px solid red;
	  	width:2px;
	  	height: 100%;
	  	z-index: 1
	}
	.diag1{
		content:"";
		position:absolute;
		top:5px;
		left: 5px;
		border-top:3px solid red;
	  	width:455px;
	  	transform: rotate(45deg);
	  	transform-origin: 0% 0%;
	  	z-index: 1
	}
	.diag2{
		content:"";
		position:absolute;
		bottom:0px;
		left: 5px;
		border-top:3px solid red;
	  	width:455px;
	  	transform: rotate(-45deg);
	  	transform-origin: 0% 0%;
	  	z-index: 1
	}

</style>