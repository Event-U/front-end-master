<template>
<div 
  class="board"
>
  <div 
    class="d-flex justify-content-between"
    :class="{blur:isTaskOpen}"
  >
    <div 
      class="col-3 m-3 column animated fadeInUp"
      v-for="(column,columnIndex) in board.columns"
      :key="columnIndex"
      draggable
      @dragstart.self="pickColumn($event,columnIndex)"
      @drop="moveTaskOrColumn($event, column.tasks, columnIndex)"
      @dragover.prevent
      @dragenter.prevent
    >
      <div class="column-title text-center animated fadeInDown delay-1s">
        <h2
          class="mt-3"
        >
          {{column.name}}:
        </h2>
      </div>
      <div class="list-reset">
        <div 
          class="task mt-3 mb-3"
          v-for="(task,taskIndex) in column.tasks"
          :key="taskIndex"
          draggable
          @dragstart="pickTask($event,taskIndex, columnIndex)"
          @dragover.prevent
          @dragenter.prevent
          @drop.stop="moveTask($event,column.tasks, taskIndex)"
          @click="goToTask(task)"
        >
          <h3>
            {{task.name}}
          </h3>
          <p>
            {{task.description}}
          </p>
        </div>
      </div>
      <input 
        type="text"
        class=" bg-transparent fluid p-2 d-flex new-task border-0"
        placeholder="Agregar tarea +"
        @keyup.enter="createTask(column.tasks , $event)"
      />
    </div>
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

export default {
    name:'organizador',
    data(){
        return{
            name:'Planificador de eventos',
            newColumnName:''
        }
    },created() {
        this.$store.commit('change', this.name)
  },computed:{
    ...mapState('planner',['board']),
    isTaskOpen(){
      return this.$route.name==="planner-organizador-id"
    }
  }, methods:{
    goToTask(task){
      this.$router.push({name:"planner-organizador-id", params:{id:task.id}})
    },
    createTask(tasks,e){
      this.$store.commit('planner/CREATE_TASK', {
        tasks,
        name:e.target.value,
      })
      e.target.value=''
    },
    close(){
      this.$router.push({name:'planner-organizador'})
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
    },moveTask(e, toTasks, toTaskIndex){
      const fromColumnIndex=e.dataTransfer.getData('from-column-index')
      const fromTasks = this.board.columns[fromColumnIndex].tasks
      const fromTaskIndex= e.dataTransfer.getData('from-task-index')

      this.$store.commit('planner/MOVE_TASK',{
        fromTasks,
        fromTaskIndex,
        toTasks,
        toTaskIndex
      })
    },moveColumn(e, toColumnIndex){
      const fromColumnIndex=e.dataTransfer.getData('from-column-index')

      this.$store.commit('planner/MOVE_COLUMN',{
        fromColumnIndex,
        toColumnIndex
      })
    },createColumn(){
      this.$store.commit('planner/CREATE_COLUMN',{
        name:this.newColumnName
      })
      this.newColumnName=''
    }
  },
}
</script>

<style lang="scss" scoped>
.new-column{
  border:4px dashed grey;
  background-color: transparent!important;
  margin-top: 1em;
  transition: .2s ease-in;
}
.new-column:hover{
  border-radius:8px;
  transition: .2s ease-in;
}

h2{
  @extend .h2-font;
  font-weight: 500;
  font-size: 1.2em;
}
h3{
  @extend .h3-font;
  font-size:1em;
}
.column{
      background-color: #efefef!important;
    border-radius: 8px 8px 0px 0px;
    margin-top: 1em;
    box-shadow: 5px 5px 9px 0px #00000029;
    transition:.3s cubic-bezier(0.47, 0, 0.745, 0.715);
}
.column:hover, .task:hover{
  // box-shadow: 5px 5px 8px 0px #ffff0036;
  box-shadow: 5px 5px 9px 0px #00000056;
  transition:.4s cubic-bezier(0.47, 0, 0.745, 0.715);
  border:.5px solid #ffff00;
}
.task:hover{
  box-shadow: 5px 5px 8px 0px #ffff0036;
  transition:.2s ease-in;
  font-size:1.1em;
  // border:1px solid #ffff00;
}
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
  background-color: white;
  border-radius:8px;
  border-radius: 8px;
  padding: 3% 0%;
  text-align: center;
  box-shadow: 5px 5px 8px #0000000f;
  transition: .3s ease-in-out;
}
.row{
  margin:0,
}
.board{
  overflow: auto;
  white-space: nowrap;
}
</style>