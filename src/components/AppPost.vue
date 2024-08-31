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
          <v-img class="white--text align-end" height="100" :src="card.image">
            <p class="py-2 px-4 h-16 font-semibold text-xl">
              {{ card.title }}
            </p>
          </v-img>

          <v-card-text class="px-4 pb-3 text-container">
            <div class="d-flex align-center gap-3">
              <span
                class="w-auto py-1 px-2 bg-gray-500 rounded-xl flex items-center gap-1"
                ><span class="bg-blue rounded-full w-auto py-1 px-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15px"
                    height="15px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M6.631 2.72A.82.82 0 0 1 7.445 2h7.493a6.135 6.135 0 0 1 5.7 6.733c-.367 4.847-4.187 6.6-6.18 6.6h-2.613L10.73 21.32a.82.82 0 0 1-.813.68H4.971a.84.84 0 0 1-.82-.947L5.385 12H4.158a.83.83 0 0 1-.827-.833c0-.46.367-.834.827-.834h1.453L6.058 7h-1.9a.83.83 0 0 1-.827-.833c0-.46.36-.834.82-.834h2.127zM7.718 7l-.453 3.333h5.953a1.6 1.6 0 0 0 1.653-1.666A1.6 1.6 0 0 0 13.218 7zm-.673 5h6.173a3.27 3.27 0 0 0 3.3-3.333c0-1.867-1.427-3.334-3.3-3.334H7.945l.22-1.666h6.666a4.466 4.466 0 0 1 4.16 4.933c-.286 3.82-3.233 5.067-4.533 5.067h-3.3c-.4 0-.733.286-.813.68l-1.107 5.986h-3.32z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                PYUSD
              </span>

              <span class="w-auto py-1 px-2 bg-gray-500 rounded-xl">{{
                card.date
              }}</span>
            </div>
            <p
              class="mt-2 text-content h-20"
              :class="{ blurred: card.isOverflowing }"
            >
              {{ card.text }}
            </p>
          </v-card-text>

          <v-card-actions
            class="px-4 pb-4 d-flex justify-space-between align-center"
          >
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
  class="ml-auto w-auto px-2 py-1 rounded-md"
  color="blue"
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
import { ref } from "vue";
import { defineComponent } from "vue";

defineComponent({
  name: "TokenPyusd",
});
const initialAvatars = [{ id: 1, name: "User 1" }];

const cards = ref([
  {
    title: "Global PYUSD Portal Hackathon 2024",
    image: "https://cdn.vuetifyjs.com/images/cards/solana.jpg",
    date: "July 31",
    text: "Announcing the first Global PYUSD Portal Hackathon with Solana — and 40,000 PYUSD in prizes. Announcing the first Global PYUSD Portal Hackathon with Solana — and 40,000 PYUSD in prizes.",
    avatarCount: 1,
    avatars: [...initialAvatars],
    visibleAvatars: initialAvatars.slice(0, 1),
    isOverflowing: false,
  },
  {
    title: "PYUSD Launches on Solana: The Next Phase of Adoption",
    image: "https://cdn.vuetifyjs.com/images/cards/solana.jpg",
    date: "May 29",
    text: "PayPal announced that the PYUSD stablecoin is going live on the Solana blockchain. Here's what it means for the adoption of PYUSD.",
    avatarCount: 3,
    avatars: [...initialAvatars],
    visibleAvatars: initialAvatars.slice(0, 3),
    isOverflowing: false,
  },
  {
    title: "The Secret Life of Your $5 Latte",
    image: "https://cdn.vuetifyjs.com/images/cards/solana.jpg",
    date: "May 21",
    text: "The transactions set off by our everyday purchases are global and complex. There is another way to streamline our payments with crypto.",
    avatarCount: 6,
    avatars: [...initialAvatars],
    visibleAvatars: initialAvatars.slice(0, 6),
    isOverflowing: false,
  },
  {
    title: "Money Without Borders: Crypto & P2P Cross-border Payments",
    image: "https://cdn.vuetifyjs.com/images/cards/solana.jpg",
    date: "April 30",
    text: "Peer-to-peer cross-border payments are flawed. Crypto and PYUSD offers an alternative solution to growing financial interconnectedness.",
    avatarCount: 3,
    avatars: [...initialAvatars],
    visibleAvatars: initialAvatars.slice(0, 3),
    isOverflowing: false,
  },
  {
    title:
      "Bitcoin, Green Mining, and the Possibility for a More Sustainable Future",
    image: "https://cdn.vuetifyjs.com/images/cards/solana.jpg",
    date: "April 22",
    text: "An opportunity to accelerate the clean energy transition for Bitcoin mining, from PayPal Blockchain Research Group with Energy Web.",
    avatarCount: 24,
    avatars: [...initialAvatars],
    visibleAvatars: initialAvatars.slice(0, 3),
    isOverflowing: false,
  },
  {
    title: "A Note on the Celsius Distribution",
    image: "https://cdn.vuetifyjs.com/images/cards/solana.jpg",
    date: "February 08",
    text: "To everyone who has received the distribution of their Celsius refund: welcome to PayPal and Venmo!",
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
  max-height: 132px;
  overflow: hidden;
  position: relative;
}

.text-content {
  display: -webkit-box;
  -webkit-line-clamp: 4; /* Limit to 4 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  position: relative; /* Necessary for the pseudo-element */
}

.blurred::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1.5em; /* Adjust height based on line height */
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(0, 0, 0, 0.1)
  ); /* Gradient fade */
  backdrop-filter: blur(3px); /* Adjust blur intensity */
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
