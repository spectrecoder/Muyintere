<template>
  <div class="px-5 bg-black">
    <div class="d-flex align-start">
      <div class="profile-img-wrapper me-4">
        <v-img
          class="profile-img"
          src="@/assets/logo1.png"
          alt="Profile"
          width="210"
          height="210"
        />
      </div>

      <div class="w-100">
        <div justify="start" class="mt-4 align-lg-center d-flex">
          <span class="username-text mr-2">muyinteresante_es</span>

          <v-icon class="verified-icon mr-2" color="blue lighten-2">
            mdi-check-circle
          </v-icon>

          <span class="account-name">Muy Interesante</span>
        </div>
        <SocialInfo :following="14" followers="297.1K" likes="321.9K" />
        <div class="d-flex ga-2">
          <AppButton
            v-for="(button, index) in buttons"
            :key="index"
            :btnName="button.name"
            :btnColor="button.color"
            :btn_p="button.padding"
            :icon="button.icon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { VIcon, VImg } from "vuetify/components";
import SocialInfo from "@/components/SocialInfo.vue";
import AppButton from "./AppButton.vue";

const buttons = [
  { name: "Seguir", color: "#EC3754" },
  { name: "Mensaje" },
  { icon: ['fas', 'share'], padding: "10px" }, // Use an icon array instead of JSX
  { name: "...", padding: "10px" },
];
</script>

<style scoped>
.profile-img-wrapper {
  border-radius: 50%;
  overflow: hidden;
  width: 210px;
  height: 210px;
}
.header-text {
  margin-left: 30px;
}
.px-5 {
  padding-inline: 20px;
  margin-top: 26px;
}
.profile-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.username-text {
  font-weight: bold;
  font-size: 24px;
  color: white;
}

.verified-icon {
  font-size: 26px;
}

.account-name {
  font-size: 22px;
  color: white;
}
</style>
