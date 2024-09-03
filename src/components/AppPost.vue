<template>
  <v-container class="!p-0 !max-w-full">
    <v-row>
      <v-col
        v-for="(card, index) in cards"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="4"
        class="!p-2"
      >
        <v-card
          class="mx-auto h-full !flex !flex-col"
          :class="{
            'rounded-lg': true,
            'card-responsive': true,
          }"
          :height="getCardHeight"
        >
          <div class="relative">
            <v-img
              :src="card.image"
              height="150"
              class="white--text"
              cover
              :style="{ filter: card.blockStatus ? 'blur(6px)' : 'none' }"
            ></v-img>
            <div
              v-if="card.blockStatus"
              class="absolute inset-0 bg-transparent cursor-not-allowed"
            ></div>

            <div
              v-if="card.blockStatus"
              class="absolute inset-0 flex justify-center items-center bg-white w-28 rounded h-10 text-black text-sm font-bold top-20 left-10"
            >
              <v-icon color="black" class="mr-2">mdi-lock</v-icon>
              Bloqueado
            </div>
          </div>

          <v-card-title class="py-1 px-4">{{ card.title }}</v-card-title>

          <v-card-text class="px-4 pb-2 pt-0">
            <div class="flex gap-1">
              <div>
                <v-chip color="grey darken-2" text-color="white" pill>
                  <v-icon left small>mdi-currency-usd</v-icon>
                  PYUSD
                </v-chip>
              </div>
              <div>
                <v-chip color="grey darken-2" text-color="white" pill>{{
                  card.date
                }}</v-chip>
              </div>
            </div>

            <v-row class="mt-2">
              <v-col>
                <p
                  class="m-0"
                  :style="{
                    display: '-webkit-box',
                    '-webkit-line-clamp': card.isOverflowing ? 6 : 4,
                    '-webkit-box-orient': 'vertical',
                    overflow: 'hidden',
                    position: 'relative',
                  }"
                >
                  {{ card.text }}
                </p>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions class="px-4 pb-4">
            <v-row align="center" justify="space-between" no-gutters>
              <v-col cols="auto">
                <v-avatar-group>
                  <v-avatar
                    v-for="(avatar, avatarIndex) in card.visibleAvatars"
                    :key="avatarIndex"
                    size="24"
                    color="primary"
                    class="overlapping-avatar"
                    :style="{ marginLeft: avatarIndex > 0 ? '-8px' : '0' }"
                  >
                    <v-icon size="16">mdi-account</v-icon>
                  </v-avatar>
                </v-avatar-group>
              </v-col>
              <v-col cols="auto">
                <v-btn color="blue" variant="tonal" rounded class="ml-auto">
                  Mint
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { VIcon, VImg } from "vuetify/components";
import postImage from "@/assets/image1.png";

const initialAvatars = [{ id: 1, name: "User 1" }];

const cards = ref([
  {
    title: "Global PYUSD Portal Hackathon 2024",
    image: postImage,
    date: "July 31",
    text: "Announcing the first Global PYUSD Portal Hackathon with Solana — and 40,000 PYUSD in prizes. Announcing the first Global PYUSD Portal Hackathon with Solana — and 40,000 PYUSD in prizes.",
    avatarCount: 1,
    avatars: [...initialAvatars],
    visibleAvatars: initialAvatars.slice(0, 1),
    isOverflowing: false,
    blockStatus: false,
  },
  {
    title: "PYUSD Launches on Solana: The Next Phase of Adoption",
    image: postImage,
    date: "May 29",
    text: "PayPal announced that the PYUSD stablecoin is going live on the Solana blockchain. Here's what it means for the adoption of PYUSD.",
    avatarCount: 3,
    avatars: [...initialAvatars],
    visibleAvatars: initialAvatars.slice(0, 3),
    isOverflowing: false,
    blockStatus: true,
  },
  {
    title: "The Secret Life of Your $5 Latte",
    image: postImage,
    date: "May 21",
    text: "The transactions set off by our everyday purchases are global and complex. There is another way to streamline our payments with crypto.",
    avatarCount: 6,
    avatars: [...initialAvatars],
    visibleAvatars: initialAvatars.slice(0, 6),
    isOverflowing: false,
    blockStatus: false,
  },
  {
    title: "Money Without Borders: Crypto & P2P Cross-border Payments",
    image: postImage,
    date: "April 30",
    text: "Peer-to-peer cross-border payments are flawed. Peer-to-peer cross-border payments are flawed. Crypto and PYUSD offers an alternative solution to growing financial interconnectedness.  Crypto and PYUSD offers an alternative solution to growing financial interconnectedness.",
    avatarCount: 3,
    avatars: [...initialAvatars],
    visibleAvatars: initialAvatars.slice(0, 3),
    isOverflowing: false,
    blockStatus: false,
  },
  {
    title:
      "Bitcoin, Green Mining, and the Possibility for a More Sustainable Future",
    image: postImage,
    date: "April 22",
    text: "An opportunity to accelerate the clean energy transition for Bitcoin mining, from PayPal Blockchain Research Group with Energy Web. from PayPal Blockchain Research Group with Energy Web.",
    avatarCount: 24,
    avatars: [...initialAvatars],
    visibleAvatars: initialAvatars.slice(0, 3),
    isOverflowing: false,
    blockStatus: false,
  },
  {
    title: "A Note on the Celsius Distribution",
    image: postImage,
    date: "February 08",
    text: "To everyone who has received the distribution of their Celsius refund: welcome to PayPal and Venmo! To everyone who has received the distribution of their Celsius refund: welcome to PayPal and Venmo!",
    avatarCount: 5,
    avatars: [...initialAvatars],
    visibleAvatars: initialAvatars.slice(0, 5),
    isOverflowing: false,
    blockStatus: false,
  },
]);

const getCardHeight = () => (window.innerWidth <= 600 ? "390px" : "450px");
</script>
