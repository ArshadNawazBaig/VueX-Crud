<template>
  <div class="profile">
      <h1>User Profile</h1>
      {{currentUser}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters(['currentUser'])
    }
}
</script>

<style>

</style>