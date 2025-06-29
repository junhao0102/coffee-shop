<template>
  <div>
    <div class="bg-orange-50 pb-16 flex flex-col items-center">
    <div class="text-6xl font-bold mt-16 mb-8 text-center text-[#bfa46a]">News</div>
    <div>
      <newsList :newsItems="newsItems" />
    </div>
  </div>
    <FooterView />
  </div>
</template>

<script setup>
import FooterView from '../components/FooterView.vue';
import newsList from '../components/news/newsList.vue';

const newsItems = [
  {
    title: "Summer Cold Brew Tasting Event",
    startDate: "2025-07-01",
    stopDate: "2025-07-05",
    description: "Join us for a special tasting event featuring our latest cold brew creations. Limited spots available, so make your reservation today!",
    tags: ["Coffee Tasting", "Limited Event"],
    src:"/images/news/news1.jpg"
  },
  {
    title: "Latte Art Workshop",
    startDate: "2025-07-06",
    stopDate: "2025-07-07",
    description: "Learn to create beautiful latte art with our expert baristas. Perfect for beginners and experienced baristas alike.",
    tags: ["Hands-on", "Latte Art", "Coffee Class"],
    src:"/images/news/news2.jpg"
  },
  {
    title: "Weekend Jazz Night",
    startDate: "2025-07-10",
    stopDate: "2025-07-12",
    description: "Enjoy live jazz music while sipping on our signature cocktails. Perfect for a relaxing weekend evening.",
    tags: ["Live Music", "Evening Special"],
    src:"/images/news/news3.jpg"
  },
  {
    title: "Coffee Beans Knowledge Talk",
    startDate: "2025-07-04",
    stopDate: "2025-07-06",
    description: "Join us for a coffee knowledge talk on the latest trends in coffee beans. Perfect for coffee enthusiasts.",
    tags: ["Educational", "Coffee Beans"],
    src:"/images/news/news4.jpg"
  },
  {
    title: "Members-Only 12% Discount Days",
    startDate: "2025-07-08",
    stopDate: "2025-07-10",
    description: "Members get 12% off all purchases for the month of July. Don't miss out on this exclusive offer!",
    tags: ["Discount", "Members Only"],
    src:"/images/news/news5.jpg"
  },
  {
    title: "Free Cold Brew Sample Week",
    startDate: "2025-07-02",
    stopDate: "2025-07-08",
    description: "Try our new cold brew for free this week. Limited time offer, so don't miss out!",
    tags: ["Free Sample", "New Product"],
    src:"/images/news/news6.jpg"
  },
  {
    title: "Manual Brew Challenge",
    startDate: "2025-07-09",
    stopDate: "2025-07-11",
    description: "Challenge yourself to a manual brew competition. Prizes for the best brew!",
    tags: ["Competition", "Pour Over"],
    src:"/images/news/news7.jpg"
  },
  {
    title: "Coffee & Dessert Pairing Experience",
    startDate: "2025-07-13",
    stopDate: "2025-07-15",
    description: "Experience a coffee and dessert pairing event. Perfect for a romantic evening.",
    tags: ["Desserts", "Pairing"],
    src:"/images/news/news8.jpg"
  },
  {
    title: "Buy One Get One: Early Bird Coffee",
    startDate: "2025-07-03",
    stopDate: "2025-07-07",
    description: "Buy one get one free on all coffee purchases. Limited time offer, so don't miss out!",
    tags: ["Promotion", "Early Bird"],
    src:"/images/news/news9.jpg"
  },
  {
    title: "Student Wednesdays: 10% Off All Month",
    startDate: "2025-07-01",
    stopDate: "2025-07-31",
    description: "Students get 10% off all purchases for the month of July. Don't miss out on this exclusive offer!",
    tags: ["Student Only", "Ongoing Promo"],
    src:"/images/news/news10.jpg"
  }
];


</script>

<style scoped>
</style>
