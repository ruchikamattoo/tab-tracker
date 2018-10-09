<template>
<div>
  <h1> registers
  </h1>
  <input type="email" name ="email" placeholder="enter email" v-model=" email"/>
  <br><br>
  <input type="password" name ="psd" placeholder="enter psd" v-model=" password"/>
  <br>
  <button @click="register"> register</button>
  </div>
  </template>

<script>
import authenticationservice from '@/services/authenticationservice'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await authenticationservice.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }

  /* watch: {
    email (value) {
      console.log('mail', value)
    }

  },
  mounted () {
    setTimeout(() => {
      this.email = ' hello world '
    }, 2000)
  } */

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
