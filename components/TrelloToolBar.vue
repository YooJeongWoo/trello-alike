<template>
  <div class="tool-bar-container">
    <button>Add new column to first</button>
    <button>Add new column to last</button>
  </div>
</template>

<script>
export default {
  name: 'TrelloToolBar'
}
</script>

<style scoped>
.tool-bar-container {
  margin: 12px 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: baseline;
}
</style>
