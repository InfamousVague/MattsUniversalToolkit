import{s as k,z as m,e as r,a as b,c as g,g as T,l as d,i as _,p as C,A as z,B as y,C as S,f as h}from"./scheduler.BSglW4Eu.js";import{S as q,i as A,t as B,b as I}from"./index.B6nwG8t1.js";import"./UnderConstruction.svelte_svelte_type_style_lang.pPB3v_UR.js";function N(i){let l,n,f,a,c,u;const o=i[5].default,t=m(o,i,i[4],null);return{c(){l=r("input"),f=b(),t&&t.c(),this.h()},l(e){l=g(e,"INPUT",{"data-cy":!0,type:!0,class:!0}),f=T(e),t&&t.l(e),this.h()},h(){d(l,"data-cy",i[1]),d(l,"type","checkbox"),l.checked=i[0],d(l,"class",n=(i[0]?"checked":"")+" "+(i[3]?"disabled":"")+" svelte-z7xxt8"),l.disabled=i[3]},m(e,s){_(e,l,s),_(e,f,s),t&&t.m(e,s),a=!0,c||(u=C(l,"click",i[6]),c=!0)},p(e,[s]){(!a||s&2)&&d(l,"data-cy",e[1]),(!a||s&1)&&(l.checked=e[0]),(!a||s&9&&n!==(n=(e[0]?"checked":"")+" "+(e[3]?"disabled":"")+" svelte-z7xxt8"))&&d(l,"class",n),(!a||s&8)&&(l.disabled=e[3]),t&&t.p&&(!a||s&16)&&z(t,o,e,e[4],a?S(o,e[4],s,null):y(e[4]),null)},i(e){a||(B(t,e),a=!0)},o(e){I(t,e),a=!1},d(e){e&&(h(l),h(f)),t&&t.d(e),c=!1,u()}}}function P(i,l,n){let{$$slots:f={},$$scope:a}=l,{checked:c=!1}=l,{hook:u=""}=l,{onToggle:o=s=>!0}=l,{disabled:t=!1}=l;const e=s=>{o(!c)&&n(0,c=!c)};return i.$$set=s=>{"checked"in s&&n(0,c=s.checked),"hook"in s&&n(1,u=s.hook),"onToggle"in s&&n(2,o=s.onToggle),"disabled"in s&&n(3,t=s.disabled),"$$scope"in s&&n(4,a=s.$$scope)},[c,u,o,t,a,f,e]}class D extends q{constructor(l){super(),A(this,l,P,N,k,{checked:0,hook:1,onToggle:2,disabled:3})}}export{D as C};
