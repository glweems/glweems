<template>
	<div class="container">
		<h1>Give me a shout.</h1>

		<ul>
			<li v-for="(link, index) in links" :key="index">
				<object :data="link.icon" type="image/svg+xml"></object>
				<a :href="link.href">{{ link.name }}</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			links: [
				{
					name: "gwgraphicdesign@gmail.com",
					href: "mailto:gwgraphicdesign@gmail.com",
					icon: require("../assets/envelope-open-text.svg")
				},
				{
					name: "GitHub",
					href: "https://github.com/glweems",
					icon: require("@/assets/github-alt.svg")
				},
				{
					name: "Behance",
					href: "https://www.behance.net/glweems",
					icon: require("@/assets/behance.svg")
				},
				{
					name: "CodePen",
					href: "https://codepen.io/glweems",
					icon: require("@/assets/codepen.svg")
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
	h1 {
		margin-bottom: 2rem;
	}
	ul {
		display: block;
		list-style-type: none;
	}
	li {
		display: flex;
		align-items: center;
		padding: 0 0.25rem;
	}
	a {
		align-self: center;
	}
	object {
		margin-right: 1rem;
		align-self: center;
		height: 22px;
	}
</style>

