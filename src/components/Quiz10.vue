<template>
  <Quiz correct-answer="10" quiz-id="10" hint="10점 만점에 10점~!!">
    <v-card-title class="mobile-title">핸드폰 비밀번호</v-card-title>
    <v-card-text>
      정말 마지막까지 짓궂었다... 자물쇠를 풀고 드디어 드로로의 집에서 나왔다!
      <br />
      현관문을 닫으니 내 핸드폰이 문고리에 걸려있었다. 곧바로 전원을 켰는데..
      <br />
      어라? 비밀번호가 바뀌었네?? 😠
      <br /><br />
      "힌트 : 오늘 방탈출 10점 만점에 몇 점??"
    </v-card-text>
  </Quiz>
</template>
<script setup lang="ts">
import Quiz from "./Quiz.vue";
</script> 