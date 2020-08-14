<template>
	<div class="speech__unit">
		<div class="speech__content">
			<div class="speech__author">
				{{options.author}}
			</div>
			<div class="speech__description">
				{{options.description}}
			</div>
		</div>
		<input class="speech__control" type="checkbox" name="commentsToRemove[]" :value="options.id">
	</div>
</template>

<script>
	export default {
		name: "EditorComments",
		props:{
			options: Object
		}
	}
</script>

<style scoped lang="scss">
	.speech {
		&__unit {
			display: flex;
			align-items: center;
		}

		&__content {
			max-width: calc(100% - 60px);
		}

		&__author {
			font-weight: bold;
		}

		&__control {
			margin: 0 0 0 auto;
			cursor: pointer;
		}
	}
</style>