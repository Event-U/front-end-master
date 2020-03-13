<template>
<div class="card">
    <img 
        :src="imagen" 
        class="card-img-top" 
        :alt="`service${name}`"
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
    </div>
    <div class="card-footer text-left">
        <small class="category">
            {{category}}
        </small>
    </div>
</div>
</template>

<script>
import Raitings from '@/components/ui/utilities/Raitings.vue'

export default {
    name:'ServiceCard', 
    components:{
        Raitings
    },
    props:{
         _id:String,
        name:String,
        description:String,
        measurementUnit:String,
        unitPrice:Number,
        imagen:String,
        category:String,
        number:Number
    }
}
</script>

<style lang="scss" scoped>
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