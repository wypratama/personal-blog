import b from"./TabsHeader.AAqSD1gB.js";import{d as u,N as t,k as o}from"./entry.708EFhFu.js";const r=(n,i)=>n.type&&n.type.tag&&n.type.tag===i,f=u({data(){return{activeTabIndex:0,counter:0}},render(){var d,s;const n=((s=(d=this.$slots)==null?void 0:d.default)==null?void 0:s.call(d))||[],i=n.map((e,p)=>{var a,c,v;return{label:((a=e==null?void 0:e.props)==null?void 0:a.filename)||((c=e==null?void 0:e.props)==null?void 0:c.label)||`${p}`,active:((v=e==null?void 0:e.props)==null?void 0:v.active)||!1,component:e}});return t("div",{class:{"code-group":!0,"first-tab":this.activeTabIndex===0}},[t(b,{ref:"tabs-header",activeTabIndex:this.activeTabIndex,tabs:i,"onUpdate:activeTabIndex":e=>this.activeTabIndex=e}),t("div",{class:"code-group-content",text:this.activeTabIndex},n.map((e,p)=>{var a,c;return t("div",{style:{display:p===this.activeTabIndex?"block":"none"},class:{"":!r(e,"code")&&!r(e,"pre")}},[r(e,"code")||r(e,"pre")?e:t("div",{class:{"preview-canvas":!0}},[((c=(a=e.children)==null?void 0:a.default)==null?void 0:c.call(a))||e.children])])}))])}}),h=o(f,[["__scopeId","data-v-6d418cd1"]]);export{h as default};
