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
      <!-- @click="close" -->
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
    data(){
        return{
            name:'Planificador',
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
      return this.$route.name==="planner-board-event-task-id"
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

</style>