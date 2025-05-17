<script setup lang="ts">
import { ref } from "vue";
import Carousel from "./Carousel.vue";
import type { Project } from "@interfaces/Project";

const projects = ref<Project[]>([
  {
    title: "My Blog",
    date: "2023-10-01",
    image: "my-blog.png",
    url: "www.revanfz.tech",
  },
  {
    title: "NES Tetris Smart Agent",
    date: "2025-02-20",
    image: "unreal.png",
    url: "https://github.com/revanfz/unreal-tetris",
  },
{
    title: "Smart Fertilizer System",
    date: "2023-07-10",
    image: "smart-farming.png",
    url: "peracikan.iterahero.com",
  },
]);

</script>

<template>
  <section>
    <h2
      class="text-3xl bg-linear-to-r from-(--green) to-(--dark-purple) bg-clip-text text-transparent mb-4"
    >
      My Projects
    </h2>
    <Carousel :item="projects" class="relative flex items-center justify-center -mx-10" />
  </section>
</template>
