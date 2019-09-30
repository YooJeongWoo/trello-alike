<template>
  <div class="item-card">
    <div class="item-container">
      <button v-if="hasPrev">
        <span>&lt;</span>
      </button>
      <span>{{ itemData.data }}</span>
      <button v-if="hasNext">
        <span>&gt;</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrelloBoardColumnItem',
  props: {
    itemData: {
      type: Object,
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
