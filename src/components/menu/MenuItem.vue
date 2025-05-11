<template>
  <div class="bg-white rounded-lg shadow-md p-6 max-w-[400px] h-[350px] relative">
    <img class="w-[300px] h-[150px] rounded-lg object-cover mb-4" v-if="item.src" :src="item.src" />
    <h3 class="text-2xl font-bold mb-2">{{ item.name }}</h3>
    <p class="text-gray-600 mb-4">{{ item.description }}</p>
    <p class="text-[#bfa46a] font-bold text-xl absolute bottom-6 left-6">NT$ {{ item.price }}</p>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
    validator: (value) => {
      return value.name && value.description && value.price && value.src;
    },
  },
});
</script>

<style scoped></style>
