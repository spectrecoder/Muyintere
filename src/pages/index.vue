<template>
  <div class="bg-black px-4 app-style fill-height">
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
  max-width: 960px;
  margin: auto;
}

</style>