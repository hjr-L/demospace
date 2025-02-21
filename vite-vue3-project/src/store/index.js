import { defineStore } from "pinia";

export const userStore = defineStore("userStore", {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
  },
});