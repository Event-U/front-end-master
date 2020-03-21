<template>
<div>
    <full-calendar
    />
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

</style>