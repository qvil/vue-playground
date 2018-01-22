<template>
  <h2>User : {{$route.params.id}}</h2>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  validate ({ params }) {
    console.log(params)
    return true
  },
  components: {
    AppLogo
  }
}
</script>

