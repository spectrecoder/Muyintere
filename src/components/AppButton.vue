<template>
  <div class="mt-4">
    <v-btn
      :style="buttonStyles"
      class="!h-[40px] !min-w-[24px] flex justify-center items-center"
    >
      <template v-if="icon">
        <font-awesome-icon :icon="icon" />
      </template>
      <template v-else>
        {{ btnName }}
      </template>
    </v-btn>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const { btnName, btn_p, btnColor, icon } = defineProps({
  btnName: {
    type: String,
    required: true,
  },
  btn_p: {
    type: String,
    default: '24px',
  },
  btnColor: {
    type: String,
    default: 'rgb(33, 33, 33)',
  },
  icon: {
    type: [String, Array], // Allow either a string or an array (for FontAwesome icons)
    default: null,
  },
});

const buttonStyles = computed(() => ({
  backgroundColor: btnColor,
  paddingInline: btn_p,
}));
</script>


