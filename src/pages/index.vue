<template>
  <div class="bg-black px-2 app-style fill-height">
    <AppHeader />
    <AppTab />
  </div>
</template>

<script lang="ts" setup>
import AppHeader from "@/components/AppHeader.vue";
import AppTab from "@/components/AppTab.vue";
</script>
<style lang="css">
.app-style {
  max-width: 1080px;
  margin: auto;
}

</style>