<template>
  <div class="grid grid-cols-2 gap-10 justify-center">
    <newsItem v-for="item in newsItems" :key="item.title" :item="item" />
  </div>
</template>


<script setup>
import newsItem from './newsItem.vue';
defineProps({
    newsItems: {
        type: Array,
        required: true,
        validator: (value) => {
            return Array.isArray(value) && value.every(item => 
                item.title && item.startDate && item.stopDate && item.tags && item.src
            );
        },
    },
});
</script>