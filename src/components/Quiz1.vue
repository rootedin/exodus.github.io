<template>
  <Quiz correct-answer="30" quiz-id="1">
    <v-card-title>
      "초록불이 왜 안 켜져요?"…도로 주행 연습 중 색약 수험생의 항의
      소동</v-card-title
    >

    <v-card-text>
      【경기=새우물뉴스】
      <br />
      6월 30일 오전, 경기도 오산시 한 교차로 인근에서 도로 주행 연습 중이던
      운전면허 수험생 A씨(20대)가 "초록불이 들어오지 않는다"며 경찰에게
      항의하는 일이 벌어졌다.
      <br />
      현장에 함께 있던 운전 학원 강사에 따르면, A씨는 반복적으로 정지 상태를
      유지하며 "신호가 바뀌지 않는다"고 주장했고, 뒤따르던 차량들의 경적
      소리에 당황한 나머지 차량을 긴급 정차시켰다.
      <br />
      이에 경찰이 현장을 확인했으나 신호등은 정상 작동 중이었던 것으로
      파악됐다.
    </v-card-text>

    <v-row dense>
      <v-col cols="4">
        <v-sheet class="ma-2 pa-2 text-center" color="red-accent-3">
          1
        </v-sheet>
      </v-col>
      <v-col cols="4">
        <v-sheet class="ma-2 pa-2 text-center" color="orange-accent-3">
          2
        </v-sheet>
      </v-col>
      <v-col cols="4">
        <v-sheet class="ma-2 pa-2 text-center" color="green-accent-3">
          3
        </v-sheet>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="4">
        <v-sheet class="ma-2 pa-2 text-center" color="green-accent-3">
          4
        </v-sheet>
      </v-col>
      <v-col cols="4">
        <v-sheet class="ma-2 pa-2 text-center" color="red-accent-3">
          5
        </v-sheet>
      </v-col>
      <v-col cols="4">
        <v-sheet class="ma-2 pa-2 text-center" color="orange-accent-3">
          6
        </v-sheet>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="4">
        <v-sheet class="ma-2 pa-2 text-center" color="orange-accent-3">
          7
        </v-sheet>
      </v-col>
      <v-col cols="4">
        <v-sheet class="ma-2 pa-2 text-center" color="green-accent-3">
          8
        </v-sheet>
      </v-col>
      <v-col cols="4">
        <v-sheet class="ma-2 pa-2 text-center" color="red-accent-3">
          9
        </v-sheet>
      </v-col>
    </v-row>

    <v-card-text>
      경찰은 A씨에게 인지 능력을 테스트하기위해 이것을 보여주고 아래와 같이
      문제를 내었다고 합니다.
      <br />
      A씨가 말했을 정답을 입력하세요.
      <br />
      <br />
      Q. 아래 조건에 맞는 숫자를 선택하여 전부 더한 값을 알려주세요.
      <br />
      <br />
      - 첫번째 줄 : 빨간색 숫자를 제외한다 <br />
      - 두번째 줄 : 빨간색 숫자만 사용한다 <br />
      - 세번째 줄 : 주황색 숫자보다 큰 빨간색 숫자만 사용한다
    </v-card-text>
  </Quiz>
</template>

<script setup lang="ts">
import Quiz from "./Quiz.vue";
</script>
