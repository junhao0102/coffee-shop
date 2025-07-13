<template>
  <MenuList :items="drinkItems" />
</template>

<script setup>
import MenuList from "./MenuList.vue";

const base = import.meta.env.BASE_URL

const drinkItems = [
  {
    id: 1,
    name: "Matcha Latte",
    description: "Using Japanese imported matcha powder, smooth and rich",
    price: 160,
    src: base+"/images/menu/drink/matcha-latte.jpg",
  },
  {
    id: 2,
    name: "Fruit Tea",
    description: "Fresh fruit and selected tea",
    price: 150,
    src: base+"/images/menu/drink/fruit-tea.jpg",
  },
  {
    id: 3,
    name: "Lemon Tea",
    description: "Fresh lemon slices and red tea",
    price: 130,
    src: base+"/images/menu/drink/lemon-tea.jpg",
  },
  {
    id: 4,
    name: "Earl Grey Milk Tea",
    description: "Fragrant Earl Grey tea with creamy milk",
    price: 140,
    src: base+"/images/menu/drink/earl-grey-milk-tea.jpg",
  },
  {
    id: 5,
    name: "Honey Citron Tea",
    description: "Korean-style sweet and tangy citron with honey",
    price: 130,
    src: base+"/images/menu/drink/honey-citron-tea.jpg",
  },
  {
    id: 6,
    name: "Oolong Latte",
    description: "Taiwan oolong tea with fresh milk, lightly roasted flavor",
    price: 150,
    src: base+"/images/menu/drink/oolong-latte.jpg",
  },
  {
    id: 7,
    name: "Sparkling Yuzu Soda",
    description: "Refreshing sparkling water with Japanese yuzu juice",
    price: 140,
    src: base+"/images/menu/drink/sparkling-yuzu-soda.jpg",
  },
  {
    id: 8,
    name: "Peach Green Tea",
    description: "Green tea base with fragrant peach flavor",
    price: 135,
    src: base+"/images/menu/drink/peach-green-tea.jpg",
  },
];
</script>

<style scoped></style>
