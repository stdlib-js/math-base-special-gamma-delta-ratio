// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-factorial@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma-lanczos-sum@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-e@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-gamma-lanczos-g@esm/index.mjs";function p(t,i){var j,h,c;return t<d?i>170?(h=p(i,170-i),h*=t,1/(h*=4269068009004705e289)):1/(t*e(t+i)):(c=t+l-.5,t+i===t?j=s(i)<10?n((.5-t)*r(i/c)):1:(j=s(i)<10?n((.5-t)*r(i/c)):a(c/(c+i),t-.5),j*=m(t)/m(t+i)),j*=a(o/(c+i),i))}function j(m,r){var n,a,d;if(m<=0||m+r<=0)return e(m)/e(m+r);if((a=t(r))===r){if((d=t(m))===m&&m<=170&&m+r<=170)return i(d-1)/i(a+d-1);if(s(r)<20){if(0===r)return 1;if(r<0){for(n=m-=1,r+=1;0!==r;)n*=m-=1,r+=1;return n}for(n=1/m,r-=1;0!==r;)n/=m+=1,r-=1;return n}}return p(m,r)}export{j as default};
//# sourceMappingURL=index.mjs.map