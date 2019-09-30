<template>
  <div class="tool-bar-container">
    <button @click="addColumnPrompt('first')">Add new column to first</button>
    <button @click="addColumnPrompt('last')">Add new column to last</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TrelloToolBar',
  methods: {
    addColumnPrompt(position) {
      const columnName = window.prompt('Type in column name')
      if (columnName) {
        this.addColumn({ columnName, position })
      }
    },
    ...mapActions({
      addColumn: 'trello/addColumn'
    })
  }
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
