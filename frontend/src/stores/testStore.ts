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

    function toArrayIndex(index: number): [number, number] {
        let y: number = Math.floor(index / nonogramArrayHeight.value);
        let x: number = index % nonogramArrayWidth.value;
        return [y, x];  // Y, X
    }
    function setArrayCell(index: number, value: boolean): void {
        let _temp: [number, number] = toArrayIndex(index);
        let y: number = _temp[0];
        let x: number = _temp[1];
        nonogramArray.value[y][x] = value;
    }
    function getArrayCell(index: number): boolean {
        let _temp: [number, number] = toArrayIndex(index);
        let y: number = _temp[0];
        let x: number = _temp[1];
        return nonogramArray.value[y][x];
    }

    return {
        nonogramArray,
        nonogramArrayHeight,
        nonogramArrayWidth,
        setArrayCell,
        getArrayCell
    }
})
