<script setup lang="ts">
    interface Props {
        state: string
    }
    const props = defineProps<Props>()
</script>

<template>
    <div class="w-8 h-8 m-1 border-2 border-black rounded-md">
        {{ state }}
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