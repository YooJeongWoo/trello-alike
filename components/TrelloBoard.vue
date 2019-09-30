<template>
  <div>
    <trello-board-column column-name="A" :items="false" />
  </div>
</template>

<script>
import TrelloBoardColumn from '@/components/TrelloBoardColumn'

export default {
  name: 'TrelloBoard',
  components: {
    TrelloBoardColumn
  }
}
</script>
