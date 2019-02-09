<template>
	<div class="codepen">
		<iframe
			height="500"
			style="width: 100%;"
			scrolling="no"
			:title="title"
			:src="src + theme.dark"
			frameborder="no"
			allowfullscreen="true"
		>
			See the Pen
			<a :href="href">Vue List Toggle Component</a> by Garrett Weems
			(
			<a href="https://codepen.io/glweems">@glweems</a>) on
			<a href="https://codepen.io">CodePen</a>.
		</iframe>
	</div>
</template>

<script>
export default {
	name: "CodePen",
	props: ["title", "src", "href"],
	data() {
		return {
			theme: {
				dark: "?theme-id=dark"
			}
		};
	}
};
</script>

<style lang="scss" scoped>
	@import "@/scss/app.scss";
	#the-body {
		border: none;
	}
	.container {
		width: 100%;
		background: #666666;
		border-radius: 3px;
	}
</style>


