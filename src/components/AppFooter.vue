<template>
  <v-footer app height="40">
    <v-chip color="grey-darken-4" class="ms-1">
      <v-icon icon="mdi-close-circle" start></v-icon>
      {{ store.getIncorrectCount }}
    </v-chip>
    <v-chip color="indigo-accent-4" class="ms-1">
      <v-icon icon="mdi-lightbulb-outline" start></v-icon>
      {{ store.getHintOpenedCount }}
    </v-chip>

    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title>관리자 인증</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="password"
            label="비밀번호"
            type="password"
            @keyup.enter="checkPassword"
            autofocus
          ></v-text-field>
          <p v-if="error" class="text-red">비밀번호가 틀렸습니다.</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false">취소</v-btn>
          <v-btn color="primary" @click="checkPassword">확인</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <div class="d-flex align-center" style="position: absolute; right: 16px">
      <span class="text-caption text-disabled mr-2"
        >&copy; 2025 새우물침례교회</span
      >
      <v-btn
        :color="isAdmin ? 'primary' : 'default'"
        variant="tonal"
        icon
        size="x-small"
        @click="handleAdminClick"
      >
        <v-icon>mdi-account-key</v-icon>
      </v-btn>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import { ref, computed } from "vue";

const store = useAppStore();
const isAdmin = computed(() => store.isAdmin);

const dialog = ref(false);
const password = ref("");
const error = ref(false);

const ADMIN_PASSWORD = "ROOTED";

function handleAdminClick() {
  if (isAdmin.value) {
    store.setAdmin(false);
  } else {
    dialog.value = true;
    password.value = "";
    error.value = false;
  }
}

function checkPassword() {
  if (password.value === ADMIN_PASSWORD) {
    store.setAdmin(true);
    dialog.value = false;
  } else {
    error.value = true;
  }
}
</script>
