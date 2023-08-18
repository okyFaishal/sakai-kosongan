<template>
  <div class="surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
    <div class="grid justify-content-center p-2 lg:p-0" style="min-width:80%">
      <div class="col-12 mt-5 xl:mt-0">
        <div class="text-center mb-5">
          <img :src="$store.state.master.logo_app" alt="Sakai logo" class="mb-5" style="width: 100px;">
          <div class="text-900 text-3xl font-medium mb-0">{{$store.state.master.name_app}}</div>
          <!-- <span class="text-600 font-medium">Sign in to continue</span> -->
        </div>
      </div>
      <div class="col-12 xl:col-6" style="border-radius:56px; padding:0.3rem; background: linear-gradient(180deg, var(--primary-color), rgba(33, 150, 243, 0) 30%);">
        <div class="h-full w-full m-0 py-7 px-4" style="border-radius:53px; background: linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0));">
          <div class="w-full md:w-10 mx-auto">
            <label for="email1" class="block text-900 text-xl font-medium mb-2">Username</label>
            <InputText 
              id="email1" 
              v-model="data.username" 
              type="text" 
              class="w-full mb-3" 
              placeholder="Username" 
              style="padding:1rem;" 
              @keydown.enter="login()"
            />
            <label for="password1" class="block text-900 font-medium text-xl mb-2">Password</label>
            <Password 
              id="password1" 
              v-model="data.password" 
              placeholder="Password" 
              :toggleMask="true" 
              class="w-full mb-3" 
              inputClass="w-full" 
              :feedback="false"
              @keydown.enter="login()"
            ></Password>
            <Button label="Sign In" class="w-full p-3 text-xl" @click="login()"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        // username: 'ppid_admin',
        // password: 'ppid_admin',
        username: null,
        password: null,
      },
    }
  },
  computed: {
  },
  mounted() {
  },
  methods: {
    async login(){
      const vm = this
      const res = await vm.$axios.post('users/login', vm.data)
      console.log('res', res)
      if(res.data && res.data.length){
        vm.$store.commit("login", res.data[0])
        vm.$router.push('/dashboard')
        vm.$toast.add({ severity: 'success', summary: 'Konfirmasi', detail: 'Berhasil Login', life: 3000 });
      }else{
        vm.$toast.add({ severity: 'error', summary: 'Konfirmasi', detail: res.data.message, life: 3000 });
      }
      // ppid_admin
      console.log(vm.$store.state)
    }
  },
}
</script>

<style scoped>
/* .pi-eye {
  transform:scale(1.6);
  margin-right: 1rem;
}
.pi-eye-slash {
  transform:scale(1.6);
  margin-right: 1rem;
} */
</style>