<script setup lang="ts">
import { defineProps, onMounted, ref, computed } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ProjectItem from "./ProjectItem.vue";

const props = defineProps({
  item: {
    type: Object,
  },
});
const containerRef = ref<HTMLElement | null>(null);
const itemWidth = ref(0);
const visibleItem = ref(0);
const index = ref(0);
const currentPos = computed(() => {
  return index.value * -itemWidth.value * visibleItem.value;
});
const nextItem = () => {
  if (index.value < props.item?.length - visibleItem.value) {
    index.value++;
  }
};
const prevItem = () => {
  if (index.value > 0) {
    index.value--;
  }
};
const setItemWidth = () => {
    itemWidth.value = (containerRef.value?.firstElementChild as HTMLElement)?.offsetWidth || 0;
    visibleItem.value = Math.floor((containerRef.value?.offsetWidth ?? 0) / itemWidth.value)
}
onMounted(() => {
  if (containerRef.value) {
    setItemWidth();
  }
  window.addEventListener("resize", () => {
    setItemWidth();
  });
});
</script>

<template>
  <div>
    <div
      class="flex p-2 gap-4 transition-transform duration-500 ease-in-out"
      :style="`transform: translateX(${currentPos + (index * -15)}px)`"
      ref="containerRef"
    >
      <ProjectItem
        v-for="project in props.item"
        :key="project.id"
        :title="project.title"
        :date="project.date"
        :image="project.image"
        :url="project.url"
        class="min-w-[180px] md:min-w-[300px] rounded-md border border-(--bg2)"
      />
    </div>

    <button
      @click="prevItem"
      :disabled="index == 0"
      class="absolute hover:cursor-pointer disabled:cursor-not-allowed top-1/2 -left-8 rounded-full size-12 shadow-gray-500 shadow-md bg-(--bg3) disabled:bg-(--fg4)"
    >
      <FontAwesomeIcon :icon="faAngleLeft" class="text-xl" />
    </button>
    <button
      @click="nextItem"
      :disabled="(index + 1) * visibleItem >= props.item?.length"
      class="absolute hover:cursor-pointer disabled:cursor-not-allowed top-1/2 -right-8 rounded-full size-12 shadow-gray-500 shadow-md bg-(--bg3) disabled:bg-(--fg4)"
    >
      <FontAwesomeIcon :icon="faAngleRight" class="text-xl" />
    </button>
  </div>
</template>
