<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="mx-auto pa-4">
          <v-card-title class="text-center text-h5">
            SWM EXODUS 에 오신 것을 환영합니다!
          </v-card-title>
          <v-card-text class="text-center">
            총 10개의 퀴즈가 준비되어 있습니다. <br />
            아래 버튼을 눌러 현황을 확인할 수 있습니다.
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn
              @click="showStatus = !showStatus"
              color="deep-purple-accent-4"
              variant="elevated"
              size="large"
            >
              {{ showStatus ? '현황판 닫기' : '퀴즈 현황판 보기' }}
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-expand-transition>
          <div v-show="showStatus" class="mt-4">
            <QuizStatus />
          </div>
        </v-expand-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import QuizStatus from "./QuizStatus.vue";

const showStatus = ref(false);
</script>
