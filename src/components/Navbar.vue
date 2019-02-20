<template>
  <nav class="navbar container-fluid">
    <router-link to="/" class="navbar-brand">@glweems</router-link>
    <svg
      width="33.387"
      height="22.679"
      viewBox="0 0 33.387 22.679"
      class="menu-button"
      @click="toggleMenu"
    >
      <g transform="translate(128.5 23.811)">
        <line class="a" x2="33.387" transform="translate(-128.5 -21.811)"></line>
        <line class="a" x2="26" transform="translate(-121.5 -12.469)"></line>
        <line class="a" x2="33.387" transform="translate(-128.5 -3.132)"></line>
      </g>
    </svg>

    <transition
      enter-active-class="animated slideInRight faster"
      leave-active-class="animated slideOutRight faster"
    >
      <nav v-if="isOpen" :class="[isOpen ? dropdown.activeClass : 'hidden']">
        <a
          v-for="link in links"
          :key="link.name"
          class="nav-link"
          @click="goToPage(link.path)"
        >{{ link.name }}</a>
      </nav>
    </transition>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isOpen: false,
      links: this.$router.options.routes,
      dropdown: {
        activeClass: "nav-links",
        errorClass: "hidden"
      }
    };
  },
  computed: {
    currentPage() {
      return this.$route.name;
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
      console.log(this.isOpen);
    },
    goToPage(link) {
      this.isOpen = false;
      this.$router.push({ path: link });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";
.navbar {
  // position: fixed;
  z-index: 2;
  top: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
  // position: sticky;
  padding: 0.75rem 0.5rem;
  // background: color(bg);
}
.navbar-brand {
  align-self: center;
  @extend %heading;
  font-size: 26px;
  color: $primary;
}
.nav-link {
  @extend %heading;
  font-size: 26px;
  color: $primary;
  margin-bottom: 0.25rem;
}
.menu-button {
  text-align: right;
}
.nav-links {
  padding: 0.5rem 0;
  background: color(bg);
  grid-column: 1 / span 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;
  text-transform: uppercase;
}
.closed {
  .navlinks {
    display: none;
  }
}
button {
  text-align: right;
  margin: 0;
  padding: 0;
}
.nav-link:active {
  color: $secondary;
}
.menu-button {
  align-self: center;
  line {
    fill: none;
    stroke: color(secondary);
    stroke-width: 4px;
  }
}
.hidden {
  display: none;
}
</style>
