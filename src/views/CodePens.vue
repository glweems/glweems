<template>
  <div class="container">
    <Card v-for="(pen, index) in pens" :key="index" :title="pen.title">
      <code-pen :title="pen.title" :src="pen.src" :link="pen.link"></code-pen>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import CodePen from "@/components/CodePen.vue";
export default {
  name: "CodePens",
  components: {
    CodePen,
    Card
  },
  data() {
    return {
      pens: [
        {
          title: "Card Design With Image",
          src: "//codepen.io/glweems/embed/EGzrdR/",
          href: "https://codepen.io/glweems/pen/EGzrdR/"
        },
        {
          title: "Vue.js List Component",
          src: "//codepen.io/glweems/embed/VqgMNP/",
          href: "https://codepen.io/glweems/pen/VqgMNP/"
        },
        {
          title: "Vue.js List Component",
          src: "//codepen.io/glweems/embed/JZgpPr/",
          href: "https://codepen.io/glweems/pen/JZgpPr/"
        }
      ]
    };
  }
};
</script>
