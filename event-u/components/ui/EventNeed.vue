<template>
<div class="card">
    <div class="need-icon">
        <i class="fas fa-angle-right"></i>
    </div>
    <div class="card-body">
        <h5 class="card-title">{{service.name}}</h5>
        <p class="card-text">{{description}}</p>
        <a  
            class="inactive"
            v-if="quotation.length===0"
            > 
                No tienes cotizaciones
        </a>
        <nuxt-link 
            to="/" 
            class="cta-needs"
            v-if="quotation.length!==0"
            > 
                Ver Necesidades
        </nuxt-link>
    </div>
</div>
</template>

<script>
const stringDefault = {
  type: String,
  required: true,
  default:''
}
export default {
    name:'EventNeed',
    props: {
        _id:stringDefault,
        description:stringDefault,
        service:Object,
        quotation:Array
  },
}
</script>

<style lang="scss" scoped>

.inactive{
    color:$danger;
}
.inactive:hover::after{
    content:':(';
    transition:1s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    color:$danger;
}
.cta-needs{
    color:$complementary;
}
.card{
    flex-direction:inherit;
    border:none;
}
.need-icon{
    padding-right: 25px;
}
.card-body{
    padding:0;
}
i
{background-color: #ffff00;
    padding: 40% 80%;
    border-radius: 50%;
    }
</style>