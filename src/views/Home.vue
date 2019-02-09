<template>
	<div id="home-page" class="container">
		<div class="titles">
			<h1>Hi, I'm Garrett.</h1>
			<h2>I'm a Designer / Web Developer.</h2>
		</div>
		<div class="email link">
			<h3>Give me a shout</h3>
			<a :href="email.href">
				<object :data="email.icon" type="image/svg+xml"></object>
				{{ email.name }}
			</a>
		</div>
		<div class="links">
			<h3>Find me on the web.</h3>
			<ul>
				<li v-for="(link, index) in links" :key="index" class="link">
					<a :href="link.href">
						<object :data="link.icon" type="image/svg+xml"></object>
						{{ link.name }}
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "home",
	data() {
		return {
			email: {
				name: "gwgraphicdesign@gmail.com",
				href: "mailto:gwgraphicdesign@gmail.com",
				icon: require("../assets/envelope-open-text.svg")
			},
			links: [
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
	@import "@/scss/app.scss";
	#home-page {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		height: 70vh;
	}
	span {
		color: color(primary);
	}
	h3 {
		margin-bottom: 1rem;
		color: color(muted);
	}
	h1 {
		size: 46px;
		margin-bottom: 1.25rem;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		li {
			display: inline-block;
			margin-bottom: 1rem;
			a {
				margin-right: 1em;
			}
		}
	}
	a {
		display: flex;
		align-items: center;
		padding: 0 0.25rem;
		font-family: $font-family-heading;
		font-style: italic;
		font-weight: 500;
	}
	object {
		margin-right: 1rem;
		align-self: center;
		height: 22px;
	}
	a {
	}
</style>