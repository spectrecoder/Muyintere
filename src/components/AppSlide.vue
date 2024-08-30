<template>
  <v-sheet class="mx-auto" elevation="3" max-width="100%">
    <v-slide-group v-model="model" class="pa-1" center-active show-arrows>
      <v-slide-group-item v-for="(item, index) in items" :key="index">
        <v-card color="black" class="ma-4 card-style" height="290" width="280">
          <v-responsive aspect-ratio="16/9" class="mb-4 rounded-md">
            <div class="relative w-full h-full">
              <iframe
                :src="getYoutubeEmbedUrl(item.video)"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class="w-full h-[180px] cursor-pointer"
                :style="{ filter: item.blockStatus ? 'blur(6px) disabled' : 'none' }"
              ></iframe>

              <!-- Blocked Label -->
              <div
                v-if="item.blockStatus"
                class="absolute inset-0 flex justify-center items-center bg-white w-28 rounded h-10 text-black text-sm font-bold top-28 left-8"
              >
                <v-icon color="black" class="mr-2">mdi-lock</v-icon>
                Bloqueado
              </div>
            </div>
          </v-responsive>

          <div class="flex px-1">
            <v-img
              :src="item.avatar"
              alt="avatar"
              width="45"
              height="45"
              class="rounded-full"
            />
            <p class="title-multiline-ellipsis w-4/5 px-1 font-medium">
              {{ item.title }}
            </p>
            <div class="flex justify-center items-center w-[5%] cursor-pointer mr-2">
              <font-awesome-icon icon="ellipsis-vertical" />
            </div>
          </div>

          <p class="text-center">
            {{ item.content }}
            <span v-if="item.checkStatus">
              <font-awesome-icon :icon="['fas', 'circle-check']" />
            </span>
          </p>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import avatarImage from '@/assets/avatar (1).png';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import avatarImage1 from '@/assets/avatar (2).png';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import avatarImage2 from '@/assets/avatar (3).png';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import avatarImage3 from '@/assets/avatar (4).png';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import avatarImage4 from '@/assets/avatar (5).png';
// Slide model
const model = ref(null);

// Convert YouTube video URLs to embeddable URLs
const getYoutubeEmbedUrl = (url) => {
  const videoId = url.split("v=")[1] || url.split("/").pop();
  return `https://www.youtube.com/embed/${videoId}`;
};

// Sample items
const items = ref([
  {
    title:
      "One meets his destiny on the road he takes to avoid it destiny on the road he takes to avoid it destiny on the road he takes to avoid it destiny on the road he takes to avoid it",
    avatar: avatarImage,
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    content: "0 to 1 with work",
    checkStatus: true,
    blockStatus: true,
  },
  {
    title: "Title 2",
    avatar: avatarImage1,
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    content: "Content for slide 2",
    checkStatus: true,
    blockStatus: false,
  },
  {
    avatar: avatarImage2,
    title: "Title 3",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    content: "Content for slide 3",
    checkStatus: true,
    blockStatus: false,
  },
  {
    title:
      "One meets his destiny on the road he takes to avoid it destiny on the road he takes to avoid it destiny on the road he takes to avoid it destiny on the road he takes to avoid it",
    avatar: avatarImage3,
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    content: "0 to 1 with work",
    checkStatus: true,
    blockStatus: false,
  },
  {
    title: "Title 2",
    avatar: avatarImage4,
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    content: "Content for slide 2",
    checkStatus: false,
    blockStatus: false,
  },
  {
    avatar: avatarImage,
    title: "Title 3",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    content: "Content for slide 3",
    checkStatus: false,
    blockStatus: true,
  },
  {
    title:
      "One meets his destiny on the road he takes to avoid it destiny on the road he takes to avoid it destiny on the road he takes to avoid it destiny on the road he takes to avoid it",
    avatar: avatarImage2,
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    content: "0 to 1 with work",
    checkStatus: true,
    blockStatus: true,
  },
  {
    title: "Title 2",
    avatar: avatarImage3,
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    content: "Content for slide 2",
    checkStatus: true,
    blockStatus: true,
  },
  {
    avatar: avatarImage4,
    title: "Title 3",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    content: "Content for slide 3",
    checkStatus: true,
    blockStatus: false,
  },
]);
</script>

<style scoped>
.title-multiline-ellipsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 3em;
  line-height: 1.5em;
}

.v-slide-group__next,
.v-slide-group__prev {
  width: 35px !important;
  background-color: rgb(33, 33, 33) !important;
}

.v-card {
  background-color: #121212 !important;
}

.v-slide-group {
  background-color: black;
}

.card-style {
  border-radius: 10px;
  background-color: #121212;
  color: white;
}

.v-img {
  border-radius: 50%;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}
</style>
