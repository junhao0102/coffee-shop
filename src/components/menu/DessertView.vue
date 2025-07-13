<template>
  <MenuList :items="dessertItems" />
</template>

<script setup>
import MenuList from "./MenuList.vue";
  
const base = import.meta.env.BASE_URL

const dessertItems = [
  {
    id: 1,
    name: "Tiramisu",
    description: "Classic Italian dessert, smooth and dense",
    price: 150,
    src: base+"/images/menu/dessert/tiramisu.jpg",
  },
  {
    id: 2,
    name: "Chocolate Cake",
    description: "Rich chocolate flavor, paired with fresh fruit",
    price: 140,
    src: base+"/images/menu/dessert/chocolate-cake.jpg",
  },
  {
    id: 3,
    name: "Cheese Cake",
    description: "New York style, smooth and dense",
    price: 160,
    src: base+"/images/menu/dessert/cheesecake.jpg",
  },
  {
    id: 4,
    name: "Macarons",
    description: "Colorful French cookies with a soft filling",
    price: 120,
    src: base+"/images/menu/dessert/macarons.jpg",
  },
  {
    id: 5,
    name: "Creme Brulee",
    description: "Creamy custard with a caramelized sugar top",
    price: 150,
    src: base+"/images/menu/dessert/creme-brulee.jpg",
  },
  {
    id: 6,
    name: "Panna Cotta",
    description: "Silky Italian dessert with berry sauce",
    price: 130,
    src: base+"/images/menu/dessert/panna-cotta.jpg",
  },
  {
    id: 7,
    name: "Fruit Tart",
    description: "Fresh seasonal fruits on custard and pastry base",
    price: 140,
    src: base+"/images/menu/dessert/fruit-tart.jpg",
  },
  {
    id: 8,
    name: "Molten Lava Cake",
    description: "Warm chocolate cake with a gooey center",
    price: 160,
    src: base+"/images/menu/dessert/molten-lava-cake.jpg",
  },
];
</script>

<style scoped></style>
