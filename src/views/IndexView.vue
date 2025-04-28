<template>
  <div class="mx-auto relative">
    <img class="w-full h-[700px] object-cover" src="/images/index/coffee.jpg" alt="coffee">
    <div class="absolute top-[60%] left-[20%] -translate-x-1/2 -translate-y-1/2 text-left">
      <p class="text-white text-1xl font-bold mb-4">Cafe & Restaurant Est. 2025</p>
      <p class="text-white text-6xl font-bold mt-4 mb-8">A Story in Every Cup</p>
      <div class="flex gap-8 mt-4">
        <button class="border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black">View
          Menu</button>
        <button class="border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black">View
          Menu</button>
      </div>
    </div>
  </div>
  <div class="mx-auto relative flex">
    <div class="w-1/2 text-left flex flex-col justify-center items-start pl-48 bg-gray-100">
      <p class="text-5xl font-bold mb-4">Eat.</p>
      <p class="text-3xl text-gray-500 mb-4">Breakfast, Lunch, and Handcrafted Pastries</p>
      <p class="text-xl text-gray-500 mb-4">A taste of today, a memory for tomorrow</p>
      <button class="border border-gray-500 text-gray-500 px-4 py-2 rounded-md hover:bg-gray-500 hover:text-white">See
        More</button>
    </div>
    <div class="w-1/2">
      <img class="w-full h-[450px] object-cover" src="/images/index/Eat.jpg" alt="toast">
    </div>
  </div>
  <div class="mx-auto relative flex">
    <div class="w-1/2">
      <img class="w-full h-[450px] object-cover" src="/images/index/Drink.jpg" alt="toast">
    </div>
    <div class="w-1/2 text-left flex flex-col justify-center items-start pl-48 bg-gray-100">
      <p class="text-5xl font-bold mb-4">Drink.</p>
      <p class="text-3xl text-gray-500 mb-4">The Freshest Cup in Town</p>
      <p class="text-xl text-gray-500 mb-4">Sip Slowly.<br>Let the day unfold with every pour.</p>
      <button class="border border-gray-500 text-gray-500 px-4 py-2 rounded-md hover:bg-gray-500 hover:text-white">See
        More</button>
    </div>
  </div>
  <div class="mx-auto w-full h-[400px] bg-stone-50 pt-24 ">
    <p class="text-5xl font-bold mb-4 text-center">Stop by for a Munch.</p>
    <div class="flex justify-center mt-12 font-mono">
      <div class="mr-6">
        <p class="text-3xl">Address</p>
        <p class="mt-4">500 Terry Francine St. <br> San Francisco, CA 94101</p>
      </div>
      <div class="w-[2px] h-24 bg-black mx-8"></div>
      <div class ="ml-6">
        <p class="text-3xl">Opening Hours</p>
        <p class="mt-4">Mon - Fri: 8:00 AM - 6:00 PM</p>
        <p>Sat - Sun: 10:00 AM - 4:00 PM</p>
      </div>
    </div>
  </div>
  <div class="mx-auto w-full h-[300px] flex">
    <img src="/images/index/gallery1.jpg" alt="gallery1" class="w-1/5 h-full object-cover">
    <img src="/images/index/gallery2.jpg" alt="gallery2" class="w-1/5 h-full object-cover">
    <img src="/images/index/gallery3.jpg" alt="gallery3" class="w-1/5 h-full object-cover">
    <img src="/images/index/gallery4.jpg" alt="gallery4" class="w-1/5 h-full object-cover">
    <img src="/images/index/gallery5.jpg" alt="gallery5" class="w-1/5 h-full object-cover">
  </div>
  <FooterView />
</template>

<script setup>
import FooterView from '../components/FooterView.vue'
</script>

<style scoped></style>
