<template>
    <div class="bg-gray-50 border border-black p-4 rounded-lg w-[650px] h-[300px] relative">
        <div class="w-[620px] h-[275px] p-4 flex">
            <div class="w-[400px]">
                <h3 class="text-2xl font-bold mb-4">{{ item.title }}</h3>
                <div class="flex gap-2 mb-4">
                    <p class="text-gray-600">Start From: {{ item.startDate }}</p>
                    <span class="text-gray-600">~</span>
                    <p class="text-gray-600">End On: {{ item.stopDate }}</p>
                </div>
                <div class="flex flex-wrap gap-2">
                    <span v-for="tag in item.tags" :key="tag"
                        class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                        {{ tag }}
                    </span>
                </div>
                <p class="text-gray-600 mt-4">{{ item.description }}</p>
                <button
                    class="text-blue-500 hover:text-orange-600 p-2 rounded-lg underline absolute bottom-4 left-6 transition-colors">
                    Read More
                </button>
            </div>
            <div class="w-[180px] ml-8">
                <img :src="item.src" alt="news image" class="w-[180px] h-[250px] rounded-lg">
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    item: {
        type: Object,
        required: true,
        validator: (value) => {
            return value.title && value.startDate && value.stopDate && value.tags && value.src;
        },
    },
});
</script>