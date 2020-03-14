<template>
    <option 
        :value='_id'
        @change="$emit( 'change', $event )"
        @input="$emit( 'input', $event )"
    >
        {{name}}
        {{businessName}}
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
        },
        businessName:{
            type:String,
            required:false
        }
    }
}
</script>

<style>

</style>