<template>
  <nav class="flex">
    <!-- logo區 -->
    <router-link to="/">
      <div class="flex justify-center items-center mx-48">
        <p class="text-3xl font-bold text-[#bfa46a]">JIM'S COFFEE</p>
        <img src="/images/header.png" class="w-24" alt="logo">
      </div>
    </router-link>
    <!-- 選單區 -->
    <ul class="flex justify-center items-center">
      <li v-for="item in menu" :key="item.path" class="mx-4">
        <router-link :to="item.path" class="flex flex-col items-center group">
          <span class="text-[#bfa46a] text-lg group-hover:text-yellow-500">{{ item.zh }}</span>
          <span class="text-[#bfa46a] text-xs group-hover:text-yellow-500">{{ item.en }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const menu = [
  { path: '/', zh: '首頁', en: 'home' },
  { path: '/news', zh: '最新消息', en: 'news' },
  { path: '/menu', zh: '菜單', en: 'menu' },
  { path: '/recruit', zh: '夥伴招募', en: 'recruit' },
  { path: '/contact', zh: '聯絡我們', en: 'contact' }
]

</script>

<style scoped></style>
