<template>
<div class='container-fluid'>
    <div class="row justify-content-around">
        <div class="col-md-9">
            <full-calendar/>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'Calendario',
     data(){
        return{
            name:'Mi calendario'
        }
    },
    mounted(){
        this.$store.commit('change',this.name)
    },
}
</script>

<style lang='scss'>
.container-fluid{
    margin:0!important;
}
.calendar{
    max-width:50%;
}
</style>