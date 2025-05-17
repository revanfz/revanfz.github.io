<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faXmark,
  faHome,
  faBook,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
const emits = defineEmits(["sidebar"]);
function handleSidebar() {
  console.log("emitted event");
  emits("sidebar");
}
</script>

<template>
  <div class="sidebar">
    <div class="sidebar-header flex flex-row items-center justify-between">
      <p class="font-bold">Navigation</p>
      <button @click="handleSidebar">
        <FontAwesomeIcon
          :icon="faXmark"
          size="xl"
          class="active:bg-(--fg1) active:text-(--bg1) active:cursor-pointer rounded-sm p-2"
        />
      </button>
    </div>
    <div class="navigation">
      <ul class="*:py-2">
        <li class="rounded-sm active:bg-(--fg1) active:text-(--bg1) active:cursor-pointer">
          <a
            href="#home"
            @click="handleSidebar"
            class="flex items-center gap-3"
          >
            <FontAwesomeIcon :icon="faHome" class="size-8" />
            <p class="m-0">Home</p>
          </a>
        </li>
        <li class="rounded-sm active:bg-(--fg1) active:text-(--bg1) active:cursor-pointer">
          <a
            href="#about"
            @click="handleSidebar"
            class="flex items-center gap-3"
          >
            <FontAwesomeIcon :icon="faBook" class="size-8" />
            <p class="m-0">About</p>
          </a>
        </li>
        <li class="rounded-sm active:bg-(--fg1) active:text-(--bg1) active:cursor-pointer">
          <a
            href="#projects"
            @click="handleSidebar"
            class="flex items-center gap-3"
          >
            <FontAwesomeIcon
              :icon="faProjectDiagram"
              class="size-8"
            />
            <p class="m-0">Projects</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
