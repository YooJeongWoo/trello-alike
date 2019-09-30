<template>
  <div class="container">
    <h1>Trello alike</h1>
    <trello />
  </div>
</template>

<script>
import Trello from '@/components/Trello.vue'

export default {
  components: {
    Trello
  }
}
</script>

<style>
.container {
  padding: 32px 16px;
}
</style>
