import b from"./TabsHeader.1f930140.js";import g from"./ComponentPlaygroundProps.c3bb5cc3.js";import{_ as v}from"./ComponentPlaygroundSlots.vue.34c3389f.js";import{_ as x}from"./ComponentPlaygroundTokens.vue.ac8b9e2f.js";import{a as k}from"./index.fbb5f036.js";import{d as D,r as V,b as a,c as C,g as P,M as o,X as m,as as T,f as s,k as B}from"./entry.e964bc22.js";import"./ProseH4.dfb21b46.js";import"./ProseCodeInline.9664d9d9.js";import"./Badge.0c57eb13.js";import"./MDCSlot.9e36c6ed.js";import"./slot.548d6d08.js";import"./ProseP.003f98fd.js";const I={class:"component-playground-data"},j=D({__name:"ComponentPlaygroundData",props:{modelValue:{type:Object,required:!1,default:()=>({})},componentData:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:r}){const n=k(t,"modelValue",r),e=V(0),c=[{label:"Props"},{label:"Slots"},{label:"Design Tokens"}],d=l=>e.value=l;return(l,p)=>{const u=b,_=g,i=v,f=x;return a(),C("div",I,[P(u,{"active-tab-index":o(e),tabs:c,"onUpdate:activeTabIndex":d},null,8,["active-tab-index"]),o(e)===0?(a(),m(_,{key:0,modelValue:o(n),"onUpdate:modelValue":p[0]||(p[0]=y=>T(n)?n.value=y:null),"component-data":t.componentData},null,8,["modelValue","component-data"])):s("",!0),o(e)===1?(a(),m(i,{key:1,"component-data":t.componentData},null,8,["component-data"])):s("",!0),o(e)===2?(a(),m(f,{key:2,"component-data":t.componentData},null,8,["component-data"])):s("",!0)])}}});const A=B(j,[["__scopeId","data-v-d63d21a5"]]);export{A as default};