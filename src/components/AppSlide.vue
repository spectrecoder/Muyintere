<template>
  <v-sheet class="mx-auto" elevation="3" max-width="100%">
    <div class="swiper-wrapper-container" style="position: relative">
      <swiper
        ref="swiperRef"
        :modules="modules"
        :slides-per-view="1"
        :space-between="20"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :breakpoints="responsiveBreakpoints"
        class="!bg-black"
        navigation
        id="mySlider"
      >
        <swiper-slide
          v-for="(item, index) in items"
          :key="index"
          class="!bg-black"
        >
          <v-card
            color="transparent"
            class="ma-4 !rounded !p-0 !m-2 !bg-black"
            height="auto"
          >
            <v-responsive aspect-ratio="16/9" class="mb-4 rounded-md">
              <div class="relative w-full sm:h-full h-[220px]">
                <v-img
                  :src="item.video"
                  class="rounded-lg"
                  width="100%"
                  height="100%"
                  cover
                  :style="{ filter: item.blockStatus ? 'blur(6px)' : 'none' }"
                ></v-img>

                <div
                  v-if="item.blockStatus"
                  class="absolute inset-0 bg-transparent cursor-not-allowed"
                ></div>

                <div
                  v-if="item.blockStatus"
                  class="absolute inset-0 flex justify-center items-center bg-white w-28 rounded h-10 text-black text-sm font-bold top-28 left-10"
                >
                  <v-icon color="black" class="mr-2">mdi-lock</v-icon>
                  Bloqueado
                </div>
              </div>
            </v-responsive>

            <div class="flex px-1 justify-start">
              <div>
                <v-img
                  :src="item.avatar"
                  alt="avatar"
                  width="45"
                  height="45"
                  class="rounded-full mx-1"
                />
              </div>
              <div class="flex justify-between w-full flex-col">
                <div class="flex justify-between">
                  <div
                    class="text-wrapper"
                    @mouseover="showFullText = true"
                    @mouseleave="showFullText = false"
                  >
                    <p
                      class="title-multiline-ellipsis w-[90%] px-1 font-medium"
                      v-tooltip="item.title"
                    >
                      {{ item.title }}
                    </p>
                    <p
                      v-if="showFullText"
                      class="full-text w-[90%] px-1 font-medium"
                    >
                      {{ item.title }}
                    </p>
                  </div>

                  <v-menu>
                    <template v-slot:activator="{ props }">
                      <v-btn color="black" v-bind="props" class="min-w-[25px]">
                        <font-awesome-icon icon="ellipsis-vertical" />
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item
                        v-for="(item, index) in items1"
                        :key="index"
                        :value="index"
                      >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
                <p class="pl-1">
                  {{ item.content }}
                  <span v-if="item.checkStatus">
                    <font-awesome-icon :icon="['fas', 'circle-check']" />
                  </span>
                </p>
              </div>
            </div>
          </v-card>
        </swiper-slide>
      </swiper>
    </div>
  </v-sheet>
</template>

<script setup>
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import avatarImage from "@/assets/avatar (1).png";
import avatarImage1 from "@/assets/avatar (2).png";
import avatarImage2 from "@/assets/avatar (3).png";
import avatarImage3 from "@/assets/avatar (4).png";
import avatarImage4 from "@/assets/avatar (5).png";
import back1 from "@/assets/car.png";
import back2 from "@/assets/car.png";
import back3 from "@/assets/car.png";
import back4 from "@/assets/car.png";
import "swiper/css";
import "swiper/css/navigation";

const swiperRef = ref(null);

const items = ref([
  {
    title:
      "One meets his destiny on the road he takes to avoid it destiny on the road he takes to avoid it destiny on the road he takes to avoid it destiny on the road he takes to avoid it",
    avatar: avatarImage,
    video: back1,
    content: "0 to 1 with work",
    checkStatus: true,
    blockStatus: true,
  },
  {
    title: "Title 2",
    avatar: avatarImage1,
    video: back2,
    content: "Content for slide 2",
    checkStatus: true,
    blockStatus: false,
  },
  {
    avatar: avatarImage2,
    title: "Title 3",
    video: back3,
    content: "Content for slide 3",
    checkStatus: true,
    blockStatus: false,
  },
  {
    title:
      "One meets his destiny on the road he takes to avoid it destiny on the road he takes to avoid it destiny on the road he takes to avoid it destiny on the road he takes to avoid it",
    avatar: avatarImage3,
    video: back3,
    content: "0 to 1 with work",
    checkStatus: true,
    blockStatus: false,
  },
  {
    title: "Title 2",
    avatar: avatarImage4,
    video: back3,
    content: "Content for slide 2",
    checkStatus: false,
    blockStatus: false,
  },
  {
    avatar: avatarImage,
    title: "Title 3",
    video: back3,
    content: "Content for slide 3",
    checkStatus: false,
    blockStatus: true,
  },
  {
    title:
      "One meets his destiny on the road he takes to avoid it destiny on the road he takes to avoid it destiny on the road he takes to avoid it destiny on the road he takes to avoid it",
    avatar: avatarImage2,
    video: back4,
    content: "0 to 1 with work",
    checkStatus: true,
    blockStatus: true,
  },
  {
    title: "Title 2",
    avatar: avatarImage3,
    video: back4,
    content: "Content for slide 2",
    checkStatus: true,
    blockStatus: true,
  },
  {
    avatar: avatarImage4,
    title: "Title 3",
    video: back4,
    content: "Content for slide 3",
    checkStatus: true,
    blockStatus: false,
  },
]);

const responsiveBreakpoints = {
  1024: {
    slidesPerView: 3,
  },
  768: {
    slidesPerView: 2,
  },
  650: {
    slidesPerView: 1,
  },
};
import { mergeProps } from "vue";

// Define reactive items array
const items1 = ref([
  { title: "Add to favourite" },
  { title: "Share" },
  { title: "Follow" },
  { title: "Contact" },
]);

const modules = [Pagination, Navigation];
</script>

<style scoped>
.title-multiline-ellipsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
