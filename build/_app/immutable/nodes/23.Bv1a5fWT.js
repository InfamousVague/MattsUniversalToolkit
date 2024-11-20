import{s as V,e as j,a as q,c as z,b as A,g as C,f as I,l as P,i as B,h as E,k as F,u as G}from"../chunks/scheduler.BSglW4Eu.js";import{S as H,i as J,c,a as l,m,t as p,b as u,e as _}from"../chunks/index.B6nwG8t1.js";import{f as d,$ as K}from"../chunks/Store.CIsFqrol.js";import"../chunks/UnderConstruction.svelte_svelte_type_style_lang.Bu0KXFsl.js";import{S as k}from"../chunks/Switch.DOivY1VX.js";/* empty css                                                       */import"../chunks/Role.svelte_svelte_type_style_lang.C4WTUmxo.js";import"../chunks/entry.s7dbjC2j.js";/* empty css                                                    */import{S as v}from"../chunks/SettingSection.rLTaCilm.js";function L(s){let t,i;return t=new k({props:{on:s[0]?s[0].notifications.enabled:!0}}),t.$on("toggle",s[2]),{c(){c(t.$$.fragment)},l(e){l(t.$$.fragment,e)},m(e,n){m(t,e,n),i=!0},p(e,n){const r={};n&1&&(r.on=e[0]?e[0].notifications.enabled:!0),t.$set(r)},i(e){i||(p(t.$$.fragment,e),i=!0)},o(e){u(t.$$.fragment,e),i=!1},d(e){_(t,e)}}}function M(s){let t,i;return t=new k({props:{on:s[0]?s[0].notifications.friends:!0}}),t.$on("toggle",s[3]),{c(){c(t.$$.fragment)},l(e){l(t.$$.fragment,e)},m(e,n){m(t,e,n),i=!0},p(e,n){const r={};n&1&&(r.on=e[0]?e[0].notifications.friends:!0),t.$set(r)},i(e){i||(p(t.$$.fragment,e),i=!0)},o(e){u(t.$$.fragment,e),i=!1},d(e){_(t,e)}}}function N(s){let t,i;return t=new k({props:{on:s[0]?s[0].notifications.messages:!0}}),t.$on("toggle",s[4]),{c(){c(t.$$.fragment)},l(e){l(t.$$.fragment,e)},m(e,n){m(t,e,n),i=!0},p(e,n){const r={};n&1&&(r.on=e[0]?e[0].notifications.messages:!0),t.$set(r)},i(e){i||(p(t.$$.fragment,e),i=!0)},o(e){u(t.$$.fragment,e),i=!1},d(e){_(t,e)}}}function O(s){let t,i;return t=new k({props:{on:s[0]?s[0].notifications.settings:!0}}),t.$on("toggle",s[5]),{c(){c(t.$$.fragment)},l(e){l(t.$$.fragment,e)},m(e,n){m(t,e,n),i=!0},p(e,n){const r={};n&1&&(r.on=e[0]?e[0].notifications.settings:!0),t.$set(r)},i(e){i||(p(t.$$.fragment,e),i=!0)},o(e){u(t.$$.fragment,e),i=!1},d(e){_(t,e)}}}function Q(s){let t,i,e,n,r,g,h,$,f;return i=new v({props:{name:s[1]("settings.notifications.enabled"),description:s[1]("settings.notifications.enabledDescription"),$$slots:{default:[L]},$$scope:{ctx:s}}}),n=new v({props:{name:s[1]("settings.notifications.friends"),description:s[1]("settings.notifications.friendsDescription"),$$slots:{default:[M]},$$scope:{ctx:s}}}),g=new v({props:{name:s[1]("settings.notifications.messages"),description:s[1]("settings.notifications.messagesDescription"),$$slots:{default:[N]},$$scope:{ctx:s}}}),$=new v({props:{name:s[1]("generic.settings"),description:s[1]("settings.notifications.settingsDescription"),$$slots:{default:[O]},$$scope:{ctx:s}}}),{c(){t=j("div"),c(i.$$.fragment),e=q(),c(n.$$.fragment),r=q(),c(g.$$.fragment),h=q(),c($.$$.fragment),this.h()},l(o){t=z(o,"DIV",{id:!0,class:!0});var a=A(t);l(i.$$.fragment,a),e=C(a),l(n.$$.fragment,a),r=C(a),l(g.$$.fragment,a),h=C(a),l($.$$.fragment,a),a.forEach(I),this.h()},h(){P(t,"id","page"),P(t,"class","svelte-1m6g4am")},m(o,a){B(o,t,a),m(i,t,null),E(t,e),m(n,t,null),E(t,r),m(g,t,null),E(t,h),m($,t,null),f=!0},p(o,[a]){const w={};a&2&&(w.name=o[1]("settings.notifications.enabled")),a&2&&(w.description=o[1]("settings.notifications.enabledDescription")),a&65&&(w.$$scope={dirty:a,ctx:o}),i.$set(w);const b={};a&2&&(b.name=o[1]("settings.notifications.friends")),a&2&&(b.description=o[1]("settings.notifications.friendsDescription")),a&65&&(b.$$scope={dirty:a,ctx:o}),n.$set(b);const D={};a&2&&(D.name=o[1]("settings.notifications.messages")),a&2&&(D.description=o[1]("settings.notifications.messagesDescription")),a&65&&(D.$$scope={dirty:a,ctx:o}),g.$set(D);const S={};a&2&&(S.name=o[1]("generic.settings")),a&2&&(S.description=o[1]("settings.notifications.settingsDescription")),a&65&&(S.$$scope={dirty:a,ctx:o}),$.$set(S)},i(o){f||(p(i.$$.fragment,o),p(n.$$.fragment,o),p(g.$$.fragment,o),p($.$$.fragment,o),f=!0)},o(o){u(i.$$.fragment,o),u(n.$$.fragment,o),u(g.$$.fragment,o),u($.$$.fragment,o),f=!1},d(o){o&&I(t),_(i),_(n),_(g),_($)}}}function R(s,t,i){let e;F(s,K,f=>i(1,e=f));let n=G(d.state);return d.state.subscribe(f=>{i(0,n=f)}),[n,e,f=>{d.update({...n,notifications:{...n.notifications,enabled:f.detail}})},f=>{d.update({...n,notifications:{...n.notifications,friends:f.detail}})},f=>{d.update({...n,notifications:{...n.notifications,messages:f.detail}})},f=>{d.update({...n,notifications:{...n.notifications,settings:f.detail}})}]}class ne extends H{constructor(t){super(),J(this,t,R,Q,V,{})}}export{ne as component};
