<script setup lang="ts">
const props = defineProps({
  id: Number,
  date: String,
  title: String,
  url: String,
  image: String,
});
</script>

<template>
  <div>
    <div
      class="flex card-header border-(--bg) font-bold py-2 bg-(--bg2) text-(--fg2) text-center h-1/5 rounded-t-sm items-center justify-center"
    >
      <h3>{{ props.title }}</h3>
    </div>
    <div class="card-body py-2 h-3/5">
      <img
        :src="props.image"
        :alt="props.title + ' thumbnail'"
        class="w-full h-full object-contain"
      />
    </div>
    <div
      class="card-footer text-(--bg2) bg-(--aqua) rounded-b-sm flex justify-between items-center card-footer p-1 h-1/5"
    >
      <a
        class="p-2 rounded bg-(--blue) text-(--bg1) text-sm"
        :href="props.url"
        target="_blank"
      >
        Details
      </a>
      <p class="text-sm">{{ props.date }}</p>
    </div>
  </div>
</template>
