<script setup lang="ts">
import { ref } from "vue";
import Carousel from "./Carousel.vue";

interface Project {
  id: number;
  title: string;
  date: string;
  url: string;
  image: "profile.png";
}

const projects = ref<Project[]>([
  {
    id: 1,
    title: "My Blog",
    date: "2023-10-01",
    image: "profile.png",
    url: "www.revanfz.tech",
  },
  {
    id: 2,
    title: "NES Tetris Smart Agent",
    date: "2025-02-20",
    image: "profile.png",
    url: "https://github.com/revanfz/unreal-tetris",
  },
  {
    id: 3,
    title: "E-commerce App",
    date: "2023-08-20",
    image: "profile.png",
    url: "www.shoponline.com",
},
{
    id: 4,
    title: "Smart Fertilizer System",
    date: "2023-07-10",
    image: "profile.png",
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
    <Carousel :item="projects" class="overflow-hidden rounded-sm inset-ring" />
  </section>
</template>
