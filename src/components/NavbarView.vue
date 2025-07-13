<template>
  <nav class="flex justify-between items-center">
    <!-- logo區 -->

    <div class="flex flex-row mx-12">
      <router-link to="/" class="flex items-center">
        <p class="text-3xl font-bold text-[#bfa46a]">JIM'S COFFEE</p>
        <img :src="base+'/images/header.png'" class="w-24" alt="logo" />
      </router-link>
    </div>

    <!-- 選單區 -->
    <ul class="flex justify-center items-center mx-12">
      <li v-for="item in menu" :key="item.path" class="mx-4">
        <router-link :to="item.path" class="flex flex-col items-center group" v-slot="{ isActive }">
          <span class="text-[#bfa46a] text-xl group-hover:bg-[#bfa46a] group-hover:text-white px-2 py-2 rounded-lg"
            :class="{ 'bg-[#bfa46a] text-white': isActive }">{{ item.text }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const base = import.meta.env.BASE_URL

const menu = [
  { path: "/", text: "HOME" },
  { path: "/menu", text: "MENU" },
  { path: "/news", text: "NEWS" },
  { path: "/recruit", text: "RECRUIT" },
  { path: "/contact", text: "CONTACT" },
];
</script>

<style scoped></style>
