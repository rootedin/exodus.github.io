<template>
  <v-container>
    <v-card class="mx-auto pa-2 pa-md-8 mb-16" max-width="700">
      <div v-if="!submitted || !correct">
        <!-- The content for each specific quiz will be injected here -->
        <slot></slot>

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

        <v-alert
          v-if="submitted && !correct"
          type="error"
          class="mt-4"
          title="오답입니다!"
          text="다시 한번 생각해 보세요."
        ></v-alert>
      </div>
      <div v-else>
        <v-alert
          type="success"
          title="정답입니다!"
          text="다음 문제로 넘어가세요."
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
}>();

const store = useAppStore();

const answer = ref("");
const submitted = ref(false);
const correct = ref(false);

onMounted(() => {
  if (store.isQuizSolved(props.quizId)) {
    submitted.value = true;
    correct.value = true;
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
  }
}
</script>
