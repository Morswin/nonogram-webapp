<script setup lang="ts">
    /* Imports */
    import { ref } from 'vue';
    import NonogramCell from './NonogramCell.vue'  // My IDE points out an error here, yet it works as it should

    /* Pinia store */
    import { useTestStore } from '../stores/testStore'
    const nonogramState = useTestStore();

    /* Initialisation of the component */
    const numberOfCols = nonogramState.nonogramArrayWidth;
    const numberOfRows = nonogramState.nonogramArrayHeight;

    function toArrayIndex(index: number): [number, number] {
        let y: number = Math.floor(index / numberOfRows);
        let x: number = index % numberOfCols;
        return [y, x];  // Y, X
    }
    function setArrayCell(index: number, value: boolean): void {
        let _temp: [number, number] = toArrayIndex(index);
        let y: number = _temp[0];
        let x: number = _temp[1];
        nonogramState.nonogramArray[y][x] = value;
    }
    function getArrayCell(index: number): boolean {
        let _temp: [number, number] = toArrayIndex(index);
        let y: number = _temp[0];
        let x: number = _temp[1];
        return nonogramState.nonogramArray[y][x];
    }
</script>

<template>
    <section>
        <div class="grid grid-cols-10">
            <NonogramCell 
                v-for="cell in numberOfCols * numberOfRows"
                :key="cell"
            />
                <!-- :state="getArrayCell(cell)" -->
        </div>
        {{ numberOfCols }}
        {{ numberOfRows }}
    </section>
</template>