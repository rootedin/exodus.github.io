<template>
  <v-app-bar app color="surface" elevation="2">
    <div
      class="text-h6 ml-4"
      style="font-family: 'Orbitron', sans-serif; font-weight: 700;"
    >
      SWM EXODUS
    </div>
    <v-spacer></v-spacer>
    <v-btn to="/" icon>
      <v-icon>mdi-home</v-icon>
      <v-tooltip activator="parent" location="bottom">
        메인으로 돌아가기
      </v-tooltip>
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
//
</script> 