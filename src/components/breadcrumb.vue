<template>
	<Breadcrumb :model="breadcrumb" />
</template>

<script>
	export default {
		name: "AppFooter",
		data() {
      return {
      }
		},
		computed: {
      breadcrumb(){
        const vm = this
        const items = []
        if (vm.$route.matched) {
          for (let i = 0; i < vm.$route.matched.length; i++) {
            const x = vm.$route.matched[i];
            items.push({ label: x.name, to: x.path })
          }
        }
        return items
      }
		},
    watch: {
    },
    mounted() {
    },
	}
</script>