<template>
  <v-app-bar app color="surface" elevation="2">
    <div
      class="text-h6 ml-6"
      style="font-family: 'Orbitron', sans-serif; font-weight: 700; flex-grow: 1; white-space: nowrap; overflow: visible;"
    >
      SWM EXODUS
    </div>
    <v-btn to="/" icon class="me-4">
      <v-icon>mdi-clipboard-list-outline</v-icon>
      <v-tooltip activator="parent" location="bottom">
        메인으로 돌아가기
      </v-tooltip>
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
//
</script> 