<template>
	<aside class="popup" :style="{ top: topOffset }" v-if="active">
		<div class="popup__overlay" @click="deactivate"></div>
		<div class="popup__box">
			<button class="popup__close" @click="deactivate"></button>
			<component
				v-if="innerTemplate"
				:is="innerTemplate"
				:options="innerTemplateOptions"
				@dataReady="notify"
			>
			</component>
		</div>
	</aside>
</template>

<script>
import PageScroll from "./../../utils/pageScroll";
import Editor from "./../editor/editor.vue";

let pageScroll;

export default {
	name: "Popup",
	components: {
		Editor,
	},
	data() {
		return {
			active: false,
			topOffset: "",
			innerTemplate: "",
			innerTemplateOptions: "",
		};
	},
	watch: {
		active(value) {
			if (value) {
				pageScroll.lock();
				this.topOffset = `${pageScroll.getCachedScrollTop()}px`;
			} else {
				pageScroll.unlock();
			}
		},
	},
	mounted() {
		pageScroll = new PageScroll().init();
	},
	methods: {
		activate(innerTemplate, innerTemplateOptions) {
			this.active = true;
			this.innerTemplate = innerTemplate;
			this.innerTemplateOptions = innerTemplateOptions;
		},
		deactivate() {
			this.active = false;
			this.innerTemplate = "";
			this.innerTemplateProps = "";
		},
		notify(action, data) {
			this.$emit("dataReady", action, data);
		},
	},
};
</script>

<style lang="scss">
.popup {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.6);
	padding: 20px;

	&__overlay {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	&__close {
		position: absolute;
		top: 10px;
		right: 10px;
		width: 20px;
		height: 20px;
		border: 0;
		border-color: transparent;
		background: url("./../../assets/delete.svg") top left / 100% 100% no-repeat transparent;
		cursor: pointer;
	}

	&__box {
		position: relative;
		width: 100%;
		max-width: 600px;
		padding: 38px 20px 20px 20px;
		max-height: calc(100vh - 40px);
		overflow: auto;
		background: #fff;
	}

	&__title {
		font-size: 20px;
		line-height: 1.2;
		font-weight: 500;
		margin: 0 0 10px;
	}

	&__picture {
		margin: 0 0 10px;
	}

	&__description {
		font-size: 18px;
	}
}
</style>
