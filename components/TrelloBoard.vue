<template>
  <div class="trello-column-container">
    <trello-board-column
      v-for="(column, index) in boardData"
      :key="`c-${index}`"
      :column-data="column"
      :column-index="index"
    />
  </div>
</template>

<script>
import TrelloBoardColumn from '@/components/TrelloBoardColumn'

export default {
  name: 'TrelloBoard',
  components: {
    TrelloBoardColumn
  },
  props: {
    boardData: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.trello-column-container {
  display: flex;
  flex-flow: row wrap;
}
</style>
