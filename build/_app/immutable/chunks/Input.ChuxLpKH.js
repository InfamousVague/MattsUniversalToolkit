import{s as Z,w as O,i as F,n as x,f as p,q as fe,k as ce,z as de,e as C,a as U,c as N,b as W,g as G,l as h,h as z,I as H,p as E,A as he,B as me,C as _e,r as ge,x as be,M as pe,t as ke,d as we,j as ye}from"./scheduler.BSglW4Eu.js";import{S as Ie,i as ve,g as $,b as V,d as ee,t as k,c as Le,a as Ee,m as Ve,e as qe}from"./index.B6nwG8t1.js";import{A as te}from"./Store.CIsFqrol.js";import{M as J,n as Ae,T as Fe,w as Me}from"./UnderConstruction.svelte_svelte_type_style_lang.Bu0KXFsl.js";import{w as Q}from"./entry.s7dbjC2j.js";class De{constructor(t=0,e=255,u=!1,i=null){this.minLength=t,this.maxLength=e,this.required=u,this.pattern=i}}function X(l){let t,e;return t=new Fe({props:{appearance:te.Warning,$$slots:{default:[Oe]},$$scope:{ctx:l}}}),{c(){Le(t.$$.fragment)},l(u){Ee(t.$$.fragment,u)},m(u,i){Ve(t,u,i),e=!0},p(u,i){const o={};i[0]&134250496&&(o.$$scope={dirty:i,ctx:u}),t.$set(o)},i(u){e||(k(t.$$.fragment,u),e=!0)},o(u){V(t.$$.fragment,u),e=!1},d(u){qe(t,u)}}}function Oe(l){let t;return{c(){t=ke(l[15])},l(e){t=we(e,l[15])},m(e,u){F(e,t,u)},p(e,u){u[0]&32768&&ye(t,e[15])},d(e){e&&p(t)}}}function Y(l){let t,e,u,i,o,m,w,y,_,f,I,q;const v=l[23].default,d=de(v,l,l[27],null);let a=l[15]&&X(l);return{c(){t=C("div"),e=C("div"),d&&d.c(),u=U(),i=C("input"),y=U(),a&&a.c(),_=O(),this.h()},l(s){t=N(s,"DIV",{id:!0,"data-cy":!0,class:!0,"data-tooltip":!0,role:!0});var r=W(t);e=N(r,"DIV",{class:!0});var g=W(e);d&&d.l(g),u=G(g),i=N(g,"INPUT",{class:!0,type:!0,placeholder:!0}),g.forEach(p),r.forEach(p),y=G(s),a&&a.l(s),_=O(),this.h()},h(){h(i,"class",o="input "+(l[9]?"centered":"")+" "+(l[1]?"disabled":"")+" svelte-emh6tw"),h(i,"type","text"),h(i,"placeholder",l[3]),i.autofocus=l[11],h(e,"class",m="input-container "+(l[6]?"rounded":"")+" "+(l[12]||"")+" "+(l[10]?"multiline":"")+" svelte-emh6tw"),h(t,"id",l[4]),h(t,"data-cy",l[4]),h(t,"class",w="input-group "+(l[5]?"alt":"")+" "+(l[7]!==null?`highlight-${l[7]}`:"")+" "+(l[2]?"tooltip":"")+" "+(l[12]||"")+" "+(l[10]?"multiline":"")+" svelte-emh6tw"),h(t,"data-tooltip",l[2]),h(t,"role","none")},m(s,r){F(s,t,r),z(t,e),d&&d.m(e,null),z(e,u),z(e,i),l[24](i),H(i,l[13]),F(s,y,r),a&&a.m(s,r),F(s,_,r),f=!0,l[11]&&i.focus(),I||(q=[E(i,"focus",Ce),E(i,"input",l[25]),E(i,"keydown",l[20]),E(i,"input",l[18]),E(i,"blur",l[19]),E(t,"click",l[26])],I=!0)},p(s,r){d&&d.p&&(!f||r[0]&134217728)&&he(d,v,s,s[27],f?_e(v,s[27],r,null):me(s[27]),null),(!f||r[0]&514&&o!==(o="input "+(s[9]?"centered":"")+" "+(s[1]?"disabled":"")+" svelte-emh6tw"))&&h(i,"class",o),(!f||r[0]&8)&&h(i,"placeholder",s[3]),(!f||r[0]&2048)&&(i.autofocus=s[11]),r[0]&8192&&i.value!==s[13]&&H(i,s[13]),(!f||r[0]&5184&&m!==(m="input-container "+(s[6]?"rounded":"")+" "+(s[12]||"")+" "+(s[10]?"multiline":"")+" svelte-emh6tw"))&&h(e,"class",m),(!f||r[0]&16)&&h(t,"id",s[4]),(!f||r[0]&16)&&h(t,"data-cy",s[4]),(!f||r[0]&5284&&w!==(w="input-group "+(s[5]?"alt":"")+" "+(s[7]!==null?`highlight-${s[7]}`:"")+" "+(s[2]?"tooltip":"")+" "+(s[12]||"")+" "+(s[10]?"multiline":"")+" svelte-emh6tw"))&&h(t,"class",w),(!f||r[0]&4)&&h(t,"data-tooltip",s[2]),s[15]?a?(a.p(s,r),r[0]&32768&&k(a,1)):(a=X(s),a.c(),k(a,1),a.m(_.parentNode,_)):a&&($(),V(a,1,1,()=>{a=null}),ee())},i(s){f||(k(d,s),k(a),f=!0)},o(s){V(d,s),V(a),f=!1},d(s){s&&(p(t),p(y),p(_)),d&&d.d(s),l[24](null),a&&a.d(s),I=!1,ge(q)}}}function Te(l){let t=l[4],e,u,i=Y(l);return{c(){i.c(),e=O()},l(o){i.l(o),e=O()},m(o,m){i.m(o,m),F(o,e,m),u=!0},p(o,m){m[0]&16&&Z(t,t=o[4])?($(),V(i,1,1,x),ee(),i=Y(o),i.c(),k(i,1),i.m(e.parentNode,e)):i.p(o,m)},i(o){u||(k(i),u=!0)},o(o){V(i),u=!1},d(o){o&&p(e),i.d(o)}}}function Ce(l){const t=l.target;requestAnimationFrame(()=>{t.select();const e=()=>(t.removeEventListener("mouseup",e),!1);t.addEventListener("mouseup",e)})}function Ne(l,t,e){let u,i,o,m=x,w=()=>(m(),m=be(u,n=>e(14,o=n)),u);l.$$.on_destroy.push(()=>m());let{$$slots:y={},$$scope:_}=t,{placeholder:f=""}=t,{hook:I=""}=t,{alt:q=!1}=t,{rounded:v=!1}=t,{highlight:d=te.Default}=t,{value:a=""}=t,{disabled:s=!1}=t,{tooltip:r=""}=t,{copyOnInteract:g=!1}=t,{centered:S=!1}=t,{rich:M=!1}=t,{autoFocus:T=!1}=t,{rules:b=new De}=t,L="";function le(){return b.required&&!a?(e(15,L="This field is required."),!1):a.length<b.minLength?(e(15,L=`Minimum length is ${b.minLength} characters.`),!1):a.length>b.maxLength?(e(15,L=`Maximum length is ${b.maxLength} characters.`),!1):b.pattern&&!b.pattern.test(a)?(e(15,L="Invalid format."),!1):(e(15,L=""),!0)}const ne=Me(()=>{let n=le();D("isValid",n),D("input",a)},5);g&&(r="Copy",s=!0);let{class:B=""}=t;const D=fe(),A=Q(a);ce(l,A,n=>e(13,i=n));let K=[],c;const P=()=>{D("enter",a),K.forEach(n=>n())};function j(){ne()}function ie(){D("blur")}function se(n){n.code==="Enter"&&P()}function ae(n){pe[n?"unshift":"push"](()=>{o=n,u.set(o)})}function ue(){i=this.value,A.set(i)}const oe=async n=>{g&&await navigator.clipboard.writeText(`${a}`)};return l.$$set=n=>{"placeholder"in n&&e(3,f=n.placeholder),"hook"in n&&e(4,I=n.hook),"alt"in n&&e(5,q=n.alt),"rounded"in n&&e(6,v=n.rounded),"highlight"in n&&e(7,d=n.highlight),"value"in n&&e(0,a=n.value),"disabled"in n&&e(1,s=n.disabled),"tooltip"in n&&e(2,r=n.tooltip),"copyOnInteract"in n&&e(8,g=n.copyOnInteract),"centered"in n&&e(9,S=n.centered),"rich"in n&&e(10,M=n.rich),"autoFocus"in n&&e(11,T=n.autoFocus),"rules"in n&&e(21,b=n.rules),"class"in n&&e(12,B=n.class),"$$scope"in n&&e(27,_=n.$$scope)},l.$$.update=()=>{if(l.$$.dirty[0]&8192&&e(0,a=i),l.$$.dirty[0]&1&&A.set(a),l.$$.dirty[0]&4213761&&M&&o&&(!c||!Array.from(o.parentNode.children).some(n=>n===c.codemirror.dom))){c&&c.codemirror.destroy();let n=o;e(22,c=new J(n,{keys:J.ChatEditorKeys(()=>P()),only_autolink:!0,extensions:[Ae.editorAttributes.of({class:n.classList.toString()})]})),c.value(a);let R=c.codemirror.state.doc.line(c.codemirror.state.doc.lines);c.codemirror.dispatch({selection:{head:R.to,anchor:R.to}}),T&&c.codemirror.focus(),c.updatePlaceholder(n.placeholder),c.registerListener("input",({value:re})=>{A.set(re),j()}),K.push(()=>{c.value("")})}l.$$.dirty[0]&4203520&&M&&c&&c.value()!==i&&c.value(i)},w(e(16,u=Q(null))),[a,s,r,f,I,q,v,d,g,S,M,T,B,i,o,L,u,A,j,ie,se,b,c,y,ae,ue,oe,_]}class je extends Ie{constructor(t){super(),ve(this,t,Ne,Te,Z,{placeholder:3,hook:4,alt:5,rounded:6,highlight:7,value:0,disabled:1,tooltip:2,copyOnInteract:8,centered:9,rich:10,autoFocus:11,rules:21,class:12},null,[-1,-1])}}export{De as I,je as a};
