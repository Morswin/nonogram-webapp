import { ref } from 'vue';
import { defineStore } from 'pinia';
import { type INonogram, Nonogram } from '../types';


export const useNonogramStore = defineStore('nonograms', () => {
    const nonogram = ref<INonogram>(
        new Nonogram()
    )

    return {
        nonogram
    }
})
