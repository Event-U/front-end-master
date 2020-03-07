<template>
    <div 
        class="card text-white"
        @click.prevent="onClick"
    >
        <img
            class="card-img" 
            src='@/assets/img/barman.jpg'
            alt="..."
        >    
        <div class="card-img-overlay event-card-content" >
            <h5 class="card-title list-services border-0">{{ name }}</h5>
            <p class="card-text">{{ description }}</p>
            <h3 class="service-date">{{ date }}</h3>
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
    display:{
        type: Boolean,
        required:false
    },
    name:stringDefault,
    description:stringDefault,
    date:stringDefault,
    addresses:stringDefault,
    image:stringDefault,
    _id:{
        type:String,
        required:false
    },
    needs:Array
  },
  data(){
      return {
          needsObjects:[],
          
      }
  },
  methods:{
      onClick(){  
          this.needs.forEach ( async need => {
            const newNeed = await api.getNeedById(need)
            this.needsObjects.push(newNeed)
          })
       
    this.$emit('clic', {
            _id:this._id,
            needs:this.needs,
            description:this.description,
            date:this.date,
            name: this.name,
            needsObjects:this.needsObjects,
        })
      }
  }
}
</script>

<style scoped lang="scss">
.event-card-content{
    display: flex;
    flex-direction: column;
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
    font-size: 1.3em;
    @extend .h4-font;
}
.list-services-content img{
box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5);
border-radius: 34px 20px 0px;
height:300px;
overflow: hidden;
object-fit: cover;
}
</style>
