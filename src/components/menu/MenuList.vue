<template>
  <div class="grid grid-cols-3 gap-10 px-8 max-w-7xl mx-auto">
    <MenuItem v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script setup>
import MenuItem from "./MenuItem.vue";

defineProps({
  items: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every((item) => item.name && item.description && item.price);
    },
  },
});
</script>

<style scoped></style>
