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
</script>

<template>
    <section>
        <div class="grid grid-cols-10">
            <NonogramCell 
                v-for="cell in numberOfCols * numberOfRows"
                :key="cell"
                :state="nonogramState.getArrayCell(cell)"
            />
        </div>
        {{ numberOfCols }}
        {{ numberOfRows }}
    </section>
</template>