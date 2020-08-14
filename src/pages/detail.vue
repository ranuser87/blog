<template>
	<entry :options="entryOptions"></entry>
</template>

<script>
	import Entry from "@/components/entry/entry.vue";

	import { mapGetters } from 'vuex';

	export default {
		name:"Detail",
		components: {
			Entry
		},
		data:function() {
			return {
				entryOptions: null
			}
		},
		computed:{
			...mapGetters([
				"getEntryById"
			])
		},
		created() {
			let entryId = this.$route.params.id;
			this.entryOptions = this.getEntryById(entryId);
		}
	}
</script>