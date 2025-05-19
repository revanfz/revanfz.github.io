<script setup lang="ts">
import { defineProps, onMounted, ref, computed, onUnmounted } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ProjectItem from "./ProjectItem.vue";
import { type Project } from "@interfaces/Project";

const props = defineProps<{
  item: Project[];
}>();

const containerRef = ref<HTMLElement | null>(null);
const itemWidth = ref(0);
const visibleItem = ref(1);
const index = ref(0);
const currentNav = ref(0);
const numIndicator = computed(() => {
  const indicator = Math.ceil(props.item.length / visibleItem.value);
  if (indicator > 4) {
    return 4;
  } else {
    return indicator;
  }
});
const currentPos = computed(() => {
  const pos = (index.value * visibleItem.value) * (itemWidth.value + 18);
  if (containerRef.value && -pos > containerRef.value.scrollWidth) {
    return containerRef.value.scrollWidth
  }
  return pos;
});
const itemSkipped = computed(() => {
  return index.value * visibleItem.value - currentNav.value;
});
const itemLeft = computed(() => {
  return (
    Math.round(props.item.length / visibleItem.value) -
    (index.value * visibleItem.value + (4 - currentNav.value))
  );
});
const nextItem = () => {
  if (index.value < Math.round(props.item.length / visibleItem.value) - 1) {
    index.value++
    if (currentNav.value < 3) {
      currentNav.value++
    }
  } else {
    index.value = 0
    currentNav.value = 0
  }
};
const prevItem = () => {
  if (index.value > 0) {
    index.value--;
    if (currentNav.value > 0) {
      currentNav.value--;
    }
  } else {
    index.value = Math.round(props.item.length / visibleItem.value) - 1;
    currentNav.value = 3;
  }
};
const setItemWidth = () => {
  if (containerRef.value) {
    itemWidth.value = (
      containerRef.value?.firstElementChild as HTMLElement
    ).clientWidth;
    visibleItem.value = Math.floor(
      (containerRef.value?.offsetWidth ?? 1) / itemWidth.value
    );
  }
};
onMounted(() => {
  if (containerRef.value) {
    setItemWidth();
  }
  window.addEventListener("resize", () => {
    setItemWidth();
    if (containerRef.value && currentPos.value > containerRef.value?.scrollWidth) {
      index.value = numIndicator.value - 1;
      currentNav.value = index.value
    }
  });
});
onUnmounted(() => {
  window.removeEventListener("resize", () => {
    setItemWidth();
  })
})
</script>

<template>
  <div>
    <button
      @click="prevItem"
      class="relative rounded-full size-11 flex items-center justify-center flex-none bg-(--bg3) shadow-md ring-2 left-4 hover:cursor-pointer disabled:cursor-not-allowed disabled:bg-(--fg4) z-10"
    >
      <FontAwesomeIcon :icon="faArrowLeft" class="text-xl" />
    </button>
    <div class="carousel overflow-hidden rounded-md">
      <div
        class="flex gap-4 transition-transform duration-500 ease-in-out"
        :style="`transform: translateX(${-currentPos}px)`"
        ref="containerRef"
      >
        <ProjectItem
          v-for="(project, idx) in props.item"
          :key="idx"
          :title="project.title"
          :date="project.date"
          :image="project.image"
          :url="project.url"
          class="min-w-full md:min-w-[335px] lg:min-w-[400px] rounded-md border-2 border-(--bg4)"
        />
      </div>
      <div class="indicator flex justify-center mt-2 gap-px">
        <div
          v-show="index > currentNav"
          class="rounded-full size-[0.75rem] bg-(--fg) text-xs text-center bg-gray-400"
        >
          +{{ itemSkipped }}
        </div>
        <div
          v-for="i in numIndicator"
          :key="i"
          class="size-[0.75rem] rounded-full bg-(--fg) transition-opacity duration-100 ease-in-out"
          :style="{ opacity: i - 1 === currentNav ? 1 : 0.5 }"
        ></div>
        <div
          v-show="numIndicator > 4 && itemLeft"
          class="rounded-full size-[0.75rem] bg-(--fg) text-xs text-center bg-gray-400"
        >
          +{{ itemLeft }}
        </div>
      </div>
    </div>
    <button
      @click="nextItem"
      class="relative rounded-full size-11 flex items-center justify-center flex-none right-4 bg-(--bg3) ring-2  hover:cursor-pointer disabled:cursor-not-allowed disabled:bg-(--fg4) z-10"
    >
      <FontAwesomeIcon :icon="faArrowRight" class="text-xl" />
    </button>
  </div>
</template>
