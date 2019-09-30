<template>
  <div>
    {{ itemData.data }}
  </div>
</template>

<script>
export default {
  name: 'TrelloBoardColumnItem',
  props: {
    itemData: {
      type: Object,
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
