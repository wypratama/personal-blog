import s from"./ContentSlot.2ff2159b.js";import{d as o,a8 as u,I as f,aj as m}from"./entry.e964bc22.js";import"./MDCSlot.9e36c6ed.js";const d=o({name:"Markdown",extends:s,setup(t){const{parent:e}=m(),{between:n,default:a}=u(),r=f(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{d as default};