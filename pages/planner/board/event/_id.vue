<template>
<div 
  class="board"
>
  <h1>
    <!-- {{board.event.name}} -->
  </h1>
  <div 
    class="d-flex justify-content-between"
    :class="{blur:isTaskOpen}"
  >
    <column
      v-for="(column,columnIndex) in board.columns"
      :key="columnIndex"
      :column="column"
      :columnIndex="columnIndex"
      :board="board"
    />
  <div class="new-column">
    <input 
      type="text" 
      class='flex-grow border-0 text-center'
      placeholder="Agregar paso +"
      v-model="newColumnName"
      @keyup.enter="createColumn"
    />
  </div>
  </div>
    <div 
      class="task-bg"
      v-if="isTaskOpen"
    >
      <nuxt-child
      />
    </div>
</div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import Column from '@/components/ui/planner/Column'

export default {
    name:'BoardEvent', 
    components:{
      Column
    },
    head () {
      return {
          title: `Planificador ${this.board.event.name}`, 
          meta: [
            {'og:title': 'Sitio web para organizar eventos en México'},
            {'og:type': 'page'},
            {'og:description': 'Comienza a generar ganancias en el mercado de eventos en México. No importa sí eres organizador, proveedor o inversionista.'},
            {'og:image': '../assets/landing/images/dashboard.png'},
             {
                  hid: 'description',
                  name: 'description',
                  content: `Mi evento ${this.board.event.name} ${this.board.event.description}`
              }
          ]
      }
  },
    data(){
        return{
            name:'Planificador eventos',
            newColumnName:''
        }
    },
    beforeCreate(){
        this.$store.dispatch('board/getEventBoard',this.$route.params.id)
    },
    mounted(){
        this.$store.commit('change', this.name)
    },
    computed:{
        ...mapState({
            board: state=> state.board.activeBoard,
        }),
        isTaskOpen(){
      return this.$route.name==="planner-board-task-id"
    }
    },
    methods:{
        createColumn(){
        this.$store.dispatch('columns/createNewColumn',{
            name:this.newColumnName
        })
        this.newColumnName=''
        }
    },
}
</script>

<style lang='scss' scoped>
body::-webkit-scrollbar {
  width: 1em;
}
 
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.new-column{
  border:4px dashed grey;
  background-color: transparent!important;
  margin-top: 1em;
  transition: .1s ease-in;
}
.new-column:hover{
  border-radius:8px;
  transition: .2s ease-in-out;
}


.focus-visible{
  border:1px dashed grey!important;
  // box-shadow: 5px 5px 5px black!important;
  transition:.3s ease-in;
  border-radius:8px;
  color:grey;
}
.blur{
  filter: blur(3px);
  transition:cubic-bezier(0.445, 0.05, 0.55, 0.95) .3s;
}
.board,.row{
  transition:ease-in-out .4s;
}
.d-flex{
  transition:ease-in-out .4s;
}
.row{
  margin:0,
}
.board{
  overflow: auto;
  white-space: nowrap;
}
</style>