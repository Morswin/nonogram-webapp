<script setup lang="ts">
    import { ref } from 'vue';
    import NonogramCell from './NonogramCell.vue'

    const numberOfCols = ref<number>(10);
    const numberOfRows = ref<number>(10);
</script>

<template>
    <section>
        <div class="grid grid-cols-10">
            <NonogramCell 
                v-for="cell in numberOfCols * numberOfRows"
                :key="cell"
            />
        </div>
    </section>
</template>