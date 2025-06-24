// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    isAdmin: JSON.parse(sessionStorage.getItem("isAdmin") || 'false') as boolean,
    incorrectCount: Number(localStorage.getItem("incorrectCount") || 0),
    solvedQuizzes: JSON.parse(localStorage.getItem("solvedQuizzes") || '[]') as string[],
  }),
  actions: {
    setAdmin(value: boolean) {
      this.isAdmin = value;
      sessionStorage.setItem("isAdmin", JSON.stringify(value));
    },
    incorrect() {
      this.incorrectCount++;
      localStorage.setItem("incorrectCount", String(this.incorrectCount));
    },
    solveQuiz(quizId: string) {
      if (!this.solvedQuizzes.includes(quizId)) {
        this.solvedQuizzes.push(quizId);
        localStorage.setItem("solvedQuizzes", JSON.stringify(this.solvedQuizzes));
      }
    },
  },
  getters: {
    getIsAdmin: (state) => state.isAdmin,
    getIncorrectCount: (state) => state.incorrectCount,
    isQuizSolved: (state) => (quizId: string) => state.solvedQuizzes.includes(quizId),
  },
});
