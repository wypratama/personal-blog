import{d as p,r as t,Y as _,b as f,c as v,e as a,g as h,n,M as l,al as g,am as C,a7 as y,k as V}from"./entry.708EFhFu.js";import{r}from"./slot.hLC-QMPE.js";import"./node.V6KjywBy.js";const k={class:"summary"},w={class:"content"},S=p({__name:"Callout",props:{type:{type:String,default:"info",validator(s){return["info","success","warning","danger","primary"].includes(s)}},modelValue:{required:!1,default:()=>t(!1)}},emits:["update:modelValue"],setup(s,{emit:c}){const i=s,u=c,e=t(i.modelValue),d=()=>{e.value=!e.value,u("update:modelValue",e.value)};return(o,B)=>{_("MDCSlot");const m=y;return f(),v("div",{class:n(["callout",[s.type]])},[a("span",{class:"preview",onClick:d},[a("span",k,[r(o.$slots,"summary",{},void 0,!0)]),h(m,{name:"heroicons-outline:chevron-right",class:n(["icon",[l(e)&&"rotate"]])},null,8,["class"])]),g(a("div",w,[r(o.$slots,"content",{},void 0,!0)],512),[[C,l(e)]])],2)}}}),M=V(S,[["__scopeId","data-v-d52def72"]]);export{M as default};