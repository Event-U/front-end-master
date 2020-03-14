<template>
    <div 
        class="card text-white animated fadeIn"
        @click="setActiveEvent"
    >
        <img
            class="card-img" 
            :src='image'
            alt="..."
        >    
        <div class="card-img-overlay event-card-content" >
            <div class="transition animated fadeInDown delay-1s">
                <h5 class="card-title list-services border-0">{{ name }}</h5>
                <p class="card-text">{{ description }}</p>
                <h3 class="service-date">{{ date }}</h3>
            </div>
        </div>
</div>
</template>

<script>
import api from '@/lib/api'

const stringDefault = {
  type: String,
  required: true,
  default:''
}
export default {
  name: 'EventCard',
  props: {
    name:stringDefault,
    description:stringDefault,
    date:stringDefault,
    addreses:stringDefault,
    image:stringDefault,
    _id:{
        type:String,
        required:false
    },
    needs:Array
  },
    methods:{
      setActiveEvent(){
          this.$store.commit('event/change', {
              needs:this.needs,
              name:this.name,
              description:this.description,
              date:this.date,
              addreses:this.addresses,
              image:this.image,
              _id:this._id
          })
      }
    }
  
}
</script>

<style lang="scss" scoped>
.event-card-content{
    display: flex;
    flex-direction: column;
    background: linear-gradient(0deg, #000000bf, transparent);
    justify-content: flex-end;
}
h5{
    @extend .h2-font;
    color:white;
    font-size: 3.3em;
}

p{
    color:#B8B8B8;
    @extend .h4-font;
    font-size:1em;
}

.list-services-content .card {
    border-radius: 34px 20px 0px;
    border: none;
    margin-bottom: 20px;
    transition: 1s ease-out;
    height: auto;
}

.service-date {
    font-size: 1em;
    @extend .h4-font;
    color:white;
}
.list-services-content img{
box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5);
border-radius: 34px 20px 0px;
height:300px;
overflow: hidden;
object-fit: cover;
}
</style>
