<template>
  <MenuList :items="coffeeItems" />
</template>

<script setup>
import MenuList from "./MenuList.vue";

const coffeeItems = [
  {
    id: 1,
    name: "Americano",
    description: "Using high-quality coffee beans, smooth and rich",
    price: 120,
    src: "/images/menu/coffee/americano.jpg",
  },
  {
    id: 2,
    name: "Latte",
    description: "Rich Italian espresso with silky milk foam",
    price: 140,
    src: "/images/menu/coffee/latte.jpg",
  },
  {
    id: 3,
    name: "Cappuccino",
    description: "Classic Italian coffee, perfect proportions",
    price: 140,
    src: "/images/menu/coffee/cappuccino.jpg",
  },
  {
    id: 4,
    name: "Espresso",
    description: "Strong Italian espresso",
    price: 120,
    src: "/images/menu/coffee/espresso.jpg",
  },
  {
    id: 5,
    name: "Macchiato",
    description: "Espresso topped with a dollop of foamed milk",
    price: 130,
    src: "/images/menu/coffee/macchiato.jpg",
  },
  {
    id: 6,
    name: "Mocha",
    description: "Espresso with chocolate and steamed milk",
    price: 150,
    src: "/images/menu/coffee/mocha.jpg",
  },
  {
    id: 7,
    name: "Flat White",
    description: "Velvety milk and strong coffee in harmony",
    price: 140,
    src: "/images/menu/coffee/flat-white.jpg",
  },
  {
    id: 8,
    name: "Cold Brew",
    description: "Smooth cold-extracted coffee, low acidity",
    price: 130,
    src: "/images/menu/coffee/cold-brew.jpg",
  },
  {
    id: 9,
    name: "Affogato",
    description: "Espresso poured over vanilla ice cream",
    price: 160,
    src: "/images/menu/coffee/affogato.jpg",
  },
  {
    id: 10,
    name: "Irish Coffee",
    description: "Hot coffee with Irish whiskey and cream",
    price: 180,
    src: "/images/menu/coffee/irish-coffee.jpg",
  },
];
</script>

<style scoped></style>
