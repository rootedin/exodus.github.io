<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-list lines="two" class="bg-transparent">
          <v-list-item
            v-for="quizNumber in totalQuizzes"
            :key="quizNumber"
            :to="isAdmin && !isSolved(quizNumber) ? `/?quizId=${quizNumber}` : undefined"
            :disabled="!isAdmin || isSolved(quizNumber)"
            class="mb-2"
            rounded="lg"
            :variant="isSolved(quizNumber) ? 'tonal' : 'elevated'"
            :color="isSolved(quizNumber) ? 'success' : ''"
          >
            <template v-slot:prepend>
              <v-icon
                size="x-large"
                :icon="
                  isSolved(quizNumber)
                    ? 'mdi-check-decagram'
                    : 'mdi-puzzle-outline'
                "
              ></v-icon>
            </template>

            <v-list-item-title class="font-weight-bold"
              >퀴즈 {{ quizNumber }}</v-list-item-title
            >
            <v-list-item-subtitle>
              {{
                isSolved(quizNumber)
                  ? `${formatSolvedAt(getSolvedAt(quizNumber))} 에 해결`
                  : '미해결'
              }}
            </v-list-item-subtitle>
            <v-tooltip v-if="!isAdmin" activator="parent" location="top">
              관리자 모드에서만 퀴즈로 이동할 수 있습니다.
            </v-tooltip>
          </v-list-item>
        </v-list>

        <div class="text-center mt-8">
          <div v-if="store.getFirstVisitTime" class="mb-4">
            <v-chip color="grey-darken-4" variant="elevated" size="large">
              시작 시간: {{ formatSolvedAt(store.getFirstVisitTime) }}
            </v-chip>
          </div>
          <v-btn color="error" variant="tonal" @click="dialog = true">
            <v-icon start>mdi-restore</v-icon>
            초기화
          </v-btn>
        </div>
        <v-dialog v-model="dialog" max-width="350">
          <v-card>
            <v-card-title class="text-h6">정말 초기화할까요?</v-card-title>
            <v-card-text
              >모든 퀴즈 현황과 실패 횟수가 완전히 초기화됩니다.</v-card-text
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn variant="text" @click="dialog = false">취소</v-btn>
              <v-btn color="error" variant="tonal" @click="resetAll"
                >초기화</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';
import { computed, ref } from 'vue';

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

function formatSolvedAt(iso: string | null) {
  if (!iso) return '';
  const d = new Date(iso);
  const pad = (n: number) => n.toString().padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(
    d.getDate()
  )} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

function resetAll() {
  store.resetState();
  dialog.value = false;
}
</script> 