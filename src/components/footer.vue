<template>
	<div class="layout-footer">
		<img alt="Logo" :src="$store.state.master.logo_app" height="20" class="mr-2" />
		by
		<span class="font-medium ml-2">{{$store.state.master.name_app}}</span>
	</div>
</template>

<script>
	export default {
		name: "AppFooter",
		methods: {
		},
		computed: {
			darkTheme() {
				return this.$appState.darkTheme;
			}
		}
	}
</script>