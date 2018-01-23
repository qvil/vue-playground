<template>
  <div>
    <h2>User Route</h2>
    <p>{{ name }}</p>
    <input v-model="name" />
    <router-link to="/users">
      <button v-on:click="linkToUserpage">{{ button.text }}</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: "qvil",
      button: {
        text: "button"
      }
    };
  },
  methods: {
    linkToUserpage: function() {
      console.log(11);
    }
  }
};
</script>

<style scoped>

</style>