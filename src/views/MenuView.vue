<template>
  <div class="container mx-auto px-4 py-4">
    <!-- 菜單導航 -->
    <div class="flex justify-center space-x-8 mb-8">
      <router-link to="/menu/coffee" class="px-4 py-2 rounded-lg hover:bg-[#bfa46a] hover:text-white transition-colors"
        active-class="bg-[#bfa46a] text-white">
        Coffee
      </router-link>
      <router-link to="/menu/drink" class="px-4 py-2 rounded-lg hover:bg-[#bfa46a] hover:text-white transition-colors"
        active-class="bg-[#bfa46a] text-white">
        Drink
      </router-link>
      <router-link to="/menu/mains" class="px-4 py-2 rounded-lg hover:bg-[#bfa46a] hover:text-white transition-colors"
        active-class="bg-[#bfa46a] text-white">
        Mains
      </router-link>
      <router-link to="/menu/brunch" class="px-4 py-2 rounded-lg hover:bg-[#bfa46a] hover:text-white transition-colors"
        active-class="bg-[#bfa46a] text-white">
        Brunch
      </router-link>
      <router-link to="/menu/desserts"
        class="px-4 py-2 rounded-lg hover:bg-[#bfa46a] hover:text-white transition-colors"
        active-class="bg-[#bfa46a] text-white">
        Desserts
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style scoped></style>
