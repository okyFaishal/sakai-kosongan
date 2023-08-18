<template>
  <div class="">
    <Button 
      label="Add"
      class="mb-4"
      size="small"
      icon="pi pi-plus"
      @click="openModal()"
      v-tooltip.left="`Add`"
    />
    <Dialog 
      v-model:visible="visible" 
      :modal="true" 
      class="p-fluid" 
      header="Add" 
      :breakpoints="{ '960px': '80vw' }" 
      :style="{ width: '50vw' }" 
      @hide="hideModal()"
    >
      <div class="" style="">
        <div class="flex flex-column gap-2">
          <label for="name">Nama</label>
          <InputText 
            autofocus
            id="name" 
            v-model="dataForm.name" 
            aria-describedby="name-help" 
            :class="{'p-invalid': v$.dataForm.name && afterSubmit}"
          />
        </div>
      </div>
      <template #footer>
        <div class="flex justify-content-end">
          <Button 
            label="Save"
            class=""
            size="small"
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
  emits: [ 'refresh' ],
  components: {
  },
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      afterSubmit: false,
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
      vm.v$.$reset();
    },
    hideModal(){
      const vm = this
      vm.visible = false
      vm.dataForm = {
        name: null,
      }
    },
    async submit(){
      const vm = this
      vm.afterSubmit = true
      if(vm.isValid){
        // const res = await vm.$axios.post('sample/createSample', vm.dataForm)
        const res = {
          data: {
            status: 200,
          }
        }
        // console.log('res', res)
        if(res.data.status == 200){
          vm.afterSubmit = false
          vm.$emit('refresh')
          vm.$toast.add({ severity: 'success', summary: 'Konfirmasi', detail: 'Berhasil Membuat Sample', life: 3000 });
          vm.visible = false
        }else{
          vm.$toast.add({ severity: 'error', summary: 'Konfirmasi', detail: 'Gagal Membuat Sample', life: 3000 });
        }
      }else{
        vm.$toast.add({ severity: 'error', summary: 'Konfirmasi', detail: 'Data Tidak Valid', life: 3000 });
      }
    },
  },
};
</script>