<template>
  <div class="login">
      <h1>Login Form</h1>
           <form @submit.prevent="handleFormData">
          <label for="email">Email</label>
          <input type="text" v-model="email" placeholder="Enter Email..." id="email">
          <label for="password">Password</label>
          <input type="password" v-model="password" placeholder="Enter Password..." id="password">
          <br />
          <button type="submit">Login</button>
      </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            email: '',
            password: ''
        }
    },
    methods: {
        handleFormData() {
          console.log('Form')
        }
    }
}
</script>

<style scoped>
    label {
    display: block;
    margin: 20px 0 20px 0;
}
input {
    width: 400px;
    height: 50px;
    border-radius: 8px;
    border: #a8a8a8 solid 1px;
    padding: 0 20px;
}
button {
    margin-top: 30px;
    padding: 17px 50px;
    border-radius: 8px;
    border: 1px solid #bebebe;
    background: black;
    color: #fff;
}
</style>