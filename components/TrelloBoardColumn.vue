<template>
  <div>
    <span>{{ columnName }}</span>
  </div>
</template>

<script>
export default {
  name: 'TrelloBoardColumn',
  props: {
    columnName: {
      type: String,
      required: true
    },
    items: {
      type: Array,
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
  }
}
</script>
