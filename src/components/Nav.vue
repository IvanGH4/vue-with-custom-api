<template>
  <nav class="navbar">
    <router-link to="/">API Test</router-link>
    <ul>
      <li>
        <router-link to="/create">Create</router-link>
      </li>
      <li v-if="!currentUser">
        <router-link to="/login">Log in</router-link>
      </li>
      <li v-if="!currentUser">
        <router-link to="/register">Register</router-link>
      </li>
      <li v-else>
        <router-link to="/profile">Profile</router-link>
      </li>
      <li v-if="currentUser">
        <button @click="logout">Log out</button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  methods: {
    async logout() {
      const res = await fetch(
        "https://test-api-sepia-one.vercel.app/api/logout",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Content-Type": "application/json",
          },
          method: "DELETE",
        }
      );
      const data = await res.json();
      this.destroyUser();
      this.$toasted.success(data.message, {
        duration: 2000,
      });
      this.$router.push("/login");
    },
    ...mapActions({
      destroyUser: "destroyUser",
    }),
  },
  computed: {
    ...mapState({
      currentUser: (state) => state.user,
    }),
  },
};
</script>

<style>
</style>