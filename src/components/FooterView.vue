<template>
  <footer class="bg-gray-500 text-white font-mono">
    <div class="w-full h-[50px] bg-stone-50"></div>
    <div class="flex justify-between p-10 mx-[15%]">
      <div class="w-1/3">
        <h2 class="text-2xl font-bold mb-4">Subscribe for hot updates</h2>
        <input
          type="text"
          class="mr-4 rounded-md px-2 py-1 text-gray-500"
          placeholder="Enter your email"
        />
        <button
          class="text-white border border-white rounded-md px-2 py-1 hover:bg-white hover:text-gray-500"
        >
          Subscribe
        </button>
      </div>
      <div class="w-1/3 pl-24">
        <h2 class="text-2xl font-bold">Contact Us</h2>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@example.com</p>
        <p>
          Address: 500 Terry Francine St. <br />
          San Francisco, CA 94101
        </p>
      </div>
      <div class="w-1/3 pl-24">
        <h2 class="text-2xl font-bold">Help</h2>
        <p>FAQ</p>
        <p>Contact Us</p>
        <p>Shipping</p>
        <p>Returns</p>
      </div>
      <div class="flex justify-center items-center">
        <a href="https://www.facebook.com" target="_blank">
          <img
            src="/images/icon/fb.png"
            class="w-8 mx-3 hover:opacity-80"
            alt="icon"
          />
        </a>
        <a href="https://line.me" target="_blank">
          <img
            src="/images/icon/line.png"
            class="w-8 mx-3 hover:opacity-80"
            alt="icon"
          />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <img
            src="/images/icon/instagram.png"
            class="w-8 mx-3 hover:opacity-80"
            alt="icon"
          />
        </a>
      </div>
    </div>
  </footer>
</template>
<script setup></script>
<style scoped></style>
