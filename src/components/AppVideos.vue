<template>
    <v-container>
      <v-row>
        <v-col
          v-for="(item, index) in items"
          :key="index"
          cols="12"
          md="6"
          lg="3"
        >
          <v-card class="h-72 shadow-gray-500/50 shadow-lg">
            <v-responsive aspect-ratio="16/9" class="h-56">
              <iframe
                :src="item.video"
                frameborder="0"
                allowfullscreen
                class="w-full h-full"
              ></iframe>
            </v-responsive>
            <v-card-text>{{ item.content }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const items = ref([
    {
      video: 'https://www.youtube.com/@CryptoSincero',
      title: 'Video Title 1',
      content: 'This is the content for the first video.',
    },
    {
      video: 'https://www.youtube.com/@PrizemArtNft',
      title: 'Video Title 2',
      content: 'This is the content for the second video.',
    },
    
    {
      video: 'https://www.youtube.com/@PrizemArtNft',
      title: 'Video Title 12',
      content: 'This is the content for the twelfth video.',
    },
    {
      video: 'https://www.youtube.com/@CryptoSincero',
      title: 'Video Title 1',
      content: 'This is the content for the first video.',
    },
    {
      video: 'https://www.youtube.com/@PrizemArtNft',
      title: 'Video Title 2',
      content: 'This is the content for the second video.',
    },
    
    {
      video: 'https://youtu.be/M5q5ydk4Nlk',
      title: 'Video Title 12',
      content: 'This is the content for the twelfth video.',
    },
    {
      video: 'https://www.youtube.com/@PrizemArtNft',
      title: 'Video Title 1',
      content: 'This is the content for the first video.',
    },
    {
      video: 'https://www.youtube.com/@CryptoSincero',
      title: 'Video Title 2',
      content: 'This is the content for the second video.',
    },
    
    {
      video: 'https://www.youtube.com/@CryptoSincero',
      title: 'Video Title 12',
      content: 'This is the content for the twelfth video.',
    },
  ]);
  </script>
  
  <style scoped>
  
  </style>
  