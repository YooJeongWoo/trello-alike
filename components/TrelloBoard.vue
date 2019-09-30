<template>
  <div class="trello-column-container">
    <trello-board-column
      v-for="(column, index) in boardData"
      :key="`c-${index}`"
      :column-data="column"
      :column-index="Number(index)"
      :has-prev="index !== 0"
      :has-next="index !== boardData.length - 1"
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
