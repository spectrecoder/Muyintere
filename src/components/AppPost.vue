<template>
    <v-container>
      <v-row>
        <v-col
          v-for="(card, index) in cards"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card class="mx-auto">
            <v-img
              class="white--text align-end"
              height="100"
              :src="card.image"
            >
              <v-card-title class="py-2 px-4">
                {{ card.title }}
              </v-card-title>
            </v-img>
  
            <v-card-subtitle class="px-4 pt-3">
              PayPal USD
            </v-card-subtitle>
  
            <v-card-text class="px-4 pb-3 text-container">
              <div class="d-flex align-center">
                <v-icon left class="mr-2">mdi-currency-usd</v-icon>
                <span>PYUSD</span>
                <v-spacer></v-spacer>
                <span>{{ card.date }}</span>
              </div>
              <p class="mt-2 text-content" :class="{ 'blurred': card.isOverflowing }">
                {{ card.text }}
              </p>
            </v-card-text>
  
            <v-card-actions class="px-4 pb-4 d-flex justify-space-between align-center">
              <div class="d-flex avatar-container" @click="toggleAvatar(card)">
                <v-avatar
                  v-for="(avatar, avatarIndex) in card.visibleAvatars"
                  :key="avatarIndex"
                  size="24"
                  color="primary"
                  class="overlapping-avatar"
                >
                  <v-icon size="16">mdi-account</v-icon>
                </v-avatar>
              </div>
  
              <v-btn
                class="ml-auto"
                color="primary"
                outlined
              >
                Mint
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const initialAvatars = [
    { id: 1, name: 'User 1' },
   
  ];
  
  const cards = ref([
    {
      title: 'Global PYUSD Portal Hackathon 2024',
      image: 'https://cdn.vuetifyjs.com/images/cards/solana.jpg',
      date: 'July 31',
      text: 'Announcing the first Global PYUSD Portal Hackathon with Solana — and 40,000 PYUSD in prizes.',
      avatarCount: 1,
      avatars: [...initialAvatars],
      visibleAvatars: initialAvatars.slice(0, 1),
      isOverflowing: false,
    },
    {
      title: 'PYUSD Launches on Solana: The Next Phase of Adoption',
      image: 'https://cdn.vuetifyjs.com/images/cards/solana.jpg',
      date: 'May 29',
      text: 'PayPal announced that the PYUSD stablecoin is going live on the Solana blockchain. Here\'s what it means for the adoption of PYUSD.',
      avatarCount: 3,
      avatars: [...initialAvatars],
      visibleAvatars: initialAvatars.slice(0, 3),
      isOverflowing: false,
    },
    {
      title: 'The Secret Life of Your $5 Latte',
      image: 'https://cdn.vuetifyjs.com/images/cards/solana.jpg',
      date: 'May 21',
      text: 'The transactions set off by our everyday purchases are global and complex. There is another way to streamline our payments with crypto.',
      avatarCount: 6,
      avatars: [...initialAvatars],
      visibleAvatars: initialAvatars.slice(0, 6),
      isOverflowing: false,
    },
    {
      title: 'Money Without Borders: Crypto & P2P Cross-border Payments',
      image: 'https://cdn.vuetifyjs.com/images/cards/solana.jpg',
      date: 'April 30',
      text: 'Peer-to-peer cross-border payments are flawed. Crypto and PYUSD offers an alternative solution to growing financial interconnectedness.',
      avatarCount: 3,
      avatars: [...initialAvatars],
      visibleAvatars: initialAvatars.slice(0, 3),
      isOverflowing: false,
    },
    {
      title: 'Bitcoin, Green Mining, and the Possibility for a More Sustainable Future',
      image: 'https://cdn.vuetifyjs.com/images/cards/solana.jpg',
      date: 'April 22',
      text: 'An opportunity to accelerate the clean energy transition for Bitcoin mining, from PayPal Blockchain Research Group with Energy Web.',
      avatarCount: 24,
      avatars: [...initialAvatars],
      visibleAvatars: initialAvatars.slice(0, 3),
      isOverflowing: false,
    },
    {
      title: 'A Note on the Celsius Distribution',
      image: 'https://cdn.vuetifyjs.com/images/cards/solana.jpg',
      date: 'February 08',
      text: 'To everyone who has received the distribution of their Celsius refund: welcome to PayPal and Venmo!',
      avatarCount: 5,
      avatars: [...initialAvatars],
      visibleAvatars: initialAvatars.slice(0, 5),
      isOverflowing: false,
    },
  ]);
  
  function toggleAvatar(card) {
    if (card.avatarCount < card.avatars.length) {
      card.avatarCount++;
    } else {
      card.avatarCount--;
    }
    card.visibleAvatars = card.avatars.slice(0, card.avatarCount);
  }
  </script>
  
  <style scoped>
  .text-container {
    max-height: 100px;
    overflow: hidden;
    position: relative;
  }
  
  .text-content {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .blurred:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 20px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff);
  }
  
  .avatar-container {
    display: flex;
    align-items: center;
  }
  
  .overlapping-avatar {
    margin-left: -8px;
    border: 2px solid white;
  }
  
  .overlapping-avatar:first-child {
    margin-left: 0;
  }
  </style>
  