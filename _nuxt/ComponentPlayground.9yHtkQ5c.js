import{M as m,I as p,d as c,a9 as i,r as l,N as e,l as u}from"./entry.CKPq3L-y.js";import{u as d}from"./asyncData.C-tMPu6_.js";import f from"./Ellipsis.CeyvBob-.js";import y from"./ComponentPlaygroundData.DNS2XxpI.js";import"./TabsHeader.Btqvs89D.js";import"./ComponentPlaygroundProps.BxWORAZ7.js";import"./ProseH4.DUXY9QxM.js";import"./ProseCodeInline.BXL8SY3C.js";import"./Badge.B9JX-zmU.js";import"./MDCSlot.DazpwOub.js";import"./slot.DHnP2TLG.js";import"./ProseP.C8dfCry6.js";import"./index.BSClXmLg.js";import"./ComponentPlaygroundSlots.vue.CDwFtoRc.js";import"./ComponentPlaygroundTokens.vue.BrpFYC7Z.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=u(h,[["__scopeId","data-v-94dfdb3f"]]);export{V as default};
