import{s as ee,z as He,e as V,a as P,c as S,b as C,f as d,g as T,l as E,i as O,h as p,A as Xe,B as Fe,C as Je,k as _e,n as H,p as Qe,q as Ze,H as he,t as me,d as ge,j as Ee,I as ze,af as We,M as Ve,N as Se,E as st}from"../chunks/scheduler.BSglW4Eu.js";import{S as te,i as ne,c as _,a as h,m as v,t as c,b as m,e as b,g as fe,d as $e,f as Ce}from"../chunks/index.B6nwG8t1.js";import{I as re,B as oe}from"../chunks/Icon.6xDlbKJO.js";import{e as le,T as ve,B as lt}from"../chunks/UnderConstruction.svelte_svelte_type_style_lang.C3y3v04B.js";import{$ as ke,a as Q,A as ie,S as Pe,a2 as Y}from"../chunks/Store.B71MOcmv.js";import{L as J}from"../chunks/Label.BBWrQCSs.js";import{P as pe,b as at,d as ot,m as it,e as ft,f as $t}from"../chunks/Role.svelte_svelte_type_style_lang.CD9JYgPq.js";/* empty css                                                       */import{w as Ye}from"../chunks/entry.DdGfY-DO.js";import{T as ut}from"../chunks/Topbar.By1bP7wN.js";import{M as ct}from"../chunks/Modal.CxJZjQwW.js";import{a as de}from"../chunks/Input.B4IvBqt7.js";import{N as mt}from"../chunks/Navigation.DvEiY1lv.js";/* empty css                                                    */import{P as et}from"../chunks/PopupButton.D5RnIpVu.js";import{C as tt}from"../chunks/ColorPicker.Ce6e6R2N.js";import{P as nt}from"../chunks/ProfilePicture.D1Mu2KhJ.js";import{S as gt}from"../chunks/Select.DsVbKiZc.js";import{C as pt}from"../chunks/Controls.IMf_6yt7.js";import{S as De}from"../chunks/Switch.CRGwRApw.js";import{S as we}from"../chunks/SettingSection.Dpr6iUs8.js";function dt(i){let e,n;return e=new re({props:{icon:Q.Search}}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p:H,i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function _t(i){let e,n,t,r,l,s;r=new de({props:{alt:!0,placeholder:i[0]("generic.search_placeholder"),$$slots:{default:[dt]},$$scope:{ctx:i}}});const a=i[1].default,o=He(a,i,i[2],null);return{c(){e=V("div"),n=V("div"),t=V("div"),_(r.$$.fragment),l=P(),o&&o.c(),this.h()},l(f){e=S(f,"DIV",{class:!0});var $=C(e);n=S($,"DIV",{class:!0});var g=C(n);t=S(g,"DIV",{class:!0});var k=C(t);h(r.$$.fragment,k),k.forEach(d),l=T(g),o&&o.l(g),g.forEach(d),$.forEach(d),this.h()},h(){E(t,"class","sidebar-pre svelte-uhqyb4"),E(n,"class","sidebar svelte-uhqyb4"),E(e,"class","sidebar-layout open svelte-uhqyb4")},m(f,$){O(f,e,$),p(e,n),p(n,t),v(r,t,null),p(n,l),o&&o.m(n,null),s=!0},p(f,[$]){const g={};$&1&&(g.placeholder=f[0]("generic.search_placeholder")),$&4&&(g.$$scope={dirty:$,ctx:f}),r.$set(g),o&&o.p&&(!s||$&4)&&Xe(o,a,f,f[2],s?Je(a,f[2],$,null):Fe(f[2]),null)},i(f){s||(c(r.$$.fragment,f),c(o,f),s=!0)},o(f){m(r.$$.fragment,f),m(o,f),s=!1},d(f){f&&d(e),b(r),o&&o.d(f)}}}function ht(i,e,n){let t;_e(i,ke,s=>n(0,t=s));let{$$slots:r={},$$scope:l}=e;return i.$$set=s=>{"$$scope"in s&&n(2,l=s.$$scope)},[t,r,l]}class vt extends te{constructor(e){super(),ne(this,e,ht,_t,ee,{})}}function bt(i){let e,n,t,r,l,s,a;return{c(){e=V("label"),n=V("input"),t=P(),r=V("span"),this.h()},l(o){e=S(o,"LABEL",{class:!0});var f=C(e);n=S(f,"INPUT",{"data-cy":!0,type:!0,class:!0}),t=T(f),r=S(f,"SPAN",{class:!0}),C(r).forEach(d),f.forEach(d),this.h()},h(){E(n,"data-cy",i[2]),E(n,"type","checkbox"),n.readOnly=!0,E(n,"class","svelte-zvlbzt"),E(r,"class","slider svelte-zvlbzt"),E(e,"class",l="switch "+(i[1]?"small":"")+" "+i[0]+" svelte-zvlbzt")},m(o,f){O(o,e,f),p(e,n),p(e,t),p(e,r),s||(a=Qe(n,"click",i[3]),s=!0)},p(o,[f]){f&4&&E(n,"data-cy",o[2]),f&3&&l!==(l="switch "+(o[1]?"small":"")+" "+o[0]+" svelte-zvlbzt")&&E(e,"class",l)},i:H,o:H,d(o){o&&d(e),s=!1,a()}}}function wt(i,e,n){let{state:t=pe.Unset}=e,{small:r=!1}=e,{hook:l=""}=e;const s=Ze();function a(o){t===pe.Allowed?n(0,t=pe.Denied):t===pe.Unset?n(0,t=pe.Allowed):n(0,t=pe.Unset),s("toggle",t)}return i.$$set=o=>{"state"in o&&n(0,t=o.state),"small"in o&&n(1,r=o.small),"hook"in o&&n(2,l=o.hook)},[t,r,l,a]}class kt extends te{constructor(e){super(),ne(this,e,wt,bt,ee,{state:0,small:1,hook:2})}}function Ae(i,e,n){const t=i.slice();return t[1]=e[n],t}function Be(i){let e,n,t=i[1].description+"",r,l,s,a,o,f;return a=new kt({props:{state:i[1].state}}),{c(){e=V("div"),n=V("div"),r=me(t),l=P(),s=V("div"),_(a.$$.fragment),o=P(),this.h()},l($){e=S($,"DIV",{class:!0});var g=C(e);n=S(g,"DIV",{class:!0});var k=C(n);r=ge(k,t),k.forEach(d),l=T(g),s=S(g,"DIV",{class:!0});var w=C(s);h(a.$$.fragment,w),w.forEach(d),o=T(g),g.forEach(d),this.h()},h(){E(n,"class","permission-description svelte-gs5dt4"),E(s,"class","permission-switch svelte-gs5dt4"),E(e,"class","permission svelte-gs5dt4")},m($,g){O($,e,g),p(e,n),p(n,r),p(e,l),p(e,s),v(a,s,null),p(e,o),f=!0},p($,g){(!f||g&1)&&t!==(t=$[1].description+"")&&Ee(r,t);const k={};g&1&&(k.state=$[1].state),a.$set(k)},i($){f||(c(a.$$.fragment,$),f=!0)},o($){m(a.$$.fragment,$),f=!1},d($){$&&d(e),b(a)}}}function Dt(i){let e,n,t=le(i[0]),r=[];for(let s=0;s<t.length;s+=1)r[s]=Be(Ae(i,t,s));const l=s=>m(r[s],1,1,()=>{r[s]=null});return{c(){e=V("div");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){e=S(s,"DIV",{class:!0});var a=C(e);for(let o=0;o<r.length;o+=1)r[o].l(a);a.forEach(d),this.h()},h(){E(e,"class","permissions-container svelte-gs5dt4")},m(s,a){O(s,e,a);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null);n=!0},p(s,[a]){if(a&1){t=le(s[0]);let o;for(o=0;o<t.length;o+=1){const f=Ae(s,t,o);r[o]?(r[o].p(f,a),c(r[o],1)):(r[o]=Be(f),r[o].c(),c(r[o],1),r[o].m(e,null))}for(fe(),o=t.length;o<r.length;o+=1)l(o);$e()}},i(s){if(!n){for(let a=0;a<t.length;a+=1)c(r[a]);n=!0}},o(s){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)m(r[a]);n=!1},d(s){s&&d(e),he(r,s)}}}function It(i,e,n){let{permissions:t=[]}=e;return i.$$set=r=>{"permissions"in r&&n(0,t=r.permissions)},[t]}class Et extends te{constructor(e){super(),ne(this,e,It,Dt,ee,{permissions:0})}}function qe(i,e,n){const t=i.slice();return t[3]=e[n],t}function Me(i){let e,n,t,r;e=new J({props:{text:i[3].toUpperCase()}});function l(...s){return i[2](i[3],...s)}return t=new Et({props:{permissions:i[0].filter(l)}}),{c(){_(e.$$.fragment),n=P(),_(t.$$.fragment)},l(s){h(e.$$.fragment,s),n=T(s),h(t.$$.fragment,s)},m(s,a){v(e,s,a),O(s,n,a),v(t,s,a),r=!0},p(s,a){i=s},i(s){r||(c(e.$$.fragment,s),c(t.$$.fragment,s),r=!0)},o(s){m(e.$$.fragment,s),m(t.$$.fragment,s),r=!1},d(s){s&&d(n),b(e,s),b(t,s)}}}function Vt(i){let e,n,t,r;n=new J({props:{text:" Set Permissions"}});let l=le(i[1]),s=[];for(let o=0;o<l.length;o+=1)s[o]=Me(qe(i,l,o));const a=o=>m(s[o],1,1,()=>{s[o]=null});return{c(){e=V("div"),_(n.$$.fragment),t=P();for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){e=S(o,"DIV",{id:!0,class:!0});var f=C(e);h(n.$$.fragment,f),t=T(f);for(let $=0;$<s.length;$+=1)s[$].l(f);f.forEach(d),this.h()},h(){E(e,"id","community-permissions"),E(e,"class","svelte-1b6namo")},m(o,f){O(o,e,f),v(n,e,null),p(e,t);for(let $=0;$<s.length;$+=1)s[$]&&s[$].m(e,null);r=!0},p(o,[f]){if(f&3){l=le(o[1]);let $;for($=0;$<l.length;$+=1){const g=qe(o,l,$);s[$]?(s[$].p(g,f),c(s[$],1)):(s[$]=Me(g),s[$].c(),c(s[$],1),s[$].m(e,null))}for(fe(),$=l.length;$<s.length;$+=1)a($);$e()}},i(o){if(!r){c(n.$$.fragment,o);for(let f=0;f<l.length;f+=1)c(s[f]);r=!0}},o(o){m(n.$$.fragment,o),s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)m(s[f]);r=!1},d(o){o&&d(e),b(n),he(s,o)}}}function St(i){let e=ot,n=Object.values(at);return[e,n,(r,l)=>l.category===r]}class Ct extends te{constructor(e){super(),ne(this,e,St,Vt,ee,{})}}function Pt(i){let e,n,t,r,l,s,a;const o=i[2].default,f=He(o,i,i[1],null);return{c(){e=V("div"),n=V("div"),f&&f.c(),t=P(),r=V("input"),this.h()},l($){e=S($,"DIV",{class:!0,role:!0});var g=C(e);n=S(g,"DIV",{class:!0});var k=C(n);f&&f.l(k),t=T(k),r=S(k,"INPUT",{class:!0,type:!0}),k.forEach(d),g.forEach(d),this.h()},h(){E(r,"class","input svelte-h7qqq6"),E(r,"type","number"),E(n,"class","input-container svelte-h7qqq6"),E(e,"class","input-group svelte-h7qqq6"),E(e,"role","none")},m($,g){O($,e,g),p(e,n),f&&f.m(n,null),p(n,t),p(n,r),ze(r,i[0]),l=!0,s||(a=Qe(r,"input",i[3]),s=!0)},p($,[g]){f&&f.p&&(!l||g&2)&&Xe(f,o,$,$[1],l?Je(o,$[1],g,null):Fe($[1]),null),g&1&&We(r.value)!==$[0]&&ze(r,$[0])},i($){l||(c(f,$),l=!0)},o($){m(f,$),l=!1},d($){$&&d(e),f&&f.d($),s=!1,a()}}}function Tt(i,e,n){let{$$slots:t={},$$scope:r}=e,{defaultValue:l=0}=e;function s(){l=We(this.value),n(0,l)}return i.$$set=a=>{"defaultValue"in a&&n(0,l=a.defaultValue),"$$scope"in a&&n(1,r=a.$$scope)},[l,r,t,s]}class zt extends te{constructor(e){super(),ne(this,e,Tt,Pt,ee,{defaultValue:0})}}function At(i){let e,n,t;function r(s){i[3](s)}let l={textInputModes:["hex"],isDialog:!1,isAlpha:!1};return i[1]!==void 0&&(l.hex=i[1]),e=new tt({props:l}),Ve.push(()=>Ce(e,"hex",r)),{c(){_(e.$$.fragment)},l(s){h(e.$$.fragment,s)},m(s,a){v(e,s,a),t=!0},p(s,a){const o={};!n&&a&2&&(n=!0,o.hex=s[1],Se(()=>n=!1)),e.$set(o)},i(s){t||(c(e.$$.fragment,s),t=!0)},o(s){m(e.$$.fragment,s),t=!1},d(s){b(e,s)}}}function Bt(i){let e,n,t;return n=new re({props:{icon:Q.Eyedropper}}),{c(){e=V("div"),_(n.$$.fragment),this.h()},l(r){e=S(r,"DIV",{slot:!0,class:!0});var l=C(e);h(n.$$.fragment,l),l.forEach(d),this.h()},h(){E(e,"slot","icon"),E(e,"class","control")},m(r,l){O(r,e,l),v(n,e,null),t=!0},p:H,i(r){t||(c(n.$$.fragment,r),t=!0)},o(r){m(n.$$.fragment,r),t=!1},d(r){r&&d(e),b(n)}}}function qt(i){let e,n;return e=new re({props:{icon:Q.Plus}}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p:H,i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function Mt(i){let e,n,t,r,l,s,a,o,f,$,g,k,w,L,q,x,K,U,N,B,j,D,R,I;return n=new J({props:{text:"Create a new role"}}),s=new J({props:{text:"Name"}}),o=new de({props:{placeholder:"Role name"}}),g=new J({props:{text:"Level"}}),w=new zt({props:{defaultValue:0}}),x=new J({props:{text:"Color"}}),U=new et({props:{name:i[0]("settings.preferences.pick"),color:i[1],$$slots:{icon:[Bt],default:[At]},$$scope:{ctx:i}}}),j=new J({props:{text:"Create"}}),R=new oe({props:{text:"Add",appearance:ie.Primary,disabled:!0,$$slots:{default:[qt]},$$scope:{ctx:i}}}),{c(){e=V("div"),_(n.$$.fragment),t=P(),r=V("div"),l=V("div"),_(s.$$.fragment),a=P(),_(o.$$.fragment),f=P(),$=V("div"),_(g.$$.fragment),k=P(),_(w.$$.fragment),L=P(),q=V("div"),_(x.$$.fragment),K=P(),_(U.$$.fragment),N=P(),B=V("div"),_(j.$$.fragment),D=P(),_(R.$$.fragment),this.h()},l(u){e=S(u,"DIV",{class:!0});var z=C(e);h(n.$$.fragment,z),t=T(z),r=S(z,"DIV",{class:!0});var G=C(r);l=S(G,"DIV",{class:!0});var X=C(l);h(s.$$.fragment,X),a=T(X),h(o.$$.fragment,X),X.forEach(d),f=T(G),$=S(G,"DIV",{class:!0});var A=C($);h(g.$$.fragment,A),k=T(A),h(w.$$.fragment,A),A.forEach(d),L=T(G),q=S(G,"DIV",{class:!0});var M=C(q);h(x.$$.fragment,M),K=T(M),h(U.$$.fragment,M),M.forEach(d),N=T(G),B=S(G,"DIV",{class:!0});var W=C(B);h(j.$$.fragment,W),D=T(W),h(R.$$.fragment,W),W.forEach(d),G.forEach(d),z.forEach(d),this.h()},h(){E(l,"class","form-control name svelte-1w9zrna"),E($,"class","form-control"),E(q,"class","form-control"),E(B,"class","form-control"),E(r,"class","form svelte-1w9zrna"),E(e,"class","create-role svelte-1w9zrna")},m(u,z){O(u,e,z),v(n,e,null),p(e,t),p(e,r),p(r,l),v(s,l,null),p(l,a),v(o,l,null),p(r,f),p(r,$),v(g,$,null),p($,k),v(w,$,null),p(r,L),p(r,q),v(x,q,null),p(q,K),v(U,q,null),p(r,N),p(r,B),v(j,B,null),p(B,D),v(R,B,null),I=!0},p(u,[z]){const G={};z&1&&(G.name=u[0]("settings.preferences.pick")),z&2&&(G.color=u[1]),z&18&&(G.$$scope={dirty:z,ctx:u}),U.$set(G);const X={};z&16&&(X.$$scope={dirty:z,ctx:u}),R.$set(X)},i(u){I||(c(n.$$.fragment,u),c(s.$$.fragment,u),c(o.$$.fragment,u),c(g.$$.fragment,u),c(w.$$.fragment,u),c(x.$$.fragment,u),c(U.$$.fragment,u),c(j.$$.fragment,u),c(R.$$.fragment,u),I=!0)},o(u){m(n.$$.fragment,u),m(s.$$.fragment,u),m(o.$$.fragment,u),m(g.$$.fragment,u),m(w.$$.fragment,u),m(x.$$.fragment,u),m(U.$$.fragment,u),m(j.$$.fragment,u),m(R.$$.fragment,u),I=!1},d(u){u&&d(e),b(n),b(s),b(o),b(g),b(w),b(x),b(U),b(j),b(R)}}}function Rt(i,e,n){let t,r;_e(i,ke,a=>n(0,t=a));let l=Ye("#30ae03");_e(i,l,a=>n(1,r=a));function s(a){r=a,l.set(r)}return[t,r,l,s]}class yt extends te{constructor(e){super(),ne(this,e,Rt,Mt,ee,{})}}function Nt(i){let e,n,t,r,l,s,a,o,f,$,g,k,w,L,q,x,K,U,N,B,j,D,R,I;return t=new nt({props:{size:Pe.Large,noIndicator:!0}}),s=new J({props:{text:"Name"}}),o=new de({props:{placeholder:"Community Name"}}),g=new J({props:{text:"MOTD"}}),w=new de({props:{placeholder:"Message of the Day"}}),x=new J({props:{text:"Community ID"}}),U=new de({props:{value:"did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK",copyOnInteract:!0}}),j=new J({props:{text:"Delete Community"}}),R=new oe({props:{appearance:ie.Error,text:"Delete"}}),{c(){e=V("div"),n=V("div"),_(t.$$.fragment),r=P(),l=V("div"),_(s.$$.fragment),a=P(),_(o.$$.fragment),f=P(),$=V("div"),_(g.$$.fragment),k=P(),_(w.$$.fragment),L=P(),q=V("div"),_(x.$$.fragment),K=P(),_(U.$$.fragment),N=P(),B=V("div"),_(j.$$.fragment),D=P(),_(R.$$.fragment),this.h()},l(u){e=S(u,"DIV",{class:!0});var z=C(e);n=S(z,"DIV",{class:!0});var G=C(n);h(t.$$.fragment,G),G.forEach(d),r=T(z),l=S(z,"DIV",{class:!0});var X=C(l);h(s.$$.fragment,X),a=T(X),h(o.$$.fragment,X),X.forEach(d),f=T(z),$=S(z,"DIV",{class:!0});var A=C($);h(g.$$.fragment,A),k=T(A),h(w.$$.fragment,A),A.forEach(d),L=T(z),q=S(z,"DIV",{class:!0});var M=C(q);h(x.$$.fragment,M),K=T(M),h(U.$$.fragment,M),M.forEach(d),N=T(z),B=S(z,"DIV",{class:!0});var W=C(B);h(j.$$.fragment,W),D=T(W),h(R.$$.fragment,W),W.forEach(d),z.forEach(d),this.h()},h(){E(n,"class","header svelte-igm12a"),E(l,"class","section svelte-igm12a"),E($,"class","section svelte-igm12a"),E(q,"class","section svelte-igm12a"),E(B,"class","section svelte-igm12a"),E(e,"class","community-details svelte-igm12a")},m(u,z){O(u,e,z),p(e,n),v(t,n,null),p(e,r),p(e,l),v(s,l,null),p(l,a),v(o,l,null),p(e,f),p(e,$),v(g,$,null),p($,k),v(w,$,null),p(e,L),p(e,q),v(x,q,null),p(q,K),v(U,q,null),p(e,N),p(e,B),v(j,B,null),p(B,D),v(R,B,null),I=!0},p:H,i(u){I||(c(t.$$.fragment,u),c(s.$$.fragment,u),c(o.$$.fragment,u),c(g.$$.fragment,u),c(w.$$.fragment,u),c(x.$$.fragment,u),c(U.$$.fragment,u),c(j.$$.fragment,u),c(R.$$.fragment,u),I=!0)},o(u){m(t.$$.fragment,u),m(s.$$.fragment,u),m(o.$$.fragment,u),m(g.$$.fragment,u),m(w.$$.fragment,u),m(x.$$.fragment,u),m(U.$$.fragment,u),m(j.$$.fragment,u),m(R.$$.fragment,u),I=!1},d(u){u&&d(e),b(t),b(s),b(o),b(g),b(w),b(x),b(U),b(j),b(R)}}}class Lt extends te{constructor(e){super(),ne(this,e,null,Nt,ee,{})}}function Ut(i){let e,n,t,r,l;return n=new J({props:{text:"Select Role"}}),r=new gt({props:{options:i[0],alt:!0}}),{c(){e=V("div"),_(n.$$.fragment),t=P(),_(r.$$.fragment),this.h()},l(s){e=S(s,"DIV",{class:!0});var a=C(e);h(n.$$.fragment,a),t=T(a),h(r.$$.fragment,a),a.forEach(d),this.h()},h(){E(e,"class","role-selector")},m(s,a){O(s,e,a),v(n,e,null),p(e,t),v(r,e,null),l=!0},p:H,i(s){l||(c(n.$$.fragment,s),c(r.$$.fragment,s),l=!0)},o(s){m(n.$$.fragment,s),m(r.$$.fragment,s),l=!1},d(s){s&&d(e),b(n),b(r)}}}function xt(i,e,n){let{roles:t=it}=e,r=t.map(l=>({value:l.id,text:l.name}));return i.$$set=l=>{"roles"in l&&n(1,t=l.roles)},[r,t]}class Ot extends te{constructor(e){super(),ne(this,e,xt,Ut,ee,{roles:1})}}function Re(i,e,n){const t=i.slice();return t[1]=e[n],t}function ye(i,e,n){const t=i.slice();return t[4]=e[n],t}function Ne(i,e,n){const t=i.slice();return t[7]=e[n],t}function jt(i){let e,n;return e=new re({props:{icon:Q.Plus}}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p:H,i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function Gt(i){let e,n;return e=new re({props:{icon:Q.Trash}}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p:H,i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function Kt(i){let e,n;return e=new re({props:{icon:Q.Trash}}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p:H,i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function Ht(i){let e,n,t,r,l,s;return e=new oe({props:{text:"Add Member",appearance:ie.Primary,$$slots:{default:[jt]},$$scope:{ctx:i}}}),t=new oe({props:{text:"Kick Selected",appearance:ie.Error,$$slots:{default:[Gt]},$$scope:{ctx:i}}}),l=new oe({props:{text:"Ban Selected",appearance:ie.Error,$$slots:{default:[Kt]},$$scope:{ctx:i}}}),{c(){_(e.$$.fragment),n=P(),_(t.$$.fragment),r=P(),_(l.$$.fragment)},l(a){h(e.$$.fragment,a),n=T(a),h(t.$$.fragment,a),r=T(a),h(l.$$.fragment,a)},m(a,o){v(e,a,o),O(a,n,o),v(t,a,o),O(a,r,o),v(l,a,o),s=!0},p(a,o){const f={};o&1024&&(f.$$scope={dirty:o,ctx:a}),e.$set(f);const $={};o&1024&&($.$$scope={dirty:o,ctx:a}),t.$set($);const g={};o&1024&&(g.$$scope={dirty:o,ctx:a}),l.$set(g)},i(a){s||(c(e.$$.fragment,a),c(t.$$.fragment,a),c(l.$$.fragment,a),s=!0)},o(a){m(e.$$.fragment,a),m(t.$$.fragment,a),m(l.$$.fragment,a),s=!1},d(a){a&&(d(n),d(r)),b(e,a),b(t,a),b(l,a)}}}function Xt(i){let e=i[1].user.name+"",n;return{c(){n=me(e)},l(t){n=ge(t,e)},m(t,r){O(t,n,r)},p:H,d(t){t&&d(n)}}}function Ft(i){let e=i[1].user.key+"",n;return{c(){n=me(e)},l(t){n=ge(t,e)},m(t,r){O(t,n,r)},p:H,d(t){t&&d(n)}}}function Jt(i){let e=lt(i[1].meta.join)+"",n;return{c(){n=me(e)},l(t){n=ge(t,e)},m(t,r){O(t,n,r)},p:H,d(t){t&&d(n)}}}function Qt(i){let e=i[7].name+"",n;return{c(){n=me(e)},l(t){n=ge(t,e)},m(t,r){O(t,n,r)},p:H,d(t){t&&d(n)}}}function Le(i){let e,n;return e=new ve({props:{color:i[7].color,$$slots:{default:[Qt]},$$scope:{ctx:i}}}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p(t,r){const l={};r&1024&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function Ue(i){let e,n;return e=new rt({props:{tag:i[4]}}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p:H,i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function xe(i){let e,n,t,r,l,s,a,o,f,$,g,k,w,L,q,x,K;t=new nt({props:{size:Pe.Smaller,id:i[1].user.key,image:i[1].user.profile.photo.image,noIndicator:!0}}),s=new ve({props:{singleLine:!0,$$slots:{default:[Xt]},$$scope:{ctx:i}}}),o=new ve({props:{muted:!0,singleLine:!0,$$slots:{default:[Ft]},$$scope:{ctx:i}}}),g=new ve({props:{$$slots:{default:[Jt]},$$scope:{ctx:i}}});let U=le(i[1].roles),N=[];for(let I=0;I<U.length;I+=1)N[I]=Le(Ne(i,U,I));const B=I=>m(N[I],1,1,()=>{N[I]=null});let j=le(i[1].tags),D=[];for(let I=0;I<j.length;I+=1)D[I]=Ue(ye(i,j,I));const R=I=>m(D[I],1,1,()=>{D[I]=null});return{c(){e=V("div"),n=V("div"),_(t.$$.fragment),r=P(),l=V("div"),_(s.$$.fragment),a=P(),_(o.$$.fragment),f=P(),$=V("div"),_(g.$$.fragment),k=P(),w=V("div");for(let I=0;I<N.length;I+=1)N[I].c();L=P(),q=V("div");for(let I=0;I<D.length;I+=1)D[I].c();x=P(),this.h()},l(I){e=S(I,"DIV",{class:!0});var u=C(e);n=S(u,"DIV",{class:!0});var z=C(n);h(t.$$.fragment,z),r=T(z),l=S(z,"DIV",{class:!0});var G=C(l);h(s.$$.fragment,G),a=T(G),h(o.$$.fragment,G),G.forEach(d),z.forEach(d),f=T(u),$=S(u,"DIV",{class:!0});var X=C($);h(g.$$.fragment,X),X.forEach(d),k=T(u),w=S(u,"DIV",{class:!0});var A=C(w);for(let W=0;W<N.length;W+=1)N[W].l(A);A.forEach(d),L=T(u),q=S(u,"DIV",{class:!0});var M=C(q);for(let W=0;W<D.length;W+=1)D[W].l(M);M.forEach(d),x=T(u),u.forEach(d),this.h()},h(){E(l,"class","user-details"),E(n,"class","column user svelte-6mmpui"),E($,"class","column svelte-6mmpui"),E(w,"class","column svelte-6mmpui"),E(q,"class","column svelte-6mmpui"),E(e,"class","member-row svelte-6mmpui")},m(I,u){O(I,e,u),p(e,n),v(t,n,null),p(n,r),p(n,l),v(s,l,null),p(l,a),v(o,l,null),p(e,f),p(e,$),v(g,$,null),p(e,k),p(e,w);for(let z=0;z<N.length;z+=1)N[z]&&N[z].m(w,null);p(e,L),p(e,q);for(let z=0;z<D.length;z+=1)D[z]&&D[z].m(q,null);p(e,x),K=!0},p(I,u){const z={};u&1024&&(z.$$scope={dirty:u,ctx:I}),s.$set(z);const G={};u&1024&&(G.$$scope={dirty:u,ctx:I}),o.$set(G);const X={};if(u&1024&&(X.$$scope={dirty:u,ctx:I}),g.$set(X),u&1){U=le(I[1].roles);let A;for(A=0;A<U.length;A+=1){const M=Ne(I,U,A);N[A]?(N[A].p(M,u),c(N[A],1)):(N[A]=Le(M),N[A].c(),c(N[A],1),N[A].m(w,null))}for(fe(),A=U.length;A<N.length;A+=1)B(A);$e()}if(u&1){j=le(I[1].tags);let A;for(A=0;A<j.length;A+=1){const M=ye(I,j,A);D[A]?(D[A].p(M,u),c(D[A],1)):(D[A]=Ue(M),D[A].c(),c(D[A],1),D[A].m(q,null))}for(fe(),A=j.length;A<D.length;A+=1)R(A);$e()}},i(I){if(!K){c(t.$$.fragment,I),c(s.$$.fragment,I),c(o.$$.fragment,I),c(g.$$.fragment,I);for(let u=0;u<U.length;u+=1)c(N[u]);for(let u=0;u<j.length;u+=1)c(D[u]);K=!0}},o(I){m(t.$$.fragment,I),m(s.$$.fragment,I),m(o.$$.fragment,I),m(g.$$.fragment,I),N=N.filter(Boolean);for(let u=0;u<N.length;u+=1)m(N[u]);D=D.filter(Boolean);for(let u=0;u<D.length;u+=1)m(D[u]);K=!1},d(I){I&&d(e),b(t),b(s),b(o),b(g),he(N,I),he(D,I)}}}function Zt(i){let e,n,t,r,l,s,a,o,f,$,g,k,w,L,q,x,K,U;n=new pt({props:{$$slots:{default:[Ht]},$$scope:{ctx:i}}}),a=new J({props:{text:"Members"}}),$=new J({props:{text:"Join Date"}}),w=new J({props:{text:"Roles"}}),x=new J({props:{text:"Tags"}});let N=le(i[0]),B=[];for(let D=0;D<N.length;D+=1)B[D]=xe(Re(i,N,D));const j=D=>m(B[D],1,1,()=>{B[D]=null});return{c(){e=V("div"),_(n.$$.fragment),t=P(),r=V("div"),l=V("div"),s=V("div"),_(a.$$.fragment),o=P(),f=V("div"),_($.$$.fragment),g=P(),k=V("div"),_(w.$$.fragment),L=P(),q=V("div"),_(x.$$.fragment),K=P();for(let D=0;D<B.length;D+=1)B[D].c();this.h()},l(D){e=S(D,"DIV",{class:!0});var R=C(e);h(n.$$.fragment,R),t=T(R),r=S(R,"DIV",{class:!0});var I=C(r);l=S(I,"DIV",{class:!0});var u=C(l);s=S(u,"DIV",{class:!0});var z=C(s);h(a.$$.fragment,z),z.forEach(d),o=T(u),f=S(u,"DIV",{class:!0});var G=C(f);h($.$$.fragment,G),G.forEach(d),g=T(u),k=S(u,"DIV",{class:!0});var X=C(k);h(w.$$.fragment,X),X.forEach(d),L=T(u),q=S(u,"DIV",{class:!0});var A=C(q);h(x.$$.fragment,A),A.forEach(d),u.forEach(d),K=T(I);for(let M=0;M<B.length;M+=1)B[M].l(I);I.forEach(d),R.forEach(d),this.h()},h(){E(s,"class","column svelte-6mmpui"),E(f,"class","column svelte-6mmpui"),E(k,"class","column svelte-6mmpui"),E(q,"class","column svelte-6mmpui"),E(l,"class","member-header svelte-6mmpui"),E(r,"class","member-list svelte-6mmpui"),E(e,"class","manage-members svelte-6mmpui")},m(D,R){O(D,e,R),v(n,e,null),p(e,t),p(e,r),p(r,l),p(l,s),v(a,s,null),p(l,o),p(l,f),v($,f,null),p(l,g),p(l,k),v(w,k,null),p(l,L),p(l,q),v(x,q,null),p(r,K);for(let I=0;I<B.length;I+=1)B[I]&&B[I].m(r,null);U=!0},p(D,[R]){const I={};if(R&1024&&(I.$$scope={dirty:R,ctx:D}),n.$set(I),R&1){N=le(D[0]);let u;for(u=0;u<N.length;u+=1){const z=Re(D,N,u);B[u]?(B[u].p(z,R),c(B[u],1)):(B[u]=xe(z),B[u].c(),c(B[u],1),B[u].m(r,null))}for(fe(),u=N.length;u<B.length;u+=1)j(u);$e()}},i(D){if(!U){c(n.$$.fragment,D),c(a.$$.fragment,D),c($.$$.fragment,D),c(w.$$.fragment,D),c(x.$$.fragment,D);for(let R=0;R<N.length;R+=1)c(B[R]);U=!0}},o(D){m(n.$$.fragment,D),m(a.$$.fragment,D),m($.$$.fragment,D),m(w.$$.fragment,D),m(x.$$.fragment,D),B=B.filter(Boolean);for(let R=0;R<B.length;R+=1)m(B[R]);U=!1},d(D){D&&d(e),b(n),b(a),b($),b(w),b(x),he(B,D)}}}function Wt(i){return[ft]}class Yt extends te{constructor(e){super(),ne(this,e,Wt,Zt,ee,{})}}function en(i){let e,n;return e=new mt({props:{routes:i[1],vertical:!0,activeRoute:i[0]}}),e.$on("navigate",i[2]),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p(t,r){const l={};r&1&&(l.activeRoute=t[0]),e.$set(l)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function tn(i){let e,n;return e=new vn({}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function nn(i){let e,n;return e=new kn({}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function rn(i){let e,n;return e=new Sn({}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function sn(i){let e,n;return e=new Lt({}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function ln(i){let e,n;return e=new Yt({}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function an(i){let e,n,t,r,l,s;return e=new yt({}),t=new Ot({}),l=new Ct({}),{c(){_(e.$$.fragment),n=P(),_(t.$$.fragment),r=P(),_(l.$$.fragment)},l(a){h(e.$$.fragment,a),n=T(a),h(t.$$.fragment,a),r=T(a),h(l.$$.fragment,a)},m(a,o){v(e,a,o),O(a,n,o),v(t,a,o),O(a,r,o),v(l,a,o),s=!0},i(a){s||(c(e.$$.fragment,a),c(t.$$.fragment,a),c(l.$$.fragment,a),s=!0)},o(a){m(e.$$.fragment,a),m(t.$$.fragment,a),m(l.$$.fragment,a),s=!1},d(a){a&&(d(n),d(r)),b(e,a),b(t,a),b(l,a)}}}function on(i){let e,n,t,r,l,s,a;n=new vt({props:{$$slots:{default:[en]},$$scope:{ctx:i}}});const o=[an,ln,sn,rn,nn,tn],f=[];function $(g,k){return g[0]===Y.Roles?0:g[0]===Y.Users?1:g[0]===Y.Details?2:g[0]===Y.Moderation?3:g[0]===Y.Security?4:g[0]===Y.Tags?5:-1}return~(l=$(i))&&(s=f[l]=o[l](i)),{c(){e=V("div"),_(n.$$.fragment),t=P(),r=V("div"),s&&s.c(),this.h()},l(g){e=S(g,"DIV",{id:!0,class:!0});var k=C(e);h(n.$$.fragment,k),t=T(k),r=S(k,"DIV",{class:!0});var w=C(r);s&&s.l(w),w.forEach(d),k.forEach(d),this.h()},h(){E(r,"class","content svelte-xcz7qa"),E(e,"id","community-settings"),E(e,"class","svelte-xcz7qa")},m(g,k){O(g,e,k),v(n,e,null),p(e,t),p(e,r),~l&&f[l].m(r,null),a=!0},p(g,[k]){const w={};k&9&&(w.$$scope={dirty:k,ctx:g}),n.$set(w);let L=l;l=$(g),l!==L&&(s&&(fe(),m(f[L],1,1,()=>{f[L]=null}),$e()),~l?(s=f[l],s||(s=f[l]=o[l](g),s.c()),c(s,1),s.m(r,null)):s=null)},i(g){a||(c(n.$$.fragment,g),c(s),a=!0)},o(g){m(n.$$.fragment,g),m(s),a=!1},d(g){g&&d(e),b(n),~l&&f[l].d()}}}function fn(i,e,n){let t=[{to:Y.Details,icon:Q.Details,name:"Details"},{to:Y.Moderation,icon:Q.Shield,name:"Moderation"},{to:Y.Security,icon:Q.Lock,name:"Security"},{to:Y.Roles,icon:Q.ID,name:"Roles"},{to:Y.Tags,icon:Q.Tag,name:"Tags"},{to:Y.Users,icon:Q.Users,name:"Users"},{to:Y.Extensions,icon:Q.Beaker,name:"Extensions"},{to:Y.Bots,icon:Q.Beaker,name:"Bots"}],r=Y.Roles;return[r,t,s=>{n(0,r=s.detail)}]}class $n extends te{constructor(e){super(),ne(this,e,fn,on,ee,{})}}function Oe(i){let e,n;return e=new oe({props:{icon:!0,small:!0,appearance:ie.Transparent,class:"remove-btn",$$slots:{default:[un]},$$scope:{ctx:i}}}),e.$on("click",i[2]),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p(t,r){const l={};r&16&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function un(i){let e,n;return e=new re({props:{icon:Q.XMark,size:Pe.Small}}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p:H,i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function cn(i){let e,n,t,r,l,s=i[0].name+"",a,o,f,$,g;t=new re({props:{icon:Q.Tag,style:"color: "+i[0].color}});let k=i[1]&&Oe(i);return{c(){e=V("div"),n=V("div"),_(t.$$.fragment),r=P(),l=V("div"),a=me(s),f=P(),k&&k.c(),this.h()},l(w){e=S(w,"DIV",{class:!0,style:!0});var L=C(e);n=S(L,"DIV",{class:!0,style:!0});var q=C(n);h(t.$$.fragment,q),r=T(q),l=S(q,"DIV",{class:!0});var x=C(l);a=ge(x,s),x.forEach(d),q.forEach(d),f=T(L),k&&k.l(L),L.forEach(d),this.h()},h(){E(l,"class","text"),E(n,"class","name svelte-kcuv37"),E(n,"style",o=`color: ${i[0].color}`),E(e,"class","tag svelte-kcuv37"),E(e,"style",$=`border-color: ${i[0].color}`)},m(w,L){O(w,e,L),p(e,n),v(t,n,null),p(n,r),p(n,l),p(l,a),p(e,f),k&&k.m(e,null),g=!0},p(w,[L]){const q={};L&1&&(q.style="color: "+w[0].color),t.$set(q),(!g||L&1)&&s!==(s=w[0].name+"")&&Ee(a,s),(!g||L&1&&o!==(o=`color: ${w[0].color}`))&&E(n,"style",o),w[1]?k?(k.p(w,L),L&2&&c(k,1)):(k=Oe(w),k.c(),c(k,1),k.m(e,null)):k&&(fe(),m(k,1,1,()=>{k=null}),$e()),(!g||L&1&&$!==($=`border-color: ${w[0].color}`))&&E(e,"style",$)},i(w){g||(c(t.$$.fragment,w),c(k),g=!0)},o(w){m(t.$$.fragment,w),m(k),g=!1},d(w){w&&d(e),b(t),k&&k.d()}}}function mn(i,e,n){let{tag:t}=e,{editable:r=!1}=e;const l=Ze();function s(){l("remove")}return i.$$set=a=>{"tag"in a&&n(0,t=a.tag),"editable"in a&&n(1,r=a.editable)},[t,r,s]}class rt extends te{constructor(e){super(),ne(this,e,mn,cn,ee,{tag:0,editable:1})}}function je(i,e,n){const t=i.slice();return t[10]=e[n],t[12]=n,t}function gn(i){let e,n,t;function r(s){i[8](s)}let l={textInputModes:["hex"],isDialog:!1,isAlpha:!1};return i[2]!==void 0&&(l.hex=i[2]),e=new tt({props:l}),Ve.push(()=>Ce(e,"hex",r)),{c(){_(e.$$.fragment)},l(s){h(e.$$.fragment,s)},m(s,a){v(e,s,a),t=!0},p(s,a){const o={};!n&&a&4&&(n=!0,o.hex=s[2],Se(()=>n=!1)),e.$set(o)},i(s){t||(c(e.$$.fragment,s),t=!0)},o(s){m(e.$$.fragment,s),t=!1},d(s){b(e,s)}}}function pn(i){let e,n,t;return n=new re({props:{icon:Q.Eyedropper}}),{c(){e=V("div"),_(n.$$.fragment),this.h()},l(r){e=S(r,"DIV",{slot:!0,class:!0});var l=C(e);h(n.$$.fragment,l),l.forEach(d),this.h()},h(){E(e,"slot","icon"),E(e,"class","control")},m(r,l){O(r,e,l),v(n,e,null),t=!0},p:H,i(r){t||(c(n.$$.fragment,r),t=!0)},o(r){m(n.$$.fragment,r),t=!1},d(r){r&&d(e),b(n)}}}function dn(i){let e,n;return e=new re({props:{icon:Q.Plus}}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p:H,i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function Ge(i){let e,n;function t(){return i[9](i[12])}return e=new rt({props:{tag:i[10],editable:!0}}),e.$on("remove",t),{c(){_(e.$$.fragment)},l(r){h(e.$$.fragment,r)},m(r,l){v(e,r,l),n=!0},p(r,l){i=r;const s={};l&1&&(s.tag=i[10]),e.$set(s)},i(r){n||(c(e.$$.fragment,r),n=!0)},o(r){m(e.$$.fragment,r),n=!1},d(r){b(e,r)}}}function _n(i){let e,n,t,r,l,s,a,o,f,$,g,k,w,L,q,x,K,U,N,B,j,D,R,I,u,z;t=new J({props:{text:"Add Tag"}}),a=new J({props:{text:"Name"}});function G(y){i[7](y)}let X={placeholder:"Name"};i[1]!==void 0&&(X.value=i[1]),f=new de({props:X}),Ve.push(()=>Ce(f,"value",G)),w=new J({props:{text:"Color"}}),q=new et({props:{name:i[3]("settings.preferences.pick"),color:i[2],$$slots:{icon:[pn],default:[gn]},$$scope:{ctx:i}}}),U=new J({props:{text:"Create"}}),B=new oe({props:{text:"Add",$$slots:{default:[dn]},$$scope:{ctx:i}}}),B.$on("click",i[5]),R=new J({props:{text:"Available Tags"}});let A=le(i[0]),M=[];for(let y=0;y<A.length;y+=1)M[y]=Ge(je(i,A,y));const W=y=>m(M[y],1,1,()=>{M[y]=null});return{c(){e=V("div"),n=V("div"),_(t.$$.fragment),r=P(),l=V("div"),s=V("div"),_(a.$$.fragment),o=P(),_(f.$$.fragment),g=P(),k=V("div"),_(w.$$.fragment),L=P(),_(q.$$.fragment),x=P(),K=V("div"),_(U.$$.fragment),N=P(),_(B.$$.fragment),j=P(),D=V("div"),_(R.$$.fragment),I=P(),u=V("div");for(let y=0;y<M.length;y+=1)M[y].c();this.h()},l(y){e=S(y,"DIV",{class:!0});var F=C(e);n=S(F,"DIV",{class:!0});var se=C(n);h(t.$$.fragment,se),r=T(se),l=S(se,"DIV",{class:!0});var ae=C(l);s=S(ae,"DIV",{class:!0});var ue=C(s);h(a.$$.fragment,ue),o=T(ue),h(f.$$.fragment,ue),ue.forEach(d),g=T(ae),k=S(ae,"DIV",{class:!0});var Z=C(k);h(w.$$.fragment,Z),L=T(Z),h(q.$$.fragment,Z),Z.forEach(d),x=T(ae),K=S(ae,"DIV",{class:!0});var ce=C(K);h(U.$$.fragment,ce),N=T(ce),h(B.$$.fragment,ce),ce.forEach(d),ae.forEach(d),se.forEach(d),j=T(F),D=S(F,"DIV",{class:!0});var be=C(D);h(R.$$.fragment,be),I=T(be),u=S(be,"DIV",{class:!0});var Te=C(u);for(let Ie=0;Ie<M.length;Ie+=1)M[Ie].l(Te);Te.forEach(d),be.forEach(d),F.forEach(d),this.h()},h(){E(s,"class","section-control svelte-1b54vbw"),E(k,"class","section-control svelte-1b54vbw"),E(K,"class","section-control svelte-1b54vbw"),E(l,"class","section svelte-1b54vbw"),E(n,"class","add-tag svelte-1b54vbw"),E(u,"class","tags svelte-1b54vbw"),E(D,"class","available-tags svelte-1b54vbw"),E(e,"class","community-tags svelte-1b54vbw")},m(y,F){O(y,e,F),p(e,n),v(t,n,null),p(n,r),p(n,l),p(l,s),v(a,s,null),p(s,o),v(f,s,null),p(l,g),p(l,k),v(w,k,null),p(k,L),v(q,k,null),p(l,x),p(l,K),v(U,K,null),p(K,N),v(B,K,null),p(e,j),p(e,D),v(R,D,null),p(D,I),p(D,u);for(let se=0;se<M.length;se+=1)M[se]&&M[se].m(u,null);z=!0},p(y,[F]){const se={};!$&&F&2&&($=!0,se.value=y[1],Se(()=>$=!1)),f.$set(se);const ae={};F&8&&(ae.name=y[3]("settings.preferences.pick")),F&4&&(ae.color=y[2]),F&8196&&(ae.$$scope={dirty:F,ctx:y}),q.$set(ae);const ue={};if(F&8192&&(ue.$$scope={dirty:F,ctx:y}),B.$set(ue),F&65){A=le(y[0]);let Z;for(Z=0;Z<A.length;Z+=1){const ce=je(y,A,Z);M[Z]?(M[Z].p(ce,F),c(M[Z],1)):(M[Z]=Ge(ce),M[Z].c(),c(M[Z],1),M[Z].m(u,null))}for(fe(),Z=A.length;Z<M.length;Z+=1)W(Z);$e()}},i(y){if(!z){c(t.$$.fragment,y),c(a.$$.fragment,y),c(f.$$.fragment,y),c(w.$$.fragment,y),c(q.$$.fragment,y),c(U.$$.fragment,y),c(B.$$.fragment,y),c(R.$$.fragment,y);for(let F=0;F<A.length;F+=1)c(M[F]);z=!0}},o(y){m(t.$$.fragment,y),m(a.$$.fragment,y),m(f.$$.fragment,y),m(w.$$.fragment,y),m(q.$$.fragment,y),m(U.$$.fragment,y),m(B.$$.fragment,y),m(R.$$.fragment,y),M=M.filter(Boolean);for(let F=0;F<M.length;F+=1)m(M[F]);z=!1},d(y){y&&d(e),b(t),b(a),b(f),b(w),b(q),b(U),b(B),b(R),he(M,y)}}}function hn(i,e,n){let t,r;_e(i,ke,w=>n(3,r=w));let l=$t,s="",a=Ye("#30ae03");_e(i,a,w=>n(2,t=w));function o(){s.trim()&&t.trim()&&(n(0,l=[...l,{name:s,color:t}]),n(1,s=""),a.set("#30ae03"))}function f(w){n(0,l=l.filter((L,q)=>q!==w))}function $(w){s=w,n(1,s)}function g(w){t=w,a.set(t)}return[l,s,t,r,a,o,f,$,g,w=>f(w)]}class vn extends te{constructor(e){super(),ne(this,e,hn,_n,ee,{})}}function bn(i){let e,n;return e=new De({props:{on:!0}}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p:H,i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function wn(i){let e,n,t;return n=new we({props:{name:"Human Verification",description:'Require new users to complete a "are you human?" verification test before they can interact with the community.',$$slots:{default:[bn]},$$scope:{ctx:i}}}),{c(){e=V("div"),_(n.$$.fragment),this.h()},l(r){e=S(r,"DIV",{class:!0});var l=C(e);h(n.$$.fragment,l),l.forEach(d),this.h()},h(){E(e,"class","moderation-settings")},m(r,l){O(r,e,l),v(n,e,null),t=!0},p(r,[l]){const s={};l&1&&(s.$$scope={dirty:l,ctx:r}),n.$set(s)},i(r){t||(c(n.$$.fragment,r),t=!0)},o(r){m(n.$$.fragment,r),t=!1},d(r){r&&d(e),b(n)}}}class kn extends te{constructor(e){super(),ne(this,e,null,wn,ee,{})}}function Dn(i){let e,n;return e=new De({props:{on:!0}}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p:H,i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function In(i){let e,n;return e=new De({props:{on:!0}}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p:H,i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function En(i){let e,n;return e=new De({props:{on:!0}}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p:H,i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function Vn(i){let e,n,t,r,l,s,a;return n=new we({props:{name:"Spam Prevention",description:"Limit repeated messages and rapid message generation to prevent spam.",$$slots:{default:[Dn]},$$scope:{ctx:i}}}),r=new we({props:{name:"Profanity Filter",description:"Block messages from being sent if they contain certain words.",$$slots:{default:[In]},$$scope:{ctx:i}}}),s=new we({props:{name:"Age Verification",description:"Requires users to enter their birthdate to verify their age.",$$slots:{default:[En]},$$scope:{ctx:i}}}),{c(){e=V("div"),_(n.$$.fragment),t=P(),_(r.$$.fragment),l=P(),_(s.$$.fragment),this.h()},l(o){e=S(o,"DIV",{class:!0});var f=C(e);h(n.$$.fragment,f),t=T(f),h(r.$$.fragment,f),l=T(f),h(s.$$.fragment,f),f.forEach(d),this.h()},h(){E(e,"class","moderation-settings")},m(o,f){O(o,e,f),v(n,e,null),p(e,t),v(r,e,null),p(e,l),v(s,e,null),a=!0},p(o,[f]){const $={};f&1&&($.$$scope={dirty:f,ctx:o}),n.$set($);const g={};f&1&&(g.$$scope={dirty:f,ctx:o}),r.$set(g);const k={};f&1&&(k.$$scope={dirty:f,ctx:o}),s.$set(k)},i(o){a||(c(n.$$.fragment,o),c(r.$$.fragment,o),c(s.$$.fragment,o),a=!0)},o(o){m(n.$$.fragment,o),m(r.$$.fragment,o),m(s.$$.fragment,o),a=!1},d(o){o&&d(e),b(n),b(r),b(s)}}}class Sn extends te{constructor(e){super(),ne(this,e,null,Vn,ee,{})}}function Ke(i){let e,n;return e=new ct({props:{$$slots:{default:[Cn]},$$scope:{ctx:i}}}),e.$on("close",i[2]),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p(t,r){const l={};r&16&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function Cn(i){let e,n;return e=new $n({}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function Pn(i){let e=i[1]("community.title")+"",n;return{c(){n=me(e)},l(t){n=ge(t,e)},m(t,r){O(t,n,r)},p(t,r){r&2&&e!==(e=t[1]("community.title")+"")&&Ee(n,e)},d(t){t&&d(n)}}}function Tn(i){let e,n,t,r,l,s;return t=new ve({props:{$$slots:{default:[Pn]},$$scope:{ctx:i}}}),l=new J({props:{text:i[1]("community.titleSub")}}),{c(){e=V("div"),n=V("div"),_(t.$$.fragment),r=P(),_(l.$$.fragment),this.h()},l(a){e=S(a,"DIV",{slot:!0});var o=C(e);n=S(o,"DIV",{class:!0});var f=C(n);h(t.$$.fragment,f),r=T(f),h(l.$$.fragment,f),f.forEach(d),o.forEach(d),this.h()},h(){E(n,"class","topbar-details svelte-1pu0x78"),E(e,"slot","before")},m(a,o){O(a,e,o),p(e,n),v(t,n,null),p(n,r),v(l,n,null),s=!0},p(a,o){const f={};o&18&&(f.$$scope={dirty:o,ctx:a}),t.$set(f);const $={};o&2&&($.text=a[1]("community.titleSub")),l.$set($)},i(a){s||(c(t.$$.fragment,a),c(l.$$.fragment,a),s=!0)},o(a){m(t.$$.fragment,a),m(l.$$.fragment,a),s=!1},d(a){a&&d(e),b(t),b(l)}}}function zn(i){let e,n;return e=new re({props:{icon:Q.UserPlus}}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p:H,i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function An(i){let e,n;return e=new re({props:{icon:Q.Users}}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p:H,i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function Bn(i){let e,n;return e=new re({props:{icon:Q.Cog}}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p:H,i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function qn(i){let e,n,t,r,l,s;return e=new oe({props:{appearance:ie.Alt,icon:!0,$$slots:{default:[zn]},$$scope:{ctx:i}}}),t=new oe({props:{appearance:ie.Alt,icon:!0,$$slots:{default:[An]},$$scope:{ctx:i}}}),l=new oe({props:{appearance:ie.Alt,icon:!0,$$slots:{default:[Bn]},$$scope:{ctx:i}}}),l.$on("click",i[3]),{c(){_(e.$$.fragment),n=P(),_(t.$$.fragment),r=P(),_(l.$$.fragment)},l(a){h(e.$$.fragment,a),n=T(a),h(t.$$.fragment,a),r=T(a),h(l.$$.fragment,a)},m(a,o){v(e,a,o),O(a,n,o),v(t,a,o),O(a,r,o),v(l,a,o),s=!0},p(a,o){const f={};o&16&&(f.$$scope={dirty:o,ctx:a}),e.$set(f);const $={};o&16&&($.$$scope={dirty:o,ctx:a}),t.$set($);const g={};o&16&&(g.$$scope={dirty:o,ctx:a}),l.$set(g)},i(a){s||(c(e.$$.fragment,a),c(t.$$.fragment,a),c(l.$$.fragment,a),s=!0)},o(a){m(e.$$.fragment,a),m(t.$$.fragment,a),m(l.$$.fragment,a),s=!1},d(a){a&&(d(n),d(r)),b(e,a),b(t,a),b(l,a)}}}function Mn(i){let e,n,t,r,l,s="asdf",a,o=i[0]&&Ke(i);return t=new ut({props:{$$slots:{controls:[qn],before:[Tn]},$$scope:{ctx:i}}}),{c(){e=V("div"),o&&o.c(),n=P(),_(t.$$.fragment),r=P(),l=V("div"),l.textContent=s,this.h()},l(f){e=S(f,"DIV",{id:!0,class:!0});var $=C(e);o&&o.l($),n=T($),h(t.$$.fragment,$),r=T($),l=S($,"DIV",{class:!0,"data-svelte-h":!0}),st(l)!=="svelte-3ttbws"&&(l.textContent=s),$.forEach(d),this.h()},h(){E(l,"class","content svelte-1pu0x78"),E(e,"id","community"),E(e,"class","svelte-1pu0x78")},m(f,$){O(f,e,$),o&&o.m(e,null),p(e,n),v(t,e,null),p(e,r),p(e,l),a=!0},p(f,[$]){f[0]?o?(o.p(f,$),$&1&&c(o,1)):(o=Ke(f),o.c(),c(o,1),o.m(e,n)):o&&(fe(),m(o,1,1,()=>{o=null}),$e());const g={};$&19&&(g.$$scope={dirty:$,ctx:f}),t.$set(g)},i(f){a||(c(o),c(t.$$.fragment,f),a=!0)},o(f){m(o),m(t.$$.fragment,f),a=!1},d(f){f&&d(e),o&&o.d(),b(t)}}}function Rn(i,e,n){let t;_e(i,ke,a=>n(1,t=a));let r=!1;return[r,t,()=>n(0,r=!1),()=>{n(0,r=!r)}]}class sr extends te{constructor(e){super(),ne(this,e,Rn,Mn,ee,{})}}export{sr as component};
