import{s as pe,z as et,e as y,t as Q,c as L,b as F,d as X,f as M,l as z,i as B,h as S,A as tt,B as nt,C as rt,j as fe,a as V,g as R,k as be,u as se,w as ce,n as j,E as at,q as Xe,H as st,M as de,N as he}from"../chunks/scheduler.BSglW4Eu.js";import{S as me,i as ge,t as $,b as c,c as _,a as d,m as h,g as re,d as ae,e as w,f as we}from"../chunks/index.B6nwG8t1.js";import{w as lt,g as Be}from"../chunks/entry.LeXF3UU-.js";import{$ as Ee,a0 as le,A as K,f as Me,a as G,S as ot,b as De,z as Ae,x as $e,n as ne,m as ft,a1 as it,M as _e,R as ze,l as Oe}from"../chunks/Store.jZGzll8E.js";import{T as x,e as ye}from"../chunks/UnderConstruction.svelte_svelte_type_style_lang.DjE3iszU.js";import"../chunks/Role.svelte_svelte_type_style_lang.CdBy4Esq.js";/* empty css                                                       *//* empty css                                                    */import{R as Ye}from"../chunks/RelaySelector.BUDvoGUb.js";import{C as Le}from"../chunks/CommonInputRules.BKMUxu9V.js";import{F as ut}from"../chunks/FileUploadButton.Czciitvw.js";import{B as W,I as J}from"../chunks/Icon.DzRjiQSL.js";import{C as ve}from"../chunks/Controls.CAghxSLw.js";import{O as $t,P as Ze}from"../chunks/PinInput.WKPEKeuJ.js";import{L as oe}from"../chunks/Label.B4bVuKJN.js";import{S as Se}from"../chunks/Spacer.BT9KWOhF.js";import{P as ke}from"../chunks/ProfilePicture.Br-9gyBQ.js";import{M as Ie}from"../chunks/Modal.C5jrgMt-.js";import{a as Fe}from"../chunks/Input.BetXE5YM.js";function ct(a){let e,n,t;const r=a[3].default,s=et(r,a,a[2],null);return{c(){e=y("h2"),s&&s.c(),n=Q(a[0]),this.h()},l(l){e=L(l,"H2",{class:!0,"data-cy":!0});var o=F(e);s&&s.l(o),n=X(o,a[0]),o.forEach(M),this.h()},h(){z(e,"class","title svelte-1ahpsld"),z(e,"data-cy",a[1])},m(l,o){B(l,e,o),s&&s.m(e,null),S(e,n),t=!0},p(l,[o]){s&&s.p&&(!t||o&4)&&tt(s,r,l,l[2],t?rt(r,l[2],o,null):nt(l[2]),null),(!t||o&1)&&fe(n,l[0]),(!t||o&2)&&z(e,"data-cy",l[1])},i(l){t||($(s,l),t=!0)},o(l){c(s,l),t=!1},d(l){l&&M(e),s&&s.d(l)}}}function pt(a,e,n){let{$$slots:t={},$$scope:r}=e,{text:s=""}=e,{hook:l=""}=e;return a.$$set=o=>{"text"in o&&n(0,s=o.text),"hook"in o&&n(1,l=o.hook),"$$scope"in o&&n(2,r=o.$$scope)},[s,l,r,t]}class xe extends me{constructor(e){super(),ge(this,e,pt,ct,pe,{text:0,hook:1})}}function Ne(a){let e,n;return e=new Ie({props:{padded:!0,$$slots:{default:[dt]},$$scope:{ctx:a}}}),e.$on("close",a[4]),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,r){const s={};r&1032&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function mt(a){let e=le[1].name+"",n;return{c(){n=Q(e)},l(t){n=X(t,e)},m(t,r){B(t,n,r)},p:j,d(t){t&&M(n)}}}function gt(a){let e=le[2].name+"",n;return{c(){n=Q(e)},l(t){n=X(t,e)},m(t,r){B(t,n,r)},p:j,d(t){t&&M(n)}}}function _t(a){let e,n;return e=new J({props:{icon:G.Plus}}),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p:j,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function dt(a){let e,n,t,r,s,l,o,f,m,g,v,p,b,k,C,I,E;return n=new oe({props:{text:a[3]("generic.profiles")}}),s=new ke({props:{image:le[1].profile.photo.image,noIndicator:!0}}),o=new x({props:{class:"username",$$slots:{default:[mt]},$$scope:{ctx:a}}}),g=new ke({props:{image:le[2].profile.photo.image}}),p=new x({props:{class:"username",$$slots:{default:[gt]},$$scope:{ctx:a}}}),k=new Se({}),I=new W({props:{text:a[3]("pages.auth.create.profile"),appearance:K.Alt,$$slots:{default:[_t]},$$scope:{ctx:a}}}),{c(){e=y("div"),_(n.$$.fragment),t=V(),r=y("div"),_(s.$$.fragment),l=V(),_(o.$$.fragment),f=V(),m=y("div"),_(g.$$.fragment),v=V(),_(p.$$.fragment),b=V(),_(k.$$.fragment),C=V(),_(I.$$.fragment),this.h()},l(u){e=L(u,"DIV",{class:!0});var i=F(e);d(n.$$.fragment,i),t=R(i),r=L(i,"DIV",{class:!0});var P=F(r);d(s.$$.fragment,P),l=R(P),d(o.$$.fragment,P),P.forEach(M),f=R(i),m=L(i,"DIV",{class:!0});var T=F(m);d(g.$$.fragment,T),v=R(T),d(p.$$.fragment,T),T.forEach(M),b=R(i),d(k.$$.fragment,i),C=R(i),d(I.$$.fragment,i),i.forEach(M),this.h()},h(){z(r,"class","user svelte-1gwn08t"),z(m,"class","user svelte-1gwn08t"),z(e,"class","profiles svelte-1gwn08t")},m(u,i){B(u,e,i),h(n,e,null),S(e,t),S(e,r),h(s,r,null),S(r,l),h(o,r,null),S(e,f),S(e,m),h(g,m,null),S(m,v),h(p,m,null),S(e,b),h(k,e,null),S(e,C),h(I,e,null),E=!0},p(u,i){const P={};i&8&&(P.text=u[3]("generic.profiles")),n.$set(P);const T={};i&1024&&(T.$$scope={dirty:i,ctx:u}),o.$set(T);const D={};i&1024&&(D.$$scope={dirty:i,ctx:u}),p.$set(D);const A={};i&8&&(A.text=u[3]("pages.auth.create.profile")),i&1024&&(A.$$scope={dirty:i,ctx:u}),I.$set(A)},i(u){E||($(n.$$.fragment,u),$(s.$$.fragment,u),$(o.$$.fragment,u),$(g.$$.fragment,u),$(p.$$.fragment,u),$(k.$$.fragment,u),$(I.$$.fragment,u),E=!0)},o(u){c(n.$$.fragment,u),c(s.$$.fragment,u),c(o.$$.fragment,u),c(g.$$.fragment,u),c(p.$$.fragment,u),c(k.$$.fragment,u),c(I.$$.fragment,u),E=!1},d(u){u&&M(e),w(n),w(s),w(o),w(g),w(p),w(k),w(I)}}}function je(a){let e,n;return e=new Ie({props:{padded:!0,$$slots:{default:[ht]},$$scope:{ctx:a}}}),e.$on("close",a[5]),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,r){const s={};r&1024&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function ht(a){let e,n;return e=new Ye({}),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function wt(a){let e,n;return e=new oe({props:{text:a[3]("pages.auth.create.title")}}),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,r){const s={};r&8&&(s.text=t[3]("pages.auth.create.title")),e.$set(s)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function bt(a){let e,n;return e=new oe({props:{text:a[3]("generic.loading")}}),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,r){const s={};r&8&&(s.text=t[3]("generic.loading")),e.$set(s)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function vt(a){let e=a[3]("pages.auth.create.description")+"",n;return{c(){n=Q(e)},l(t){n=X(t,e)},m(t,r){B(t,n,r)},p(t,r){r&8&&e!==(e=t[3]("pages.auth.create.description")+"")&&fe(n,e)},d(t){t&&M(n)}}}function kt(a){let e,n;return e=new J({props:{icon:G.Plus}}),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p:j,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function It(a){let e,n;return e=new W({props:{text:a[3]("pages.auth.create.import"),appearance:K.Alt,fill:!0,$$slots:{default:[Pt]},$$scope:{ctx:a}}}),e.$on("click",a[7]),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,r){const s={};r&8&&(s.text=t[3]("pages.auth.create.import")),r&1024&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function Pt(a){let e,n;return e=new J({props:{icon:G.ArrowUp}}),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p:j,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function Dt(a){let e,n,t=se(Me.state).devmode,r,s;e=new W({props:{text:a[3]("pages.auth.create.new"),appearance:K.Primary,fill:!0,$$slots:{default:[kt]},$$scope:{ctx:a}}}),e.$on("click",a[6]);let l=t&&It(a);return{c(){_(e.$$.fragment),n=V(),l&&l.c(),r=ce()},l(o){d(e.$$.fragment,o),n=R(o),l&&l.l(o),r=ce()},m(o,f){h(e,o,f),B(o,n,f),l&&l.m(o,f),B(o,r,f),s=!0},p(o,f){const m={};f&8&&(m.text=o[3]("pages.auth.create.new")),f&1024&&(m.$$scope={dirty:f,ctx:o}),e.$set(m),t&&l.p(o,f)},i(o){s||($(e.$$.fragment,o),$(l),s=!0)},o(o){c(e.$$.fragment,o),c(l),s=!1},d(o){o&&(M(n),M(r)),w(e,o),l&&l.d(o)}}}function Et(a){let e,n;return e=new W({props:{tooltip:a[3]("pages.auth.changeUser"),icon:!0,appearance:K.Alt,$$slots:{default:[St]},$$scope:{ctx:a}}}),e.$on("click",a[8]),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,r){const s={};r&8&&(s.tooltip=t[3]("pages.auth.changeUser")),r&1024&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function St(a){let e,n;return e=new J({props:{icon:G.Profile}}),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p:j,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function Mt(a){let e,n;return e=new J({props:{icon:G.Relay}}),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p:j,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function At(a){let e=se(Me.state).devmode,n,t,r,s=e&&Et(a);return t=new W({props:{tooltip:a[3]("pages.auth.relay"),icon:!0,appearance:K.Alt,$$slots:{default:[Mt]},$$scope:{ctx:a}}}),t.$on("click",a[9]),{c(){s&&s.c(),n=V(),_(t.$$.fragment)},l(l){s&&s.l(l),n=R(l),d(t.$$.fragment,l)},m(l,o){s&&s.m(l,o),B(l,n,o),h(t,l,o),r=!0},p(l,o){e&&s.p(l,o);const f={};o&8&&(f.tooltip=l[3]("pages.auth.relay")),o&1024&&(f.$$scope={dirty:o,ctx:l}),t.$set(f)},i(l){r||($(s),$(t.$$.fragment,l),r=!0)},o(l){c(s),c(t.$$.fragment,l),r=!1},d(l){l&&M(n),s&&s.d(l),w(t,l)}}}function Vt(a){let e,n,t,r,s,l,o,f,m,g,v,p,b,k,C,I,E=a[1]&&Ne(a),u=a[2]&&je(a);const i=[bt,wt],P=[];function T(D,A){return 1}return s=T(),l=P[s]=i[s](a),f=new x({props:{$$slots:{default:[vt]},$$scope:{ctx:a}}}),g=new Se({}),p=new ve({props:{breakpoint:1e3,$$slots:{default:[Dt]},$$scope:{ctx:a}}}),C=new ve({props:{$$slots:{default:[At]},$$scope:{ctx:a}}}),{c(){e=y("div"),E&&E.c(),n=V(),u&&u.c(),t=V(),r=y("div"),l.c(),o=V(),_(f.$$.fragment),m=V(),_(g.$$.fragment),v=V(),_(p.$$.fragment),b=V(),k=y("div"),_(C.$$.fragment),this.h()},l(D){e=L(D,"DIV",{id:!0,class:!0});var A=F(e);E&&E.l(A),n=R(A),u&&u.l(A),t=R(A),r=L(A,"DIV",{class:!0});var H=F(r);l.l(H),o=R(H),d(f.$$.fragment,H),m=R(H),d(g.$$.fragment,H),v=R(H),d(p.$$.fragment,H),H.forEach(M),b=R(A),k=L(A,"DIV",{class:!0});var N=F(k);d(C.$$.fragment,N),N.forEach(M),A.forEach(M),this.h()},h(){z(r,"class","create-content svelte-1gwn08t"),z(k,"class","unlock-controls svelte-1gwn08t"),z(e,"id","auth-create"),z(e,"class","svelte-1gwn08t")},m(D,A){B(D,e,A),E&&E.m(e,null),S(e,n),u&&u.m(e,null),S(e,t),S(e,r),P[s].m(r,null),S(r,o),h(f,r,null),S(r,m),h(g,r,null),S(r,v),h(p,r,null),S(e,b),S(e,k),h(C,k,null),I=!0},p(D,[A]){D[1]?E?(E.p(D,A),A&2&&$(E,1)):(E=Ne(D),E.c(),$(E,1),E.m(e,n)):E&&(re(),c(E,1,1,()=>{E=null}),ae()),D[2]?u?(u.p(D,A),A&4&&$(u,1)):(u=je(D),u.c(),$(u,1),u.m(e,t)):u&&(re(),c(u,1,1,()=>{u=null}),ae()),l.p(D,A);const H={};A&1032&&(H.$$scope={dirty:A,ctx:D}),f.$set(H);const N={};A&1037&&(N.$$scope={dirty:A,ctx:D}),p.$set(N);const ee={};A&1038&&(ee.$$scope={dirty:A,ctx:D}),C.$set(ee)},i(D){I||($(E),$(u),$(l),$(f.$$.fragment,D),$(g.$$.fragment,D),$(p.$$.fragment,D),$(C.$$.fragment,D),I=!0)},o(D){c(E),c(u),c(l),c(f.$$.fragment,D),c(g.$$.fragment,D),c(p.$$.fragment,D),c(C.$$.fragment,D),I=!1},d(D){D&&M(e),E&&E.d(),u&&u.d(),P[s].d(),w(f),w(g),w(p),w(C)}}}function Rt(a,e,n){let t;be(a,Ee,b=>n(3,t=b));let{page:r}=e,s=!1,l=!1;const o=b=>n(1,s=!1),f=b=>n(2,l=!1),m=b=>n(0,r=Y.Username),g=b=>n(2,l=!0),v=b=>n(1,s=!0),p=b=>n(2,l=!0);return a.$$set=b=>{"page"in b&&n(0,r=b.page)},[r,s,l,t,o,f,m,g,v,p]}class Tt extends me{constructor(e){super(),ge(this,e,Rt,Vt,pe,{page:0})}}function Ut(a){let e=a[6]("pages.auth.new_account.title")+"",n;return{c(){n=Q(e)},l(t){n=X(t,e)},m(t,r){B(t,n,r)},p(t,r){r&64&&e!==(e=t[6]("pages.auth.new_account.title")+"")&&fe(n,e)},d(t){t&&M(n)}}}function Ct(a){let e=a[6]("pages.auth.new_account.subtext")+"",n;return{c(){n=Q(e)},l(t){n=X(t,e)},m(t,r){B(t,n,r)},p(t,r){r&64&&e!==(e=t[6]("pages.auth.new_account.subtext")+"")&&fe(n,e)},d(t){t&&M(n)}}}function Bt(a){let e,n;return e=new J({props:{icon:G.ArrowLeft}}),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p:j,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function zt(a){let e,n;return e=new J({props:{icon:G.ArrowRight}}),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p:j,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function Ot(a){let e,n,t,r;return e=new W({props:{class:"full-width",text:a[6]("controls.go_back"),appearance:K.Alt,$$slots:{default:[Bt]},$$scope:{ctx:a}}}),e.$on("click",a[14]),t=new W({props:{class:"full-width",text:a[6]("pages.auth.new_account.create"),disabled:!a[4]||!a[5],$$slots:{default:[zt]},$$scope:{ctx:a}}}),t.$on("click",a[15]),{c(){_(e.$$.fragment),n=V(),_(t.$$.fragment)},l(s){d(e.$$.fragment,s),n=R(s),d(t.$$.fragment,s)},m(s,l){h(e,s,l),B(s,n,l),h(t,s,l),r=!0},p(s,l){const o={};l&64&&(o.text=s[6]("controls.go_back")),l&65536&&(o.$$scope={dirty:l,ctx:s}),e.$set(o);const f={};l&64&&(f.text=s[6]("pages.auth.new_account.create")),l&48&&(f.disabled=!s[4]||!s[5]),l&65536&&(f.$$scope={dirty:l,ctx:s}),t.$set(f)},i(s){r||($(e.$$.fragment,s),$(t.$$.fragment,s),r=!0)},o(s){c(e.$$.fragment,s),c(t.$$.fragment,s),r=!1},d(s){s&&M(n),w(e,s),w(t,s)}}}function yt(a){let e,n,t,r,s,l,o,f=`By using this application, you agree with our
            <a href="https://uplink.satellite.im/terms.html" target="_blank" rel="noopener noreferrer" class="svelte-1031y93">terms and conditions</a>`,m,g,v,p,b,k,C,I,E,u,i,P,T,D,A,H,N,ee,te,Pe;return t=new xe({props:{$$slots:{default:[Ut]},$$scope:{ctx:a}}}),s=new x({props:{muted:!0,$$slots:{default:[Ct]},$$scope:{ctx:a}}}),p=new ke({props:{size:ot.Large,image:a[3],noIndicator:!0}}),k=new ut({props:{icon:!0,tooltip:a[6]("settings.profile.change_profile_photo")}}),k.$on("upload",a[9]),E=new oe({props:{text:a[6]("generic.username")}}),i=new Fe({props:{alt:!0,placeholder:a[6]("pages.auth.new_account.enter_username"),rules:Le.username}}),i.$on("isValid",a[10]),i.$on("input",a[11]),T=new Se({props:{less:!0}}),A=new oe({props:{text:a[6]("generic.status_message")}}),N=new Fe({props:{alt:!0,placeholder:a[6]("pages.auth.new_account.set_status"),rules:Le.statusMessage}}),N.$on("isValid",a[12]),N.$on("input",a[13]),te=new ve({props:{$$slots:{default:[Ot]},$$scope:{ctx:a}}}),{c(){e=y("div"),n=y("div"),_(t.$$.fragment),r=V(),_(s.$$.fragment),l=V(),o=y("div"),o.innerHTML=f,m=V(),g=y("div"),v=y("div"),_(p.$$.fragment),b=V(),_(k.$$.fragment),C=V(),I=y("div"),_(E.$$.fragment),u=V(),_(i.$$.fragment),P=V(),_(T.$$.fragment),D=V(),_(A.$$.fragment),H=V(),_(N.$$.fragment),ee=V(),_(te.$$.fragment),this.h()},l(U){e=L(U,"DIV",{id:!0,class:!0});var O=F(e);n=L(O,"DIV",{class:!0});var Z=F(n);d(t.$$.fragment,Z),r=R(Z),d(s.$$.fragment,Z),l=R(Z),o=L(Z,"DIV",{class:!0,"data-svelte-h":!0}),at(o)!=="svelte-g5mi12"&&(o.innerHTML=f),Z.forEach(M),m=R(O),g=L(O,"DIV",{class:!0});var ie=F(g);v=L(ie,"DIV",{class:!0});var ue=F(v);d(p.$$.fragment,ue),b=R(ue),d(k.$$.fragment,ue),ue.forEach(M),C=R(ie),I=L(ie,"DIV",{class:!0});var q=F(I);d(E.$$.fragment,q),u=R(q),d(i.$$.fragment,q),P=R(q),d(T.$$.fragment,q),D=R(q),d(A.$$.fragment,q),H=R(q),d(N.$$.fragment,q),q.forEach(M),ie.forEach(M),ee=R(O),d(te.$$.fragment,O),O.forEach(M),this.h()},h(){z(o,"class","terms svelte-1031y93"),z(n,"class","header svelte-1031y93"),z(v,"class","left svelte-1031y93"),z(I,"class","right svelte-1031y93"),z(g,"class","main svelte-1031y93"),z(e,"id","auth-recover"),z(e,"class","svelte-1031y93")},m(U,O){B(U,e,O),S(e,n),h(t,n,null),S(n,r),h(s,n,null),S(n,l),S(n,o),S(e,m),S(e,g),S(g,v),h(p,v,null),S(v,b),h(k,v,null),S(g,C),S(g,I),h(E,I,null),S(I,u),h(i,I,null),S(I,P),h(T,I,null),S(I,D),h(A,I,null),S(I,H),h(N,I,null),S(e,ee),h(te,e,null),Pe=!0},p(U,[O]){const Z={};O&65600&&(Z.$$scope={dirty:O,ctx:U}),t.$set(Z);const ie={};O&65600&&(ie.$$scope={dirty:O,ctx:U}),s.$set(ie);const ue={};O&8&&(ue.image=U[3]),p.$set(ue);const q={};O&64&&(q.tooltip=U[6]("settings.profile.change_profile_photo")),k.$set(q);const Ve={};O&64&&(Ve.text=U[6]("generic.username")),E.$set(Ve);const Re={};O&64&&(Re.placeholder=U[6]("pages.auth.new_account.enter_username")),i.$set(Re);const Te={};O&64&&(Te.text=U[6]("generic.status_message")),A.$set(Te);const Ue={};O&64&&(Ue.placeholder=U[6]("pages.auth.new_account.set_status")),N.$set(Ue);const Ce={};O&65651&&(Ce.$$scope={dirty:O,ctx:U}),te.$set(Ce)},i(U){Pe||($(t.$$.fragment,U),$(s.$$.fragment,U),$(p.$$.fragment,U),$(k.$$.fragment,U),$(E.$$.fragment,U),$(i.$$.fragment,U),$(T.$$.fragment,U),$(A.$$.fragment,U),$(N.$$.fragment,U),$(te.$$.fragment,U),Pe=!0)},o(U){c(t.$$.fragment,U),c(s.$$.fragment,U),c(p.$$.fragment,U),c(k.$$.fragment,U),c(E.$$.fragment,U),c(i.$$.fragment,U),c(T.$$.fragment,U),c(A.$$.fragment,U),c(N.$$.fragment,U),c(te.$$.fragment,U),Pe=!1},d(U){U&&M(e),w(t),w(s),w(p),w(k),w(E),w(i),w(T),w(A),w(N),w(te)}}}function Lt(a,e,n){let t;be(a,Ee,i=>n(6,t=i));let{page:r}=e,{username:s=""}=e,{statusMessage:l=""}=e,{profilePicture:o=""}=e,f=!1,m=!0,g=t("pages.auth.new_account.setUsername");async function v(i){n(3,o=i)}const p=async i=>{await v(i.detail)},b=i=>{n(4,f=i.detail)},k=async i=>{n(1,s=i.detail)},C=i=>{n(5,m=i.detail)},I=async i=>{n(2,l=i.detail)},E=()=>n(0,r=Y.EntryPoint),u=async i=>{if(s===""){De.addToastNotification(new Ae("",g,2));return}f&&m&&n(0,r=Y.Pin)};return a.$$set=i=>{"page"in i&&n(0,r=i.page),"username"in i&&n(1,s=i.username),"statusMessage"in i&&n(2,l=i.statusMessage),"profilePicture"in i&&n(3,o=i.profilePicture)},[r,s,l,o,f,m,t,g,v,p,b,k,C,I,E,u]}class Ft extends me{constructor(e){super(),ge(this,e,Lt,yt,pe,{page:0,username:1,statusMessage:2,profilePicture:3})}}function He(a,e,n){const t=a.slice();return t[6]=e[n],t[8]=n,t}function Nt(a){let e=a[1]("pages.auth.recovery.title")+"",n;return{c(){n=Q(e)},l(t){n=X(t,e)},m(t,r){B(t,n,r)},p(t,r){r&2&&e!==(e=t[1]("pages.auth.recovery.title")+"")&&fe(n,e)},d(t){t&&M(n)}}}function jt(a){let e=a[1]("pages.auth.recovery.save_warning")+"",n;return{c(){n=Q(e)},l(t){n=X(t,e)},m(t,r){B(t,n,r)},p(t,r){r&2&&e!==(e=t[1]("pages.auth.recovery.save_warning")+"")&&fe(n,e)},d(t){t&&M(n)}}}function Ht(a){let e,n,t=ye(a[3]),r=[];for(let l=0;l<t.length;l+=1)r[l]=qe(He(a,t,l));const s=l=>c(r[l],1,1,()=>{r[l]=null});return{c(){for(let l=0;l<r.length;l+=1)r[l].c();e=ce()},l(l){for(let o=0;o<r.length;o+=1)r[o].l(l);e=ce()},m(l,o){for(let f=0;f<r.length;f+=1)r[f]&&r[f].m(l,o);B(l,e,o),n=!0},p(l,o){if(o&9){t=ye(l[3]);let f;for(f=0;f<t.length;f+=1){const m=He(l,t,f);r[f]?(r[f].p(m,o),$(r[f],1)):(r[f]=qe(m),r[f].c(),$(r[f],1),r[f].m(e.parentNode,e))}for(re(),f=t.length;f<r.length;f+=1)s(f);ae()}},i(l){if(!n){for(let o=0;o<t.length;o+=1)$(r[o]);n=!0}},o(l){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)c(r[o]);n=!1},d(l){l&&M(e),st(r,l)}}}function qe(a){let e,n;return e=new $t({props:{number:a[8]+1,word:a[6],loading:a[0]}}),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,r){const s={};r&1&&(s.loading=t[0]),e.$set(s)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function qt(a){let e,n;return e=new J({props:{icon:G.Download}}),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p:j,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function Wt(a){let e,n;return e=new J({props:{icon:G.ArrowRight}}),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p:j,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function Gt(a){let e,n,t,r;return e=new W({props:{class:"full-width",text:a[1]("pages.auth.recovery.download"),appearance:K.Alt,loading:a[0],$$slots:{default:[qt]},$$scope:{ctx:a}}}),e.$on("click",a[4]),t=new W({props:{class:"full-width",text:a[1]("pages.auth.recovery.next_step"),loading:a[0],$$slots:{default:[Wt]},$$scope:{ctx:a}}}),t.$on("click",a[5]),{c(){_(e.$$.fragment),n=V(),_(t.$$.fragment)},l(s){d(e.$$.fragment,s),n=R(s),d(t.$$.fragment,s)},m(s,l){h(e,s,l),B(s,n,l),h(t,s,l),r=!0},p(s,l){const o={};l&2&&(o.text=s[1]("pages.auth.recovery.download")),l&1&&(o.loading=s[0]),l&512&&(o.$$scope={dirty:l,ctx:s}),e.$set(o);const f={};l&2&&(f.text=s[1]("pages.auth.recovery.next_step")),l&1&&(f.loading=s[0]),l&512&&(f.$$scope={dirty:l,ctx:s}),t.$set(f)},i(s){r||($(e.$$.fragment,s),$(t.$$.fragment,s),r=!0)},o(s){c(e.$$.fragment,s),c(t.$$.fragment,s),r=!1},d(s){s&&M(n),w(e,s),w(t,s)}}}function Jt(a){let e,n,t,r,s,l,o,f,m;t=new xe({props:{$$slots:{default:[Nt]},$$scope:{ctx:a}}}),s=new x({props:{muted:!0,$$slots:{default:[jt]},$$scope:{ctx:a}}});let g=a[3]&&Ht(a);return f=new ve({props:{$$slots:{default:[Gt]},$$scope:{ctx:a}}}),{c(){e=y("div"),n=y("div"),_(t.$$.fragment),r=V(),_(s.$$.fragment),l=V(),g&&g.c(),o=V(),_(f.$$.fragment),this.h()},l(v){e=L(v,"DIV",{id:!0,class:!0});var p=F(e);n=L(p,"DIV",{class:!0});var b=F(n);d(t.$$.fragment,b),r=R(b),d(s.$$.fragment,b),b.forEach(M),l=R(p),g&&g.l(p),o=R(p),d(f.$$.fragment,p),p.forEach(M),this.h()},h(){z(n,"class","header svelte-skp0c8"),z(e,"id","auth-recover"),z(e,"class","svelte-skp0c8")},m(v,p){B(v,e,p),S(e,n),h(t,n,null),S(n,r),h(s,n,null),S(e,l),g&&g.m(e,null),S(e,o),h(f,e,null),m=!0},p(v,[p]){const b={};p&514&&(b.$$scope={dirty:p,ctx:v}),t.$set(b);const k={};p&514&&(k.$$scope={dirty:p,ctx:v}),s.$set(k),v[3]&&g.p(v,p);const C={};p&515&&(C.$$scope={dirty:p,ctx:v}),f.$set(C)},i(v){m||($(t.$$.fragment,v),$(s.$$.fragment,v),$(g),$(f.$$.fragment,v),m=!0)},o(v){c(t.$$.fragment,v),c(s.$$.fragment,v),c(g),c(f.$$.fragment,v),m=!1},d(v){v&&M(e),w(t),w(s),g&&g.d(),w(f)}}}function Kt(a,e,n){var m;let t;be(a,Ee,g=>n(1,t=g));const r=Xe();let s=(m=$e.fetchSeed())==null?void 0:m.split(" "),l=!1;function o(){if(!s)return;const g=s.join(" "),v=new Blob([g],{type:"text/plain"}),p=document.createElement("a");p.href=URL.createObjectURL(v),p.download="seed-phrase.txt",p.click(),URL.revokeObjectURL(p.href)}return[l,t,r,s,o,g=>{n(0,l=!0),r("click")}]}class Qt extends me{constructor(e){super(),ge(this,e,Kt,Jt,pe,{})}}function We(a){let e,n;return e=new Ie({props:{padded:!0,$$slots:{default:[xt]},$$scope:{ctx:a}}}),e.$on("close",a[11]),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,r){const s={};r&524304&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function Xt(a){let e=le[1].name+"",n;return{c(){n=Q(e)},l(t){n=X(t,e)},m(t,r){B(t,n,r)},p:j,d(t){t&&M(n)}}}function Yt(a){let e=le[2].name+"",n;return{c(){n=Q(e)},l(t){n=X(t,e)},m(t,r){B(t,n,r)},p:j,d(t){t&&M(n)}}}function Zt(a){let e,n;return e=new J({props:{icon:G.Plus}}),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p:j,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function xt(a){let e,n,t,r,s,l,o,f,m,g,v,p,b,k,C,I,E;return n=new oe({props:{text:a[4]("generic.profiles")}}),s=new ke({props:{image:le[1].profile.photo.image,noIndicator:!0}}),o=new x({props:{class:"username",$$slots:{default:[Xt]},$$scope:{ctx:a}}}),g=new ke({props:{image:le[2].profile.photo.image}}),p=new x({props:{class:"username",$$slots:{default:[Yt]},$$scope:{ctx:a}}}),k=new Se({}),I=new W({props:{text:a[4]("pages.auth.create.profile"),appearance:K.Alt,$$slots:{default:[Zt]},$$scope:{ctx:a}}}),{c(){e=y("div"),_(n.$$.fragment),t=V(),r=y("div"),_(s.$$.fragment),l=V(),_(o.$$.fragment),f=V(),m=y("div"),_(g.$$.fragment),v=V(),_(p.$$.fragment),b=V(),_(k.$$.fragment),C=V(),_(I.$$.fragment),this.h()},l(u){e=L(u,"DIV",{class:!0});var i=F(e);d(n.$$.fragment,i),t=R(i),r=L(i,"DIV",{class:!0});var P=F(r);d(s.$$.fragment,P),l=R(P),d(o.$$.fragment,P),P.forEach(M),f=R(i),m=L(i,"DIV",{class:!0});var T=F(m);d(g.$$.fragment,T),v=R(T),d(p.$$.fragment,T),T.forEach(M),b=R(i),d(k.$$.fragment,i),C=R(i),d(I.$$.fragment,i),i.forEach(M),this.h()},h(){z(r,"class","user svelte-1cl9lbz"),z(m,"class","user svelte-1cl9lbz"),z(e,"class","profiles svelte-1cl9lbz")},m(u,i){B(u,e,i),h(n,e,null),S(e,t),S(e,r),h(s,r,null),S(r,l),h(o,r,null),S(e,f),S(e,m),h(g,m,null),S(m,v),h(p,m,null),S(e,b),h(k,e,null),S(e,C),h(I,e,null),E=!0},p(u,i){const P={};i&16&&(P.text=u[4]("generic.profiles")),n.$set(P);const T={};i&524288&&(T.$$scope={dirty:i,ctx:u}),o.$set(T);const D={};i&524288&&(D.$$scope={dirty:i,ctx:u}),p.$set(D);const A={};i&16&&(A.text=u[4]("pages.auth.create.profile")),i&524288&&(A.$$scope={dirty:i,ctx:u}),I.$set(A)},i(u){E||($(n.$$.fragment,u),$(s.$$.fragment,u),$(o.$$.fragment,u),$(g.$$.fragment,u),$(p.$$.fragment,u),$(k.$$.fragment,u),$(I.$$.fragment,u),E=!0)},o(u){c(n.$$.fragment,u),c(s.$$.fragment,u),c(o.$$.fragment,u),c(g.$$.fragment,u),c(p.$$.fragment,u),c(k.$$.fragment,u),c(I.$$.fragment,u),E=!1},d(u){u&&M(e),w(n),w(s),w(o),w(g),w(p),w(k),w(I)}}}function Ge(a){let e,n;return e=new Ie({props:{padded:!0,$$slots:{default:[en]},$$scope:{ctx:a}}}),e.$on("close",a[12]),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,r){const s={};r&524288&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function en(a){let e,n;return e=new Ye({}),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function tn(a){let e,n;return e=new oe({props:{text:a[0]?a[4]("pages.auth.unlock.choose_pin"):a[4]("pages.auth.unlock.enter_pin")}}),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,r){const s={};r&17&&(s.text=t[0]?t[4]("pages.auth.unlock.choose_pin"):t[4]("pages.auth.unlock.enter_pin")),e.$set(s)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function nn(a){let e,n;return e=new oe({props:{text:a[4]("generic.loading")}}),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,r){const s={};r&16&&(s.text=t[4]("generic.loading")),e.$set(s)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function rn(a){let e,n;return e=new W({props:{tooltip:a[4]("pages.auth.changeUser"),icon:!0,appearance:K.Alt,$$slots:{default:[an]},$$scope:{ctx:a}}}),e.$on("click",a[14]),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,r){const s={};r&16&&(s.tooltip=t[4]("pages.auth.changeUser")),r&524288&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function an(a){let e,n;return e=new J({props:{icon:G.Profile}}),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p:j,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function sn(a){let e,n;return e=new J({props:{icon:G.Relay}}),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p:j,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function ln(a){let e,n;return e=new J({props:{icon:G.Trash}}),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p:j,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function on(a){let e=se(Me.state).devmode,n,t,r,s,l,o=e&&rn(a);return t=new W({props:{tooltip:a[4]("pages.auth.relay"),icon:!0,appearance:K.Alt,$$slots:{default:[sn]},$$scope:{ctx:a}}}),t.$on("click",a[15]),s=new W({props:{tooltip:a[4]("settings.profile.delete_title"),appearance:K.Alt,icon:!0,$$slots:{default:[ln]},$$scope:{ctx:a}}}),s.$on("click",a[16]),{c(){o&&o.c(),n=V(),_(t.$$.fragment),r=V(),_(s.$$.fragment)},l(f){o&&o.l(f),n=R(f),d(t.$$.fragment,f),r=R(f),d(s.$$.fragment,f)},m(f,m){o&&o.m(f,m),B(f,n,m),h(t,f,m),B(f,r,m),h(s,f,m),l=!0},p(f,m){e&&o.p(f,m);const g={};m&16&&(g.tooltip=f[4]("pages.auth.relay")),m&524288&&(g.$$scope={dirty:m,ctx:f}),t.$set(g);const v={};m&16&&(v.tooltip=f[4]("settings.profile.delete_title")),m&524288&&(v.$$scope={dirty:m,ctx:f}),s.$set(v)},i(f){l||($(o),$(t.$$.fragment,f),$(s.$$.fragment,f),l=!0)},o(f){c(o),c(t.$$.fragment,f),c(s.$$.fragment,f),l=!1},d(f){f&&(M(n),M(r)),o&&o.d(f),w(t,f),w(s,f)}}}function Je(a){let e,n;return e=new Ie({props:{$$slots:{default:[$n]},$$scope:{ctx:a}}}),e.$on("close",a[18]),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,r){const s={};r&524304&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function fn(a){let e=a[4]("settings.profile.delete_account_action_description")+"",n;return{c(){n=Q(e)},l(t){n=X(t,e)},m(t,r){B(t,n,r)},p(t,r){r&16&&e!==(e=t[4]("settings.profile.delete_account_action_description")+"")&&fe(n,e)},d(t){t&&M(n)}}}function un(a){let e=a[4]("settings.profile.delete_account_confirm_pin")+"",n;return{c(){n=Q(e)},l(t){n=X(t,e)},m(t,r){B(t,n,r)},p(t,r){r&16&&e!==(e=t[4]("settings.profile.delete_account_confirm_pin")+"")&&fe(n,e)},d(t){t&&M(n)}}}function $n(a){let e,n,t,r,s,l,o;return n=new x({props:{class:"delete-account-pin-first-message",appearance:K.Error,$$slots:{default:[fn]},$$scope:{ctx:a}}}),r=new x({props:{$$slots:{default:[un]},$$scope:{ctx:a}}}),l=new Ze({props:{min:4,max:8,loading:!1,scramble:!1,stayLoggedIn:!1,showSettings:!1,showButtonSettings:!1}}),l.$on("submit",a[17]),{c(){e=y("div"),_(n.$$.fragment),t=V(),_(r.$$.fragment),s=V(),_(l.$$.fragment),this.h()},l(f){e=L(f,"DIV",{class:!0});var m=F(e);d(n.$$.fragment,m),t=R(m),d(r.$$.fragment,m),s=R(m),d(l.$$.fragment,m),m.forEach(M),this.h()},h(){z(e,"class","delete-account-pin svelte-1cl9lbz")},m(f,m){B(f,e,m),h(n,e,null),S(e,t),h(r,e,null),S(e,s),h(l,e,null),o=!0},p(f,m){const g={};m&524304&&(g.$$scope={dirty:m,ctx:f}),n.$set(g);const v={};m&524304&&(v.$$scope={dirty:m,ctx:f}),r.$set(v)},i(f){o||($(n.$$.fragment,f),$(r.$$.fragment,f),$(l.$$.fragment,f),o=!0)},o(f){c(n.$$.fragment,f),c(r.$$.fragment,f),c(l.$$.fragment,f),o=!1},d(f){f&&M(e),w(n),w(r),w(l)}}}function cn(a){let e,n,t,r,s,l,o,f,m,g,v,p,b=a[2]&&We(a),k=a[3]&&Ge(a);const C=[nn,tn],I=[];function E(i,P){return i[1]?0:1}r=E(a),s=I[r]=C[r](a),o=new Ze({props:{min:4,max:8,loading:a[1],scramble:a[7],stayLoggedIn:a[8],showSettings:!1}}),o.$on("submit",a[13]),g=new ve({props:{$$slots:{default:[on]},$$scope:{ctx:a}}});let u=a[5]&&Je(a);return{c(){e=y("div"),b&&b.c(),n=V(),k&&k.c(),t=V(),s.c(),l=V(),_(o.$$.fragment),f=V(),m=y("div"),_(g.$$.fragment),v=V(),u&&u.c(),this.h()},l(i){e=L(i,"DIV",{id:!0,class:!0});var P=F(e);b&&b.l(P),n=R(P),k&&k.l(P),t=R(P),s.l(P),l=R(P),d(o.$$.fragment,P),f=R(P),m=L(P,"DIV",{class:!0});var T=F(m);d(g.$$.fragment,T),T.forEach(M),v=R(P),u&&u.l(P),P.forEach(M),this.h()},h(){z(m,"class","unlock-controls svelte-1cl9lbz"),z(e,"id","auth-unlock"),z(e,"class","svelte-1cl9lbz")},m(i,P){B(i,e,P),b&&b.m(e,null),S(e,n),k&&k.m(e,null),S(e,t),I[r].m(e,null),S(e,l),h(o,e,null),S(e,f),S(e,m),h(g,m,null),S(e,v),u&&u.m(e,null),p=!0},p(i,[P]){i[2]?b?(b.p(i,P),P&4&&$(b,1)):(b=We(i),b.c(),$(b,1),b.m(e,n)):b&&(re(),c(b,1,1,()=>{b=null}),ae()),i[3]?k?(k.p(i,P),P&8&&$(k,1)):(k=Ge(i),k.c(),$(k,1),k.m(e,t)):k&&(re(),c(k,1,1,()=>{k=null}),ae());let T=r;r=E(i),r===T?I[r].p(i,P):(re(),c(I[T],1,1,()=>{I[T]=null}),ae(),s=I[r],s?s.p(i,P):(s=I[r]=C[r](i),s.c()),$(s,1),s.m(e,l));const D={};P&2&&(D.loading=i[1]),o.$set(D);const A={};P&524316&&(A.$$scope={dirty:P,ctx:i}),g.$set(A),i[5]?u?(u.p(i,P),P&32&&$(u,1)):(u=Je(i),u.c(),$(u,1),u.m(e,null)):u&&(re(),c(u,1,1,()=>{u=null}),ae())},i(i){p||($(b),$(k),$(s),$(o.$$.fragment,i),$(g.$$.fragment,i),$(u),p=!0)},o(i){c(b),c(k),c(s),c(o.$$.fragment,i),c(g.$$.fragment,i),c(u),p=!1},d(i){i&&M(e),b&&b.d(),k&&k.d(),I[r].d(),w(o),w(g),u&&u.d()}}}function Ke(a){return new Promise((e,n)=>{const t=indexedDB.deleteDatabase(a);t.onsuccess=function(){console.log(`Database '${a}' deleted successfully.`),e("Success")},t.onerror=function(){console.error(`Failed to delete database '${a}':`,t.error),n(t.error)},t.onblocked=function(){console.warn(`Database deletion for '${a}' is blocked. Close other tabs that use it and try again.`),e("Blocked")}})}async function Qe(){try{localStorage.clear(),console.log("localStorage cleared."),sessionStorage.clear(),console.log("sessionStorage cleared."),await Ke("tesseract"),console.log("Database 'tesseract' cleared if it existed.");const a=await indexedDB.databases();for(let e of a)e.name&&await Ke(e.name)==="Blocked"&&console.warn(`Could not delete database '${e.name}' due to blocking issues.`);console.log("All IndexedDB data cleared, where not blocked."),document.cookie.split(";").forEach(e=>{const n=e.split("=")[0].trim();document.cookie=n+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"}),console.log("Cookies cleared."),window.location.href="/UplinkWeb/auth?cacheBust="+new Date().getTime()}catch(a){console.error("Error clearing data:",a)}}function pn(a,e,n){let t,r;be(a,Ee,D=>n(4,t=D));let{create:s=!1}=e;const l=Xe();let o=!1,f=se(ne.state).scramblePin,m=se(ne.state).stayLoggedIn,g=lt(!1);be(a,g,D=>n(5,r=D));let v=t("settings.profile.delete_account_wrong_pin"),p=!1,b=!1;const k=D=>n(2,p=!1),C=D=>n(3,b=!1),I=async D=>{n(1,o=!0),await new Promise(A=>{l("pin",{pin:D.detail,done:A})}),n(1,o=!1)},E=D=>n(2,p=!0),u=D=>n(3,b=!0),i=D=>{se(ne.state).pin===""?Qe():g.set(!0)},P=async D=>{let A=D.detail;await new Promise(async H=>{let N=await $e.unlock(A);N.onFailure(ee=>{De.addToastNotification(new Ae("",v,3))}),N.onSuccess(async ee=>{await Qe()})})},T=D=>{g.set(!1)};return a.$$set=D=>{"create"in D&&n(0,s=D.create)},[s,o,p,b,t,r,l,f,m,g,v,k,C,I,E,u,i,P,T]}class mn extends me{constructor(e){super(),ge(this,e,pn,cn,pe,{create:0})}}var Y=(a=>(a[a.EntryPoint=0]="EntryPoint",a[a.Username=1]="Username",a[a.Pin=2]="Pin",a[a.RecoveryCopy=3]="RecoveryCopy",a[a.Import=4]="Import",a))(Y||{});function gn(a){let e,n;return e=new Qt({}),e.$on("click",a[6]),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p:j,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function _n(a){let e,n;return e=new mn({props:{create:!a[4]()}}),e.$on("pin",a[12]),{c(){_(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p:j,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function dn(a){let e,n,t,r,s,l;function o(p){a[8](p)}function f(p){a[9](p)}function m(p){a[10](p)}function g(p){a[11](p)}let v={};return a[0]!==void 0&&(v.page=a[0]),a[1]!==void 0&&(v.username=a[1]),a[2]!==void 0&&(v.statusMessage=a[2]),a[3]!==void 0&&(v.profilePicture=a[3]),e=new Ft({props:v}),de.push(()=>we(e,"page",o)),de.push(()=>we(e,"username",f)),de.push(()=>we(e,"statusMessage",m)),de.push(()=>we(e,"profilePicture",g)),{c(){_(e.$$.fragment)},l(p){d(e.$$.fragment,p)},m(p,b){h(e,p,b),l=!0},p(p,b){const k={};!n&&b&1&&(n=!0,k.page=p[0],he(()=>n=!1)),!t&&b&2&&(t=!0,k.username=p[1],he(()=>t=!1)),!r&&b&4&&(r=!0,k.statusMessage=p[2],he(()=>r=!1)),!s&&b&8&&(s=!0,k.profilePicture=p[3],he(()=>s=!1)),e.$set(k)},i(p){l||($(e.$$.fragment,p),l=!0)},o(p){c(e.$$.fragment,p),l=!1},d(p){w(e,p)}}}function hn(a){let e,n,t;function r(l){a[7](l)}let s={};return a[0]!==void 0&&(s.page=a[0]),e=new Tt({props:s}),de.push(()=>we(e,"page",r)),{c(){_(e.$$.fragment)},l(l){d(e.$$.fragment,l)},m(l,o){h(e,l,o),t=!0},p(l,o){const f={};!n&&o&1&&(n=!0,f.page=l[0],he(()=>n=!1)),e.$set(f)},i(l){t||($(e.$$.fragment,l),t=!0)},o(l){c(e.$$.fragment,l),t=!1},d(l){w(e,l)}}}function wn(a){let e,n,t,r;const s=[hn,dn,_n,gn],l=[];function o(f,m){return f[0]==Y.EntryPoint?0:f[0]==Y.Username?1:f[0]==Y.Pin?2:f[0]==Y.RecoveryCopy?3:-1}return~(e=o(a))&&(n=l[e]=s[e](a)),{c(){n&&n.c(),t=ce()},l(f){n&&n.l(f),t=ce()},m(f,m){~e&&l[e].m(f,m),B(f,t,m),r=!0},p(f,[m]){let g=e;e=o(f),e===g?~e&&l[e].p(f,m):(n&&(re(),c(l[g],1,1,()=>{l[g]=null}),ae()),~e?(n=l[e],n?n.p(f,m):(n=l[e]=s[e](f),n.c()),$(n,1),n.m(t.parentNode,t)):n=null)},i(f){r||($(n),r=!0)},o(f){c(n),r=!1},d(f){f&&M(t),~e&&l[e].d(f)}}}function bn(a,e,n){function t(){return $e.initTesseract(),$e.exists()}let r=t()?Y.Pin:Y.EntryPoint,s="",l="",o="";async function f(I){let E=Object.values(se(ft.state)).filter(i=>i.active).map(i=>i.address);if(se(ne.state).pin===""||!(await $e.getTesseract()).is_unlock()){let i=await $e.unlock(I),P=!1;if(i.onFailure(T=>{P=!0,De.addToastNotification(new Ae("","Pin is wrong!",2))}),P)return;await it.initWarpInstances(E)}(await _e.getOwnIdentity()).fold(async i=>{if(s==="")return;ne.setStoredPin(I),(await _e.createIdentity(s,l,o)).fold(T=>{Oe.error("Error creating identity: "+T)},T=>{n(0,r=Y.RecoveryCopy)})},async i=>{ne.logIn(!0),ne.setStoredPin(I),setTimeout(()=>_e.initMultipassListener(),1e3),Be(ze.Pre)})}async function m(){(await _e.getOwnIdentity()).fold(E=>{Oe.error("Error creating identity: "+E)},async E=>{ne.logIn(!0),De.setUserFromIdentity(E,o),await new Promise(u=>setTimeout(u,1e3)),setTimeout(()=>_e.initMultipassListener(),1e3),Be(ze.Chat)})}function g(I){r=I,n(0,r)}function v(I){r=I,n(0,r)}function p(I){s=I,n(1,s)}function b(I){l=I,n(2,l)}function k(I){o=I,n(3,o)}return[r,s,l,o,t,f,m,g,v,p,b,k,async I=>{await f(I.detail.pin),I.detail.done()}]}class Fn extends me{constructor(e){super(),ge(this,e,bn,wn,pe,{})}}export{Fn as component};
