<template>
	<form ref="form" class="detail__request request" @submit.prevent="notify">
		<input type="hidden" name="entryId" :value="id">
		<div class="request__item">
			<label class="request__subtitle" for="author">Ваше имя</label>
			<input class="request__field" type="text" name="author" id="author" required>
		</div>
		<div class="request__item">
			<label class="request__subtitle" for="description">Комментарий</label>
			<textarea class="request__textspace" name="description" id="description" required></textarea>
		</div>
		<div class="request__item">
			<button :disabled="inactive">Отправить</button>
		</div>
	</form>
</template>

<script>
	export default {
		name: "CommentsForm",
		props:{
			id: [String, Number]
		},
		data: function() {
			return {
				inactive: false,
				timer: null
			}
		},
		methods:{
			notify() {
				let formData = new FormData(this.$refs.form);
				this.$emit("dataReady", formData);
				this.inactive = true;
				clearTimeout(this.timer);
				setTimeout(()=>{
					this.inactive = false;
				}, 2000);
			}
		},
		beforeDestroy() {
			clearTimeout(this.timer);
		}
	}
</script>

<style scoped lang="scss">
	.detail {
		&__request {
			max-width: 400px;
		}
	}
</style>