import{s as O,e as D,a as h,c as E,b as L,g as x,f as b,l as v,i as k,h as w,k as T,n as I}from"../chunks/scheduler.BSglW4Eu.js";import{S as U,i as V,c as m,a as u,m as p,t as c,b as g,e as _}from"../chunks/index.B6nwG8t1.js";import{C as q}from"../chunks/Controls.CAghxSLw.js";import{B as C,I as B}from"../chunks/Icon.DzRjiQSL.js";import"../chunks/UnderConstruction.svelte_svelte_type_style_lang.DjE3iszU.js";import{A,$ as P,a as M}from"../chunks/Store.jZGzll8E.js";import{L as j}from"../chunks/Label.B4bVuKJN.js";import{U as z}from"../chunks/UnderConstruction.CE7bW4o4.js";function F(i){let e,s;return e=new B({props:{icon:M.CheckMark}}),{c(){m(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,r){p(e,t,r),s=!0},p:I,i(t){s||(c(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){_(e,t)}}}function G(i){let e,s;return e=new B({props:{icon:M.Beaker}}),{c(){m(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,r){p(e,t,r),s=!0},p:I,i(t){s||(c(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){_(e,t)}}}function H(i){let e,s;return e=new B({props:{icon:M.Cog}}),{c(){m(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,r){p(e,t,r),s=!0},p:I,i(t){s||(c(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){_(e,t)}}}function J(i){let e,s,t,r,$,d;return e=new C({props:{text:i[0]("settings.extensions.installed"),appearance:A.Alt,$$slots:{default:[F]},$$scope:{ctx:i}}}),t=new C({props:{text:i[0]("settings.extensions.explore"),appearance:A.Alt,outline:!0,hideTextOnMobile:!0,$$slots:{default:[G]},$$scope:{ctx:i}}}),$=new C({props:{text:i[0]("settings.extensions.settings"),appearance:A.Alt,outline:!0,hideTextOnMobile:!0,$$slots:{default:[H]},$$scope:{ctx:i}}}),{c(){m(e.$$.fragment),s=h(),m(t.$$.fragment),r=h(),m($.$$.fragment)},l(n){u(e.$$.fragment,n),s=x(n),u(t.$$.fragment,n),r=x(n),u($.$$.fragment,n)},m(n,a){p(e,n,a),k(n,s,a),p(t,n,a),k(n,r,a),p($,n,a),d=!0},p(n,a){const o={};a&1&&(o.text=n[0]("settings.extensions.installed")),a&2&&(o.$$scope={dirty:a,ctx:n}),e.$set(o);const f={};a&1&&(f.text=n[0]("settings.extensions.explore")),a&2&&(f.$$scope={dirty:a,ctx:n}),t.$set(f);const l={};a&1&&(l.text=n[0]("settings.extensions.settings")),a&2&&(l.$$scope={dirty:a,ctx:n}),$.$set(l)},i(n){d||(c(e.$$.fragment,n),c(t.$$.fragment,n),c($.$$.fragment,n),d=!0)},o(n){g(e.$$.fragment,n),g(t.$$.fragment,n),g($.$$.fragment,n),d=!1},d(n){n&&(b(s),b(r)),_(e,n),_(t,n),_($,n)}}}function K(i){let e,s,t,r,$,d,n,a;return s=new q({props:{$$slots:{default:[J]},$$scope:{ctx:i}}}),$=new z({}),n=new j({props:{text:i[0]("settings.extensions.none")}}),{c(){e=D("div"),m(s.$$.fragment),t=h(),r=D("div"),m($.$$.fragment),d=h(),m(n.$$.fragment),this.h()},l(o){e=E(o,"DIV",{id:!0,class:!0});var f=L(e);u(s.$$.fragment,f),t=x(f),r=E(f,"DIV",{class:!0});var l=L(r);u($.$$.fragment,l),d=x(l),u(n.$$.fragment,l),l.forEach(b),f.forEach(b),this.h()},h(){v(r,"class","content svelte-yyl4pb"),v(e,"id","page"),v(e,"class","svelte-yyl4pb")},m(o,f){k(o,e,f),p(s,e,null),w(e,t),w(e,r),p($,r,null),w(r,d),p(n,r,null),a=!0},p(o,[f]){const l={};f&3&&(l.$$scope={dirty:f,ctx:o}),s.$set(l);const S={};f&1&&(S.text=o[0]("settings.extensions.none")),n.$set(S)},i(o){a||(c(s.$$.fragment,o),c($.$$.fragment,o),c(n.$$.fragment,o),a=!0)},o(o){g(s.$$.fragment,o),g($.$$.fragment,o),g(n.$$.fragment,o),a=!1},d(o){o&&b(e),_(s),_($),_(n)}}}function N(i,e,s){let t;return T(i,P,r=>s(0,t=r)),[t]}class te extends U{constructor(e){super(),V(this,e,N,K,O,{})}}export{te as component};
