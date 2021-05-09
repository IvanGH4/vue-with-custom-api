<template>
  <div class="login">
    <h2>Log In</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username</label>
        <input type="text" name="username" v-model="username" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" name="password" v-model="password" />
      </div>
      <div>
        <button type="submit">Log in</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const res = await fetch(
        "https://test-api-sepia-one.vercel.app/api/login",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        }
      );
      const data = await res.json();
      this.setCurrentUser(data.user);
      this.$router.push("/");
    },
    ...mapActions({
      setCurrentUser: "setUser",
    }),
  },
};
</script>