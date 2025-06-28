// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    isAdmin: JSON.parse(sessionStorage.getItem("isAdmin") || 'false') as boolean,
    incorrectCount: Number(localStorage.getItem("incorrectCount") || 0),
    solvedQuizzes: JSON.parse(localStorage.getItem("solvedQuizzes") || '[]') as { id: string, solvedAt: string }[],
    hintOpenedQuizIds: JSON.parse(localStorage.getItem("hintOpenedQuizIds") || '[]') as string[],
    showWarning: false,
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
    openHint(quizId: string) {
      if (!this.hintOpenedQuizIds.includes(quizId)) {
        this.hintOpenedQuizIds.push(quizId);
        localStorage.setItem("hintOpenedQuizIds", JSON.stringify(this.hintOpenedQuizIds));
      }
    },
    resetState() {
      this.incorrectCount = 0;
      this.solvedQuizzes = [];
      this.hintOpenedQuizIds = [];
      localStorage.removeItem("incorrectCount");
      localStorage.removeItem("solvedQuizzes");
      localStorage.removeItem("hintOpenedQuizIds");
    },
    setShowWarning(value: boolean) {
      this.showWarning = value;
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
    getHintOpenedCount: (state) => state.hintOpenedQuizIds.length,
    canAccessQuiz: (state) => (quizId: string) => {
      // 관리자는 모든 문제에 접근 가능
      if (JSON.parse(sessionStorage.getItem("isAdmin") || 'false')) {
        return true;
      }
      
      const quizNumber = parseInt(quizId);
      if (quizNumber === 1) return true; // 첫 번째 문제는 항상 접근 가능
      
      // 이전 문제들이 모두 해결되었는지 확인
      for (let i = 1; i < quizNumber; i++) {
        if (!state.solvedQuizzes.some(q => q.id === i.toString())) {
          return false;
        }
      }
      return true;
    },
  },
});
