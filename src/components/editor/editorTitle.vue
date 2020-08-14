<template>
	<h2>
		{{title}}
	</h2>
</template>

<script>
	export default {
		name: "EditorTitle",
		props:{
			mode: String
		},
		computed:{
			title() {
				let title;
				
				switch(this.mode) {
					case "addEntry":
						title = "Добавить запись";
						break;
					case "editEntry":
						title = "Редактировать запись";
						break;
					default:
						title = "Редактор";	
				}

				return title;
			}
		}
	}
</script>