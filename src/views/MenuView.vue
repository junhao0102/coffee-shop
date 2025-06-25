<template>
  <div class="pt-4 pb-12 bg-amber-100">
    <!-- 菜單導航 -->
    <div class="flex justify-center space-x-8 mb-8">
      <router-link to="/menu/coffee" class="menu-nav-link" active-class="menu-nav-link-active">
        Coffee
      </router-link>
      <router-link to="/menu/drink" class="menu-nav-link" active-class="menu-nav-link-active">
        Drink
      </router-link>
      <router-link to="/menu/mains" class="menu-nav-link" active-class="menu-nav-link-active">
        Mains
      </router-link>
      <router-link to="/menu/brunch" class="menu-nav-link" active-class="menu-nav-link-active">
        Brunch
      </router-link>
      <router-link to="/menu/desserts" class="menu-nav-link" active-class="menu-nav-link-active">
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

<style>
.menu-nav-link {
  @apply px-4 py-2 rounded-lg hover:bg-[#bfa46a] hover:text-white transition-colors;
}

.menu-nav-link-active {
  @apply bg-[#bfa46a] text-white;
}
</style>
