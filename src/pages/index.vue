<template>
  <component v-if="quizComponent" :is="quizComponent" />
  <QuizStatus v-else />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const quizId = computed(() => route.query.quizId);

const quizComponentMap = {
  '1': defineAsyncComponent(() => import('@/components/Quiz1.vue')),
  '2': defineAsyncComponent(() => import('@/components/Quiz2.vue')),
  '3': defineAsyncComponent(() => import('@/components/Quiz3.vue')),
  '4': defineAsyncComponent(() => import('@/components/Quiz4.vue')),
  '5': defineAsyncComponent(() => import('@/components/Quiz5.vue')),
  '6': defineAsyncComponent(() => import('@/components/Quiz6.vue')),
  '7': defineAsyncComponent(() => import('@/components/Quiz7.vue')),
  '8': defineAsyncComponent(() => import('@/components/Quiz8.vue')),
  '9': defineAsyncComponent(() => import('@/components/Quiz9.vue'))
};

const quizComponent = computed(() => {
  const id = quizId.value as keyof typeof quizComponentMap;
  if (id && quizComponentMap[id]) {
    return quizComponentMap[id];
  }
  return null;
});
</script>
