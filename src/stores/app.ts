// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    isAdmin: JSON.parse(sessionStorage.getItem("isAdmin") || 'false') as boolean,
    incorrectCount: Number(localStorage.getItem("incorrectCount") || 0),
    solvedQuizzes: JSON.parse(localStorage.getItem("solvedQuizzes") || '[]') as { id: string, solvedAt: string }[],
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
      if (!this.solvedQuizzes.find(q => q.id === quizId)) {
        this.solvedQuizzes.push({ id: quizId, solvedAt: new Date().toISOString() });
        localStorage.setItem("solvedQuizzes", JSON.stringify(this.solvedQuizzes));
      }
    },
    resetState() {
      this.incorrectCount = 0;
      this.solvedQuizzes = [];
      localStorage.removeItem("incorrectCount");
      localStorage.removeItem("solvedQuizzes");
    },
  },
  getters: {
    getIsAdmin: (state) => state.isAdmin,
    getIncorrectCount: (state) => state.incorrectCount,
    isQuizSolved: (state) => (quizId: string) => state.solvedQuizzes.some(q => q.id === quizId),
    getSolvedAt: (state) => (quizId: string) => {
      const found = state.solvedQuizzes.find(q => q.id === quizId);
      return found ? found.solvedAt : null;
    },
  },
});
