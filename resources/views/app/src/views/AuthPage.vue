<template>
  <div class="substrate">
    <img src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
    <form class="card brown lighten-5" autocomplete="off" @submit.prevent="login">
        <div class="card-content">
            <span class="card-title"><div>Login</div></span>
            <div class="row">
                <div class="input-field col s12">
                    <input id="email" type="email" v-model="user.email" class="validate">
                    <label for="email">Email</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="password" type="password" v-model="user.password" class="validate">
                    <label for="password">Password</label>
                </div>
            </div>
        </div>
        <div class="card-action">
            <button class="waves-effect waves-light btn" type="submit">Login</button>
        </div>
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
    .substrate {
        height: 100vh;
        position: relative;
        background-color: black;
    }
    img {
        width: 100%;
        height: 100%;
        position: absolute;
        filter: brightness(30%) blur(10px);
        object-fit: cover;
    }
    form {
        top: 50%;
        right: 15%;
        max-width: 400px;
        position: absolute;
        transform: translateY(-50%);
    }
    label {
        display: block;
    }
    input {
        width: 100%;
        box-sizing: border-box;
    }
</style>
