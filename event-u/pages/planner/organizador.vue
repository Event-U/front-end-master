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
      v-for="column of board.columns"
      :key="column.id"
    >
    <div class="column-title text-center">
      {{column.name}} :
    </div>
      <div class="list-reset">
        <div 
          class="task mt-3 mb-3"
          v-for="task of column.tasks"
          :key="task.id"
          @click="goToTask(task)"
        >
          {{task.name}}
        </div>
      </div>
    </div>
    </div>
    <div 
      class="task-bg"
      v-if="isTaskOpen"
    >
      <!-- @click="close" -->
      <router-view
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
  },
}
</script>

<style lang="scss" scoped>
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