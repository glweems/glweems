<template>
  <div class="card">
    <div class="titles">
      <h3 v-if="title">{{ title }}</h3>
      <p v-if="subtitle">{{ subtitle }}</p>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["title", "subtitle"]
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";
h3 {
  font-size: 20px;
  color: color(muted);
  font-style: italic;
}
p {
  color: color(muted);
}
.titles {
  margin-bottom: 1rem;
}
.card {
  margin: 1rem 0;
}
img {
  width: 100%;
}
</style>
