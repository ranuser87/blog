<template>
	<div class="detail__comments comments">
		<h4>Комментарии</h4>
		<ul class="comments__list">
			<li v-for="item in items" :key="item.id" >
				<entry-comments-item  :options="item">
				</entry-comments-item>
			</li>
		</ul> 
	</div>
</template>

<script>
	import EntryCommentsItem from "./entryCommentsItem.vue";

	export default {
		name: "Comments", 
		components:{
			EntryCommentsItem
		},
		props:{
			items: Array
		}
	}
</script>

<style scoped lang="scss">
	.comments {
		&__list {
			margin: 0 0 20px;
			padding: 0;
			list-style-type: none;
		}
	}
</style>