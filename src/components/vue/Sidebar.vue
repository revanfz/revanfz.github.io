<script setup>
import { defineEmits } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const emits = defineEmits(['sidebar'])
function handleSidebar() {
    console.log("emitted event")
    emits('sidebar')
}
</script>

<template>
    <div class="sidebar">
        <div class="sidebar-header flex items-center justify-between">
            <p>Navigation</p>
            <button @click="handleSidebar">
                <FontAwesomeIcon :icon="faXmark" size="xl" class="hover:bg-(--fg1) hover:text-(--bg1) hover:cursor-pointer rounded-sm p-2"/>
            </button>
        </div>
    </div>
</template>