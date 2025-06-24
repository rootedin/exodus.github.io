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
            <template v-if="isSolved(quizNumber)">
              <span class="text-caption text-grey-darken-1 me-1">
                {{ formatSolvedAt(getSolvedAt(quizNumber)) }}
              </span>
            </template>
            {{ isSolved(quizNumber) ? '완료' : '미해결' }}
          </v-chip>
        </template>
      </v-list-item>
    </v-list>
    <v-tooltip v-if="!isAdmin" activator="parent" location="top">
      관리자 모드에서만 퀴즈로 이동할 수 있습니다.
    </v-tooltip>

    <v-divider class="my-4" v-if="isAdmin" />
    <div v-if="isAdmin" class="text-center">
      <v-btn color="error" variant="tonal" @click="dialog = true">
        <v-icon start>mdi-restore</v-icon>
        초기화
      </v-btn>
    </div>
    <v-dialog v-model="dialog" max-width="350">
      <v-card>
        <v-card-title class="text-h6">정말 초기화할까요?</v-card-title>
        <v-card-text>모든 퀴즈 현황과 실패 횟수가 완전히 초기화됩니다.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="text" @click="dialog = false">취소</v-btn>
          <v-btn color="error" variant="tonal" @click="resetAll">초기화</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import { computed, ref } from "vue";

const store = useAppStore();
const totalQuizzes = 10;

const isAdmin = computed(() => store.isAdmin);
const dialog = ref(false);

const isSolved = (quizNumber: number) => {
  return store.isQuizSolved(String(quizNumber));
};
const getSolvedAt = (quizNumber: number) => {
  return store.getSolvedAt(String(quizNumber));
};
function formatSolvedAt(iso: string|null) {
  if (!iso) return '';
  const d = new Date(iso);
  const pad = (n: number) => n.toString().padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

function resetAll() {
  store.resetState();
  dialog.value = false;
}
</script> 