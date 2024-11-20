import{s as ne,w as Z,i as V,f as D,k as se,u as x,K as We,e as q,a as A,c as F,b as G,g as M,l as z,m as he,h as P,p as ce,t as Xe,d as Ke,j as Je,n as H,x as ee,z as me,A as $e,B as _e,C as ge,q as Oe,M as Qe,N as Ye,o as ve,F as Be,H as Ze}from"./scheduler.BSglW4Eu.js";import{S as le,i as re,t as m,g as U,b as $,d as j,c as w,a as C,m as S,e as R,f as ye,j as ie}from"./index.B6nwG8t1.js";import{t as xe,V as be,r as He}from"./Role.svelte_svelte_type_style_lang.BwIPDJTb.js";import{N as qe,c as et}from"./Navigation.BOvqQJSk.js";import{B as K,I as X}from"./Icon.C4KI94Pk.js";import{T as tt,e as ke}from"./UnderConstruction.svelte_svelte_type_style_lang.pPB3v_UR.js";import{a as nt}from"./Input.C1TamZyD.js";import{$ as pe,b as T,f as te,R as Q,A as O,a as B,U as we,C as lt,S as rt}from"./Store.CCtJxnpE.js";import{L as de}from"./Label.BXbWr0Uc.js";import{C as Fe}from"./Controls.Bb4rps-q.js";import{g as y}from"./entry.BBruSEJG.js";/* empty css                                               */import{W as at}from"./WidgetBar.zfZU2sCQ.js";import{a as oe,s as fe}from"./animations.BV5fPHvH.js";import{P as st}from"./ProfilePictureMany.BMrpmqkx.js";/* empty css                                            */import{P as it}from"./ProfilePicture.Bn4h_yr2.js";function Ce(a){var c,d;let t,n,e,r,l,s,u=((d=(c=a[0])==null?void 0:c.audio)==null?void 0:d.callTimer)&&a[9]&&Se(a);const o=[ut,ft],i=[];function f(_,g){return _[6]?0:_[9]?1:-1}return~(e=f(a))&&(r=i[e]=o[e](a)),{c(){t=q("div"),u&&u.c(),n=A(),r&&r.c(),this.h()},l(_){t=F(_,"DIV",{class:!0});var g=G(t);u&&u.l(g),n=M(g),r&&r.l(g),g.forEach(D),this.h()},h(){z(t,"class",l=he(`call-controls ${a[6]?"incoming":""}`)+" svelte-1p7v43f")},m(_,g){V(_,t,g),u&&u.m(t,null),P(t,n),~e&&i[e].m(t,null),s=!0},p(_,g){var b,E;(E=(b=_[0])==null?void 0:b.audio)!=null&&E.callTimer&&_[9]?u?(u.p(_,g),g&513&&m(u,1)):(u=Se(_),u.c(),m(u,1),u.m(t,n)):u&&(U(),$(u,1,1,()=>{u=null}),j());let v=e;e=f(_),e===v?~e&&i[e].p(_,g):(r&&(U(),$(i[v],1,1,()=>{i[v]=null}),j()),~e?(r=i[e],r?r.p(_,g):(r=i[e]=o[e](_),r.c()),m(r,1),r.m(t,null)):r=null),(!s||g&64&&l!==(l=he(`call-controls ${_[6]?"incoming":""}`)+" svelte-1p7v43f"))&&z(t,"class",l)},i(_){s||(m(u),m(r),s=!0)},o(_){$(u),$(r),s=!1},d(_){_&&D(t),u&&u.d(),~e&&i[e].d()}}}function Se(a){let t,n,e,r,l,s,u;return n=new de({props:{text:a[10]("call.in_call")}}),r=new tt({props:{appearance:O.Success,loading:a[3],$$slots:{default:[ot]},$$scope:{ctx:a}}}),{c(){t=q("div"),w(n.$$.fragment),e=A(),w(r.$$.fragment),this.h()},l(o){t=F(o,"DIV",{class:!0});var i=G(t);C(n.$$.fragment,i),e=M(i),C(r.$$.fragment,i),i.forEach(D),this.h()},h(){z(t,"class","info svelte-1p7v43f")},m(o,i){V(o,t,i),S(n,t,null),P(t,e),S(r,t,null),l=!0,s||(u=ce(t,"click",a[12]),s=!0)},p(o,i){const f={};i&1024&&(f.text=o[10]("call.in_call")),n.$set(f);const c={};i&8&&(c.loading=o[3]),i&2097184&&(c.$$scope={dirty:i,ctx:o}),r.$set(c)},i(o){l||(m(n.$$.fragment,o),m(r.$$.fragment,o),l=!0)},o(o){$(n.$$.fragment,o),$(r.$$.fragment,o),l=!1},d(o){o&&D(t),R(n),R(r),s=!1,u()}}}function ot(a){let t;return{c(){t=Xe(a[5])},l(n){t=Ke(n,a[5])},m(n,e){V(n,t,e)},p(n,e){e&32&&Je(t,n[5])},d(n){n&&D(t)}}}function ft(a){let t,n;return t=new Fe({props:{$$slots:{default:[gt]},$$scope:{ctx:a}}}),{c(){w(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},p(e,r){const l={};r&2100766&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){R(t,e)}}}function ut(a){let t,n,e,r;return t=new de({props:{text:"Incoming Call..."}}),e=new Fe({props:{$$slots:{default:[ht]},$$scope:{ctx:a}}}),{c(){w(t.$$.fragment),n=A(),w(e.$$.fragment)},l(l){C(t.$$.fragment,l),n=M(l),C(e.$$.fragment,l)},m(l,s){S(t,l,s),V(l,n,s),S(e,l,s),r=!0},p(l,s){const u={};s&2097160&&(u.$$scope={dirty:s,ctx:l}),e.$set(u)},i(l){r||(m(t.$$.fragment,l),m(e.$$.fragment,l),r=!0)},o(l){$(t.$$.fragment,l),$(e.$$.fragment,l),r=!1},d(l){l&&D(n),R(t,l),R(e,l)}}}function ct(a){let t,n;return t=new X({props:{icon:a[1]?B.MicrophoneSlash:B.Microphone}}),{c(){w(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},p(e,r){const l={};r&2&&(l.icon=e[1]?B.MicrophoneSlash:B.Microphone),t.$set(l)},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){R(t,e)}}}function mt(a){let t,n;return t=new X({props:{icon:a[2]?B.HeadphoneSlash:B.Headphones}}),{c(){w(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},p(e,r){const l={};r&4&&(l.icon=e[2]?B.HeadphoneSlash:B.Headphones),t.$set(l)},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){R(t,e)}}}function $t(a){let t,n;return t=new X({props:{icon:B.PhoneXMark}}),{c(){w(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},p:H,i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){R(t,e)}}}function Re(a){let t,n;return t=new K({props:{tooltip:"Go",icon:!0,appearance:O.Success,loading:a[3],$$slots:{default:[_t]},$$scope:{ctx:a}}}),t.$on("click",a[17]),{c(){w(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},p(e,r){const l={};r&8&&(l.loading=e[3]),r&2097152&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){R(t,e)}}}function _t(a){let t,n;return t=new X({props:{icon:B.ArrowRight}}),{c(){w(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},p:H,i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){R(t,e)}}}function gt(a){let t,n,e,r,l,s,u,o;t=new K({props:{icon:!0,appearance:a[1]?O.Error:O.Alt,tooltip:a[10]("call.mute"),loading:a[3],soundSource:void 0,$$slots:{default:[ct]},$$scope:{ctx:a}}}),t.$on("click",a[14]),e=new K({props:{icon:!0,appearance:a[2]?O.Error:O.Alt,tooltip:a[10]("call.deafen"),loading:a[3],soundSource:void 0,$$slots:{default:[mt]},$$scope:{ctx:a}}}),e.$on("click",a[15]),l=new K({props:{tooltip:"End",icon:!0,appearance:O.Error,loading:a[3],$$slots:{default:[$t]},$$scope:{ctx:a}}}),l.$on("click",a[16]);let i=(a[11].id!==a[9].chat.id||a[4]!==Q.Chat)&&Re(a);return{c(){w(t.$$.fragment),n=A(),w(e.$$.fragment),r=A(),w(l.$$.fragment),s=A(),i&&i.c(),u=Z()},l(f){C(t.$$.fragment,f),n=M(f),C(e.$$.fragment,f),r=M(f),C(l.$$.fragment,f),s=M(f),i&&i.l(f),u=Z()},m(f,c){S(t,f,c),V(f,n,c),S(e,f,c),V(f,r,c),S(l,f,c),V(f,s,c),i&&i.m(f,c),V(f,u,c),o=!0},p(f,c){const d={};c&2&&(d.appearance=f[1]?O.Error:O.Alt),c&1024&&(d.tooltip=f[10]("call.mute")),c&8&&(d.loading=f[3]),c&2097154&&(d.$$scope={dirty:c,ctx:f}),t.$set(d);const _={};c&4&&(_.appearance=f[2]?O.Error:O.Alt),c&1024&&(_.tooltip=f[10]("call.deafen")),c&8&&(_.loading=f[3]),c&2097156&&(_.$$scope={dirty:c,ctx:f}),e.$set(_);const g={};c&8&&(g.loading=f[3]),c&2097152&&(g.$$scope={dirty:c,ctx:f}),l.$set(g),f[11].id!==f[9].chat.id||f[4]!==Q.Chat?i?(i.p(f,c),c&2576&&m(i,1)):(i=Re(f),i.c(),m(i,1),i.m(u.parentNode,u)):i&&(U(),$(i,1,1,()=>{i=null}),j())},i(f){o||(m(t.$$.fragment,f),m(e.$$.fragment,f),m(l.$$.fragment,f),m(i),o=!0)},o(f){$(t.$$.fragment,f),$(e.$$.fragment,f),$(l.$$.fragment,f),$(i),o=!1},d(f){f&&(D(n),D(r),D(s),D(u)),R(t,f),R(e,f),R(l,f),i&&i.d(f)}}}function pt(a){let t,n;return t=new X({props:{icon:B.PhoneCall}}),{c(){w(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},p:H,i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){R(t,e)}}}function dt(a){let t,n;return t=new X({props:{icon:B.PhoneXMark}}),{c(){w(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},p:H,i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){R(t,e)}}}function ht(a){let t,n,e,r;return t=new K({props:{tooltip:"Answer",text:"Answer",appearance:O.Success,loading:a[3],$$slots:{default:[pt]},$$scope:{ctx:a}}}),t.$on("click",bt),e=new K({props:{tooltip:"End",text:"Deny",appearance:O.Error,loading:a[3],$$slots:{default:[dt]},$$scope:{ctx:a}}}),e.$on("click",a[13]),{c(){w(t.$$.fragment),n=A(),w(e.$$.fragment)},l(l){C(t.$$.fragment,l),n=M(l),C(e.$$.fragment,l)},m(l,s){S(t,l,s),V(l,n,s),S(e,l,s),r=!0},p(l,s){const u={};s&8&&(u.loading=l[3]),s&2097152&&(u.$$scope={dirty:s,ctx:l}),t.$set(u);const o={};s&8&&(o.loading=l[3]),s&2097152&&(o.$$scope={dirty:s,ctx:l}),e.$set(o)},i(l){r||(m(t.$$.fragment,l),m(e.$$.fragment,l),r=!0)},o(l){$(t.$$.fragment,l),$(e.$$.fragment,l),r=!1},d(l){l&&D(n),R(t,l),R(e,l)}}}function vt(a){let t,n,e=(a[9]||a[6])&&Ce(a);return{c(){e&&e.c(),t=Z()},l(r){e&&e.l(r),t=Z()},m(r,l){e&&e.m(r,l),V(r,t,l),n=!0},p(r,[l]){r[9]||r[6]?e?(e.p(r,l),l&576&&m(e,1)):(e=Ce(r),e.c(),m(e,1),e.m(t.parentNode,t)):e&&(U(),$(e,1,1,()=>{e=null}),j())},i(r){n||(m(e),n=!0)},o(r){$(e),n=!1},d(r){r&&D(t),e&&e.d(r)}}}const bt=a=>{};function kt(a,t,n){let e,r,l,s,u,o=H,i=()=>(o(),o=ee(e,I=>n(9,u=I)),e),f,c,d=H,_=()=>(d(),d=ee(r,I=>n(11,c=I)),r);se(a,xe,I=>n(18,s=I)),se(a,pe,I=>n(10,f=I)),a.$$.on_destroy.push(()=>o()),a.$$.on_destroy.push(()=>d());let{loading:g=!1}=t,{muted:v=x(T.state.devices.muted)}=t,{deafened:b=x(T.state.devices.deafened)}=t,{settings:E=x(te.state)}=t,{activeRoute:p=Q.Chat}=t,J="00:00:00";function N(){const I=new Date,ue=I.getTime()-(s!=null?s:I).getTime(),je=Math.floor(ue/(1e3*60*60)).toString().padStart(2,"0"),Ge=Math.floor(ue%(1e3*60*60)/(1e3*60)).toString().padStart(2,"0"),Le=Math.floor(ue%(1e3*60)/1e3).toString().padStart(2,"0");n(5,J=`${je}:${Ge}:${Le}`)}const k=setInterval(N,1e3);We(()=>{clearInterval(k)}),T.state.devices.muted.subscribe(I=>n(1,v=I)),T.state.devices.deafened.subscribe(I=>n(2,b=I)),te.state.subscribe(I=>n(0,E=I));const h=I=>{T.setActiveChat(u.chat),y(Q.Chat)},L=I=>{T.endCall()},W=I=>{T.updateMuted(!v)},Y=I=>{T.updateDeafened(!b)},ae=I=>{T.endCall(),be.leaveCall()},Ue=I=>{T.setActiveChat(u.chat),T.setActiveCall(u.chat),y(Q.Chat)};return a.$$set=I=>{"loading"in I&&n(3,g=I.loading),"muted"in I&&n(1,v=I.muted),"deafened"in I&&n(2,b=I.deafened),"settings"in I&&n(0,E=I.settings),"activeRoute"in I&&n(4,p=I.activeRoute)},a.$$.update=()=>{a.$$.dirty&1&&n(6,l=E.calling.minimalCallingAlerts&&be.incomingCallFrom!=null)},i(n(8,e=T.state.activeCall)),_(n(7,r=T.state.activeChat)),[E,v,b,g,p,J,l,r,e,u,f,c,h,L,W,Y,ae,Ue]}class wt extends le{constructor(t){super(),re(this,t,kt,vt,ne,{loading:3,muted:1,deafened:2,settings:0,activeRoute:4})}}const Ct=a=>({resolved:a&2}),Ee=a=>({resolved:a[1]});function St(a){let t;const n=a[5].default,e=me(n,a,a[4],Ee);return{c(){e&&e.c()},l(r){e&&e.l(r)},m(r,l){e&&e.m(r,l),t=!0},p(r,[l]){e&&e.p&&(!t||l&18)&&$e(e,n,r,r[4],t?ge(n,r[4],l,Ct):_e(r[4]),Ee)},i(r){t||(m(e,r),t=!0)},o(r){$(e,r),t=!1},d(r){e&&e.d(r)}}}function Rt(a,t,n){let e,r,l=H,s=()=>(l(),l=ee(e,c=>n(1,r=c)),e);a.$$.on_destroy.push(()=>l());let{$$slots:u={},$$scope:o}=t,{value:i}=t,{resolver:f}=t;return a.$$set=c=>{"value"in c&&n(2,i=c.value),"resolver"in c&&n(3,f=c.resolver),"$$scope"in c&&n(4,o=c.$$scope)},a.$$.update=()=>{a.$$.dirty&12&&s(n(0,e=f(i)))},[e,r,i,f,o,u]}class Et extends le{constructor(t){super(),re(this,t,Rt,St,ne,{value:2,resolver:3})}}function Ie(a){let t,n,e,r,l,s,u,o,i,f,c,d,_,g,v;function b(k){a[11](k)}let E={alt:!0,autoFocus:!1,placeholder:a[5]("generic.search_placeholder"),$$slots:{default:[It]},$$scope:{ctx:a}};a[0]!==void 0&&(E.value=a[0]),e=new nt({props:E}),Qe.push(()=>ye(e,"value",b)),e.$on("enter",a[7]),e.$on("input",a[8]),s=new K({props:{icon:!0,appearance:O.Alt,loading:a[3],$$slots:{default:[Dt]},$$scope:{ctx:a}}}),s.$on("click",a[6]);let p=a[4]&&a[4].widgets&&a[4].widgets.show&&De();const J=a[10].default,N=me(J,a,a[13],null);return d=new wt({props:{activeRoute:a[1]}}),g=new qe({props:{icons:!0,routes:He,activeRoute:a[1]}}),g.$on("navigate",a[12]),{c(){t=q("div"),n=q("div"),w(e.$$.fragment),l=A(),w(s.$$.fragment),u=A(),o=q("div"),p&&p.c(),i=A(),N&&N.c(),f=A(),c=q("div"),w(d.$$.fragment),_=A(),w(g.$$.fragment),this.h()},l(k){t=F(k,"DIV",{class:!0});var h=G(t);n=F(h,"DIV",{class:!0});var L=G(n);C(e.$$.fragment,L),l=M(L),C(s.$$.fragment,L),L.forEach(D),u=M(h),o=F(h,"DIV",{class:!0});var W=G(o);p&&p.l(W),i=M(W),N&&N.l(W),W.forEach(D),f=M(h),c=F(h,"DIV",{class:!0});var Y=G(c);C(d.$$.fragment,Y),Y.forEach(D),_=M(h),C(g.$$.fragment,h),h.forEach(D),this.h()},h(){z(n,"class","sidebar-pre svelte-23ns5u"),z(o,"class","sidebar-content svelte-23ns5u"),z(c,"class","popups"),z(t,"class","sidebar svelte-23ns5u")},m(k,h){V(k,t,h),P(t,n),S(e,n,null),P(n,l),S(s,n,null),P(t,u),P(t,o),p&&p.m(o,null),P(o,i),N&&N.m(o,null),P(t,f),P(t,c),S(d,c,null),P(t,_),S(g,t,null),v=!0},p(k,h){const L={};h&32&&(L.placeholder=k[5]("generic.search_placeholder")),h&8192&&(L.$$scope={dirty:h,ctx:k}),!r&&h&1&&(r=!0,L.value=k[0],Ye(()=>r=!1)),e.$set(L);const W={};h&8&&(W.loading=k[3]),h&8192&&(W.$$scope={dirty:h,ctx:k}),s.$set(W),k[4]&&k[4].widgets&&k[4].widgets.show?p?h&16&&m(p,1):(p=De(),p.c(),m(p,1),p.m(o,i)):p&&(U(),$(p,1,1,()=>{p=null}),j()),N&&N.p&&(!v||h&8192)&&$e(N,J,k,k[13],v?ge(J,k[13],h,null):_e(k[13]),null);const Y={};h&2&&(Y.activeRoute=k[1]),d.$set(Y);const ae={};h&2&&(ae.activeRoute=k[1]),g.$set(ae)},i(k){v||(m(e.$$.fragment,k),m(s.$$.fragment,k),m(p),m(N,k),m(d.$$.fragment,k),m(g.$$.fragment,k),v=!0)},o(k){$(e.$$.fragment,k),$(s.$$.fragment,k),$(p),$(N,k),$(d.$$.fragment,k),$(g.$$.fragment,k),v=!1},d(k){k&&D(t),R(e),R(s),p&&p.d(),N&&N.d(k),R(d),R(g)}}}function It(a){let t,n;return t=new X({props:{icon:B.Search}}),{c(){w(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},p:H,i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){R(t,e)}}}function Dt(a){let t,n;return t=new X({props:{icon:B.Sidebar}}),{c(){w(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},p:H,i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){R(t,e)}}}function De(a){let t,n;return t=new at({}),{c(){w(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){R(t,e)}}}function At(a){let t,n,e,r,l;n=new Ut({props:{sidebarOpen:a[2],activeRoute:a[1]}}),n.$on("toggle",a[6]);let s=a[2]&&Ie(a);return{c(){t=q("div"),w(n.$$.fragment),e=A(),s&&s.c(),this.h()},l(u){t=F(u,"DIV",{class:!0});var o=G(t);C(n.$$.fragment,o),e=M(o),s&&s.l(o),o.forEach(D),this.h()},h(){z(t,"class",r="sidebar-layout "+(a[2]?"open":"closed")+" svelte-23ns5u")},m(u,o){V(u,t,o),S(n,t,null),P(t,e),s&&s.m(t,null),l=!0},p(u,[o]){const i={};o&4&&(i.sidebarOpen=u[2]),o&2&&(i.activeRoute=u[1]),n.$set(i),u[2]?s?(s.p(u,o),o&4&&m(s,1)):(s=Ie(u),s.c(),m(s,1),s.m(t,null)):s&&(U(),$(s,1,1,()=>{s=null}),j()),(!l||o&4&&r!==(r="sidebar-layout "+(u[2]?"open":"closed")+" svelte-23ns5u"))&&z(t,"class",r)},i(u){l||(m(n.$$.fragment,u),m(s),l=!0)},o(u){$(n.$$.fragment,u),$(s),l=!1},d(u){u&&D(t),R(n),s&&s.d()}}}function Mt(a,t,n){let e;se(a,pe,p=>n(5,e=p));let{$$slots:r={},$$scope:l}=t,{activeRoute:s=Q.Chat}=t,{open:u=!0}=t,{loading:o=!0}=t,{activeCall:i=x(T.state.activeCall)}=t,{search:f=""}=t,c=x(te.state);te.state.subscribe(p=>{n(4,c=p)});const d=Oe();function _(){d("toggle",u)}function g(){d("enter",f)}function v(){d("search",f)}T.state.activeCall.subscribe(p=>n(9,i=p));function b(p){f=p,n(0,f)}const E=p=>y(p.detail);return a.$$set=p=>{"activeRoute"in p&&n(1,s=p.activeRoute),"open"in p&&n(2,u=p.open),"loading"in p&&n(3,o=p.loading),"activeCall"in p&&n(9,i=p.activeCall),"search"in p&&n(0,f=p.search),"$$scope"in p&&n(13,l=p.$$scope)},[f,s,u,o,c,e,_,g,v,i,r,b,E,l]}class an extends le{constructor(t){super(),re(this,t,Mt,At,ne,{activeRoute:1,open:2,loading:3,activeCall:9,search:0})}}function Vt(a){let t,n,e,r,l;return{c(){t=q("div"),n=q("img"),this.h()},l(s){t=F(s,"DIV",{class:!0});var u=G(t);n=F(u,"IMG",{src:!0,alt:!0,class:!0}),u.forEach(D),this.h()},h(){ve(n.src,e=a[1])||z(n,"src",e),z(n,"alt",a[0]),z(n,"class","svelte-15m50z9"),z(t,"class","community-icon svelte-15m50z9")},m(s,u){V(s,t,u),P(t,n),r||(l=ce(t,"click",a[2]),r=!0)},p(s,[u]){u&2&&!ve(n.src,e=s[1])&&z(n,"src",e),u&1&&z(n,"alt",s[0])},i:H,o:H,d(s){s&&D(t),r=!1,l()}}}function Tt(a,t,n){let{name:e=""}=t,{image:r=""}=t;const l=s=>y("/community/chat");return a.$$set=s=>{"name"in s&&n(0,e=s.name),"image"in s&&n(1,r=s.image)},[e,r,l]}class Pt extends le{constructor(t){super(),re(this,t,Tt,Vt,ne,{name:0,image:1})}}function Ae(a,t,n){const e=a.slice();return e[15]=t[n],e}function Me(a){let t,n,e,r;return n=new K({props:{icon:!0,appearance:O.Alt,$$slots:{default:[zt]},$$scope:{ctx:a}}}),n.$on("click",a[7]),{c(){t=q("div"),w(n.$$.fragment)},l(l){t=F(l,"DIV",{});var s=G(t);C(n.$$.fragment,s),s.forEach(D)},m(l,s){V(l,t,s),S(n,t,null),r=!0},p(l,s){const u={};s&8192&&(u.$$scope={dirty:s,ctx:l}),n.$set(u)},i(l){r||(m(n.$$.fragment,l),l&&Be(()=>{r&&(e||(e=ie(t,fe,{duration:oe,axis:"y"},!0)),e.run(1))}),r=!0)},o(l){$(n.$$.fragment,l),l&&(e||(e=ie(t,fe,{duration:oe,axis:"y"},!1)),e.run(0)),r=!1},d(l){l&&D(t),R(n),l&&e&&e.end()}}}function zt(a){let t,n;return t=new X({props:{icon:B.Sidebar}}),{c(){w(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},p:H,i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){R(t,e)}}}function Ve(a){let t,n;return t=new K({props:{appearance:O.Alt,icon:!0,$$slots:{default:[Nt]},$$scope:{ctx:a}}}),t.$on("click",a[9]),{c(){w(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){R(t,e)}}}function Nt(a){let t,n;return t=new X({props:{icon:B.Shop}}),{c(){w(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},p:H,i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){R(t,e)}}}function Te(a){let t,n,e,r;t=new de({props:{text:a[6]("generic.faves")}});let l=ke(a[5]),s=[];for(let o=0;o<l.length;o+=1)s[o]=Pe(Ae(a,l,o));const u=o=>$(s[o],1,1,()=>{s[o]=null});return{c(){w(t.$$.fragment),n=A();for(let o=0;o<s.length;o+=1)s[o].c();e=Z()},l(o){C(t.$$.fragment,o),n=M(o);for(let i=0;i<s.length;i+=1)s[i].l(o);e=Z()},m(o,i){S(t,o,i),V(o,n,i);for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(o,i);V(o,e,i),r=!0},p(o,i){const f={};if(i&64&&(f.text=o[6]("generic.faves")),t.$set(f),i&262176){l=ke(o[5]);let c;for(c=0;c<l.length;c+=1){const d=Ae(o,l,c);s[c]?(s[c].p(d,i),m(s[c],1)):(s[c]=Pe(d),s[c].c(),m(s[c],1),s[c].m(e.parentNode,e))}for(U(),c=l.length;c<s.length;c+=1)u(c);j()}},i(o){if(!r){m(t.$$.fragment,o);for(let i=0;i<l.length;i+=1)m(s[i]);r=!0}},o(o){$(t.$$.fragment,o),s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)$(s[i]);r=!1},d(o){o&&(D(n),D(e)),R(t,o),Ze(s,o)}}}function Ot(a){let t,n;return t=new st({props:{users:a[18]}}),{c(){w(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},p(e,r){const l={};r&262144&&(l.users=e[18]),t.$set(l)},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){R(t,e)}}}function Bt(a){var e,r;let t,n;return t=new it({props:{id:(e=a[18][1])==null?void 0:e.key,typing:a[15].typing_indicator.size>0,image:(r=a[18][1])==null?void 0:r.profile.photo.image,status:a[18][1].profile.status,size:rt.Medium}}),{c(){w(t.$$.fragment)},l(l){C(t.$$.fragment,l)},m(l,s){S(t,l,s),n=!0},p(l,s){var o,i;const u={};s&262144&&(u.id=(o=l[18][1])==null?void 0:o.key),s&32&&(u.typing=l[15].typing_indicator.size>0),s&262144&&(u.image=(i=l[18][1])==null?void 0:i.profile.photo.image),s&262144&&(u.status=l[18][1].profile.status),t.$set(u)},i(l){n||(m(t.$$.fragment,l),n=!0)},o(l){$(t.$$.fragment,l),n=!1},d(l){R(t,l)}}}function Ht(a){let t,n,e,r,l,s,u;const o=[Bt,Ot],i=[];function f(d,_){return d[15].kind===lt.DirectMessage?0:1}n=f(a),e=i[n]=o[n](a);function c(...d){return a[10](a[15],...d)}return{c(){t=q("div"),e.c(),r=A(),this.h()},l(d){t=F(d,"DIV",{class:!0});var _=G(t);e.l(_),_.forEach(D),r=M(d),this.h()},h(){z(t,"class","fave svelte-11obu9i")},m(d,_){V(d,t,_),i[n].m(t,null),V(d,r,_),l=!0,s||(u=ce(t,"click",c),s=!0)},p(d,_){a=d;let g=n;n=f(a),n===g?i[n].p(a,_):(U(),$(i[g],1,1,()=>{i[g]=null}),j(),e=i[n],e?e.p(a,_):(e=i[n]=o[n](a),e.c()),m(e,1),e.m(t,null))},i(d){l||(m(e),l=!0)},o(d){$(e),l=!1},d(d){d&&(D(t),D(r)),i[n].d(),s=!1,u()}}}function Pe(a){let t,n;return t=new Et({props:{value:a[15].users,resolver:a[11],$$slots:{default:[Ht,({resolved:e})=>({18:e}),({resolved:e})=>e?262144:0]},$$scope:{ctx:a}}}),{c(){w(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},p(e,r){const l={};r&32&&(l.value=e[15].users),r&270368&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){R(t,e)}}}function ze(a){let t,n;return t=new Pt({props:{name:"Satellite.im",image:"/assets/logo/satellite.png"}}),{c(){w(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){R(t,e)}}}function Ne(a){let t,n,e,r;return n=new qe({props:{vertical:!0,icons:!0,routes:He,activeRoute:a[1]}}),n.$on("navigate",a[12]),{c(){t=q("div"),w(n.$$.fragment)},l(l){t=F(l,"DIV",{});var s=G(t);C(n.$$.fragment,s),s.forEach(D)},m(l,s){V(l,t,s),S(n,t,null),r=!0},p(l,s){const u={};s&2&&(u.activeRoute=l[1]),n.$set(u)},i(l){r||(m(n.$$.fragment,l),l&&Be(()=>{r&&(e||(e=ie(t,fe,{duration:oe,axis:"y"},!0)),e.run(1))}),r=!0)},o(l){$(n.$$.fragment,l),l&&(e||(e=ie(t,fe,{duration:oe,axis:"y"},!1)),e.run(0)),r=!1},d(l){l&&D(t),R(n),l&&e&&e.end()}}}function qt(a){let t,n,e,r,l,s,u,o,i=!a[0]&&Me(a),f=a[4].devmode&&Ve(a),c=a[5].length&&Te(a);const d=a[8].default,_=me(d,a,a[13],null);let g=a[4].devmode&&ze(),v=!a[0]&&Ne(a);return{c(){t=q("div"),i&&i.c(),n=A(),e=q("div"),f&&f.c(),r=A(),c&&c.c(),l=A(),_&&_.c(),s=A(),g&&g.c(),u=A(),v&&v.c(),this.h()},l(b){t=F(b,"DIV",{class:!0});var E=G(t);i&&i.l(E),n=M(E),e=F(E,"DIV",{class:!0});var p=G(e);f&&f.l(p),r=M(p),c&&c.l(p),l=M(p),_&&_.l(p),s=M(p),g&&g.l(p),p.forEach(D),u=M(E),v&&v.l(E),E.forEach(D),this.h()},h(){z(e,"class","content svelte-11obu9i"),z(t,"class","slimbar svelte-11obu9i")},m(b,E){V(b,t,E),i&&i.m(t,null),P(t,n),P(t,e),f&&f.m(e,null),P(e,r),c&&c.m(e,null),P(e,l),_&&_.m(e,null),P(e,s),g&&g.m(e,null),P(t,u),v&&v.m(t,null),o=!0},p(b,[E]){b[0]?i&&(U(),$(i,1,1,()=>{i=null}),j()):i?(i.p(b,E),E&1&&m(i,1)):(i=Me(b),i.c(),m(i,1),i.m(t,n)),b[4].devmode?f?E&16&&m(f,1):(f=Ve(b),f.c(),m(f,1),f.m(e,r)):f&&(U(),$(f,1,1,()=>{f=null}),j()),b[5].length?c?(c.p(b,E),E&32&&m(c,1)):(c=Te(b),c.c(),m(c,1),c.m(e,l)):c&&(U(),$(c,1,1,()=>{c=null}),j()),_&&_.p&&(!o||E&8192)&&$e(_,d,b,b[13],o?ge(d,b[13],E,null):_e(b[13]),null),b[4].devmode?g?E&16&&m(g,1):(g=ze(),g.c(),m(g,1),g.m(e,null)):g&&(U(),$(g,1,1,()=>{g=null}),j()),b[0]?v&&(U(),$(v,1,1,()=>{v=null}),j()):v?(v.p(b,E),E&1&&m(v,1)):(v=Ne(b),v.c(),m(v,1),v.m(t,null))},i(b){o||(m(i),m(f),m(c),m(_,b),m(g),m(v),o=!0)},o(b){$(i),$(f),$(c),$(_,b),$(g),$(v),o=!1},d(b){b&&D(t),i&&i.d(),f&&f.d(),c&&c.d(),_&&_.d(b),g&&g.d(),v&&v.d()}}}function Ft(a,t,n){let e,r,l,s=H,u=()=>(s(),s=ee(e,h=>n(4,l=h)),e),o,i=H,f=()=>(i(),i=ee(r,h=>n(5,o=h)),r),c;se(a,pe,h=>n(6,c=h)),a.$$.on_destroy.push(()=>s()),a.$$.on_destroy.push(()=>i());let{$$slots:d={},$$scope:_}=t,{sidebarOpen:g=!0}=t,{activeRoute:v=Q.Chat}=t;const b=Oe();function E(){b("toggle",g)}const p=()=>{we.toggleMarket()},J=(h,L)=>{T.setActiveChat(h),et()&&we.toggleSidebar(),y(Q.Chat)},N=h=>T.getUsers(h),k=h=>y(h.detail);return a.$$set=h=>{"sidebarOpen"in h&&n(0,g=h.sidebarOpen),"activeRoute"in h&&n(1,v=h.activeRoute),"$$scope"in h&&n(13,_=h.$$scope)},u(n(3,e=te.state)),f(n(2,r=T.state.favorites)),[g,v,r,e,l,o,c,E,d,p,J,N,k,_]}class Ut extends le{constructor(t){super(),re(this,t,Ft,qt,ne,{sidebarOpen:0,activeRoute:1})}}export{an as S,Et as a};
