<template>
  <v-container>
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
          <v-responsive aspect-ratio="16/9" class="h-56 rounded-lg">
            <v-img
              :src="item.video"
              frameborder="0"
              class="w-full h-full"
              alt="image"
              cover
            ></v-img>
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
  },
  {
    video: back2,
    title: "Video Title 2",
    content: "This is the content for the second video.",
  },

  {
    video: back4,
    title: "Video Title 12",
    content: "This is the content for the twelfth video.",
  },
  {
    video: back2,
    title: "Video Title 1",
    content: "This is the content for the first video.",
  },
  {
    video: back4,
    title: "Video Title 2",
    content: "This is the content for the second video.",
  },

  {
    video: back4,
    title: "Video Title 12",
    content: "This is the content for the twelfth video.",
  },
  {
    video: back2,
    title: "Video Title 1",
    content: "This is the content for the first video.",
  },
  {
    video: back4,
    title: "Video Title 2",
    content: "This is the content for the second video.",
  },

  {
    video: back4,
    title: "Video Title 12",
    content: "This is the content for the twelfth video.",
  },
]);
</script>

<style scoped></style>
