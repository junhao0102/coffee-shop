<template>
  <div class="bg-amber-50 pb-10 flex flex-col items-center">
    <div class="text-6xl font-bold mt-4 mb-8 text-center text-[#bfa46a]">Recruit</div>
    <div class="flex flex-row justify-center gap-6 border-2 border-[#bfa46a] rounded-lg p-10 w-[1200px] ">
      <img src="/images/recruit/side.jpg" class="w-[300px] h-[600px] object-cover rounded-lg brightness-90">
      <RecruitList :recruitItems="recruitItems" />
    </div>
  </div>
  <FooterView />
</template>

<script setup>
import RecruitList from '../components/recruit/recruitList.vue'
import FooterView from '../components/FooterView.vue'

const recruitItems = [
  {
    id: 1,
    position: 'Reserve Head Chef',
    location: 'Taipei',
    experience: 'at least 3 years',
    education: 'Bachelor degree',
    salary: 30000,
    description: 'We are looking for a Reserve Head Chef who is passionate about food and has at least 3 years of experience in the kitchen. You will be responsible for the daily operations of the kitchen and the preparation of the menu. You will also be responsible for the training of the kitchen staff.'
  },
  {
    id: 2,
    position: 'Operations Manager',
    location: 'Taipei',
    experience: 'at least 3 years',
    education: 'Bachelor degree',
    salary: 30000,
    description: 'We are looking for an Operations Manager with strong leadership skills and operational insight. You will oversee multiple store performances, manage teams, and optimize workflows to ensure business success.'
  },
  {
    id: 3,
    position: 'Front-of-House Staff',
    location: 'Taichung',
    experience: 'at least 1 year',
    education: 'Bachelor degree',
    salary: 30000,
    description: 'We are looking for a Front-of-House Staff member who is friendly and customer-focused. Responsibilities include greeting guests, managing table service, and ensuring a pleasant dining experience.'
  },
  {
    id: 4,
    position: 'Barista',
    location: 'Kaohsiung',
    experience: 'no experience required',
    education: 'No specific education required',
    salary: 28000,
    description: 'We are seeking an enthusiastic Barista to join our coffee team. You will prepare beverages, maintain cleanliness, and provide excellent customer service. Training will be provided.'
  },
  {
    id: 5,
    position: 'Kitchen Assistant',
    location: 'Taichung',
    experience: 'no experience required',
    education: 'High school diploma',
    salary: 27000,
    description: 'We are hiring a Kitchen Assistant to support our chefs with food prep, dishwashing, and maintaining kitchen hygiene. This is an entry-level role suitable for beginners.'
  },
  {
    id: 6,
    position: 'Marketing Coordinator',
    location: 'Taipei',
    experience: 'at least 2 years',
    education: 'Bachelor degree in Marketing or related field',
    salary: 35000,
    description: 'We are looking for a creative and organized Marketing Coordinator to help execute campaigns, manage social media, and support branding efforts for our growing food business.'
  },
  {
    id: 7,
    position: 'Store Manager',
    location: 'Tainan',
    experience: 'at least 3 years',
    education: 'Bachelor degree',
    salary: 40000,
    description: 'We are hiring a Store Manager to lead day-to-day store operations, manage staff, and ensure a smooth and efficient customer experience. Leadership and retail experience required.'
  },
  {
    id: 8,
    position: 'Dishwasher',
    location: 'Kaohsiung',
    experience: 'no experience required',
    education: 'No specific education required',
    salary: 26000,
    description: 'We are looking for a reliable Dishwasher to join our kitchen team. Responsibilities include cleaning dishes, kitchen tools, and maintaining a tidy workspace. No experience necessary.'
  }
];

</script>

<style scoped></style>
