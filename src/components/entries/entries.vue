<template>
	<div class="entries">
		<p v-if="isEmpty">
			У вас нет ни одной записи. Добавьте, используя кнопку в
			правом нижнем углу экрана.
		</p>
		<ul class="entries__list" v-else>
			<li class="entries__unit" :key="entry.id" v-for="entry in entries">
				<entries-item
					:options="entry"
					@openEditor="openEditor"
					@removeEntry="removeEntry"
				></entries-item>
			</li>
		</ul>
		<button class="entries__add" @click="openEditorInAddMode"></button>
		<popup ref="popup" @dataReady="saveData"></popup>
	</div>
</template>

<script>
import Popup from "./../popup/popup.vue";
import EntriesItem from "./entriesItem.vue";

import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
	name: "Entries",
	components: {
		Popup,
		EntriesItem,
	},
	computed: {
		...mapGetters(["entries"]),
		isEmpty() {
			return this.entries.length < 1;
		},
	},
	methods: {
		...mapMutations(["addEntry", "editEntry", "removeEntry", "addComment"]),
		openEditor(editorOptions) {
			this.$refs.popup.activate("Editor", editorOptions);
		},
		openEditorInAddMode() {
			this.$refs.popup.activate("Editor", {
				mode: "addEntry"
			});
		},
		saveData(action, data) {
			this[action](data);
			this.$refs.popup.deactivate();
		},
	},
};
</script>

<style scoped lang="scss">
	.entries {
		&__add {
			position: fixed;
			right: 20px;
			bottom: 20px;
			width: 40px;
			height: 40px;
			border: 0;
			cursor: pointer;
			background: url("./../../assets/plus.svg") no-repeat top left / 100%
				100%;
			transition: opacity 0.2s;
			
			&:hover {
				opacity: 0.8;
			}
		}

		&__list {
			margin: 0 0 20px;
			padding: 0;
			max-width: 600px;
			list-style-type: none;
		}

		&__unit {
			margin: 0 0 20px;
		}
	}
</style>
