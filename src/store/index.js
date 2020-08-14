import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import {createUniqueId} from "@/utils/helpers";

Vue.use(Vuex);

import "core-js/modules/es.array.includes"

export default new Vuex.Store({
	plugins: [
		createPersistedState({
			key: "blog"
		}),
	],
	state: {
		"entries":[]
	},
	getters: {
		entries: function(state) {
			return state.entries;
		},
		getEntryById: function(state, id) {
			return function(id) {
				let targetEntry;
				for(var i = 0; i < state.entries.length; i++) {
					let entry = state.entries[i];
					if(entry.id == id) {
						targetEntry = entry;
						break;
					}
				}
				return targetEntry;
			}
		}
	},
	mutations: {
		addEntry(state, data) {
			let newEntry = {
				id: createUniqueId(),
				comments: []
			};
			for(let pair of data.entries()) {
				let key = pair[0];
				let value = pair[1];
				newEntry[key] = value;
			}
			state.entries.push(newEntry);		
		},
		editEntry(state, data) {
			let entryId = data.get("id");
			let targetEntry = this.getters.getEntryById(entryId);
			for(let pair of data.entries()) {
				let key = pair[0];
				let value = pair[1];
				if(key === "commentsToRemove[]") {
					let rejectedCommentsIds = data.getAll("commentsToRemove[]");
					for(let i = 0; i < targetEntry.comments.length; i++) {
						let comment = targetEntry.comments[i];
						if(rejectedCommentsIds.includes(comment.id)) {
							targetEntry.comments.splice(i, 1);	
						}
					}
				} else {
					targetEntry[key] = value;
				}
			}
		},
		removeEntry(state, id) {
			let entryIndex;
			for(var i = 0; i < state.entries.length; i++) {
				let entry = state.entries[i];
				if(entry.id === id) {
					entryIndex = i;
					break;
				}
			}
			state.entries.splice(entryIndex, 1);
		},
		addComment(state, data) {
			let newComment = {
				id: createUniqueId()
			};
			for(let pair of data.entries()) {
				let key = pair[0];
				let value = pair[1];
				newComment[key] = value;
			}

			let entryId = data.get("entryId");
			let targetEntry = this.getters.getEntryById(entryId);
			if(targetEntry.comments) {
				targetEntry.comments.push(newComment);	
			} else {
				targetEntry.comments = [newComment];
			}
		}
	},
	actions: {},
	modules: {},
});
