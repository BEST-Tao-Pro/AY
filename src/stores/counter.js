import { defineStore } from 'pinia'

export const useCounterStore = defineStore('store', {

  state:()=>({
    data:{
      userid:'1',
      username:'',
      role:'0',
      college:'',
      password:'',
      self:'',
      other:'',
      othername:'',
      otherid:''


    },

  }),
  persist: {
    enabled: true
  }
})
