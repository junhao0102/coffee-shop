<template>
  <div class="pt-4 pb-12 bg-amber-100">
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
  <FooterView />
</template>

<script setup>
import FooterView from '../components/FooterView.vue'
</script>

<style scoped></style>
