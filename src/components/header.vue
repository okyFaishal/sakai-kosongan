<template>
	<div class="layout-topbar">
		<router-link to="/" class="layout-topbar-logo">
			<img alt="Logo" :src="$store.state.master.logo_app" />
			<span>{{$store.state.master.name_app}}</span>
		</router-link>
		<button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle">
			<i class="pi pi-bars"></i>
		</button>
		<button class="p-link layout-topbar-menu-button layout-topbar-button"
			v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', 
			leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true}">
			<i class="pi pi-ellipsis-v"></i>
		</button>
		<ul class="layout-topbar-menu hidden lg:flex origin-top">
			<li v-if="$store.state.login">
				<Button class="w-full md-0 lg:mb-0 sm:mb-3" text>
					<div class="mt-0">{{$store.state.login.username}}</div>
					<!-- <div>{{$store.state.login.nip || 'nip'}}</div> -->
				</Button>
			</li>
			<li v-if="$store.state.login && $store.state.login.foto_user">
				<div class="h-full w-full flex justify-content-center align-content-center flex-wrap">
					<img :src="$store.state.ipBackend + $store.state.login.foto_user" alt="Sakai logo" class="w-3rem lg:w-3rem sm:w-6rem">
				</div>
			</li>
			<!-- <li>
				<button class="p-link layout-topbar-button">
					<i class="pi pi-user"></i>
					<span>Profile</span>
				</button>
			</li> -->
			<li>
				<div class="ml-2 flex justify-content-end">
					<Button icon="pi pi-sign-out" severity="secondary"  text raised rounded aria-label="Logout" v-tooltip.left="`Logout`" @click="logout()"/>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	computed: {
		darkTheme() {
			return this.$appState.darkTheme;
		}
	},
	methods: {
		async logout(){
			const vm = this
			vm.$confirm.require({
				message: 'Apakah anda yakin ingin logout??',
				header: 'Konfirmasi',
				acceptLabel: 'logout',
				accept: async () => {
					vm.$toast.add({ summary: 'Konfirmasi', detail: 'Berhasil Logout', life: 3000 })
					await new Promise(resolve => setTimeout(resolve, 100));
					vm.$store.commit("logout")
					vm.$router.push('/login')
				}
			});
		},
		onMenuToggle(event) {
			this.$emit('menu-toggle', event);
		},
		onTopbarMenuToggle(event) {
			this.$emit('topbar-menu-toggle', event);
		},
		topbarImage() {
			return this.$appState.darkTheme ? 'images/logo-white.svg' : 'images/logo-dark.svg';
		}
	},
}
</script>