<template>
  <v-container>
    <v-card class="mx-auto pa-2 pa-md-8 my-auto" max-width="700">
      <div v-if="!submitted || !correct">
        <!-- The content for each specific quiz will be injected here -->
        <slot></slot>

        <v-btn
          v-if="hint"
          color="indigo-accent-4"
          class="mb-2"
          @click="showHint = !showHint; if (!hintOpened) { openHint(); }"
          block
        >
          {{ showHint ? '힌트 닫기' : '힌트 보기' }}
        </v-btn>
        <v-alert v-if="showHint" class="mb-2">{{ hint }}</v-alert>

        <v-form @submit.prevent="onSubmit">
          <v-text-field
            v-model="answer"
            class="mb-2"
            label="정답 입력"
            :readonly="submitted && correct"
          ></v-text-field>
          <v-btn
            :disabled="(submitted && correct) || !answer"
            color="deep-purple-accent-4"
            size="large"
            type="submit"
            variant="elevated"
            block
          >
            정답 확인
          </v-btn>
        </v-form>

        <transition name="fade">
          <v-alert
            v-if="showWrong"
            type="error"
            class="center-alert"
            title="오답입니다!"
            text="다시 한번 생각해 보세요."
          ></v-alert>
        </transition>
      </div>
      <div v-else>
        <v-alert
          type="success"
          :title="props.quizId === '10' ? '탈출 성공!' : '정답입니다!'"
          :text="props.quizId === '10' ? '드로로의 방에서 무사히 탈출했습니다!' : '다음 문제로 넘어가세요.'"
        >
        </v-alert>
      </div>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import { ref, computed, onMounted } from "vue";

const props = defineProps<{
  quizId: string;
  correctAnswer: string;
  caseSensitive?: boolean;
  hint?: string;
}>();

const store = useAppStore();

const answer = ref("");
const submitted = ref(false);
const correct = ref(false);
const showWrong = ref(false);
const showHint = ref(false);
const hintOpened = computed(() => store.hintOpenedQuizIds.includes(props.quizId));

function openHint() {
  store.openHint(props.quizId);
}

onMounted(() => {
  // 실제로 해결된 문제인지 확인
  const isActuallySolved = store.isQuizSolved(props.quizId);
  if (isActuallySolved) {
    submitted.value = true;
    correct.value = true;
  } else {
    submitted.value = false;
    correct.value = false;
  }
});

function checkAnswer() {
  const userAnswer = props.caseSensitive ? answer.value : answer.value.toLowerCase();
  const correctAnswer = props.caseSensitive ? props.correctAnswer : props.correctAnswer.toLowerCase();
  return userAnswer === correctAnswer;
}

function onSubmit() {
  submitted.value = true;
  if (checkAnswer()) {
    correct.value = true;
    store.solveQuiz(props.quizId);
  } else {
    correct.value = false;
    store.incorrect();
    showWrong.value = true;
    setTimeout(() => {
      showWrong.value = false;
    }, 1500);
  }
}
</script>

<style scoped>
.center-alert {
  position: fixed;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  min-width: 220px;
  z-index: 9999;
  font-size: 0.95rem;
  padding: 8px 16px;
}
@media (max-width: 400px) {
  .center-alert {
    font-size: 0.85rem;
    padding: 6px 8px;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
