<template>
  <Quiz correct-answer="4214" quiz-id="4" hint="9칸으로 나뉜 이유가 있을거야..">
    <v-card-title class="mobile-title">드로로의 압축 파일</v-card-title>
    <v-card-text>
      압축 파일을 열어 해제하니, 그림 파일이 나왔다.
      <br />
      <v-img src="/quiz4_1.png" alt="문제 이미지" class="mx-auto my-auxo" max-width="350"/>
      <v-img src="/quiz4_2.png" alt="문제 이미지" class="mx-auto my-auxo" max-width="350"/>
      <v-img src="/quiz4_1.png" alt="문제 이미지" class="mx-auto my-auxo" max-width="350"/>
      엥?? 또 I AM THAT I AM 이라고??
      <br />
      살짝 짜증이 났지만, hint.txt 파일이 있다는 것을 보고는 조금은 참았다. 파일엔 이런 문제가 있었다.
      <br /><br />
      "IAM = 212 / THAT = ? / 정답이랑 일치하는 파일을 찾아..."
      <br /><br />
      아무래도 물음표에 들어갈 숫자를 맞춰야하는 것 같다.
    </v-card-text>
  </Quiz>
</template>
<script setup lang="ts">
import Quiz from "./Quiz.vue";
</script> 