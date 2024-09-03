<template>
  <v-container>
    <p class="text-xl mb-2">Entries</p>
    <v-row>
      <v-col
        v-for="(item, index) in items"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="!p-2"
      >
        <v-card class="!bg-black p-0">
          <v-responsive aspect-ratio="16/9" class="h-56 rounded-lg relative">
            <v-img
              :src="item.video"
              frameborder="0"
              class="w-full h-full"
              alt="image"
              cover
              :style="{ filter: item.blockStatus ? 'blur(6px)' : 'none' }"
            ></v-img>
            <div
              v-if="item.blockStatus"
              class="absolute inset-0 bg-transparent cursor-not-allowed"
            ></div>

            <div
              v-if="item.blockStatus"
              class="absolute inset-0 flex justify-center items-center bg-white w-28 rounded h-10 text-black text-sm font-bold top-36 left-10"
            >
              <v-icon color="black" class="mr-2">mdi-lock</v-icon>
              Bloqueado
            </div>
          </v-responsive>
          <v-card-text class="bg-black">{{ item.content }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import back4 from "@/assets/car1.png";
import back2 from "@/assets/car2.png";

const items = ref([
  {
    video: back4,
    title: "Video Title 1",
    content: "This is the content for the first video.",
    blockStatus: false,
  },
  {
    video: back2,
    title: "Video Title 2",
    content: "This is the content for the second video.",
    blockStatus: true,
  },

  {
    video: back4,
    title: "Video Title 12",
    content: "This is the content for the twelfth video.",
    blockStatus: false,
  },
  {
    video: back2,
    title: "Video Title 1",
    content: "This is the content for the first video.",
    blockStatus: true,
  },
  {
    video: back4,
    title: "Video Title 2",
    content: "This is the content for the second video.",
    blockStatus: true,
  },

  {
    video: back4,
    title: "Video Title 12",
    content: "This is the content for the twelfth video.",
    blockStatus: false,
  },
  {
    video: back2,
    title: "Video Title 1",
    content: "This is the content for the first video.",
    blockStatus: false,
  },
  {
    video: back4,
    title: "Video Title 2",
    content: "This is the content for the second video.",
    blockStatus: false,
  },

  {
    video: back4,
    title: "Video Title 12",
    content: "This is the content for the twelfth video.",
    blockStatus: false,
  },
]);
</script>

<style scoped></style>
