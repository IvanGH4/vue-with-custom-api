<template>
  <div class="container">
    <h4>Your info:</h4>
    <div v-if="currentUser">
      <ul>
        <li>
          {{ currentUser.username }}
        </li>
        <li>
          {{ currentUser.email }}
        </li>
        <li>You registered: {{ currentUser.createdAt }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      currentUser: (state) => state.user,
    }),
  },
};
</script>

<style>
</style>