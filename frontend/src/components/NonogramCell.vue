<script setup lang="ts">
    import { type INonogramIndex, NonogramIndex } from '../types'
    import { ref, watch } from 'vue'

    interface Props {
        state: ref<boolean>
        index: [number, number]
    }
    const props = defineProps<Props>()    

    /* Pinia store */
    import { useNonogramStore } from '../stores/nonogramStore'
    const nonogramState = useNonogramStore();

    const clicked = () => {
        console.log(nonogramState.nonogram);
        nonogramState.nonogram.setCell(new NonogramIndex(
            props.index[0],
            props.index[1],
            !props.state
        ));
        console.log(nonogramState.nonogram);
        console.log(props.index);
    };

    watch(
        props.state,
        (newState) => {}
    );
    // defineEmits<{(e: 'updateCell', index: [number, number]): void}>();
    // // const updateCellEmit = () => {
    // //     emit('updateCell');
    // // }
</script>

<template>
    <div 
        class="w-8 h-8 m-1 border-2 border-black rounded-md"
        @click="clicked"
    >
        <!-- @click="$emit('updateCell', props.index)" -->
        <!-- {{ state }} -->
        <div 
            v-if="props.state" 
            class="bg-black w-full h-full"
        >
        </div>
        <!-- 
            No need for filling up this one, unless the background of the whole
            website changes.
         -->
        <div v-else></div>
    </div>
</template>