// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@v0.3.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-factorial@v0.3.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma-lanczos-sum@v0.3.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@v0.2.3-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.2.4-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.3.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-e@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-gamma-lanczos-g@v0.2.2-esm/index.mjs";var p=170,j=4269068009004705e289;function h(t,i){var c,f,v;return t<d?i>p?(f=h(i,p-i),f*=t,1/(f*=j)):1/(t*e(t+i)):(v=t+l-.5,t+i===t?c=s(i)<10?n((.5-t)*r(i/v)):1:(c=s(i)<10?n((.5-t)*r(i/v)):a(v/(v+i),t-.5),c*=m(t)/m(t+i)),c*=a(o/(v+i),i))}function c(m,r){var n,a,d;if(m<=0||m+r<=0)return e(m)/e(m+r);if((a=t(r))===r){if((d=t(m))===m&&m<=170&&m+r<=170)return i(d-1)/i(a+d-1);if(s(r)<20){if(0===r)return 1;if(r<0){for(n=m-=1,r+=1;0!==r;)n*=m-=1,r+=1;return n}for(n=1/m,r-=1;0!==r;)n/=m+=1,r-=1;return n}}return h(m,r)}export{c as default};
//# sourceMappingURL=index.mjs.map