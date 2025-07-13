<template>
  <MenuList :items="brunchItems" />
</template>

<script setup>
import MenuList from "./MenuList.vue";

const base = import.meta.env.BASE_URL

const brunchItems = [
  {
    id: 1,
    name: "Avocado Toast",
    description: "Sourdough toast topped with smashed avocado and poached egg",
    price: 180,
    src: base+"/images/menu/brunch/avocado-toast.jpg"
  },
  {
    id: 2,
    name: "Eggs Benedict",
    description: "Poached eggs, ham, and hollandaise sauce on English muffin",
    price: 200,
    src: base+"/images/menu/brunch/eggs-benedict.jpg"
  },
  {
    id: 3,
    name: "Burrito",
    description: "Flour tortilla filled with scrambled eggs, bacon, and cheese",
    price: 170,
    src: base+"/images/menu/brunch/burrito.jpg"
  },
  {
    id: 4,
    name: "Croissant Sandwich",
    description: "Flaky croissant with ham, cheese, and egg",
    price: 160,
    src: base+"/images/menu/brunch/croissant-sandwich.jpg"
  },
  {
    id: 5,
    name: "Bagel",
    description: "Bagel with cream cheese, smoked salmon, and capers",
    price: 220,
    src: base+"/images/menu/brunch/bagel.jpg"
  },
  {
    id: 6,
    name: "Pancake",
    description: "Stack of fluffy pancakes with maple syrup and butter",
    price: 150,
    src: base+"/images/menu/brunch/pancake.jpg"
  },
  {
    id: 7,
    name: "Yogurt Bowl",
    description: "Yogurt with granola, honey, and seasonal fruits",
    price: 140,
    src: base+"/images/menu/brunch/yogurt-bowl.jpg"
  },
  {
    id: 8,
    name: "Burger",
    description: "Beef patty with fried egg, cheese, and arugula in brioche bun",
    price: 210,
    src: base+"/images/menu/brunch/burger.jpg"
  }
];

</script>

<style scoped></style>
