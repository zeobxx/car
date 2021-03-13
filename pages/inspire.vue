<template>
  <v-row>
    <v-col class="text-center">
      <img :src="photoUrl" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;{{ name }} {{ email }}</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>
<script>
import firebase from 'firebase/app'

export default {
  layout: 'admin',
  data(){
    return{
      name:'',
      email:'',
      photoUrl:''
    }
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user !=null) {
        this.name = user.displayName
        this.email = user.email
        this.photoUrl = user.photoUrl
        // User is signed in.
        //ให้แสดงชื่อ รูป อีเมลล์
      } else {
        // No user is signed in.
        //เด้งไปหน้า login
        this.$router.replace('/login')
      }
    })
  },
}
</script>
