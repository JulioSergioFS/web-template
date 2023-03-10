import{Y as a,Z as t,y as h,_ as m,$ as v,a0 as i,a1 as o,a2 as u}from"./index-e89a3b63.js";const p={width:24,height:24,body:'<path fill="currentColor" d="M14.08 15.59L16.67 13H7v-2h9.67l-2.59-2.59L15.5 7l5 5l-5 5l-1.42-1.41M19 3a2 2 0 0 1 2 2v4.67l-2-2V5H5v14h14v-2.67l2-2V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h14Z"/>'};var g=p;const f={width:24,height:24,body:'<path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"/>'};var y=f;function r({className:e,...n}){const l=localStorage.getItem("name")||"";return a("div",{...n,className:`user-avatar${e?" "+e:""}`,children:l[0]})}const N={width:36,height:36,body:'<path fill="currentColor" d="M18 4.25A16.49 16.49 0 0 0 5.4 31.4l.3.35h24.6l.3-.35A16.49 16.49 0 0 0 18 4.25Zm8.6 9.48l-5.92 5.81a3 3 0 1 1-1.41-1.42l5.91-5.81Zm-23 6.17H7v2H3.56c0-.39-.05-.77-.05-1.17s.02-.55.04-.83Zm4.88-10l2.46 2.46l-1.47 1.38L7 11.29a14.57 14.57 0 0 1 1.43-1.42ZM19 9.79h-2v-3.5h1c.37 0 .7 0 1 .05Zm13.49 10.95c0 .39 0 .79-.05 1.17h-3.52v-2h3.53c.02.27.04.55.04.83Z" class="clr-i-solid clr-i-solid-path-1"/><path fill="none" d="M0 0h36v36H0z"/>'};var Z=N;const C={width:24,height:24,body:'<path fill="currentColor" d="M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-7q0-.825.588-1.413Q5.175 9 6 9t1.412.587Q8 10.175 8 11v7q0 .825-.588 1.413Q6.825 20 6 20Zm6 0q-.825 0-1.412-.587Q10 18.825 10 18V6q0-.825.588-1.412Q11.175 4 12 4t1.413.588Q14 5.175 14 6v12q0 .825-.587 1.413Q12.825 20 12 20Zm6 0q-.825 0-1.413-.587Q16 18.825 16 18v-3q0-.825.587-1.413Q17.175 13 18 13q.825 0 1.413.587Q20 14.175 20 15v3q0 .825-.587 1.413Q18.825 20 18 20Z"/>'};var $=C;const M={width:24,height:24,body:'<path fill="currentColor" d="M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9A3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42c-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.536 5.536 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13v-1.75M0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9c-.59.68-.95 1.62-.95 2.65V20H0m24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65c2.56.34 4.45 1.51 4.45 2.9V20Z"/>'};var Q=M;const b={width:256,height:256,body:'<path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm-88 96a48.05 48.05 0 0 1-48-48a8 8 0 0 1 16 0a32 32 0 0 0 64 0a8 8 0 0 1 16 0a48.05 48.05 0 0 1-48 48Z"/>'};var k=b;const q=[{name:"App",icon:a(t,{icon:Z,height:22}),link:"app"},{name:"E-Commerce",icon:a(t,{icon:k,height:22}),link:"ecommerce"},{name:"Charts",icon:a(t,{icon:$,height:22}),link:"charts"},{name:"Profiles",icon:a(t,{icon:Q,height:22}),link:"profiles"}];function w(){const[e,n]=h.useState(!1),l=m(),s=()=>{l("/login"),localStorage.removeItem("email"),localStorage.removeItem("name")};return a(v,{title:"Dashboard",children:i("main",{children:[i("div",{className:"sidebar",children:[a(o.div,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.08},className:"logo",children:"logo"}),i(o.div,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.1},className:"user-card",children:[a(r,{}),i("div",{className:"user-card-data",children:[a("p",{className:"user-name",children:localStorage.getItem("name")}),a("p",{className:"user-role",children:localStorage.getItem("email")==="admin@gmail.com"?"administrador":"visitante"})]})]}),a("ul",{className:"page-list",children:q.map((c,d)=>i(o.li,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.7*((d+1)/6)},className:"list-item",onClick:()=>l(`${c.link}`),children:[c.icon,c.name]},c.name))})]}),i("div",{className:"content",children:[i("header",{className:"header",children:[a(r,{className:"clickable",onClick:()=>n(!e)}),e?i(o.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},exit:{opacity:0},className:"account-popup",children:[i("div",{className:"list-item",onClick:()=>l("profile"),children:[a(t,{icon:y,height:22}),"Editar Perfil"]}),i("div",{className:"list-item",onClick:s,children:[a(t,{icon:g,height:22}),"Sair"]})]}):null]}),a("section",{children:a(u,{})})]})]})})}export{w as default};
