<template>
  <div>
    <component v-if="quizComponent" :is="quizComponent" />
    <QuizStatus v-else />
    
    <!-- 경고 다이얼로그 -->
    <v-dialog v-model="showWarning" persistent max-width="400">
      <v-card>
        <v-card-title class="text-h6">
          ⚠️ 순서 경고
        </v-card-title>
        <v-card-text>
          앞의 문제들을 먼저 풀어주세요!
          <br />
          문제는 순서대로 풀어야 합니다.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="closeWarning">
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAppStore } from '@/stores/app';

const route = useRoute();
const router = useRouter();
const store = useAppStore();

const quizId = computed(() => route.query.quizId);
const showWarning = computed(() => store.showWarning);

const quizComponentMap = {
  '1': defineAsyncComponent(() => import('@/components/Quiz1.vue')),
  '2': defineAsyncComponent(() => import('@/components/Quiz2.vue')),
  '3': defineAsyncComponent(() => import('@/components/Quiz3.vue')),
  '4': defineAsyncComponent(() => import('@/components/Quiz4.vue')),
  '5': defineAsyncComponent(() => import('@/components/Quiz5.vue')),
  '6': defineAsyncComponent(() => import('@/components/Quiz6.vue')),
  '7': defineAsyncComponent(() => import('@/components/Quiz7.vue')),
  '8': defineAsyncComponent(() => import('@/components/Quiz8.vue')),
  '9': defineAsyncComponent(() => import('@/components/Quiz9.vue')),
  '10': defineAsyncComponent(() => import('@/components/Quiz10.vue'))
};

const quizComponent = computed(() => {
  const id = quizId.value as keyof typeof quizComponentMap;
  if (id && quizComponentMap[id]) {
    return quizComponentMap[id];
  }
  return null;
});

function closeWarning() {
  store.setShowWarning(false);
}

function checkQuizAccess() {
  const id = quizId.value;
  if (id && !store.canAccessQuiz(id as string)) {
    // 먼저 홈페이지로 이동
    router.push('/');
    // 다음 tick에서 경고창 표시
    setTimeout(() => {
      store.setShowWarning(true);
    }, 100);
    return false;
  }
  return true;
}

// quizId가 변경될 때마다 접근 권한 확인
watch(quizId, () => {
  checkQuizAccess();
});

onMounted(() => {
  checkQuizAccess();
});
</script>
