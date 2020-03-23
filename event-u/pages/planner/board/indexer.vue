<template>
<div 
  class="board"
>
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
      <!-- @click="close" -->
      <nuxt-child
        v-if="isTaskOpen"
      />
    </div>
</div>
</template>

<script>
import {mapMutations,mapState} from 'vuex'
import Column from '@/components/ui/planner/Column'

export default {
    name:'organizador',
    components:{
      Column
    },
    data(){
        return{
            name:'Planificador',
            newColumnName:''
        }
    },created() {
        this.$store.commit('change', this.name)
  },computed:{
    ...mapState('planner',['board']),
    isTaskOpen(){
      return this.$route.name==="planner-board-task-id"
    }
  }, methods:{
    createColumn(){
      this.$store.commit('planner/CREATE_COLUMN',{
        name:this.newColumnName
      })
      this.newColumnName=''
    }
  },
}
</script>

<style lang="scss" scoped>
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