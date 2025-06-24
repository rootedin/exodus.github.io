// Utilities
import { defineStore } from "pinia";

export const useQuiz1Store = defineStore("quiz1", {
  state: () => ({
    teamId: localStorage.getItem("teamId") as string,
    quizId: localStorage.getItem("quizId") as string,
    incorrectCount: localStorage.getItem("incorrectCount") as string,
  }),
  actions: {
    selectTeamId(teamId: string) {
      localStorage.setItem("teamId", teamId);
      this.teamId = teamId;
    },
    selectQuizId(quizId: string) {
      localStorage.setItem("quizId", quizId);
      this.quizId = quizId;
    },
    incorrect() {
      localStorage.setItem(
        "incorrectCount",
        String(Number(this.incorrectCount) + 1)
      );
      this.incorrectCount = String(Number(this.incorrectCount) + 1);
    },
  },
  getters: {
    getTeamId: (state) => state.teamId,
    getQuizId: (state) => state.quizId,
    getIncorrectCount: (state) => state.incorrectCount,
  },
});
