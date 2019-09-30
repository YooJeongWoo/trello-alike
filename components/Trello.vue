<template>
  <div class="trello-wrapper">
    <div class="trello-container">
      <!-- Tool Bar -->
      <trello-tool-bar />
      <!-- Columns Area -->
      <trello-board :board-data="boardData" />
    </div>
  </div>
</template>

<script>
import TrelloToolBar from '@/components/TrelloToolBar'
import TrelloBoard from '@/components/TrelloBoard'

export default {
  name: 'Trello',
  components: {
    TrelloToolBar,
    TrelloBoard
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
.trello-wrapper {
  width: '100%';
}

.trello-container {
  width: '100%';
}
</style>
