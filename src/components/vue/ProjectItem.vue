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
    <div class="card-header border-b font-bold py-2 bg-(--fg2) text-(--bg2)">
      <h3>{{ props.title }}</h3>
    </div>
    <div class="card-body py-2">
      <img
        :src="props.image"
        :alt="'Preview of ' + props.title"
        class="w-full h-30 object-contain mb-2"
      />
    </div>
    <div class="card-footer flex bg-(--bg) rounded-b-md justify-between items-center card-footer border-t py-2">
      <a class="p-2 ml-4 rounded bg-(--blue) text-(--bg1)" :href="props.url" target="_blank"> Details </a>
      <p class="pr-4">{{ props.date }}</p>
    </div>
  </div>
</template>
