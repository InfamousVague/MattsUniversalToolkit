import{s as u,z as m,e as p,c as _,b as h,f as c,l as f,i as k,A as v,B as y,C as b}from"./scheduler.BSglW4Eu.js";import{S as g,i as C,t as S,b as B}from"./index.B6nwG8t1.js";/* empty css                                               */import{v as z}from"./Store.d2QBjgP7.js";function q(l){let i,n;const o=l[3].default,e=m(o,l,l[2],null);return{c(){i=p("div"),e&&e.c(),this.h()},l(t){i=_(t,"DIV",{id:!0,class:!0});var s=h(i);e&&e.l(s),s.forEach(c),this.h()},h(){f(i,"id",l[0]),f(i,"class","controls controlsWithBreakpoint_"+l[0]+" svelte-krz77z")},m(t,s){k(t,i,s),e&&e.m(i,null),n=!0},p(t,[s]){e&&e.p&&(!n||s&4)&&v(e,o,t,t[2],n?b(o,t[2],s,null):y(t[2]),null)},i(t){n||(S(e,t),n=!0)},o(t){B(e,t),n=!1},d(t){t&&c(i),e&&e.d(t)}}}function w(l,i,n){let{$$slots:o={},$$scope:e}=i,{breakpoint:t=0}=i,s=z(),d=`
        .controls {
            display: inline-flex;
            min-width: fit-content;
            height: fit-content;
            gap: var(--gap-less);
        }


        @media (max-width: ${t}px) {
            .controlsWithBreakpoint_${s} {
                flex-direction: column;
            }
        }
    `,r=document.querySelector("style");return r&&r.appendChild(document.createTextNode(d)),l.$$set=a=>{"breakpoint"in a&&n(1,t=a.breakpoint),"$$scope"in a&&n(2,e=a.$$scope)},[s,t,e,o]}class x extends g{constructor(i){super(),C(this,i,w,q,u,{breakpoint:1})}}export{x as C};
