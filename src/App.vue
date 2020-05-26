<template>
  <div id="tricky">
    <titulo v-bind:titulo="titulo"></titulo>
    <div id="mesa">
      <mesa v-bind:casillas="casillas" v-bind:jugando="jugando" v-bind:anunciarGanador = "anunciarGanador"></mesa>
      <reset v-bind:casillas="casillas" v-bind:jugando="jugando"></reset>
    </div>
  </div>
</template>
<script>
import Titulo from './Titulo.vue'
import Mesa from './Mesa.vue'
import Reset from './Reset.vue'
export default {
  components:{
    titulo: Titulo,
    mesa: Mesa,
    reset:Reset
  },
  data() {
    return {
      casillas:[],
      resultado1:0,
      resultado2:0,
      titulo:'tricky'
    }
  },
  methods:{
    anunciarGanador(ganador){
      this.ganador = ganador;
    },
    jugando(jugando, contador){
      this.enJuego = jugando;
      this.contador = contador;
    }
  },
  created(){
    for(var i=1; i<=9; i++){
      this.casillas.push(
          {
            id:'b'+i,
            valor:'',
            botonEnUso:0,
            j1:0,
            j2:0
          }
        );
    }
    console.log(this.enJuego);
  }
}
</script>


<style>

#mesa{
  width: 338px;
  height: 368px;
  position: absolute;
  left:50%;
  margin-left: -155px;
  top:50%;
  margin-top:-155px;
  background: #ddd;
  padding: 5px;
  border-radius: 5px;
}
.boton{
  width: 100px;
  height: 100px;
  margin:5px;
  background:#999;
  color:#fff;
  display: block;
  box-sizing: border-box;
  position: relative;
  float: left;
  border-radius: 5px;
}

.boton p{
  display: block;
  width: 100px;
  height: 100px;
  top:0px;
  left:0px;
  line-height: 100px;
  text-align: center;
  margin: 0px;
  padding: 0px;
  font-family: century gothic, arial, helvetica, sans-serif;
  font-size: 35px;
  font-weight: bold;
}



#fila1, #fila2, #fila3{
  clear: both;
  overflow: hidden;
}
</style>
