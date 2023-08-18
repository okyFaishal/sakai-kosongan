(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d01e8"],{"672c":function(e,a,t){"use strict";t.r(a);var l=t("7a23");const o={class:"grid"},n={class:"col-12 lg:col-12 xl:col-12"},s={class:"card mb-0"},d=Object(l["createElementVNode"])("div",{class:"mb-4"},[Object(l["createElementVNode"])("h4",null,"Permohonan")],-1),r={class:"flex sm:flex-row"},c={class:"m-1"};function i(e,a,t,i,m,u){const b=Object(l["resolveComponent"])("Column"),p=Object(l["resolveComponent"])("InputText"),h=Object(l["resolveComponent"])("Dropdown"),j=Object(l["resolveComponent"])("ModalUpdate"),V=Object(l["resolveComponent"])("DataTable");return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",o,[Object(l["createElementVNode"])("div",n,[Object(l["createElementVNode"])("div",s,[d,Object(l["createVNode"])(V,{class:"p-datatable-sm",tableStyle:"min-width: 50rem",value:m.items,filters:m.filters,"onUpdate:filters":a[1]||(a[1]=e=>m.filters=e),onFilter:a[2]||(a[2]=e=>u.onFilter(e)),filterDisplay:"menu",showFilterMatchModes:!1,paginator:"",rows:e.$store.state.pagination.row,rowsPerPageOptions:e.$store.state.pagination.perPage,lazy:"",totalRecords:m.totalRecords,onPage:u.onPage,rowHover:!0,responsiveLayout:"scroll",resizableColumns:!0,loading:m.loading},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(b,{field:"no",header:"No",class:"text-center",style:{width:"0px"}},{body:Object(l["withCtx"])(({index:e})=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(1+e),1)]),_:1}),Object(l["createVNode"])(b,{field:"nama_pemohon",header:"Nama Pemohon",class:"",style:{},showFilterMatchModes:!1,showApplyButton:!1,showClearButton:!0},{filter:Object(l["withCtx"])(({filterModel:e,filterCallback:a})=>[Object(l["createVNode"])(p,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,type:"text",onInput:e=>a(),class:"p-column-filter f-full",placeholder:"Search by name"},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1}),Object(l["createVNode"])(b,{field:"no_identitas",header:"No Identitas",class:"",style:{},showFilterMatchModes:!1,showApplyButton:!1,showClearButton:!0},{filter:Object(l["withCtx"])(({filterModel:e,filterCallback:a})=>[Object(l["createVNode"])(p,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,type:"text",onInput:e=>a(),class:"p-column-filter f-full",placeholder:"Search by name"},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1}),Object(l["createVNode"])(b,{field:"asal_pemohon",header:"Asal Pemohon",class:"",style:{},showFilterMatchModes:!1,showApplyButton:!1,showClearButton:!0},{filter:Object(l["withCtx"])(({filterModel:a,filterCallback:t})=>[Object(l["createVNode"])(h,{modelValue:a.value,"onUpdate:modelValue":e=>a.value=e,onChange:e=>t(),options:e.$store.state.data_static.asal_pemohon,optionLabel:"text",optionValue:"value",placeholder:"pilih asal pemohon",class:"w-full"},null,8,["modelValue","onUpdate:modelValue","onChange","options"])]),_:1}),Object(l["createVNode"])(b,{field:"nama_kategori",header:"Kategori",class:"",style:{},showFilterMatchModes:!1,showApplyButton:!1,showClearButton:!0},{filter:Object(l["withCtx"])(({filterModel:e,filterCallback:a})=>[Object(l["createVNode"])(h,{filter:"",showClear:"",modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,onChange:e=>a(),optionLabel:"nama_kategori",optionValue:"id",options:m.listKategori,placeholder:"pilih kategori",class:"w-full"},null,8,["modelValue","onUpdate:modelValue","onChange","options"])]),_:1}),"operator"!=u.role&&"supervisor"!=u.role&&"manajer"!=u.role?(Object(l["openBlock"])(),Object(l["createBlock"])(b,{key:0,field:"nama_status_permohonan",header:"Status",class:"",style:{},showFilterMatchModes:!1,showApplyButton:!1,showClearButton:!0},{filter:Object(l["withCtx"])(({filterModel:a,filterCallback:t})=>[Object(l["createVNode"])(h,{modelValue:a.value,"onUpdate:modelValue":e=>a.value=e,onChange:e=>t(),optionLabel:"text",optionValue:"value",options:e.$store.state.data_static.status_pengaduan,placeholder:"pilih status",class:"w-full"},null,8,["modelValue","onUpdate:modelValue","onChange","options"])]),_:1})):Object(l["createCommentVNode"])("",!0),"pimpinan"!=u.role?(Object(l["openBlock"])(),Object(l["createBlock"])(b,{key:1,field:"actions",header:"",bodyClass:"text-center",style:{width:"0px"}},{body:Object(l["withCtx"])(({data:e})=>[Object(l["createElementVNode"])("div",r,[Object(l["createElementVNode"])("div",c,[Object(l["createVNode"])(j,{data:e,onRefresh:a[0]||(a[0]=e=>u.getData())},null,8,["data"])])])]),_:1})):Object(l["createCommentVNode"])("",!0)]),_:1},8,["value","filters","rows","rowsPerPageOptions","totalRecords","onPage","loading"])])])])}t("14d9");const m={class:""},u={class:"",style:{}},b={class:"flex flex-column gap-2"},p=Object(l["createElementVNode"])("label",{for:"kode_permohonan"},"Kode",-1),h={key:0,class:"flex flex-column gap-2 mt-2"},j=Object(l["createElementVNode"])("label",{for:"kode_permohonan_sebelumnya"},"Kode Sebelumnya",-1),V={class:"flex flex-column gap-2 mt-2"},O=Object(l["createElementVNode"])("label",{for:"asal_pemohon"},"Asal",-1),f={class:"flex flex-column gap-2 mt-2"},_=Object(l["createElementVNode"])("label",{for:"username"},"Nama Pemohon",-1),k={class:"flex flex-column gap-2 mt-2"},v=Object(l["createElementVNode"])("label",{for:"username"},"No Identitas",-1),y={class:"flex flex-column gap-2 mt-2"},g=Object(l["createElementVNode"])("label",{for:"no_hp_pemohon"},"No Handphone",-1),N={class:"flex flex-column gap-2 mt-2"},x=Object(l["createElementVNode"])("label",{for:"nama_kategori"},"Kategori",-1),w={key:1,class:"flex flex-column gap-2 mt-2"},C=Object(l["createElementVNode"])("label",{for:"nama_fakultas"},"Fakultas",-1),A={key:2,class:"flex flex-column gap-2 mt-2"},B=Object(l["createElementVNode"])("label",{for:"nama_prodi"},"Prodi",-1),E={key:3,class:"flex flex-column gap-2 mt-2"},U=Object(l["createElementVNode"])("label",{for:"nama_biro"},"Biro",-1),$={key:4,class:"flex flex-column gap-2 mt-2"},M=Object(l["createElementVNode"])("label",{for:"username"},"Foto",-1),F={key:5,class:"flex flex-column gap-2 mt-2"},D=Object(l["createElementVNode"])("label",{for:"username"},"File",-1),P={key:0,class:"p-inputgroup flex-1"},T={key:1,class:"p-inputgroup flex-1"},I={class:"flex flex-column gap-2 mt-2"},K=Object(l["createElementVNode"])("label",{for:"username"},"Deskripsi",-1),S=Object(l["createElementVNode"])("hr",{class:""},null,-1),z={key:6,class:"flex flex-column gap-2 mb-2"},R=Object(l["createElementVNode"])("label",{for:"catatan_operator"},"Catatan Operator",-1),J={key:7,class:"flex flex-column gap-2 mb-2"},L=Object(l["createElementVNode"])("label",{for:"catatan_supervisor"},"Catatan Supervisor",-1),G={key:8,class:"flex flex-column gap-2 mb-2"},H=Object(l["createElementVNode"])("label",{for:"catatan_manajer"},"Catatan Manager",-1),Y={key:9,class:"flex flex-column gap-2"},q=Object(l["createElementVNode"])("label",{for:"is_publish"},"Publish",-1),Q={id:"is_publish",class:""},W={key:10,class:"flex flex-column gap-2"},X=Object(l["createElementVNode"])("label",{for:"is_setuju"},"Publish",-1),Z={id:"is_setuju",class:""},ee={key:11,class:"flex flex-column gap-2"},ae=Object(l["createElementVNode"])("label",{for:"username"},"Catatan",-1),te={key:12,class:"flex flex-column gap-2 mt-2"},le=Object(l["createElementVNode"])("label",{for:"catatan_manajer"},"Publish",-1),oe={class:"flex flex-wrap gap-3"},ne={class:"flex align-items-center"},se=Object(l["createElementVNode"])("label",{for:"publish-ya",class:"ml-2"},"Ya",-1),de={class:"flex align-items-center"},re=Object(l["createElementVNode"])("label",{for:"publish-tidak",class:"ml-2"},"Tidak",-1),ce={key:0,class:"flex justify-content-end"};function ie(e,a,t,o,n,s){const d=Object(l["resolveComponent"])("Button"),r=Object(l["resolveComponent"])("InputText"),c=Object(l["resolveComponent"])("Image"),i=Object(l["resolveComponent"])("Textarea"),ie=Object(l["resolveComponent"])("RadioButton"),me=Object(l["resolveComponent"])("Dialog"),ue=Object(l["resolveDirective"])("tooltip");return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",m,[Object(l["withDirectives"])(Object(l["createVNode"])(d,{label:"",class:"",size:"small",icon:"pi pi-pencil",onClick:a[0]||(a[0]=e=>s.openModal())},null,512),[[ue,"Update",void 0,{left:!0}]]),Object(l["createVNode"])(me,{visible:n.visible,"onUpdate:visible":a[25]||(a[25]=e=>n.visible=e),modal:!0,class:"p-fluid",header:"Update",breakpoints:{"960px":"80vw"},style:{width:"50vw"},onHide:a[26]||(a[26]=e=>n.visible=!1)},{footer:Object(l["withCtx"])(()=>[n.dataAsal.status_permohonan<4?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",ce,[Object(l["withDirectives"])(Object(l["createVNode"])(d,{label:"Tolak",class:"",size:"small",disabled:n.loading,onClick:a[22]||(a[22]=e=>s.submitTolak())},null,8,["disabled"]),[[ue,"tolak",void 0,{left:!0}]]),n.dataAsal.status_permohonan<3?Object(l["withDirectives"])((Object(l["openBlock"])(),Object(l["createBlock"])(d,{key:0,label:"Setujui",class:"",size:"small",disabled:!s.isValid||n.loading,onClick:a[23]||(a[23]=e=>s.submit())},null,8,["disabled"])),[[ue,"setujui",void 0,{left:!0}]]):Object(l["createCommentVNode"])("",!0),3==n.dataAsal.status_permohonan?Object(l["withDirectives"])((Object(l["openBlock"])(),Object(l["createBlock"])(d,{key:1,label:"Setujui Manager",class:"",size:"small",disabled:!s.isValid||n.loading,onClick:a[24]||(a[24]=e=>s.submitJawabanManager())},null,8,["disabled"])),[[ue,"setujui manager",void 0,{left:!0}]]):Object(l["createCommentVNode"])("",!0)])):Object(l["createCommentVNode"])("",!0)]),default:Object(l["withCtx"])(()=>[Object(l["createElementVNode"])("div",u,[Object(l["createElementVNode"])("div",b,[p,Object(l["createVNode"])(r,{id:"kode_permohonan",modelValue:n.dataAsal.kode_permohonan,"onUpdate:modelValue":a[1]||(a[1]=e=>n.dataAsal.kode_permohonan=e),"aria-describedby":"kode_permohonan-help",readonly:""},null,8,["modelValue"])]),n.dataAsal.kode_permohonan_sebelumnya?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",h,[j,Object(l["createVNode"])(r,{id:"kode_permohonan_sebelumnya",modelValue:n.dataAsal.kode_permohonan_sebelumnya,"onUpdate:modelValue":a[2]||(a[2]=e=>n.dataAsal.kode_permohonan_sebelumnya=e),"aria-describedby":"kode_permohonan_sebelumnya-help",readonly:""},null,8,["modelValue"])])):Object(l["createCommentVNode"])("",!0),Object(l["createElementVNode"])("div",V,[O,Object(l["createVNode"])(r,{id:"asal_pemohon",modelValue:n.dataAsal.asal_pemohon,"onUpdate:modelValue":a[3]||(a[3]=e=>n.dataAsal.asal_pemohon=e),"aria-describedby":"asal_pemohon-help",readonly:""},null,8,["modelValue"])]),Object(l["createElementVNode"])("div",f,[_,Object(l["createVNode"])(r,{id:"username",modelValue:n.dataAsal.nama_pemohon,"onUpdate:modelValue":a[4]||(a[4]=e=>n.dataAsal.nama_pemohon=e),"aria-describedby":"username-help",readonly:""},null,8,["modelValue"])]),Object(l["createElementVNode"])("div",k,[v,Object(l["createVNode"])(r,{id:"username",modelValue:n.dataAsal.no_identitas,"onUpdate:modelValue":a[5]||(a[5]=e=>n.dataAsal.no_identitas=e),"aria-describedby":"username-help",readonly:""},null,8,["modelValue"])]),Object(l["createElementVNode"])("div",y,[g,Object(l["createVNode"])(r,{id:"no_hp_pemohon",modelValue:n.dataAsal.no_identitas,"onUpdate:modelValue":a[6]||(a[6]=e=>n.dataAsal.no_identitas=e),"aria-describedby":"no_hp_pemohon-help",readonly:""},null,8,["modelValue"])]),Object(l["createElementVNode"])("div",N,[x,Object(l["createVNode"])(r,{id:"nama_kategori",modelValue:n.dataAsal.nama_kategori,"onUpdate:modelValue":a[7]||(a[7]=e=>n.dataAsal.nama_kategori=e),"aria-describedby":"nama_kategori-help",readonly:""},null,8,["modelValue"])]),n.dataAsal.nama_fakultas?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",w,[C,Object(l["createVNode"])(r,{id:"nama_fakultas",modelValue:n.dataAsal.nama_fakultas,"onUpdate:modelValue":a[8]||(a[8]=e=>n.dataAsal.nama_fakultas=e),"aria-describedby":"nama_fakultas-help",readonly:""},null,8,["modelValue"])])):Object(l["createCommentVNode"])("",!0),n.dataAsal.nama_prodi?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",A,[B,Object(l["createVNode"])(r,{id:"nama_prodi",modelValue:n.dataAsal.nama_prodi,"onUpdate:modelValue":a[9]||(a[9]=e=>n.dataAsal.nama_prodi=e),"aria-describedby":"nama_prodi-help",readonly:""},null,8,["modelValue"])])):Object(l["createCommentVNode"])("",!0),n.dataAsal.nama_biro?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",E,[U,Object(l["createVNode"])(r,{id:"nama_biro",modelValue:n.dataAsal.nama_biro,"onUpdate:modelValue":a[10]||(a[10]=e=>n.dataAsal.nama_biro=e),"aria-describedby":"nama_biro-help",readonly:""},null,8,["modelValue"])])):Object(l["createCommentVNode"])("",!0),n.dataAsal.foto_identitas?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",$,[M,Object(l["createVNode"])(c,{class:"text-center",src:e.$store.state.ipBackend+"/"+n.dataAsal.foto_identitas,alt:"Image",width:"250",preview:""},null,8,["src"])])):Object(l["createCommentVNode"])("",!0),n.dataAsal.file_laporan1||n.dataAsal.file_laporan2?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",F,[D,n.dataAsal.file_laporan1?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",P,[Object(l["createVNode"])(d,{label:"open",onClick:a[11]||(a[11]=e=>s.openNewTab(n.dataAsal.file_laporan1))}),Object(l["createVNode"])(r,{id:"file_laporan1",modelValue:n.dataAsal.file_laporan1,"onUpdate:modelValue":a[12]||(a[12]=e=>n.dataAsal.file_laporan1=e),"aria-describedby":"file_laporan1-help",readonly:""},null,8,["modelValue"])])):Object(l["createCommentVNode"])("",!0),n.dataAsal.file_laporan2?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",T,[Object(l["createVNode"])(d,{label:"open",onClick:a[13]||(a[13]=e=>s.openNewTab(n.dataAsal.file_laporan2))}),Object(l["createVNode"])(r,{id:"file_laporan2",modelValue:n.dataAsal.file_laporan2,"onUpdate:modelValue":a[14]||(a[14]=e=>n.dataAsal.file_laporan2=e),"aria-describedby":"file_laporan2-help",readonly:""},null,8,["modelValue"])])):Object(l["createCommentVNode"])("",!0)])):Object(l["createCommentVNode"])("",!0),Object(l["createElementVNode"])("div",I,[K,Object(l["createVNode"])(i,{id:"username",modelValue:n.dataAsal.deskripsi_permohonan,"onUpdate:modelValue":a[15]||(a[15]=e=>n.dataAsal.deskripsi_permohonan=e),"aria-describedby":"username-help",readonly:""},null,8,["modelValue"])]),S,t.data.catatan_operator?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",z,[R,Object(l["createVNode"])(i,{id:"catatan_operator",modelValue:n.dataAsal.catatan_operator,"onUpdate:modelValue":a[16]||(a[16]=e=>n.dataAsal.catatan_operator=e),"aria-describedby":"catatan_operator-help",readonly:""},null,8,["modelValue"])])):Object(l["createCommentVNode"])("",!0),t.data.catatan_supervisor?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",J,[L,Object(l["createVNode"])(i,{id:"catatan_supervisor",modelValue:n.dataAsal.catatan_supervisor,"onUpdate:modelValue":a[17]||(a[17]=e=>n.dataAsal.catatan_supervisor=e),"aria-describedby":"catatan_supervisor-help",readonly:""},null,8,["modelValue"])])):Object(l["createCommentVNode"])("",!0),t.data.catatan_manajer?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",G,[H,Object(l["createVNode"])(i,{id:"catatan_manajer",modelValue:n.dataAsal.catatan_manajer,"onUpdate:modelValue":a[18]||(a[18]=e=>n.dataAsal.catatan_manajer=e),"aria-describedby":"catatan_manajer-help",readonly:""},null,8,["modelValue"])])):Object(l["createCommentVNode"])("",!0),null!=n.dataAsal.is_publish?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",Y,[q,Object(l["createElementVNode"])("div",Q,Object(l["toDisplayString"])(n.dataAsal.is_publish?"Ya":"Tidak"),1)])):Object(l["createCommentVNode"])("",!0),0!=n.dataAsal.is_setuju?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",W,[X,Object(l["createElementVNode"])("div",Z,Object(l["toDisplayString"])(1==n.dataAsal.is_setuju?"Setuju":"Tidak Setuju"),1)])):Object(l["createCommentVNode"])("",!0),n.dataAsal.status_permohonan<4?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",ee,[ae,Object(l["createVNode"])(i,{id:"username",modelValue:n.dataForm.catatan,"onUpdate:modelValue":a[19]||(a[19]=e=>n.dataForm.catatan=e),"aria-describedby":"username-help",class:Object(l["normalizeClass"])({"p-invalid":o.v$.dataForm.catatan.$invalid})},null,8,["modelValue","class"])])):Object(l["createCommentVNode"])("",!0),3==n.dataAsal.status_permohonan?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",te,[le,Object(l["createElementVNode"])("div",oe,[Object(l["createElementVNode"])("div",ne,[Object(l["createVNode"])(ie,{modelValue:n.dataForm.is_publish,"onUpdate:modelValue":a[20]||(a[20]=e=>n.dataForm.is_publish=e),inputId:"publish-ya",name:"Ya",value:!0,disabled:3!=n.dataAsal.status_permohonan},null,8,["modelValue","disabled"]),se]),Object(l["createElementVNode"])("div",de,[Object(l["createVNode"])(ie,{modelValue:n.dataForm.is_publish,"onUpdate:modelValue":a[21]||(a[21]=e=>n.dataForm.is_publish=e),inputId:"publish-tidak",name:"Tidak",value:!1,disabled:3!=n.dataAsal.status_permohonan},null,8,["modelValue","disabled"]),re])])])):Object(l["createCommentVNode"])("",!0)])]),_:1},8,["visible"])])}var me=t("c3b3"),ue=t("b9fb"),be={props:["data"],emits:["refresh"],components:{},setup(){return{v$:Object(me["a"])()}},data(){return{loading:!1,visible:!1,dataAsal:{},dataForm:{catatan:null,is_publish:!0}}},computed:{isValid(){return!this.v$.dataForm.$invalid},isDirty(){return this.v$.dataForm.$anyDirty}},validations(){return{dataForm:{catatan:{required:ue["c"]}}}},mounted(){},methods:{test(){},openNewTab(e){window.open(this.$store.state.ipBackend+"/"+e)},openModal(){const e=this;e.visible=!0,e.dataAsal=e.data,e.dataForm={catatan:null,is_publish:!0},e.v$.$reset()},async submit(){const e=this;e.loading=!0;const a={};switch(e.data.status_permohonan){case 1:a.status_permohonan=2,a.catatan_operator=e.dataForm.catatan;break;case 2:a.status_permohonan=3,a.catatan_supervisor=e.dataForm.catatan;break;default:break}const t=await e.$axios.post("permohonan/update",{id:e.data.permohonan_id,...a});200==t.data.status?(e.visible=!1,e.$emit("refresh"),e.$toast.add({severity:"success",summary:"Konfirmasi",detail:"Berhasil Update Permohonan",life:3e3})):e.$toast.add({severity:"error",summary:"Konfirmasi",detail:"Gagal Update Permohonan",life:3e3}),e.loading=!0},async submitTolak(){const e=this;e.loading=!0;const a=await e.$axios.post("permohonan/update",{id:e.data.permohonan_id,status_permohonan:0});200==a.data.status?(e.visible=!1,e.$emit("refresh"),e.$toast.add({severity:"success",summary:"Konfirmasi",detail:"Berhasil Menolak Permohonan",life:3e3})):e.$toast.add({severity:"error",summary:"Konfirmasi",detail:"Gagal Menolak Permohonan",life:3e3}),e.loading=!0},async submitJawabanManager(){const e=this;e.loading=!0;const a=await e.$axios.post("permohonan/jawaban_manajer",{...e.data,id:e.data.permohonan_id,status_permohonan:4,catatan_manajer:e.dataForm.catatan,is_publish:e.dataForm.is_publish,date_catatan_manajer:e.$moment()});200==a.data.status?(e.visible=!1,e.$emit("refresh"),e.$toast.add({severity:"success",summary:"Konfirmasi",detail:"Berhasil Membuat Jawaban Manager",life:3e3})):e.$toast.add({severity:"error",summary:"Konfirmasi",detail:"Gagal Membuat Jawaban Manager",life:3e3}),e.loading=!0}}},pe=t("6b0d"),he=t.n(pe);const je=he()(be,[["render",ie]]);var Ve=je,Oe={components:{ModalUpdate:Ve},data(){return{listKategori:[],items:[],filters:{nama_pemohon:"",no_identitas:"",asal_pemohon:"",nama_kategori:"",nama_status_permohonan:""},filter:{},pagination:{halaman:1,jumlah:this.$store.state.pagination.row},totalRecords:100,loading:!1}},computed:{role(){return this.$store.state.login.role},data(){const e=this;return{...e.filter,...e.pagination}}},watch:{data(e,a){a&&this.getData()}},async mounted(){const e=this;e.getData(),e.getDataOther()},methods:{onPage(e){const a=this;a.pagination.halaman=e.page+1,a.pagination.jumlah=e.rows},onFilter(e){const a=this;a.pagination.halaman=1;for(const t in e.filters)a.filter[t]=e.filters[t].value},async getData(){const e=this;e.loading=!0;let a=null;switch(e.role){case"operator":a="1";break;case"supervisor":a="2";break;case"manajer":a="3";break;default:a=e.filter.nama_status_permohonan;break}let t=await e.$axios.post("permohonan/list",{...e.data,status_permohonan:a,kategori_id:e.filter.nama_kategori});e.items=[];for(let l=0;l<t.data.data.length;l++){const a=t.data.data[l];for(let t=0;t<e.$store.state.data_static.status_pengaduan.length;t++){const l=e.$store.state.data_static.status_pengaduan[t];if(l.value==a.status_permohonan){a.nama_status_permohonan=l.text;break}}e.items.push({...a})}e.totalRecords=Number.parseInt(t.data.count),e.loading=!1},async getDataOther(){const e=this;let a=await e.$axios.post("kategori/list");e.listKategori=a.data.data}}};const fe=he()(Oe,[["render",i]]);a["default"]=fe}}]);
//# sourceMappingURL=chunk-2d0d01e8.7d2e6aca.js.map