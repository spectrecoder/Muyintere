<template>
    <v-sheet
      class="mx-auto"
      elevation="4"
      max-width="100%"
    >
      <v-slide-group
        v-model="model"
        class="pa-1"
        center-active
        show-arrows
      >
        <v-slide-group-item
          v-for="n in 12"
          :key="n"
          v-slot="{ isSelected, toggle }"
        >
          <v-card
            :color="isSelected ? 'primary' : 'grey-lighten-1'"
            class="ma-4"
            height="200"
            width="240"
            @click="toggle"
          >
            <div class="d-flex fill-height align-center justify-center">
              <v-scale-transition>
                <v-icon
                  v-if="isSelected"
                  color="white"
                  icon="mdi-close-circle-outline"
                  size="48"
                ></v-icon>
              </v-scale-transition>
            </div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </template>
  <script>
    export default {
      data: () => ({
        model: null,
      }),
    }
  </script>