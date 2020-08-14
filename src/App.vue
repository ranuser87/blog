<template>
	<div id="app" class="app">
		<div class="container">
			<h1>Blog</h1>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import Entries from "./components/entries/entries.vue";
import "formdata-polyfill/formdata.min.js"

export default {
	name: "App"
};
</script>

<style lang="scss">

	*, *:before, *:after {
		box-sizing: border-box;
		outline: 0;
	}

	body {
		margin: 0;
		padding: 0 0 80px;
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		line-height: $baseLineHeight;
		color: #2c3e50;
	}

	.app {
		margin-top: 60px;
	}

	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 0 20px;
	}

	h1,
	h2,
	h3,
	h4 {
		a {
			font-size: $baseFontSize;
		}
	}

	h1 {
		margin: 0 0 20px;
	}

	h2 {
		margin: 0 0 15px;
	}

	h3, 
	h4 {
		margin: 0 0 10px;	
	}

	p {
		margin: 0 0 20px;
	}

	a,
	.pseudo-link {
		color: inherit;
		text-decoration: underline;

		&:hover {
			text-decoration: none;
		}
	}

	.pseudo-link {
		&button {
			border: 0;	
		}
	}

	.return {
		display: inline-block;
		margin: 0 0 20px;
	}

	.request {
		margin: 0 0 10px;

		&__item {
			margin: 20px 0 0;

			&:not(:last-child) {
				margin: 0 0 10px;
			}
		}

		&__subtitle {
			display: inline-block;
			margin: 0 0 5px;
		}

		&__field,
		&__textspace {
			width: 100%;
			padding: 10px;
			font-family: inherit;
			font-size: inherit;
		}

		&__field {
			height: 35px;
		}

		&__textspace {
			min-height: 100px;
			resize: vertical;
		}
	}
</style>
