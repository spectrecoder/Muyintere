<template>
  <div class="text-stats d-flex mt-4">
    <!-- Siguiendo -->
    <div class="d-flex align-center">
      <span class="number-text">{{ following }}</span>
      <span class="label-text">Siguiendo</span>
    </div>

    <!-- Seguidores -->
    <div class="d-flex align-center">
      <span class="number-text">{{ followers }}</span>
      <span class="label-text">Seguidores</span>
    </div>

    <!-- Me gusta -->
    <div class="d-flex align-center">
      <span class="number-text">{{ likes }}</span>
      <span class="label-text">Me gusta</span>
    </div>
  </div>

  <!-- Description -->
  <div class="mt-4">
    <span class="description-text">Cuenta oficial de Muy Interesante</span>
  </div>

  <div>
    <span class="link-color mt-4"><i class="pi pi-link mr-2"></i>mtr.bio/muyinteresante</span>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import "primeicons/primeicons.css";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  following: {
    type: Number,
    required: true,
  },
  followers: {
    type: String, 
    required: true,
  },
  likes: {
    type: String, 
    required: true,
  },
});
</script>

<style scoped>
.text-stats {
  font-size: 16px;
  color: white;
}

.number-text {
  font-weight: bold;
  margin-right: 4px;
  font-size: 20px;
}

.label-text {
  margin-right: 20px;
  color: rgb(132, 132, 132);
}
.link-color {
  color: rgb(236, 55, 84);
  font-weight: 400;
  display: flex;
  align-items: center;

}
.description-text {
  font-size: 16px;
  color: rgb(132, 132, 132);
}
</style>
