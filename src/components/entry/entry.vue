<template>
	<article class="detail">
		<router-link class="return" to="/">
			На главную
		</router-link>
		<h3>
			{{this.options.title}}
		</h3>
		<div class="detail__description" v-html="this.options.longDescription"></div>
		<entry-comments v-if="this.options.comments"
					:items="this.options.comments"
		></entry-comments>
		<entry-comments-form
					:id="this.options.id"
					@dataReady="addCommentToStore"
		></entry-comments-form>
	</article>
</template>

<script>
	import EntryComments from "./comments/entryComments.vue";
	import EntryCommentsForm from "./comments/entryCommentsForm.vue";

	import {mapMutations} from "vuex";

	export default {
		name: "Detail",
		components:{
			EntryComments,
			EntryCommentsForm
		},
		props:{
			options: Object
		},
		methods:{
			...mapMutations({
				addCommentToStore: "addComment"
			})
		}
	}
</script>

<style scoped lang="scss">
	.detail {
		&__description {
			margin: 0 0 20px;
		}
	}
</style>