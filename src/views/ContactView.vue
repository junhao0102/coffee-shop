<template>
  <div class="bg-orange-100 pt-16 pb-16">
    <p class="text-[#bfa46a] text-6xl font-bold text-center mb-8">Contact Us</p>
    <div class="flex flex-row justify-center gap-10">
      <img :src="base+'/images/contact/contact.jpg'" alt="contact" class="w-[550px] h-[400px] object-cover brightness-90 rounded-lg shadow-md" />
      <div class="flex flex-col w-[550px] h-[400px] justify-center">
        <form @submit.prevent="submitForm" class="flex flex-col">
          <p class="contact-title">Name</p>
          <input v-model="formData.name" type="text" required class="contact-input" />
          <p class="contact-title">Email</p>
          <input v-model="formData.email" type="email" required class="contact-input" />
          <p class="contact-title">Message</p>
          <textarea v-model="formData.message" required class="contact-input resize-none h-[150px]"></textarea>
          <button type="submit" class="w-[120px] bg-[#f5f5f5] text-[#7B5B45] px-5 py-2.5 font-bold text-base border-2 border-[#9B8579] rounded-lg transition-all duration-300 hover:bg-[#7B5B45] hover:text-white hover:border-[#7B5B45] hover:shadow-lg self-end my-2 ">Submit</button>
        </form>
      </div>
    </div>
  </div>
  <FooterView />
</template>

<script setup>
import FooterView from '../components/FooterView.vue'
import { ref } from 'vue'

const base = import.meta.env.BASE_URL

const formData = ref({
  name: '',
  email: '',
  message: ''
})

function submitForm() {
  alert('表單提交成功！')
  formData.value = {
    name: '',
    email: '',
    message: ''
  }
}
</script>

<style>
.contact-title {
  @apply text-base my-2;
}

.contact-input {
  @apply border-2 border-[#9B8579] rounded-md p-2;
}
</style>
