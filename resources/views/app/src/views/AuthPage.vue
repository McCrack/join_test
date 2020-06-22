<template>
  <div class="container">
    <div>Login</div>
    <form autocomplete="off" @submit.prevent="login">

        <label>
            <span>E-Mail</span>
            <input type="email" placeholder="..." v-model="user.email" required>
        </label>

        <label>
            <span>Password</span>
            <input type="password" v-model="user.password" required>
        </label>

        <button type="submit">Sign in</button>
    </form>
  </div>
</template>
<script>
export default {
    data() {
      return {
          user: {
              email: "",
              password: "",
          },
      }
    },
    methods: {
        login() {
            this.$store.dispatch('login', this.user)
        }
    }
}
</script>

<style scoped>
    form {
        max-width: 300px;
    }
    label {
        display: block;
    }
    input {
        width: 100%;
        box-sizing: border-box;
    }
</style>
