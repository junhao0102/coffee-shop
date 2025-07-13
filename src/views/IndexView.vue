<template>
  <!-- Banner 區域 -->
  <div class="mx-auto relative">
    <img class="w-full h-[700px] object-cover brightness-95" :src="base+'/images/index/coffee.jpg'" alt="coffee">
    <div class="absolute top-[50%] left-[25%] -translate-x-1/2 -translate-y-1/2 text-left">
      <p class="text-white text-1xl font-bold mb-4">Cafe & Restaurant Est. 2025</p>
      <p class="text-white text-6xl font-bold mt-4 mb-8">A Story in Every Cup</p>
      <div class="flex gap-8 mt-4">
      </div>
    </div>
  </div>
  <!-- Eat 區域 -->
  <div class="mx-auto relative flex">
    <div class="w-1/2 text-left flex flex-col justify-center items-start pl-48 bg-gray-100">
      <p class="text-5xl font-bold mb-6">Eat</p>
      <p class="text-2xl text-gray-500 mb-1">Breakfast, Lunch, and Handcrafted Pastries</p>
      <p class="text-sm text-gray-500 mb-4">A taste of today, a memory for tomorrow</p>
      <button class="border border-gray-500 text-gray-500 px-4 py-2 rounded-md hover:bg-gray-500 hover:text-white"
        @click="goToRoute('/menu/mains')">See
        More</button>
    </div>
    <div class="w-1/2 relative overflow-hidden group" @mouseenter="startSlider('eat')" @mouseleave="stopSlider()">
      <div
        class="w-full h-[450px] transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90 group-hover:rotate-1">
        <img :key="currentEatIndex" class="w-full h-full object-cover" :src="eatImages[currentEatIndex]" />
      </div>
      <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        <button v-for="(img, index) in eatImages" :key="index" @click="handleEatDotClick(index)"
          :class="getDotClass(index, currentEatIndex)">
          •
        </button>
      </div>
    </div>
  </div>
  <!-- Drink 區域 -->
  <div class="mx-auto relative flex">
    <div class="w-1/2 relative overflow-hidden group" @mouseenter="startSlider('drink')" @mouseleave="stopSlider()">
      <div
        class="w-full h-[450px] transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90 group-hover:rotate-1">
        <img :key="currentDrinkIndex" class="w-full h-full object-cover" :src="drinkImages[currentDrinkIndex]" />
      </div>
      <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        <button v-for="(img, index) in drinkImages" :key="index" @click="handleDrinkDotClick(index)"
          :class="getDotClass(index, currentDrinkIndex)">
          •
        </button>
      </div>
    </div>
    <div class="w-1/2 text-left flex flex-col justify-center items-start pl-48 bg-gray-100">
      <p class="text-5xl font-bold mb-6">Drink</p>
      <p class="text-2xl text-gray-500 mb-1">The Freshest Cup in Town</p>
      <p class="text-sm text-gray-500 mb-4">Let the day unfold with every pour</p>
      <button class="border border-gray-500 text-gray-500 px-4 py-2 rounded-md hover:bg-gray-500 hover:text-white"
        @click="goToRoute('/menu/drink')">See
        More</button>
    </div>
  </div>
  <!-- Address and Opening Hours 區域 -->
  <div class="mx-auto w-full h-[400px] bg-stone-50 pt-24 ">
    <p class="text-5xl font-bold mb-4 text-center">Stop by for a Munch</p>
    <div class="flex justify-center mt-12 font-mono">
      <div class="mr-6">
        <p class="text-3xl">Address</p>
        <p class="mt-4">500 Terry Francine St. <br> San Francisco, CA 94101</p>
      </div>
      <div class="w-[2px] h-24 bg-black mx-8"></div>
      <div class="ml-6">
        <p class="text-3xl">Opening Hours</p>
        <p class="mt-4">Mon - Fri: 8:00 AM - 6:00 PM</p>
        <p>Sat - Sun: 10:00 AM - 4:00 PM</p>
      </div>
    </div>
  </div>
  <!-- Gallery 區域 -->
  <div class="mx-auto w-full h-[300px] flex">
    <img :src="base+'/images/index/gallery/gallery1.jpg'" alt="gallery1" class="w-1/5 h-full object-cover">
    <img :src="base+'/images/index/gallery/gallery2.jpg'" alt="gallery2" class="w-1/5 h-full object-cover">
    <img :src="base+'/images/index/gallery/gallery3.jpg'" alt="gallery3" class="w-1/5 h-full object-cover">
    <img :src="base+'/images/index/gallery/gallery4.jpg'" alt="gallery4" class="w-1/5 h-full object-cover">
    <img :src="base+'/images/index/gallery/gallery5.jpg'" alt="gallery5" class="w-1/5 h-full object-cover">
  </div>
  <div class="bg-white h-[50px]"></div>
  <!-- Footer 區域 -->
  <FooterView />
</template>

<script setup>
import FooterView from '../components/FooterView.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const base = import.meta.env.BASE_URL

// 目前顯示的圖片 index
const currentEatIndex = ref(0)
const currentDrinkIndex = ref(0)

// Eat 區域圖片 src
const eatImages = ref([
  base+'/images/index/eat/Eat1.jpg',
  base+'/images/index/eat/Eat2.jpg',
  base+'/images/index/eat/Eat3.jpg',
])

// Drink 區域圖片 src
const drinkImages = ref([
  base+'/images/index/drink/Drink1.jpg',
  base+'/images/index/drink/Drink2.jpg',
  base+'/images/index/drink/Drink3.jpg',
])


// 記錄輪播計時器的變數
let sliderTimer = null

// 記錄目前正在啟動輪播的區塊（'eat' 或 'drink'）
const activeSlider = ref(null)

// 根據傳入的 slider 名稱讓對應的圖片索引自動切換
function startSlider(slider) {
  // 如果計時器已經啟動，則不會再啟動
  if (sliderTimer) return
  activeSlider.value = slider
  sliderTimer = setInterval(() => {
    if (activeSlider.value === 'eat') {
      currentEatIndex.value = (currentEatIndex.value + 1) % eatImages.value.length
    } else if (activeSlider.value === 'drink') {
      currentDrinkIndex.value = (currentDrinkIndex.value + 1) % drinkImages.value.length
    }
  }, 2000)
}

// 停止圖片輪播
function stopSlider() {
  if (sliderTimer) {
    clearInterval(sliderTimer)
    sliderTimer = null
  }
  activeSlider.value = null
}

// 點擊圓點切換 Eat 區域圖片
function handleEatDotClick(index) {
  currentEatIndex.value = index
}

// 點擊圓點切換 Drink 區域圖片
function handleDrinkDotClick(index) {
  currentDrinkIndex.value = index
}

// 根據當前 index 回傳 dot 的樣式
function getDotClass(index, currentIndex) {
  return {
    'text-gray-500': currentIndex !== index,
    'text-2xl': currentIndex !== index,
    'text-yellow-500': currentIndex === index,
    'text-4xl': currentIndex === index,

  }
}

// 預先載入所有圖片，提高使用者體驗
function preloadImages() {
  [...eatImages.value, ...drinkImages.value].forEach(src => {
    const img = new Image()
    img.src = src
  })
}

// 使用 router
const router = useRouter()

// 跳轉到指定路由
function goToRoute(route) {
  router.push(route).then(() => {
    window.scrollTo(0, 0)
  });
}
onMounted(() => {
  preloadImages()
})

onUnmounted(() => {
  stopSlider()
})
</script>

<style scoped></style>