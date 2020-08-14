<template>
	<section class="speech">
		<h3>Комментарии</h3>
		<div class="speech__note">
			Удалить?
		</div>
		<ul class="speech__list">
			<li class="speech__item" :key="comment.id" v-for="comment in items">
				<editor-comments-item :options="comment"></editor-comments-item>	
			</li>
		</ul>	
	</section>
</template>

<script>
	import EditorCommentsItem from "./editorCommentsItem.vue";

	export default {
		name: "EditorComments",
		components:{
			EditorCommentsItem
		},
		props: {
			items: Array
		}
	}
</script>

<style scoped lang="scss">
	.speech {

		&__note {
			font-size: 13px;
			text-align: right;
		}

		&__list {
			margin: 0;
			padding: 0;
			list-style-type: none;
		}

		&__item {
			margin: 0 0 10px;
		}
	}
</style>