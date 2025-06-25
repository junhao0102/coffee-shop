<template>
    <div class="bg-white rounded-lg border border-gray-300 p-6 relative w-[800px] my-4">
        <h3 class="text-[#bfa46a] text-2xl font-bold mb-2">{{ item.position }}</h3>
        <div class="flex justify-left">
            <p class="recruit-detail">{{ item.location }}</p>
            <p class="recruit-detail-separator">|</p>
            <p class="recruit-detail">{{ item.experience }}</p>
            <p class="recruit-detail-separator">|</p>
            <p class="recruit-detail">{{ item.education }}</p>
            <p class="recruit-detail-separator">|</p>
            <p class="recruit-detail"> NT$ {{ item.salary }} / month</p>
        </div>
        <div>
            <p class="text-gray-600 mb-4">{{ item.description }}</p>
        </div>
    </div>
        
        
</template>

<script setup>
defineProps({
    item: {
        type: Object,
        required: true,
        validator: (value) => {
            return value.position && value.location && value.experience && value.education && value.salary && value.description;
        },
    },
});

</script>

<style>
.recruit-detail {
    @apply text-black mb-4 font-bold mr-2;
}

.recruit-detail-separator {
    @apply text-gray-400 mx-2;
}
</style>