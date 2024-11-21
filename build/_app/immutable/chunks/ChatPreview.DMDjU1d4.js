import{s as Ie,e as j,a as x,c as W,b as B,g as ee,f as g,l as E,i as z,h as D,p as we,r as De,k as ce,q as Ee,u as Y,v as Me,t as ae,d as ie,j as le,w as re,n as G,x as fe,y as Te}from"./scheduler.BSglW4Eu.js";import{S as Ae,i as Ne,c as M,a as T,m as A,g as _e,b as h,d as me,t as b,e as N}from"./index.B6nwG8t1.js";import{S as oe,$ as qe,b as I,C as ze,d as Re,P as ye,e as Se,f as Le,t as Ve,U as Oe,R as je,a as We,A as Be}from"./Store.B71MOcmv.js";import{d as Ge,g as Je}from"./entry.DdGfY-DO.js";import{T as ne,a as Fe,L as Ue}from"./UnderConstruction.svelte_svelte_type_style_lang.C3y3v04B.js";import{I as He}from"./Icon.6xDlbKJO.js";import{t as Ke,c as Qe}from"./Role.svelte_svelte_type_style_lang.CD9JYgPq.js";/* empty css                                               */import{P as Xe}from"./ProfilePictureMany.B_sueMtY.js";import{c as Ye}from"./Navigation.DvEiY1lv.js";/* empty css                                            */import{P as Ze}from"./ProfilePicture.D1Mu2KhJ.js";function xe(a){let e,t;return e=new Xe({props:{users:a[4]}}),{c(){M(e.$$.fragment)},l(s){T(e.$$.fragment,s)},m(s,n){A(e,s,n),t=!0},p(s,n){const r={};n[0]&16&&(r.users=s[4]),e.$set(r)},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){h(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function et(a){let e,t;return e=new Ze({props:{id:a[4][1].key,typing:a[1].typing_indicator.size>0&&a[1].typing_indicator.users()[0]===a[4][1].key,image:a[10],status:a[9],size:oe.Medium,loading:a[0],frame:a[4][1].profile.photo.frame}}),{c(){M(e.$$.fragment)},l(s){T(e.$$.fragment,s)},m(s,n){A(e,s,n),t=!0},p(s,n){const r={};n[0]&16&&(r.id=s[4][1].key),n[0]&18&&(r.typing=s[1].typing_indicator.size>0&&s[1].typing_indicator.users()[0]===s[4][1].key),n[0]&1024&&(r.image=s[10]),n[0]&512&&(r.status=s[9]),n[0]&1&&(r.loading=s[0]),n[0]&16&&(r.frame=s[4][1].profile.photo.frame),e.$set(r)},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){h(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function tt(a){let e;return{c(){e=ae(a[3])},l(t){e=ie(t,a[3])},m(t,s){z(t,e,s)},p(t,s){s[0]&8&&le(e,t[3])},d(t){t&&g(e)}}}function st(a){let e;return{c(){e=ae(a[5])},l(t){e=ie(t,a[5])},m(t,s){z(t,e,s)},p(t,s){s[0]&32&&le(e,t[5])},i:G,o:G,d(t){t&&g(e)}}}function rt(a){let e,t;return e=new He({props:{icon:We.PhoneCall,highlight:Be.Success}}),{c(){M(e.$$.fragment)},l(s){T(e.$$.fragment,s)},m(s,n){A(e,s,n),t=!0},p:G,i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){h(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function nt(a){let e,t,s,n;const r=[rt,st],o=[];function k(f,p){return f[13]===f[1].id?0:1}return e=k(a),t=o[e]=r[e](a),{c(){t.c(),s=re()},l(f){t.l(f),s=re()},m(f,p){o[e].m(f,p),z(f,s,p),n=!0},p(f,p){let d=e;e=k(f),e===d?o[e].p(f,p):(_e(),h(o[d],1,1,()=>{o[d]=null}),me(),t=o[e],t?t.p(f,p):(t=o[e]=r[e](f),t.c()),b(t,1),t.m(s.parentNode,s))},i(f){n||(b(t),n=!0)},o(f){h(t),n=!1},d(f){f&&g(s),o[e].d(f)}}}function Pe(a){let e;function t(r,o){if(r[1].notifications>0&&!r[14])return it;if(r[1].notifications>0&&r[14])return at}let s=t(a),n=s&&s(a);return{c(){n&&n.c(),e=re()},l(r){n&&n.l(r),e=re()},m(r,o){n&&n.m(r,o),z(r,e,o)},p(r,o){s===(s=t(r))&&n?n.p(r,o):(n&&n.d(1),n=s&&s(r),n&&(n.c(),n.m(e.parentNode,e)))},d(r){r&&g(e),n&&n.d(r)}}}function at(a){let e;return{c(){e=j("span"),this.h()},l(t){e=W(t,"SPAN",{class:!0}),B(e).forEach(g),this.h()},h(){E(e,"class","unreads simple svelte-1wk7tdz")},m(t,s){z(t,e,s)},p:G,d(t){t&&g(e)}}}function it(a){let e,t=a[1].notifications+"",s;return{c(){e=j("span"),s=ae(t),this.h()},l(n){e=W(n,"SPAN",{class:!0});var r=B(e);s=ie(r,t),r.forEach(g),this.h()},h(){E(e,"class","unreads svelte-1wk7tdz")},m(n,r){z(n,e,r),D(e,s)},p(n,r){r[0]&2&&t!==(t=n[1].notifications+"")&&le(s,t)},d(n){n&&g(e)}}}function lt(a){let e,t;return e=new ne({props:{size:oe.Small,loading:a[0],$$slots:{default:[ct]},$$scope:{ctx:a}}}),{c(){M(e.$$.fragment)},l(s){T(e.$$.fragment,s)},m(s,n){A(e,s,n),t=!0},p(s,n){const r={};n[0]&1&&(r.loading=s[0]),n[0]&128|n[1]&1&&(r.$$scope={dirty:n,ctx:s}),e.$set(r)},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){h(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function ot(a){let e,t,s;return t=new ne({props:{size:oe.Small,loading:a[0],markdown:a[1].last_message_preview}}),{c(){e=j("div"),M(t.$$.fragment),this.h()},l(n){e=W(n,"DIV",{class:!0});var r=B(e);T(t.$$.fragment,r),r.forEach(g),this.h()},h(){E(e,"class","sticker svelte-1wk7tdz")},m(n,r){z(n,e,r),A(t,e,null),s=!0},p(n,r){const o={};r[0]&1&&(o.loading=n[0]),r[0]&2&&(o.markdown=n[1].last_message_preview),t.$set(o)},i(n){s||(b(t.$$.fragment,n),s=!0)},o(n){h(t.$$.fragment,n),s=!1},d(n){n&&g(e),N(t)}}}function ut(a){let e,t,s,n;return e=new Ue({props:{text:!0,small:!0}}),s=new Ue({props:{text:!0,small:!0}}),{c(){M(e.$$.fragment),t=x(),M(s.$$.fragment)},l(r){T(e.$$.fragment,r),t=ee(r),T(s.$$.fragment,r)},m(r,o){A(e,r,o),z(r,t,o),A(s,r,o),n=!0},p:G,i(r){n||(b(e.$$.fragment,r),b(s.$$.fragment,r),n=!0)},o(r){h(e.$$.fragment,r),h(s.$$.fragment,r),n=!1},d(r){r&&g(t),N(e,r),N(s,r)}}}function ct(a){let e;return{c(){e=ae(a[7])},l(t){e=ie(t,a[7])},m(t,s){z(t,e,s)},p(t,s){s[0]&128&&le(e,t[7])},d(t){t&&g(e)}}}function ft(a){let e,t,s,n,r,o,k,f,p,d,q,$,w,R,v,_,L,H,C,K,Q;const te=[et,xe],u=[];function X(i,c){return i[1].kind===ze.DirectMessage?0:1}t=X(a),s=u[t]=te[t](a),k=new ne({props:{class:"chat-user min-text",singleLine:!0,loading:a[0],$$slots:{default:[tt]},$$scope:{ctx:a}}}),d=new ne({props:{class:"timestamp min-text",loading:a[0],size:oe.Smallest,muted:!0,$$slots:{default:[nt]},$$scope:{ctx:a}}});let m=!a[0]&&Pe(a);const J=[ut,ot,lt],S=[];function Z(i,c){return c[0]&2&&(R=null),i[0]?0:(R==null&&(R=!!(i[1].last_message_preview.includes(Ve)||i[1].last_message_preview.includes("giphy.com"))),R?1:2)}return v=Z(a,[-1,-1]),_=S[v]=J[v](a),{c(){e=j("button"),s.c(),n=x(),r=j("div"),o=j("div"),M(k.$$.fragment),f=x(),p=j("div"),M(d.$$.fragment),q=x(),m&&m.c(),$=x(),w=j("p"),_.c(),this.h()},l(i){e=W(i,"BUTTON",{class:!0});var c=B(e);s.l(c),n=ee(c),r=W(c,"DIV",{class:!0});var y=B(r);o=W(y,"DIV",{class:!0});var U=B(o);T(k.$$.fragment,U),f=ee(U),p=W(U,"DIV",{class:!0});var P=B(p);T(d.$$.fragment,P),q=ee(P),m&&m.l(P),P.forEach(g),U.forEach(g),$=ee(y),w=W(y,"P",{class:!0});var V=B(w);_.l(V),V.forEach(g),y.forEach(g),c.forEach(g),this.h()},h(){E(p,"class","right svelte-1wk7tdz"),E(o,"class","heading svelte-1wk7tdz"),E(w,"class","last-message svelte-1wk7tdz"),E(r,"class","content svelte-1wk7tdz"),E(e,"class",L="chat-preview "+a[16]()+" "+(a[6]?"active-chat":"")+" svelte-1wk7tdz"),e.disabled=H=!a[2]},m(i,c){z(i,e,c),u[t].m(e,null),D(e,n),D(e,r),D(r,o),A(k,o,null),D(o,f),D(o,p),A(d,p,null),D(p,q),m&&m.m(p,null),D(r,$),D(r,w),S[v].m(w,null),C=!0,K||(Q=[we(e,"contextmenu",a[20]),we(e,"click",a[21])],K=!0)},p(i,c){let y=t;t=X(i),t===y?u[t].p(i,c):(_e(),h(u[y],1,1,()=>{u[y]=null}),me(),s=u[t],s?s.p(i,c):(s=u[t]=te[t](i),s.c()),b(s,1),s.m(e,n));const U={};c[0]&1&&(U.loading=i[0]),c[0]&8|c[1]&1&&(U.$$scope={dirty:c,ctx:i}),k.$set(U);const P={};c[0]&1&&(P.loading=i[0]),c[0]&8226|c[1]&1&&(P.$$scope={dirty:c,ctx:i}),d.$set(P),i[0]?m&&(m.d(1),m=null):m?m.p(i,c):(m=Pe(i),m.c(),m.m(p,null));let V=v;v=Z(i,c),v===V?S[v].p(i,c):(_e(),h(S[V],1,1,()=>{S[V]=null}),me(),_=S[v],_?_.p(i,c):(_=S[v]=J[v](i),_.c()),b(_,1),_.m(w,null)),(!C||c[0]&64&&L!==(L="chat-preview "+i[16]()+" "+(i[6]?"active-chat":"")+" svelte-1wk7tdz"))&&E(e,"class",L),(!C||c[0]&4&&H!==(H=!i[2]))&&(e.disabled=H)},i(i){C||(b(s),b(k.$$.fragment,i),b(d.$$.fragment,i),b(_),C=!0)},o(i){h(s),h(k.$$.fragment,i),h(d.$$.fragment,i),h(_),C=!1},d(i){i&&g(e),u[t].d(),N(k),N(d),m&&m.d(),S[v].d(),K=!1,De(Q)}}}function _t(a,e,t){let s,n,r,o,k,f,p,d,q,$,w,R=G,v=()=>(R(),R=fe(n,l=>t(19,w=l)),n),_,L=G,H=()=>(L(),L=fe(s,l=>t(4,_=l)),s),C,K,Q=G,te=()=>(Q(),Q=fe(f,l=>t(14,K=l)),f);ce(a,Ke,l=>t(25,q=l)),ce(a,qe,l=>t(18,$=l)),ce(a,Qe,l=>t(13,C=l)),a.$$.on_destroy.push(()=>R()),a.$$.on_destroy.push(()=>L()),a.$$.on_destroy.push(()=>Q());let{chat:u}=e,{cta:X=!1}=e,{loading:m}=e,{interactable:J=!0}=e;const S=new Fe("en-US");let Z=y(u.last_message_at);const i=Ee();let c=Y(I.state.user);function y(l){const O=typeof l=="string"?new Date(l):l;return S.format(O)}Me(()=>{setInterval(()=>{t(5,Z=y(u.last_message_at))},500)});function U(){return J?`${X?"cta":""} `:""}function P(){const l=new Date,O=l.getTime()-(q!=null?q:l).getTime();Math.floor(O/(1e3*60)).toString().padStart(2,"0"),Math.floor(O%(1e3*60)/1e3).toString().padStart(2,"0")}setInterval(P,1e3);function V(l){Te.call(this,a,l)}const Ce=l=>{if(!J)return;i("click"),I.setActiveChat(u),Ye()&&Oe.toggleSidebar(),Je(je.Chat)};return a.$$set=l=>{"chat"in l&&t(1,u=l.chat),"cta"in l&&t(17,X=l.cta),"loading"in l&&t(0,m=l.loading),"interactable"in l&&t(2,J=l.interactable)},a.$$.update=()=>{var l,O,pe,ge,de,he,be,ke;a.$$.dirty[0]&2&&H(t(12,s=I.getUsers(u.users))),a.$$.dirty[0]&2&&v(t(11,n=I.getUsersLookup(u.users))),a.$$.dirty[0]&18&&t(3,r=u.kind===ze.Group?u.name:(O=(l=_[1])==null?void 0:l.name)!=null?O:_[0].name),a.$$.dirty[0]&24&&t(0,m=r==="Unknown User"||_.length<=2&&(((pe=_[1])==null?void 0:pe.loading)==!0||_[0].loading==!0)),a.$$.dirty[0]&16&&t(10,o=(de=(ge=_[1])==null?void 0:ge.profile.photo.image)!=null?de:_[0].profile.photo.image),a.$$.dirty[0]&16&&t(9,k=_.length>2?Re.Offline:(be=(he=_[1])==null?void 0:he.profile.status)!=null?be:_[0].profile.status),a.$$.dirty[0]&524290&&u.typing_indicator.users().map(se=>w[se]),a.$$.dirty[0]&262146&&t(7,p=(()=>{var se,ve;if(!u.last_message_id)return $("message_previews.none");if(u.last_message_id&&!u.last_message_preview)return $("message_previews.attachment");if(u.last_message_preview.startsWith(ye.Request))try{const F=(se=Se.getMessage(u.id,u.last_message_id))==null?void 0:se.details.origin,ue=Y(I.getUser(F)),{amountPreview:$e}=JSON.parse(u.last_message_preview.slice(8));return F!==c.key?$("message_previews.coin_requested",{values:{username:ue.name,amount:$e}}):$("message_previews.request_sent",{values:{amount:$e}})}catch{return"Invalid message format"}else if(u.last_message_preview.startsWith(ye.Reject))try{const F=(ve=Se.getMessage(u.id,u.last_message_id))==null?void 0:ve.details.origin,ue=Y(I.getUser(F));return Y(I.getUser(F)).key!==c.key?$("message_previews.coin_declined",{values:{username:ue.name}}):$("message_previews.coin_canceled")}catch{return"Invalid message format"}return u.last_message_preview})()),a.$$.dirty[0]&2&&t(6,d=((ke=Y(I.state.activeChat))==null?void 0:ke.id)===u.id)},te(t(8,f=Ge(Le.state,l=>l.messaging.simpleUnreads))),Y(I.state.user),[m,u,J,r,_,Z,d,p,f,k,o,n,s,C,K,i,U,X,$,w,V,Ce]}class Ut extends Ae{constructor(e){super(),Ne(this,e,_t,ft,Ie,{chat:1,cta:17,loading:0,interactable:2},null,[-1,-1])}}export{Ut as C};
