(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d212f1d"],{ab28:function(e,a,l){"use strict";l.r(a);l("14d9");var t=l("7a23");const d={class:"surface-0 overflow-hidden py-4"},i={class:"py-3 relative",id:"hero"},o={class:"mx-4 mt-0 w-100 text-center"},n={class:"text-center mx-6"},s=["src"],c=Object(t["createElementVNode"])("h1",{class:"text-6xl font-bold text-gray-900 line-height-2 text-center"},"Form Laporan",-1),r={class:"grid mx-1 mb-6"},p=Object(t["createElementVNode"])("div",{class:"md:col-2"},null,-1),m={class:"col-12 md:col-8 grid"},u={key:0,class:"col-12 md:col-12 w-full p-inputgroup flex-1"},b={class:"p-buttonset col-12 w-full"},f={key:1,class:"col-12 md:col-12 flex flex-column gap-2 mt-1"},_=Object(t["createElementVNode"])("label",{for:"kode_sebelumnya"},"Kode Sebelumnya",-1),k={class:"col-12 md:col-12 flex flex-column gap-2 mt-1"},V=Object(t["createElementVNode"])("label",{for:"asal"},"Asal Pemohon",-1),h={key:2,class:"col-12 md:col-6 flex flex-column gap-2 mt-1"},j=Object(t["createElementVNode"])("label",{for:"fakultas"},"Fakultas",-1),O={key:3,class:"col-12 md:col-6 flex flex-column gap-2 mt-1"},g=Object(t["createElementVNode"])("label",{for:"prodi"},"Prodi",-1),v={key:4,class:"col-12 md:col-12 flex flex-column gap-2 mt-1"},N=Object(t["createElementVNode"])("label",{for:"biro"},"Biro",-1),y={class:"col-12 md:col-12 flex flex-column gap-2 mt-1"},x=Object(t["createElementVNode"])("label",{for:"kategori"},"Kategori",-1),w={class:"col-12 md:col-6 flex flex-column gap-2 mt-1"},C=Object(t["createElementVNode"])("label",{for:"nama"},"Nama Pemohon",-1),$={class:"col-12 md:col-6 flex flex-column gap-2 mt-1"},E=Object(t["createElementVNode"])("label",{for:"no_identitas"},"No Identitas",-1),S={class:"col-12 md:col-6 flex flex-column gap-2 mt-1"},B=Object(t["createElementVNode"])("label",{for:"no_hp"},"No Handphone",-1),U={class:"col-12 md:col-6 flex flex-column gap-2 mt-1"},q=Object(t["createElementVNode"])("label",{for:"email"},"Email",-1),L={class:"col-12 md:col-12 flex flex-column gap-2 mt-1"},F=Object(t["createElementVNode"])("label",{for:"upload_foto"},"Upload Foto Identitas Diri (KTP / KTM / SIM / PASSPORT)",-1),z=Object(t["createElementVNode"])("p",null,"Drag and drop files to here to upload.",-1),P={class:"col-12 md:col-12 flex flex-column gap-2 mt-1"},T=Object(t["createElementVNode"])("label",{for:"deskripsi"},"Deskripsi",-1),D={class:"col-12 md:col-12 flex flex-column gap-2 mt-1"},I=Object(t["createElementVNode"])("label",{for:"upload_file"},"Upload File",-1),K=Object(t["createElementVNode"])("p",null,"Drag and drop files to here to upload.",-1),A=Object(t["createElementVNode"])("div",{class:"md:col-2"},null,-1);function M(e,a,l,M,R,H){const J=Object(t["resolveComponent"])("InputText"),W=Object(t["resolveComponent"])("Button"),G=Object(t["resolveComponent"])("Dropdown"),Z=Object(t["resolveComponent"])("FileUpload"),Q=Object(t["resolveComponent"])("Textarea");return Object(t["openBlock"])(),Object(t["createElementBlock"])("div",d,[Object(t["createElementVNode"])("div",i,[Object(t["createElementVNode"])("div",o,[Object(t["createElementVNode"])("div",n,[Object(t["createElementVNode"])("img",{src:e.$store.state.master.logo_app,style:{width:"100px"},class:"",alt:"",srcset:""},null,8,s)]),c])]),Object(t["createElementVNode"])("div",r,[p,Object(t["createElementVNode"])("div",m,[R.kode?(Object(t["openBlock"])(),Object(t["createElementBlock"])("div",u,[Object(t["createVNode"])(J,{id:"password","aria-describedby":"password-help",value:R.domain+"/?type="+R.data.tipe+"&kode="+R.kode,readonly:""},null,8,["value"]),Object(t["createVNode"])(W,{icon:"pi pi-clone",label:"url",onClick:a[0]||(a[0]=e=>H.copyData("URL Laporan",R.domain+"/?type="+R.data.tipe+"&kode="+R.kode))}),Object(t["createVNode"])(W,{label:"open",onClick:a[1]||(a[1]=a=>e.$router.push("/?type="+R.data.tipe+"&kode="+R.kode))})])):Object(t["createCommentVNode"])("",!0),Object(t["createElementVNode"])("div",b,[Object(t["createVNode"])(W,{class:"w-6",label:"Pengaduan",onClick:a[2]||(a[2]=e=>H.pilihTipe("pengaduan")),outlined:"pengaduan"!=R.data.tipe,disabled:R.loading},null,8,["outlined","disabled"]),Object(t["createVNode"])(W,{class:"w-6",label:"Permohonan",onClick:a[3]||(a[3]=e=>H.pilihTipe("permohonan")),outlined:"permohonan"!=R.data.tipe,disabled:R.loading},null,8,["outlined","disabled"])]),R.data.kode_sebelumnya?(Object(t["openBlock"])(),Object(t["createElementBlock"])("div",f,[_,Object(t["createVNode"])(J,{id:"kode_sebelumnya",modelValue:R.data.kode_sebelumnya,"onUpdate:modelValue":a[4]||(a[4]=e=>R.data.kode_sebelumnya=e),"aria-describedby":"kode_sebelumnya-help",disabled:R.loading,readonly:""},null,8,["modelValue","disabled"])])):Object(t["createCommentVNode"])("",!0),Object(t["createElementVNode"])("div",k,[V,Object(t["createVNode"])(G,{modelValue:R.data.asal,"onUpdate:modelValue":a[5]||(a[5]=e=>R.data.asal=e),options:e.$store.state.data_static.asal_pemohon,optionLabel:"text",optionValue:"value",placeholder:"piilh asal pemohon",class:Object(t["normalizeClass"])(["w-full",{"p-invalid":M.v$.data.asal.$invalid&&R.afterClickSubmit}]),disabled:R.loading},null,8,["modelValue","options","disabled","class"])]),"dosen"==R.data.asal||"mahasiswa"==R.data.asal?(Object(t["openBlock"])(),Object(t["createElementBlock"])("div",h,[j,Object(t["createVNode"])(G,{modelValue:R.data.fakultas_id,"onUpdate:modelValue":a[6]||(a[6]=e=>R.data.fakultas_id=e),optionLabel:"nama_fakultas",optionValue:"id",options:R.list_fakultas,placeholder:"pilih fakultas",class:Object(t["normalizeClass"])(["w-full",{"p-invalid":M.v$.data.fakultas_id.$invalid&&R.afterClickSubmit}]),onChange:a[7]||(a[7]=e=>H.getProdi()),disabled:R.loading},null,8,["modelValue","options","disabled","class"])])):Object(t["createCommentVNode"])("",!0),"dosen"==R.data.asal||"mahasiswa"==R.data.asal?(Object(t["openBlock"])(),Object(t["createElementBlock"])("div",O,[g,Object(t["createVNode"])(G,{modelValue:R.data.prodi_id,"onUpdate:modelValue":a[8]||(a[8]=e=>R.data.prodi_id=e),optionLabel:"nama_prodi",optionValue:"id",options:R.list_prodi,placeholder:"pilih prodi",class:Object(t["normalizeClass"])(["w-full",{"p-invalid":M.v$.data.prodi_id.$invalid&&R.afterClickSubmit}]),disabled:R.loading},null,8,["modelValue","options","disabled","class"])])):Object(t["createCommentVNode"])("",!0),"tendik"==R.data.asal?(Object(t["openBlock"])(),Object(t["createElementBlock"])("div",v,[N,Object(t["createVNode"])(G,{modelValue:R.data.biro_id,"onUpdate:modelValue":a[9]||(a[9]=e=>R.data.biro_id=e),optionLabel:"nama_biro",optionValue:"id",options:R.list_biro,placeholder:"pilih biro",class:Object(t["normalizeClass"])(["w-full",{"p-invalid":M.v$.data.biro_id.$invalid&&R.afterClickSubmit}]),disabled:R.loading},null,8,["modelValue","options","disabled","class"])])):Object(t["createCommentVNode"])("",!0),Object(t["createElementVNode"])("div",y,[x,Object(t["createVNode"])(G,{modelValue:R.data.kategori_id,"onUpdate:modelValue":a[10]||(a[10]=e=>R.data.kategori_id=e),optionLabel:"nama_kategori",optionValue:"id",options:R.list_kategori,placeholder:"pilih kategori",class:Object(t["normalizeClass"])(["w-full",{"p-invalid":M.v$.data.kategori_id.$invalid&&R.afterClickSubmit}]),disabled:R.loading},null,8,["modelValue","options","disabled","class"])]),Object(t["createElementVNode"])("div",w,[C,Object(t["createVNode"])(J,{id:"nama",modelValue:R.data.nama,"onUpdate:modelValue":a[11]||(a[11]=e=>R.data.nama=e),"aria-describedby":"nama-help",disabled:R.loading,class:Object(t["normalizeClass"])({"p-invalid":M.v$.data.nama.$invalid&&R.afterClickSubmit})},null,8,["modelValue","disabled","class"])]),Object(t["createElementVNode"])("div",$,[E,Object(t["createVNode"])(J,{id:"no_identitas",modelValue:R.data.no_identitas,"onUpdate:modelValue":a[12]||(a[12]=e=>R.data.no_identitas=e),"aria-describedby":"no_identitas-help",disabled:R.loading,class:Object(t["normalizeClass"])({"p-invalid":M.v$.data.no_identitas.$invalid&&R.afterClickSubmit})},null,8,["modelValue","disabled","class"])]),Object(t["createElementVNode"])("div",S,[B,Object(t["createVNode"])(J,{id:"no_hp",modelValue:R.data.no_hp,"onUpdate:modelValue":a[13]||(a[13]=e=>R.data.no_hp=e),"aria-describedby":"no_hp-help",disabled:R.loading,class:Object(t["normalizeClass"])({"p-invalid":M.v$.data.no_hp.$invalid&&R.afterClickSubmit})},null,8,["modelValue","disabled","class"])]),Object(t["createElementVNode"])("div",U,[q,Object(t["createVNode"])(J,{id:"email",modelValue:R.data.email,"onUpdate:modelValue":a[14]||(a[14]=e=>R.data.email=e),"aria-describedby":"email-help",disabled:R.loading,class:Object(t["normalizeClass"])({"p-invalid":M.v$.data.email.$invalid&&R.afterClickSubmit})},null,8,["modelValue","disabled","class"])]),Object(t["createElementVNode"])("div",L,[F,Object(t["createVNode"])(Z,{model:R.data.foto,name:"upload_foto",ref:"image",accept:"image/*",previewWidth:100,onSelect:a[15]||(a[15]=e=>H.uploadImage(e)),onRemove:a[16]||(a[16]=e=>H.uploadImage(e)),multiple:!1,maxFileSize:1e6,showUploadButton:!1,showCancelButton:!1,chooseLabel:"upload Image",disabled:R.data.foto_identitas.length>=1||R.loading,pt:{root:{style:M.v$.data.foto_identitas.$invalid&&R.afterClickSubmit?"border: 1px solid red; border-radius: 7px;":""}}},{empty:Object(t["withCtx"])(()=>[z]),_:1},8,["model","disabled","pt"])]),Object(t["createElementVNode"])("div",P,[T,Object(t["createVNode"])(Q,{id:"deskripsi",modelValue:R.data.deskripsi,"onUpdate:modelValue":a[17]||(a[17]=e=>R.data.deskripsi=e),"aria-describedby":"deskripsi-help",disabled:R.loading,class:Object(t["normalizeClass"])({"p-invalid":M.v$.data.deskripsi.$invalid&&R.afterClickSubmit})},null,8,["modelValue","disabled","class"])]),Object(t["createElementVNode"])("div",D,[I,Object(t["createVNode"])(Z,{name:"upload_file",ref:"file",previewWidth:0,onSelect:a[18]||(a[18]=e=>H.uploadFile(e)),onRemove:a[19]||(a[19]=e=>H.uploadFile(e)),multiple:!1,accept:"",maxFileSize:1e6,showUploadButton:!1,showCancelButton:!1,chooseLabel:"upload File",disabled:R.data.file_laporan.length>=2||R.loading},{empty:Object(t["withCtx"])(()=>[K]),_:1},8,["disabled"])]),Object(t["createVNode"])(W,{class:"w-full mt-3",label:"Upload Laporan",onClick:a[20]||(a[20]=e=>H.register()),disabled:R.loading},null,8,["disabled"])]),A])])}var R=l("c3b3"),H=l("b9fb"),J={setup(){return{v$:Object(R["a"])()}},data(){return{domain:window.location.origin,kode:"",loading:!1,afterClickSubmit:!1,data:{tipe:"pengaduan",nama:null,asal:null,no_identitas:null,no_hp:null,email:null,deskripsi:null,foto_identitas:[],file_laporan:[],prodi_id:null,fakultas_id:null,biro_id:null,kategori_id:null},list_kategori:[],list_fakultas:[],list_prodi:[],list_biro:[]}},computed:{isValid(){return!this.v$.data.$invalid}},validations(){return{data:{tipe:{required:H["c"]},nama:{required:H["c"]},asal:{required:H["c"]},no_identitas:{required:H["c"],numeric:H["b"]},no_hp:{required:H["c"],numeric:H["b"]},email:{required:H["c"],email:H["a"]},deskripsi:{required:H["c"]},foto_identitas:{required:H["c"]},file_laporan:{},prodi_id:{required:Object(H["d"])(()=>"mahasiswa"==this.data.asal)},fakultas_id:{required:Object(H["d"])(()=>"mahasiswa"==this.data.asal)},biro_id:{required:Object(H["d"])(()=>"tendik"==this.data.asal)},kategori_id:{required:H["c"]}}}},async mounted(){const e=this;e.data.tipe=e.$route.query.type||e.$store.state.data_static.jenis_kategori[1].value,e.data.kode_sebelumnya=e.$route.query.kode,e.pilihTipe(e.data.tipe),e.list_fakultas=(await e.$axios.post("fakultas/list")).data.data.map(e=>({...e})),e.list_biro=(await e.$axios.post("biro/list")).data.data.map(e=>({...e}))},methods:{onClick(e){const a=this;e.preventDefault(),a.grecaptcha.ready((function(){a.grecaptcha.execute("6LdFq5UnAAAAAPLPZl-hOsunU19_4lnojMnV8iHf",{action:"submit"}).then((function(e){console.log("token",e)}))}))},async copyData(e,a){const l=this;await navigator.clipboard.writeText(a),l.$toast.add({severity:"success",summary:"Konfirmasi",detail:"Berhasil Copy "+e,life:3e3})},uploadImage(e){const a=this;a.data.foto_identitas=e.files},uploadFile(e){const a=this;a.data.file_laporan=e.files},async pilihTipe(e){const a=this;a.data.tipe=e,a.list_kategori=(await a.$axios.post("kategori/list",{jenis_kategori:e})).data.data.map(e=>({...e}))},async getProdi(){const e=this;e.data.prodi_id=null,e.list_prodi=(await e.$axios.post("prodi/list",{fakultas_id:e.data.fakultas_id})).data.data.map(e=>({...e}))},async register(){const e=this;if(e.loading=!0,e.afterClickSubmit=!0,e.isValid){let a=new FormData;e.data.foto_identitas[0]&&a.append("file1",e.data.foto_identitas[0]),e.data.file_laporan[0]&&a.append("file2",e.data.file_laporan[0]),e.data.file_laporan[1]&&a.append("file3",e.data.file_laporan[1]),e.data.kode_sebelumnya&&a.append("kode_"+e.data.tipe+"_sebelumnya",e.data.kode_sebelumnya),a.append("nama_pemohon",e.data.nama),a.append("asal_pemohon",e.data.asal),a.append("no_identitas",e.data.no_identitas),a.append("no_hp_pemohon",e.data.no_hp),a.append("email_pemohon",e.data.email),a.append("deskripsi_"+e.data.tipe,e.data.deskripsi),a.append("foto_identitas",e.data.foto_identitas),a.append("file_laporan",e.data.file_laporan),e.data.prodi_id&&"mahasiswa"==e.data.asal&&a.append("prodi_id",e.data.prodi_id),e.data.fakultas_id&&"mahasiswa"==e.data.asal&&"mahasiswa"==e.data.asal&&a.append("fakultas_id",e.data.fakultas_id),e.data.biro_id&&"tendik"==e.data.asal&&a.append("biro_id",e.data.biro_id),e.data.kategori_id&&a.append("kategori_id",e.data.kategori_id);let l=await e.$axios.post(e.data.tipe+"/register",a);200==l.data.status?(e.kode=l.data.data["kode_"+e.data.tipe],e.data.foto_identitas.length>0&&(e.$refs.file.files=[]),e.data.file_laporan.length>0&&(e.$refs.image.files=[]),e.data.foto_identitas=[],e.data.file_laporan=[],e.data={tipe:e.data.tipe,nama:null,asal:null,no_identitas:null,no_hp:null,email:null,deskripsi:null,foto_identitas:[],file_laporan:[],prodi_id:null,fakultas_id:null,biro_id:null,kategori_id:null},e.$toast.add({severity:"success",summary:"Konfirmasi",detail:"Berhasil Membuat Laporan",life:3e3}),e.afterClickSubmit=!1):e.$toast.add({severity:"error",summary:"Konfirmasi",detail:"Gagal Membuat Laporan",life:3e3})}else e.$toast.add({severity:"error",summary:"Konfirmasi",detail:"Data Tidak Valid",life:3e3});e.loading=!1}}},W=l("6b0d"),G=l.n(W);const Z=G()(J,[["render",M]]);a["default"]=Z}}]);
//# sourceMappingURL=chunk-2d212f1d.0e26dc0b.js.map