<script>
import NavLink from "./NavLink.vue";

export default {
  data() {
    return {
      message: "Hello world!",
      pages: [
        { name: "Home", id: "" },
        { name: "About", id: "about" },
        { name: "Tool", id: "projects" },
        { name: "Contact", id: "contact" },
      ],
    };
  },
  components: {
    NavLink,
  },
};
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
      <ul class="nav__list flex flex-row">
        <!-- Dark Mode -->
        <li class="nav__list__item btn">
          <a
            class="nav__list__item__link dark-mode active"
            onclick="darkMode()"
          >
            <i class="fa-sharp fa-solid fa-moon mode-icon"></i>
          </a>
        </li>
        <!-- Github -->
        <li class="nav__list__item">
          <a
            href="https://github.com/revanfz"
            target="_blank"
            class="nav__list__item__link"
            ><i class="fa-brands fa-github"></i
          ></a>
        </li>
        <!-- LinkedIn -->
        <li class="nav__list__item">
          <a
            href="https://linkedin.com/in/revanfauzialgifari"
            target="_blank"
            class="nav__list__item__link"
            ><i class="fa-brands fa-linkedin"></i
          ></a>
        </li>
        <!-- Mail -->
        <li class="nav__list__item">
          <a
            href="mailto:revanfauzi81@gmail.com"
            class="nav__list__item__link mail-button"
            >Let's work together</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
