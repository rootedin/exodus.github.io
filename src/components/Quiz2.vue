<template>
  <Quiz correct-answer="110" quiz-id="2" hint="한 글자마다 형광펜 색을 다르게 쓴 걸 보아하니, 정상은 아니야..">
    <v-card-title class="mobile-title">드로로의 성경책</v-card-title>
    <v-card-text>
      자물쇠가 열렸다! 나무 상자 안에는 새 것 같이 보이는 성경책 한 권이 있다.
      <br />
      책갈피가 있는 곳을 펼치니 출애굽기였다. 깨끗했던 겉과는 다르게 안에는 형광펜으로 색칠이 되어있었다.
      <br /><br />
      출 2:15	한편 파라오가 이 일을 듣고 모세를 죽이려고 찾았으나 모세는 파라오의 얼굴을 피해 도망하여 <span class="font-weight-bold">미디안</span> 땅에 거하였으며 하루는 우물 옆에 앉았더라.
    <v-img src="/quiz2.png" alt="문제 이미지" class="mx-auto my-auxo" max-width="350"/>
    <br />
    성경 구절을 읽다보니 성경책 밑에 붙어있던 쪽지 하나를 발견했다.
    <br /><br />
    "내 노트북 비밀번호는 3자리 숫자야."
    </v-card-text>
  </Quiz>
</template>

<script setup lang="ts">
import Quiz from "./Quiz.vue";
</script>
