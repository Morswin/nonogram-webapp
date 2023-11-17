<script setup lang="ts">
    /* Imports */
    import { ref } from 'vue';
    import NonogramCell from './NonogramCell.vue'  // My IDE points out an error here, yet it works as it should

    /* Pinia store */
    import { useTestStore } from '../stores/testStore'
    const nonogramState = useTestStore();
</script>

<template>
    <section>
        <div class="grid grid-cols-5 w-48">
            <NonogramCell 
                v-for="cell in nonogramState.nonogram.getAsArray()"
                :key="cell.getAsKey()"
                :state="cell.value"
                :index="cell.getAsKey()"
                class="border-2 border-black"
            />
        </div>
    </section>
</template>