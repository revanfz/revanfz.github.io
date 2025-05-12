<script setup lang="ts">
import { ref, onMounted } from "vue";
import NavLink from "./NavLink.vue";
const pages = [
  { name: "Home", id: "" },
  { name: "About", id: "about" },
  { name: "Tool", id: "projects" },
  { name: "Contact", id: "contact" },
];
const isDarkMode = ref(false)
const switchMode = () => {
  if (isDarkMode.value) {
    document.body.classList.remove("dark")
    isDarkMode.value = false
  } else {
    document.body.classList.add("dark")
    isDarkMode.value = true
  }
}
onMounted(() => {
  const body = document.querySelector("body") as HTMLBodyElement;
  if (body.classList.contains("dark")) {
    isDarkMode.value = true
  }
})
</script>

<template>
  <div class="navbar">
    <a href="#" class="logo text-3xl font-extrabold">Revanfz</a>
    <ul class="hidden sm:flex align-center flex-row">
      <NavLink
        v-for="page in pages"
        :key="page.id"
        :name="page.name"
        :id="page.id"
        class="pl-4 text-xl"
      />
    </ul>
    <div class="socials hidden lg:block">
      <ul class="flex gap-4">
        <li>
          <button @click="switchMode">
            <i class="fa-sharp fa-solid mode-icon" :class="{'fa-moon': !isDarkMode, 'fa-sun': isDarkMode}"></i>
          </button>
        </li>
        <!-- Github -->
        <li>
          <a
            href="https://github.com/revanfz"
            target="_blank"
            ><i class="fa-brands fa-github"></i
          ></a>
        </li>
        <!-- LinkedIn -->
        <li>
          <a
            href="https://linkedin.com/in/revanfauzialgifari"
            target="_blank"
            ><i class="fa-brands fa-linkedin"></i
          ></a>
        </li>
        <!-- Mail -->
        <li>
          <a class="p-2 bg-(--bg2) text-(--fg2) rounded-md"
            href="mailto:revanfauzi81@gmail.com"
            >Let's work together</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
