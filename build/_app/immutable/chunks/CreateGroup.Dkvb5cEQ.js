import{s as ot,M as ct,e as J,a as D,c as Z,b as q,g as z,f as x,l as Y,i as G,h as R,N as at,H as He,k as lt,q as ht,t as oe,d as ce,j as ae,n as Le,x as ut,w as Ne,p as ft}from"./scheduler.BSglW4Eu.js";import{S as gt,i as pt,f as dt,c as C,a as N,m as O,t as M,g as ue,b as I,d as fe,e as T}from"./index.B6nwG8t1.js";import{e as de,T as ie}from"./UnderConstruction.svelte_svelte_type_style_lang.CARqNYPb.js";import{$ as mt,b as Me,S as ne,A as $e,q as $t,a as Ue}from"./Store.o3WYXzty.js";import{B as Ye,I as Xe}from"./Icon.JQW_vF_A.js";import{C as _t}from"./Checkbox.CROBRN0L.js";import{a as bt}from"./Input.Dqy4XDDJ.js";import{L as ke}from"./Label.DtVy5LnE.js";import"./Role.svelte_svelte_type_style_lang.CZ2RTLuS.js";import{C as Mt}from"./Controls.B51And74.js";import"./entry.h59Ub9AR.js";import{P as Qe}from"./ProfilePicture.ThJ3OGST.js";/* empty css                                            */function X(n){return Array.isArray?Array.isArray(n):qe(n)==="[object Array]"}const kt=1/0;function Et(n){if(typeof n=="string")return n;let e=n+"";return e=="0"&&1/n==-kt?"-0":e}function vt(n){return n==null?"":Et(n)}function U(n){return typeof n=="string"}function Je(n){return typeof n=="number"}function wt(n){return n===!0||n===!1||It(n)&&qe(n)=="[object Boolean]"}function Ze(n){return typeof n=="object"}function It(n){return Ze(n)&&n!==null}function V(n){return n!=null}function Ee(n){return!n.trim().length}function qe(n){return n==null?n===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(n)}const St="Incorrect 'index' type",At=n=>`Invalid value for key ${n}`,yt=n=>`Pattern length exceeds max of ${n}.`,Lt=n=>`Missing ${n} property in key`,Rt=n=>`Property 'weight' in key '${n}' must be a positive integer`,Oe=Object.prototype.hasOwnProperty;class xt{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(s=>{let r=et(s);this._keys.push(r),this._keyMap[r.id]=r,t+=r.weight}),this._keys.forEach(s=>{s.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function et(n){let e=null,t=null,s=null,r=1,i=null;if(U(n)||X(n))s=n,e=Te(n),t=ve(n);else{if(!Oe.call(n,"name"))throw new Error(Lt("name"));const o=n.name;if(s=o,Oe.call(n,"weight")&&(r=n.weight,r<=0))throw new Error(Rt(o));e=Te(o),t=ve(o),i=n.getFn}return{path:e,id:t,weight:r,src:s,getFn:i}}function Te(n){return X(n)?n:n.split(".")}function ve(n){return X(n)?n.join("."):n}function Ct(n,e){let t=[],s=!1;const r=(i,o,c)=>{if(V(i))if(!o[c])t.push(i);else{let a=o[c];const l=i[a];if(!V(l))return;if(c===o.length-1&&(U(l)||Je(l)||wt(l)))t.push(vt(l));else if(X(l)){s=!0;for(let h=0,u=l.length;h<u;h+=1)r(l[h],o,c+1)}else o.length&&r(l,o,c+1)}};return r(n,U(e)?e.split("."):e,0),s?t:t[0]}const Nt={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Ot={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(n,e)=>n.score===e.score?n.idx<e.idx?-1:1:n.score<e.score?-1:1},Tt={location:0,threshold:.6,distance:100},Ft={useExtendedSearch:!1,getFn:Ct,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var p={...Ot,...Nt,...Tt,...Ft};const Pt=/[^ ]+/g;function jt(n=1,e=3){const t=new Map,s=Math.pow(10,e);return{get(r){const i=r.match(Pt).length;if(t.has(i))return t.get(i);const o=1/Math.pow(i,.5*n),c=parseFloat(Math.round(o*s)/s);return t.set(i,c),c},clear(){t.clear()}}}class Re{constructor({getFn:e=p.getFn,fieldNormWeight:t=p.fieldNormWeight}={}){this.norm=jt(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((t,s)=>{this._keysMap[t.id]=s})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,U(this.docs[0])?this.docs.forEach((e,t)=>{this._addString(e,t)}):this.docs.forEach((e,t)=>{this._addObject(e,t)}),this.norm.clear())}add(e){const t=this.size();U(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,s=this.size();t<s;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!V(e)||Ee(e))return;let s={v:e,i:t,n:this.norm.get(e)};this.records.push(s)}_addObject(e,t){let s={i:t,$:{}};this.keys.forEach((r,i)=>{let o=r.getFn?r.getFn(e):this.getFn(e,r.path);if(V(o)){if(X(o)){let c=[];const a=[{nestedArrIndex:-1,value:o}];for(;a.length;){const{nestedArrIndex:l,value:h}=a.pop();if(V(h))if(U(h)&&!Ee(h)){let u={v:h,i:l,n:this.norm.get(h)};c.push(u)}else X(h)&&h.forEach((u,g)=>{a.push({nestedArrIndex:g,value:u})})}s.$[i]=c}else if(U(o)&&!Ee(o)){let c={v:o,n:this.norm.get(o)};s.$[i]=c}}}),this.records.push(s)}toJSON(){return{keys:this.keys,records:this.records}}}function tt(n,e,{getFn:t=p.getFn,fieldNormWeight:s=p.fieldNormWeight}={}){const r=new Re({getFn:t,fieldNormWeight:s});return r.setKeys(n.map(et)),r.setSources(e),r.create(),r}function Dt(n,{getFn:e=p.getFn,fieldNormWeight:t=p.fieldNormWeight}={}){const{keys:s,records:r}=n,i=new Re({getFn:e,fieldNormWeight:t});return i.setKeys(s),i.setIndexRecords(r),i}function pe(n,{errors:e=0,currentLocation:t=0,expectedLocation:s=0,distance:r=p.distance,ignoreLocation:i=p.ignoreLocation}={}){const o=e/n.length;if(i)return o;const c=Math.abs(s-t);return r?o+c/r:c?1:o}function zt(n=[],e=p.minMatchCharLength){let t=[],s=-1,r=-1,i=0;for(let o=n.length;i<o;i+=1){let c=n[i];c&&s===-1?s=i:!c&&s!==-1&&(r=i-1,r-s+1>=e&&t.push([s,r]),s=-1)}return n[i-1]&&i-s>=e&&t.push([s,i-1]),t}const se=32;function Bt(n,e,t,{location:s=p.location,distance:r=p.distance,threshold:i=p.threshold,findAllMatches:o=p.findAllMatches,minMatchCharLength:c=p.minMatchCharLength,includeMatches:a=p.includeMatches,ignoreLocation:l=p.ignoreLocation}={}){if(e.length>se)throw new Error(yt(se));const h=e.length,u=n.length,g=Math.max(0,Math.min(s,u));let d=i,b=g;const m=c>1||a,$=m?Array(u):[];let _;for(;(_=n.indexOf(e,b))>-1;){let y=pe(e,{currentLocation:_,expectedLocation:g,distance:r,ignoreLocation:l});if(d=Math.min(y,d),b=_+h,m){let K=0;for(;K<h;)$[_+K]=1,K+=1}}b=-1;let F=[],P=1,B=h+u;const W=1<<h-1;for(let y=0;y<h;y+=1){let K=0,E=B;for(;K<E;)pe(e,{errors:y,currentLocation:g+E,expectedLocation:g,distance:r,ignoreLocation:l})<=d?K=E:B=E,E=Math.floor((B-K)/2+K);B=E;let H=Math.max(1,g-E+1),w=o?u:Math.min(g+E,u)+h,Q=Array(w+2);Q[w+1]=(1<<y)-1;for(let L=w;L>=H;L-=1){let te=L-1,A=t[n.charAt(te)];if(m&&($[te]=+!!A),Q[L]=(Q[L+1]<<1|1)&A,y&&(Q[L]|=(F[L+1]|F[L])<<1|1|F[L+1]),Q[L]&W&&(P=pe(e,{errors:y,currentLocation:te,expectedLocation:g,distance:r,ignoreLocation:l}),P<=d)){if(d=P,b=te,b<=g)break;H=Math.max(1,2*g-b)}}if(pe(e,{errors:y+1,currentLocation:g,expectedLocation:g,distance:r,ignoreLocation:l})>d)break;F=Q}const k={isMatch:b>=0,score:Math.max(.001,P)};if(m){const y=zt($,c);y.length?a&&(k.indices=y):k.isMatch=!1}return k}function Kt(n){let e={};for(let t=0,s=n.length;t<s;t+=1){const r=n.charAt(t);e[r]=(e[r]||0)|1<<s-t-1}return e}class st{constructor(e,{location:t=p.location,threshold:s=p.threshold,distance:r=p.distance,includeMatches:i=p.includeMatches,findAllMatches:o=p.findAllMatches,minMatchCharLength:c=p.minMatchCharLength,isCaseSensitive:a=p.isCaseSensitive,ignoreLocation:l=p.ignoreLocation}={}){if(this.options={location:t,threshold:s,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:c,isCaseSensitive:a,ignoreLocation:l},this.pattern=a?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(g,d)=>{this.chunks.push({pattern:g,alphabet:Kt(g),startIndex:d})},u=this.pattern.length;if(u>se){let g=0;const d=u%se,b=u-d;for(;g<b;)h(this.pattern.substr(g,se),g),g+=se;if(d){const m=u-se;h(this.pattern.substr(m),m)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:s}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let b={isMatch:!0,score:0};return s&&(b.indices=[[0,e.length-1]]),b}const{location:r,distance:i,threshold:o,findAllMatches:c,minMatchCharLength:a,ignoreLocation:l}=this.options;let h=[],u=0,g=!1;this.chunks.forEach(({pattern:b,alphabet:m,startIndex:$})=>{const{isMatch:_,score:F,indices:P}=Bt(e,b,m,{location:r+$,distance:i,threshold:o,findAllMatches:c,minMatchCharLength:a,includeMatches:s,ignoreLocation:l});_&&(g=!0),u+=F,_&&P&&(h=[...h,...P])});let d={isMatch:g,score:g?u/this.chunks.length:1};return g&&s&&(d.indices=h),d}}class ee{constructor(e){this.pattern=e}static isMultiMatch(e){return Fe(e,this.multiRegex)}static isSingleMatch(e){return Fe(e,this.singleRegex)}search(){}}function Fe(n,e){const t=n.match(e);return t?t[1]:null}class Vt extends ee{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class Wt extends ee{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const s=e.indexOf(this.pattern)===-1;return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class Gt extends ee{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class Ht extends ee{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class Ut extends ee{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Yt extends ee{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class nt extends ee{constructor(e,{location:t=p.location,threshold:s=p.threshold,distance:r=p.distance,includeMatches:i=p.includeMatches,findAllMatches:o=p.findAllMatches,minMatchCharLength:c=p.minMatchCharLength,isCaseSensitive:a=p.isCaseSensitive,ignoreLocation:l=p.ignoreLocation}={}){super(e),this._bitapSearch=new st(e,{location:t,threshold:s,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:c,isCaseSensitive:a,ignoreLocation:l})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class rt extends ee{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t=0,s;const r=[],i=this.pattern.length;for(;(s=e.indexOf(this.pattern,t))>-1;)t=s+i,r.push([s,t-1]);const o=!!r.length;return{isMatch:o,score:o?0:1,indices:r}}}const we=[Vt,rt,Gt,Ht,Yt,Ut,Wt,nt],Pe=we.length,Xt=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Qt="|";function Jt(n,e={}){return n.split(Qt).map(t=>{let s=t.trim().split(Xt).filter(i=>i&&!!i.trim()),r=[];for(let i=0,o=s.length;i<o;i+=1){const c=s[i];let a=!1,l=-1;for(;!a&&++l<Pe;){const h=we[l];let u=h.isMultiMatch(c);u&&(r.push(new h(u,e)),a=!0)}if(!a)for(l=-1;++l<Pe;){const h=we[l];let u=h.isSingleMatch(c);if(u){r.push(new h(u,e));break}}}return r})}const Zt=new Set([nt.type,rt.type]);class qt{constructor(e,{isCaseSensitive:t=p.isCaseSensitive,includeMatches:s=p.includeMatches,minMatchCharLength:r=p.minMatchCharLength,ignoreLocation:i=p.ignoreLocation,findAllMatches:o=p.findAllMatches,location:c=p.location,threshold:a=p.threshold,distance:l=p.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:s,minMatchCharLength:r,findAllMatches:o,ignoreLocation:i,location:c,threshold:a,distance:l},this.pattern=t?e:e.toLowerCase(),this.query=Jt(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:s,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let i=0,o=[],c=0;for(let a=0,l=t.length;a<l;a+=1){const h=t[a];o.length=0,i=0;for(let u=0,g=h.length;u<g;u+=1){const d=h[u],{isMatch:b,indices:m,score:$}=d.search(e);if(b){if(i+=1,c+=$,s){const _=d.constructor.type;Zt.has(_)?o=[...o,...m]:o.push(m)}}else{c=0,i=0,o.length=0;break}}if(i){let u={isMatch:!0,score:c/i};return s&&(u.indices=o),u}}return{isMatch:!1,score:1}}}const Ie=[];function es(...n){Ie.push(...n)}function Se(n,e){for(let t=0,s=Ie.length;t<s;t+=1){let r=Ie[t];if(r.condition(n,e))return new r(n,e)}return new st(n,e)}const me={AND:"$and",OR:"$or"},Ae={PATH:"$path",PATTERN:"$val"},ye=n=>!!(n[me.AND]||n[me.OR]),ts=n=>!!n[Ae.PATH],ss=n=>!X(n)&&Ze(n)&&!ye(n),je=n=>({[me.AND]:Object.keys(n).map(e=>({[e]:n[e]}))});function it(n,e,{auto:t=!0}={}){const s=r=>{let i=Object.keys(r);const o=ts(r);if(!o&&i.length>1&&!ye(r))return s(je(r));if(ss(r)){const a=o?r[Ae.PATH]:i[0],l=o?r[Ae.PATTERN]:r[a];if(!U(l))throw new Error(At(a));const h={keyId:ve(a),pattern:l};return t&&(h.searcher=Se(l,e)),h}let c={children:[],operator:i[0]};return i.forEach(a=>{const l=r[a];X(l)&&l.forEach(h=>{c.children.push(s(h))})}),c};return ye(n)||(n=je(n)),s(n)}function ns(n,{ignoreFieldNorm:e=p.ignoreFieldNorm}){n.forEach(t=>{let s=1;t.matches.forEach(({key:r,norm:i,score:o})=>{const c=r?r.weight:null;s*=Math.pow(o===0&&c?Number.EPSILON:o,(c||1)*(e?1:i))}),t.score=s})}function rs(n,e){const t=n.matches;e.matches=[],V(t)&&t.forEach(s=>{if(!V(s.indices)||!s.indices.length)return;const{indices:r,value:i}=s;let o={indices:r,value:i};s.key&&(o.key=s.key.src),s.idx>-1&&(o.refIndex=s.idx),e.matches.push(o)})}function is(n,e){e.score=n.score}function os(n,e,{includeMatches:t=p.includeMatches,includeScore:s=p.includeScore}={}){const r=[];return t&&r.push(rs),s&&r.push(is),n.map(i=>{const{idx:o}=i,c={item:e[o],refIndex:o};return r.length&&r.forEach(a=>{a(i,c)}),c})}class ge{constructor(e,t={},s){this.options={...p,...t},this.options.useExtendedSearch,this._keyStore=new xt(this.options.keys),this.setCollection(e,s)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof Re))throw new Error(St);this._myIndex=t||tt(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){V(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const t=[];for(let s=0,r=this._docs.length;s<r;s+=1){const i=this._docs[s];e(i,s)&&(this.removeAt(s),s-=1,r-=1,t.push(i))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:s,includeScore:r,shouldSort:i,sortFn:o,ignoreFieldNorm:c}=this.options;let a=U(e)?U(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return ns(a,{ignoreFieldNorm:c}),i&&a.sort(o),Je(t)&&t>-1&&(a=a.slice(0,t)),os(a,this._docs,{includeMatches:s,includeScore:r})}_searchStringList(e){const t=Se(e,this.options),{records:s}=this._myIndex,r=[];return s.forEach(({v:i,i:o,n:c})=>{if(!V(i))return;const{isMatch:a,score:l,indices:h}=t.searchIn(i);a&&r.push({item:i,idx:o,matches:[{score:l,value:i,norm:c,indices:h}]})}),r}_searchLogical(e){const t=it(e,this.options),s=(c,a,l)=>{if(!c.children){const{keyId:u,searcher:g}=c,d=this._findMatches({key:this._keyStore.get(u),value:this._myIndex.getValueForItemAtKeyId(a,u),searcher:g});return d&&d.length?[{idx:l,item:a,matches:d}]:[]}const h=[];for(let u=0,g=c.children.length;u<g;u+=1){const d=c.children[u],b=s(d,a,l);if(b.length)h.push(...b);else if(c.operator===me.AND)return[]}return h},r=this._myIndex.records,i={},o=[];return r.forEach(({$:c,i:a})=>{if(V(c)){let l=s(t,c,a);l.length&&(i[a]||(i[a]={idx:a,item:c,matches:[]},o.push(i[a])),l.forEach(({matches:h})=>{i[a].matches.push(...h)}))}}),o}_searchObjectList(e){const t=Se(e,this.options),{keys:s,records:r}=this._myIndex,i=[];return r.forEach(({$:o,i:c})=>{if(!V(o))return;let a=[];s.forEach((l,h)=>{a.push(...this._findMatches({key:l,value:o[h],searcher:t}))}),a.length&&i.push({idx:c,item:o,matches:a})}),i}_findMatches({key:e,value:t,searcher:s}){if(!V(t))return[];let r=[];if(X(t))t.forEach(({v:i,i:o,n:c})=>{if(!V(i))return;const{isMatch:a,score:l,indices:h}=s.searchIn(i);a&&r.push({score:l,key:e,value:i,idx:o,norm:c,indices:h})});else{const{v:i,n:o}=t,{isMatch:c,score:a,indices:l}=s.searchIn(i);c&&r.push({score:a,key:e,value:i,norm:o,indices:l})}return r}}ge.version="7.0.0";ge.createIndex=tt;ge.parseIndex=Dt;ge.config=p;ge.parseQuery=it;es(qt);function De(n,e,t){const s=n.slice();return s[17]=e[t],s}function ze(n,e,t){const s=n.slice();return s[17]=e[t],s}function Be(n){let e,t,s;return t=new ie({props:{size:ne.Small,appearance:$e.Error,$$slots:{default:[cs]},$$scope:{ctx:n}}}),{c(){e=J("div"),C(t.$$.fragment),this.h()},l(r){e=Z(r,"DIV",{class:!0});var i=q(e);N(t.$$.fragment,i),i.forEach(x),this.h()},h(){Y(e,"class","error-message svelte-5mkndw")},m(r,i){G(r,e,i),O(t,e,null),s=!0},p(r,i){const o={};i&4194368&&(o.$$scope={dirty:i,ctx:r}),t.$set(o)},i(r){s||(M(t.$$.fragment,r),s=!0)},o(r){I(t.$$.fragment,r),s=!1},d(r){r&&x(e),T(t)}}}function cs(n){let e=n[6]("chat.group.error")+"",t;return{c(){t=oe(e)},l(s){t=ce(s,e)},m(s,r){G(s,t,r)},p(s,r){r&64&&e!==(e=s[6]("chat.group.error")+"")&&ae(t,e)},d(s){s&&x(t)}}}function as(n){let e=n[17].name+"",t;return{c(){t=oe(e)},l(s){t=ce(s,e)},m(s,r){G(s,t,r)},p(s,r){r&4&&e!==(e=s[17].name+"")&&ae(t,e)},d(s){s&&x(t)}}}function ls(n){let e,t;return e=new Xe({props:{icon:Ue.XMark,alt:!0,class:"control"}}),{c(){C(e.$$.fragment)},l(s){N(e.$$.fragment,s)},m(s,r){O(e,s,r),t=!0},p:Le,i(s){t||(M(e.$$.fragment,s),t=!0)},o(s){I(e.$$.fragment,s),t=!1},d(s){T(e,s)}}}function Ke(n){let e,t,s,r,i,o,c,a;t=new Qe({props:{id:n[17].key,size:ne.Smaller,noIndicator:!0,image:n[17].profile.photo.image}}),r=new ie({props:{singleLine:!0,size:ne.Small,appearance:$e.Alt,$$slots:{default:[as]},$$scope:{ctx:n}}});function l(){return n[13](n[17])}return o=new Ye({props:{small:!0,outline:!0,icon:!0,$$slots:{default:[ls]},$$scope:{ctx:n}}}),o.$on("click",l),{c(){e=J("div"),C(t.$$.fragment),s=D(),C(r.$$.fragment),i=D(),C(o.$$.fragment),c=D(),this.h()},l(h){e=Z(h,"DIV",{class:!0});var u=q(e);N(t.$$.fragment,u),s=z(u),N(r.$$.fragment,u),i=z(u),N(o.$$.fragment,u),c=z(u),u.forEach(x),this.h()},h(){Y(e,"class","mini-user svelte-5mkndw")},m(h,u){G(h,e,u),O(t,e,null),R(e,s),O(r,e,null),R(e,i),O(o,e,null),R(e,c),a=!0},p(h,u){n=h;const g={};u&4&&(g.id=n[17].key),u&4&&(g.image=n[17].profile.photo.image),t.$set(g);const d={};u&4194308&&(d.$$scope={dirty:u,ctx:n}),r.$set(d);const b={};u&4194304&&(b.$$scope={dirty:u,ctx:n}),o.$set(b)},i(h){a||(M(t.$$.fragment,h),M(r.$$.fragment,h),M(o.$$.fragment,h),a=!0)},o(h){I(t.$$.fragment,h),I(r.$$.fragment,h),I(o.$$.fragment,h),a=!1},d(h){h&&x(e),T(t),T(r),T(o)}}}function hs(n){let e,t;return e=new ie({props:{appearance:$e.Error,size:ne.Small,$$slots:{default:[fs]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment)},l(s){N(e.$$.fragment,s)},m(s,r){O(e,s,r),t=!0},p(s,r){const i={};r&4194368&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){t||(M(e.$$.fragment,s),t=!0)},o(s){I(e.$$.fragment,s),t=!1},d(s){T(e,s)}}}function us(n){let e,t,s=de(n[7]),r=[];for(let o=0;o<s.length;o+=1)r[o]=Ve(De(n,s,o));const i=o=>I(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=Ne()},l(o){for(let c=0;c<r.length;c+=1)r[c].l(o);e=Ne()},m(o,c){for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(o,c);G(o,e,c),t=!0},p(o,c){if(c&388){s=de(o[7]);let a;for(a=0;a<s.length;a+=1){const l=De(o,s,a);r[a]?(r[a].p(l,c),M(r[a],1)):(r[a]=Ve(l),r[a].c(),M(r[a],1),r[a].m(e.parentNode,e))}for(ue(),a=s.length;a<r.length;a+=1)i(a);fe()}},i(o){if(!t){for(let c=0;c<s.length;c+=1)M(r[c]);t=!0}},o(o){r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)I(r[c]);t=!1},d(o){o&&x(e),He(r,o)}}}function fs(n){let e=n[6]("chat.group.noMembersAvailable")+"",t;return{c(){t=oe(e)},l(s){t=ce(s,e)},m(s,r){G(s,t,r)},p(s,r){r&64&&e!==(e=s[6]("chat.group.noMembersAvailable")+"")&&ae(t,e)},d(s){s&&x(t)}}}function gs(n){let e=n[17].name+"",t;return{c(){t=oe(e)},l(s){t=ce(s,e)},m(s,r){G(s,t,r)},p(s,r){r&128&&e!==(e=s[17].name+"")&&ae(t,e)},d(s){s&&x(t)}}}function ps(n){let e=n[17].key+"",t;return{c(){t=oe(e)},l(s){t=ce(s,e)},m(s,r){G(s,t,r)},p(s,r){r&128&&e!==(e=s[17].key+"")&&ae(t,e)},d(s){s&&x(t)}}}function Ve(n){let e,t,s,r,i,o,c,a,l,h,u,g,d;t=new Qe({props:{id:n[17].key,size:ne.Small,image:n[17].profile.photo.image,status:n[17].profile.status}}),i=new ie({props:{singleLine:!0,size:ne.Medium,$$slots:{default:[gs]},$$scope:{ctx:n}}}),c=new ie({props:{singleLine:!0,muted:!0,$$slots:{default:[ps]},$$scope:{ctx:n}}}),l=new _t({props:{checked:Ge(n[2],n[17])}});function b(){return n[14](n[17])}return{c(){e=J("button"),C(t.$$.fragment),s=D(),r=J("div"),C(i.$$.fragment),o=D(),C(c.$$.fragment),a=D(),C(l.$$.fragment),h=D(),this.h()},l(m){e=Z(m,"BUTTON",{class:!0});var $=q(e);N(t.$$.fragment,$),s=z($),r=Z($,"DIV",{class:!0});var _=q(r);N(i.$$.fragment,_),o=z(_),N(c.$$.fragment,_),_.forEach(x),a=z($),N(l.$$.fragment,$),h=z($),$.forEach(x),this.h()},h(){Y(r,"class","info svelte-5mkndw"),Y(e,"class","user svelte-5mkndw")},m(m,$){G(m,e,$),O(t,e,null),R(e,s),R(e,r),O(i,r,null),R(r,o),O(c,r,null),R(e,a),O(l,e,null),R(e,h),u=!0,g||(d=ft(e,"click",b),g=!0)},p(m,$){n=m;const _={};$&128&&(_.id=n[17].key),$&128&&(_.image=n[17].profile.photo.image),$&128&&(_.status=n[17].profile.status),t.$set(_);const F={};$&4194432&&(F.$$scope={dirty:$,ctx:n}),i.$set(F);const P={};$&4194432&&(P.$$scope={dirty:$,ctx:n}),c.$set(P);const B={};$&132&&(B.checked=Ge(n[2],n[17])),l.$set(B)},i(m){u||(M(t.$$.fragment,m),M(i.$$.fragment,m),M(c.$$.fragment,m),M(l.$$.fragment,m),u=!0)},o(m){I(t.$$.fragment,m),I(i.$$.fragment,m),I(c.$$.fragment,m),I(l.$$.fragment,m),u=!1},d(m){m&&x(e),T(t),T(i),T(c),T(l),g=!1,d()}}}function We(n){let e,t;return e=new ie({props:{appearance:$e.Error,size:ne.Small,$$slots:{default:[ds]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment)},l(s){N(e.$$.fragment,s)},m(s,r){O(e,s,r),t=!0},p(s,r){const i={};r&4194320&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){t||(M(e.$$.fragment,s),t=!0)},o(s){I(e.$$.fragment,s),t=!1},d(s){T(e,s)}}}function ds(n){let e;return{c(){e=oe(n[4])},l(t){e=ce(t,n[4])},m(t,s){G(t,e,s)},p(t,s){s&16&&ae(e,t[4])},d(t){t&&x(e)}}}function ms(n){let e,t;return e=new Xe({props:{icon:Ue.ChatPlus}}),{c(){C(e.$$.fragment)},l(s){N(e.$$.fragment,s)},m(s,r){O(e,s,r),t=!0},p:Le,i(s){t||(M(e.$$.fragment,s),t=!0)},o(s){I(e.$$.fragment,s),t=!1},d(s){T(e,s)}}}function $s(n){let e,t;return e=new Ye({props:{text:n[6]("chat.group.create"),fill:!0,disabled:n[3]||n[2].length===0||n[7].length===0,$$slots:{default:[ms]},$$scope:{ctx:n}}}),e.$on("click",n[10]),{c(){C(e.$$.fragment)},l(s){N(e.$$.fragment,s)},m(s,r){O(e,s,r),t=!0},p(s,r){const i={};r&64&&(i.text=s[6]("chat.group.create")),r&140&&(i.disabled=s[3]||s[2].length===0||s[7].length===0),r&4194304&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){t||(M(e.$$.fragment,s),t=!0)},o(s){I(e.$$.fragment,s),t=!1},d(s){T(e,s)}}}function _s(n){let e,t,s,r,i,o,c,a,l,h,u,g,d,b,m,$,_,F,P,B,W,k;s=new ke({props:{text:n[6]("chat.group.name")}});function y(f){n[11](f)}let K={alt:!0};n[1]!==void 0&&(K.value=n[1]),i=new bt({props:K}),ct.push(()=>dt(i,"value",y)),i.$on("input",n[12]);let E=n[3]&&Be(n);l=new ke({props:{text:n[6]("chat.group.members")}});let H=de(n[2]),w=[];for(let f=0;f<H.length;f+=1)w[f]=Ke(ze(n,H,f));const Q=f=>I(w[f],1,1,()=>{w[f]=null});d=new ke({props:{text:n[6]("chat.group.select")}});const _e=[us,hs],L=[];function te(f,v){return f[7].length>0?0:1}$=te(n),_=L[$]=_e[$](n);let A=n[4]&&We(n);return W=new Mt({props:{$$slots:{default:[$s]},$$scope:{ctx:n}}}),{c(){e=J("div"),t=J("div"),C(s.$$.fragment),r=D(),C(i.$$.fragment),c=D(),E&&E.c(),a=D(),C(l.$$.fragment),h=D(),u=J("div");for(let f=0;f<w.length;f+=1)w[f].c();g=D(),C(d.$$.fragment),b=D(),m=J("div"),_.c(),P=D(),A&&A.c(),B=D(),C(W.$$.fragment),this.h()},l(f){e=Z(f,"DIV",{class:!0});var v=q(e);t=Z(v,"DIV",{class:!0});var S=q(t);N(s.$$.fragment,S),r=z(S),N(i.$$.fragment,S),c=z(S),E&&E.l(S),a=z(S),N(l.$$.fragment,S),h=z(S),u=Z(S,"DIV",{class:!0});var le=q(u);for(let re=0;re<w.length;re+=1)w[re].l(le);le.forEach(x),g=z(S),N(d.$$.fragment,S),b=z(S),m=Z(S,"DIV",{class:!0});var he=q(m);_.l(he),he.forEach(x),P=z(S),A&&A.l(S),B=z(S),N(W.$$.fragment,S),S.forEach(x),v.forEach(x),this.h()},h(){Y(u,"class","user-list svelte-5mkndw"),Y(m,"class",F="user-selection-list "+(n[0]?"embedded":"")+" svelte-5mkndw"),Y(t,"class","select-user svelte-5mkndw"),Y(e,"class","new-chat svelte-5mkndw")},m(f,v){G(f,e,v),R(e,t),O(s,t,null),R(t,r),O(i,t,null),R(t,c),E&&E.m(t,null),R(t,a),O(l,t,null),R(t,h),R(t,u);for(let S=0;S<w.length;S+=1)w[S]&&w[S].m(u,null);R(t,g),O(d,t,null),R(t,b),R(t,m),L[$].m(m,null),R(t,P),A&&A.m(t,null),R(t,B),O(W,t,null),k=!0},p(f,[v]){const S={};v&64&&(S.text=f[6]("chat.group.name")),s.$set(S);const le={};!o&&v&2&&(o=!0,le.value=f[1],at(()=>o=!1)),i.$set(le),f[3]?E?(E.p(f,v),v&8&&M(E,1)):(E=Be(f),E.c(),M(E,1),E.m(t,a)):E&&(ue(),I(E,1,1,()=>{E=null}),fe());const he={};if(v&64&&(he.text=f[6]("chat.group.members")),l.$set(he),v&260){H=de(f[2]);let j;for(j=0;j<H.length;j+=1){const Ce=ze(f,H,j);w[j]?(w[j].p(Ce,v),M(w[j],1)):(w[j]=Ke(Ce),w[j].c(),M(w[j],1),w[j].m(u,null))}for(ue(),j=H.length;j<w.length;j+=1)Q(j);fe()}const re={};v&64&&(re.text=f[6]("chat.group.select")),d.$set(re);let be=$;$=te(f),$===be?L[$].p(f,v):(ue(),I(L[be],1,1,()=>{L[be]=null}),fe(),_=L[$],_?_.p(f,v):(_=L[$]=_e[$](f),_.c()),M(_,1),_.m(m,null)),(!k||v&1&&F!==(F="user-selection-list "+(f[0]?"embedded":"")+" svelte-5mkndw"))&&Y(m,"class",F),f[4]?A?(A.p(f,v),v&16&&M(A,1)):(A=We(f),A.c(),M(A,1),A.m(t,B)):A&&(ue(),I(A,1,1,()=>{A=null}),fe());const xe={};v&4194508&&(xe.$$scope={dirty:v,ctx:f}),W.$set(xe)},i(f){if(!k){M(s.$$.fragment,f),M(i.$$.fragment,f),M(E),M(l.$$.fragment,f);for(let v=0;v<H.length;v+=1)M(w[v]);M(d.$$.fragment,f),M(_),M(A),M(W.$$.fragment,f),k=!0}},o(f){I(s.$$.fragment,f),I(i.$$.fragment,f),I(E),I(l.$$.fragment,f),w=w.filter(Boolean);for(let v=0;v<w.length;v+=1)I(w[v]);I(d.$$.fragment,f),I(_),I(A),I(W.$$.fragment,f),k=!1},d(f){f&&x(e),T(s),T(i),E&&E.d(),T(l),He(w,f),T(d),L[$].d(),A&&A.d(),T(W)}}}function Ge(n,e){return n.map(t=>t.key).includes(e.key)}function bs(n,e,t){let s,r,i,o=Le,c=()=>(o(),o=ut(s,k=>t(7,i=k)),s);lt(n,mt,k=>t(6,r=k)),n.$$.on_destroy.push(()=>o());let{embedded:a=!1}=e,l="",h=[],u=!1,g=null;function d(k){let y=[...h];h.map(K=>K.key).includes(k.key)?y.splice(y.indexOf(k),1):y.push(k),t(2,h=y),h.length>0&&t(4,g=null)}function b(k){return k.trim().length===0?(t(3,u=!0),!1):(t(3,u=!1),!0)}const m=ht();async function $(){if(h.length===0){t(4,g=r("chat.group.noMembers")||"Please select at least one member.");return}b(l)&&((await $t.createGroupConversation(l,h)).onSuccess(y=>{Me.setActiveChat(y)}),_())}function _(){t(1,l=""),t(2,h=[]),t(4,g=null),m("create")}function F(k){l=k,t(1,l)}const P=()=>b(l),B=k=>d(k),W=k=>d(k);return n.$$set=k=>{"embedded"in k&&t(0,a=k.embedded)},c(t(5,s=Me.getUsers(Me.state.friends))),[a,l,h,u,g,s,r,i,d,b,$,F,P,B,W]}class Ns extends gt{constructor(e){super(),pt(this,e,bs,_s,ot,{embedded:0})}}export{Ns as C,ge as F};
