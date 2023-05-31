import { defineStore } from 'pinia'

export const useDeviceStateStore = defineStore("device-state", () => {
  const device = ref({
    name: "造球机",
    prop1: "Current",
    prop2: "Frequency",
  })
  return {
    device
  }
})