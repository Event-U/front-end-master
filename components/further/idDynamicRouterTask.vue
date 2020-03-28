<template>
<div 
    class="task-view container animated fadeIn"
    @click.self="close"
>
        <div 
            class=
                "col-6 
                d-flex 
                flex-column 
                single-task 
                animated fadeInDown"
        >
            <input 
                type="text"
                class='border-0'
                :value='task.name'
                @change="updateTask($event, 'name')"
            >
            <textarea
                class="border-0"
                :value="task.description"
                @change="updateTask($event, 'description')"
            />
    </div>
</div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
    name:'Task', 
    computed:{
        ...mapState({
            task: state=> state.task.activeTask,
        })
    },methods:{
        close(){
            this.$router.push({
                name:'planner-board-event-id',
                params:{id:this.$store.state.board.activeBoard.event._id}
            })
         },
         updateTask(e,key){
             this.$store.commit('planner/UPDATE_TASK',{
                 task:this.task,
                 key,
                 value:e.target.value
             })
         }
    }
}
</script>

<style lang='scss' scoped>
.fadeInDown{
    animation-delay: .5s;
}
input{
    @extend .h2-font;
    font-size:2em;
    text-align: center;
}
.task-view{
    display: flex;
    justify-content: center;
    position: absolute;
    height: 1000px;
    flex-direction: column;
    top:0px;
    min-width: 100%;
    background-color: #000000b3;
    align-items:center;
    
}
.single-task{
    box-shadow: 5px 5px 5px black;
    position:fixed;
    top:250px;
    border-radius: 8px;
    background-color:white;
}
</style>