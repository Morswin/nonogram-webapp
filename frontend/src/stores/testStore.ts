import { ref, computed } from 'vue';
import { defineStore } from "pinia";

export const useTestStore = defineStore('tests', () => {
    const nonogramArray = ref<boolean[][]>(
        [
            [true, true, true, false, true],
            [true, true, true, false, true],
            [true, true, true, false, true],
            [true, true, true, false, true],
            [true, true, true, false, true]
        ]
        );
    const nonogramArrayWidth = computed<number>(() => {
        return nonogramArray.value[0].length;
    });
    const nonogramArrayHeight = computed<number>(() => {
        return nonogramArray.value.length;
    });

    return {
        nonogramArray,
        nonogramArrayHeight,
        nonogramArrayWidth,
        // setArrayCell,
        // getArrayCell
    }
})
