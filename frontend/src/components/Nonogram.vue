<script setup lang="ts">
    import { ref } from 'vue';

    const numberOfCols = ref<number>(10);
    const numberOfRows = ref<number>(10);
</script>

<template>
    <section>
        <!-- I need to rewrite this to grid display later on -->
        <div 
            v-for="col in numberOfCols" 
            :key="col"
            class="flex"
        >
            <div 
                v-for="row in numberOfRows" 
                :key="row"
                class="w-8 h-8 m-1 border-2 border-black rounded-md"
            >
                
            </div>
        </div>
    </section>
</template>