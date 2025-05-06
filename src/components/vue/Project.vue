<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ProjectItem from "./ProjectItem.vue";

interface Project {
  id: number;
  title: string;
  date: string;
  url: string;
  image: "profile.png";
}
const index = ref(0);
const visibleItem = ref(1);
const itemWidth = ref(300)
const refItem = ref<HTMLElement[]>([]);
const refContainer = ref<HTMLElement | null>(null);

const nextProject = () => {
    if (index.value < projects.value.length - 1) {
        index.value++;
    }
};
const prevProject = () => {
    if (index.value !== 0) {
        index.value--;
    }
};
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

const currentPos = computed(() => {
  return (index.value * -itemWidth.value);
});

const countVisibleItem = () => {
    if (refContainer.value) {
        visibleItem.value = Math.floor(refContainer.value?.offsetWidth / itemWidth.value );
    }
    if (refItem.value) {
        itemWidth.value = refItem.value?.[0].offsetWidth
        console.log(refItem.value?.[0].offsetWidth)
    }
}
onMounted(() => {
    countVisibleItem();
    window.addEventListener("resize", countVisibleItem);
})

onUnmounted(() => {
    window.removeEventListener("resize", countVisibleItem);
})

</script>

<template>
  <section>
    <h2
      class="text-3xl bg-linear-to-r from-(--green) to-(--dark-purple) bg-clip-text text-transparent mb-4"
    >
      My Projects
    </h2>
    <div class="projects-container rounded-md bg-(--bg1) overflow-hidden" ref="refContainer">
      <div
        class="flex bg-transparent p-2 gap-4 transition-transform duration-500 ease-in-out"
        :style="`transform: translateX(${currentPos}px)`"
      >
        <ProjectItem
          v-for="(project, idx) in projects"
          :key="project.id"
          :title="project.title"
          ref="refItem"
          :date="project.date"
          :image="project.image"    
          :url="project.url"
          class="w-full sm:min-w-[240px] md:min-w-[300px] border rounded-md text-center mb-2"
        />
      </div>
    </div>
    <button
      @click="prevProject"
      :disabled="index == 0"
      class="absolute hover:cursor-pointer disabled:cursor-not-allowed top-1/2 -left-8 rounded-full size-12 shadow-gray-500 shadow-md bg-(--bg3) disabled:bg-(--fg4)"
    >
      <FontAwesomeIcon :icon="faAngleLeft" class="text-xl" />
    </button>
    <button
      @click="nextProject"
      :disabled="index == projects.length - visibleItem"
      class="absolute hover:cursor-pointer disabled:cursor-not-allowed top-1/2 -right-8 rounded-full size-12 shadow-gray-500 shadow-md bg-(--bg3) disabled:bg-(--fg4)"
    >
    <FontAwesomeIcon :icon="faAngleRight" class="text-xl" />
    </button>
  </section>
</template>
