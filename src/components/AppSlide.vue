<template>
  <v-sheet class="mx-auto" elevation="3" max-width="100%">
    <v-slide-group v-model="model" class="pa-1" center-active show-arrows>
      <v-slide-group-item v-for="(item, index) in items" :key="index">
        <v-card color="black" class="ma-4 card-style" height="290" width="300">
          <v-responsive aspect-ratio="16/9" class="mb-4 rounded-md">
            <iframe
              :src="getYoutubeEmbedUrl(item.video)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="w-full h-[180px]"
            ></iframe>
          </v-responsive>
          
          <div class="flex">
            <v-img
             src="@/assets/avatar (1).png"
             alt="avatar"
             width="30"
             height="30"
             class="rounded-full"
            />
            <v-card-title class="h-12">{{ item.title }}</v-card-title>
          </div>
          <div></div>
          
          <v-card-text class="text-center">
            {{ item.content }}
          </v-card-text>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";

const model = ref(null);

// Function to convert YouTube video URLs to embeddable URLs
const getYoutubeEmbedUrl = (url) => {
  const videoId = url.split("v=")[1] || url.split("/").pop();
  return `https://www.youtube.com/embed/${videoId}`;
};

const items = ref([
  {
    title: "One meets his destiny on the road he takes to avoid it",
    avatar: "@/assets/avatar (1).png",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    content: "0 to 1 with work",
  },
  {
    title: "Title 2",
    avatar: "@/assets/avatar (1).png",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    content: "Content for slide 2",
  },
  {
    avatar: "@/assets/avatar (1).png",
    title: "Title 3",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    content: "Content for slide 3",
  },
]);
</script>

<style scoped>
.v-card-title {
  font-size: 16px;
  font-weight: bold;
  white-space: normal;
  line-height: 1.2rem;
  max-height: 2.4rem; /* Limiting to two lines */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
}

.v-card-text {
  font-size: 14px;
  color: #ddd;
}



.v-slide-group__next, .v-slide-group__prev {
  min-width: 35px !important;
}

.card-style {
  border-radius: 10px;
  background-color: #121212;
  color: white;
}

.profile-img {
  border-radius: 50%;
}
</style>
