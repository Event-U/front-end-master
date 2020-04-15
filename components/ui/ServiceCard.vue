<template>
<div class="card">
    <img 
        :src="image" 
        class="card-img-top" 
        :alt="`service-${name}`"
    >
    <div class="card-body">
        <h5 class="card-title">
            {{name}}
        </h5>
        <Raitings
            v-bind="number"
        />
        <p class="card-text">
            {{description}}
        </p>

        <p class="card-text text-left">
            <small class="text-muted">
                ${{unitPrice}}
            </small>
        </p>
        <button
            class="btn btn-eventu"
            @click="goToBoard"
        >
            Ir al tablero
        </button>
    </div>
    <div class="card-footer text-left">
        <small class="category">
            {{category.name}}
        </small>
    </div>
</div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
    name:'ServiceCard', 
    props:{
         _id:String,
        name:String,
        description:String,
        measurementUnit:String,
        unitPrice:Number,
        image:String,
        category:Object,
        number:Number
    },
    methods:{
        goToBoard(){
        this.$router.push({
          name:"planner-board-service-id", 
          params:{id:this._id},
        })
      }
    },
}
</script>

<style lang="scss" scoped>
button{
    background-color: $complementary;
    color:white;
    @extend .h3-font;
    padding:2% 5%;
}
h5{
    @extend .h2-font;
    font-weight: 400;
}
p{
    @extend .body-font;
}
small{
    @extend .h3-font;
}
.category{
    background-color:$alpha;
    border-radius:8px 5px 0px 5px;
    padding:1% 5%;
    color:#333;
}
</style>