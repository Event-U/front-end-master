<template>
<div 
    class="task mt-3 mb-3 animated slideInUp faster"
    draggable
    @dragstart="pickTask($event,taskIndex, columnIndex)"
    @dragover.prevent
    @dragenter.prevent
    @drop.stop="moveTask($event,column.tasks, taskIndex, columnIndex)"
    @click="goToTask(task)"
>
    <h3>
        {{task.name}}
    </h3>
    <p>
        {{task.description}}
    </p>
</div>
</template>

<script>
import {mapMutations,mapState,mapActions} from 'vuex'
import plannerMixin from '@/mixins/planner'

export default {
    name: 'Task', 
    props:{
        task: {
            type: Object,
            required: true
        },
        taskIndex: {
            required: true
        }
    },
    mixins:[plannerMixin],
    methods:{
    goToTask(task){
      this.$store.commit('board/SET_BOARD_TYPE', this.$route.name)
      this.$store.dispatch('task/setActiveTask',task)
      this.$router.push({
          name:"planner-board-task-id", 
          params:{id:task._id},
        })
    },
    pickTask(e,$taskIndex,fromColumnIndex){
      /* This functions are from the DragDrop API, 
      just give us the move functionallity*/
      e.dataTransfer.effectAllowed='move'
      e.dataTransfer.dropEffect='move'

      e.dataTransfer.setData('from-task-index', $taskIndex)
      e.dataTransfer.setData('from-column-index', fromColumnIndex)
      e.dataTransfer.setData('type', 'task')
    },
  },
}
</script>

<style lang="scss" scoped>
.task:hover{
  box-shadow: 5px 5px 8px 0px #ffff0036;
  transition:.2s ease-in;
  // font-size:1.1em;
  cursor:pointer;
  // border:1px solid #ffff00;
  overflow: auto;
}

.task{
  background-color: white;
  border-radius:8px;
  border-radius: 8px;
  padding: 3% 0%;
  text-align: center;
  box-shadow: 5px 5px 8px #0000000f;
  transition: .3s ease-in-out;
  overflow: auto;
  h3{
    overflow: hidden;
    margin:0em 1em;
    @extend .h3-font;
    font-size:1em;
  }
  p{
    @extend .h5-font;
    font-size:.9em;
  }
}
</style>