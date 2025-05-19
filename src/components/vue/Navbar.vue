<script setup lang="ts">
import { ref, onMounted } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import NavLink from "./NavLink.vue";
const pages = [
  { name: "Home", id: "" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  // { name: "Contact", id: "contact" },
];
const isDarkMode = ref(false);
const switchMode = () => {
  document.documentElement.classList.toggle("dark");
  isDarkMode.value = !isDarkMode.value;
};
onMounted(() => {
  isDarkMode.value = localStorage.theme === "dark";
  if (isDarkMode.value || window.matchMedia("(prefers-color-scheme: dark)").matches)  {
    localStorage.theme = "dark";
    switchMode();
  }
  else localStorage.theme = "light";
});
</script>

<template>
  <div>
    <a href="#" class="logo text-3xl font-extrabold">Revanfz</a>
    <ul class="hidden sm:flex align-center flex-row gap-8">
      <NavLink
        v-for="page in pages"
        :key="page.id"
        :name="page.name"
        :id="page.id"
        class="text-2xl text-center"
      />
    </ul>
    <div class="contacts flex items-center gap-4 justify-end">
      <button @click="switchMode">
        <FontAwesomeIcon :icon="!isDarkMode ? faMoon : faSun" size="lg" />
      </button>
      <div class="socials hidden lg:block">
        <ul class="flex items-center gap-4">
          <!-- Github -->
          <li>
            <a href="https://github.com/revanfz" target="_blank">
              <FontAwesomeIcon :icon="faGithub" size="lg" />
            </a>
          </li>
          <!-- LinkedIn -->
          <li>
            <a
              href="https://linkedin.com/in/revanfauzialgifari"
              target="_blank"
            >
              <FontAwesomeIcon :icon="faLinkedin" size="lg" />
            </a>
          </li>
          <!-- Mail -->
          <li
            class="p-2 bg-(--fg) text-(--bg) hover:bg-(--bg2) hover:text-(--fg2) rounded-md"
          >
            <a href="mailto:revanfauzi81@gmail.com" class="text-md lg:text-xl">Let's work together</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
