<template>
  <MenuList :items="mainsItems" />
</template>

<script setup>
import MenuList from "./MenuList.vue";

const base = import.meta.env.BASE_URL

const mainsItems = [
  {
    id: 1,
    name: "Pasta Carbonara",
    description: "Creamy pasta with bacon and parmesan cheese",
    price: 180,
    src: base+"/images/menu/mains/pasta-carbonara.jpg",
  },
  {
    id: 2,
    name: "Grilled Chicken Plate",
    description: "Juicy grilled chicken breast served with veggies and mashed potato",
    price: 220,
    src: base+"/images/menu/mains/grilled-chicken-plate.jpg",
  },
  {
    id: 3,
    name: "Beef Stroganoff",
    description: "Tender beef strips in creamy mushroom sauce with rice",
    price: 240,
    src: base+"/images/menu/mains/beef-stroganoff.jpg",
  },
  {
    id: 4,
    name: "Salmon Rice Bowl",
    description: "Grilled salmon glazed with teriyaki sauce over steamed rice",
    price: 260,
    src: base+"/images/menu/mains/salmon-rice-bowl.jpg",
  },
  {
    id: 5,
    name: "Mexican Rice",
    description: "Mexican rice with tomatoes, onions, and spices",
    price: 190,
    src: base+"/images/menu/mains/mexican-rice.jpg",
  },
  {
    id: 6,
    name: "Chicken Alfredo Pasta",
    description: "Fettuccine pasta in rich Alfredo sauce with grilled chicken",
    price: 200,
    src: base+"/images/menu/mains/chicken-alfredo-pasta.jpg",
  },
  {
    id: 7,
    name: "Thai Green Curry",
    description: "Spicy and fragrant green curry with shrimp and jasmine rice",
    price: 230,
    src: base+"/images/menu/mains/thai-green-curry.jpg",
  },
  {
    id: 8,
    name: "Taiwanese Beef Noodle",
    description: "Rich soy-braised beef with hand-pulled noodles in savory beef broth",
    price: 280,
    src: base+"/images/menu/mains/beef-noodle.jpg",
  },
];
</script>

<style scoped></style>
