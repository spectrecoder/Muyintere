<template>
  <div class="mt-4">
    <v-btn
      :style="{ backgroundColor: btnColor, paddingInline: btn_p }"
      class="btn-size"
    >
      {{ btnName }}
    </v-btn>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// Define props for the button name and color
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
});
</script>

<style lang="css">
.btn-size {
  width: auto;
  height: 41px;
}
</style>
