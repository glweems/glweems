<template>
  <div class="container-fluid">
    <h1>Graphic Design</h1>
    <Card
      v-for="(design, index) in designs"
      :key="index"
      :title="design.title"
      :subtitle="design.description"
    >
      <img :src="design.src" />
    </Card>
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "Designs",
  components: {
    Card
  },
  data() {
    return {
      designs: [
        {
          title: "Organic VS Geometric",
          link: "https://www.behance.net/gallery/50768561/Organic-VS-Geometric",
          src:
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b9d60f50768561.58d92e9688c0a.jpg",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
          title: "Company Artwork",
          link: "https://www.behance.net/gallery/59400101/Company-Artwork",
          src:
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/c9b27159400101.5a206eaac85ee.png",
          description: ""
        },
        {
          title: "Blanton Fun-Run T-Shirt Design.",
          link:
            "https://www.behance.net/gallery/47274017/Peace-and-Love-Fun-Run-T-Shirt-Design",
          src:
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/1528e247274017.58757c001ca75.jpg",
          description: ""
        },
        {
          title: "McMath Athletics T-Shirt Design",
          link:
            "https://www.behance.net/gallery/48973673/McMath-Athletics-T-Shirt-Design",
          src:
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/71e06c48973673.58a7053d87440.jpg",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
          title: "",
          link: "",
          src: "",
          description: ""
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

img {
  margin: 0 auto;
  border-radius: 3px;
}
</style>
