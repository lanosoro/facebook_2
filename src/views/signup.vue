<template>
  <div>
    
    <form @submit.prevent="pressed">
      Register
      <div class="email">
        <input type="email" v-model="user.email" placeholder="email" />
      </div>
      <div class="password">
        <input type="password" v-model="user.password" placeholder="password" />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name:"Signup",
  data() {
    return {
    user:
      {email: "",
      password: "",}
    
    };
  },
  methods: {
    pressed() {
            firebase.auth().createUserWithEmailAndPassword(this.user.email,this.user.password)
      
          console.log({email:this.email, password:this.password});
         
        }
       
    }
  }

</script>

<style lang="scss" scoped>
.error {
  color: red;
  font-size: 18px;
}
input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}
button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}
</style>