<template>
  <div class="trello-column">
    <span class="column-header">{{ columnData.columnName }}</span>
    <div class="column-item-container">
      <!-- Items goes here -->
      <trello-board-column-item
        v-for="(item, index) in columnData.columnItems"
        :key="index"
        :item-data="item"
      />
      <button class="item-add-btn" @click="openAddItemPrompt">
        <span>+</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import TrelloBoardColumnItem from '@/components/TrelloBoardColumnItem'

export default {
  name: 'TrelloBoardColumn',
  components: {
    TrelloBoardColumnItem
  },
  props: {
    columnData: {
      type: Object,
      required: true
    },
    columnIndex: {
      type: Number,
      required: true
    },
    isFirst: {
      type: Boolean,
      required: false,
      default: false
    },
    isLast: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    openAddItemPrompt() {
      const data = window.prompt('Type your task')
      if (data) {
        this.addItemToColumn({
          item: { data },
          columnIndex: this.columnIndex
        })
      }
    },
    ...mapActions({
      addItemToColumn: 'trello/addItemToColumn'
    })
  }
}
</script>

<style scoped>
.trello-column {
  width: 160px;
  height: auto;
  background-color: #cdcdcd;
  margin-right: 16px;
  padding: 0;
  padding-bottom: 12px;
}

.trello-column:last-child {
  margin-right: 0;
}

.column-header {
  margin: 12px 8px;
  display: block;
  width: '100%';
  text-align: center;
}

.column-item-container {
  display: flex;
  flex-flow: column nowrap;
  align-items: baseline;
  width: '100%';
  padding: 0 8px;
  margin: 12px 0 0 0;
}

.item-add-btn {
  width: 100%;
}
</style>
