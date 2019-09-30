<template>
  <div class="container">
    <h1>Trello alike</h1>
    <trello :board-data="boardData" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Trello from '@/components/Trello.vue'

export default {
  components: {
    Trello
  },
  computed: {
    ...mapGetters({
      boardData: 'trello/boardData'
    })
  },
  fetch({ store }) {
    store.dispatch('trello/fetchBoardData')
  },
  methods: {
    ...mapActions({
      fetchBoardDataFromLocalStorage: 'trello/fetchBoardDataFromLocalStorage'
    })
  }
}
</script>

<style>
.container {
  padding: 32px 16px;
}
</style>
