"use strict";var v=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var g=v(function(M,A){
var s=require('@stdlib/math-base-special-gamma-lanczos-sum/dist'),O=require('@stdlib/math-base-special-gamma/dist'),n=require('@stdlib/math-base-special-log1p/dist'),o=require('@stdlib/math-base-special-abs/dist'),f=require('@stdlib/math-base-special-exp/dist'),q=require('@stdlib/math-base-special-pow/dist'),h=require('@stdlib/constants-float64-eps/dist'),w=require('@stdlib/constants-float64-e/dist'),C=require('@stdlib/constants-float64-gamma-lanczos-g/dist'),m=170,D=4269068009004705e289;function c(i,r){var e,a,u;return i<h?r>m?(a=c(r,m-r),a*=i,a*=D,1/a):1/(i*O(i+r)):(u=i+C-.5,i+r===i?o(r)<10?e=f((.5-i)*n(r/u)):e=1:(o(r)<10?e=f((.5-i)*n(r/u)):e=q(u/(u+r),i-.5),e*=s(i)/s(i+r)),e*=q(w/(u+r),r),e)}A.exports=c
});var I=v(function(S,x){
var F=require('@stdlib/math-base-special-abs/dist'),p=require('@stdlib/math-base-special-floor/dist'),L=require('@stdlib/math-base-special-gamma/dist'),R=require('@stdlib/math-base-special-factorial/dist'),T=g(),t=170;function _(i,r){var e,a,u;if(i<=0||i+r<=0)return L(i)/L(i+r);if(a=p(r),a===r){if(u=p(i),u===i&&i<=t&&i+r<=t)return R(u-1)/R(a+u-1);if(F(r)<20){if(r===0)return 1;if(r<0){for(i-=1,e=i,r+=1;r!==0;)i-=1,e*=i,r+=1;return e}for(e=1/i,r-=1;r!==0;)i+=1,e/=i,r-=1;return e}}return T(i,r)}x.exports=_
});var b=I();module.exports=b;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
