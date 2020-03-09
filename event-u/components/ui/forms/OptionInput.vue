<template>
    <option 
    :value='name'
    @change="$emit( 'change', $event )"
    @input="$emit( 'input', $event )"
    >
        {{name}}
    </option>
</template>

<script>
export default {
    name:'OptionInput',
    props:{
        name:{
            type:String,
            required:true
        },
        _id:{
            type:String, 
            required:true
        }
    }
}
</script>

<style>

</style>