<template>
  <div class="pt-6 bg-black">
    <v-card class="bg-black">
      <v-tabs v-model="tab" class="bg-[#121212]">
        <v-tab value="one">Entries</v-tab>
        <v-tab value="two">Posts</v-tab>

      </v-tabs>

      <div class="mt-7">
        <span>Listas de reprodução</span>
      </div>
      <div class="mt-4">
        <AppSlide />
      </div>

      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="one"> 
            
            <AppVideos/>
          </v-tabs-window-item>

          <v-tabs-window-item value="two">
            <AppPost />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import AppSlide from "./AppSlide.vue";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import AppVideos from "./AppVideos.vue";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import AppPost from "./AppPost.vue";

export default {
  data: () => ({
    tab: null,
  }),
};
</script>

<style lang="css">


</style>
