<script setup lang="ts">
    /* Imports */
    import { ref } from 'vue';
    import NonogramCell from './NonogramCell.vue'  // My IDE points out an error here, yet it works as it should

    /* Pinia store */
    import { useTestStore } from '../stores/testStore'
    const nonogramState = useTestStore();

    console.log(nonogramState.nonogram);
    console.log(nonogramState.nonogram.getAsArray());
</script>

<template>
    <section>
        <div class="grid grid-cols-10">
            <NonogramCell 
                v-for="cell in nonogramState.nonogram.getAsArray()"
                :key="cell[0]"
                :state="cell[1]"
                :index="cell[0]"
            />
                <!-- :state="getArrayCell(cell)" -->
        </div>
        <!-- {{ numberOfCols }}
        {{ numberOfRows }} -->
    </section>
</template>