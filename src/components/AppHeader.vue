<template>
  <v-container class="py-4" fluid>
    <div class="flex sm:flex-nowrap flex-wrap justify-start gap-4">
      <div class="sm:w-48 w-full flex justify-center">
        <v-img
          class="rounded-circle"
          :src="logoImage"
          alt="Profile"
          max-width="210"
          max-height="210"
        />
      </div>

      <div cols="9" md="8">
        <div align="center" class="mt-4 flex flex-wrap gap-3">
          <div cols="auto">
            <span class="font-weight-bold text-h6">muyinteresante_es</span>
          </div>
          <div class="flex gap-1 items-center justify-center">
            <div cols="auto !pr-0">
              <v-icon class="" color="blue lighten-2">mdi-check-circle</v-icon>
            </div>
            <div cols="auto">
              <span class="text-h6">Muy Interesante</span>
            </div>
          </div>
        </div>

        <SocialInfo :following="14" followers="297.1K" likes="321.9K" />

        <div class="mt-2 flex flex-wrap">
          <div
            v-for="(button, index) in buttons"
            :key="index"
            class="pr-2 flex"
          >
            <AppButton
              :btnName="button.name"
              :btnColor="button.color"
              :btn_p="button.padding"
              :icon="button.icon"
            />
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { VIcon, VImg } from "vuetify/components";
import SocialInfo from "@/components/SocialInfo.vue";
import AppButton from "./AppButton.vue";
import logoImage from "@/assets/logo1.png";

const buttons = [
  { name: "Seguir", color: "#EC3754" },
  { name: "Mensaje" },
  { icon: ["fas", "share"], padding: "10px" },
  { name: "...", padding: "10px" },
];
</script>
