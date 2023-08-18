<template>
	<div :class="containerClass" @click="onWrapperClick">
    <!-- <ConfirmDialog /> -->
    <ConfirmDialog>
      <template #message="slotProps">
        <div class="flex">
          <i v-if="slotProps.message.icon" :class="slotProps.message.icon" style="font-size: 1.5rem" class="mr-2"></i>
          <p class="mx-1">{{ slotProps.message.message }}</p>
        </div>
      </template>
    </ConfirmDialog>
    <AppTopBar @menu-toggle="onMenuToggle" />
    <div class="layout-sidebar" @click="onSidebarClick">
      <AppMenu :model="menu" @menuitem-click="onMenuItemClick" />
    </div>
    <div class="layout-main-container">
      <div class="mb-3">
        <AppBreadcrumb />
      </div>
      <div class="layout-main">
        <router-view />
      </div>
      <AppFooter />
    </div>
		<AppConfig :layoutMode="layoutMode" @layout-change="onLayoutChange" />
    <transition name="layout-mask">
      <div class="layout-mask p-component-overlay" v-if="mobileMenuActive"></div>
    </transition>
	</div>
</template>

<script>
import AppTopBar from './components/header.vue';
import AppMenu from './components/sidebarLeft.vue';
import AppConfig from './components/sidebarRight.vue';
import AppFooter from './components/footer.vue';
import AppBreadcrumb from './components/breadcrumb.vue';

export default {
  emits: ['change-theme'],
  data() {
    return {
      layoutMode: 'static',
      staticMenuInactive: false,
      overlayMenuActive: false,
      mobileMenuActive: false,
      menu : [
        {
          label: 'SAKAI',
          items: [
            { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/dashboard' },
          ]
        },
        {
          label: 'Master',
          // role: [ 'superuser' ],
          items: [
            { label: 'Sample', icon: 'pi pi-fw pi-circle', to: '/sample' },
          ]
        },
        // {
        //   label: 'Pages', icon: 'pi pi-fw pi-clone',
        //   items: [
        //     {label: 'Login', icon: 'pi pi-fw pi-sign-in', to: '/login'},
        //     {label: 'Error', icon: 'pi pi-fw pi-times-circle', to: '/error'},
        //     {label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', to: '/notfound'},
        //     {label: 'Access Denied', icon: 'pi pi-fw pi-lock', to: '/access'},
        //   ]
        // },

        // {
        //   label: 'Menu Hierarchy', icon: 'pi pi-fw pi-search',
        //   items: [
        //     {
        //       label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
        //       items: [
        //         {
        //           label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
        //           items: [
        //             {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark'},
        //             {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark', role: [ 'superuser' ],},
        //             {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark'},
        //           ]
        //         },
        //       ]
        //     },
        //   ]
        // },
      ]
    }
  },
  watch: {
    $route() {
      this.menuActive = false;
      this.$toast.removeAllGroups();
    }
  },
  async mounted() {
    const vm = this
    vm.menu = await vm.filterMenu(vm.menu)
  },
  methods: {
    async filterMenu(data){
      const vm = this
      const res = []
      //items
      for (let i = 0; i < data.length; i++) {
        const x = data[i];
        let akses = true
        //role
        if(x.role){
          akses = false
          for (let u = 0; u < x.role.length; u++) {
            const y = x.role[u];
            if(y == vm.role){
              akses = true
            }
          }
        }
        if(akses){
          if(x.items) x.items = await vm.filterMenu(x.items)
          res.push(x)
        }
      }
      return res
    },
    onWrapperClick() {
      if (!this.menuClick) {
        this.overlayMenuActive = false;
        this.mobileMenuActive = false;
      } 
      this.menuClick = false;
    },
    onMenuToggle() {
      this.menuClick = true; 
      if (this.isDesktop()) {
        if (this.layoutMode === 'overlay') {
          if(this.mobileMenuActive === true) {
            this.overlayMenuActive = true;
          } 
          this.overlayMenuActive = !this.overlayMenuActive;
          this.mobileMenuActive = false;
        } else if (this.layoutMode === 'static') {
          this.staticMenuInactive = !this.staticMenuInactive;
        }
      } else {
        this.mobileMenuActive = !this.mobileMenuActive;
      } 
      event.preventDefault();
    },
    onSidebarClick() {
      this.menuClick = true;
    },
    onMenuItemClick(event) {
      if (event.item && !event.item.items) {
        this.overlayMenuActive = false;
        this.mobileMenuActive = false;
      }
    },
    onLayoutChange(layoutMode) {
      this.layoutMode = layoutMode;
    },
    addClass(element, className) {
      if (element.classList)
        element.classList.add(className);
      else
        element.className += ' ' + className;
    },
    removeClass(element, className) {
      if (element.classList)
        element.classList.remove(className);
      else
        element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    },
    isDesktop() {
      return window.innerWidth >= 992;
    },
    isSidebarVisible() {
      if (this.isDesktop()) {
        if (this.layoutMode === 'static'){
          return !this.staticMenuInactive;
        } else if (this.layoutMode === 'overlay'){
          return this.overlayMenuActive;
        }
      }
      return true;
    }
  },
  computed: {
    role(){
      return this.$store.state.login.role
    },
    containerClass() {
      return ['layout-wrapper', {
        'layout-overlay': this.layoutMode === 'overlay',
        'layout-static': this.layoutMode === 'static',
        'layout-static-sidebar-inactive': this.staticMenuInactive && this.layoutMode === 'static',
        'layout-overlay-sidebar-active': this.overlayMenuActive && this.layoutMode === 'overlay',
        'layout-mobile-sidebar-active': this.mobileMenuActive,
        'p-input-filled': this.$primevue.config.inputStyle === 'filled',
        'p-ripple-disabled': this.$primevue.config.ripple === false
      }];
    },
    logo() {
      return (this.$appState.darkTheme) ? "images/logo-white.svg" : "images/logo.svg";
    }
  },
  beforeUpdate() {
    if (this.mobileMenuActive)
      this.addClass(document.body, 'body-overflow-hidden');
    else
      this.removeClass(document.body, 'body-overflow-hidden');
  },
  components: {
    'AppTopBar': AppTopBar,
    'AppMenu': AppMenu,
    'AppConfig': AppConfig,
    'AppFooter': AppFooter,
    'AppBreadcrumb': AppBreadcrumb,
  }
}
</script>

<style lang="scss">
@import './App.scss';
</style>
