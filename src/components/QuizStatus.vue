<template>
  <v-card class="mx-auto pa-4" max-width="500">
    <v-card-title class="text-center">퀴즈 현황판</v-card-title>
    <v-card-subtitle class="text-center mb-4">
      총 오답 횟수: {{ store.getIncorrectCount }}
    </v-card-subtitle>
    <v-divider></v-divider>
    <v-list>
      <v-list-item
        v-for="quizNumber in totalQuizzes"
        :key="quizNumber"
        :to="isAdmin ? `/quiz?id=${quizNumber}` : undefined"
        :disabled="!isAdmin"
      >
        <template v-slot:prepend>
          <v-icon
            :color="isSolved(quizNumber) ? 'success' : 'grey'"
            :icon="
              isSolved(quizNumber)
                ? 'mdi-check-circle'
                : 'mdi-circle-outline'
            "
          ></v-icon>
        </template>

        <v-list-item-title>퀴즈 {{ quizNumber }}</v-list-item-title>

        <template v-slot:append>
          <v-chip
            :color="isSolved(quizNumber) ? 'success' : 'default'"
            variant="tonal"
            size="small"
          >
            {{ isSolved(quizNumber) ? '완료' : '미해결' }}
          </v-chip>
        </template>
      </v-list-item>
    </v-list>
    <v-tooltip v-if="!isAdmin" activator="parent" location="top">
      관리자 모드에서만 퀴즈로 이동할 수 있습니다.
    </v-tooltip>
  </v-card>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import { computed } from "vue";

const store = useAppStore();
const totalQuizzes = 10;

const isAdmin = computed(() => store.isAdmin);

const isSolved = (quizNumber: number) => {
  return store.isQuizSolved(String(quizNumber));
};
</script> 