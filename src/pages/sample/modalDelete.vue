<template>
  <div class="">
    <Button 
      label=""
      class=""
      severity="danger"
      size="small"
      icon="pi pi-trash"
      @click="submit()"
      v-tooltip.left="`Delete`"
    />
  </div>
</template>

<script>
export default {
  components: {
  },
  props: [ 'data' ],
  emits: [ 'refresh' ],
  data() {
    return {
    };
  },
  methods: {
    submit(){
      const vm = this
      vm.$confirm.require({
        message: 'Apakah anda yakin ingin menghapus data ini ?',
        header: 'Konfirmasi',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'hapus',
        accept: async () => {
          // const res = await vm.$axios.delete('sample/deleteSample/' + vm.data.id)
          const res = {
            data: {
              status: 200,
            }
          }
          // console.log('res', res)
          if(res.data.status == 200){
            vm.$emit('refresh')
            vm.$toast.add({ severity: 'success', summary: 'Konfirmasi', detail: 'Berhasil Menghapus Sample', life: 3000 });
            vm.visible = false
          }else{
            vm.$toast.add({ severity: 'error', summary: 'Konfirmasi', detail: 'Gagal Menghapus Sample', life: 3000 });
          }
        }
      });
    }
  },
};
</script>