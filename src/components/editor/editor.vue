<template>
	<form ref="form" class="request" @submit.prevent="notify">
		<input v-if="options.id" type="hidden" name="id" :value="options.id">
		<editor-title :mode="options.mode"></editor-title>
		<div class="request__item">
			<label class="request__subtitle" for="title">Заголовок</label>
			<input class="request__field" type="text" name="title" id="title" :value="options.title" required>
		</div>
		<div class="request__item">
			<label class="request__subtitle" for="shortDescription">Краткое описание</label>
			<textarea class="request__textspace" name="shortDescription" id="shortDescription" :value="options.shortDescription" required></textarea>
		</div>
		<div class="request__item">
			<label class="request__subtitle" for="longDescription">Полное описание</label>
			<textarea class="request__textspace" name="longDescription" id="longDescription" :value="options.longDescription" required></textarea>
		</div>
		<editor-comments v-if="commentsExists" :items="options.comments"></editor-comments>
		<div class="request__item">
			<button>Сохранить</button>
		</div>
	</form>
</template>

<script>
import EditorTitle from "./editorTitle.vue";
import EditorComments from "./comments/editorComments.vue";

export default {
	name: "Editor",
	components:{
		EditorTitle,
		EditorComments
	},
	props:{
		options: Object
	},
	computed:{
		commentsExists() {
			return this.options.comments && this.options.comments.length > 0;
		}
	},
	methods:{
		notify() {
			let formData = new FormData(this.$refs.form);
			this.$emit("dataReady", this.options.mode, formData);
		}
	}
}
</script>