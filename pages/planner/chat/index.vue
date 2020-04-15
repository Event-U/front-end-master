<template>
<div id="chat" class="container">
  <h1
    class="text-center"
  >Chat con proveedor</h1>
  <!-- Messages -->
    <div 
        v-for="(message, messageIndex) in messages" 
        class="card"
        :key="messageIndex"
    >
    <div class="card-body">
      <!-- nickname -->
      <h6 class="card-subtitle mb-2 text-muted">{{ message.user }}</h6>
      <!-- content -->
      <p  class="card-text">{{ message.text }}</p>
    </div>
  </div>

  <hr>
  <!-- New Message -->
  <form @submit.prevent="storeMessage">
    <div class="form-group">
      <label>Mensaje:</label>
      <textarea v-model="messageText" class="form-control"></textarea>
    </div>
    <div class="form-group">
      <label>User:</label>
      <input v-model="user" class="form-control"/>
    </div>
    <button class="btn btn-primary">Send</button>
  </form>
</div>
</template>

<script>
import firebase from 'firebase'
import toast from '@nuxtjs/toast'

export default {
  name: 'ChatRoom',
  head () {
      return {
          title: `Chat` , 
          meta: [
            {'og:title': 'Sitio web para organizar eventos en México'},
            {'og:type': 'page'},
            {'og:description': 'Comienza a generar ganancias en el mercado de eventos en México. No importa sí eres organizador, proveedor o inversionista.'},
            {'og:image': '../assets/landing/images/dashboard.png'},
             {
                  hid: 'description',
                  name: 'description',
                  content: 'La plataforma #1 para organizar eventos en México'
              }
          ]
      }
  },
  data() {
      return {
          messages: [],
          messageText: '',
          user: this.$store.state.activeUser
      }
  },
  methods: {
      storeMessage() {
        const database = firebase.database()
        database.ref('Message').push({text: this.messageText, user: this.user})
         database.ref('Message').on('child_added', snapshot => {
        this.$toast.shos(`Nuevo mensaje de ${snapshot.val().user}`,{
           position: "top-right", 
	          duration : 2000
        })
      })
        this.messageText = ''
      }
  },
    created () {
        firebase.initializeApp({
            apiKey: "AIzaSyALkVlqwJlz508AOFcDylaJjAo-cMBSotQ",
            authDomain: "event-u-9bd21.firebaseapp.com",
            databaseURL: "https://event-u-9bd21.firebaseio.com",
            projectId: "event-u-9bd21",
            storageBucket: "event-u-9bd21.appspot.com",
            messagingSenderId: "833574277556",
            appId: "1:833574277556:web:730529e1dcc34f0da3a2e1",
            measurementId: "G-G348YP74CQ"
        });
    const database = firebase.database()
      database.ref('Message').on('child_added', snapshot => {
        this.messages.push(snapshot.val())
      })
    },
}
</script>

<style lang='scss' scoped>
#chat{
    display: flex;
    flex-direction: column;
}
.card{
    border:none;
    border-radius:8px;
    margin-top:1em;
    box-shadow: 5px 3px 8px 0px #0000002e;
    width:50%; 
    align-self:center;
    @extend .h4-font;
    font-size:1em;
}
h1{
    @extend .h1-font;
}
</style>