import { ref } from 'vue';
import { defineStore } from 'pinia';
import { type INonogram, Nonogram } from '../types';


export const useTestStore = defineStore('tests', () => {
    const nonogram = ref<INonogram>(
        new Nonogram()
    )

    return {
        nonogram
    }
})
