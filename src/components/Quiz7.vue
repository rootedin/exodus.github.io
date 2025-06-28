<template>
  <Quiz correct-answer="7" quiz-id="7" hint="퀴즈 제목에 힌트가 있어...">
    <v-card-title class="mobile-title">적기의해홍</v-card-title>
    <v-card-text>
      1211.jpg 를 열어보니 이런 문제가 있었다.
      <v-img src="/quiz7.png" alt="문제 이미지" class="mx-auto my-auxo" max-width="350"/>
      별 설명이 없는 것을 보아하니, 정답과 동일한 파일명을 찾으면 될 것 같다.
    </v-card-text>
  </Quiz>
</template>
<script setup lang="ts">
import Quiz from "./Quiz.vue";
</script> 