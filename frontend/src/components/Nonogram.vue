<script setup lang="ts">
    /* Imports */
    import { ref } from 'vue';
    import NonogramCell from './NonogramCell.vue'

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
            />
        </div>
        {{ numberOfCols }}
        {{ numberOfRows }}
    </section>
</template>