<template>
  <component :is="quizComponent" />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const quizId = computed(() => route.query.id);

// This maps quiz IDs to their corresponding components.
// It's easily extensible for new quizzes.
const quizComponentMap = {
  '1': defineAsyncComponent(() => import('@/components/Quiz1.vue')),
  '2': defineAsyncComponent(() => import('@/components/Quiz2.vue')),
  // Future quizzes like '3', '4', etc. can be added here.
};

const quizComponent = computed(() => {
  const id = quizId.value as keyof typeof quizComponentMap;
  if (id && quizComponentMap[id]) {
    return quizComponentMap[id];
  }
  // Optional: return a fallback component if quiz not found
  return null;
});
</script> 