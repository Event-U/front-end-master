<template>
<div 
    class="task-view container animated fadeIn"
    @click.self="close"
>
        <div class="col-6 text-center single-task animated fadeInDown">
            <h1>
            {{task.name}}
            </h1>
            <textarea
                :value="task.description"
            />
    </div>
</div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
    name:'Task', 
    computed:{
        ...mapGetters('planner',['getTask']),
        task(){
            return this.getTask(this.$route.params.id)
        }
    },methods:{
        close(){
            this.$router.push({name:'board'})
         }
    }
}
</script>

<style lang='scss' scoped>
.fadeInDown{
    animation-delay: .5s;
}
h1{
    @extend .h2-font;
    font-size:2em;
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
    text-align: center;
}
</style>