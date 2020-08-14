<template>
	<section class="entries__item snippet">
		<div class="snippet__headline">
			<h2 class="snippet__title">
				<router-link :to="`/detail/${options.id}`">
					{{options.title}}
				</router-link>
			</h2>
			<div class="snippet__interface">
				<button class="snippet__control snippet__control_edit" @click="editEntry"></button>
				<button class="snippet__control snippet__control_remove" @click="removeEntry"></button>
			</div>
		</div>
		<div class="snippet__description" v-html="options.shortDescription"></div>
		<div v-if="commentsExists">
			Комментарии: 
			<span class="snippet__comments-value">{{options.comments.length}}</span>
		</div>
	</section>
</template>

<script>
	export default {
		name: "EntriesItem",
		props: {
			options: Object
		},
		computed:{
			commentsExists() {
				return this.options.comments.length > 0;
			}
		},
		methods:{
			showDetail() {
				this.$emit("showDetail", this.options);
			},
			editEntry() {
				let editorOptions = Object.assign({}, {mode: "editEntry"}, this.options);
				this.$emit("openEditor", editorOptions);	
			},
			removeEntry() {
				this.$emit("removeEntry", this.options.id);
			}
		}
	}
</script>

<style scoped lang="scss">
	.snippet {
		&__headline {
			display: flex;
			flex-wrap: wrap;
			margin: 0 0 10px;
		}

		&__title {
			margin: 0;
		}

		&__interface {
			display: flex;
			align-items: center;
			margin: 8px 0 0 auto;
		}

		&__control {
			width: 20px;
			height: 20px;
			border: 0;
			margin: 0 0 0 10px;
			cursor: pointer;

			&:hover {
				opacity: 0.8;
			}

			&_edit {
				background: url("./../../assets/pencil.svg") top left / 100% 100% no-repeat;
			}

			&_remove {
				background: url("./../../assets/delete.svg") top left / 100% 100% no-repeat;
			}
		}

		&__description {
			margin: 0 0 10px;
		}

		&__comments {
			&-value {
				font-weight: bold;
			}
		}
	}
</style>