<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { defineEmits } from "vue";

const emit = defineEmits(["sidebar"]);

function handleSidebar() {
  console.log("emitted event");
  emit("sidebar");
}
</script>

<template>
  <button class="text-left" @click="handleSidebar">
    <FontAwesomeIcon :icon="faBars" size="2xl" />
  </button>
</template>
