<template>
  <div class="todos">
      <h3>Todos</h3>
      {{todos}}
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['todos'])
  },
  methods: {
   ...mapActions(['handleGetTodos'])
  },
  mounted() {
    this.handleGetTodos()
  }
}
</script>

<style>

</style>