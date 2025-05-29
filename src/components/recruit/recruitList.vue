<template>
    <div class="flex flex-col items-center">
        <div class="rounded-lg overflow-y-auto h-[600px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100" v-if="recruitItems.length > 3">
            <RecruitItem v-for="item in recruitItems" :key="item.id" :item="item" />
        </div>
        <div v-else>
            <RecruitItem v-for="item in recruitItems" :key="item.id" :item="item" />
        </div>
    </div>
</template>


<script setup>
import RecruitItem from './recruitItem.vue';
defineProps({
    recruitItems: {
        type: Array,
        required: true,
        validator: (value) => {
            return value.every((item) => item.position && item.location && item.experience && item.education && item.salary && item.description);
        },
    },
});

</script>


<style scoped>
</style>