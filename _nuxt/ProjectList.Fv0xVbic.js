import k from"./ProjectListItem.o-ZAtm_b.js";import w from"./ProseA.Sf5teH7F.js";import I from"./ProseCodeInline.RXzePt-Z.js";import{u as b}from"./asyncData.13rbf980.js";import{d as g,$ as v,I as S,M as _,b as a,c as o,e as n,F as j,a0 as C,D as e,g as l,w as p,p as P,i as B,q as L,a1 as A,X as N,k as V}from"./entry.708EFhFu.js";const q=t=>(P("data-v-a92b6b73"),t=t(),B(),t),D={key:0,class:"articles-list"},F={class:"layout"},T={key:1,class:"tour"},E=q(()=>n("p",null,"Seems like there are no articles yet.",-1)),M=g({__name:"ProjectList",props:{path:{type:String,default:"project"}},async setup(t){let s,c;const d=t,{data:u}=([s,c]=v(async()=>b("project",async()=>await L(A(d.path)).find())),s=await s,c(),s),r=S(()=>u.value||[]);return(X,Y)=>{var i;const m=k,h=w,f=I;return(i=_(r))!=null&&i.length?(a(),o("div",D,[n("div",F,[(a(!0),o(j,null,C(_(r),(y,x)=>(a(),N(m,{key:x,article:y},null,8,["article"]))),128))])])):(a(),o("div",T,[E,n("p",null,[e(" You can start by "),l(h,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:p(()=>[e("creating")]),_:1}),e(" one in the "),l(f,null,{default:p(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}}),K=V(M,[["__scopeId","data-v-a92b6b73"]]);export{K as default};
