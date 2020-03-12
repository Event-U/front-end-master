<template>
    <form-wizard 
        @on-complete="onComplete" 
        shape="square"
        color="#FFFF00"
        title=''
        subtitle=''
        transition="fade-transition"
    >
        <tab-content 
            title="Información básica"
            icon="ti-stack-overflow"
        >
            Información básica
        </tab-content>
        <tab-content 
            title="Additional Info"
            icon="ti-settings"
        >
            Información adicional
        </tab-content>
        <tab-content 
            title="Last step"
            icon="ti-check"
        >
          Precio y fotos
        </tab-content>
   </form-wizard>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
    name:'NewServiceForm',
    components:{
        FormWizard,
        TabContent
    },
    methods: {
      onComplete: function(){
          alert('Yay. Done!');
       }
      }
}
</script>

<style>

</style>