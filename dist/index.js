"use strict";var v=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var L=v(function(E,c){
var s=require('@stdlib/math-base-special-gamma-lanczos-sum/dist'),t=require('@stdlib/math-base-special-gamma/dist'),F=require('@stdlib/math-base-special-log1p/dist'),n=require('@stdlib/math-base-special-abs/dist'),o=require('@stdlib/math-base-special-exp/dist'),q=require('@stdlib/math-base-special-pow/dist'),f=require('@stdlib/constants-float64-eps/dist'),x=require('@stdlib/constants-float64-e/dist'),I=require('@stdlib/constants-float64-gamma-lanczos-g/dist'),m=require('@stdlib/constants-float64-max-nth-factorial/dist'),h=4269068009004705e289;function A(i,r){var e,a,u;return i<f?r>=m?(a=A(r,m-r),a*=i,a*=h,1/a):1/(i*t(i+r)):(u=i+I-.5,i+r===i?n(r/u)<f?e=o(-r):e=1:(n(r)<10?e=o((.5-i)*F(r/u)):e=q(u/(u+r),i-.5),e*=s(i)/s(i+r)),e*=q(x/(u+r),r),e)}c.exports=A
});var R=v(function(H,O){
var w=require('@stdlib/math-base-special-abs/dist'),g=require('@stdlib/math-base-special-floor/dist'),T=require('@stdlib/math-base-special-gamma/dist'),_=require('@stdlib/math-base-special-factorial/dist'),p=require('@stdlib/constants-float64-max-nth-factorial/dist'),C=L();function D(i,r){var e,a,u;if(i<=0||i+r<=0)return T(i)/T(i+r);if(a=g(r),a===r){if(u=g(i),u===i&&i<=p&&i+r<=p)return _(u-1)/_(a+u-1);if(w(r)<20){if(r===0)return 1;if(r<0){for(i-=1,e=i,r+=1;r!==0;)i-=1,e*=i,r+=1;return e}for(e=1/i,r-=1;r!==0;)i+=1,e/=i,r-=1;return e}}return C(i,r)}O.exports=D
});var N=R();module.exports=N;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
