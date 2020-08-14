<template>
	<div class="comments__item">
		<div class="comments__text">
			{{options.description}}
		</div>
		<div class="comments__author">
			{{options.author}}
		</div>
	</div>
</template>

<script>
	export default {
		name:"CommentsItem",
		props:{
			options: Object
		}
	}
</script>

<style scoped lang="scss">
	.comments {
		&__item {
			margin: 0 0 10px;
		}

		&__text {
			margin: 0 0 5px;
		}

		&__author {
			font-style: italic;
		}
	}
</style>