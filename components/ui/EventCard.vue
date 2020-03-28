<template>
<div 
    class="eventcard mb-3"
     @mouseover="hoverCard = true"
      @mouseleave="hoverCard = false"
>
  <div class="column">
    <div 
        class="post-module" 
       
    >
      <div class="thumbnail">
        <div class="date">
          <div class="day">{{date|dayNumber}}</div>
          <div class="month">{{date|monthNumber}}</div>
        </div>
            <img 
            class="img-fluid"
                :src="image"
            />
      </div>
        <div 
         class="post-content"
        >
        <div 
            class="category animated fadeInLeft"
        >
            Nuevo
        </div>
        <div 
          class="event-categories-wrapper"
          v-if="this.$router.path!=='/organizador/NewEvent'"
        >
          <!-- <span
              v-for="need in needs"
              :key="need._id"
              class='event-categories mr-2'
          >
              {{need.service.category.name}}
          </span> -->
        </div>
        <h1 class="title">{{name}}</h1>
        <p
            class="description animated fadeInUp faster"
            v-if="hoverCard"
        >
            {{description}}
        </p>
        <div 
          class="cta-event"
        >
          <button 
            class="btn-eventu"
            @click="goToBoard"
          >
            Ir al tablero
          </button>
          <nuxt-link
            to="/organizador/EventNeeds"
          >
            <button 
              class="btn btn-eventu"
              @click="setActiveEvent"
            >
              Ver necesidades
          </button>
          </nuxt-link>
        </div>
        <div class="post-meta">
            <span class="timestamp">
                <i class="fas fa-compass"/>
                Tonalá 10
            </span>
        </div>
      </div>
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
  data() {
      return {
        hoverCard:false,
      }
  },
  filters: {
    dayNumber:function(d) {
            return moment(d).format('D')
        },
    monthNumber:function(d) {
            return moment(d).locale('es').format('MMM')
        }
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
      },
      goToBoard(){
        this.$router.push({
          name:"planner-board-event-id", 
          params:{id:this._id},
        })
      }
      
    },
}
</script>

<style lang="scss" scoped>
.btn-eventu{
  background-color:$complementary;
  color:white;
    @extend .h3-font;
    padding:2% 5%;
    font-size:.8em;
}
.event-categories{
     font-size:.7em;
    background-color:rgba(223, 221, 221, 0.707);
    color:#333;
    @extend .h3-font;
    padding: .8% 2%;
    border-radius:5px;
}
.post-module {
  position: relative;
  z-index: 1;
  display: block;
  background: #FFFFFF;
  min-width: 270px;
  height: 470px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  transition:  0.7s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}
.post-module:hover {
  box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
  transition:  0.7s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}
.post-module:hover .thumbnail img{
    border-radius: 8px;
  transform: scale(1.1);
  opacity: 0.6;
  transition:  0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}
.post-module .thumbnail {
  background: #000000;
  height: 400px;
  overflow: hidden;
  transition: ll 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}
.date {
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 1;
  background: $alpha;
  @extend .h2-font;
  width: 55px;
  height: 55px;
  padding: 5.5px 0;
  border-radius: 100%;
  color: #333;
  font-weight: 400;
  text-align: center;
  box-sizing: border-box;
    transition: 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}
.post-module .thumbnail .date .day {
  font-size: 18px;
  transition: 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}
.post-module .thumbnail .date .month {
  font-size: 12px;
  text-transform: uppercase;
  transition: 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}
.post-module .thumbnail img {
  display: block;
  transition: 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}
.post-content {
  position: absolute;
  padding-top:11px!important;
  bottom: 0;
  background: #FFFFFF;
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  transition: 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
}
.post-module .post-content .category {
  position: absolute;
  top: -34px;
  left: 0;
  background: $alpha;
  border-radius:5px;
  padding: 10px 15px;
  color: #333333;
  font-size: 14px;
  font-weight: 600;
  transition:  0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
  text-transform: uppercase;
}
.post-module .post-content .title {
    @extend .h2-font;
    margin-top: .2em;
    padding: 0 0 10px;
    color: #333333;
    font-size: 2em;
    font-weight: 400;
    transition:  0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}
.post-module .post-content .sub_title {
  margin: 0;
  padding: 0 0 20px;
  color: #e74c3c;
  font-size: 20px;
  transition:  0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
  font-weight: 400;
}
.description {
transition:cubic-bezier(0.6, -0.28, 0.735, 0.045) .3s;
  color: #666666;
  font-size: 14px;
  line-height: 1.8em;
  transition:  0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}
.post-module .post-content .post-meta {
  margin: 30px 0 0;
  color: #999999;
  transition:  0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}
.post-module .post-content .post-meta .timestamp {
  margin: 0 16px 0 0;
  transition:  0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}
.post-module .post-content .post-meta a {
  color: #999999;
  text-decoration: none;
  transition:  0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}
.eventcard {
  margin: 0 auto;
  transition:  0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}
.eventcard:before,
.eventcard:after {
  content: "";
  display: block;
  clear: both;
  transition:  0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}

.eventcard .column .demo-title {
  margin: 0 0 15px;
  color: #666666;
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;
  transition:  0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}
.eventcard .info {
  width: 300px;
  margin: 50px auto;
  text-align: center;
  transition:  0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}
h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  transition: 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}
</style>
