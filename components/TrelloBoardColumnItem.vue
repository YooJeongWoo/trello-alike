<template>
  <div class="item-card">
    <div class="item-container">
      <button v-if="hasPrev" @click="moveToPrevColumn">
        <span>&lt;</span>
      </button>
      <span contenteditable="true" @blur="onItemDataInputChange">
        {{ itemData.data }}
      </span>
      <button v-if="hasNext" @click="moveToNextColumn">
        <span>&gt;</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TrelloBoardColumnItem',
  props: {
    itemData: {
      type: Object,
      required: true
    },
    columnIndex: {
      type: Number,
      required: true
    },
    itemIndex: {
      type: Number,
      required: true
    },
    hasNext: {
      type: Boolean,
      required: true
    },
    hasPrev: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      isEditing: false
    }
  },
  methods: {
    moveToNextColumn() {
      this.moveItemToColumn({
        from: {
          columnIndex: this.columnIndex,
          itemIndex: this.itemIndex
        },
        to: {
          columnIndex: this.columnIndex + 1
        }
      })
    },
    moveToPrevColumn() {
      this.moveItemToColumn({
        from: {
          columnIndex: this.columnIndex,
          itemIndex: this.itemIndex
        },
        to: {
          columnIndex: this.columnIndex - 1
        }
      })
    },
    onItemDataInputChange(e) {
      const data = e.target.textContent
      this.setItemData({
        data,
        columnIndex: this.columnIndex,
        itemIndex: this.itemIndex
      })
    },
    ...mapActions({
      moveItemToColumn: 'trello/moveItemToColumn',
      setItemData: 'trello/setItemData'
    })
  }
}
</script>

<style scoped>
.item-card {
  width: 100%;
  background-color: white;
  padding: 12px 8px;
  margin-bottom: 12px;
  display: inline-block;
}

.item-container {
  width: '100%';
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

.item-card span {
  width: 100%;
}
</style>
