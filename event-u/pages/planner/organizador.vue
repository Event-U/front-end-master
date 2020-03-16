<template>
<div 
  class="board"
>
  <div 
    class="row d-flex justify-content-around"
    :class="{blur:isTaskOpen}"
  >
    <div 
      class="column col-3"
      v-for="(column,columnIndex) in board.columns"
      :key="columnIndex"
      draggable
      @dragstart.self="pickColumn($event,columnIndex)"
      @drop="moveTaskOrColumn($event, column.tasks, columnIndex)"
      @dragover.prevent
      @dragenter.prevent
    >
    <div class="column-title text-center">
      {{column.name}} :
    </div>
      <div class="list-reset">
        <div 
          class="task mt-3 mb-3"
          v-for="(task,taskIndex) in column.tasks"
          :key="taskIndex"
          draggable
          @dragstart="pickTask($event,taskIndex, columnIndex)"
          @click="goToTask(task)"
          @dragover.prevent
          @dragenter.prevent
          @drop.stop="moveTask($event,column.tasks, taskIndex)"
        >
          {{task.name}}
        </div>
      </div>
        <input 
          type="text"
          class=" bg-transparent fluid p-2 d-flex new-task border-0"
          placeholder="Agregar tarea +"
          @keyup.enter="createTask(column.tasks , $event)"
        />
    </div>


    </div>
    <div 
      class="task-bg"
      v-if="isTaskOpen"
    >
      <!-- @click="close" -->
      <router-view
        @keypress.esc="close"
      />
  </div>
</div>
</template>

<script>
import {mapMutations,mapState} from 'vuex'

export default {
    name:'organizador',
    data(){
        return{
            name:'Planificador de eventos'
        }
    },created() {
        this.$store.commit('change', this.name)
  },computed:{
    ...mapState('planner',['board']),
    isTaskOpen(){
      return this.$route.name==='tarea'
    }
  }, methods:{
    goToTask(task){
      this.$router.push({name:'tarea', params:{id:task.id}})
    },
    createTask(tasks,e){
      this.$store.commit('planner/CREATE_TASK', {
        tasks,
        name:e.target.value,
      })
      e.target.value=''
    },
    close(){
      this.$router.push({name:'board'})
    },
    pickTask(e,$taskIndex,fromColumnIndex){
      /* This functions are from the DragDrop API, 
      just give us the move functionallity*/
      e.dataTransfer.effectAllowed='move'
      e.dataTransfer.dropEffect='move'

    /*This functions are just for setting some data*/

      e.dataTransfer.setData('from-task-index', $taskIndex)
      e.dataTransfer.setData('from-column-index', fromColumnIndex)
      e.dataTransfer.setData('type', 'task')
    },
    pickColumn(e, fromColumnIndex){
      e.dataTransfer.effectAllowed='move'
      e.dataTransfer.dropEffect='move'

      e.dataTransfer.setData('from-column-index', fromColumnIndex)
      e.dataTransfer.setData('type', 'column')
    },
    moveTaskOrColumn(e, toTasks, toColumnIndex){
      const type=e.dataTransfer.getData('type')
      if(type==='task'){
        this.moveTask(e,toTasks)
      }else{
        this.moveColumn(e, toColumnIndex)
      }
    }
    ,moveTask(e, toTasks, toTaskIndex){
      const fromColumnIndex=e.dataTransfer.getData('from-column-index')
      const fromTasks = this.board.columns[fromColumnIndex].tasks
      const fromTaskIndex= e.dataTransfer.getData('from-task-index')

      this.$store.commit('planner/MOVE_TASK',{
        fromTasks,
        fromTaskIndex,
        toTasks,
        toTaskIndex
      })
    }
    ,moveColumn(e, toColumnIndex){
      const fromColumnIndex=e.dataTransfer.getData('from-column-index')

      this.$store.commit('planner/MOVE_COLUMN',{
        fromColumnIndex,
        toColumnIndex
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.new-task{
  background-color:#bbbb;
  color:white!important;
}
.blur{
  filter: blur(3px);
  transition:cubic-bezier(0.445, 0.05, 0.55, 0.95) .3s;
}
.board,.row{
  transition:ease-in-out .4s;
}

.task{
  background-color: greenyellow;
  border-radius:8px;
}
.row{
  margin:0,
}
.column{
  background-color:red;
}
</style>