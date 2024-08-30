<template>
  <div class="mt-4">
    <v-btn
      :style="{ backgroundColor: btnColor, paddingInline: btn_p }"
      class="btn-size"
    >
      <!-- If icon prop is provided, render the icon, otherwise render the button name -->
      <span v-if="icon">
        <font-awesome-icon :icon="icon" />
      </span>
      <span v-else>
        {{ btnName }}
      </span>
    </v-btn>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// Define props for the button name, color, padding, and optional icon
const props = defineProps({
  btnName: {
    type: String,
    required: true,
  },
  btn_p: {
    type: String,
    default: "24px",
  },
  btnColor: {
    type: String,
    default: "rgb(33,33,33)",
  },
  icon: {
    type: [String, Array], // Allow either a string or an array (for FontAwesome icons)
    default: null,
  },
});
</script>

<style scoped>
.btn-size {
  width: auto;
  height: 41px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
