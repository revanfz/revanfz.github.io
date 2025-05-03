<script setup>
import Navbar from "@components/vue/Navbar.vue";
import Hamburger from "@components/vue/Hamburger.vue";
import Sidebar from "@components/vue/Sidebar.vue";
import { ref } from "vue";

const sidebarActive = ref(false);
function toggleSidebar() {
  console.log("Pressed?");
  sidebarActive.value = !sidebarActive.value;
}
</script>

<template>
  <nav>
    <div
      class="grid grid-cols-2 items-center p-4 sm:px-8 sm:block sm:text-xl md:text-2xl"
    >
      <Hamburger
        class="sm:hidden text-left items-center"
        @sidebar="toggleSidebar"
      />
      <Navbar
        class="-ml-14 items-center justify-between sm:flex sm:text-center sm:m-0"
      />
    </div>
    <Sidebar
      class="fixed left-0 top-0 h-dvh p-4 w-[60vw] text-xl z-50 bg-(--bg1) text-(--fg1) transition-all duration-500 ease-in-out -translate-x-full"
      :class="{ 'translate-x-0': sidebarActive, '-translate-x-full': !sidebarActive }"
      @sidebar="toggleSidebar"
    />
  </nav>
</template>
