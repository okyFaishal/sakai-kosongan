<template>
  <div class="">
    <Button 
      label=""
      class=""
      size="small"
      severity="warning"
      icon="pi pi-pencil"
      @click="openModal()"
      v-tooltip.left="`Update`"
    />
    <Dialog 
      v-model:visible="visible" 
      :modal="true" 
      class="p-fluid" 
      header="Update" 
      :breakpoints="{ '960px': '80vw' }" 
      :style="{ width: '50vw' }" 
      @hide="hideModal()"
    >
      <div class="" style="">
        <div class="flex flex-column gap-2">
          <label for="name">Nama</label>
          <InputText 
            id="name" 
            v-model="dataForm.name" 
            aria-describedby="name-help" 
            :class="{'p-invalid': v$.dataForm.name.$invalid}"
          />
        </div>
      </div>
      <template #footer>
        <div class="flex justify-content-end">
          <Button 
            label="Save"
            class=""
            size="small"
            :disabled="!isValid && !isDirty"
            v-tooltip.left="`save`"
            @click="submit()"
          />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
export default {
  props: [ 'data' ],
  emits: [ 'refresh' ],
  components: {
  },
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      visible: false,
      dataForm: {
        name: null,
      },
    };
  },
  computed: {
    isValid() {
      return !this.v$.dataForm.$invalid;
    },
    isDirty() {
      return this.v$.dataForm.$anyDirty;
    },
  },
  validations () {
    return {
      dataForm: { 
        name: { required },  
      }
    }
  },
  mounted() {
  },
  methods: {
    openModal(){
      const vm = this
      vm.visible = true
      vm.dataForm = JSON.parse(JSON.stringify(vm.data))
      vm.v$.$reset();
    },
    hideModal(){
      const vm = this
      vm.visible = false
    },
    async submit(){
      const vm = this
      // const res = await vm.$axios.put('sample/updateSample', vm.dataForm)
        const res = {
          data: {
            status: 200,
          }
        }
        // console.log('res', res)
      if(res.data.status == 200){
        vm.$emit('refresh')
        vm.$toast.add({ severity: 'success', summary: 'Konfirmasi', detail: 'Berhasil Mengubah', life: 3000 });
        vm.visible = false
      }else{
        vm.$toast.add({ severity: 'error', summary: 'Konfirmasi', detail: 'Gagal Mengubah', life: 3000 });
      }
    },
  },
};
</script>