(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fh="166",J1={ROTATE:0,DOLLY:1,PAN:2},$1={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Op=0,Eu=1,Fp=2,Ad=1,Bp=2,Ni=3,Xi=0,Bn=1,He=2,us=0,Cr=1,sc=2,Au=3,Ru=4,kp=5,Fs=100,Hp=101,Vp=102,Gp=103,Wp=104,Xp=200,Yp=201,qp=202,Kp=203,Vl=204,Gl=205,jp=206,Zp=207,Jp=208,$p=209,Qp=210,tm=211,em=212,nm=213,im=214,sm=0,rm=1,om=2,rc=3,am=4,cm=5,lm=6,hm=7,Bh=0,um=1,fm=2,fs=0,dm=1,pm=2,mm=3,gm=4,xm=5,_m=6,vm=7,Cu="attached",Mm="detached",Rd=300,Dr=301,Nr=302,Wl=303,Xl=304,Sc=306,Mi=1e3,cs=1001,oc=1002,Ln=1003,Cd=1004,yo=1005,Gn=1006,Ka=1007,Hi=1008,Yi=1009,Pd=1010,Ld=1011,ko=1012,kh=1013,ps=1014,Wn=1015,Jo=1016,Hh=1017,Vh=1018,Ur=1020,Id=35902,Dd=1021,Nd=1022,zn=1023,Ud=1024,zd=1025,Pr=1026,zr=1027,Gh=1028,wc=1029,Od=1030,Wh=1031,Xh=1033,ja=33776,Za=33777,Ja=33778,$a=33779,Yl=35840,ql=35841,Kl=35842,jl=35843,Zl=36196,Jl=37492,$l=37496,Ql=37808,th=37809,eh=37810,nh=37811,ih=37812,sh=37813,rh=37814,oh=37815,ah=37816,ch=37817,lh=37818,hh=37819,uh=37820,fh=37821,Qa=36492,dh=36494,ph=36495,Fd=36283,mh=36284,gh=36285,xh=36286,Ho=2300,Vo=2301,Fc=2302,Pu=2400,Lu=2401,Iu=2402,ym=2500,Sm=0,Bd=1,_h=2,wm=3200,bm=3201,Yh=0,Tm=1,os="",nn="srgb",_n="srgb-linear",qh="display-p3",bc="display-p3-linear",ac="linear",We="srgb",cc="rec709",lc="p3",Qs=7680,Du=519,Em=512,Am=513,Rm=514,kd=515,Cm=516,Pm=517,Lm=518,Im=519,vh=35044,Nu="300 es",Vi=2e3,hc=2001;class Wr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Uu=1234567;const To=Math.PI/180,Or=180/Math.PI;function si(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]+"-"+Mn[t&255]+Mn[t>>8&255]+"-"+Mn[t>>16&15|64]+Mn[t>>24&255]+"-"+Mn[e&63|128]+Mn[e>>8&255]+"-"+Mn[e>>16&255]+Mn[e>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function on(i,t,e){return Math.max(t,Math.min(e,i))}function Kh(i,t){return(i%t+t)%t}function Dm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Nm(i,t,e){return i!==t?(e-i)/(t-i):0}function Eo(i,t,e){return(1-e)*i+e*t}function Um(i,t,e,n){return Eo(i,t,1-Math.exp(-e*n))}function zm(i,t=1){return t-Math.abs(Kh(i,t*2)-t)}function Om(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Fm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Bm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function km(i,t){return i+Math.random()*(t-i)}function Hm(i){return i*(.5-Math.random())}function Vm(i){i!==void 0&&(Uu=i);let t=Uu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Gm(i){return i*To}function Wm(i){return i*Or}function Xm(i){return(i&i-1)===0&&i!==0}function Ym(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function qm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Km(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),p=r((n-t)/2),x=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*x,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*x,a*c);break;case"ZYZ":i.set(l*x,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function li(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const jm={DEG2RAD:To,RAD2DEG:Or,generateUUID:si,clamp:on,euclideanModulo:Kh,mapLinear:Dm,inverseLerp:Nm,lerp:Eo,damp:Um,pingpong:zm,smoothstep:Om,smootherstep:Fm,randInt:Bm,randFloat:km,randFloatSpread:Hm,seededRandom:Vm,degToRad:Gm,radToDeg:Wm,isPowerOfTwo:Xm,ceilPowerOfTwo:Ym,floorPowerOfTwo:qm,setQuaternionFromProperEuler:Km,normalize:Le,denormalize:li};class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(on(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xe{constructor(t,e,n,s,r,o,a,l,c){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],x=n[8],_=s[0],m=s[3],g=s[6],M=s[1],y=s[4],w=s[7],H=s[2],D=s[5],O=s[8];return r[0]=o*_+a*M+l*H,r[3]=o*m+a*y+l*D,r[6]=o*g+a*w+l*O,r[1]=c*_+h*M+u*H,r[4]=c*m+h*y+u*D,r[7]=c*g+h*w+u*O,r[2]=f*_+p*M+x*H,r[5]=f*m+p*y+x*D,r[8]=f*g+p*w+x*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,x=e*u+n*f+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Bc.makeScale(t,e)),this}rotate(t){return this.premultiply(Bc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Bc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bc=new xe;function Hd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Go(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zm(){const i=Go("canvas");return i.style.display="block",i}const zu={};function jh(i){i in zu||(zu[i]=!0,console.warn(i))}function Jm(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Ou=new xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fu=new xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),oa={[_n]:{transfer:ac,primaries:cc,toReference:i=>i,fromReference:i=>i},[nn]:{transfer:We,primaries:cc,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[bc]:{transfer:ac,primaries:lc,toReference:i=>i.applyMatrix3(Fu),fromReference:i=>i.applyMatrix3(Ou)},[qh]:{transfer:We,primaries:lc,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Fu),fromReference:i=>i.applyMatrix3(Ou).convertLinearToSRGB()}},$m=new Set([_n,bc]),Ae={enabled:!0,_workingColorSpace:_n,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!$m.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=oa[t].toReference,s=oa[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return oa[i].primaries},getTransfer:function(i){return i===os?ac:oa[i].transfer}};function Lr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function kc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let tr;class Qm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{tr===void 0&&(tr=Go("canvas")),tr.width=t.width,tr.height=t.height;const n=tr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=tr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Go("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Lr(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Lr(e[n]/255)*255):e[n]=Lr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tg=0;class Vd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=si(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Hc(s[o].image)):r.push(Hc(s[o]))}else r=Hc(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Hc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eg=0;class hn extends Wr{constructor(t=hn.DEFAULT_IMAGE,e=hn.DEFAULT_MAPPING,n=cs,s=cs,r=Gn,o=Hi,a=zn,l=Yi,c=hn.DEFAULT_ANISOTROPY,h=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=si(),this.name="",this.source=new Vd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mi:t.x=t.x-Math.floor(t.x);break;case cs:t.x=t.x<0?0:1;break;case oc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mi:t.y=t.y-Math.floor(t.y);break;case cs:t.y=t.y<0?0:1;break;case oc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Rd;hn.DEFAULT_ANISOTROPY=1;class Ne{constructor(t=0,e=0,n=0,s=1){Ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],x=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,w=(p+1)/2,H=(g+1)/2,D=(h+f)/4,O=(u+_)/4,G=(x+m)/4;return y>w&&y>H?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=D/n,r=O/n):w>H?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=D/s,r=G/s):H<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(H),n=O/r,s=G/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-x)*(m-x)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-x)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ng extends Wr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new hn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Vd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ys extends ng{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Gd extends hn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ig extends hn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],p=r[o+1],x=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=x,t[e+3]=_;return}if(u!==_||l!==f||c!==p||h!==x){let m=1-a;const g=l*f+c*p+h*x+u*_,M=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const H=Math.sqrt(y),D=Math.atan2(H,g*M);m=Math.sin(m*D)/H,a=Math.sin(a*D)/H}const w=a*M;if(l=l*m+f*w,c=c*m+p*w,h=h*m+x*w,u=u*m+_*w,m===1-a){const H=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=H,c*=H,h*=H,u*=H}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],x=r[o+3];return t[e]=a*x+h*u+l*p-c*f,t[e+1]=l*x+h*f+c*u-a*p,t[e+2]=c*x+h*p+a*f-l*u,t[e+3]=h*x-a*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),p=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*x,this._y=c*p*u-f*h*x,this._z=c*h*x+f*p*u,this._w=c*h*u-f*p*x;break;case"YXZ":this._x=f*h*u+c*p*x,this._y=c*p*u-f*h*x,this._z=c*h*x-f*p*u,this._w=c*h*u+f*p*x;break;case"ZXY":this._x=f*h*u-c*p*x,this._y=c*p*u+f*h*x,this._z=c*h*x+f*p*u,this._w=c*h*u-f*p*x;break;case"ZYX":this._x=f*h*u-c*p*x,this._y=c*p*u+f*h*x,this._z=c*h*x-f*p*u,this._w=c*h*u+f*p*x;break;case"YZX":this._x=f*h*u+c*p*x,this._y=c*p*u+f*h*x,this._z=c*h*x-f*p*u,this._w=c*h*u-f*p*x;break;case"XZY":this._x=f*h*u-c*p*x,this._y=c*p*u-f*h*x,this._z=c*h*x+f*p*u,this._w=c*h*u+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(on(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Vc.copy(this).projectOnVector(t),this.sub(Vc)}reflect(t){return this.sub(Vc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(on(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vc=new C,Bu=new yi;class Xn{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ri):ri.fromBufferAttribute(r,o),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),aa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),aa.copy(n.boundingBox)),aa.applyMatrix4(t.matrixWorld),this.union(aa)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(eo),ca.subVectors(this.max,eo),er.subVectors(t.a,eo),nr.subVectors(t.b,eo),ir.subVectors(t.c,eo),Ji.subVectors(nr,er),$i.subVectors(ir,nr),ws.subVectors(er,ir);let e=[0,-Ji.z,Ji.y,0,-$i.z,$i.y,0,-ws.z,ws.y,Ji.z,0,-Ji.x,$i.z,0,-$i.x,ws.z,0,-ws.x,-Ji.y,Ji.x,0,-$i.y,$i.x,0,-ws.y,ws.x,0];return!Gc(e,er,nr,ir,ca)||(e=[1,0,0,0,1,0,0,0,1],!Gc(e,er,nr,ir,ca))?!1:(la.crossVectors(Ji,$i),e=[la.x,la.y,la.z],Gc(e,er,nr,ir,ca))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ei=[new C,new C,new C,new C,new C,new C,new C,new C],ri=new C,aa=new Xn,er=new C,nr=new C,ir=new C,Ji=new C,$i=new C,ws=new C,eo=new C,ca=new C,la=new C,bs=new C;function Gc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){bs.fromArray(i,r);const a=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),l=t.dot(bs),c=e.dot(bs),h=n.dot(bs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const sg=new Xn,no=new C,Wc=new C;class kn{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):sg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;no.subVectors(t,this.center);const e=no.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(no,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(no.copy(t.center).add(Wc)),this.expandByPoint(no.copy(t.center).sub(Wc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new C,Xc=new C,ha=new C,Qi=new C,Yc=new C,ua=new C,qc=new C;class $o{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Xc.copy(t).add(e).multiplyScalar(.5),ha.copy(e).sub(t).normalize(),Qi.copy(this.origin).sub(Xc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ha),a=Qi.dot(this.direction),l=-Qi.dot(ha),c=Qi.lengthSq(),h=Math.abs(1-o*o);let u,f,p,x;if(h>0)if(u=o*l-a,f=o*a-l,x=r*h,u>=0)if(f>=-x)if(f<=x){const _=1/h;u*=_,f*=_,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Xc).addScaledVector(ha,f),p}intersectSphere(t,e){Ai.subVectors(t.center,this.origin);const n=Ai.dot(this.direction),s=Ai.dot(Ai)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,n,s,r){Yc.subVectors(e,t),ua.subVectors(n,t),qc.crossVectors(Yc,ua);let o=this.direction.dot(qc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,t);const l=a*this.direction.dot(ua.crossVectors(Qi,ua));if(l<0)return null;const c=a*this.direction.dot(Yc.cross(Qi));if(c<0||l+c>o)return null;const h=-a*Qi.dot(qc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(t,e,n,s,r,o,a,l,c,h,u,f,p,x,_,m){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,p,x,_,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,p,x,_,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=p,g[7]=x,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/sr.setFromMatrixColumn(t,0).length(),r=1/sr.setFromMatrixColumn(t,1).length(),o=1/sr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,p=o*u,x=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+x*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=x+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,x=c*h,_=c*u;e[0]=f+_*a,e[4]=x*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-x,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,x=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=x+p*a,e[1]=p+x*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,p=o*u,x=a*h,_=a*u;e[0]=l*h,e[4]=x*c-p,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=p*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,x=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=x*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+x,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*l,p=o*c,x=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=p*u-x,e[2]=x*u-p,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rg,t,og)}lookAt(t,e,n){const s=this.elements;return Hn.subVectors(t,e),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),ts.crossVectors(n,Hn),ts.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),ts.crossVectors(n,Hn)),ts.normalize(),fa.crossVectors(Hn,ts),s[0]=ts.x,s[4]=fa.x,s[8]=Hn.x,s[1]=ts.y,s[5]=fa.y,s[9]=Hn.y,s[2]=ts.z,s[6]=fa.z,s[10]=Hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],x=n[2],_=n[6],m=n[10],g=n[14],M=n[3],y=n[7],w=n[11],H=n[15],D=s[0],O=s[4],G=s[8],P=s[12],T=s[1],I=s[5],Y=s[9],Z=s[13],nt=s[2],at=s[6],it=s[10],ht=s[14],J=s[3],At=s[7],Ut=s[11],zt=s[15];return r[0]=o*D+a*T+l*nt+c*J,r[4]=o*O+a*I+l*at+c*At,r[8]=o*G+a*Y+l*it+c*Ut,r[12]=o*P+a*Z+l*ht+c*zt,r[1]=h*D+u*T+f*nt+p*J,r[5]=h*O+u*I+f*at+p*At,r[9]=h*G+u*Y+f*it+p*Ut,r[13]=h*P+u*Z+f*ht+p*zt,r[2]=x*D+_*T+m*nt+g*J,r[6]=x*O+_*I+m*at+g*At,r[10]=x*G+_*Y+m*it+g*Ut,r[14]=x*P+_*Z+m*ht+g*zt,r[3]=M*D+y*T+w*nt+H*J,r[7]=M*O+y*I+w*at+H*At,r[11]=M*G+y*Y+w*it+H*Ut,r[15]=M*P+y*Z+w*ht+H*zt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],x=t[3],_=t[7],m=t[11],g=t[15];return x*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*p-n*l*p)+_*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+g*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],x=t[12],_=t[13],m=t[14],g=t[15],M=u*m*c-_*f*c+_*l*p-a*m*p-u*l*g+a*f*g,y=x*f*c-h*m*c-x*l*p+o*m*p+h*l*g-o*f*g,w=h*_*c-x*u*c+x*a*p-o*_*p-h*a*g+o*u*g,H=x*u*l-h*_*l-x*a*f+o*_*f+h*a*m-o*u*m,D=e*M+n*y+s*w+r*H;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/D;return t[0]=M*O,t[1]=(_*f*r-u*m*r-_*s*p+n*m*p+u*s*g-n*f*g)*O,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*g+n*l*g)*O,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*p-n*l*p)*O,t[4]=y*O,t[5]=(h*m*r-x*f*r+x*s*p-e*m*p-h*s*g+e*f*g)*O,t[6]=(x*l*r-o*m*r-x*s*c+e*m*c+o*s*g-e*l*g)*O,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*p+e*l*p)*O,t[8]=w*O,t[9]=(x*u*r-h*_*r-x*n*p+e*_*p+h*n*g-e*u*g)*O,t[10]=(o*_*r-x*a*r+x*n*c-e*_*c-o*n*g+e*a*g)*O,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*O,t[12]=H*O,t[13]=(h*_*s-x*u*s+x*n*f-e*_*f-h*n*m+e*u*m)*O,t[14]=(x*a*s-o*_*s-x*n*l+e*_*l+o*n*m-e*a*m)*O,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*O,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,x=r*u,_=o*h,m=o*u,g=a*u,M=l*c,y=l*h,w=l*u,H=n.x,D=n.y,O=n.z;return s[0]=(1-(_+g))*H,s[1]=(p+w)*H,s[2]=(x-y)*H,s[3]=0,s[4]=(p-w)*D,s[5]=(1-(f+g))*D,s[6]=(m+M)*D,s[7]=0,s[8]=(x+y)*O,s[9]=(m-M)*O,s[10]=(1-(f+_))*O,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=sr.set(s[0],s[1],s[2]).length();const o=sr.set(s[4],s[5],s[6]).length(),a=sr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],oi.copy(this);const c=1/r,h=1/o,u=1/a;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=u,oi.elements[9]*=u,oi.elements[10]*=u,e.setFromRotationMatrix(oi),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Vi){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let p,x;if(a===Vi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===hc)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Vi){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,p=(n+s)*h;let x,_;if(a===Vi)x=(o+r)*u,_=-2*u;else if(a===hc)x=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const sr=new C,oi=new Qt,rg=new C(0,0,0),og=new C(1,1,1),ts=new C,fa=new C,Hn=new C,ku=new Qt,Hu=new yi;class Ce{constructor(t=0,e=0,n=0,s=Ce.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(on(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ku.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ku,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hu.setFromEuler(this),this.setFromQuaternion(Hu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ce.DEFAULT_ORDER="XYZ";class Zh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ag=0;const Vu=new C,rr=new yi,Ri=new Qt,da=new C,io=new C,cg=new C,lg=new yi,Gu=new C(1,0,0),Wu=new C(0,1,0),Xu=new C(0,0,1),Yu={type:"added"},hg={type:"removed"},or={type:"childadded",child:null},Kc={type:"childremoved",child:null};class Xe extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DEFAULT_UP.clone();const t=new C,e=new Ce,n=new yi,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qt},normalMatrix:{value:new xe}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rr.setFromAxisAngle(t,e),this.quaternion.multiply(rr),this}rotateOnWorldAxis(t,e){return rr.setFromAxisAngle(t,e),this.quaternion.premultiply(rr),this}rotateX(t){return this.rotateOnAxis(Gu,t)}rotateY(t){return this.rotateOnAxis(Wu,t)}rotateZ(t){return this.rotateOnAxis(Xu,t)}translateOnAxis(t,e){return Vu.copy(t).applyQuaternion(this.quaternion),this.position.add(Vu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gu,t)}translateY(t){return this.translateOnAxis(Wu,t)}translateZ(t){return this.translateOnAxis(Xu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?da.copy(t):da.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(io,da,this.up):Ri.lookAt(da,io,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),rr.setFromRotationMatrix(Ri),this.quaternion.premultiply(rr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yu),or.child=t,this.dispatchEvent(or),or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hg),Kc.child=t,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yu),or.child=t,this.dispatchEvent(or),or.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,t,cg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,lg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Xe.DEFAULT_UP=new C(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new C,Ci=new C,jc=new C,Pi=new C,ar=new C,cr=new C,qu=new C,Zc=new C,Jc=new C,$c=new C;class hi{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ai.subVectors(t,e),s.cross(ai);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ai.subVectors(s,e),Ci.subVectors(n,e),jc.subVectors(t,e);const o=ai.dot(ai),a=ai.dot(Ci),l=ai.dot(jc),c=Ci.dot(Ci),h=Ci.dot(jc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-a*h)*f,x=(o*h-a*l)*f;return r.set(1-p-x,x,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static isFrontFacing(t,e,n,s){return ai.subVectors(n,e),Ci.subVectors(t,e),ai.cross(Ci).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ai.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return hi.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return hi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ar.subVectors(s,n),cr.subVectors(r,n),Zc.subVectors(t,n);const l=ar.dot(Zc),c=cr.dot(Zc);if(l<=0&&c<=0)return e.copy(n);Jc.subVectors(t,s);const h=ar.dot(Jc),u=cr.dot(Jc);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ar,o);$c.subVectors(t,r);const p=ar.dot($c),x=cr.dot($c);if(x>=0&&p<=x)return e.copy(r);const _=p*c-l*x;if(_<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector(cr,a);const m=h*x-p*u;if(m<=0&&u-h>=0&&p-x>=0)return qu.subVectors(r,s),a=(u-h)/(u-h+(p-x)),e.copy(s).addScaledVector(qu,a);const g=1/(m+_+f);return o=_*g,a=f*g,e.copy(n).addScaledVector(ar,o).addScaledVector(cr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},pa={h:0,s:0,l:0};function Qc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ae.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ae.workingColorSpace){if(t=Kh(t,1),e=on(e,0,1),n=on(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Qc(o,r,t+1/3),this.g=Qc(o,r,t),this.b=Qc(o,r,t-1/3)}return Ae.toWorkingColorSpace(this,s),this}setStyle(t,e=nn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){const n=Wd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Lr(t.r),this.g=Lr(t.g),this.b=Lr(t.b),this}copyLinearToSRGB(t){return this.r=kc(t.r),this.g=kc(t.g),this.b=kc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return Ae.fromWorkingColorSpace(yn.copy(this),t),Math.round(on(yn.r*255,0,255))*65536+Math.round(on(yn.g*255,0,255))*256+Math.round(on(yn.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ae.workingColorSpace){Ae.fromWorkingColorSpace(yn.copy(this),e);const n=yn.r,s=yn.g,r=yn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(yn.copy(this),e),t.r=yn.r,t.g=yn.g,t.b=yn.b,t}getStyle(t=nn){Ae.fromWorkingColorSpace(yn.copy(this),t);const e=yn.r,n=yn.g,s=yn.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(es),this.setHSL(es.h+t,es.s+e,es.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(es),t.getHSL(pa);const n=Eo(es.h,pa.h,e),s=Eo(es.s,pa.s,e),r=Eo(es.l,pa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new qt;qt.NAMES=Wd;let ug=0;class Yn extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=si(),this.name="",this.type="Material",this.blending=Cr,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vl,this.blendDst=Gl,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=rc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(n.blending=this.blending),this.side!==Xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vl&&(n.blendSrc=this.blendSrc),this.blendDst!==Gl&&(n.blendDst=this.blendDst),this.blendEquation!==Fs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Du&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class bn extends Yn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ce,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const rn=new C,ma=new gt;class gn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return jh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ma.fromBufferAttribute(this,e),ma.applyMatrix3(t),this.setXY(e,ma.x,ma.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix3(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=li(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=li(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=li(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vh&&(t.usage=this.usage),t}}class Xd extends gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yd extends gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Nt extends gn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let fg=0;const Jn=new Qt,tl=new Xe,lr=new C,Vn=new Xn,so=new Xn,dn=new C;class _e extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hd(t)?Yd:Xd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new xe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Jn.makeRotationFromQuaternion(t),this.applyMatrix4(Jn),this}rotateX(t){return Jn.makeRotationX(t),this.applyMatrix4(Jn),this}rotateY(t){return Jn.makeRotationY(t),this.applyMatrix4(Jn),this}rotateZ(t){return Jn.makeRotationZ(t),this.applyMatrix4(Jn),this}translate(t,e,n){return Jn.makeTranslation(t,e,n),this.applyMatrix4(Jn),this}scale(t,e,n){return Jn.makeScale(t,e,n),this.applyMatrix4(Jn),this}lookAt(t){return tl.lookAt(t),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Nt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];so.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(Vn.min,so.min),Vn.expandByPoint(dn),dn.addVectors(Vn.max,so.max),Vn.expandByPoint(dn)):(Vn.expandByPoint(so.min),Vn.expandByPoint(so.max))}Vn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)dn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(dn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)dn.fromBufferAttribute(a,c),l&&(lr.fromBufferAttribute(t,c),dn.add(lr)),s=Math.max(s,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let G=0;G<n.count;G++)a[G]=new C,l[G]=new C;const c=new C,h=new C,u=new C,f=new gt,p=new gt,x=new gt,_=new C,m=new C;function g(G,P,T){c.fromBufferAttribute(n,G),h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,T),f.fromBufferAttribute(r,G),p.fromBufferAttribute(r,P),x.fromBufferAttribute(r,T),h.sub(c),u.sub(c),p.sub(f),x.sub(f);const I=1/(p.x*x.y-x.x*p.y);isFinite(I)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(I),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(I),a[G].add(_),a[P].add(_),a[T].add(_),l[G].add(m),l[P].add(m),l[T].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let G=0,P=M.length;G<P;++G){const T=M[G],I=T.start,Y=T.count;for(let Z=I,nt=I+Y;Z<nt;Z+=3)g(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}const y=new C,w=new C,H=new C,D=new C;function O(G){H.fromBufferAttribute(s,G),D.copy(H);const P=a[G];y.copy(P),y.sub(H.multiplyScalar(H.dot(P))).normalize(),w.crossVectors(D,P);const I=w.dot(l[G])<0?-1:1;o.setXYZW(G,y.x,y.y,y.z,I)}for(let G=0,P=M.length;G<P;++G){const T=M[G],I=T.start,Y=T.count;for(let Z=I,nt=I+Y;Z<nt;Z+=3)O(t.getX(Z+0)),O(t.getX(Z+1)),O(t.getX(Z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let f=0,p=t.count;f<p;f+=3){const x=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)dn.fromBufferAttribute(t,e),dn.normalize(),t.setXYZ(e,dn.x,dn.y,dn.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let p=0,x=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let g=0;g<h;g++)f[x++]=c[p++]}return new gn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ku=new Qt,Ts=new $o,ga=new kn,ju=new C,hr=new C,ur=new C,fr=new C,el=new C,xa=new C,_a=new gt,va=new gt,Ma=new gt,Zu=new C,Ju=new C,$u=new C,ya=new C,Sa=new C;class ft extends Xe{constructor(t=new _e,e=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){xa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(el.fromBufferAttribute(u,t),o?xa.addScaledVector(el,h):xa.addScaledVector(el.sub(e),h))}e.add(xa)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(r),Ts.copy(t.ray).recast(t.near),!(ga.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(ga,ju)===null||Ts.origin.distanceToSquared(ju)>(t.far-t.near)**2))&&(Ku.copy(r).invert(),Ts.copy(t.ray).applyMatrix4(Ku),!(n.boundingBox!==null&&Ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ts)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){const m=f[x],g=o[m.materialIndex],M=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let w=M,H=y;w<H;w+=3){const D=a.getX(w),O=a.getX(w+1),G=a.getX(w+2);s=wa(this,g,t,n,c,h,u,D,O,G),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=x,g=_;m<g;m+=3){const M=a.getX(m),y=a.getX(m+1),w=a.getX(m+2);s=wa(this,o,t,n,c,h,u,M,y,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){const m=f[x],g=o[m.materialIndex],M=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=M,H=y;w<H;w+=3){const D=w,O=w+1,G=w+2;s=wa(this,g,t,n,c,h,u,D,O,G),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=x,g=_;m<g;m+=3){const M=m,y=m+1,w=m+2;s=wa(this,o,t,n,c,h,u,M,y,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function dg(i,t,e,n,s,r,o,a){let l;if(t.side===Bn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Xi,a),l===null)return null;Sa.copy(a),Sa.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Sa);return c<e.near||c>e.far?null:{distance:c,point:Sa.clone(),object:i}}function wa(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,hr),i.getVertexPosition(l,ur),i.getVertexPosition(c,fr);const h=dg(i,t,e,n,hr,ur,fr,ya);if(h){s&&(_a.fromBufferAttribute(s,a),va.fromBufferAttribute(s,l),Ma.fromBufferAttribute(s,c),h.uv=hi.getInterpolation(ya,hr,ur,fr,_a,va,Ma,new gt)),r&&(_a.fromBufferAttribute(r,a),va.fromBufferAttribute(r,l),Ma.fromBufferAttribute(r,c),h.uv1=hi.getInterpolation(ya,hr,ur,fr,_a,va,Ma,new gt)),o&&(Zu.fromBufferAttribute(o,a),Ju.fromBufferAttribute(o,l),$u.fromBufferAttribute(o,c),h.normal=hi.getInterpolation(ya,hr,ur,fr,Zu,Ju,$u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new C,materialIndex:0};hi.getNormal(hr,ur,fr,u.normal),h.face=u}return h}class qe extends _e{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,p=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(h,3)),this.setAttribute("uv",new Nt(u,2));function x(_,m,g,M,y,w,H,D,O,G,P){const T=w/O,I=H/G,Y=w/2,Z=H/2,nt=D/2,at=O+1,it=G+1;let ht=0,J=0;const At=new C;for(let Ut=0;Ut<it;Ut++){const zt=Ut*I-Z;for(let Ot=0;Ot<at;Ot++){const ve=Ot*T-Y;At[_]=ve*M,At[m]=zt*y,At[g]=nt,c.push(At.x,At.y,At.z),At[_]=0,At[m]=0,At[g]=D>0?1:-1,h.push(At.x,At.y,At.z),u.push(Ot/O),u.push(1-Ut/G),ht+=1}}for(let Ut=0;Ut<G;Ut++)for(let zt=0;zt<O;zt++){const Ot=f+zt+at*Ut,ve=f+zt+at*(Ut+1),st=f+(zt+1)+at*(Ut+1),dt=f+(zt+1)+at*Ut;l.push(Ot,ve,dt),l.push(ve,st,dt),J+=6}a.addGroup(p,J,P),p+=J,f+=ht}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Cn(i){const t={};for(let e=0;e<i.length;e++){const n=Fr(i[e]);for(const s in n)t[s]=n[s]}return t}function pg(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function qd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const mg={clone:Fr,merge:Cn};var gg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ms extends Yn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gg,this.fragmentShader=xg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fr(t.uniforms),this.uniformsGroups=pg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Kd extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Vi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new C,Qu=new gt,tf=new gt;class Un extends Kd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Or*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(To*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(To*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ns.x,ns.y).multiplyScalar(-t/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-t/ns.z)}getViewSize(t,e){return this.getViewBounds(t,Qu,tf),e.subVectors(tf,Qu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(To*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const dr=-90,pr=1;class _g extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Un(dr,pr,t,e);s.layers=this.layers,this.add(s);const r=new Un(dr,pr,t,e);r.layers=this.layers,this.add(r);const o=new Un(dr,pr,t,e);o.layers=this.layers,this.add(o);const a=new Un(dr,pr,t,e);a.layers=this.layers,this.add(a);const l=new Un(dr,pr,t,e);l.layers=this.layers,this.add(l);const c=new Un(dr,pr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===hc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class jd extends hn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Dr,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vg extends Ys{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new jd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new qe(5,5,5),r=new ms({name:"CubemapFromEquirect",uniforms:Fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:us});r.uniforms.tEquirect.value=e;const o=new ft(s,r),a=e.minFilter;return e.minFilter===Hi&&(e.minFilter=Gn),new _g(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const nl=new C,Mg=new C,yg=new xe;class Ds{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=nl.subVectors(n,e).cross(Mg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(nl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||yg.getNormalMatrix(t),s=this.coplanarPoint(nl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new kn,ba=new C;class Tc{constructor(t=new Ds,e=new Ds,n=new Ds,s=new Ds,r=new Ds,o=new Ds){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vi){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],x=s[9],_=s[10],m=s[11],g=s[12],M=s[13],y=s[14],w=s[15];if(n[0].setComponents(l-r,f-c,m-p,w-g).normalize(),n[1].setComponents(l+r,f+c,m+p,w+g).normalize(),n[2].setComponents(l+o,f+h,m+x,w+M).normalize(),n[3].setComponents(l-o,f-h,m-x,w-M).normalize(),n[4].setComponents(l-a,f-u,m-_,w-y).normalize(),e===Vi)n[5].setComponents(l+a,f+u,m+_,w+y).normalize();else if(e===hc)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(t){return Es.center.set(0,0,0),Es.radius=.7071067811865476,Es.applyMatrix4(t.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ba.x=s.normal.x>0?t.max.x:t.min.x,ba.y=s.normal.y>0?t.max.y:t.min.y,ba.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ba)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Sg(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l._updateRange,f=l.updateRanges;if(i.bindBuffer(c,a),u.count===-1&&f.length===0&&i.bufferSubData(c,0,h),f.length!==0){for(let p=0,x=f.length;p<x;p++){const _=f[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Pn extends _e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,p=[],x=[],_=[],m=[];for(let g=0;g<h;g++){const M=g*f-o;for(let y=0;y<c;y++){const w=y*u-r;x.push(w,-M,0),_.push(0,0,1),m.push(y/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){const y=M+c*g,w=M+c*(g+1),H=M+1+c*(g+1),D=M+1+c*g;p.push(y,w,D),p.push(w,H,D)}this.setIndex(p),this.setAttribute("position",new Nt(x,3)),this.setAttribute("normal",new Nt(_,3)),this.setAttribute("uv",new Nt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pn(t.width,t.height,t.widthSegments,t.heightSegments)}}var wg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ag=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ig=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ng=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ug=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Og=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$g=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qg="gl_FragColor = linearToOutputTexel( gl_FragColor );",t0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,e0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,n0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,i0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,s0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,o0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,h0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,u0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,m0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,g0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,y0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,S0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,w0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,b0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,T0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,I0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,z0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,B0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,H0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,V0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,X0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,q0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ix=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ox=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ax=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ux=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,px=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ax=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Px=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Lx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ux=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$x=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,t_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ge={alphahash_fragment:wg,alphahash_pars_fragment:bg,alphamap_fragment:Tg,alphamap_pars_fragment:Eg,alphatest_fragment:Ag,alphatest_pars_fragment:Rg,aomap_fragment:Cg,aomap_pars_fragment:Pg,batching_pars_vertex:Lg,batching_vertex:Ig,begin_vertex:Dg,beginnormal_vertex:Ng,bsdfs:Ug,iridescence_fragment:zg,bumpmap_pars_fragment:Og,clipping_planes_fragment:Fg,clipping_planes_pars_fragment:Bg,clipping_planes_pars_vertex:kg,clipping_planes_vertex:Hg,color_fragment:Vg,color_pars_fragment:Gg,color_pars_vertex:Wg,color_vertex:Xg,common:Yg,cube_uv_reflection_fragment:qg,defaultnormal_vertex:Kg,displacementmap_pars_vertex:jg,displacementmap_vertex:Zg,emissivemap_fragment:Jg,emissivemap_pars_fragment:$g,colorspace_fragment:Qg,colorspace_pars_fragment:t0,envmap_fragment:e0,envmap_common_pars_fragment:n0,envmap_pars_fragment:i0,envmap_pars_vertex:s0,envmap_physical_pars_fragment:m0,envmap_vertex:r0,fog_vertex:o0,fog_pars_vertex:a0,fog_fragment:c0,fog_pars_fragment:l0,gradientmap_pars_fragment:h0,lightmap_pars_fragment:u0,lights_lambert_fragment:f0,lights_lambert_pars_fragment:d0,lights_pars_begin:p0,lights_toon_fragment:g0,lights_toon_pars_fragment:x0,lights_phong_fragment:_0,lights_phong_pars_fragment:v0,lights_physical_fragment:M0,lights_physical_pars_fragment:y0,lights_fragment_begin:S0,lights_fragment_maps:w0,lights_fragment_end:b0,logdepthbuf_fragment:T0,logdepthbuf_pars_fragment:E0,logdepthbuf_pars_vertex:A0,logdepthbuf_vertex:R0,map_fragment:C0,map_pars_fragment:P0,map_particle_fragment:L0,map_particle_pars_fragment:I0,metalnessmap_fragment:D0,metalnessmap_pars_fragment:N0,morphinstance_vertex:U0,morphcolor_vertex:z0,morphnormal_vertex:O0,morphtarget_pars_vertex:F0,morphtarget_vertex:B0,normal_fragment_begin:k0,normal_fragment_maps:H0,normal_pars_fragment:V0,normal_pars_vertex:G0,normal_vertex:W0,normalmap_pars_fragment:X0,clearcoat_normal_fragment_begin:Y0,clearcoat_normal_fragment_maps:q0,clearcoat_pars_fragment:K0,iridescence_pars_fragment:j0,opaque_fragment:Z0,packing:J0,premultiplied_alpha_fragment:$0,project_vertex:Q0,dithering_fragment:tx,dithering_pars_fragment:ex,roughnessmap_fragment:nx,roughnessmap_pars_fragment:ix,shadowmap_pars_fragment:sx,shadowmap_pars_vertex:rx,shadowmap_vertex:ox,shadowmask_pars_fragment:ax,skinbase_vertex:cx,skinning_pars_vertex:lx,skinning_vertex:hx,skinnormal_vertex:ux,specularmap_fragment:fx,specularmap_pars_fragment:dx,tonemapping_fragment:px,tonemapping_pars_fragment:mx,transmission_fragment:gx,transmission_pars_fragment:xx,uv_pars_fragment:_x,uv_pars_vertex:vx,uv_vertex:Mx,worldpos_vertex:yx,background_vert:Sx,background_frag:wx,backgroundCube_vert:bx,backgroundCube_frag:Tx,cube_vert:Ex,cube_frag:Ax,depth_vert:Rx,depth_frag:Cx,distanceRGBA_vert:Px,distanceRGBA_frag:Lx,equirect_vert:Ix,equirect_frag:Dx,linedashed_vert:Nx,linedashed_frag:Ux,meshbasic_vert:zx,meshbasic_frag:Ox,meshlambert_vert:Fx,meshlambert_frag:Bx,meshmatcap_vert:kx,meshmatcap_frag:Hx,meshnormal_vert:Vx,meshnormal_frag:Gx,meshphong_vert:Wx,meshphong_frag:Xx,meshphysical_vert:Yx,meshphysical_frag:qx,meshtoon_vert:Kx,meshtoon_frag:jx,points_vert:Zx,points_frag:Jx,shadow_vert:$x,shadow_frag:Qx,sprite_vert:t_,sprite_frag:e_},Rt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},_i={basic:{uniforms:Cn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Cn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new qt(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Cn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Cn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Cn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new qt(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Cn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Cn([Rt.points,Rt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Cn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Cn([Rt.common,Rt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Cn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Cn([Rt.sprite,Rt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Cn([Rt.common,Rt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Cn([Rt.lights,Rt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};_i.physical={uniforms:Cn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const Ta={r:0,b:0,g:0},As=new Ce,n_=new Qt;function i_(i,t,e,n,s,r,o){const a=new qt(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function x(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function _(M){let y=!1;const w=x(M);w===null?g(a,l):w&&w.isColor&&(g(w,1),y=!0);const H=i.xr.getEnvironmentBlendMode();H==="additive"?n.buffers.color.setClear(0,0,0,1,o):H==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,y){const w=x(y);w&&(w.isCubeTexture||w.mapping===Sc)?(h===void 0&&(h=new ft(new qe(1,1,1),new ms({name:"BackgroundCubeMaterial",uniforms:Fr(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(H,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),As.copy(y.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(n_.makeRotationFromEuler(As)),h.material.toneMapped=Ae.getTransfer(w.colorSpace)!==We,(u!==w||f!==w.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new ft(new Pn(2,2),new ms({name:"BackgroundMaterial",uniforms:Fr(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ae.getTransfer(w.colorSpace)!==We,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=w,f=w.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,y){M.getRGB(Ta,qd(i)),n.buffers.color.setClear(Ta.r,Ta.g,Ta.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,g(a,l)},render:_,addToRenderList:m}}function s_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(T,I,Y,Z,nt){let at=!1;const it=u(Z,Y,I);r!==it&&(r=it,c(r.object)),at=p(T,Z,Y,nt),at&&x(T,Z,Y,nt),nt!==null&&t.update(nt,i.ELEMENT_ARRAY_BUFFER),(at||o)&&(o=!1,w(T,I,Y,Z),nt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(nt).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function h(T){return i.deleteVertexArray(T)}function u(T,I,Y){const Z=Y.wireframe===!0;let nt=n[T.id];nt===void 0&&(nt={},n[T.id]=nt);let at=nt[I.id];at===void 0&&(at={},nt[I.id]=at);let it=at[Z];return it===void 0&&(it=f(l()),at[Z]=it),it}function f(T){const I=[],Y=[],Z=[];for(let nt=0;nt<e;nt++)I[nt]=0,Y[nt]=0,Z[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:Y,attributeDivisors:Z,object:T,attributes:{},index:null}}function p(T,I,Y,Z){const nt=r.attributes,at=I.attributes;let it=0;const ht=Y.getAttributes();for(const J in ht)if(ht[J].location>=0){const Ut=nt[J];let zt=at[J];if(zt===void 0&&(J==="instanceMatrix"&&T.instanceMatrix&&(zt=T.instanceMatrix),J==="instanceColor"&&T.instanceColor&&(zt=T.instanceColor)),Ut===void 0||Ut.attribute!==zt||zt&&Ut.data!==zt.data)return!0;it++}return r.attributesNum!==it||r.index!==Z}function x(T,I,Y,Z){const nt={},at=I.attributes;let it=0;const ht=Y.getAttributes();for(const J in ht)if(ht[J].location>=0){let Ut=at[J];Ut===void 0&&(J==="instanceMatrix"&&T.instanceMatrix&&(Ut=T.instanceMatrix),J==="instanceColor"&&T.instanceColor&&(Ut=T.instanceColor));const zt={};zt.attribute=Ut,Ut&&Ut.data&&(zt.data=Ut.data),nt[J]=zt,it++}r.attributes=nt,r.attributesNum=it,r.index=Z}function _(){const T=r.newAttributes;for(let I=0,Y=T.length;I<Y;I++)T[I]=0}function m(T){g(T,0)}function g(T,I){const Y=r.newAttributes,Z=r.enabledAttributes,nt=r.attributeDivisors;Y[T]=1,Z[T]===0&&(i.enableVertexAttribArray(T),Z[T]=1),nt[T]!==I&&(i.vertexAttribDivisor(T,I),nt[T]=I)}function M(){const T=r.newAttributes,I=r.enabledAttributes;for(let Y=0,Z=I.length;Y<Z;Y++)I[Y]!==T[Y]&&(i.disableVertexAttribArray(Y),I[Y]=0)}function y(T,I,Y,Z,nt,at,it){it===!0?i.vertexAttribIPointer(T,I,Y,nt,at):i.vertexAttribPointer(T,I,Y,Z,nt,at)}function w(T,I,Y,Z){_();const nt=Z.attributes,at=Y.getAttributes(),it=I.defaultAttributeValues;for(const ht in at){const J=at[ht];if(J.location>=0){let At=nt[ht];if(At===void 0&&(ht==="instanceMatrix"&&T.instanceMatrix&&(At=T.instanceMatrix),ht==="instanceColor"&&T.instanceColor&&(At=T.instanceColor)),At!==void 0){const Ut=At.normalized,zt=At.itemSize,Ot=t.get(At);if(Ot===void 0)continue;const ve=Ot.buffer,st=Ot.type,dt=Ot.bytesPerElement,Pt=st===i.INT||st===i.UNSIGNED_INT||At.gpuType===kh;if(At.isInterleavedBufferAttribute){const wt=At.data,re=wt.stride,ie=At.offset;if(wt.isInstancedInterleavedBuffer){for(let Zt=0;Zt<J.locationSize;Zt++)g(J.location+Zt,wt.meshPerAttribute);T.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let Zt=0;Zt<J.locationSize;Zt++)m(J.location+Zt);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let Zt=0;Zt<J.locationSize;Zt++)y(J.location+Zt,zt/J.locationSize,st,Ut,re*dt,(ie+zt/J.locationSize*Zt)*dt,Pt)}else{if(At.isInstancedBufferAttribute){for(let wt=0;wt<J.locationSize;wt++)g(J.location+wt,At.meshPerAttribute);T.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let wt=0;wt<J.locationSize;wt++)m(J.location+wt);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let wt=0;wt<J.locationSize;wt++)y(J.location+wt,zt/J.locationSize,st,Ut,zt*dt,zt/J.locationSize*wt*dt,Pt)}}else if(it!==void 0){const Ut=it[ht];if(Ut!==void 0)switch(Ut.length){case 2:i.vertexAttrib2fv(J.location,Ut);break;case 3:i.vertexAttrib3fv(J.location,Ut);break;case 4:i.vertexAttrib4fv(J.location,Ut);break;default:i.vertexAttrib1fv(J.location,Ut)}}}}M()}function H(){G();for(const T in n){const I=n[T];for(const Y in I){const Z=I[Y];for(const nt in Z)h(Z[nt].object),delete Z[nt];delete I[Y]}delete n[T]}}function D(T){if(n[T.id]===void 0)return;const I=n[T.id];for(const Y in I){const Z=I[Y];for(const nt in Z)h(Z[nt].object),delete Z[nt];delete I[Y]}delete n[T.id]}function O(T){for(const I in n){const Y=n[I];if(Y[T.id]===void 0)continue;const Z=Y[T.id];for(const nt in Z)h(Z[nt].object),delete Z[nt];delete Y[T.id]}}function G(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:G,resetDefaultState:P,dispose:H,releaseStatesOfGeometry:D,releaseStatesOfProgram:O,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function r_(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],h[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let x=0;for(let _=0;_<u;_++)x+=h[_];for(let _=0;_<f.length;_++)e.update(x,n,f[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function o_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==zn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const O=D===Jo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Yi&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Wn&&!O)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=p>0,H=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:g,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:w,maxSamples:H}}function a_(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Ds,a=new xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const x=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,y=M*4;let w=g.clippingState||null;l.value=w,w=h(x,f,y,p);for(let H=0;H!==y;++H)w[H]=e[H];g.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,x){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,x!==!0||m===null){const g=p+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,w=p;y!==_;++y,w+=4)o.copy(u[y]).applyMatrix4(M,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function c_(i){let t=new WeakMap;function e(o,a){return a===Wl?o.mapping=Dr:a===Xl&&(o.mapping=Nr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wl||a===Xl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new vg(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Jh extends Kd{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const wr=4,ef=[.125,.215,.35,.446,.526,.582],Bs=20,il=new Jh,nf=new qt;let sl=null,rl=0,ol=0,al=!1;const Ns=(1+Math.sqrt(5))/2,mr=1/Ns,sf=[new C(-Ns,mr,0),new C(Ns,mr,0),new C(-mr,0,Ns),new C(mr,0,Ns),new C(0,Ns,-mr),new C(0,Ns,mr),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class rf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sl,rl,ol),this._renderer.xr.enabled=al,t.scissorTest=!1,Ea(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Dr||t.mapping===Nr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Jo,format:zn,colorSpace:_n,depthBuffer:!1},s=of(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=of(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l_(r)),this._blurMaterial=h_(r,t,e)}return s}_compileMaterial(t){const e=new ft(this._lodPlanes[0],t);this._renderer.compile(e,il)}_sceneToCubeUV(t,e,n,s){const a=new Un(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(nf),h.toneMapping=fs,h.autoClear=!1;const p=new bn({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),x=new ft(new qe,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(nf),_=!0);for(let g=0;g<6;g++){const M=g%3;M===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):M===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const y=this._cubeSize;Ea(s,M*y,g>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(x,a),h.render(t,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Dr||t.mapping===Nr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=af());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ft(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ea(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,il)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=sf[(s-r-1)%sf.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ft(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Bs-1),_=r/x,m=isFinite(r)?1+Math.floor(h*_):Bs;m>Bs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bs}`);const g=[];let M=0;for(let O=0;O<Bs;++O){const G=O/_,P=Math.exp(-G*G/2);g.push(P),O===0?M+=P:O<m&&(M+=2*P)}for(let O=0;O<g.length;O++)g[O]=g[O]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=x,f.mipInt.value=y-n;const w=this._sizeLods[s],H=3*w*(s>y-wr?s-y+wr:0),D=4*(this._cubeSize-w);Ea(e,H,D,3*w,2*w),l.setRenderTarget(e),l.render(u,il)}}function l_(i){const t=[],e=[],n=[];let s=i;const r=i-wr+1+ef.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-wr?l=ef[o-i+wr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,x=6,_=3,m=2,g=1,M=new Float32Array(_*x*p),y=new Float32Array(m*x*p),w=new Float32Array(g*x*p);for(let D=0;D<p;D++){const O=D%3*2/3-1,G=D>2?0:-1,P=[O,G,0,O+2/3,G,0,O+2/3,G+1,0,O,G,0,O+2/3,G+1,0,O,G+1,0];M.set(P,_*x*D),y.set(f,m*x*D);const T=[D,D,D,D,D,D];w.set(T,g*x*D)}const H=new _e;H.setAttribute("position",new gn(M,_)),H.setAttribute("uv",new gn(y,m)),H.setAttribute("faceIndex",new gn(w,g)),t.push(H),s>wr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function of(i,t,e){const n=new Ys(i,t,e);return n.texture.mapping=Sc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ea(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function h_(i,t,e){const n=new Float32Array(Bs),s=new C(0,1,0);return new ms({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function af(){return new ms({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function cf(){return new ms({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function $h(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function u_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wl||l===Xl,h=l===Dr||l===Nr;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new rf(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new rf(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function f_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&jh("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function d_(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const x in f.attributes)t.remove(f.attributes[x]);for(const x in f.morphAttributes){const _=f.morphAttributes[x];for(let m=0,g=_.length;m<g;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const x in f)t.update(f[x],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const x in p){const _=p[x];for(let m=0,g=_.length;m<g;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){const f=[],p=u.index,x=u.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let y=0,w=M.length;y<w;y+=3){const H=M[y+0],D=M[y+1],O=M[y+2];f.push(H,D,D,O,O,H)}}else if(x!==void 0){const M=x.array;_=x.version;for(let y=0,w=M.length/3-1;y<w;y+=3){const H=y+0,D=y+1,O=y+2;f.push(H,D,D,O,O,H)}}else return;const m=new(Hd(f)?Yd:Xd)(f,1);m.version=_;const g=r.get(u);g&&t.remove(g),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function p_(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function c(f,p,x){x!==0&&(i.drawElementsInstanced(n,p,r,f*o,x),e.update(p,n,x))}function h(f,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,x);let m=0;for(let g=0;g<x;g++)m+=p[g];e.update(m,n,1)}function u(f,p,x,_){if(x===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)c(f[g]/o,p[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,x);let g=0;for(let M=0;M<x;M++)g+=p[M];for(let M=0;M<_.length;M++)e.update(g,n,_[M])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function m_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function g_(i,t,e){const n=new WeakMap,s=new Ne;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let P=function(){O.dispose(),n.delete(a),a.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),x===!0&&(y=2),_===!0&&(y=3);let w=a.attributes.position.count*y,H=1;w>t.maxTextureSize&&(H=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const D=new Float32Array(w*H*4*u),O=new Gd(D,w,H,u);O.type=Wn,O.needsUpdate=!0;const G=y*4;for(let T=0;T<u;T++){const I=m[T],Y=g[T],Z=M[T],nt=w*H*4*T;for(let at=0;at<I.count;at++){const it=at*G;p===!0&&(s.fromBufferAttribute(I,at),D[nt+it+0]=s.x,D[nt+it+1]=s.y,D[nt+it+2]=s.z,D[nt+it+3]=0),x===!0&&(s.fromBufferAttribute(Y,at),D[nt+it+4]=s.x,D[nt+it+5]=s.y,D[nt+it+6]=s.z,D[nt+it+7]=0),_===!0&&(s.fromBufferAttribute(Z,at),D[nt+it+8]=s.x,D[nt+it+9]=s.y,D[nt+it+10]=s.z,D[nt+it+11]=Z.itemSize===4?s.w:1)}}f={count:u,texture:O,size:new gt(w,H)},n.set(a,f),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const x=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function x_(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Jd extends hn{constructor(t,e,n,s,r,o,a,l,c,h=Pr){if(h!==Pr&&h!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Pr&&(n=ps),n===void 0&&h===zr&&(n=Ur),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ln,this.minFilter=l!==void 0?l:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const $d=new hn,lf=new Jd(1,1),Qd=new Gd,tp=new ig,ep=new jd,hf=[],uf=[],ff=new Float32Array(16),df=new Float32Array(9),pf=new Float32Array(4);function Xr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=hf[s];if(r===void 0&&(r=new Float32Array(s),hf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function un(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function fn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ec(i,t){let e=uf[t];e===void 0&&(e=new Int32Array(t),uf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function __(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function v_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;i.uniform2fv(this.addr,t),fn(e,t)}}function M_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(un(e,t))return;i.uniform3fv(this.addr,t),fn(e,t)}}function y_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;i.uniform4fv(this.addr,t),fn(e,t)}}function S_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),fn(e,t)}else{if(un(e,n))return;pf.set(n),i.uniformMatrix2fv(this.addr,!1,pf),fn(e,n)}}function w_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),fn(e,t)}else{if(un(e,n))return;df.set(n),i.uniformMatrix3fv(this.addr,!1,df),fn(e,n)}}function b_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),fn(e,t)}else{if(un(e,n))return;ff.set(n),i.uniformMatrix4fv(this.addr,!1,ff),fn(e,n)}}function T_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function E_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;i.uniform2iv(this.addr,t),fn(e,t)}}function A_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;i.uniform3iv(this.addr,t),fn(e,t)}}function R_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;i.uniform4iv(this.addr,t),fn(e,t)}}function C_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function P_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;i.uniform2uiv(this.addr,t),fn(e,t)}}function L_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;i.uniform3uiv(this.addr,t),fn(e,t)}}function I_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;i.uniform4uiv(this.addr,t),fn(e,t)}}function D_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lf.compareFunction=kd,r=lf):r=$d,e.setTexture2D(t||r,s)}function N_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||tp,s)}function U_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ep,s)}function z_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Qd,s)}function O_(i){switch(i){case 5126:return __;case 35664:return v_;case 35665:return M_;case 35666:return y_;case 35674:return S_;case 35675:return w_;case 35676:return b_;case 5124:case 35670:return T_;case 35667:case 35671:return E_;case 35668:case 35672:return A_;case 35669:case 35673:return R_;case 5125:return C_;case 36294:return P_;case 36295:return L_;case 36296:return I_;case 35678:case 36198:case 36298:case 36306:case 35682:return D_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return z_}}function F_(i,t){i.uniform1fv(this.addr,t)}function B_(i,t){const e=Xr(t,this.size,2);i.uniform2fv(this.addr,e)}function k_(i,t){const e=Xr(t,this.size,3);i.uniform3fv(this.addr,e)}function H_(i,t){const e=Xr(t,this.size,4);i.uniform4fv(this.addr,e)}function V_(i,t){const e=Xr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function G_(i,t){const e=Xr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function W_(i,t){const e=Xr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function X_(i,t){i.uniform1iv(this.addr,t)}function Y_(i,t){i.uniform2iv(this.addr,t)}function q_(i,t){i.uniform3iv(this.addr,t)}function K_(i,t){i.uniform4iv(this.addr,t)}function j_(i,t){i.uniform1uiv(this.addr,t)}function Z_(i,t){i.uniform2uiv(this.addr,t)}function J_(i,t){i.uniform3uiv(this.addr,t)}function $_(i,t){i.uniform4uiv(this.addr,t)}function Q_(i,t,e){const n=this.cache,s=t.length,r=Ec(e,s);un(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||$d,r[o])}function tv(i,t,e){const n=this.cache,s=t.length,r=Ec(e,s);un(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||tp,r[o])}function ev(i,t,e){const n=this.cache,s=t.length,r=Ec(e,s);un(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ep,r[o])}function nv(i,t,e){const n=this.cache,s=t.length,r=Ec(e,s);un(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Qd,r[o])}function iv(i){switch(i){case 5126:return F_;case 35664:return B_;case 35665:return k_;case 35666:return H_;case 35674:return V_;case 35675:return G_;case 35676:return W_;case 5124:case 35670:return X_;case 35667:case 35671:return Y_;case 35668:case 35672:return q_;case 35669:case 35673:return K_;case 5125:return j_;case 36294:return Z_;case 36295:return J_;case 36296:return $_;case 35678:case 36198:case 36298:case 36306:case 35682:return Q_;case 35679:case 36299:case 36307:return tv;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return nv}}class sv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=O_(e.type)}}class rv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=iv(e.type)}}class ov{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const cl=/(\w+)(\])?(\[|\.)?/g;function mf(i,t){i.seq.push(t),i.map[t.id]=t}function av(i,t,e){const n=i.name,s=n.length;for(cl.lastIndex=0;;){const r=cl.exec(n),o=cl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){mf(e,c===void 0?new sv(a,i,t):new rv(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new ov(a),mf(e,u)),e=u}}}class tc{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);av(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function gf(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const cv=37297;let lv=0;function hv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function uv(i){const t=Ae.getPrimaries(Ae.workingColorSpace),e=Ae.getPrimaries(i);let n;switch(t===e?n="":t===lc&&e===cc?n="LinearDisplayP3ToLinearSRGB":t===cc&&e===lc&&(n="LinearSRGBToLinearDisplayP3"),i){case _n:case bc:return[n,"LinearTransferOETF"];case nn:case qh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function xf(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+hv(i.getShaderSource(t),o)}else return s}function fv(i,t){const e=uv(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function dv(i,t){let e;switch(t){case dm:e="Linear";break;case pm:e="Reinhard";break;case mm:e="OptimizedCineon";break;case gm:e="ACESFilmic";break;case _m:e="AgX";break;case vm:e="Neutral";break;case xm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function pv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(So).join(`
`)}function mv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function So(i){return i!==""}function _f(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(i){return i.replace(xv,vv)}const _v=new Map;function vv(i,t){let e=ge[t];if(e===void 0){const n=_v.get(t);if(n!==void 0)e=ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Mh(e)}const Mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mf(i){return i.replace(Mv,yv)}function yv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Sv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ad?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ni&&(t="SHADOWMAP_TYPE_VSM"),t}function wv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Dr:case Nr:t="ENVMAP_TYPE_CUBE";break;case Sc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Nr:t="ENVMAP_MODE_REFRACTION";break}return t}function Tv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bh:t="ENVMAP_BLENDING_MULTIPLY";break;case um:t="ENVMAP_BLENDING_MIX";break;case fm:t="ENVMAP_BLENDING_ADD";break}return t}function Ev(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Av(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Sv(e),c=wv(e),h=bv(e),u=Tv(e),f=Ev(e),p=pv(e),x=mv(r),_=s.createProgram();let m,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(So).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(So).join(`
`),g.length>0&&(g+=`
`)):(m=[yf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(So).join(`
`),g=[yf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fs?"#define TONE_MAPPING":"",e.toneMapping!==fs?ge.tonemapping_pars_fragment:"",e.toneMapping!==fs?dv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,fv("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(So).join(`
`)),o=Mh(o),o=_f(o,e),o=vf(o,e),a=Mh(a),a=_f(a,e),a=vf(a,e),o=Mf(o),a=Mf(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=M+m+o,w=M+g+a,H=gf(s,s.VERTEX_SHADER,y),D=gf(s,s.FRAGMENT_SHADER,w);s.attachShader(_,H),s.attachShader(_,D),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function O(I){if(i.debug.checkShaderErrors){const Y=s.getProgramInfoLog(_).trim(),Z=s.getShaderInfoLog(H).trim(),nt=s.getShaderInfoLog(D).trim();let at=!0,it=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,H,D);else{const ht=xf(s,H,"vertex"),J=xf(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+Y+`
`+ht+`
`+J)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(Z===""||nt==="")&&(it=!1);it&&(I.diagnostics={runnable:at,programLog:Y,vertexShader:{log:Z,prefix:m},fragmentShader:{log:nt,prefix:g}})}s.deleteShader(H),s.deleteShader(D),G=new tc(s,_),P=gv(s,_)}let G;this.getUniforms=function(){return G===void 0&&O(this),G};let P;this.getAttributes=function(){return P===void 0&&O(this),P};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(_,cv)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=H,this.fragmentShader=D,this}let Rv=0;class Cv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Pv(t),e.set(t,n)),n}}class Pv{constructor(t){this.id=Rv++,this.code=t,this.usedTimes=0}}function Lv(i,t,e,n,s,r,o){const a=new Zh,l=new Cv,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(P){return c.add(P),P===0?"uv":`uv${P}`}function m(P,T,I,Y,Z){const nt=Y.fog,at=Z.geometry,it=P.isMeshStandardMaterial?Y.environment:null,ht=(P.isMeshStandardMaterial?e:t).get(P.envMap||it),J=ht&&ht.mapping===Sc?ht.image.height:null,At=x[P.type];P.precision!==null&&(p=s.getMaxPrecision(P.precision),p!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",p,"instead."));const Ut=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,zt=Ut!==void 0?Ut.length:0;let Ot=0;at.morphAttributes.position!==void 0&&(Ot=1),at.morphAttributes.normal!==void 0&&(Ot=2),at.morphAttributes.color!==void 0&&(Ot=3);let ve,st,dt,Pt;if(At){const Ee=_i[At];ve=Ee.vertexShader,st=Ee.fragmentShader}else ve=P.vertexShader,st=P.fragmentShader,l.update(P),dt=l.getVertexShaderID(P),Pt=l.getFragmentShaderID(P);const wt=i.getRenderTarget(),re=Z.isInstancedMesh===!0,ie=Z.isBatchedMesh===!0,Zt=!!P.map,Re=!!P.matcap,k=!!ht,Me=!!P.aoMap,pe=!!P.lightMap,oe=!!P.bumpMap,Ft=!!P.normalMap,we=!!P.displacementMap,Tt=!!P.emissiveMap,Wt=!!P.metalnessMap,F=!!P.roughnessMap,R=P.anisotropy>0,et=P.clearcoat>0,pt=P.dispersion>0,xt=P.iridescence>0,ot=P.sheen>0,Vt=P.transmission>0,Et=R&&!!P.anisotropyMap,Dt=et&&!!P.clearcoatMap,se=et&&!!P.clearcoatNormalMap,vt=et&&!!P.clearcoatRoughnessMap,bt=xt&&!!P.iridescenceMap,ce=xt&&!!P.iridescenceThicknessMap,Xt=ot&&!!P.sheenColorMap,Bt=ot&&!!P.sheenRoughnessMap,Kt=!!P.specularMap,ae=!!P.specularColorMap,te=!!P.specularIntensityMap,X=Vt&&!!P.transmissionMap,Mt=Vt&&!!P.thicknessMap,ct=!!P.gradientMap,ut=!!P.alphaMap,yt=P.alphaTest>0,Jt=!!P.alphaHash,Se=!!P.extensions;let Ke=fs;P.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(Ke=i.toneMapping);const an={shaderID:At,shaderType:P.type,shaderName:P.name,vertexShader:ve,fragmentShader:st,defines:P.defines,customVertexShaderID:dt,customFragmentShaderID:Pt,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:p,batching:ie,batchingColor:ie&&Z._colorsTexture!==null,instancing:re,instancingColor:re&&Z.instanceColor!==null,instancingMorph:re&&Z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:wt===null?i.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:_n,alphaToCoverage:!!P.alphaToCoverage,map:Zt,matcap:Re,envMap:k,envMapMode:k&&ht.mapping,envMapCubeUVHeight:J,aoMap:Me,lightMap:pe,bumpMap:oe,normalMap:Ft,displacementMap:f&&we,emissiveMap:Tt,normalMapObjectSpace:Ft&&P.normalMapType===Tm,normalMapTangentSpace:Ft&&P.normalMapType===Yh,metalnessMap:Wt,roughnessMap:F,anisotropy:R,anisotropyMap:Et,clearcoat:et,clearcoatMap:Dt,clearcoatNormalMap:se,clearcoatRoughnessMap:vt,dispersion:pt,iridescence:xt,iridescenceMap:bt,iridescenceThicknessMap:ce,sheen:ot,sheenColorMap:Xt,sheenRoughnessMap:Bt,specularMap:Kt,specularColorMap:ae,specularIntensityMap:te,transmission:Vt,transmissionMap:X,thicknessMap:Mt,gradientMap:ct,opaque:P.transparent===!1&&P.blending===Cr&&P.alphaToCoverage===!1,alphaMap:ut,alphaTest:yt,alphaHash:Jt,combine:P.combine,mapUv:Zt&&_(P.map.channel),aoMapUv:Me&&_(P.aoMap.channel),lightMapUv:pe&&_(P.lightMap.channel),bumpMapUv:oe&&_(P.bumpMap.channel),normalMapUv:Ft&&_(P.normalMap.channel),displacementMapUv:we&&_(P.displacementMap.channel),emissiveMapUv:Tt&&_(P.emissiveMap.channel),metalnessMapUv:Wt&&_(P.metalnessMap.channel),roughnessMapUv:F&&_(P.roughnessMap.channel),anisotropyMapUv:Et&&_(P.anisotropyMap.channel),clearcoatMapUv:Dt&&_(P.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&_(P.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&_(P.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&_(P.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&_(P.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&_(P.sheenRoughnessMap.channel),specularMapUv:Kt&&_(P.specularMap.channel),specularColorMapUv:ae&&_(P.specularColorMap.channel),specularIntensityMapUv:te&&_(P.specularIntensityMap.channel),transmissionMapUv:X&&_(P.transmissionMap.channel),thicknessMapUv:Mt&&_(P.thicknessMap.channel),alphaMapUv:ut&&_(P.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&(Ft||R),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!at.attributes.uv&&(Zt||ut),fog:!!nt,useFog:P.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Z.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:Ot,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Zt&&P.map.isVideoTexture===!0&&Ae.getTransfer(P.map.colorSpace)===We,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===He,flipSided:P.side===Bn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Se&&P.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&P.extensions.multiDraw===!0||ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return an.vertexUv1s=c.has(1),an.vertexUv2s=c.has(2),an.vertexUv3s=c.has(3),c.clear(),an}function g(P){const T=[];if(P.shaderID?T.push(P.shaderID):(T.push(P.customVertexShaderID),T.push(P.customFragmentShaderID)),P.defines!==void 0)for(const I in P.defines)T.push(I),T.push(P.defines[I]);return P.isRawShaderMaterial===!1&&(M(T,P),y(T,P),T.push(i.outputColorSpace)),T.push(P.customProgramCacheKey),T.join()}function M(P,T){P.push(T.precision),P.push(T.outputColorSpace),P.push(T.envMapMode),P.push(T.envMapCubeUVHeight),P.push(T.mapUv),P.push(T.alphaMapUv),P.push(T.lightMapUv),P.push(T.aoMapUv),P.push(T.bumpMapUv),P.push(T.normalMapUv),P.push(T.displacementMapUv),P.push(T.emissiveMapUv),P.push(T.metalnessMapUv),P.push(T.roughnessMapUv),P.push(T.anisotropyMapUv),P.push(T.clearcoatMapUv),P.push(T.clearcoatNormalMapUv),P.push(T.clearcoatRoughnessMapUv),P.push(T.iridescenceMapUv),P.push(T.iridescenceThicknessMapUv),P.push(T.sheenColorMapUv),P.push(T.sheenRoughnessMapUv),P.push(T.specularMapUv),P.push(T.specularColorMapUv),P.push(T.specularIntensityMapUv),P.push(T.transmissionMapUv),P.push(T.thicknessMapUv),P.push(T.combine),P.push(T.fogExp2),P.push(T.sizeAttenuation),P.push(T.morphTargetsCount),P.push(T.morphAttributeCount),P.push(T.numDirLights),P.push(T.numPointLights),P.push(T.numSpotLights),P.push(T.numSpotLightMaps),P.push(T.numHemiLights),P.push(T.numRectAreaLights),P.push(T.numDirLightShadows),P.push(T.numPointLightShadows),P.push(T.numSpotLightShadows),P.push(T.numSpotLightShadowsWithMaps),P.push(T.numLightProbes),P.push(T.shadowMapType),P.push(T.toneMapping),P.push(T.numClippingPlanes),P.push(T.numClipIntersection),P.push(T.depthPacking)}function y(P,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),P.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.doubleSided&&a.enable(10),T.flipSided&&a.enable(11),T.useDepthPacking&&a.enable(12),T.dithering&&a.enable(13),T.transmission&&a.enable(14),T.sheen&&a.enable(15),T.opaque&&a.enable(16),T.pointsUvs&&a.enable(17),T.decodeVideoTexture&&a.enable(18),T.alphaToCoverage&&a.enable(19),P.push(a.mask)}function w(P){const T=x[P.type];let I;if(T){const Y=_i[T];I=mg.clone(Y.uniforms)}else I=P.uniforms;return I}function H(P,T){let I;for(let Y=0,Z=h.length;Y<Z;Y++){const nt=h[Y];if(nt.cacheKey===T){I=nt,++I.usedTimes;break}}return I===void 0&&(I=new Av(i,T,P,r),h.push(I)),I}function D(P){if(--P.usedTimes===0){const T=h.indexOf(P);h[T]=h[h.length-1],h.pop(),P.destroy()}}function O(P){l.remove(P)}function G(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:w,acquireProgram:H,releaseProgram:D,releaseShaderCache:O,programs:h,dispose:G}}function Iv(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Dv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Sf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function wf(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,p,x,_,m){let g=i[t];return g===void 0?(g={id:u.id,object:u,geometry:f,material:p,groupOrder:x,renderOrder:u.renderOrder,z:_,group:m},i[t]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=p,g.groupOrder=x,g.renderOrder=u.renderOrder,g.z=_,g.group=m),t++,g}function a(u,f,p,x,_,m){const g=o(u,f,p,x,_,m);p.transmission>0?n.push(g):p.transparent===!0?s.push(g):e.push(g)}function l(u,f,p,x,_,m){const g=o(u,f,p,x,_,m);p.transmission>0?n.unshift(g):p.transparent===!0?s.unshift(g):e.unshift(g)}function c(u,f){e.length>1&&e.sort(u||Dv),n.length>1&&n.sort(f||Sf),s.length>1&&s.sort(f||Sf)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Nv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new wf,i.set(n,[o])):s>=r.length?(o=new wf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Uv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new qt};break;case"SpotLight":e={position:new C,direction:new C,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function zv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Ov=0;function Fv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Bv(i){const t=new Uv,e=zv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const s=new C,r=new Qt,o=new Qt;function a(c){let h=0,u=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let p=0,x=0,_=0,m=0,g=0,M=0,y=0,w=0,H=0,D=0,O=0;c.sort(Fv);for(let P=0,T=c.length;P<T;P++){const I=c[P],Y=I.color,Z=I.intensity,nt=I.distance,at=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=Y.r*Z,u+=Y.g*Z,f+=Y.b*Z;else if(I.isLightProbe){for(let it=0;it<9;it++)n.probe[it].addScaledVector(I.sh.coefficients[it],Z);O++}else if(I.isDirectionalLight){const it=t.get(I);if(it.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ht=I.shadow,J=e.get(I);J.shadowIntensity=ht.intensity,J.shadowBias=ht.bias,J.shadowNormalBias=ht.normalBias,J.shadowRadius=ht.radius,J.shadowMapSize=ht.mapSize,n.directionalShadow[p]=J,n.directionalShadowMap[p]=at,n.directionalShadowMatrix[p]=I.shadow.matrix,M++}n.directional[p]=it,p++}else if(I.isSpotLight){const it=t.get(I);it.position.setFromMatrixPosition(I.matrixWorld),it.color.copy(Y).multiplyScalar(Z),it.distance=nt,it.coneCos=Math.cos(I.angle),it.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),it.decay=I.decay,n.spot[_]=it;const ht=I.shadow;if(I.map&&(n.spotLightMap[H]=I.map,H++,ht.updateMatrices(I),I.castShadow&&D++),n.spotLightMatrix[_]=ht.matrix,I.castShadow){const J=e.get(I);J.shadowIntensity=ht.intensity,J.shadowBias=ht.bias,J.shadowNormalBias=ht.normalBias,J.shadowRadius=ht.radius,J.shadowMapSize=ht.mapSize,n.spotShadow[_]=J,n.spotShadowMap[_]=at,w++}_++}else if(I.isRectAreaLight){const it=t.get(I);it.color.copy(Y).multiplyScalar(Z),it.halfWidth.set(I.width*.5,0,0),it.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=it,m++}else if(I.isPointLight){const it=t.get(I);if(it.color.copy(I.color).multiplyScalar(I.intensity),it.distance=I.distance,it.decay=I.decay,I.castShadow){const ht=I.shadow,J=e.get(I);J.shadowIntensity=ht.intensity,J.shadowBias=ht.bias,J.shadowNormalBias=ht.normalBias,J.shadowRadius=ht.radius,J.shadowMapSize=ht.mapSize,J.shadowCameraNear=ht.camera.near,J.shadowCameraFar=ht.camera.far,n.pointShadow[x]=J,n.pointShadowMap[x]=at,n.pointShadowMatrix[x]=I.shadow.matrix,y++}n.point[x]=it,x++}else if(I.isHemisphereLight){const it=t.get(I);it.skyColor.copy(I.color).multiplyScalar(Z),it.groundColor.copy(I.groundColor).multiplyScalar(Z),n.hemi[g]=it,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const G=n.hash;(G.directionalLength!==p||G.pointLength!==x||G.spotLength!==_||G.rectAreaLength!==m||G.hemiLength!==g||G.numDirectionalShadows!==M||G.numPointShadows!==y||G.numSpotShadows!==w||G.numSpotMaps!==H||G.numLightProbes!==O)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=x,n.hemi.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=w+H-D,n.spotLightMap.length=H,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=O,G.directionalLength=p,G.pointLength=x,G.spotLength=_,G.rectAreaLength=m,G.hemiLength=g,G.numDirectionalShadows=M,G.numPointShadows=y,G.numSpotShadows=w,G.numSpotMaps=H,G.numLightProbes=O,n.version=Ov++)}function l(c,h){let u=0,f=0,p=0,x=0,_=0;const m=h.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){const y=c[g];if(y.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(y.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const w=n.rectArea[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const w=n.hemi[_];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function bf(i){const t=new Bv(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function kv(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new bf(i),t.set(s,[a])):r>=o.length?(a=new bf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Hv extends Yn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Vv extends Yn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Xv(i,t,e){let n=new Tc;const s=new gt,r=new gt,o=new Ne,a=new Hv({depthPacking:bm}),l=new Vv,c={},h=e.maxTextureSize,u={[Xi]:Bn,[Bn]:Xi,[He]:He},f=new ms({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:Gv,fragmentShader:Wv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new _e;x.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ft(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ad;let g=this.type;this.render=function(D,O,G){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const P=i.getRenderTarget(),T=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(us),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const Z=g!==Ni&&this.type===Ni,nt=g===Ni&&this.type!==Ni;for(let at=0,it=D.length;at<it;at++){const ht=D[at],J=ht.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",ht,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);const At=J.getFrameExtents();if(s.multiply(At),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/At.x),s.x=r.x*At.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/At.y),s.y=r.y*At.y,J.mapSize.y=r.y)),J.map===null||Z===!0||nt===!0){const zt=this.type!==Ni?{minFilter:Ln,magFilter:Ln}:{};J.map!==null&&J.map.dispose(),J.map=new Ys(s.x,s.y,zt),J.map.texture.name=ht.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const Ut=J.getViewportCount();for(let zt=0;zt<Ut;zt++){const Ot=J.getViewport(zt);o.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),Y.viewport(o),J.updateMatrices(ht,zt),n=J.getFrustum(),w(O,G,J.camera,ht,this.type)}J.isPointLightShadow!==!0&&this.type===Ni&&M(J,G),J.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(P,T,I)};function M(D,O){const G=t.update(_);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Ys(s.x,s.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(O,null,G,f,_,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(O,null,G,p,_,null)}function y(D,O,G,P){let T=null;const I=G.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(I!==void 0)T=I;else if(T=G.isPointLight===!0?l:a,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const Y=T.uuid,Z=O.uuid;let nt=c[Y];nt===void 0&&(nt={},c[Y]=nt);let at=nt[Z];at===void 0&&(at=T.clone(),nt[Z]=at,O.addEventListener("dispose",H)),T=at}if(T.visible=O.visible,T.wireframe=O.wireframe,P===Ni?T.side=O.shadowSide!==null?O.shadowSide:O.side:T.side=O.shadowSide!==null?O.shadowSide:u[O.side],T.alphaMap=O.alphaMap,T.alphaTest=O.alphaTest,T.map=O.map,T.clipShadows=O.clipShadows,T.clippingPlanes=O.clippingPlanes,T.clipIntersection=O.clipIntersection,T.displacementMap=O.displacementMap,T.displacementScale=O.displacementScale,T.displacementBias=O.displacementBias,T.wireframeLinewidth=O.wireframeLinewidth,T.linewidth=O.linewidth,G.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Y=i.properties.get(T);Y.light=G}return T}function w(D,O,G,P,T){if(D.visible===!1)return;if(D.layers.test(O.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&T===Ni)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,D.matrixWorld);const Z=t.update(D),nt=D.material;if(Array.isArray(nt)){const at=Z.groups;for(let it=0,ht=at.length;it<ht;it++){const J=at[it],At=nt[J.materialIndex];if(At&&At.visible){const Ut=y(D,At,P,T);D.onBeforeShadow(i,D,O,G,Z,Ut,J),i.renderBufferDirect(G,null,Z,Ut,D,J),D.onAfterShadow(i,D,O,G,Z,Ut,J)}}}else if(nt.visible){const at=y(D,nt,P,T);D.onBeforeShadow(i,D,O,G,Z,at,null),i.renderBufferDirect(G,null,Z,at,D,null),D.onAfterShadow(i,D,O,G,Z,at,null)}}const Y=D.children;for(let Z=0,nt=Y.length;Z<nt;Z++)w(Y[Z],O,G,P,T)}function H(D){D.target.removeEventListener("dispose",H);for(const G in c){const P=c[G],T=D.target.uuid;T in P&&(P[T].dispose(),delete P[T])}}}function Yv(i){function t(){let X=!1;const Mt=new Ne;let ct=null;const ut=new Ne(0,0,0,0);return{setMask:function(yt){ct!==yt&&!X&&(i.colorMask(yt,yt,yt,yt),ct=yt)},setLocked:function(yt){X=yt},setClear:function(yt,Jt,Se,Ke,an){an===!0&&(yt*=Ke,Jt*=Ke,Se*=Ke),Mt.set(yt,Jt,Se,Ke),ut.equals(Mt)===!1&&(i.clearColor(yt,Jt,Se,Ke),ut.copy(Mt))},reset:function(){X=!1,ct=null,ut.set(-1,0,0,0)}}}function e(){let X=!1,Mt=null,ct=null,ut=null;return{setTest:function(yt){yt?Pt(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(yt){Mt!==yt&&!X&&(i.depthMask(yt),Mt=yt)},setFunc:function(yt){if(ct!==yt){switch(yt){case sm:i.depthFunc(i.NEVER);break;case rm:i.depthFunc(i.ALWAYS);break;case om:i.depthFunc(i.LESS);break;case rc:i.depthFunc(i.LEQUAL);break;case am:i.depthFunc(i.EQUAL);break;case cm:i.depthFunc(i.GEQUAL);break;case lm:i.depthFunc(i.GREATER);break;case hm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=yt}},setLocked:function(yt){X=yt},setClear:function(yt){ut!==yt&&(i.clearDepth(yt),ut=yt)},reset:function(){X=!1,Mt=null,ct=null,ut=null}}}function n(){let X=!1,Mt=null,ct=null,ut=null,yt=null,Jt=null,Se=null,Ke=null,an=null;return{setTest:function(Ee){X||(Ee?Pt(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(Ee){Mt!==Ee&&!X&&(i.stencilMask(Ee),Mt=Ee)},setFunc:function(Ee,qn,Kn){(ct!==Ee||ut!==qn||yt!==Kn)&&(i.stencilFunc(Ee,qn,Kn),ct=Ee,ut=qn,yt=Kn)},setOp:function(Ee,qn,Kn){(Jt!==Ee||Se!==qn||Ke!==Kn)&&(i.stencilOp(Ee,qn,Kn),Jt=Ee,Se=qn,Ke=Kn)},setLocked:function(Ee){X=Ee},setClear:function(Ee){an!==Ee&&(i.clearStencil(Ee),an=Ee)},reset:function(){X=!1,Mt=null,ct=null,ut=null,yt=null,Jt=null,Se=null,Ke=null,an=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],p=null,x=!1,_=null,m=null,g=null,M=null,y=null,w=null,H=null,D=new qt(0,0,0),O=0,G=!1,P=null,T=null,I=null,Y=null,Z=null;const nt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let at=!1,it=0;const ht=i.getParameter(i.VERSION);ht.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(ht)[1]),at=it>=1):ht.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(ht)[1]),at=it>=2);let J=null,At={};const Ut=i.getParameter(i.SCISSOR_BOX),zt=i.getParameter(i.VIEWPORT),Ot=new Ne().fromArray(Ut),ve=new Ne().fromArray(zt);function st(X,Mt,ct,ut){const yt=new Uint8Array(4),Jt=i.createTexture();i.bindTexture(X,Jt),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Se=0;Se<ct;Se++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(Mt+Se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return Jt}const dt={};dt[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),dt[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),dt[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Pt(i.DEPTH_TEST),r.setFunc(rc),oe(!1),Ft(Eu),Pt(i.CULL_FACE),Me(us);function Pt(X){c[X]!==!0&&(i.enable(X),c[X]=!0)}function wt(X){c[X]!==!1&&(i.disable(X),c[X]=!1)}function re(X,Mt){return h[X]!==Mt?(i.bindFramebuffer(X,Mt),h[X]=Mt,X===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Mt),X===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function ie(X,Mt){let ct=f,ut=!1;if(X){ct=u.get(Mt),ct===void 0&&(ct=[],u.set(Mt,ct));const yt=X.textures;if(ct.length!==yt.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let Jt=0,Se=yt.length;Jt<Se;Jt++)ct[Jt]=i.COLOR_ATTACHMENT0+Jt;ct.length=yt.length,ut=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,ut=!0);ut&&i.drawBuffers(ct)}function Zt(X){return p!==X?(i.useProgram(X),p=X,!0):!1}const Re={[Fs]:i.FUNC_ADD,[Hp]:i.FUNC_SUBTRACT,[Vp]:i.FUNC_REVERSE_SUBTRACT};Re[Gp]=i.MIN,Re[Wp]=i.MAX;const k={[Xp]:i.ZERO,[Yp]:i.ONE,[qp]:i.SRC_COLOR,[Vl]:i.SRC_ALPHA,[Qp]:i.SRC_ALPHA_SATURATE,[Jp]:i.DST_COLOR,[jp]:i.DST_ALPHA,[Kp]:i.ONE_MINUS_SRC_COLOR,[Gl]:i.ONE_MINUS_SRC_ALPHA,[$p]:i.ONE_MINUS_DST_COLOR,[Zp]:i.ONE_MINUS_DST_ALPHA,[tm]:i.CONSTANT_COLOR,[em]:i.ONE_MINUS_CONSTANT_COLOR,[nm]:i.CONSTANT_ALPHA,[im]:i.ONE_MINUS_CONSTANT_ALPHA};function Me(X,Mt,ct,ut,yt,Jt,Se,Ke,an,Ee){if(X===us){x===!0&&(wt(i.BLEND),x=!1);return}if(x===!1&&(Pt(i.BLEND),x=!0),X!==kp){if(X!==_||Ee!==G){if((m!==Fs||y!==Fs)&&(i.blendEquation(i.FUNC_ADD),m=Fs,y=Fs),Ee)switch(X){case Cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sc:i.blendFunc(i.ONE,i.ONE);break;case Au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ru:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ru:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}g=null,M=null,w=null,H=null,D.set(0,0,0),O=0,_=X,G=Ee}return}yt=yt||Mt,Jt=Jt||ct,Se=Se||ut,(Mt!==m||yt!==y)&&(i.blendEquationSeparate(Re[Mt],Re[yt]),m=Mt,y=yt),(ct!==g||ut!==M||Jt!==w||Se!==H)&&(i.blendFuncSeparate(k[ct],k[ut],k[Jt],k[Se]),g=ct,M=ut,w=Jt,H=Se),(Ke.equals(D)===!1||an!==O)&&(i.blendColor(Ke.r,Ke.g,Ke.b,an),D.copy(Ke),O=an),_=X,G=!1}function pe(X,Mt){X.side===He?wt(i.CULL_FACE):Pt(i.CULL_FACE);let ct=X.side===Bn;Mt&&(ct=!ct),oe(ct),X.blending===Cr&&X.transparent===!1?Me(us):Me(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),r.setFunc(X.depthFunc),r.setTest(X.depthTest),r.setMask(X.depthWrite),s.setMask(X.colorWrite);const ut=X.stencilWrite;o.setTest(ut),ut&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Tt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Pt(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function oe(X){P!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),P=X)}function Ft(X){X!==Op?(Pt(i.CULL_FACE),X!==T&&(X===Eu?i.cullFace(i.BACK):X===Fp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),T=X}function we(X){X!==I&&(at&&i.lineWidth(X),I=X)}function Tt(X,Mt,ct){X?(Pt(i.POLYGON_OFFSET_FILL),(Y!==Mt||Z!==ct)&&(i.polygonOffset(Mt,ct),Y=Mt,Z=ct)):wt(i.POLYGON_OFFSET_FILL)}function Wt(X){X?Pt(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function F(X){X===void 0&&(X=i.TEXTURE0+nt-1),J!==X&&(i.activeTexture(X),J=X)}function R(X,Mt,ct){ct===void 0&&(J===null?ct=i.TEXTURE0+nt-1:ct=J);let ut=At[ct];ut===void 0&&(ut={type:void 0,texture:void 0},At[ct]=ut),(ut.type!==X||ut.texture!==Mt)&&(J!==ct&&(i.activeTexture(ct),J=ct),i.bindTexture(X,Mt||dt[X]),ut.type=X,ut.texture=Mt)}function et(){const X=At[J];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function pt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ot(){try{i.texSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Vt(){try{i.texSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Et(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function se(){try{i.texStorage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function vt(){try{i.texStorage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function bt(){try{i.texImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ce(){try{i.texImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xt(X){Ot.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),Ot.copy(X))}function Bt(X){ve.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),ve.copy(X))}function Kt(X,Mt){let ct=l.get(Mt);ct===void 0&&(ct=new WeakMap,l.set(Mt,ct));let ut=ct.get(X);ut===void 0&&(ut=i.getUniformBlockIndex(Mt,X.name),ct.set(X,ut))}function ae(X,Mt){const ut=l.get(Mt).get(X);a.get(Mt)!==ut&&(i.uniformBlockBinding(Mt,ut,X.__bindingPointIndex),a.set(Mt,ut))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},J=null,At={},h={},u=new WeakMap,f=[],p=null,x=!1,_=null,m=null,g=null,M=null,y=null,w=null,H=null,D=new qt(0,0,0),O=0,G=!1,P=null,T=null,I=null,Y=null,Z=null,Ot.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Pt,disable:wt,bindFramebuffer:re,drawBuffers:ie,useProgram:Zt,setBlending:Me,setMaterial:pe,setFlipSided:oe,setCullFace:Ft,setLineWidth:we,setPolygonOffset:Tt,setScissorTest:Wt,activeTexture:F,bindTexture:R,unbindTexture:et,compressedTexImage2D:pt,compressedTexImage3D:xt,texImage2D:bt,texImage3D:ce,updateUBOMapping:Kt,uniformBlockBinding:ae,texStorage2D:se,texStorage3D:vt,texSubImage2D:ot,texSubImage3D:Vt,compressedTexSubImage2D:Et,compressedTexSubImage3D:Dt,scissor:Xt,viewport:Bt,reset:te}}function Tf(i,t,e,n){const s=qv(n);switch(e){case Dd:return i*t;case Ud:return i*t;case zd:return i*t*2;case Gh:return i*t/s.components*s.byteLength;case wc:return i*t/s.components*s.byteLength;case Od:return i*t*2/s.components*s.byteLength;case Wh:return i*t*2/s.components*s.byteLength;case Nd:return i*t*3/s.components*s.byteLength;case zn:return i*t*4/s.components*s.byteLength;case Xh:return i*t*4/s.components*s.byteLength;case ja:case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ja:case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ql:case jl:return Math.max(i,16)*Math.max(t,8)/4;case Yl:case Kl:return Math.max(i,8)*Math.max(t,8)/2;case Zl:case Jl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $l:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case th:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case eh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case nh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ih:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case sh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case rh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case oh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ah:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ch:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case lh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case hh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case uh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Qa:case dh:case ph:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Fd:case mh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case gh:case xh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qv(i){switch(i){case Yi:case Pd:return{byteLength:1,components:1};case ko:case Ld:case Jo:return{byteLength:2,components:1};case Hh:case Vh:return{byteLength:2,components:4};case ps:case kh:case Wn:return{byteLength:4,components:1};case Id:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Kv(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(F,R){return p?new OffscreenCanvas(F,R):Go("canvas")}function _(F,R,et){let pt=1;const xt=Wt(F);if((xt.width>et||xt.height>et)&&(pt=et/Math.max(xt.width,xt.height)),pt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ot=Math.floor(pt*xt.width),Vt=Math.floor(pt*xt.height);u===void 0&&(u=x(ot,Vt));const Et=R?x(ot,Vt):u;return Et.width=ot,Et.height=Vt,Et.getContext("2d").drawImage(F,0,0,ot,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ot+"x"+Vt+")."),Et}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),F;return F}function m(F){return F.generateMipmaps&&F.minFilter!==Ln&&F.minFilter!==Gn}function g(F){i.generateMipmap(F)}function M(F,R,et,pt,xt=!1){if(F!==null){if(i[F]!==void 0)return i[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ot=R;if(R===i.RED&&(et===i.FLOAT&&(ot=i.R32F),et===i.HALF_FLOAT&&(ot=i.R16F),et===i.UNSIGNED_BYTE&&(ot=i.R8)),R===i.RED_INTEGER&&(et===i.UNSIGNED_BYTE&&(ot=i.R8UI),et===i.UNSIGNED_SHORT&&(ot=i.R16UI),et===i.UNSIGNED_INT&&(ot=i.R32UI),et===i.BYTE&&(ot=i.R8I),et===i.SHORT&&(ot=i.R16I),et===i.INT&&(ot=i.R32I)),R===i.RG&&(et===i.FLOAT&&(ot=i.RG32F),et===i.HALF_FLOAT&&(ot=i.RG16F),et===i.UNSIGNED_BYTE&&(ot=i.RG8)),R===i.RG_INTEGER&&(et===i.UNSIGNED_BYTE&&(ot=i.RG8UI),et===i.UNSIGNED_SHORT&&(ot=i.RG16UI),et===i.UNSIGNED_INT&&(ot=i.RG32UI),et===i.BYTE&&(ot=i.RG8I),et===i.SHORT&&(ot=i.RG16I),et===i.INT&&(ot=i.RG32I)),R===i.RGB&&et===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),R===i.RGBA){const Vt=xt?ac:Ae.getTransfer(pt);et===i.FLOAT&&(ot=i.RGBA32F),et===i.HALF_FLOAT&&(ot=i.RGBA16F),et===i.UNSIGNED_BYTE&&(ot=Vt===We?i.SRGB8_ALPHA8:i.RGBA8),et===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),et===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function y(F,R){let et;return F?R===null||R===ps||R===Ur?et=i.DEPTH24_STENCIL8:R===Wn?et=i.DEPTH32F_STENCIL8:R===ko&&(et=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ps||R===Ur?et=i.DEPTH_COMPONENT24:R===Wn?et=i.DEPTH_COMPONENT32F:R===ko&&(et=i.DEPTH_COMPONENT16),et}function w(F,R){return m(F)===!0||F.isFramebufferTexture&&F.minFilter!==Ln&&F.minFilter!==Gn?Math.log2(Math.max(R.width,R.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?R.mipmaps.length:1}function H(F){const R=F.target;R.removeEventListener("dispose",H),O(R),R.isVideoTexture&&h.delete(R)}function D(F){const R=F.target;R.removeEventListener("dispose",D),P(R)}function O(F){const R=n.get(F);if(R.__webglInit===void 0)return;const et=F.source,pt=f.get(et);if(pt){const xt=pt[R.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&G(F),Object.keys(pt).length===0&&f.delete(et)}n.remove(F)}function G(F){const R=n.get(F);i.deleteTexture(R.__webglTexture);const et=F.source,pt=f.get(et);delete pt[R.__cacheKey],o.memory.textures--}function P(F){const R=n.get(F);if(F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(R.__webglFramebuffer[pt]))for(let xt=0;xt<R.__webglFramebuffer[pt].length;xt++)i.deleteFramebuffer(R.__webglFramebuffer[pt][xt]);else i.deleteFramebuffer(R.__webglFramebuffer[pt]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[pt])}else{if(Array.isArray(R.__webglFramebuffer))for(let pt=0;pt<R.__webglFramebuffer.length;pt++)i.deleteFramebuffer(R.__webglFramebuffer[pt]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let pt=0;pt<R.__webglColorRenderbuffer.length;pt++)R.__webglColorRenderbuffer[pt]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[pt]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const et=F.textures;for(let pt=0,xt=et.length;pt<xt;pt++){const ot=n.get(et[pt]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),o.memory.textures--),n.remove(et[pt])}n.remove(F)}let T=0;function I(){T=0}function Y(){const F=T;return F>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),T+=1,F}function Z(F){const R=[];return R.push(F.wrapS),R.push(F.wrapT),R.push(F.wrapR||0),R.push(F.magFilter),R.push(F.minFilter),R.push(F.anisotropy),R.push(F.internalFormat),R.push(F.format),R.push(F.type),R.push(F.generateMipmaps),R.push(F.premultiplyAlpha),R.push(F.flipY),R.push(F.unpackAlignment),R.push(F.colorSpace),R.join()}function nt(F,R){const et=n.get(F);if(F.isVideoTexture&&we(F),F.isRenderTargetTexture===!1&&F.version>0&&et.__version!==F.version){const pt=F.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(et,F,R);return}}e.bindTexture(i.TEXTURE_2D,et.__webglTexture,i.TEXTURE0+R)}function at(F,R){const et=n.get(F);if(F.version>0&&et.__version!==F.version){ve(et,F,R);return}e.bindTexture(i.TEXTURE_2D_ARRAY,et.__webglTexture,i.TEXTURE0+R)}function it(F,R){const et=n.get(F);if(F.version>0&&et.__version!==F.version){ve(et,F,R);return}e.bindTexture(i.TEXTURE_3D,et.__webglTexture,i.TEXTURE0+R)}function ht(F,R){const et=n.get(F);if(F.version>0&&et.__version!==F.version){st(et,F,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture,i.TEXTURE0+R)}const J={[Mi]:i.REPEAT,[cs]:i.CLAMP_TO_EDGE,[oc]:i.MIRRORED_REPEAT},At={[Ln]:i.NEAREST,[Cd]:i.NEAREST_MIPMAP_NEAREST,[yo]:i.NEAREST_MIPMAP_LINEAR,[Gn]:i.LINEAR,[Ka]:i.LINEAR_MIPMAP_NEAREST,[Hi]:i.LINEAR_MIPMAP_LINEAR},Ut={[Em]:i.NEVER,[Im]:i.ALWAYS,[Am]:i.LESS,[kd]:i.LEQUAL,[Rm]:i.EQUAL,[Lm]:i.GEQUAL,[Cm]:i.GREATER,[Pm]:i.NOTEQUAL};function zt(F,R){if(R.type===Wn&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===Gn||R.magFilter===Ka||R.magFilter===yo||R.magFilter===Hi||R.minFilter===Gn||R.minFilter===Ka||R.minFilter===yo||R.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,J[R.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,J[R.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,J[R.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,At[R.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,At[R.minFilter]),R.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,Ut[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Ln||R.minFilter!==yo&&R.minFilter!==Hi||R.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");i.texParameterf(F,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function Ot(F,R){let et=!1;F.__webglInit===void 0&&(F.__webglInit=!0,R.addEventListener("dispose",H));const pt=R.source;let xt=f.get(pt);xt===void 0&&(xt={},f.set(pt,xt));const ot=Z(R);if(ot!==F.__cacheKey){xt[ot]===void 0&&(xt[ot]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,et=!0),xt[ot].usedTimes++;const Vt=xt[F.__cacheKey];Vt!==void 0&&(xt[F.__cacheKey].usedTimes--,Vt.usedTimes===0&&G(R)),F.__cacheKey=ot,F.__webglTexture=xt[ot].texture}return et}function ve(F,R,et){let pt=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(pt=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(pt=i.TEXTURE_3D);const xt=Ot(F,R),ot=R.source;e.bindTexture(pt,F.__webglTexture,i.TEXTURE0+et);const Vt=n.get(ot);if(ot.version!==Vt.__version||xt===!0){e.activeTexture(i.TEXTURE0+et);const Et=Ae.getPrimaries(Ae.workingColorSpace),Dt=R.colorSpace===os?null:Ae.getPrimaries(R.colorSpace),se=R.colorSpace===os||Et===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let vt=_(R.image,!1,s.maxTextureSize);vt=Tt(R,vt);const bt=r.convert(R.format,R.colorSpace),ce=r.convert(R.type);let Xt=M(R.internalFormat,bt,ce,R.colorSpace,R.isVideoTexture);zt(pt,R);let Bt;const Kt=R.mipmaps,ae=R.isVideoTexture!==!0,te=Vt.__version===void 0||xt===!0,X=ot.dataReady,Mt=w(R,vt);if(R.isDepthTexture)Xt=y(R.format===zr,R.type),te&&(ae?e.texStorage2D(i.TEXTURE_2D,1,Xt,vt.width,vt.height):e.texImage2D(i.TEXTURE_2D,0,Xt,vt.width,vt.height,0,bt,ce,null));else if(R.isDataTexture)if(Kt.length>0){ae&&te&&e.texStorage2D(i.TEXTURE_2D,Mt,Xt,Kt[0].width,Kt[0].height);for(let ct=0,ut=Kt.length;ct<ut;ct++)Bt=Kt[ct],ae?X&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Bt.width,Bt.height,bt,ce,Bt.data):e.texImage2D(i.TEXTURE_2D,ct,Xt,Bt.width,Bt.height,0,bt,ce,Bt.data);R.generateMipmaps=!1}else ae?(te&&e.texStorage2D(i.TEXTURE_2D,Mt,Xt,vt.width,vt.height),X&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt.width,vt.height,bt,ce,vt.data)):e.texImage2D(i.TEXTURE_2D,0,Xt,vt.width,vt.height,0,bt,ce,vt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ae&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Xt,Kt[0].width,Kt[0].height,vt.depth);for(let ct=0,ut=Kt.length;ct<ut;ct++)if(Bt=Kt[ct],R.format!==zn)if(bt!==null)if(ae){if(X)if(R.layerUpdates.size>0){const yt=Tf(Bt.width,Bt.height,R.format,R.type);for(const Jt of R.layerUpdates){const Se=Bt.data.subarray(Jt*yt/Bt.data.BYTES_PER_ELEMENT,(Jt+1)*yt/Bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,Jt,Bt.width,Bt.height,1,bt,Se,0,0)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Bt.width,Bt.height,vt.depth,bt,Bt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,Xt,Bt.width,Bt.height,vt.depth,0,Bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?X&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Bt.width,Bt.height,vt.depth,bt,ce,Bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,Xt,Bt.width,Bt.height,vt.depth,0,bt,ce,Bt.data)}else{ae&&te&&e.texStorage2D(i.TEXTURE_2D,Mt,Xt,Kt[0].width,Kt[0].height);for(let ct=0,ut=Kt.length;ct<ut;ct++)Bt=Kt[ct],R.format!==zn?bt!==null?ae?X&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,Bt.width,Bt.height,bt,Bt.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,Xt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?X&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Bt.width,Bt.height,bt,ce,Bt.data):e.texImage2D(i.TEXTURE_2D,ct,Xt,Bt.width,Bt.height,0,bt,ce,Bt.data)}else if(R.isDataArrayTexture)if(ae){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Xt,vt.width,vt.height,vt.depth),X)if(R.layerUpdates.size>0){const ct=Tf(vt.width,vt.height,R.format,R.type);for(const ut of R.layerUpdates){const yt=vt.data.subarray(ut*ct/vt.data.BYTES_PER_ELEMENT,(ut+1)*ct/vt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ut,vt.width,vt.height,1,bt,ce,yt)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,bt,ce,vt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Xt,vt.width,vt.height,vt.depth,0,bt,ce,vt.data);else if(R.isData3DTexture)ae?(te&&e.texStorage3D(i.TEXTURE_3D,Mt,Xt,vt.width,vt.height,vt.depth),X&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,bt,ce,vt.data)):e.texImage3D(i.TEXTURE_3D,0,Xt,vt.width,vt.height,vt.depth,0,bt,ce,vt.data);else if(R.isFramebufferTexture){if(te)if(ae)e.texStorage2D(i.TEXTURE_2D,Mt,Xt,vt.width,vt.height);else{let ct=vt.width,ut=vt.height;for(let yt=0;yt<Mt;yt++)e.texImage2D(i.TEXTURE_2D,yt,Xt,ct,ut,0,bt,ce,null),ct>>=1,ut>>=1}}else if(Kt.length>0){if(ae&&te){const ct=Wt(Kt[0]);e.texStorage2D(i.TEXTURE_2D,Mt,Xt,ct.width,ct.height)}for(let ct=0,ut=Kt.length;ct<ut;ct++)Bt=Kt[ct],ae?X&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,bt,ce,Bt):e.texImage2D(i.TEXTURE_2D,ct,Xt,bt,ce,Bt);R.generateMipmaps=!1}else if(ae){if(te){const ct=Wt(vt);e.texStorage2D(i.TEXTURE_2D,Mt,Xt,ct.width,ct.height)}X&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,ce,vt)}else e.texImage2D(i.TEXTURE_2D,0,Xt,bt,ce,vt);m(R)&&g(pt),Vt.__version=ot.version,R.onUpdate&&R.onUpdate(R)}F.__version=R.version}function st(F,R,et){if(R.image.length!==6)return;const pt=Ot(F,R),xt=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+et);const ot=n.get(xt);if(xt.version!==ot.__version||pt===!0){e.activeTexture(i.TEXTURE0+et);const Vt=Ae.getPrimaries(Ae.workingColorSpace),Et=R.colorSpace===os?null:Ae.getPrimaries(R.colorSpace),Dt=R.colorSpace===os||Vt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const se=R.isCompressedTexture||R.image[0].isCompressedTexture,vt=R.image[0]&&R.image[0].isDataTexture,bt=[];for(let ut=0;ut<6;ut++)!se&&!vt?bt[ut]=_(R.image[ut],!0,s.maxCubemapSize):bt[ut]=vt?R.image[ut].image:R.image[ut],bt[ut]=Tt(R,bt[ut]);const ce=bt[0],Xt=r.convert(R.format,R.colorSpace),Bt=r.convert(R.type),Kt=M(R.internalFormat,Xt,Bt,R.colorSpace),ae=R.isVideoTexture!==!0,te=ot.__version===void 0||pt===!0,X=xt.dataReady;let Mt=w(R,ce);zt(i.TEXTURE_CUBE_MAP,R);let ct;if(se){ae&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Kt,ce.width,ce.height);for(let ut=0;ut<6;ut++){ct=bt[ut].mipmaps;for(let yt=0;yt<ct.length;yt++){const Jt=ct[yt];R.format!==zn?Xt!==null?ae?X&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,yt,0,0,Jt.width,Jt.height,Xt,Jt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,yt,Kt,Jt.width,Jt.height,0,Jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,yt,0,0,Jt.width,Jt.height,Xt,Bt,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,yt,Kt,Jt.width,Jt.height,0,Xt,Bt,Jt.data)}}}else{if(ct=R.mipmaps,ae&&te){ct.length>0&&Mt++;const ut=Wt(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Kt,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(vt){ae?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,bt[ut].width,bt[ut].height,Xt,Bt,bt[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Kt,bt[ut].width,bt[ut].height,0,Xt,Bt,bt[ut].data);for(let yt=0;yt<ct.length;yt++){const Se=ct[yt].image[ut].image;ae?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,yt+1,0,0,Se.width,Se.height,Xt,Bt,Se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,yt+1,Kt,Se.width,Se.height,0,Xt,Bt,Se.data)}}else{ae?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Xt,Bt,bt[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Kt,Xt,Bt,bt[ut]);for(let yt=0;yt<ct.length;yt++){const Jt=ct[yt];ae?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,yt+1,0,0,Xt,Bt,Jt.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,yt+1,Kt,Xt,Bt,Jt.image[ut])}}}m(R)&&g(i.TEXTURE_CUBE_MAP),ot.__version=xt.version,R.onUpdate&&R.onUpdate(R)}F.__version=R.version}function dt(F,R,et,pt,xt,ot){const Vt=r.convert(et.format,et.colorSpace),Et=r.convert(et.type),Dt=M(et.internalFormat,Vt,Et,et.colorSpace);if(!n.get(R).__hasExternalTextures){const vt=Math.max(1,R.width>>ot),bt=Math.max(1,R.height>>ot);xt===i.TEXTURE_3D||xt===i.TEXTURE_2D_ARRAY?e.texImage3D(xt,ot,Dt,vt,bt,R.depth,0,Vt,Et,null):e.texImage2D(xt,ot,Dt,vt,bt,0,Vt,Et,null)}e.bindFramebuffer(i.FRAMEBUFFER,F),Ft(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,xt,n.get(et).__webglTexture,0,oe(R)):(xt===i.TEXTURE_2D||xt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pt,xt,n.get(et).__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(F,R,et){if(i.bindRenderbuffer(i.RENDERBUFFER,F),R.depthBuffer){const pt=R.depthTexture,xt=pt&&pt.isDepthTexture?pt.type:null,ot=y(R.stencilBuffer,xt),Vt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=oe(R);Ft(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,ot,R.width,R.height):et?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,ot,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,ot,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Vt,i.RENDERBUFFER,F)}else{const pt=R.textures;for(let xt=0;xt<pt.length;xt++){const ot=pt[xt],Vt=r.convert(ot.format,ot.colorSpace),Et=r.convert(ot.type),Dt=M(ot.internalFormat,Vt,Et,ot.colorSpace),se=oe(R);et&&Ft(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,Dt,R.width,R.height):Ft(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,Dt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Dt,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(F,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,F),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),nt(R.depthTexture,0);const pt=n.get(R.depthTexture).__webglTexture,xt=oe(R);if(R.depthTexture.format===Pr)Ft(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pt,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pt,0);else if(R.depthTexture.format===zr)Ft(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pt,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function re(F){const R=n.get(F),et=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!R.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");wt(R.__webglFramebuffer,F)}else if(et){R.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[pt]),R.__webglDepthbuffer[pt]=i.createRenderbuffer(),Pt(R.__webglDepthbuffer[pt],F,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=i.createRenderbuffer(),Pt(R.__webglDepthbuffer,F,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(F,R,et){const pt=n.get(F);R!==void 0&&dt(pt.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),et!==void 0&&re(F)}function Zt(F){const R=F.texture,et=n.get(F),pt=n.get(R);F.addEventListener("dispose",D);const xt=F.textures,ot=F.isWebGLCubeRenderTarget===!0,Vt=xt.length>1;if(Vt||(pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture()),pt.__version=R.version,o.memory.textures++),ot){et.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(R.mipmaps&&R.mipmaps.length>0){et.__webglFramebuffer[Et]=[];for(let Dt=0;Dt<R.mipmaps.length;Dt++)et.__webglFramebuffer[Et][Dt]=i.createFramebuffer()}else et.__webglFramebuffer[Et]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){et.__webglFramebuffer=[];for(let Et=0;Et<R.mipmaps.length;Et++)et.__webglFramebuffer[Et]=i.createFramebuffer()}else et.__webglFramebuffer=i.createFramebuffer();if(Vt)for(let Et=0,Dt=xt.length;Et<Dt;Et++){const se=n.get(xt[Et]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&Ft(F)===!1){et.__webglMultisampledFramebuffer=i.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Et=0;Et<xt.length;Et++){const Dt=xt[Et];et.__webglColorRenderbuffer[Et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,et.__webglColorRenderbuffer[Et]);const se=r.convert(Dt.format,Dt.colorSpace),vt=r.convert(Dt.type),bt=M(Dt.internalFormat,se,vt,Dt.colorSpace,F.isXRRenderTarget===!0),ce=oe(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,bt,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,et.__webglColorRenderbuffer[Et])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(et.__webglDepthRenderbuffer=i.createRenderbuffer(),Pt(et.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,pt.__webglTexture),zt(i.TEXTURE_CUBE_MAP,R);for(let Et=0;Et<6;Et++)if(R.mipmaps&&R.mipmaps.length>0)for(let Dt=0;Dt<R.mipmaps.length;Dt++)dt(et.__webglFramebuffer[Et][Dt],F,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Dt);else dt(et.__webglFramebuffer[Et],F,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);m(R)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Vt){for(let Et=0,Dt=xt.length;Et<Dt;Et++){const se=xt[Et],vt=n.get(se);e.bindTexture(i.TEXTURE_2D,vt.__webglTexture),zt(i.TEXTURE_2D,se),dt(et.__webglFramebuffer,F,se,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,0),m(se)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let Et=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Et=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,pt.__webglTexture),zt(Et,R),R.mipmaps&&R.mipmaps.length>0)for(let Dt=0;Dt<R.mipmaps.length;Dt++)dt(et.__webglFramebuffer[Dt],F,R,i.COLOR_ATTACHMENT0,Et,Dt);else dt(et.__webglFramebuffer,F,R,i.COLOR_ATTACHMENT0,Et,0);m(R)&&g(Et),e.unbindTexture()}F.depthBuffer&&re(F)}function Re(F){const R=F.textures;for(let et=0,pt=R.length;et<pt;et++){const xt=R[et];if(m(xt)){const ot=F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Vt=n.get(xt).__webglTexture;e.bindTexture(ot,Vt),g(ot),e.unbindTexture()}}}const k=[],Me=[];function pe(F){if(F.samples>0){if(Ft(F)===!1){const R=F.textures,et=F.width,pt=F.height;let xt=i.COLOR_BUFFER_BIT;const ot=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Vt=n.get(F),Et=R.length>1;if(Et)for(let Dt=0;Dt<R.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Dt=0;Dt<R.length;Dt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(xt|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(xt|=i.STENCIL_BUFFER_BIT)),Et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Vt.__webglColorRenderbuffer[Dt]);const se=n.get(R[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,et,pt,0,0,et,pt,xt,i.NEAREST),l===!0&&(k.length=0,Me.length=0,k.push(i.COLOR_ATTACHMENT0+Dt),F.depthBuffer&&F.resolveDepthBuffer===!1&&(k.push(ot),Me.push(ot),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Me)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,k))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Et)for(let Dt=0;Dt<R.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,Vt.__webglColorRenderbuffer[Dt]);const se=n.get(R[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,se,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){const R=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function oe(F){return Math.min(s.maxSamples,F.samples)}function Ft(F){const R=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function we(F){const R=o.render.frame;h.get(F)!==R&&(h.set(F,R),F.update())}function Tt(F,R){const et=F.colorSpace,pt=F.format,xt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||et!==_n&&et!==os&&(Ae.getTransfer(et)===We?(pt!==zn||xt!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),R}function Wt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=I,this.setTexture2D=nt,this.setTexture2DArray=at,this.setTexture3D=it,this.setTextureCube=ht,this.rebindTextures=ie,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Ft}function jv(i,t){function e(n,s=os){let r;const o=Ae.getTransfer(s);if(n===Yi)return i.UNSIGNED_BYTE;if(n===Hh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Id)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pd)return i.BYTE;if(n===Ld)return i.SHORT;if(n===ko)return i.UNSIGNED_SHORT;if(n===kh)return i.INT;if(n===ps)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===Jo)return i.HALF_FLOAT;if(n===Dd)return i.ALPHA;if(n===Nd)return i.RGB;if(n===zn)return i.RGBA;if(n===Ud)return i.LUMINANCE;if(n===zd)return i.LUMINANCE_ALPHA;if(n===Pr)return i.DEPTH_COMPONENT;if(n===zr)return i.DEPTH_STENCIL;if(n===Gh)return i.RED;if(n===wc)return i.RED_INTEGER;if(n===Od)return i.RG;if(n===Wh)return i.RG_INTEGER;if(n===Xh)return i.RGBA_INTEGER;if(n===ja||n===Za||n===Ja||n===$a)if(o===We)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ja)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yl||n===ql||n===Kl||n===jl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zl||n===Jl||n===$l)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zl||n===Jl)return o===We?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$l)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ql||n===th||n===eh||n===nh||n===ih||n===sh||n===rh||n===oh||n===ah||n===ch||n===lh||n===hh||n===uh||n===fh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ql)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===th)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===eh)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nh)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ih)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sh)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rh)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oh)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ah)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ch)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lh)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hh)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uh)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fh)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qa||n===dh||n===ph)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Qa)return o===We?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ph)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fd||n===mh||n===gh||n===xh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ur?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Zv extends Un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class en extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jv={type:"move"};class ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new en;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const $v=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new hn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ms({vertexShader:$v,fragmentShader:Qv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ft(new Pn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eM extends Wr{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,x=null;const _=new tM,m=e.getContextAttributes();let g=null,M=null;const y=[],w=[],H=new gt;let D=null;const O=new Un;O.layers.enable(1),O.viewport=new Ne;const G=new Un;G.layers.enable(2),G.viewport=new Ne;const P=[O,G],T=new Zv;T.layers.enable(1),T.layers.enable(2);let I=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let dt=y[st];return dt===void 0&&(dt=new ll,y[st]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(st){let dt=y[st];return dt===void 0&&(dt=new ll,y[st]=dt),dt.getGripSpace()},this.getHand=function(st){let dt=y[st];return dt===void 0&&(dt=new ll,y[st]=dt),dt.getHandSpace()};function Z(st){const dt=w.indexOf(st.inputSource);if(dt===-1)return;const Pt=y[dt];Pt!==void 0&&(Pt.update(st.inputSource,st.frame,c||o),Pt.dispatchEvent({type:st.type,data:st.inputSource}))}function nt(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",nt),s.removeEventListener("inputsourceschange",at);for(let st=0;st<y.length;st++){const dt=w[st];dt!==null&&(w[st]=null,y[st].disconnect(dt))}I=null,Y=null,_.reset(),t.setRenderTarget(g),p=null,f=null,u=null,s=null,M=null,ve.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(H.width,H.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){a=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(st){c=st},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(st){if(s=st,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",nt),s.addEventListener("inputsourceschange",at),m.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(H),s.renderState.layers===void 0){const dt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Ys(p.framebufferWidth,p.framebufferHeight,{format:zn,type:Yi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let dt=null,Pt=null,wt=null;m.depth&&(wt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=m.stencil?zr:Pr,Pt=m.stencil?Ur:ps);const re={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(re),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Ys(f.textureWidth,f.textureHeight,{format:zn,type:Yi,depthTexture:new Jd(f.textureWidth,f.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ve.setContext(s),ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function at(st){for(let dt=0;dt<st.removed.length;dt++){const Pt=st.removed[dt],wt=w.indexOf(Pt);wt>=0&&(w[wt]=null,y[wt].disconnect(Pt))}for(let dt=0;dt<st.added.length;dt++){const Pt=st.added[dt];let wt=w.indexOf(Pt);if(wt===-1){for(let ie=0;ie<y.length;ie++)if(ie>=w.length){w.push(Pt),wt=ie;break}else if(w[ie]===null){w[ie]=Pt,wt=ie;break}if(wt===-1)break}const re=y[wt];re&&re.connect(Pt)}}const it=new C,ht=new C;function J(st,dt,Pt){it.setFromMatrixPosition(dt.matrixWorld),ht.setFromMatrixPosition(Pt.matrixWorld);const wt=it.distanceTo(ht),re=dt.projectionMatrix.elements,ie=Pt.projectionMatrix.elements,Zt=re[14]/(re[10]-1),Re=re[14]/(re[10]+1),k=(re[9]+1)/re[5],Me=(re[9]-1)/re[5],pe=(re[8]-1)/re[0],oe=(ie[8]+1)/ie[0],Ft=Zt*pe,we=Zt*oe,Tt=wt/(-pe+oe),Wt=Tt*-pe;dt.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(Wt),st.translateZ(Tt),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert();const F=Zt+Tt,R=Re+Tt,et=Ft-Wt,pt=we+(wt-Wt),xt=k*Re/R*F,ot=Me*Re/R*F;st.projectionMatrix.makePerspective(et,pt,xt,ot,F,R),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}function At(st,dt){dt===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(dt.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(s===null)return;_.texture!==null&&(st.near=_.depthNear,st.far=_.depthFar),T.near=G.near=O.near=st.near,T.far=G.far=O.far=st.far,(I!==T.near||Y!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),I=T.near,Y=T.far,O.near=I,O.far=Y,G.near=I,G.far=Y,O.updateProjectionMatrix(),G.updateProjectionMatrix(),st.updateProjectionMatrix());const dt=st.parent,Pt=T.cameras;At(T,dt);for(let wt=0;wt<Pt.length;wt++)At(Pt[wt],dt);Pt.length===2?J(T,O,G):T.projectionMatrix.copy(O.projectionMatrix),Ut(st,T,dt)};function Ut(st,dt,Pt){Pt===null?st.matrix.copy(dt.matrixWorld):(st.matrix.copy(Pt.matrixWorld),st.matrix.invert(),st.matrix.multiply(dt.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(dt.projectionMatrix),st.projectionMatrixInverse.copy(dt.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=Or*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(st){l=st,f!==null&&(f.fixedFoveation=st),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=st)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(T)};let zt=null;function Ot(st,dt){if(h=dt.getViewerPose(c||o),x=dt,h!==null){const Pt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let wt=!1;Pt.length!==T.cameras.length&&(T.cameras.length=0,wt=!0);for(let ie=0;ie<Pt.length;ie++){const Zt=Pt[ie];let Re=null;if(p!==null)Re=p.getViewport(Zt);else{const Me=u.getViewSubImage(f,Zt);Re=Me.viewport,ie===0&&(t.setRenderTargetTextures(M,Me.colorTexture,f.ignoreDepthValues?void 0:Me.depthStencilTexture),t.setRenderTarget(M))}let k=P[ie];k===void 0&&(k=new Un,k.layers.enable(ie),k.viewport=new Ne,P[ie]=k),k.matrix.fromArray(Zt.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(Zt.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(Re.x,Re.y,Re.width,Re.height),ie===0&&(T.matrix.copy(k.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),wt===!0&&T.cameras.push(k)}const re=s.enabledFeatures;if(re&&re.includes("depth-sensing")){const ie=u.getDepthInformation(Pt[0]);ie&&ie.isValid&&ie.texture&&_.init(t,ie,s.renderState)}}for(let Pt=0;Pt<y.length;Pt++){const wt=w[Pt],re=y[Pt];wt!==null&&re!==void 0&&re.update(wt,dt,c||o)}zt&&zt(st,dt),dt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:dt}),x=null}const ve=new Zd;ve.setAnimationLoop(Ot),this.setAnimationLoop=function(st){zt=st},this.dispose=function(){}}}const Rs=new Ce,nM=new Qt;function iM(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,qd(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,M,y,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&p(m,g,w)):g.isMeshMatcapMaterial?(r(m,g),x(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,M,y):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Bn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Bn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const M=t.get(g),y=M.envMap,w=M.envMapRotation;y&&(m.envMap.value=y,Rs.copy(w),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),m.envMapRotation.value.setFromMatrix4(nM.makeRotationFromEuler(Rs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=y*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,M){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Bn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const M=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function sM(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const w=y.program;n.uniformBlockBinding(M,w)}function c(M,y){let w=s[M.id];w===void 0&&(x(M),w=h(M),s[M.id]=w,M.addEventListener("dispose",m));const H=y.program;n.updateUBOMapping(M,H);const D=t.render.frame;r[M.id]!==D&&(f(M),r[M.id]=D)}function h(M){const y=u();M.__bindingPointIndex=y;const w=i.createBuffer(),H=M.__size,D=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,H,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,w),w}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const y=s[M.id],w=M.uniforms,H=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let D=0,O=w.length;D<O;D++){const G=Array.isArray(w[D])?w[D]:[w[D]];for(let P=0,T=G.length;P<T;P++){const I=G[P];if(p(I,D,P,H)===!0){const Y=I.__offset,Z=Array.isArray(I.value)?I.value:[I.value];let nt=0;for(let at=0;at<Z.length;at++){const it=Z[at],ht=_(it);typeof it=="number"||typeof it=="boolean"?(I.__data[0]=it,i.bufferSubData(i.UNIFORM_BUFFER,Y+nt,I.__data)):it.isMatrix3?(I.__data[0]=it.elements[0],I.__data[1]=it.elements[1],I.__data[2]=it.elements[2],I.__data[3]=0,I.__data[4]=it.elements[3],I.__data[5]=it.elements[4],I.__data[6]=it.elements[5],I.__data[7]=0,I.__data[8]=it.elements[6],I.__data[9]=it.elements[7],I.__data[10]=it.elements[8],I.__data[11]=0):(it.toArray(I.__data,nt),nt+=ht.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,y,w,H){const D=M.value,O=y+"_"+w;if(H[O]===void 0)return typeof D=="number"||typeof D=="boolean"?H[O]=D:H[O]=D.clone(),!0;{const G=H[O];if(typeof D=="number"||typeof D=="boolean"){if(G!==D)return H[O]=D,!0}else if(G.equals(D)===!1)return G.copy(D),!0}return!1}function x(M){const y=M.uniforms;let w=0;const H=16;for(let O=0,G=y.length;O<G;O++){const P=Array.isArray(y[O])?y[O]:[y[O]];for(let T=0,I=P.length;T<I;T++){const Y=P[T],Z=Array.isArray(Y.value)?Y.value:[Y.value];for(let nt=0,at=Z.length;nt<at;nt++){const it=Z[nt],ht=_(it),J=w%H;J!==0&&H-J<ht.boundary&&(w+=H-J),Y.__data=new Float32Array(ht.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=w,w+=ht.storage}}}const D=w%H;return D>0&&(w+=H-D),M.__size=w,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const w=o.indexOf(y.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function g(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}class Q1{constructor(t={}){const{canvas:e=Zm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),x=new Int32Array(4);let _=null,m=null;const g=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=fs,this.toneMappingExposure=1;const y=this;let w=!1,H=0,D=0,O=null,G=-1,P=null;const T=new Ne,I=new Ne;let Y=null;const Z=new qt(0);let nt=0,at=e.width,it=e.height,ht=1,J=null,At=null;const Ut=new Ne(0,0,at,it),zt=new Ne(0,0,at,it);let Ot=!1;const ve=new Tc;let st=!1,dt=!1;const Pt=new Qt,wt=new C,re=new Ne,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function Re(){return O===null?ht:1}let k=n;function Me(L,q){return e.getContext(L,q)}try{const L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fh}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",yt,!1),k===null){const q="webgl2";if(k=Me(q,L),k===null)throw Me(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let pe,oe,Ft,we,Tt,Wt,F,R,et,pt,xt,ot,Vt,Et,Dt,se,vt,bt,ce,Xt,Bt,Kt,ae,te;function X(){pe=new f_(k),pe.init(),Kt=new jv(k,pe),oe=new o_(k,pe,t,Kt),Ft=new Yv(k),we=new m_(k),Tt=new Iv,Wt=new Kv(k,pe,Ft,Tt,oe,Kt,we),F=new c_(y),R=new u_(y),et=new Sg(k),ae=new s_(k,et),pt=new d_(k,et,we,ae),xt=new x_(k,pt,et,we),ce=new g_(k,oe,Wt),se=new a_(Tt),ot=new Lv(y,F,R,pe,oe,ae,se),Vt=new iM(y,Tt),Et=new Nv,Dt=new kv(pe),bt=new i_(y,F,R,Ft,xt,f,l),vt=new Xv(y,xt,oe),te=new sM(k,we,oe,Ft),Xt=new r_(k,pe,we),Bt=new p_(k,pe,we),we.programs=ot.programs,y.capabilities=oe,y.extensions=pe,y.properties=Tt,y.renderLists=Et,y.shadowMap=vt,y.state=Ft,y.info=we}X();const Mt=new eM(y,k);this.xr=Mt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const L=pe.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=pe.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(L){L!==void 0&&(ht=L,this.setSize(at,it,!1))},this.getSize=function(L){return L.set(at,it)},this.setSize=function(L,q,$=!0){if(Mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}at=L,it=q,e.width=Math.floor(L*ht),e.height=Math.floor(q*ht),$===!0&&(e.style.width=L+"px",e.style.height=q+"px"),this.setViewport(0,0,L,q)},this.getDrawingBufferSize=function(L){return L.set(at*ht,it*ht).floor()},this.setDrawingBufferSize=function(L,q,$){at=L,it=q,ht=$,e.width=Math.floor(L*$),e.height=Math.floor(q*$),this.setViewport(0,0,L,q)},this.getCurrentViewport=function(L){return L.copy(T)},this.getViewport=function(L){return L.copy(Ut)},this.setViewport=function(L,q,$,Q){L.isVector4?Ut.set(L.x,L.y,L.z,L.w):Ut.set(L,q,$,Q),Ft.viewport(T.copy(Ut).multiplyScalar(ht).round())},this.getScissor=function(L){return L.copy(zt)},this.setScissor=function(L,q,$,Q){L.isVector4?zt.set(L.x,L.y,L.z,L.w):zt.set(L,q,$,Q),Ft.scissor(I.copy(zt).multiplyScalar(ht).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(L){Ft.setScissorTest(Ot=L)},this.setOpaqueSort=function(L){J=L},this.setTransparentSort=function(L){At=L},this.getClearColor=function(L){return L.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(L=!0,q=!0,$=!0){let Q=0;if(L){let K=!1;if(O!==null){const St=O.texture.format;K=St===Xh||St===Wh||St===wc}if(K){const St=O.texture.type,It=St===Yi||St===ps||St===ko||St===Ur||St===Hh||St===Vh,kt=bt.getClearColor(),Ht=bt.getClearAlpha(),ee=kt.r,$t=kt.g,jt=kt.b;It?(p[0]=ee,p[1]=$t,p[2]=jt,p[3]=Ht,k.clearBufferuiv(k.COLOR,0,p)):(x[0]=ee,x[1]=$t,x[2]=jt,x[3]=Ht,k.clearBufferiv(k.COLOR,0,x))}else Q|=k.COLOR_BUFFER_BIT}q&&(Q|=k.DEPTH_BUFFER_BIT),$&&(Q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Et.dispose(),Dt.dispose(),Tt.dispose(),F.dispose(),R.dispose(),xt.dispose(),ae.dispose(),te.dispose(),ot.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",Kn),Mt.removeEventListener("sessionend",ea),ui.stop()};function ct(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const L=we.autoReset,q=vt.enabled,$=vt.autoUpdate,Q=vt.needsUpdate,K=vt.type;X(),we.autoReset=L,vt.enabled=q,vt.autoUpdate=$,vt.needsUpdate=Q,vt.type=K}function yt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Jt(L){const q=L.target;q.removeEventListener("dispose",Jt),Se(q)}function Se(L){Ke(L),Tt.remove(L)}function Ke(L){const q=Tt.get(L).programs;q!==void 0&&(q.forEach(function($){ot.releaseProgram($)}),L.isShaderMaterial&&ot.releaseShaderCache(L))}this.renderBufferDirect=function(L,q,$,Q,K,St){q===null&&(q=ie);const It=K.isMesh&&K.matrixWorld.determinant()<0,kt=vs(L,q,$,Q,K);Ft.setMaterial(Q,It);let Ht=$.index,ee=1;if(Q.wireframe===!0){if(Ht=pt.getWireframeAttribute($),Ht===void 0)return;ee=2}const $t=$.drawRange,jt=$.attributes.position;let be=$t.start*ee,Fe=($t.start+$t.count)*ee;St!==null&&(be=Math.max(be,St.start*ee),Fe=Math.min(Fe,(St.start+St.count)*ee)),Ht!==null?(be=Math.max(be,0),Fe=Math.min(Fe,Ht.count)):jt!=null&&(be=Math.max(be,0),Fe=Math.min(Fe,jt.count));const Be=Fe-be;if(Be<0||Be===1/0)return;ae.setup(K,Q,kt,$,Ht);let Tn,le=Xt;if(Ht!==null&&(Tn=et.get(Ht),le=Bt,le.setIndex(Tn)),K.isMesh)Q.wireframe===!0?(Ft.setLineWidth(Q.wireframeLinewidth*Re()),le.setMode(k.LINES)):le.setMode(k.TRIANGLES);else if(K.isLine){let Gt=Q.linewidth;Gt===void 0&&(Gt=1),Ft.setLineWidth(Gt*Re()),K.isLineSegments?le.setMode(k.LINES):K.isLineLoop?le.setMode(k.LINE_LOOP):le.setMode(k.LINE_STRIP)}else K.isPoints?le.setMode(k.POINTS):K.isSprite&&le.setMode(k.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)le.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(pe.get("WEBGL_multi_draw"))le.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Gt=K._multiDrawStarts,ke=K._multiDrawCounts,Te=K._multiDrawCount,Dn=Ht?et.get(Ht).bytesPerElement:1,di=Tt.get(Q).currentProgram.getUniforms();for(let En=0;En<Te;En++)di.setValue(k,"_gl_DrawID",En),le.render(Gt[En]/Dn,ke[En])}else if(K.isInstancedMesh)le.renderInstances(be,Be,K.count);else if($.isInstancedBufferGeometry){const Gt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ke=Math.min($.instanceCount,Gt);le.renderInstances(be,Be,ke)}else le.render(be,Be)};function an(L,q,$){L.transparent===!0&&L.side===He&&L.forceSinglePass===!1?(L.side=Bn,L.needsUpdate=!0,_s(L,q,$),L.side=Xi,L.needsUpdate=!0,_s(L,q,$),L.side=He):_s(L,q,$)}this.compile=function(L,q,$=null){$===null&&($=L),m=Dt.get($),m.init(q),M.push(m),$.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),L!==$&&L.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights();const Q=new Set;return L.traverse(function(K){const St=K.material;if(St)if(Array.isArray(St))for(let It=0;It<St.length;It++){const kt=St[It];an(kt,$,K),Q.add(kt)}else an(St,$,K),Q.add(St)}),M.pop(),m=null,Q},this.compileAsync=function(L,q,$=null){const Q=this.compile(L,q,$);return new Promise(K=>{function St(){if(Q.forEach(function(It){Tt.get(It).currentProgram.isReady()&&Q.delete(It)}),Q.size===0){K(L);return}setTimeout(St,10)}pe.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Ee=null;function qn(L){Ee&&Ee(L)}function Kn(){ui.stop()}function ea(){ui.start()}const ui=new Zd;ui.setAnimationLoop(qn),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(L){Ee=L,Mt.setAnimationLoop(L),L===null?ui.stop():ui.start()},Mt.addEventListener("sessionstart",Kn),Mt.addEventListener("sessionend",ea),this.render=function(L,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(q),q=Mt.getCamera()),L.isScene===!0&&L.onBeforeRender(y,L,q,O),m=Dt.get(L,M.length),m.init(q),M.push(m),Pt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ve.setFromProjectionMatrix(Pt),dt=this.localClippingEnabled,st=se.init(this.clippingPlanes,dt),_=Et.get(L,g.length),_.init(),g.push(_),Mt.enabled===!0&&Mt.isPresenting===!0){const St=y.xr.getDepthSensingMesh();St!==null&&$r(St,q,-1/0,y.sortObjects)}$r(L,q,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(J,At),Zt=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,Zt&&bt.addToRenderList(_,L),this.info.render.frame++,st===!0&&se.beginShadows();const $=m.state.shadowsArray;vt.render($,L,q),st===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=_.opaque,K=_.transmissive;if(m.setupLights(),q.isArrayCamera){const St=q.cameras;if(K.length>0)for(let It=0,kt=St.length;It<kt;It++){const Ht=St[It];Qr(Q,K,L,Ht)}Zt&&bt.render(L);for(let It=0,kt=St.length;It<kt;It++){const Ht=St[It];fi(_,L,Ht,Ht.viewport)}}else K.length>0&&Qr(Q,K,L,q),Zt&&bt.render(L),fi(_,L,q);O!==null&&(Wt.updateMultisampleRenderTarget(O),Wt.updateRenderTargetMipmap(O)),L.isScene===!0&&L.onAfterRender(y,L,q),ae.resetDefaultState(),G=-1,P=null,M.pop(),M.length>0?(m=M[M.length-1],st===!0&&se.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,g.pop(),g.length>0?_=g[g.length-1]:_=null};function $r(L,q,$,Q){if(L.visible===!1)return;if(L.layers.test(q.layers)){if(L.isGroup)$=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(q);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||ve.intersectsSprite(L)){Q&&re.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Pt);const It=xt.update(L),kt=L.material;kt.visible&&_.push(L,It,kt,$,re.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||ve.intersectsObject(L))){const It=xt.update(L),kt=L.material;if(Q&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),re.copy(L.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),re.copy(It.boundingSphere.center)),re.applyMatrix4(L.matrixWorld).applyMatrix4(Pt)),Array.isArray(kt)){const Ht=It.groups;for(let ee=0,$t=Ht.length;ee<$t;ee++){const jt=Ht[ee],be=kt[jt.materialIndex];be&&be.visible&&_.push(L,It,be,$,re.z,jt)}}else kt.visible&&_.push(L,It,kt,$,re.z,null)}}const St=L.children;for(let It=0,kt=St.length;It<kt;It++)$r(St[It],q,$,Q)}function fi(L,q,$,Q){const K=L.opaque,St=L.transmissive,It=L.transparent;m.setupLightsView($),st===!0&&se.setGlobalState(y.clippingPlanes,$),Q&&Ft.viewport(T.copy(Q)),K.length>0&&Ki(K,q,$),St.length>0&&Ki(St,q,$),It.length>0&&Ki(It,q,$),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function Qr(L,q,$,Q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Q.id]===void 0&&(m.state.transmissionRenderTarget[Q.id]=new Ys(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float")?Jo:Yi,minFilter:Hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const St=m.state.transmissionRenderTarget[Q.id],It=Q.viewport||T;St.setSize(It.z,It.w);const kt=y.getRenderTarget();y.setRenderTarget(St),y.getClearColor(Z),nt=y.getClearAlpha(),nt<1&&y.setClearColor(16777215,.5),Zt?bt.render($):y.clear();const Ht=y.toneMapping;y.toneMapping=fs;const ee=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),m.setupLightsView(Q),st===!0&&se.setGlobalState(y.clippingPlanes,Q),Ki(L,$,Q),Wt.updateMultisampleRenderTarget(St),Wt.updateRenderTargetMipmap(St),pe.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let jt=0,be=q.length;jt<be;jt++){const Fe=q[jt],Be=Fe.object,Tn=Fe.geometry,le=Fe.material,Gt=Fe.group;if(le.side===He&&Be.layers.test(Q.layers)){const ke=le.side;le.side=Bn,le.needsUpdate=!0,to(Be,$,Q,Tn,le,Gt),le.side=ke,le.needsUpdate=!0,$t=!0}}$t===!0&&(Wt.updateMultisampleRenderTarget(St),Wt.updateRenderTargetMipmap(St))}y.setRenderTarget(kt),y.setClearColor(Z,nt),ee!==void 0&&(Q.viewport=ee),y.toneMapping=Ht}function Ki(L,q,$){const Q=q.isScene===!0?q.overrideMaterial:null;for(let K=0,St=L.length;K<St;K++){const It=L[K],kt=It.object,Ht=It.geometry,ee=Q===null?It.material:Q,$t=It.group;kt.layers.test($.layers)&&to(kt,q,$,Ht,ee,$t)}}function to(L,q,$,Q,K,St){L.onBeforeRender(y,q,$,Q,K,St),L.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),K.transparent===!0&&K.side===He&&K.forceSinglePass===!1?(K.side=Bn,K.needsUpdate=!0,y.renderBufferDirect($,q,Q,K,L,St),K.side=Xi,K.needsUpdate=!0,y.renderBufferDirect($,q,Q,K,L,St),K.side=He):y.renderBufferDirect($,q,Q,K,L,St),L.onAfterRender(y,q,$,Q,K,St)}function _s(L,q,$){q.isScene!==!0&&(q=ie);const Q=Tt.get(L),K=m.state.lights,St=m.state.shadowsArray,It=K.state.version,kt=ot.getParameters(L,K.state,St,q,$),Ht=ot.getProgramCacheKey(kt);let ee=Q.programs;Q.environment=L.isMeshStandardMaterial?q.environment:null,Q.fog=q.fog,Q.envMap=(L.isMeshStandardMaterial?R:F).get(L.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&L.envMap===null?q.environmentRotation:L.envMapRotation,ee===void 0&&(L.addEventListener("dispose",Jt),ee=new Map,Q.programs=ee);let $t=ee.get(Ht);if($t!==void 0){if(Q.currentProgram===$t&&Q.lightsStateVersion===It)return ji(L,kt),$t}else kt.uniforms=ot.getUniforms(L),L.onBeforeCompile(kt,y),$t=ot.acquireProgram(kt,Ht),ee.set(Ht,$t),Q.uniforms=kt.uniforms;const jt=Q.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(jt.clippingPlanes=se.uniform),ji(L,kt),Q.needsLights=ys(L),Q.lightsStateVersion=It,Q.needsLights&&(jt.ambientLightColor.value=K.state.ambient,jt.lightProbe.value=K.state.probe,jt.directionalLights.value=K.state.directional,jt.directionalLightShadows.value=K.state.directionalShadow,jt.spotLights.value=K.state.spot,jt.spotLightShadows.value=K.state.spotShadow,jt.rectAreaLights.value=K.state.rectArea,jt.ltc_1.value=K.state.rectAreaLTC1,jt.ltc_2.value=K.state.rectAreaLTC2,jt.pointLights.value=K.state.point,jt.pointLightShadows.value=K.state.pointShadow,jt.hemisphereLights.value=K.state.hemi,jt.directionalShadowMap.value=K.state.directionalShadowMap,jt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,jt.spotShadowMap.value=K.state.spotShadowMap,jt.spotLightMatrix.value=K.state.spotLightMatrix,jt.spotLightMap.value=K.state.spotLightMap,jt.pointShadowMap.value=K.state.pointShadowMap,jt.pointShadowMatrix.value=K.state.pointShadowMatrix),Q.currentProgram=$t,Q.uniformsList=null,$t}function na(L){if(L.uniformsList===null){const q=L.currentProgram.getUniforms();L.uniformsList=tc.seqWithValue(q.seq,L.uniforms)}return L.uniformsList}function ji(L,q){const $=Tt.get(L);$.outputColorSpace=q.outputColorSpace,$.batching=q.batching,$.batchingColor=q.batchingColor,$.instancing=q.instancing,$.instancingColor=q.instancingColor,$.instancingMorph=q.instancingMorph,$.skinning=q.skinning,$.morphTargets=q.morphTargets,$.morphNormals=q.morphNormals,$.morphColors=q.morphColors,$.morphTargetsCount=q.morphTargetsCount,$.numClippingPlanes=q.numClippingPlanes,$.numIntersection=q.numClipIntersection,$.vertexAlphas=q.vertexAlphas,$.vertexTangents=q.vertexTangents,$.toneMapping=q.toneMapping}function vs(L,q,$,Q,K){q.isScene!==!0&&(q=ie),Wt.resetTextureUnits();const St=q.fog,It=Q.isMeshStandardMaterial?q.environment:null,kt=O===null?y.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:_n,Ht=(Q.isMeshStandardMaterial?R:F).get(Q.envMap||It),ee=Q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,$t=!!$.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),jt=!!$.morphAttributes.position,be=!!$.morphAttributes.normal,Fe=!!$.morphAttributes.color;let Be=fs;Q.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Be=y.toneMapping);const Tn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,le=Tn!==void 0?Tn.length:0,Gt=Tt.get(Q),ke=m.state.lights;if(st===!0&&(dt===!0||L!==P)){const Nn=L===P&&Q.id===G;se.setState(Q,L,Nn)}let Te=!1;Q.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==ke.state.version||Gt.outputColorSpace!==kt||K.isBatchedMesh&&Gt.batching===!1||!K.isBatchedMesh&&Gt.batching===!0||K.isBatchedMesh&&Gt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Gt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Gt.instancing===!1||!K.isInstancedMesh&&Gt.instancing===!0||K.isSkinnedMesh&&Gt.skinning===!1||!K.isSkinnedMesh&&Gt.skinning===!0||K.isInstancedMesh&&Gt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Gt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Gt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Gt.instancingMorph===!1&&K.morphTexture!==null||Gt.envMap!==Ht||Q.fog===!0&&Gt.fog!==St||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==se.numPlanes||Gt.numIntersection!==se.numIntersection)||Gt.vertexAlphas!==ee||Gt.vertexTangents!==$t||Gt.morphTargets!==jt||Gt.morphNormals!==be||Gt.morphColors!==Fe||Gt.toneMapping!==Be||Gt.morphTargetsCount!==le)&&(Te=!0):(Te=!0,Gt.__version=Q.version);let Dn=Gt.currentProgram;Te===!0&&(Dn=_s(Q,q,K));let di=!1,En=!1,Zi=!1;const Qe=Dn.getUniforms(),pi=Gt.uniforms;if(Ft.useProgram(Dn.program)&&(di=!0,En=!0,Zi=!0),Q.id!==G&&(G=Q.id,En=!0),di||P!==L){Qe.setValue(k,"projectionMatrix",L.projectionMatrix),Qe.setValue(k,"viewMatrix",L.matrixWorldInverse);const Nn=Qe.map.cameraPosition;Nn!==void 0&&Nn.setValue(k,wt.setFromMatrixPosition(L.matrixWorld)),oe.logarithmicDepthBuffer&&Qe.setValue(k,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Qe.setValue(k,"isOrthographic",L.isOrthographicCamera===!0),P!==L&&(P=L,En=!0,Zi=!0)}if(K.isSkinnedMesh){Qe.setOptional(k,K,"bindMatrix"),Qe.setOptional(k,K,"bindMatrixInverse");const Nn=K.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),Qe.setValue(k,"boneTexture",Nn.boneTexture,Wt))}K.isBatchedMesh&&(Qe.setOptional(k,K,"batchingTexture"),Qe.setValue(k,"batchingTexture",K._matricesTexture,Wt),Qe.setOptional(k,K,"batchingIdTexture"),Qe.setValue(k,"batchingIdTexture",K._indirectTexture,Wt),Qe.setOptional(k,K,"batchingColorTexture"),K._colorsTexture!==null&&Qe.setValue(k,"batchingColorTexture",K._colorsTexture,Wt));const Ss=$.morphAttributes;if((Ss.position!==void 0||Ss.normal!==void 0||Ss.color!==void 0)&&ce.update(K,$,Dn),(En||Gt.receiveShadow!==K.receiveShadow)&&(Gt.receiveShadow=K.receiveShadow,Qe.setValue(k,"receiveShadow",K.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(pi.envMap.value=Ht,pi.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&q.environment!==null&&(pi.envMapIntensity.value=q.environmentIntensity),En&&(Qe.setValue(k,"toneMappingExposure",y.toneMappingExposure),Gt.needsLights&&Ms(pi,Zi),St&&Q.fog===!0&&Vt.refreshFogUniforms(pi,St),Vt.refreshMaterialUniforms(pi,Q,ht,it,m.state.transmissionRenderTarget[L.id]),tc.upload(k,na(Gt),pi,Wt)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(tc.upload(k,na(Gt),pi,Wt),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Qe.setValue(k,"center",K.center),Qe.setValue(k,"modelViewMatrix",K.modelViewMatrix),Qe.setValue(k,"normalMatrix",K.normalMatrix),Qe.setValue(k,"modelMatrix",K.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Nn=Q.uniformsGroups;for(let $s=0,ia=Nn.length;$s<ia;$s++){const d=Nn[$s];te.update(d,Dn),te.bind(d,Dn)}}return Dn}function Ms(L,q){L.ambientLightColor.needsUpdate=q,L.lightProbe.needsUpdate=q,L.directionalLights.needsUpdate=q,L.directionalLightShadows.needsUpdate=q,L.pointLights.needsUpdate=q,L.pointLightShadows.needsUpdate=q,L.spotLights.needsUpdate=q,L.spotLightShadows.needsUpdate=q,L.rectAreaLights.needsUpdate=q,L.hemisphereLights.needsUpdate=q}function ys(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(L,q,$){Tt.get(L.texture).__webglTexture=q,Tt.get(L.depthTexture).__webglTexture=$;const Q=Tt.get(L);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=$===void 0,Q.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,q){const $=Tt.get(L);$.__webglFramebuffer=q,$.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(L,q=0,$=0){O=L,H=q,D=$;let Q=!0,K=null,St=!1,It=!1;if(L){const Ht=Tt.get(L);Ht.__useDefaultFramebuffer!==void 0?(Ft.bindFramebuffer(k.FRAMEBUFFER,null),Q=!1):Ht.__webglFramebuffer===void 0?Wt.setupRenderTarget(L):Ht.__hasExternalTextures&&Wt.rebindTextures(L,Tt.get(L.texture).__webglTexture,Tt.get(L.depthTexture).__webglTexture);const ee=L.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(It=!0);const $t=Tt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray($t[q])?K=$t[q][$]:K=$t[q],St=!0):L.samples>0&&Wt.useMultisampledRTT(L)===!1?K=Tt.get(L).__webglMultisampledFramebuffer:Array.isArray($t)?K=$t[$]:K=$t,T.copy(L.viewport),I.copy(L.scissor),Y=L.scissorTest}else T.copy(Ut).multiplyScalar(ht).floor(),I.copy(zt).multiplyScalar(ht).floor(),Y=Ot;if(Ft.bindFramebuffer(k.FRAMEBUFFER,K)&&Q&&Ft.drawBuffers(L,K),Ft.viewport(T),Ft.scissor(I),Ft.setScissorTest(Y),St){const Ht=Tt.get(L.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ht.__webglTexture,$)}else if(It){const Ht=Tt.get(L.texture),ee=q||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ht.__webglTexture,$||0,ee)}G=-1},this.readRenderTargetPixels=function(L,q,$,Q,K,St,It){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=Tt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&It!==void 0&&(kt=kt[It]),kt){Ft.bindFramebuffer(k.FRAMEBUFFER,kt);try{const Ht=L.texture,ee=Ht.format,$t=Ht.type;if(!oe.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=L.width-Q&&$>=0&&$<=L.height-K&&k.readPixels(q,$,Q,K,Kt.convert(ee),Kt.convert($t),St)}finally{const Ht=O!==null?Tt.get(O).__webglFramebuffer:null;Ft.bindFramebuffer(k.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(L,q,$,Q,K,St,It){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=Tt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&It!==void 0&&(kt=kt[It]),kt){Ft.bindFramebuffer(k.FRAMEBUFFER,kt);try{const Ht=L.texture,ee=Ht.format,$t=Ht.type;if(!oe.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=L.width-Q&&$>=0&&$<=L.height-K){const jt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,jt),k.bufferData(k.PIXEL_PACK_BUFFER,St.byteLength,k.STREAM_READ),k.readPixels(q,$,Q,K,Kt.convert(ee),Kt.convert($t),0),k.flush();const be=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);await Jm(k,be,4);try{k.bindBuffer(k.PIXEL_PACK_BUFFER,jt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,St)}finally{k.deleteBuffer(jt),k.deleteSync(be)}return St}}finally{const Ht=O!==null?Tt.get(O).__webglFramebuffer:null;Ft.bindFramebuffer(k.FRAMEBUFFER,Ht)}}},this.copyFramebufferToTexture=function(L,q=null,$=0){L.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,L=arguments[1]);const Q=Math.pow(2,-$),K=Math.floor(L.image.width*Q),St=Math.floor(L.image.height*Q),It=q!==null?q.x:0,kt=q!==null?q.y:0;Wt.setTexture2D(L,0),k.copyTexSubImage2D(k.TEXTURE_2D,$,0,0,It,kt,K,St),Ft.unbindTexture()},this.copyTextureToTexture=function(L,q,$=null,Q=null,K=0){L.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,L=arguments[1],q=arguments[2],K=arguments[3]||0,$=null);let St,It,kt,Ht,ee,$t;$!==null?(St=$.max.x-$.min.x,It=$.max.y-$.min.y,kt=$.min.x,Ht=$.min.y):(St=L.image.width,It=L.image.height,kt=0,Ht=0),Q!==null?(ee=Q.x,$t=Q.y):(ee=0,$t=0);const jt=Kt.convert(q.format),be=Kt.convert(q.type);Wt.setTexture2D(q,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment);const Fe=k.getParameter(k.UNPACK_ROW_LENGTH),Be=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Tn=k.getParameter(k.UNPACK_SKIP_PIXELS),le=k.getParameter(k.UNPACK_SKIP_ROWS),Gt=k.getParameter(k.UNPACK_SKIP_IMAGES),ke=L.isCompressedTexture?L.mipmaps[K]:L.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ke.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ke.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,kt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ht),L.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,K,ee,$t,St,It,jt,be,ke.data):L.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,K,ee,$t,ke.width,ke.height,jt,ke.data):k.texSubImage2D(k.TEXTURE_2D,K,ee,$t,St,It,jt,be,ke),k.pixelStorei(k.UNPACK_ROW_LENGTH,Fe),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Be),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Tn),k.pixelStorei(k.UNPACK_SKIP_ROWS,le),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Gt),K===0&&q.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Ft.unbindTexture()},this.copyTextureToTexture3D=function(L,q,$=null,Q=null,K=0){L.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Q=arguments[1]||null,L=arguments[2],q=arguments[3],K=arguments[4]||0);let St,It,kt,Ht,ee,$t,jt,be,Fe;const Be=L.isCompressedTexture?L.mipmaps[K]:L.image;$!==null?(St=$.max.x-$.min.x,It=$.max.y-$.min.y,kt=$.max.z-$.min.z,Ht=$.min.x,ee=$.min.y,$t=$.min.z):(St=Be.width,It=Be.height,kt=Be.depth,Ht=0,ee=0,$t=0),Q!==null?(jt=Q.x,be=Q.y,Fe=Q.z):(jt=0,be=0,Fe=0);const Tn=Kt.convert(q.format),le=Kt.convert(q.type);let Gt;if(q.isData3DTexture)Wt.setTexture3D(q,0),Gt=k.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)Wt.setTexture2DArray(q,0),Gt=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment);const ke=k.getParameter(k.UNPACK_ROW_LENGTH),Te=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Dn=k.getParameter(k.UNPACK_SKIP_PIXELS),di=k.getParameter(k.UNPACK_SKIP_ROWS),En=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Be.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Be.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ht),k.pixelStorei(k.UNPACK_SKIP_ROWS,ee),k.pixelStorei(k.UNPACK_SKIP_IMAGES,$t),L.isDataTexture||L.isData3DTexture?k.texSubImage3D(Gt,K,jt,be,Fe,St,It,kt,Tn,le,Be.data):q.isCompressedArrayTexture?k.compressedTexSubImage3D(Gt,K,jt,be,Fe,St,It,kt,Tn,Be.data):k.texSubImage3D(Gt,K,jt,be,Fe,St,It,kt,Tn,le,Be),k.pixelStorei(k.UNPACK_ROW_LENGTH,ke),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Te),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Dn),k.pixelStorei(k.UNPACK_SKIP_ROWS,di),k.pixelStorei(k.UNPACK_SKIP_IMAGES,En),K===0&&q.generateMipmaps&&k.generateMipmap(Gt),Ft.unbindTexture()},this.initRenderTarget=function(L){Tt.get(L).__webglFramebuffer===void 0&&Wt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?Wt.setTextureCube(L,0):L.isData3DTexture?Wt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Wt.setTexture2DArray(L,0):Wt.setTexture2D(L,0),Ft.unbindTexture()},this.resetState=function(){H=0,D=0,O=null,Ft.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===qh?"display-p3":"srgb",e.unpackColorSpace=Ae.workingColorSpace===bc?"display-p3":"srgb"}}class np{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new qt(t),this.density=e}clone(){return new np(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ip{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=n}clone(){return new ip(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class tS extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ce,this.environmentIntensity=1,this.environmentRotation=new Ce,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class sp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=vh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return jh("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rn=new C;class Wo{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Rn.fromBufferAttribute(this,e),Rn.applyMatrix4(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Rn.fromBufferAttribute(this,e),Rn.applyNormalMatrix(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Rn.fromBufferAttribute(this,e),Rn.transformDirection(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=li(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=li(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=li(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=li(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new gn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Wo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class rM extends Yn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let gr;const ro=new C,xr=new C,_r=new C,vr=new gt,oo=new gt,rp=new Qt,Aa=new C,ao=new C,Ra=new C,Ef=new gt,hl=new gt,Af=new gt;class eS extends Xe{constructor(t=new rM){if(super(),this.isSprite=!0,this.type="Sprite",gr===void 0){gr=new _e;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new sp(e,5);gr.setIndex([0,1,2,0,2,3]),gr.setAttribute("position",new Wo(n,3,0,!1)),gr.setAttribute("uv",new Wo(n,2,3,!1))}this.geometry=gr,this.material=t,this.center=new gt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xr.setFromMatrixScale(this.matrixWorld),rp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_r.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xr.multiplyScalar(-_r.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Ca(Aa.set(-.5,-.5,0),_r,o,xr,s,r),Ca(ao.set(.5,-.5,0),_r,o,xr,s,r),Ca(Ra.set(.5,.5,0),_r,o,xr,s,r),Ef.set(0,0),hl.set(1,0),Af.set(1,1);let a=t.ray.intersectTriangle(Aa,ao,Ra,!1,ro);if(a===null&&(Ca(ao.set(-.5,.5,0),_r,o,xr,s,r),hl.set(0,1),a=t.ray.intersectTriangle(Aa,Ra,ao,!1,ro),a===null))return;const l=t.ray.origin.distanceTo(ro);l<t.near||l>t.far||e.push({distance:l,point:ro.clone(),uv:hi.getInterpolation(ro,Aa,ao,Ra,Ef,hl,Af,new gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ca(i,t,e,n,s,r){vr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(oo.x=r*vr.x-s*vr.y,oo.y=s*vr.x+r*vr.y):oo.copy(vr),i.copy(t),i.x+=oo.x,i.y+=oo.y,i.applyMatrix4(rp)}const Rf=new C,Cf=new Ne,Pf=new Ne,oM=new C,Lf=new Qt,Pa=new C,ul=new kn,If=new Qt,fl=new $o;class aM extends ft{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Cu,this.bindMatrix=new Qt,this.bindMatrixInverse=new Qt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Pa),this.boundingBox.expandByPoint(Pa)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new kn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Pa),this.boundingSphere.expandByPoint(Pa)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ul.copy(this.boundingSphere),ul.applyMatrix4(s),t.ray.intersectsSphere(ul)!==!1&&(If.copy(s).invert(),fl.copy(t.ray).applyMatrix4(If),!(this.boundingBox!==null&&fl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,fl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Ne,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Cu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Mm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;Cf.fromBufferAttribute(s.attributes.skinIndex,t),Pf.fromBufferAttribute(s.attributes.skinWeight,t),Rf.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=Pf.getComponent(r);if(o!==0){const a=Cf.getComponent(r);Lf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(oM.copy(Rf).applyMatrix4(Lf),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class op extends Xe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ao extends hn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ln,h=Ln,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Df=new Qt,cM=new Qt;class Qh{constructor(t=[],e=[]){this.uuid=si(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Qt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Qt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:cM;Df.multiplyMatrices(a,e[r]),Df.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Qh(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Ao(e,t,t,zn,Wn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new op),this.bones.push(o),this.boneInverses.push(new Qt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class uc extends gn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Mr=new Qt,Nf=new Qt,La=[],Uf=new Xn,lM=new Qt,co=new ft,lo=new kn;class tu extends ft{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new uc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,lM)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Mr),Uf.copy(t.boundingBox).applyMatrix4(Mr),this.boundingBox.union(Uf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Mr),lo.copy(t.boundingSphere).applyMatrix4(Mr),this.boundingSphere.union(lo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(co.geometry=this.geometry,co.material=this.material,co.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lo.copy(this.boundingSphere),lo.applyMatrix4(n),t.ray.intersectsSphere(lo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Mr),Nf.multiplyMatrices(n,Mr),co.matrixWorld=Nf,co.raycast(t,La);for(let o=0,a=La.length;o<a;o++){const l=La[o];l.instanceId=r,l.object=this,e.push(l)}La.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new uc(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ao(new Float32Array(s*this.count),s,this.count,Gh,Wn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function hM(i,t){return i.z-t.z}function uM(i,t){return t.z-i.z}class fM{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n){const s=this.pool,r=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const o=s[this.index];r.push(o),this.index++,o.start=t.start,o.count=t.count,o.z=e,o.index=n}reset(){this.list.length=0,this.index=0}}const is=new Qt,dl=new Qt,dM=new Qt,pM=new qt(1,1,1),zf=new Qt,pl=new Tc,Ia=new Xn,Cs=new kn,ho=new C,Of=new C,mM=new C,ml=new fM,Sn=new ft,Da=[];function gM(i,t,e=0){const n=t.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==t.array.constructor){const s=i.count;for(let r=0;r<s;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,i.getComponent(r,o))}else t.array.set(i.array,e*n);t.needsUpdate=!0}class nS extends ft{get maxInstanceCount(){return this._maxInstanceCount}constructor(t,e,n=e*2,s){super(new _e,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new Ao(e,t,t,zn,Wn);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new Ao(e,t,t,wc,ps);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxIndexCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new Ao(e,t,t,zn,Wn);n.colorSpace=Ae.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const o=t.getAttribute(r),{array:a,itemSize:l,normalized:c}=o,h=new a.constructor(n*l),u=new gn(h,l,c);e.setAttribute(r,u)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(s):new Uint16Array(s);e.setIndex(new gn(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const s=t.getAttribute(n),r=e.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);const t=this._geometryCount,e=this.boundingBox,n=this._drawInfo;e.makeEmpty();for(let s=0;s<t;s++){if(n[s].active===!1)continue;const r=n[s].geometryIndex;this.getMatrixAt(s,is),this.getBoundingBoxAt(r,Ia).applyMatrix4(is),e.union(Ia)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);const t=this.boundingSphere,e=this._drawInfo;t.makeEmpty();for(let n=0,s=e.length;n<s;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,is),this.getBoundingSphereAt(r,Cs).applyMatrix4(is),t.union(Cs)}}addInstance(t){if(this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");this._drawInfo.push({visible:!0,active:!0,geometryIndex:t});const e=this._drawInfo.length-1,n=this._matricesTexture,s=n.image.data;dM.toArray(s,e*16),n.needsUpdate=!0;const r=this._colorsTexture;return r&&(pM.toArray(r.image.data,e*4),r.needsUpdate=!0),e}addGeometry(t,e=-1,n=-1){if(this._initializeGeometry(t),this._validateGeometry(t),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const s={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let r=null;const o=this._reservedRanges,a=this._drawRanges,l=this._bounds;this._geometryCount!==0&&(r=o[o.length-1]),e===-1?s.vertexCount=t.getAttribute("position").count:s.vertexCount=e,r===null?s.vertexStart=0:s.vertexStart=r.vertexStart+r.vertexCount;const c=t.getIndex(),h=c!==null;if(h&&(n===-1?s.indexCount=c.count:s.indexCount=n,r===null?s.indexStart=0:s.indexStart=r.indexStart+r.indexCount),s.indexStart!==-1&&s.indexStart+s.indexCount>this._maxIndexCount||s.vertexStart+s.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const u=this._geometryCount;return this._geometryCount++,o.push(s),a.push({start:h?s.indexStart:s.vertexStart,count:-1}),l.push({boxInitialized:!1,box:new Xn,sphereInitialized:!1,sphere:new kn}),this.setGeometryAt(u,t),u}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._reservedRanges[t];if(s&&o.count>a.indexCount||e.attributes.position.count>a.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const l=a.vertexStart,c=a.vertexCount;for(const p in n.attributes){const x=e.getAttribute(p),_=n.getAttribute(p);gM(x,_,l);const m=x.itemSize;for(let g=x.count,M=c;g<M;g++){const y=l+g;for(let w=0;w<m;w++)_.setComponent(y,w,0)}_.needsUpdate=!0,_.addUpdateRange(l*m,c*m)}if(s){const p=a.indexStart;for(let x=0;x<o.count;x++)r.setX(p+x,l+o.getX(x));for(let x=o.count,_=a.indexCount;x<_;x++)r.setX(p+x,l);r.needsUpdate=!0,r.addUpdateRange(p,a.indexCount)}const h=this._bounds[t];e.boundingBox!==null?(h.box.copy(e.boundingBox),h.boxInitialized=!0):h.boxInitialized=!1,e.boundingSphere!==null?(h.sphere.copy(e.boundingSphere),h.sphereInitialized=!0):h.sphereInitialized=!1;const u=this._drawRanges[t],f=e.getAttribute("position");return u.count=s?o.count:f.count,this._visibilityChanged=!0,t}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this._bounds[t],s=n.box,r=this.geometry;if(n.boxInitialized===!1){s.makeEmpty();const o=r.index,a=r.attributes.position,l=this._drawRanges[t];for(let c=l.start,h=l.start+l.count;c<h;c++){let u=c;o&&(u=o.getX(u)),s.expandByPoint(ho.fromBufferAttribute(a,u))}n.boxInitialized=!0}return e.copy(s),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this._bounds[t],s=n.sphere,r=this.geometry;if(n.sphereInitialized===!1){s.makeEmpty(),this.getBoundingBoxAt(t,Ia),Ia.getCenter(s.center);const o=r.index,a=r.attributes.position,l=this._drawRanges[t];let c=0;for(let h=l.start,u=l.start+l.count;h<u;h++){let f=h;o&&(f=o.getX(f)),ho.fromBufferAttribute(a,f),c=Math.max(c,s.center.distanceToSquared(ho))}s.radius=Math.sqrt(c),n.sphereInitialized=!0}return e.copy(s),e}setMatrixAt(t,e){const n=this._drawInfo,s=this._matricesTexture,r=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?this:(e.toArray(r,t*16),s.needsUpdate=!0,this)}getMatrixAt(t,e){const n=this._drawInfo,s=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?null:e.fromArray(s,t*16)}setColorAt(t,e){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,s=this._colorsTexture.image.data,r=this._drawInfo;return t>=r.length||r[t].active===!1?this:(e.toArray(s,t*4),n.needsUpdate=!0,this)}getColorAt(t,e){const n=this._colorsTexture.image.data,s=this._drawInfo;return t>=s.length||s[t].active===!1?null:e.fromArray(n,t*4)}setVisibleAt(t,e){const n=this._drawInfo;return t>=n.length||n[t].active===!1||n[t].visible===e?this:(n[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){const e=this._drawInfo;return t>=e.length||e[t].active===!1?!1:e[t].visible}raycast(t,e){const n=this._drawInfo,s=this._drawRanges,r=this.matrixWorld,o=this.geometry;Sn.material=this.material,Sn.geometry.index=o.index,Sn.geometry.attributes=o.attributes,Sn.geometry.boundingBox===null&&(Sn.geometry.boundingBox=new Xn),Sn.geometry.boundingSphere===null&&(Sn.geometry.boundingSphere=new kn);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;const c=n[a].geometryIndex,h=s[c];Sn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,Sn.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,Sn.geometry.boundingBox),this.getBoundingSphereAt(c,Sn.geometry.boundingSphere),Sn.raycast(t,Da);for(let u=0,f=Da.length;u<f;u++){const p=Da[u];p.object=this,p.batchId=a,e.push(p)}Da.length=0}Sn.material=null,Sn.geometry.index=null,Sn.geometry.attributes={},Sn.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._drawRanges=t._drawRanges.map(e=>({...e})),this._reservedRanges=t._reservedRanges.map(e=>({...e})),this._drawInfo=t._drawInfo.map(e=>({...e})),this._bounds=t._bounds.map(e=>({boxInitialized:e.boxInitialized,box:e.box.clone(),sphereInitialized:e.sphereInitialized,sphere:e.sphere.clone()})),this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(t,e,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=s.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=this._drawInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._drawRanges,f=this.perObjectFrustumCulled,p=this._indirectTexture,x=p.image.data;f&&(zf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),pl.setFromProjectionMatrix(zf,t.coordinateSystem));let _=0;if(this.sortObjects){dl.copy(this.matrixWorld).invert(),ho.setFromMatrixPosition(n.matrixWorld).applyMatrix4(dl),Of.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(dl);for(let M=0,y=l.length;M<y;M++)if(l[M].visible&&l[M].active){const w=l[M].geometryIndex;this.getMatrixAt(M,is),this.getBoundingSphereAt(w,Cs).applyMatrix4(is);let H=!1;if(f&&(H=!pl.intersectsSphere(Cs)),!H){const D=mM.subVectors(Cs.center,ho).dot(Of);ml.push(u[w],D,M)}}const m=ml.list,g=this.customSort;g===null?m.sort(r.transparent?uM:hM):g.call(this,m,n);for(let M=0,y=m.length;M<y;M++){const w=m[M];c[_]=w.start*a,h[_]=w.count,x[_]=w.index,_++}ml.reset()}else for(let m=0,g=l.length;m<g;m++)if(l[m].visible&&l[m].active){const M=l[m].geometryIndex;let y=!1;if(f&&(this.getMatrixAt(m,is),this.getBoundingSphereAt(M,Cs).applyMatrix4(is),y=!pl.intersectsSphere(Cs)),!y){const w=u[M];c[_]=w.start*a,h[_]=w.count,x[_]=m,_++}}p.needsUpdate=!0,this._multiDrawCount=_,this._visibilityChanged=!1}onBeforeShadow(t,e,n,s,r,o){this.onBeforeRender(t,null,s,r,o)}}class eu extends Yn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fc=new C,dc=new C,Ff=new Qt,uo=new $o,Na=new kn,gl=new C,Bf=new C;class nu extends Xe{constructor(t=new _e,e=new eu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)fc.fromBufferAttribute(e,s-1),dc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=fc.distanceTo(dc);t.setAttribute("lineDistance",new Nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(s),Na.radius+=r,t.ray.intersectsSphere(Na)===!1)return;Ff.copy(s).invert(),uo.copy(t.ray).applyMatrix4(Ff);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let _=p,m=x-1;_<m;_+=c){const g=h.getX(_),M=h.getX(_+1),y=Ua(this,t,uo,l,g,M);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(x-1),m=h.getX(p),g=Ua(this,t,uo,l,_,m);g&&e.push(g)}}else{const p=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let _=p,m=x-1;_<m;_+=c){const g=Ua(this,t,uo,l,_,_+1);g&&e.push(g)}if(this.isLineLoop){const _=Ua(this,t,uo,l,x-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ua(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(fc.fromBufferAttribute(o,s),dc.fromBufferAttribute(o,r),e.distanceSqToSegment(fc,dc,gl,Bf)>n)return;gl.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(gl);if(!(l<t.near||l>t.far))return{distance:l,point:Bf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,object:i}}const kf=new C,Hf=new C;class xM extends nu{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)kf.fromBufferAttribute(e,s),Hf.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+kf.distanceTo(Hf);t.setAttribute("lineDistance",new Nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _M extends nu{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class ap extends Yn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Vf=new Qt,yh=new $o,za=new kn,Oa=new C;class vM extends Xe{constructor(t=new _e,e=new ap){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(s),za.radius+=r,t.ray.intersectsSphere(za)===!1)return;Vf.copy(s).invert(),yh.copy(t.ray).applyMatrix4(Vf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let x=f,_=p;x<_;x++){const m=c.getX(x);Oa.fromBufferAttribute(u,m),Gf(Oa,m,l,s,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,_=p;x<_;x++)Oa.fromBufferAttribute(u,x),Gf(Oa,x,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Gf(i,t,e,n,s,r,o){const a=yh.distanceSqToPoint(i);if(a<e){const l=new C;yh.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class ti extends hn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Si{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new gt:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,s=[],r=[],o=[],a=new C,l=new Qt;for(let p=0;p<=t;p++){const x=p/t;s[p]=this.getTangentAt(x,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(on(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,x))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(on(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],p*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class iu extends Si{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new gt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class MM extends iu{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function su(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Fa=new C,xl=new su,_l=new su,vl=new su;class Zs extends Si{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Fa.subVectors(s[0],s[1]).add(s[0]),c=Fa);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Fa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Fa),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),x<1e-4&&(x=_),m<1e-4&&(m=_),xl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,x,_,m),_l.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,x,_,m),vl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,x,_,m)}else this.curveType==="catmullrom"&&(xl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),_l.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),vl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(xl.calc(l),_l.calc(l),vl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Wf(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function yM(i,t){const e=1-i;return e*e*t}function SM(i,t){return 2*(1-i)*i*t}function wM(i,t){return i*i*t}function Ro(i,t,e,n){return yM(i,t)+SM(i,e)+wM(i,n)}function bM(i,t){const e=1-i;return e*e*e*t}function TM(i,t){const e=1-i;return 3*e*e*i*t}function EM(i,t){return 3*(1-i)*i*i*t}function AM(i,t){return i*i*i*t}function Co(i,t,e,n,s){return bM(i,t)+TM(i,e)+EM(i,n)+AM(i,s)}class cp extends Si{constructor(t=new gt,e=new gt,n=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new gt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Co(t,s.x,r.x,o.x,a.x),Co(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Xo extends Si{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Co(t,s.x,r.x,o.x,a.x),Co(t,s.y,r.y,o.y,a.y),Co(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lp extends Si{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ac extends Si{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hp extends Si{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ro(t,s.x,r.x,o.x),Ro(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ru extends Si{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ro(t,s.x,r.x,o.x),Ro(t,s.y,r.y,o.y),Ro(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class up extends Si{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Wf(a,l.x,c.x,h.x,u.x),Wf(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new gt().fromArray(s))}return this}}var Sh=Object.freeze({__proto__:null,ArcCurve:MM,CatmullRomCurve3:Zs,CubicBezierCurve:cp,CubicBezierCurve3:Xo,EllipseCurve:iu,LineCurve:lp,LineCurve3:Ac,QuadraticBezierCurve:hp,QuadraticBezierCurve3:ru,SplineCurve:up});class Rc extends Si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Sh[s.type]().fromJSON(s))}return this}}class Xf extends Rc{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new lp(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new hp(this.currentPoint.clone(),new gt(t,e),new gt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new cp(this.currentPoint.clone(),new gt(t,e),new gt(n,s),new gt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new up(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new iu(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class fp extends _e{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new C,h=new gt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Nt(o,3)),this.setAttribute("normal",new Nt(a,3)),this.setAttribute("uv",new Nt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fp(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ni extends _e{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let x=0;const _=[],m=n/2;let g=0;M(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Nt(u,3)),this.setAttribute("normal",new Nt(f,3)),this.setAttribute("uv",new Nt(p,2));function M(){const w=new C,H=new C;let D=0;const O=(e-t)/n;for(let G=0;G<=r;G++){const P=[],T=G/r,I=T*(e-t)+t;for(let Y=0;Y<=s;Y++){const Z=Y/s,nt=Z*l+a,at=Math.sin(nt),it=Math.cos(nt);H.x=I*at,H.y=-T*n+m,H.z=I*it,u.push(H.x,H.y,H.z),w.set(at,O,it).normalize(),f.push(w.x,w.y,w.z),p.push(Z,1-T),P.push(x++)}_.push(P)}for(let G=0;G<s;G++)for(let P=0;P<r;P++){const T=_[P][G],I=_[P+1][G],Y=_[P+1][G+1],Z=_[P][G+1];h.push(T,I,Z),h.push(I,Y,Z),D+=6}c.addGroup(g,D,0),g+=D}function y(w){const H=x,D=new gt,O=new C;let G=0;const P=w===!0?t:e,T=w===!0?1:-1;for(let Y=1;Y<=s;Y++)u.push(0,m*T,0),f.push(0,T,0),p.push(.5,.5),x++;const I=x;for(let Y=0;Y<=s;Y++){const nt=Y/s*l+a,at=Math.cos(nt),it=Math.sin(nt);O.x=P*it,O.y=m*T,O.z=P*at,u.push(O.x,O.y,O.z),f.push(0,T,0),D.x=at*.5+.5,D.y=it*.5*T+.5,p.push(D.x,D.y),x++}for(let Y=0;Y<s;Y++){const Z=H+Y,nt=I+Y;w===!0?h.push(nt,nt+1,Z):h.push(nt+1,nt,Z),G+=3}c.addGroup(g,G,w===!0?1:2),g+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ou extends ni{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ou(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class au extends _e{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Nt(r,3)),this.setAttribute("normal",new Nt(r.slice(),3)),this.setAttribute("uv",new Nt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const y=new C,w=new C,H=new C;for(let D=0;D<e.length;D+=3)p(e[D+0],y),p(e[D+1],w),p(e[D+2],H),l(y,w,H,M)}function l(M,y,w,H){const D=H+1,O=[];for(let G=0;G<=D;G++){O[G]=[];const P=M.clone().lerp(w,G/D),T=y.clone().lerp(w,G/D),I=D-G;for(let Y=0;Y<=I;Y++)Y===0&&G===D?O[G][Y]=P:O[G][Y]=P.clone().lerp(T,Y/I)}for(let G=0;G<D;G++)for(let P=0;P<2*(D-G)-1;P++){const T=Math.floor(P/2);P%2===0?(f(O[G][T+1]),f(O[G+1][T]),f(O[G][T])):(f(O[G][T+1]),f(O[G+1][T+1]),f(O[G+1][T]))}}function c(M){const y=new C;for(let w=0;w<r.length;w+=3)y.x=r[w+0],y.y=r[w+1],y.z=r[w+2],y.normalize().multiplyScalar(M),r[w+0]=y.x,r[w+1]=y.y,r[w+2]=y.z}function h(){const M=new C;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const w=m(M)/2/Math.PI+.5,H=g(M)/Math.PI+.5;o.push(w,1-H)}x(),u()}function u(){for(let M=0;M<o.length;M+=6){const y=o[M+0],w=o[M+2],H=o[M+4],D=Math.max(y,w,H),O=Math.min(y,w,H);D>.9&&O<.1&&(y<.2&&(o[M+0]+=1),w<.2&&(o[M+2]+=1),H<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function p(M,y){const w=M*3;y.x=t[w+0],y.y=t[w+1],y.z=t[w+2]}function x(){const M=new C,y=new C,w=new C,H=new C,D=new gt,O=new gt,G=new gt;for(let P=0,T=0;P<r.length;P+=9,T+=6){M.set(r[P+0],r[P+1],r[P+2]),y.set(r[P+3],r[P+4],r[P+5]),w.set(r[P+6],r[P+7],r[P+8]),D.set(o[T+0],o[T+1]),O.set(o[T+2],o[T+3]),G.set(o[T+4],o[T+5]),H.copy(M).add(y).add(w).divideScalar(3);const I=m(H);_(D,T+0,M,I),_(O,T+2,y,I),_(G,T+4,w,I)}}function _(M,y,w,H){H<0&&M.x===1&&(o[y]=M.x-1),w.x===0&&w.z===0&&(o[y]=H/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new au(t.vertices,t.indices,t.radius,t.details)}}class wo extends Xf{constructor(t){super(t),this.uuid=si(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Xf().fromJSON(s))}return this}}const RM={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=dp(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,p;if(n&&(r=DM(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let x=e;x<s;x+=e)u=i[x],f=i[x+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return Yo(r,o,e,a,l,p,0),o}};function dp(i,t,e,n,s){let r,o;if(s===WM(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Yf(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Yf(r,i[r],i[r+1],o);return o&&Cc(o,o.next)&&(Ko(o),o=o.next),o}function qs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Cc(e,e.next)||$e(e.prev,e,e.next)===0)){if(Ko(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Yo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&FM(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?PM(i,n,s,r):CM(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Ko(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=LM(qs(i),t,e),Yo(i,t,e,n,s,r,2)):o===2&&IM(i,t,e,n,s,r):Yo(qs(i),t,e,n,s,r,1);break}}}function CM(i){const t=i.prev,e=i,n=i.next;if($e(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=f&&x.y>=u&&x.y<=p&&br(s,a,r,l,o,c,x.x,x.y)&&$e(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function PM(i,t,e,n){const s=i.prev,r=i,o=i.next;if($e(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,x=h<u?h<f?h:f:u<f?u:f,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,g=wh(p,x,t,e,n),M=wh(_,m,t,e,n);let y=i.prevZ,w=i.nextZ;for(;y&&y.z>=g&&w&&w.z<=M;){if(y.x>=p&&y.x<=_&&y.y>=x&&y.y<=m&&y!==s&&y!==o&&br(a,h,l,u,c,f,y.x,y.y)&&$e(y.prev,y,y.next)>=0||(y=y.prevZ,w.x>=p&&w.x<=_&&w.y>=x&&w.y<=m&&w!==s&&w!==o&&br(a,h,l,u,c,f,w.x,w.y)&&$e(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;y&&y.z>=g;){if(y.x>=p&&y.x<=_&&y.y>=x&&y.y<=m&&y!==s&&y!==o&&br(a,h,l,u,c,f,y.x,y.y)&&$e(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;w&&w.z<=M;){if(w.x>=p&&w.x<=_&&w.y>=x&&w.y<=m&&w!==s&&w!==o&&br(a,h,l,u,c,f,w.x,w.y)&&$e(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function LM(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Cc(s,r)&&pp(s,n,n.next,r)&&qo(s,r)&&qo(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ko(n),Ko(n.next),n=i=r),n=n.next}while(n!==i);return qs(n)}function IM(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&HM(o,a)){let l=mp(o,a);o=qs(o,o.next),l=qs(l,l.next),Yo(o,t,e,n,s,r,0),Yo(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function DM(i,t,e,n){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=dp(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(kM(c));for(s.sort(NM),r=0;r<s.length;r++)e=UM(s[r],e);return e}function NM(i,t){return i.x-t.x}function UM(i,t){const e=zM(i,t);if(!e)return t;const n=mp(e,i);return qs(n,n.next),qs(e,e.next)}function zM(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&br(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),qo(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&OM(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function OM(i,t){return $e(i.prev,i,t.prev)<0&&$e(t.next,i,i.next)<0}function FM(i,t,e,n){let s=i;do s.z===0&&(s.z=wh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,BM(s)}function BM(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function wh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function kM(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function br(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function HM(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!VM(i,t)&&(qo(i,t)&&qo(t,i)&&GM(i,t)&&($e(i.prev,i,t.prev)||$e(i,t.prev,t))||Cc(i,t)&&$e(i.prev,i,i.next)>0&&$e(t.prev,t,t.next)>0)}function $e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Cc(i,t){return i.x===t.x&&i.y===t.y}function pp(i,t,e,n){const s=ka($e(i,t,e)),r=ka($e(i,t,n)),o=ka($e(e,n,i)),a=ka($e(e,n,t));return!!(s!==r&&o!==a||s===0&&Ba(i,e,t)||r===0&&Ba(i,n,t)||o===0&&Ba(e,i,n)||a===0&&Ba(e,t,n))}function Ba(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ka(i){return i>0?1:i<0?-1:0}function VM(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&pp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function qo(i,t){return $e(i.prev,i,i.next)<0?$e(i,t,i.next)>=0&&$e(i,i.prev,t)>=0:$e(i,t,i.prev)<0||$e(i,i.next,t)<0}function GM(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function mp(i,t){const e=new bh(i.i,i.x,i.y),n=new bh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Yf(i,t,e,n){const s=new bh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ko(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function bh(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function WM(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Gs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Gs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];qf(t),Kf(n,t);let o=t.length;e.forEach(qf);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Kf(n,e[l]);const a=RM.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function qf(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Kf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class cu extends au{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new cu(t.radius,t.detail)}}class pc extends _e{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,p=new C,x=new gt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const g=r+m/n*o;p.x=u*Math.cos(g),p.y=u*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),x.x=(p.x/e+1)/2,x.y=(p.y/e+1)/2,h.push(x.x,x.y)}u+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let g=0;g<n;g++){const M=g+m,y=M,w=M+n+1,H=M+n+2,D=M+1;a.push(y,w,D),a.push(w,H,D)}}this.setIndex(a),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(c,3)),this.setAttribute("uv",new Nt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Tr extends _e{constructor(t=new wo([new gt(0,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Nt(s,3)),this.setAttribute("normal",new Nt(r,3)),this.setAttribute("uv",new Nt(o,2));function c(h){const u=s.length/3,f=h.extractPoints(e);let p=f.shape;const x=f.holes;Gs.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,g=x.length;m<g;m++){const M=x[m];Gs.isClockWise(M)===!0&&(x[m]=M.reverse())}const _=Gs.triangulateShape(p,x);for(let m=0,g=x.length;m<g;m++){const M=x[m];p=p.concat(M)}for(let m=0,g=p.length;m<g;m++){const M=p[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,g=_.length;m<g;m++){const M=_[m],y=M[0]+u,w=M[1]+u,H=M[2]+u;n.push(y,w,H),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return XM(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Tr(n,t.curveSegments)}}function XM(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class mc extends _e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new C,f=new C,p=[],x=[],_=[],m=[];for(let g=0;g<=n;g++){const M=[],y=g/n;let w=0;g===0&&o===0?w=.5/e:g===n&&l===Math.PI&&(w=-.5/e);for(let H=0;H<=e;H++){const D=H/e;u.x=-t*Math.cos(s+D*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+D*r)*Math.sin(o+y*a),x.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(D+w,1-y),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){const y=h[g][M+1],w=h[g][M],H=h[g+1][M],D=h[g+1][M+1];(g!==0||o>0)&&p.push(y,w,D),(g!==n-1||l<Math.PI)&&p.push(w,H,D)}this.setIndex(p),this.setAttribute("position",new Nt(x,3)),this.setAttribute("normal",new Nt(_,3)),this.setAttribute("uv",new Nt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class lu extends _e{constructor(t=new ru(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new C,l=new C,c=new gt;let h=new C;const u=[],f=[],p=[],x=[];_(),this.setIndex(x),this.setAttribute("position",new Nt(u,3)),this.setAttribute("normal",new Nt(f,3)),this.setAttribute("uv",new Nt(p,2));function _(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),M(),g()}function m(y){h=t.getPointAt(y/e,h);const w=o.normals[y],H=o.binormals[y];for(let D=0;D<=s;D++){const O=D/s*Math.PI*2,G=Math.sin(O),P=-Math.cos(O);l.x=P*w.x+G*H.x,l.y=P*w.y+G*H.y,l.z=P*w.z+G*H.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let y=1;y<=e;y++)for(let w=1;w<=s;w++){const H=(s+1)*(y-1)+(w-1),D=(s+1)*y+(w-1),O=(s+1)*y+w,G=(s+1)*(y-1)+w;x.push(H,D,G),x.push(D,O,G)}}function M(){for(let y=0;y<=e;y++)for(let w=0;w<=s;w++)c.x=y/e,c.y=w/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new lu(new Sh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class ne extends Yn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yh,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ce,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wi extends ne{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return on(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class iS extends Yn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yh,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ce,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sS extends eu{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function Ha(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function YM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function qM(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function jf(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)s[o++]=i[a+l]}return s}function gp(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}class Qo{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class KM extends Qo{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pu,endingEnd:Pu}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Lu:r=t,a=2*e-n;break;case Iu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Lu:o=t,l=2*n-e;break;case Iu:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,x=(n-e)/(s-e),_=x*x,m=_*x,g=-f*m+2*f*_-f*x,M=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*x+1,y=(-1-p)*m+(1.5+p)*_+.5*x,w=p*m-p*_;for(let H=0;H!==a;++H)r[H]=g*o[h+H]+M*o[c+H]+y*o[l+H]+w*o[u+H];return r}}class jM extends Qo{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}}class ZM extends Qo{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class bi{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ha(e,this.TimeBufferType),this.values=Ha(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ha(t.times,Array),values:Ha(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ZM(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new jM(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new KM(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ho:e=this.InterpolantFactoryMethodDiscrete;break;case Vo:e=this.InterpolantFactoryMethodLinear;break;case Fc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ho;case this.InterpolantFactoryMethodLinear:return Vo;case this.InterpolantFactoryMethodSmooth:return Fc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&YM(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Fc,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{const u=a*n,f=u-n,p=u+n;for(let x=0;x!==n;++x){const _=e[u+x];if(_!==e[f+x]||_!==e[p+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const u=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=Vo;class Yr extends bi{constructor(t,e,n){super(t,e,n)}}Yr.prototype.ValueTypeName="bool";Yr.prototype.ValueBufferType=Array;Yr.prototype.DefaultInterpolation=Ho;Yr.prototype.InterpolantFactoryMethodLinear=void 0;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;class xp extends bi{}xp.prototype.ValueTypeName="color";class Br extends bi{}Br.prototype.ValueTypeName="number";class JM extends Qo{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e);let c=t*a;for(let h=c+a;c!==h;c+=4)yi.slerpFlat(r,0,o,c-a,o,c,l);return r}}class kr extends bi{InterpolantFactoryMethodLinear(t){return new JM(this.times,this.values,this.getValueSize(),t)}}kr.prototype.ValueTypeName="quaternion";kr.prototype.InterpolantFactoryMethodSmooth=void 0;class qr extends bi{constructor(t,e,n){super(t,e,n)}}qr.prototype.ValueTypeName="string";qr.prototype.ValueBufferType=Array;qr.prototype.DefaultInterpolation=Ho;qr.prototype.InterpolantFactoryMethodLinear=void 0;qr.prototype.InterpolantFactoryMethodSmooth=void 0;class Hr extends bi{}Hr.prototype.ValueTypeName="vector";class $M{constructor(t="",e=-1,n=[],s=ym){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=si(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(ty(n[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(bi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=qM(l);l=jf(l,1,h),c=jf(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Br(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let f=s[u];f||(s[u]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,p,x,_){if(p.length!==0){const m=[],g=[];gp(p,m,g,x),m.length!==0&&_.push(new u(f,m,g))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let x;for(x=0;x<f.length;x++)if(f[x].morphTargets)for(let _=0;_<f[x].morphTargets.length;_++)p[f[x].morphTargets[_]]=-1;for(const _ in p){const m=[],g=[];for(let M=0;M!==f[x].morphTargets.length;++M){const y=f[x];m.push(y.time),g.push(y.morphTarget===_?1:0)}s.push(new Br(".morphTargetInfluence["+_+"]",m,g))}l=p.length*o}else{const p=".bones["+e[u].name+"]";n(Hr,p+".position",f,"pos",s),n(kr,p+".quaternion",f,"rot",s),n(Hr,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function QM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Br;case"vector":case"vector2":case"vector3":case"vector4":return Hr;case"color":return xp;case"quaternion":return kr;case"bool":case"boolean":return Yr;case"string":return qr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function ty(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=QM(i.type);if(i.times===void 0){const e=[],n=[];gp(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const ls={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ey{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const p=c[u],x=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null}}}const ny=new ey;class Kr{constructor(t){this.manager=t!==void 0?t:ny,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Kr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Li={};class iy extends Error{constructor(t,e){super(t),this.response=e}}class _p extends Kr{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=ls.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Li[t]!==void 0){Li[t].push({onLoad:e,onProgress:n,onError:s});return}Li[t]=[],Li[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Li[t],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,x=p!==0;let _=0;const m=new ReadableStream({start(g){M();function M(){u.read().then(({done:y,value:w})=>{if(y)g.close();else{_+=w.byteLength;const H=new ProgressEvent("progress",{lengthComputable:x,loaded:_,total:p});for(let D=0,O=h.length;D<O;D++){const G=h[D];G.onProgress&&G.onProgress(H)}g.enqueue(w),M()}},y=>{g.error(y)})}}});return new Response(m)}else throw new iy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(x=>p.decode(x))}}}).then(c=>{ls.add(t,c);const h=Li[t];delete Li[t];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Li[t];if(h===void 0)throw this.manager.itemError(t),c;delete Li[t];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class sy extends Kr{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ls.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Go("img");function l(){h(),ls.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class ry extends Kr{constructor(t){super(t)}load(t,e,n,s){const r=new hn,o=new sy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Pc extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class rS extends Pc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ml=new Qt,Zf=new C,Jf=new C;class hu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tc,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Zf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zf),Jf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jf),e.updateMatrixWorld(),Ml.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ml),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ml)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class oy extends hu{constructor(){super(new Un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Or*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class ay extends Pc{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new oy}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const $f=new Qt,fo=new C,yl=new C;class cy extends hu{constructor(){super(new Un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new Ne(2,1,1,1),new Ne(0,1,1,1),new Ne(3,1,1,1),new Ne(1,1,1,1),new Ne(3,0,1,1),new Ne(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),fo.setFromMatrixPosition(t.matrixWorld),n.position.copy(fo),yl.copy(n.position),yl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(yl),n.updateMatrixWorld(),s.makeTranslation(-fo.x,-fo.y,-fo.z),$f.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($f)}}class ly extends Pc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new cy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class hy extends hu{constructor(){super(new Jh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uy extends Pc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new hy}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Po{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class fy extends Kr{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ls.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{e&&e(c),r.manager.itemEnd(t)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ls.add(t,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){s&&s(c),ls.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});ls.add(t,l),r.manager.itemStart(t)}}class oS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Qf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Qf(){return(typeof performance>"u"?Date:performance).now()}const uu="\\[\\]\\.:\\/",dy=new RegExp("["+uu+"]","g"),fu="[^"+uu+"]",py="[^"+uu.replace("\\.","")+"]",my=/((?:WC+[\/:])*)/.source.replace("WC",fu),gy=/(WCOD+)?/.source.replace("WCOD",py),xy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fu),_y=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fu),vy=new RegExp("^"+my+gy+xy+_y+"$"),My=["material","materials","bones","map"];class yy{constructor(t,e,n){const s=n||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class De{constructor(t,e,n){this.path=e,this.parsedPath=n||De.parseTrackName(e),this.node=De.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new De.Composite(t,e,n):new De(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(dy,"")}static parseTrackName(t){const e=vy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);My.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=De.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[s];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}De.Composite=yy;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const td=new Qt;class aS{constructor(t,e,n=0,s=1/0){this.ray=new $o(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Zh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return td.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(td),this}intersectObject(t,e=!0,n=[]){return Th(t,this,n,e),n.sort(ed),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Th(t[s],this,n,e);return n.sort(ed),n}}function ed(i,t){return i.distance-t.distance}function Th(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Th(r[o],t,e,!0)}}class cS{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(on(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const nd=new C,Va=new C;class lS{constructor(t=new C,e=new C){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){nd.subVectors(t,this.start),Va.subVectors(this.end,this.start);const n=Va.dot(Va);let r=Va.dot(nd)/n;return e&&(r=on(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fh);function Us(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new _e;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let x=0;x<p.count;++x)u.push(p.getX(x)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=id(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const p=[];for(let _=0;_<o[h].length;++_)p.push(o[h][_][f]);const x=id(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function id(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new gn(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,p=h.count;f<p;f++)for(let x=0;x<e;x++){const _=h.getComponent(f,x);a.setComponent(f+u,x,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function sd(i,t){if(t===Sm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===_h||t===Bd){let e=i.getIndex();if(e===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=e.count-2,s=[];if(t===_h)for(let o=1;o<=n;o++)s.push(e.getX(0)),s.push(e.getX(o)),s.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(e.getX(o)),s.push(e.getX(o+1)),s.push(e.getX(o+2))):(s.push(e.getX(o+2)),s.push(e.getX(o+1)),s.push(e.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}class Sy extends Kr{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Ay(e)}),this.register(function(e){return new Ry(e)}),this.register(function(e){return new Oy(e)}),this.register(function(e){return new Fy(e)}),this.register(function(e){return new By(e)}),this.register(function(e){return new Py(e)}),this.register(function(e){return new Ly(e)}),this.register(function(e){return new Iy(e)}),this.register(function(e){return new Dy(e)}),this.register(function(e){return new Ey(e)}),this.register(function(e){return new Ny(e)}),this.register(function(e){return new Cy(e)}),this.register(function(e){return new zy(e)}),this.register(function(e){return new Uy(e)}),this.register(function(e){return new by(e)}),this.register(function(e){return new ky(e)}),this.register(function(e){return new Hy(e)})}load(t,e,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Po.extractUrlBase(t);o=Po.resolveURL(c,this.path)}else o=Po.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){s?s(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new _p(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===vp){try{o[ye.KHR_BINARY_GLTF]=new Vy(t)}catch(u){s&&s(u);return}r=JSON.parse(o[ye.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new e1(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case ye.KHR_MATERIALS_UNLIT:o[u]=new Ty;break;case ye.KHR_DRACO_MESH_COMPRESSION:o[u]=new Gy(r,this.dracoLoader);break;case ye.KHR_TEXTURE_TRANSFORM:o[u]=new Wy;break;case ye.KHR_MESH_QUANTIZATION:o[u]=new Xy;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(t,e){const n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}}function wy(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}const ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class by{constructor(t){this.parser=t,this.name=ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let s=e.cache.get(n);if(s)return s;const r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let c;const h=new qt(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],_n);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new uy(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ly(h),c.distance=u;break;case"spot":c=new ay(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,zi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),s=Promise.resolve(c),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class Ty{constructor(){this.name=ye.KHR_MATERIALS_UNLIT}getMaterialType(){return bn}extendParams(t,e,n){const s=[];t.color=new qt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],_n),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,nn))}return Promise.all(s)}}class Ey{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class Ay{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new gt(a,a)}return Promise.all(r)}}class Ry{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Cy{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Py{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new qt(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],_n)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,nn)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Ly{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Iy{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new qt().setRGB(a[0],a[1],a[2],_n),Promise.all(r)}}class Dy{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Ny{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new qt().setRGB(a[0],a[1],a[2],_n),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,nn)),Promise.all(r)}}class Uy{constructor(t){this.parser=t,this.name=ye.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class zy{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Oy{constructor(t){this.parser=t,this.name=ye.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class Fy{constructor(t){this.parser=t,this.name=ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class By{constructor(t){this.parser=t,this.name=ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class ky{constructor(t){this.name=ye.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,f,s.mode,s.filter),p})})}else return null}}class Hy{constructor(t){this.name=ye.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=e.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==ei.TRIANGLES&&c.mode!==ei.TRIANGLE_STRIP&&c.mode!==ei.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,p=[];for(const x of u){const _=new Qt,m=new C,g=new yi,M=new C(1,1,1),y=new tu(x.geometry,x.material,f);for(let w=0;w<f;w++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,w),l.SCALE&&M.fromBufferAttribute(l.SCALE,w),y.setMatrixAt(w,_.compose(m,g,M));for(const w in l)if(w==="_COLOR_0"){const H=l[w];y.instanceColor=new uc(H.array,H.itemSize,H.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&x.geometry.setAttribute(w,l[w]);Xe.prototype.copy.call(y,x),this.parser.assignFinalMaterial(y),p.push(y)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const vp="glTF",po=12,rd={JSON:1313821514,BIN:5130562};class Vy{constructor(t){this.name=ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,po),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==vp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-po,r=new DataView(t,po);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===rd.JSON){const c=new Uint8Array(t,po+o,a);this.content=n.decode(c)}else if(l===rd.BIN){const c=po+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Gy{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ye.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Eh[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=Eh[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[t.attributes[h]],p=Ir[f.componentType];c[u]=p.name,l[u]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(p){for(const x in p.attributes){const _=p.attributes[x],m=l[x];m!==void 0&&(_.normalized=m)}u(p)},a,c,_n,f)})})}}class Wy{constructor(){this.name=ye.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Xy{constructor(){this.name=ye.KHR_MESH_QUANTIZATION}}class Mp extends Qo{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-e,u=(n-e)/h,f=u*u,p=f*u,x=t*c,_=x-c,m=-2*p+3*f,g=p-f,M=1-m,y=g-f+u;for(let w=0;w!==a;w++){const H=o[_+w+a],D=o[_+w+l]*h,O=o[x+w+a],G=o[x+w]*h;r[w]=M*H+y*D+m*O+g*G}return r}}const Yy=new yi;class qy extends Mp{interpolate_(t,e,n,s){const r=super.interpolate_(t,e,n,s);return Yy.fromArray(r).normalize().toArray(r),r}}const ei={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ir={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},od={9728:Ln,9729:Gn,9984:Cd,9985:Ka,9986:yo,9987:Hi},ad={33071:cs,33648:oc,10497:Mi},Sl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Eh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ss={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ky={CUBICSPLINE:void 0,LINEAR:Vo,STEP:Ho},wl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function jy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ne({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xi})),i.DefaultMaterial}function Ps(i,t,e){for(const n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function zi(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Zy(i,t,e){let n=!1,s=!1,r=!1;for(let c=0,h=t.length;c<h;c++){const u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){const u=t[c];if(n){const f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){const f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Jy(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function $y(i){let t;const e=i.extensions&&i.extensions[ye.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+bl(e.attributes):t=i.indices+":"+bl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+bl(i.targets[n]);return t}function bl(i){let t="";const e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function Ah(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Qy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const t1=new Qt;class e1{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new wy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new ry(this.options.manager):this.textureLoader=new fy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _p(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ps(r,a,s),zi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){const o=e[s].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){const o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const s=t(e[n]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let s=0;s<e.length;s++){const r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ye.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Po.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){const e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const o=Sl[s.type],a=Ir[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new gn(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Sl[s.type],c=Ir[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,x=s.normalized===!0;let _,m;if(p&&p!==u){const g=Math.floor(f/p),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count;let y=e.cache.get(M);y||(_=new c(a,g*p,s.count*p/h),y=new sp(_,p/h),e.cache.add(M,y)),m=new Wo(y,l,f%p/h,x)}else a===null?_=new c(s.count*l):_=new c(a,f,s.count*l),m=new gn(_,l,x);if(s.sparse!==void 0){const g=Sl.SCALAR,M=Ir[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,w=s.sparse.values.byteOffset||0,H=new M(o[1],y,s.sparse.count*g),D=new c(o[2],w,s.sparse.count*l);a!==null&&(m=new gn(m.array.slice(),m.itemSize,m.normalized));for(let O=0,G=H.length;O<G;O++){const P=H[O];if(m.setX(P,D[O*l]),l>=2&&m.setY(P,D[O*l+1]),l>=3&&m.setZ(P,D[O*l+2]),l>=4&&m.setW(P,D[O*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const s=this,r=this.json,o=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=od[f.magFilter]||Gn,h.minFilter=od[f.minFilter]||Hi,h.wrapS=ad[f.wrapS]||Mi,h.wrapT=ad[f.wrapT]||Mi,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const o=s.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(f,p){let x=f;e.isImageBitmapLoader===!0&&(x=function(_){const m=new hn(_);m.needsUpdate=!0,f(m)}),e.load(Po.resolveURL(u,r.path),x,void 0,p)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),zi(u,o),u.userData.mimeType=o.mimeType||Qy(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ye.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ap,Yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new eu,Yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return ne}loadMaterial(t){const e=this,n=this.json,s=this.extensions,r=n.materials[t];let o;const a={},l=r.extensions||{},c=[];if(l[ye.KHR_MATERIALS_UNLIT]){const u=s[ye.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,e))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new qt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],_n),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",u.baseColorTexture,nn)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=He);const h=r.alphaMode||wl.OPAQUE;if(h===wl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===wl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==bn&&(c.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new gt(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==bn&&(c.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==bn){const u=r.emissiveFactor;a.emissive=new qt().setRGB(u[0],u[1],u[2],_n)}return r.emissiveTexture!==void 0&&o!==bn&&c.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,nn)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),zi(u,r),e.associations.set(u,{materials:t}),r.extensions&&Ps(s,u,r),u})}createUniqueName(t){const e=De.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return cd(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],h=$y(c),u=s[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[ye.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=cd(new _e,c,e),s[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?jy(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,x=h.length;p<x;p++){const _=h[p],m=o[p];let g;const M=c[p];if(m.mode===ei.TRIANGLES||m.mode===ei.TRIANGLE_STRIP||m.mode===ei.TRIANGLE_FAN||m.mode===void 0)g=r.isSkinnedMesh===!0?new aM(_,M):new ft(_,M),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===ei.TRIANGLE_STRIP?g.geometry=sd(g.geometry,Bd):m.mode===ei.TRIANGLE_FAN&&(g.geometry=sd(g.geometry,_h));else if(m.mode===ei.LINES)g=new xM(_,M);else if(m.mode===ei.LINE_STRIP)g=new nu(_,M);else if(m.mode===ei.LINE_LOOP)g=new _M(_,M);else if(m.mode===ei.POINTS)g=new vM(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&Jy(g,r),g.name=e.createUniqueName(r.name||"mesh_"+t),zi(g,r),m.extensions&&Ps(s,g,m),e.assignFinalMaterial(g),u.push(g)}for(let p=0,x=u.length;p<x;p++)e.associations.set(u[p],{meshes:t,primitives:p});if(u.length===1)return r.extensions&&Ps(s,u[0],r),u[0];const f=new en;r.extensions&&Ps(s,f,r),e.associations.set(f,{meshes:t});for(let p=0,x=u.length;p<x;p++)f.add(u[p]);return f})}loadCamera(t){let e;const n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Un(jm.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new Jh(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),zi(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const f=new Qt;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new Qh(a,l)})}loadAnimation(t){const e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){const p=s.channels[u],x=s.samplers[p.sampler],_=p.target,m=_.node,g=s.parameters!==void 0?s.parameters[x.input]:x.input,M=s.parameters!==void 0?s.parameters[x.output]:x.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",M)),c.push(x),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const f=u[0],p=u[1],x=u[2],_=u[3],m=u[4],g=[];for(let M=0,y=f.length;M<y;M++){const w=f[M],H=p[M],D=x[M],O=_[M],G=m[M];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const P=n._createAnimationTracks(w,H,D,O,G);if(P)for(let T=0;T<P.length;T++)g.push(P[T])}return new $M(r,void 0,g)})}createNodeMesh(t){const e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(t){const e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,t1)});for(let p=0,x=u.length;p<x;p++)h.add(u[p]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new op:c.length>1?h=new en:c.length===1?h=c[0]:h=new Xe,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),zi(h,r),r.extensions&&Ps(n,h,r),r.matrix!==void 0){const u=new Qt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],s=this,r=new en;n.name&&(r.name=s.createUniqueName(n.name)),zi(r,n),n.extensions&&Ps(e,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[f,p]of s.associations)(f instanceof Yn||f instanceof hn)&&u.set(f,p);return h.traverse(f=>{const p=s.associations.get(f);p!=null&&u.set(f,p)}),u};return s.associations=c(r),r})}_createAnimationTracks(t,e,n,s,r){const o=[],a=t.name?t.name:t.uuid,l=[];ss[r.path]===ss.weights?t.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(ss[r.path]){case ss.weights:c=Br;break;case ss.rotation:c=kr;break;case ss.position:case ss.scale:c=Hr;break;default:switch(n.itemSize){case 1:c=Br;break;case 2:case 3:default:c=Hr;break}break}const h=s.interpolation!==void 0?Ky[s.interpolation]:Vo,u=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){const x=new c(l[f]+"."+ss[r.path],e.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Ah(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const s=this instanceof kr?qy:Mp;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function n1(i,t,e){const n=t.attributes,s=new Xn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){const h=Ah(Ir[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new C,l=new C;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const f=e.json.accessors[u.POSITION],p=f.min,x=f.max;if(p!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(x[2]))),f.normalized){const _=Ah(Ir[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new kn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function cd(i,t,e){const n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Eh[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){const o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return Ae.workingColorSpace!==_n&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ae.workingColorSpace}" not supported.`),zi(i,t),n1(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?Zy(i,t.targets,e):i})}const Tl=[{id:"A1",name:"Nai Wai",zh:"泥圍",simplified:"泥围",terminus:!0},{id:"A2",name:"Hung Shui Kiu",zh:"洪水橋",simplified:"洪水桥",terminus:!1},{id:"A3",name:"Hung Shui Kiu North",zh:"洪水橋北",simplified:"洪水桥北",terminus:!1},{id:"A4",name:"Ha Tsuen South",zh:"厦村南",simplified:"厦村南",terminus:!1},{id:"A5",name:"Ha Tsuen",zh:"厦村",simplified:"厦村",terminus:!1},{id:"A6",name:"Logistics Cluster",zh:"物流圈",simplified:"物流圈",terminus:!1},{id:"A7",name:"Industry Park",zh:"產業園",simplified:"产业园",terminus:!0}],Rh=8,ld={E:816684.4,N:831649.2},i1=(i,t)=>({x:i-ld.E,z:ld.N-t}),Vr=500/(112*2400/1888),gs=2400/1888,Ws=[[855,1151],[845,1144],[830,1134],[816,1126],[829,1095],[841,1065],[851,1039],[849,1028],[844,1012],[846,1e3],[854,981],[865,956],[872,941],[869,934],[855,928],[844,922],[840,916],[847,898],[861,863],[873,832],[881,809],[881,792],[878,772],[878,755],[883,747],[898,741],[907,732],[912,716],[922,686],[933,650],[943,617],[944,602],[939,589],[927,572],[915,557],[907,545],[895,539],[880,538],[850,539],[816,540],[798,540],[791,535],[788,523],[786,502],[784,482],[783,459],[783,448],[786,432],[797,418],[815,405],[835,391],[850,382],[870,375]].map(([i,t])=>[i*gs,t*gs]),Er=Ws.map(([i,t])=>({x:(i-Ws[0][0])*Vr,z:(t-Ws[0][1])*Vr})),de=[Er[0]];for(let i=1;i<Er.length-1;i++){const t=Er[i-1],e=Er[i],n=Er[i+1],s=Math.hypot(e.x-t.x,e.z-t.z),r=Math.hypot(n.x-e.x,n.z-e.z),o=Math.min(65,s*.48,r*.48),a={x:e.x+(t.x-e.x)*o/s,z:e.z+(t.z-e.z)*o/s},l={x:e.x+(n.x-e.x)*o/r,z:e.z+(n.z-e.z)*o/r};de.push(a);for(let c=1;c<=12;c++){const h=c/12,u=1-h;de.push({x:u*u*a.x+2*u*h*e.x+h*h*l.x,z:u*u*a.z+2*u*h*e.z+h*h*l.z})}}de.push(Er.at(-1));de[0].s=0;for(let i=1;i<de.length;i++)de[i].s=de[i-1].s+Math.hypot(de[i].x-de[i-1].x,de[i].z-de[i-1].z);let Ie=de.at(-1).s;const Ye=(i,t,e)=>Math.max(t,Math.min(e,i));function pn(i,t,e){let n=0,s=1/0;for(let r=1;r<de.length;r++){const o=de[r-1],a=de[r];if(Number.isFinite(e)&&(a.s<e-100||o.s>e+100))continue;const l=a.x-o.x,c=a.z-o.z,h=Ye(((i-o.x)*l+(t-o.z)*c)/(l*l+c*c),0,1),u=(i-o.x-h*l)**2+(t-o.z-h*c)**2;u<s&&(s=u,n=o.s+h*(a.s-o.s))}return n}function hS(i,t,e){let n=pn(i,t,e);for(let s=0;s<3;s++){const r=_t(n);n=Ye(n+(i-r.x)*r.tx+(t-r.z)*r.tz,0,Ie)}return n}const du=[[40,847,1145],[820,854,981],[1470,861,863],[1870,878,772],[2310,922,686],[2890,927,572],[3840,784,482]],pu=[];for(let i=1;i<de.length;i++){const t=de[i-1],e=de[i],n=Math.ceil((e.s-t.s)/2);for(let s=0;s<n;s++){const r=s/n;pu.push({x:t.x+(e.x-t.x)*r,z:t.z+(e.z-t.z)*r,s:t.s+(e.s-t.s)*r})}}pu.push({...de.at(-1)});de.splice(0,de.length,...pu);const s1=de.map(i=>({...i}));for(const i of de){if(i.s<80||i.s>Ie-80)continue;let t=0,e=0,n=0;for(const r of s1){const o=r.s-i.s;if(Math.abs(o)>65)continue;const a=Math.exp(-o*o/(2*22*22));t+=r.x*a,e+=r.z*a,n+=a}const s=Math.min(1,(i.s-80)/50,(Ie-80-i.s)/50);i.x+=(t/n-i.x)*s,i.z+=(e/n-i.z)*s}for(const[,i,t]of du){const e=(i*gs-Ws[0][0])*Vr,n=(t*gs-Ws[0][1])*Vr,s=pn(e,n);let r=1;for(;de[r].s<s;)r++;const o=de[r-1],a=de[r],l=(s-o.s)/(a.s-o.s),c=o.x+(a.x-o.x)*l,h=o.z+(a.z-o.z)*l,u=a.x-o.x,f=a.z-o.z,p=Math.hypot(u,f),x=f/p,_=-u/p;for(const m of de){const g=Math.abs(m.s-s),M=Ye((165-g)/110,0,1),y=M*M*M*(10-15*M+6*M*M),w=(m.x-c)*x+(m.z-h)*_;m.x-=w*x*y,m.z-=w*_*y}}for(let i=1;i<de.length;i++)de[i].s=de[i-1].s+Math.hypot(de[i].x-de[i-1].x,de[i].z-de[i-1].z);Ie=de.at(-1).s;const yp=[[0,0],...du.map(([i,t,e])=>[i,pn((t*gs-Ws[0][0])*Vr,(e*gs-Ws[0][1])*Vr)]),[4526,Ie]];function Lc(i,t,e=0,n=1){const s=Ye(t,i[0][e],i.at(-1)[e]);let r=1;for(;r<i.length-1&&i[r][e]<s;)r++;const o=i[r-1],a=i[r];return o[n]+(a[n]-o[n])*(s-o[e])/(a[e]-o[e])}const ln=i=>Lc(yp,i),Lo=i=>Lc(yp,i,1,0),ci=[[0,9],[100,9],[140,9.62],[160,9.9],[180,10.48],[200,9.85],[201.8,9.86],[220,10.38],[240,11.35],[260,12.7],[280,14.1],[300,15.5],[308.9,16.17],[320,16.74],[340,17.59],[360,17.93],[371.1,17.94],[390,17.65],[410,16.91],[430,15.65],[450,14.32],[467.9,13.07],[480,12.22],[500,11.07],[520,10.36],[540.3,10.09],[560,10.12],[580,10.45],[600,10.88],[620,11.53],[650,11],[700,12],[780,10],[900,11],[1e3,10.5],[1200,13.5],[1350,12.5],[1470,12],[1550,13],[1650,11.5],[1750,12],[1800,11.5],[1870,15],[1950,18],[2050,17.5],[2150,14],[2250,10],[2310,9],[2500,7],[2600,6.5],[2700,7.5],[2800,7],[2890,7.5],[2970,7.4],[3001.2,7.6],[3050,9.02],[3100,11.16],[3150,13.3],[3200,15.45],[3263.87,18.19],[3300,19.74],[3350,21.87],[3370,22.44],[3390,22.66],[3410,22.54],[3423.83,22.25],[3463.83,20.49],[3500,18.65],[3550,17.91],[3600,17.65],[3650,16.77],[3710.9,15.74],[3750,14],[3840,14],[3950,18],[4050,18],[4200,13.55],[4210,13.37],[4230,13.25],[4250,13.49],[4300,15.14],[4338.68,16.63],[4368.68,17.64],[4400,17.99],[4428.68,17.77],[4474.93,17.41],[4526,17.15]],Ic=[{id:"VB1",start:201.8,deckStart:308.9,deckEnd:467.9,end:540.3,piers:[341.1,371.1,401.1,431.1],depth:1.8,ground:[[201.8,9.86],[308.9,9.8],[371.1,9],[467.9,9.5],[540.3,10.09]]},{id:"VB2",start:3001.2,deckStart:3263.87,deckEnd:3458.4,end:3524.2,piers:[3315.06,3366.24,3423.83],depth:2.5,ground:[[3001.2,7.6],[3263.87,8],[3366.24,8],[3423.83,11],[3458.4,13],[3524.2,18.2]]},{id:"VB3",start:4206.84,deckStart:4335.52,deckEnd:4526,end:4526,piers:[4368.68,4428.68,4474.93,4521.18],depth:2.5,ground:[[4210,13.37],[4260,10],[4338.68,8],[4428.68,7.5],[4526,7.5]]}];Ic.map(i=>[i.start,i.end]);const hd=ci.map((i,t)=>{if(!t||t===ci.length-1){const l=ci[Math.max(0,t-1)],c=ci[Math.min(ci.length-1,t+1)];return(c[1]-l[1])/(c[0]-l[0])}const e=ci[t-1],n=ci[t+1],s=i[0]-e[0],r=n[0]-i[0],o=(i[1]-e[1])/s,a=(n[1]-i[1])/r;return o*a<=0?0:3*(s+r)/((2*r+s)/o+(r+2*s)/a)});function El(i){i=Ye(i,0,4526);let t=1;for(;t<ci.length-1&&ci[t][0]<i;)t++;const e=ci[t-1],n=ci[t],s=n[0]-e[0],r=(i-e[0])/s;return(2*r**3-3*r*r+1)*e[1]+(r**3-2*r*r+r)*s*hd[t-1]+(-2*r**3+3*r*r)*n[1]+(r**3-r*r)*s*hd[t]}function Al(i){i=Ye(i,0,Ie);let t=0,e=de.length-1;for(;e-t>1;){const c=e+t>>1;de[c].s>i?e=c:t=c}const n=de[t],s=de[e],r=(i-n.s)/(s.s-n.s),o=s.x-n.x,a=s.z-n.z,l=Math.hypot(o,a);return{x:n.x+o*r,z:n.z+a*r,tx:o/l,tz:a/l}}function _t(i){i=Ye(i,0,Ie);const t=Lo(i),e=Al(i),n=El(t)-Rh,s=Al(Math.max(0,i-3)),r=Al(Math.min(Ie,i+3)),o=Math.hypot(r.x-s.x,r.z-s.z);e.tx=(r.x-s.x)/o,e.tz=(r.z-s.z)/o;const a=Math.max(0,i-1),l=Math.min(Ie,i+1),c=(El(Lo(l))-El(Lo(a)))/(l-a),h=Ic.find(f=>t>=f.start&&t<=f.end),u=h?Lc(h.ground,t)-Rh:n;return{...e,y:n,lx:e.tz,lz:-e.tx,heading:Math.atan2(-e.tx,-e.tz),grade:c,c:t,elevated:!!h,bridge:h==null?void 0:h.id,structure:h?t>=h.deckStart&&t<=h.deckEnd?"deck":"ramp":null,groundY:u}}const Ze=du.map(([i,t,e],n)=>({...Tl[n],nameEn:Tl[n].name,nameZh:Tl[n].zh,c:i,s:ln(i),pixel:[t*gs,e*gs],platformLength:n===0?69.5:n===1?89.6:67.6,footprintLength:89.6,width:n===1?6:n===0?5:4,stagger:n===1?18.5:0,length:89.6,platformLateral:7.05,dockLateral:5.4,platformEdge:7.05,runningLane:1.9,boardingLane:5.4,platforms:[{side:1,centerOffset:n===1?-9.25:0},{side:-1,centerOffset:n===1?9.25:0}],source:`V1038-08-ST-110${n+1}`})),Bi=_t(Ze[0].s),ud=Ze[0].footprintLength/2+16.75,Oe={innerRadius:13.5,outerRadius:20,radius:16.75,center:{x:Bi.x-Bi.tx*ud,z:Bi.z-Bi.tz*ud},y:Bi.y,source:"V1038-08-ST-1101",length:Math.PI*2*16.75};Oe.sample=function(i){const t=i/this.radius,e=Bi.tx,n=Bi.tz,s=Bi.lx,r=Bi.lz;return{x:this.center.x+this.radius*(Math.cos(t)*e+Math.sin(t)*s),y:this.y,z:this.center.z+this.radius*(Math.cos(t)*n+Math.sin(t)*r),tx:-Math.sin(t)*e+Math.cos(t)*s,tz:-Math.sin(t)*n+Math.cos(t)*r}};const Sp=40;function he(i){const t=Lo(i);let e=3.8;for(const[n,s,r]of[[95,200,9.5],[540,660,9.5],[1550,1700,8.5],[3500,3620,12],[4e3,4200,9.5]])e=Math.max(e,3.8+(r/2-3.8)*Ye(Math.min((t-n+25)/25,(s+25-t)/25),0,1));for(const n of Ic)e=Math.max(e,3.8+.75*Ye(Math.min((t-n.start+20)/20,(n.end+20-t)/20),0,1));for(const n of Ze){const s=Math.min(...n.platforms.map(r=>Math.abs(i-n.s-r.centerOffset)-n.footprintLength/2));e=Math.max(e,3.8+3.25*Ye(1-s/Sp,0,1))}return e=Math.max(e,i<Ze[0].s-25?7.05+Math.min(19.8,Ze[0].s-i-25)*.42:0),{left:-e,right:e}}const r1=Ie-14,Ar=Ze.flatMap(i=>[-1,1].map(t=>({s:Ye(i.s+t*(i.footprintLength/2+i.stagger/2+Sp+6),0,Ie),station:i.id}))).filter(i=>i.s>8&&!_t(i.s).elevated);function xn(i){const t=Math.min(...Ar.map(e=>Math.abs(e.s-i)),...Ve.flatMap(e=>[-1,1].map(n=>Math.abs(i-e.s-n*(e.halfWidth+10)))));return .02+.28*Ye((t-1.5)/6,0,1)}const Io=4;function fd(i){let t=he(i).right+3.75+Io/2;for(const a of Ze){const l=Math.abs(i-a.s)-a.footprintLength/2-a.stagger/2,c=Ye(1-Math.max(0,l)/45,0,1),h=c*c*(3-2*c),u=a.id==="A1"?Math.max(0,a.s-i-25)*.42:0;t=Math.max(t,t+(7.05+a.width+u+Io/2-t)*h)}const e=Ye(Math.min((i-ue.start+45)/45,(ue.end+50-i)/50),0,1),n=e*e*(3-2*e),s=t+(Math.max(t,Je(i)+ue.width/2+3.75+Io/2)-t)*n,r=Math.abs(Lo(i)-3395),o=Ye((200-r)/100,0,1);return-Math.max(s+.6,s+(52-s)*o*o*(3-2*o))}const Ch=[{name:"A2 approach culvert",c:660,width:18,extent:160},{name:"Tin Sam Channel",c:1195,width:24,extent:190}].map(i=>({...i,s:ln(i.c)})),Ve=[{c:1660,name:"Crossing road",halfWidth:3.8},{c:2650,name:"Road D6",halfWidth:7.3},{c:3970,name:"Road D1",halfWidth:9}].map((i,t)=>({...i,s:ln(i.c),offset:t*7,stop:i.halfWidth+14,extent:110})),cn=[{c:355,name:"Road D8",halfWidth:9},{c:3395,name:"Road D3",halfWidth:10},{c:4395,name:"Road D1",halfWidth:10}].map(i=>({...i,s:ln(i.c),extent:150,offset:0,stop:14,underpass:!0})),ue={start:ln(2650),end:ln(3395),offset:12.8,width:7.3};function Je(i){const t=Math.abs(i-Ze[5].s),e=Ye((150-t)/65,0,1);return 12.8+6*e*e*(3-2*e)}function wp(i){const t=cn.find(s=>s.c===3395),e=Ye((45-t.s+i)/25,0,1),n=_t(i).groundY;return n+(_t(t.s).groundY-n)*e*e*(3-2*e)}function xi(i,t){return i.c===2650&&t===1?ue.offset+ue.width/2+8:he(i.s).right+10}function bo(i){return Ve.filter(t=>t.halfWidth<=7).some(t=>Math.abs(i-t.s)<t.halfWidth+.7)}function ec(i){return .02+.28*Ye(Math.min(...[...Ve,...cn].map(t=>(Math.abs(i-t.s)-t.halfWidth-1)/6)),0,1)}const Pe={s:ln(3565),opening:30};Pe.gate=Pe.s-20;const mn={start:ln(80),end:ln(1100),station:ln(820)},mu=(i,t)=>{const e=_t(ln(i));return{x:e.x+e.lx*t,z:e.z+e.lz*t}},hs=mu(820,-95),gc=mu(450,-28),dd=Math.hypot(hs.x-gc.x,hs.z-gc.z),pd=i=>({x:hs.x+(hs.x-gc.x)/dd*i,z:hs.z+(hs.z-gc.z)/dd*i}),Oi=[];{const i=[[mu(80,50)],[pd(-660),200],[pd(480)]],t=(r,o)=>{const a=Math.hypot(o.x-r.x,o.z-r.z);return{x:(o.x-r.x)/a,z:(o.z-r.z)/a,n:a}};let e=i[0][0],n=0;const s=r=>{const o=t(e,r);Oi.push({u:n,length:o.n,a:e,tx:o.x,tz:o.z}),n+=o.n};for(let r=1;r<i.length-1;r++){const[o,a]=i[r],l=t(i[r-1][0],o),c=t(o,i[r+1][0]),h=Math.atan2(l.x*c.z-l.z*c.x,l.x*c.x+l.z*c.z),u=a*Math.tan(Math.abs(h)/2),f=Math.sign(h),p={x:o.x-l.x*u,z:o.z-l.z*u},x={x:p.x-l.z*f*a,z:p.z+l.x*f*a};s(p),Oi.push({u:n,length:Math.abs(h)*a,R:a,side:f,centre:x,start:Math.atan2(p.z-x.z,p.x-x.x)}),n+=Math.abs(h)*a,e={x:o.x+c.x*u,z:o.z+c.z*u}}s(i.at(-1)[0]),mn.length=n,mn.stationU=Oi[2].u+(hs.x-Oi[2].a.x)*Oi[2].tx+(hs.z-Oi[2].a.z)*Oi[2].tz}mn.at=function(i){i=Ye(i,0,this.length);const t=Oi.find(o=>i<=o.u+o.length)||Oi.at(-1),e=i-t.u,n=t.R?t.start+t.side*e/t.R:0,s=t.R?-Math.sin(n)*t.side:t.tx,r=t.R?Math.cos(n)*t.side:t.tz;return{x:t.R?t.centre.x+Math.cos(n)*t.R:t.a.x+s*e,y:13.3,z:t.R?t.centre.z+Math.sin(n)*t.R:t.a.z+r*e,tx:s,tz:r,lx:r,lz:-s,heading:Math.atan2(-s,-r),u:i}};const o1=[[mn.start,0],[mn.station,mn.stationU],[mn.end,mn.length]],Rl=Array.from({length:Math.ceil(mn.length/4)+1},(i,t)=>mn.at(t*4));function a1(i){return mn.at(Lc(o1,i))}mn.distance=(i,t)=>{let e=1/0;for(let n=1;n<Rl.length;n++){const s=Rl[n-1],r=Rl[n],o=r.x-s.x,a=r.z-s.z,l=Ye(((i-s.x)*o+(t-s.z)*a)/(o*o+a*a||1),0,1);e=Math.min(e,Math.hypot(i-s.x-l*o,t-s.z-l*a))}return e};const ks=_t(Ve.find(i=>i.name==="Road D1").s),Hs=_t(cn.find(i=>i.name==="Road D1").s),yr={x:ks.x-ks.lx*80,z:ks.z-ks.lz*80,y:ks.y},mo={x:Hs.x-Hs.lx*80,z:Hs.z-Hs.lz*80,y:Hs.groundY},$n=Array.from({length:41},(i,t)=>{const e=t/40,n=1-e;return{x:n**3*yr.x+3*n*n*e*(yr.x-ks.lx*120)+3*n*e*e*(mo.x-Hs.lx*120)+e**3*mo.x,z:n**3*yr.z+3*n*n*e*(yr.z-ks.lz*120)+3*n*e*e*(mo.z-Hs.lz*120)+e**3*mo.z,y:yr.y+(mo.y-yr.y)*(3*e*e-2*e*e*e)}});function ii(i,t=1,e=[]){let n=1.9;for(const s of Ze){if(e.includes(s.id))continue;const r=s.platforms.find(l=>l.side===t),o=Math.abs(i-s.s-r.centerOffset),a=Ye((s.footprintLength/2+40-o)/50,0,1);n=Math.max(n,1.9+3.5*a*a*a*(10-15*a+6*a*a))}return t*Math.min(n,he(i).right-1.6)}function c1(i){const t=_t(i-4),e=_t(i+4),n=Math.abs(Math.atan2(Math.sin(e.heading-t.heading),Math.cos(e.heading-t.heading)));return n>1e-6?8/n:1/0}const Do=r1-25.2;function l1(i){const t=Ye((Do-i)/70,0,1);return i>Do-70?1.9-3.8*t*t*t*(10-15*t+6*t*t):ii(i,-1)}const xc=[...cn,...Ve.filter(i=>i.halfWidth>7)],Gr=140;function Dc(i){return xc.find(t=>Math.abs(i-t.s)<t.halfWidth+8+Gr)}function wn(i){const t=Dc(i);if(!t)return fd(i);const e=Ye((t.halfWidth+8+Gr-Math.abs(i-t.s))/Gr,0,1);return fd(i)-12*e*e*(3-2*e)}function Cl(i){const t=_t(i),e=wn(i);let n=t.x+t.lx*e,s=t.z+t.lz*e;const r=Dc(i);if(r){const o=i-r.s,a=Ye((r.halfWidth+8+55-Math.abs(o))/55,0,1),l=a*a*(3-2*a),c=_t(r.s),h=wn(r.s);n+=(c.x+c.lx*h+c.tx*o-n)*l,s+=(c.z+c.lz*h+c.tz*o-s)*l}return{...t,x:n,z:s}}function mi(i){const t=Cl(i),e=Cl(Math.max(0,i-.3)),n=Cl(Math.min(Ie,i+.3)),s=Math.hypot(n.x-e.x,n.z-e.z),r=(n.x-e.x)/s,o=(n.z-e.z)/s;return{...t,tx:r,tz:o,lx:o,lz:-r,heading:Math.atan2(-r,-o)}}function zs(i){const t=Dc(i);if(!t)return ec(i);const e=Math.abs(i-t.s),n=Ye((t.halfWidth+8+Gr-e)/Gr,0,1),s=n*n*(3-2*n),r=_t(i).groundY;return ec(i)+(_t(t.s).groundY+6.4-r-ec(i))*s}function h1(i,t){const e=i+(t===1?0:Math.PI),n=new C(t*.14,1.075,.2),s=new C(t*.14,.38+Math.cos(e)*.17,-Math.sin(e)*.17),r=s.clone().sub(n),o=r.length(),a=(.45**2-.46**2+o**2)/(2*o),l=Math.sqrt(Math.max(0,.45**2-a**2)),c=n.clone().addScaledVector(r,a/o).add(new C(0,-r.z,r.y).multiplyScalar(l/o));return{hip:n,knee:c,foot:s}}const u1=new C(0,1,0);function uS(i,t){i.phase=(i.phase||0)+i.v*t/.34*.45;for(const e of[-1,1]){const{hip:n,knee:s,foot:r}=h1(i.phase,e);for(const[o,a,l]of[["thigh",n,s],["shin",s,r],["crank",new C(e*.14,.38,0),r]]){const c=i.group.getObjectByName(o+"_"+e),h=l.clone().sub(a);c.position.copy(a),c.scale.set(1,h.length(),1),c.quaternion.setFromUnitVectors(u1,h.normalize())}i.group.getObjectByName("pedal_"+e).position.copy(r)}for(const e of i.wheels)e.rotation.x-=i.v*t/.34}const fS=10;function f1(i){if(i.userData.joints)return i.userData.joints;const t=n=>{let s=null;return i.traverse(r=>{!s&&r.name.endsWith(n)&&(s=r)}),s},e={body:t("_body"),chest:t("_chest")};for(const n of[-1,1])for(const s of["arm","elbow","leg","knee","ankle"])e[s+n]=t(`_${s}_${n}`);return e.rest=Object.fromEntries(Object.entries(e).filter(([,n])=>n).map(([n,s])=>[n,{p:s.position.clone(),r:s.rotation.clone()}])),i.userData.joints=e}function d1(i,t,e="adult"){const n=Math.min(1,Math.max(0,(t-2.4)/1.6)),s=e==="older"?.7:1,r=(.42+.35*n)*s,o=l=>{const c=i+l,h=Math.cos(c),u=Math.sin(c),f=r*u+.05*n,p=-(.07+(1+.7*n)*s*Math.max(0,h)**1.6+.16*Math.max(0,u)**6),x=.24*Math.max(0,u)**4-.34*Math.max(0,-u)**3*Math.max(0,h+.4)+(-f-p)*.55*Math.max(0,-h);return{hip:f,knee:p,ankle:x}},a=l=>{const c=Math.sin(i+l);return{shoulder:-(.28+.45*n)*s*c,elbow:.22+.9*n+.18*Math.max(0,-c)}};return{legs:{1:o(0),"-1":o(Math.PI)},arms:{1:a(0),"-1":a(Math.PI)},bob:(.022+.05*n)*Math.cos(2*i)-.012*n,sway:.018*Math.sin(i)*(1-n),yaw:.07*Math.sin(i),twist:-.1*Math.sin(i),lean:-(.035+.2*n)}}function dS(i,t,e=1/60){const n=i.userData.wheelchair,s=f1(i),r=i.scale.y||1,o=t/Math.max(e,1e-4)/r;i.userData.walkPhase=(i.userData.walkPhase||0)+t/r/(1.56+Math.max(0,o-1.4)*.35)*Math.PI*2;const a=t>1e-4?1:0;i.userData.gait=(i.userData.gait??0)+(a-(i.userData.gait??0))*Math.min(1,e*8);const l=i.userData.gait,c=i.userData.walkPhase;for(const f of i.children)(f.name.startsWith("chair_wheel")||f.name.startsWith("chair_caster"))&&(f.rotation.x-=t/(f.name.startsWith("chair_caster")?.09:.31));if(n){const f=Math.sin(c*1.4);for(const p of[-1,1]){const x=s["arm"+p],_=s["elbow"+p];x&&(x.rotation.x=s.rest["arm"+p].r.x-.25+l*.45*f),_&&(_.rotation.x=s.rest["elbow"+p].r.x+.5+l*.35*(1-f))}return}if(!s.body)return;const h=d1(c,o,i.userData.age),u=Math.sin(performance.now()/1e3*1.6)*.006*(1-l);s.body.position.y=s.rest.body.p.y+h.bob*l,s.body.position.x=s.rest.body.p.x+h.sway*l,s.body.rotation.y=h.yaw*l,s.chest.rotation.set(s.rest.chest.r.x+h.lean*l+u,s.rest.chest.r.y+h.twist*l,s.rest.chest.r.z);for(const f of[-1,1]){const p=h.legs[f],x=h.arms[f];s["leg"+f].rotation.x=p.hip*l,s["knee"+f].rotation.x=p.knee*l,s["ankle"+f]&&(s["ankle"+f].rotation.x=p.ankle*l),s["arm"+f].rotation.x=x.shoulder*l,s["elbow"+f].rotation.x=.12+(x.elbow-.12)*l}}const bp={value:0};function Pl(i,t){const e=i.clone();return e.side=He,e.onBeforeCompile=n=>{Yn.prototype.onBeforeCompile.call(e,n),n.uniforms.windTime=t,n.uniforms.plantNight=bp,n.vertexShader=`uniform float windTime;
attribute float nightGlow;
varying float vNightGlow;
`+n.vertexShader,n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
   vNightGlow = nightGlow;
   vec3 root = vec3(0.0);
   #ifdef USE_INSTANCING
    root = instanceMatrix[3].xyz;
   #endif
   float bend = pow(max(position.y, 0.0), 1.4);
   transformed.x += sin(windTime * 1.9 + root.x * .13 + root.z * .09) * bend * .22;
   transformed.z += sin(windTime * 1.25 + root.z * .17) * bend * .13;
  `),n.fragmentShader&&(n.fragmentShader=`uniform float plantNight;
varying float vNightGlow;
`+n.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance += diffuseColor.rgb * vec3(1.0, .9, .74) * vNightGlow * plantNight * .85;`))},e.customProgramCacheKey=()=>"verge-wind-v3",e}class p1{constructor(t=.1,e=6){this.maxEdgeLength=t,this.maxIterations=e}modify(t){t.index!==null&&(t=t.toNonIndexed());const e=this.maxIterations,n=this.maxEdgeLength*this.maxEdgeLength,s=new C,r=new C,o=new C,a=new C,l=[s,r,o,a],c=new C,h=new C,u=new C,f=new C,p=[c,h,u,f],x=new qt,_=new qt,m=new qt,g=new qt,M=[x,_,m,g],y=new gt,w=new gt,H=new gt,D=new gt,O=[y,w,H,D],G=new gt,P=new gt,T=new gt,I=new gt,Y=[G,P,T,I],Z=t.attributes,nt=Z.normal!==void 0,at=Z.color!==void 0,it=Z.uv!==void 0,ht=Z.uv1!==void 0;let J=Z.position.array,At=nt?Z.normal.array:null,Ut=at?Z.color.array:null,zt=it?Z.uv.array:null,Ot=ht?Z.uv1.array:null,ve=J,st=At,dt=Ut,Pt=zt,wt=Ot,re=0,ie=!0;function Zt(k,Me,pe){const oe=l[k],Ft=l[Me],we=l[pe];if(ve.push(oe.x,oe.y,oe.z),ve.push(Ft.x,Ft.y,Ft.z),ve.push(we.x,we.y,we.z),nt){const Tt=p[k],Wt=p[Me],F=p[pe];st.push(Tt.x,Tt.y,Tt.z),st.push(Wt.x,Wt.y,Wt.z),st.push(F.x,F.y,F.z)}if(at){const Tt=M[k],Wt=M[Me],F=M[pe];dt.push(Tt.r,Tt.g,Tt.b),dt.push(Wt.r,Wt.g,Wt.b),dt.push(F.r,F.g,F.b)}if(it){const Tt=O[k],Wt=O[Me],F=O[pe];Pt.push(Tt.x,Tt.y),Pt.push(Wt.x,Wt.y),Pt.push(F.x,F.y)}if(ht){const Tt=Y[k],Wt=Y[Me],F=Y[pe];wt.push(Tt.x,Tt.y),wt.push(Wt.x,Wt.y),wt.push(F.x,F.y)}}for(;ie&&re<e;){re++,ie=!1,J=ve,ve=[],nt&&(At=st,st=[]),at&&(Ut=dt,dt=[]),it&&(zt=Pt,Pt=[]),ht&&(Ot=wt,wt=[]);for(let k=0,Me=0,pe=J.length;k<pe;k+=9,Me+=6){s.fromArray(J,k+0),r.fromArray(J,k+3),o.fromArray(J,k+6),nt&&(c.fromArray(At,k+0),h.fromArray(At,k+3),u.fromArray(At,k+6)),at&&(x.fromArray(Ut,k+0),_.fromArray(Ut,k+3),m.fromArray(Ut,k+6)),it&&(y.fromArray(zt,Me+0),w.fromArray(zt,Me+2),H.fromArray(zt,Me+4)),ht&&(G.fromArray(Ot,Me+0),P.fromArray(Ot,Me+2),T.fromArray(Ot,Me+4));const oe=s.distanceToSquared(r),Ft=r.distanceToSquared(o),we=s.distanceToSquared(o);oe>n||Ft>n||we>n?(ie=!0,oe>=Ft&&oe>=we?(a.lerpVectors(s,r,.5),nt&&f.lerpVectors(c,h,.5),at&&g.lerpColors(x,_,.5),it&&D.lerpVectors(y,w,.5),ht&&I.lerpVectors(G,P,.5),Zt(0,3,2),Zt(3,1,2)):Ft>=oe&&Ft>=we?(a.lerpVectors(r,o,.5),nt&&f.lerpVectors(h,u,.5),at&&g.lerpColors(_,m,.5),it&&D.lerpVectors(w,H,.5),ht&&I.lerpVectors(P,T,.5),Zt(0,1,3),Zt(3,2,0)):(a.lerpVectors(s,o,.5),nt&&f.lerpVectors(c,u,.5),at&&g.lerpColors(x,m,.5),it&&D.lerpVectors(y,H,.5),ht&&I.lerpVectors(G,T,.5),Zt(0,1,3),Zt(3,1,2))):Zt(0,1,2)}}const Re=new _e;return Re.setAttribute("position",new Nt(ve,3)),nt&&Re.setAttribute("normal",new Nt(st,3)),at&&Re.setAttribute("color",new Nt(dt,3)),it&&Re.setAttribute("uv",new Nt(Pt,2)),ht&&Re.setAttribute("uv1",new Nt(wt,2)),Re}}function m1(){const i=[];for(let t=0;t<de.length;t+=2){const e=de[t];i.push({x:e.x,z:e.z,r:Math.max(he(e.s).right+3.75,wn(e.s)+Io/2)+1})}return i}function pS(i,t){const{width:e,height:n,metresPerPixel:s,originX:r,originZ:o}=t;for(const{x:a,z:l,r:c}of m1()){const h=(a-r)/s,u=(l-o)/s,f=c/s;for(let p=Math.max(0,Math.floor(u-f));p<=Math.min(n-1,Math.ceil(u+f));p++)for(let x=Math.max(0,Math.floor(h-f));x<=Math.min(e-1,Math.ceil(h+f));x++)(x-h)**2+(p-u)**2<=f*f&&(i[p*e+x]=0)}return i}function g1(i,t,e,n,s,r=4e5){if(n|=0,s|=0,n<0||s<0||n>=t||s>=e||!i[s*t+n])return null;const o=new Uint8Array(t*e),a=[s*t+n];o[s*t+n]=1;let l=0;for(;a.length;){const c=a.pop();if(++l>r)return null;const h=c%t;for(const u of[h>0?c-1:-1,h<t-1?c+1:-1,c-t,c+t])u>=0&&u<t*e&&i[u]&&!o[u]&&(o[u]=1,a.push(u))}return{region:o,count:l}}function x1(i,t,e){let n=-1;for(let f=0;f<t*e;f++)if(i[f]){n=f;break}if(n<0)return[];const s=(f,p)=>f>=0&&p>=0&&f<t&&p<e&&i[p*t+f]===1,r=[[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]];let o=n%t,a=n/t|0,l=6;const c=o,h=a,u=[[o,a]];for(let f=0;f<4*t*e;f++){let p=0;for(;p<8;p++){const x=(l+6+p)%8,[_,m]=r[x];if(s(o+_,a+m)){o+=_,a+=m,l=x;break}}if(p===8||o===c&&a===h)break;u.push([o,a])}return u.map(([f,p])=>[f+.5,p+.5])}function _1(i,t){if(i.length<4)return i;const e=(r,o)=>{let a=-1,l=0;const[c,h]=i[r],[u,f]=i[o],p=Math.hypot(u-c,f-h)||1;for(let x=r+1;x<o;x++){const _=Math.abs((u-c)*(h-i[x][1])-(c-i[x][0])*(f-h))/p;_>l&&(l=_,a=x)}return l>t?[...e(r,a).slice(0,-1),...e(a,o)]:[i[r],i[o]]};let n=0,s=0;for(let r=1;r<i.length;r++){const o=Math.hypot(i[r][0]-i[0][0],i[r][1]-i[0][1]);o>s&&(s=o,n=r)}return[...e(0,n).slice(0,-1),...e(n,i.length-1).slice(0,-1)]}const v1=(i,[t,e])=>[+(i.originX+t*i.metresPerPixel).toFixed(2),+(i.originZ+e*i.metresPerPixel).toFixed(2)],M1=(i,[t,e])=>[(t-i.originX)/i.metresPerPixel,(e-i.originZ)/i.metresPerPixel];function y1(i,t,e,n){const s=(r,o)=>{const a=new Uint8Array(t*e),l=o?t:e,c=o?e:t;for(let h=0;h<c;h++){let u=0;const f=p=>o?h*t+p:p*t+h;for(let p=-n;p<l;p++)p+n<l&&!r[f(p+n)]&&u++,p-n-1>=0&&!r[f(p-n-1)]&&u--,p>=0&&(a[f(p)]=u?0:1)}return a};return s(s(i,!0),!1)}function S1(i,t,e,n,s){const r=(a,l)=>{const c=new Uint8Array(e*n),h=l?e:n,u=l?n:e;for(let f=0;f<u;f++){let p=0;const x=_=>l?f*e+_:_*e+f;for(let _=-s;_<h;_++)_+s<h&&a[x(_+s)]&&p++,_-s-1>=0&&a[x(_-s-1)]&&p--,_>=0&&(c[x(_)]=p?1:0)}return c},o=r(r(i,!0),!1);for(let a=0;a<o.length;a++)o[a]&=t[a];return o}const Ll=new WeakMap;function mS(i,t,[e,n],s=1.6,r=4e5){const[o,a]=M1(t,[e,n]),{width:l,height:c}=t,h=Math.round(o),u=Math.round(a);Ll.has(i)||Ll.set(i,new Map);const f=Ll.get(i);for(const p of[0,2,4,6]){const x=p?f.get(p)||f.set(p,y1(i,l,c,p)).get(p):i,_=g1(x,l,c,h,u,r);if(!_)continue;const m=p?S1(_.region,i,l,c,p):_.region;return _1(x1(m,l,c),s).map(g=>v1(t,g))}return null}function w1(i){let t=0;for(let e=0;e<i.length;e++){const[n,s]=i[e],[r,o]=i[(e+1)%i.length];t+=n*o-r*s}return Math.abs(t)/2}function xs([i,t],e){let n=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){const[o,a]=e[s],[l,c]=e[r];a>t!=c>t&&i<(l-o)*(t-a)/(c-a)+o&&(n=!n)}return n}const qi=(i,t)=>i1(816300+(i-208)/4.72,834400-(t-327)/4.73),Vs=i=>i.map(([t,e])=>{const n=qi(t,e);return[n.x,n.z]}),tn=Vs([[125,352],[165,357],[215,332],[738,322],[800,378],[860,425],[970,462],[1500,437],[1370,1138],[1040,1078],[1013,1233],[900,1185],[780,1160],[640,1152],[500,1163],[380,1192],[283,1235],[240,990],[207,968],[188,925],[205,795],[197,715],[230,680]]),gi=_t(Pe.s),b1=[Vs([[125,352],[215,332],[738,322],[790,372],[560,392],[245,392]]),Vs([[125,352],[245,392],[292,650],[322,1e3],[392,1195],[350,1210],[283,1235],[240,990],[207,968],[188,925],[205,795],[197,715],[230,680]]),Vs([[283,1235],[380,1192],[500,1163],[640,1152],[780,1160],[900,1185],[1013,1233],[1017,1205],[900,1158],[780,1133],[640,1125],[500,1136],[380,1165],[300,1205]]),Vs([[1500,437],[1370,1138],[1040,1078],[1043,1060],[1345,1110],[1468,452]])];function Tp(i,t){const e=pn(i,t),n=_t(e),s=i-n.x,r=t-n.z,o=(i-gi.x)*gi.tx+(t-gi.z)*gi.tz+(Pe.s-Pe.gate),a=(i-gi.x)*gi.lx+(t-gi.z)*gi.lz,l=Math.hypot(s,r)-he(e).right;return l>4.5||Math.abs(o)<Pe.opening/2&&a>0&&l>.2}const Ep=(i,t)=>xs([i,t],tn)&&Tp(i,t),md=(i,t)=>Ep(i,t)&&!b1.some(e=>xs([i,t],e)),gS=gi.y,rs=([i,t,e,n])=>{const s=qi(i,t),r=qi(e,n);return{x0:Math.min(s.x,r.x),x1:Math.max(s.x,r.x),z0:Math.min(s.z,r.z),z1:Math.max(s.z,r.z)}},go=i=>qi(0,i).z,Il=[{name:"OCC & Office",...rs([938,508,1353,622]),h:13.5,kind:"office"},{name:"Vehicle Washing",...rs([938,622,1127,663]),h:8,kind:"hall",doors:[go(642)],face:"w"},{name:"Bi-weekly / Quarterly Maintenance",...rs([938,663,1127,758]),h:11,kind:"hall",doors:[go(690),go(730)],face:"w"},{name:"Maintenance Office & Workshop",...rs([1127,622,1353,758]),h:12,kind:"workshop"},{name:"Heavy Maintenance & Test Track",...rs([938,758,1316,833]),h:12,kind:"hall",doors:[go(779),go(812)],face:"w"},{name:"Stabling shed · 16 ART",...rs([938,833,1316,1025]),h:8,kind:"shed",open:"w"},{name:"Stabling shed · 20 ART",...rs([361,826,740,1060]),h:8,kind:"shed",open:"e"},{name:"Storage",...rs([361,1060,740,1088]),h:5,kind:"store"}],Ga=(i,t,e,n)=>{const s=qi(n>0?t:i,e),r=qi(n>0?i:t,e);return{front:{x:s.x,z:s.z},back:{x:r.x,z:r.z},dir:{x:Math.sign(s.x-r.x),z:0},length:Math.abs(s.x-r.x)}},T1=[843,864,885,906,927,959,980,1002,1023,1045],E1=[849,870,891,912,945,966,987,1008],gu=[...T1.flatMap((i,t)=>[{id:`W1-${t+1}`,...Ga(389,534,i,-1)},{id:`W2-${t+1}`,...Ga(568,713,i,-1)}]),...E1.flatMap((i,t)=>[{id:`E1-${t+1}`,...Ga(967,1111,i,1)},{id:`E2-${t+1}`,...Ga(1145,1289,i,1)}])],gd=gu.find(i=>i.id==="E1-1"),xS=["E1-3","E1-5","E2-2","W2-4","W1-7"].map(i=>gu.find(t=>t.id===i)),nc=[];for(const[i,t]of[[400,471],[532,603],[603,674],[735,795]])for(let e=365;e+16.5<=665;e+=16.5){const n=qi(e,i),s=qi(e+16.5,t);nc.push({x:(n.x+s.x)/2,z:(n.z+s.z)/2,w:Math.abs(s.x-n.x),d:Math.abs(s.z-n.z)})}const A1=[[[294,478],[292,392],[740,392]],[[740,392],[740,800]],[[740,800],[300,800],[296,524]]].map(Vs),Dl=Vs([[1578,1135],[1520,1255],[1300,1320],[1e3,1345],[700,1320],[420,1335],[180,1300],[70,1150],[55,900],[60,600],[95,505],[200,501],[335,501]]),ds=(()=>{let i=0;const t=Dl.map((s,r)=>(r&&(i+=Math.hypot(s[0]-Dl[r-1][0],s[1]-Dl[r-1][1])),{x:s[0],z:s[1],run:i})),e=i,n=e-110;return t.map(s=>({...s,y:1.5+(gi.y-1.5)*Math.min(1,s.run/n)}))})(),Rr=7.3,Wa=(()=>{const i=[...tn.map(e=>e[0]),...ds.map(e=>e.x)],t=[...tn.map(e=>e[1]),...ds.map(e=>e.z)];return{x0:Math.min(...i),x1:Math.max(...i),z0:Math.min(...t),z1:Math.max(...t)}})(),xu=(i,t,e=0)=>i>Wa.x0-e&&i<Wa.x1+e&&t>Wa.z0-e&&t<Wa.z1+e;function No(i,t,e){if(!xu(i,t,e))return null;for(let n=1;n<ds.length;n++){const s=ds[n-1],r=ds[n],o=r.x-s.x,a=r.z-s.z,l=Math.max(0,Math.min(1,((i-s.x)*o+(t-s.z)*a)/(o*o+a*a)));if(Math.hypot(i-s.x-l*o,t-s.z-l*a)<e)return s.y+(r.y-s.y)*l}return null}const Nl=[[840,430],[840,640],[840,1e3],[330,500],[520,500],[520,705],[330,705],[330,1110],[760,1110],[1330,835],[1330,1030],[1180,1050]].map(([i,t])=>qi(i,t)).filter(i=>Ep(i.x,i.z)),xo=14,In=(i,t=0)=>{const e=_t(i);return new C(e.x+e.lx*t,e.y,e.z+e.lz*t)},_u=[In(35,ii(35,-1)),In(15,-3.8)],Xa=_t(Ze[0].s);for(let i=0;i<=24;i++){const t=-Math.PI/2-i*Math.PI/24;_u.push(new C(Oe.center.x+Oe.radius*(Math.cos(t)*Xa.tx+Math.sin(t)*Xa.lx),Oe.y,Oe.center.z+Oe.radius*(Math.cos(t)*Xa.tz+Math.sin(t)*Xa.lz)))}_u.push(In(15,3.8),In(35,ii(35)));const R1=new Zs(_u,!1,"centripetal"),xd=_t(Pe.s),Ks=new C(xd.lx,0,xd.lz),C1=i=>In(i+.5,ii(i+.5)).sub(In(i-.5,ii(i-.5))).normalize(),Qn=new Rc,_d=In(Pe.s-45,ii(Pe.s-45)),Gi=In(Pe.gate,30),P1=C1(Pe.s-45);Qn.add(new Xo(_d,_d.clone().addScaledVector(P1,16),Gi.clone().addScaledVector(Ks,-18),Gi));const jo=30,Ap=new C(gd.front.x,Gi.y,gd.front.z),L1=new C(1,0,0),_c=Math.atan2(Ks.z,Ks.x),I1=(Ap.z-Gi.z-jo*(Math.sin(_c-Math.PI/2)+1))/Ks.z,vc=Gi.clone().addScaledVector(Ks,I1),D1=vc.clone().add(new C(Math.cos(_c-Math.PI/2)*jo,0,Math.sin(_c-Math.PI/2)*jo)),Ph=D1.clone().add(new C(0,0,jo)),vd=4/3*Math.tan(_c/4)*jo,js=new Rc;js.add(new Ac(Gi,vc));js.add(new Xo(vc,vc.clone().addScaledVector(Ks,vd),Ph.clone().addScaledVector(L1,-vd),Ph));js.add(new Ac(Ph,Ap));for(const i of js.curves)Qn.add(i);const Ul=js.getSpacedPoints(Math.ceil(js.getLength()/.5));function _o(i,t){const e=new Rc,n=In(Pe.s+t*28,ii(Pe.s+t*28,t)),s=In(Pe.s+t*55,ii(Pe.s+t*55,t)),r=h=>In(h+t*.5,ii(h+t*.5,t)).sub(In(h-t*.5,ii(h-t*.5,t))).normalize(),o=r(Pe.s+t*28),a=r(Pe.s+t*55);let l=0;Ul.forEach((h,u)=>{h.distanceToSquared(i)<Ul[l].distanceToSquared(i)&&(l=u)});const c=[i.clone(),...Ul.slice(0,Math.max(1,l)).reverse()];return c.length<3&&c.splice(1,0,i.clone().lerp(Gi,.5)),e.add(new Zs(c,!1,"centripetal")),e.add(new Xo(Gi,Gi.clone().addScaledVector(Ks,-17),n.clone().addScaledVector(o,-17),n)),e.add(new Xo(n,n.clone().addScaledVector(o,9),s.clone().addScaledVector(a,-9),s)),e}const vi=Ve.find(i=>i.c===2650),ta=cn.find(i=>i.c===3395),Xs=_t(vi.s),Lh=_t(ta.s),Rp=(i,t,e=0)=>(n,s)=>new C(i.x-i.lx*n-i.tx*s,t-e*s,i.z-i.lz*n-i.tz*s),Nc=Rp(Xs,Xs.y,Xs.grade),jr=Rp(Lh,Lh.groundY),Uo=(i,t)=>({x:-((t.x-i.x)*i.lx+(t.z-i.z)*i.lz),z:-((t.x-i.x)*i.tx+(t.z-i.z)*i.tz)}),vu=(i,t)=>{const e=In(i,t);return e.y=wp(i),e},Uc=ln(3310),Zr=Je(ta.s),Wi=ta.halfWidth,On=vi.halfWidth,Mu=Je(vi.s),Fn={kerb:Uo(Xs,In(vi.s+On+6,-Je(vi.s+On+6)-ue.width/2)).x,left:Uo(Xs,In(vi.s+On+8.5,-Je(vi.s+On+8.5)+ue.width/2)).x,R:6},Fi={x:Zr,R:6,taper:3.5,taperLength:25,half:ue.width/2},yu=[];for(let i=Uc;i<ta.s-Wi-14;i+=6)yu.push(vu(i,-Je(i)));for(const i of[Wi+12,Wi+6,Wi])yu.push(jr(Zr,i).setY(wp(ta.s-i)));const Zo=new Zs(yu,!1,"centripetal"),Su=Zo.getLength(),Cp=(i,t,e,n=0)=>Array.from({length:Math.ceil(Math.abs(e-t)/4)+1-n},(s,r)=>{r+=n;const o=(t+(e-t)*r/Math.ceil(Math.abs(e-t)/4))/Su,a=Zo.getPointAt(o),l=Zo.getTangentAt(o);return new C(a.x+l.z*i,a.y,a.z-l.x*i)}),zc=(i,t,e=0)=>Array.from({length:13-e},(n,s)=>i(...t((s+e)*Math.PI/24))),Md=Wi+Fi.taper+Fi.R+.25,Mc=Zr-1.8-8,Js=[];for(let i=-100;i<Mu-1.8-(On-1.9)-2;i+=12)Js.push(Nc(i,-1.9));Js.push(...zc(Nc,i=>[Mu-1.8-(On-1.9)+(On-1.9)*Math.sin(i),-On+(On-1.9)*Math.cos(i)]));for(let i=vi.s+On+3;i<Uc-3;i+=8)Js.push(vu(i,-Je(i)+1.8));Js.push(...Cp(1.8,0,Su-(Md-Wi)),...zc(jr,i=>[Mc+8*Math.cos(i),Md-8*Math.sin(i)],1));for(let i=1;i<=7;i++){const t=i/7;Js.push(jr(Mc-(Mc+25)*t,Wi+1.75-(Wi+1.75-6.5)*t*t*(3-2*t)))}for(let i=-37;i>=-140;i-=12)Js.push(jr(i,6.5));const Jr=[];for(let i=140;i>Zr+13.3;i-=12)Jr.push(jr(i,6.5));Jr.push(...zc(jr,i=>[Zr+11.3-9.5*Math.sin(i),16-9.5*Math.cos(i)]),...Cp(-1.8,Su-7,0));for(let i=Uc-8;i>vi.s+On+14;i-=8)Jr.push(vu(i,-Je(i)-1.8));Jr.push(...zc(Nc,i=>[Fn.kerb+Fn.R-8*Math.cos(i),-On-Fn.R+8*Math.sin(i)]));for(let i=Fn.kerb+Fn.R+6;i<=100;i+=12)Jr.push(Nc(i,-On-Fn.R+8));const Ih=new Zs(Js,!1,"centripetal"),Pp=new Zs(Jr,!1,"centripetal");Ih.arcLengthDivisions=Pp.arcLengthDivisions=3e3;const zl=(i,t)=>{const e=i.getLength(),n=Math.ceil(e*4);for(let s=0;s<=n;s++)if(t(i.getPointAt(s/n)))return e*s/n;return e},_S={bendS:Uc,mergeLat:-Mc,d6Out:zl(Ih,i=>Uo(Xs,i).x>=-(xi(vi,-1)+3)),giveWay:zl(Ih,i=>{const t=Uo(Lh,i);return t.z<=Wi+Fi.taper+.6&&Math.abs(t.x-Zr)<8}),d6Return:zl(Pp,i=>{const t=Uo(Xs,i);return t.z>=-(On+13.5)&&Math.abs(t.x-Mu)<6})},N1={"C(1)":9.5,"C(2)":8,"C(3)":5,"C(4)":3,"C(5)":1.5,"R(A)1":6.5,"R(A)2":6,"R(A)3":5.5,"R(A)4":5,"R(A)5":3.8,"R(A)6":6.2,"R(B)1":3.5,"R(B)2":2.5,"R(B)3":1.26,"R(C)":.4,I:3,"OU(Mixed Use)":7,"OU(Enterprise and Technology Park)":5,"OU(Logistics Facility)":5,"OU(Industry Park)":7,"OU(Port Back-up)":3},vS=["R(A)1","R(A)2","R(A)3","R(A)4","R(A)5","R(A)6","R(B)1","R(B)2","R(B)3","R(C)","C(1)","C(2)","C(3)","C(4)","C(5)","OU(Mixed Use)","G/IC","G/IC(1)","OU(Logistics Facility)","OU(Industry Park)","OU(Port Back-up)","OU(Enterprise and Technology Park)","I","O","O(1)","GB","V","V(1)","OU(Sewage Treatment Works)","OU(District Cooling System)","OU(SGMTS depot)","OU"];function Lp(i=""){return i.startsWith("R(")?"residential":i.startsWith("C(")?"commercial":i==="OU(Mixed Use)"?"mixed":i.startsWith("G/IC")?"gic":/Logistics|Port Back-up/.test(i)?"logistics":/Enterprise|Industry Park/.test(i)||i==="I"?"enterprise":i.startsWith("O(")||i==="O"?"open":i==="GB"?"green":i.startsWith("V")?"village":/SGMTS/.test(i)?"transport":i?"utility":"unzoned"}const U1=i=>N1[i]??null,MS={residential:15180606,commercial:13780540,mixed:13069210,gic:5214166,logistics:9071569,enterprise:7101383,open:5743962,green:3112261,village:11898974,utility:9280163,transport:15436335,unzoned:10132122},yS=i=>["residential","commercial","mixed","gic","logistics","enterprise","open","green"].includes(Lp(i))?{type:"massing"}:{type:"none"};function Ii(i,t){const e=s=>{const r=document.createElement("canvas");r.width=r.height=256;const o=r.getContext("2d");i(o,s);const a=new ti(r);return a.wrapS=a.wrapT=Mi,a.colorSpace=nn,a.anisotropy=4,a},n=new ne({map:e(!1),emissiveMap:e(!0),roughness:.55,metalness:.08});return n.emissive.set(0),n}function Ls(i,t,e,n,{wall:s,glass:r,frame:o=0,mullion:a=null,litColour:l="#ffd79a",litShare:c=.45}){const h=256/e,u=256/n;i.fillStyle=t?"#000":s,i.fillRect(0,0,256,256);let f=e*31+n;const p=()=>(f=f*16807%2147483647)/2147483647;for(let x=0;x<n;x++)for(let _=0;_<e;_++){const m=_*h+o,g=x*u+o,M=h-2*o,y=u-2*o;if(t){p()<c&&(i.fillStyle=l,i.fillRect(m,g,M,y));continue}i.fillStyle=r,i.fillRect(m,g,M,y),i.fillStyle="rgba(255,255,255,.18)",i.fillRect(m,g,M,y*.3),a&&(i.fillStyle=a,i.fillRect(m+M/2-1,g,2,y))}}let yd;function Oc(){return yd||(yd={tower:Object.assign(Ii((i,t)=>{if(Ls(i,t,4,8,{wall:"#e9ecee",glass:"#6f93b3",frame:6,mullion:"#dfe5ea"}),!t){i.fillStyle="#cfd6dc";for(let e=0;e<256;e+=64)i.fillRect(e,0,5,256)}}),{userData:{tile:[12,25.2]}}),towerAlt:Object.assign(Ii((i,t)=>{Ls(i,t,6,8,{wall:"#d9dfe2",glass:"#4f7fa6",frame:4}),t||(i.fillStyle="#7ea88f",i.fillRect(0,0,8,256))}),{userData:{tile:[15,25.2]}}),office:Object.assign(Ii((i,t)=>Ls(i,t,8,6,{wall:"#9fb7cc",glass:"#3f6f99",frame:1.5,litColour:"#e8f2ff",litShare:.6})),{userData:{tile:[12,24]}}),podium:Object.assign(Ii((i,t)=>{Ls(i,t,2,2,{wall:"#eceeee",glass:"#b98a55",frame:14,litColour:"#ffcf8a",litShare:.9})}),{userData:{tile:[16,10]}}),campus:Object.assign(Ii((i,t)=>{if(Ls(i,t,1,4,{wall:"#f1f3f2",glass:"#5aa0a8",frame:0,litShare:.35}),!t){i.fillStyle="#f1f3f2";for(let e=0;e<256;e+=64)i.fillRect(0,e,256,30)}}),{userData:{tile:[20,18]}}),civic:Object.assign(Ii((i,t)=>Ls(i,t,3,3,{wall:"#f3f1ec",glass:"#789aab",frame:12,litShare:.5})),{userData:{tile:[12,13.5]}}),house:Object.assign(Ii((i,t)=>Ls(i,t,2,3,{wall:"#efe4cf",glass:"#6d7f8a",frame:20,litShare:.4})),{userData:{tile:[8,8.2]}}),...Object.fromEntries(Object.entries({A:"#2f7fd0",B:"#6cc24a",C:"#e3a52c",E:"#3aa3a8"}).map(([i,t])=>["logistics"+i,Object.assign(Ii((e,n)=>{e.fillStyle=n?"#000":"#eef0ef",e.fillRect(0,0,256,256);for(let s=0;s<2;s++){const r=s*128;if(e.fillStyle=n?"#000":"#3d434a",e.fillRect(0,r,256,46),e.fillStyle=n?"#ffe6bf":"#9fb3c0",e.fillRect(0,r+50,256,5),!n){e.fillStyle=t;for(let o=s*97%256-40;o<256;o+=150)e.beginPath(),e.moveTo(o,r+60),e.lineTo(o+34,r+60),e.lineTo(o+14,r+124),e.lineTo(o-20,r+124),e.fill()}}}),{userData:{tile:[40,13]}})])),ramp:Object.assign(Ii((i,t)=>{i.fillStyle=t?"#000":"#2d3136",i.fillRect(0,0,256,256);for(let e=0;e<256;e+=128)i.fillStyle=t?"#fff0d0":"#f4f5f4",i.fillRect(0,e+70,256,58),t||(i.fillStyle="#c9ced1",i.fillRect(0,e+122,256,6))}),{userData:{tile:[18,13]}}),dronePad:new ne({map:(()=>{const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.fillStyle="#39414a",t.fillRect(0,0,256,256),t.strokeStyle="#f2c230",t.lineWidth=14,t.beginPath(),t.arc(128,128,104,0,Math.PI*2),t.stroke(),t.fillStyle="#fff",t.font="bold 150px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("H",128,136);const e=new ti(i);return e.colorSpace=nn,e})(),roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2}),roofDeck:new ne({color:13225423,roughness:.85}),greenRoof:new ne({color:7313994,roughness:.95}),roof:new ne({color:12172992,roughness:.9}),trunk:new ne({color:6178354,roughness:.95}),crown:new ne({color:5209914,roughness:.9}),lawn:new ne({color:8300112,roughness:1})})}function Dh(i,t,e,n){const s=[],r=[],o=[];let a=0;const l=4;for(let h=0;h<i.length;h++){const u=i[h],f=i[(h+1)%i.length],p=Math.hypot(f[0]-u[0],f[1]-u[1]),x=s.length/3;s.push(u[0],t-l,u[1],f[0],t-l,f[1],f[0],t+e,f[1],u[0],t+e,u[1]),r.push(a/n[0],-l/n[1],(a+p)/n[0],-l/n[1],(a+p)/n[0],e/n[1],a/n[0],e/n[1]),a+=p,o.push(x,x+2,x+1,x,x+3,x+2)}const c=new _e;return c.setAttribute("position",new Nt(s,3)),c.setAttribute("uv",new Nt(r,2)),c.setIndex(o),c.computeVertexNormals(),{walls:c,top:Nh(i,t+e)}}function Nh(i,t,e=.1){const n=new _e,s=Gs.triangulateShape(i.map(([r,o])=>new gt(r,o)),[]);return n.setAttribute("position",new Nt(i.flatMap(([r,o])=>[r,t,o]),3)),n.setAttribute("uv",new Nt(i.flatMap(([r,o])=>[r*e,o*e]),2)),n.setIndex(s.flatMap(([r,o,a])=>{const[l,c,h]=[i[r],i[o],i[a]];return(c[1]-l[1])*(h[0]-l[0])-(c[0]-l[0])*(h[1]-l[1])>0?[r,o,a]:[r,a,o]})),n.computeVertexNormals(),n}const z1=(i,t,e,n,s)=>{const r=Math.cos(s),o=Math.sin(s);return[[-e/2,-n/2],[e/2,-n/2],[e/2,n/2],[-e/2,n/2]].map(([a,l])=>[i+a*r+l*o,t-a*o+l*r])};function Ya(i,t,e,n,s,r,o=5){const a=Math.cos(s),l=Math.sin(s),c=[];r=Math.min(r,e/2-.1,n/2-.1);for(const[h,u,f]of[[e/2-r,n/2-r,0],[-e/2+r,n/2-r,Math.PI/2],[-e/2+r,-n/2+r,Math.PI],[e/2-r,-n/2+r,1.5*Math.PI]])for(let p=0;p<=o;p++){const x=f+p/o*Math.PI/2,_=h+r*Math.cos(x),m=u+r*Math.sin(x);c.push([i+_*a+m*l,t-_*l+m*a])}return c}const Sd=(i,t,e,n,s,r,o,a)=>Dh(z1(i,e,n,r,o),t,s,a);function Ip(i){let t=0,e=0;for(let n=0;n<i.length;n++){const[s,r]=i[n],[o,a]=i[(n+1)%i.length],l=Math.hypot(o-s,a-r);l>t&&(t=l,e=Math.atan2(-(a-r),o-s))}return e}function Dp([i,t],e){let n=1/0;for(let s=0;s<e.length;s++){const[r,o]=e[s],[a,l]=e[(s+1)%e.length],c=a-r,h=l-o,u=Math.max(0,Math.min(1,((i-r)*c+(t-o)*h)/(c*c+h*h||1)));n=Math.min(n,Math.hypot(i-r-u*c,t-o-u*h))}return n}function ki(i){let t=0,e=0;for(const n of i)t+=n[0],e+=n[1];return[t/i.length,e/i.length]}function Di(i,t,e,n,s,r,o=1/0){const a=Ip(i.poly),l=Math.cos(a),c=Math.sin(a),[h,u]=ki(i.poly),f=[],p=i.poly.map(([M,y])=>[(M-h)*l-(y-u)*c,(M-h)*c+(y-u)*l]),x=p.map(M=>M[0]),_=p.map(M=>M[1]),m=Math.hypot(t,e)/2;for(let M=Math.min(...x)+s+t/2;M<=Math.max(...x)-s-t/2;M+=t+n)for(let y=Math.min(..._)+s+e/2;y<=Math.max(..._)-s-e/2;y+=e+n){const w=h+M*l+y*c,H=u-M*c+y*l;![[-1,-1],[1,-1],[1,1],[-1,1]].map(([O,G])=>[w+O*t/2*l+G*e/2*c,H-O*t/2*c+G*e/2*l]).every(O=>xs(O,i.poly)&&Dp(O,i.poly)>=s*.5)||!xs([w,H],i.poly)||f.push({x:w,z:H,angle:a})}if(o<f.length)for(let M=f.length-1;M>0;M--){const y=Math.floor(Ui()*(M+1));[f[M],f[y]]=[f[y],f[M]]}const g=[];for(const M of f){if(g.length>=o)break;(!r.allowed||r.allowed(M.x,M.z,m))&&g.push(M)}return g}const Ol={A:{buildings:2,maxFloors:7},B:{buildings:3,maxFloors:8},C:{buildings:2,maxFloors:5,dronePads:!0},E:{buildings:2,maxFloors:7}};function O1(i,t,e){const n=Ip(i.poly),s=Math.cos(n),r=Math.sin(n),[o,a]=ki(i.poly),l=8,c=i.poly.map(([g,M])=>[(g-o)*s-(M-a)*r,(g-o)*r+(M-a)*s]),h=Math.min(...c.map(g=>g[0])),u=Math.min(...c.map(g=>g[1])),f=Math.ceil((Math.max(...c.map(g=>g[0]))-h)/l),p=Math.ceil((Math.max(...c.map(g=>g[1]))-u)/l),x=(g,M)=>[o+g*s+M*r,a-g*r+M*s],_=[];for(let g=0;g<p;g++){_.push([]);for(let M=0;M<f;M++){const y=x(h+(M+.5)*l,u+(g+.5)*l);_[g].push(xs(y,i.poly)&&Dp(y,i.poly)>=10&&(!t.allowed||t.allowed(y[0],y[1],l*.75)))}}const m=[];for(let g=0;g<e;g++){let M=null;const y=new Array(f).fill(0);for(let D=0;D<p;D++){for(let G=0;G<f;G++)y[G]=_[D][G]?y[G]+1:0;const O=[];for(let G=0;G<=f;G++){const P=G<f?y[G]:0;let T=G;for(;O.length&&O.at(-1)[1]>=P;){const[I,Y]=O.pop(),Z=Math.min(G-I,22),nt=Math.min(Y,16);(!M||Z*nt>M.a)&&(M={a:Z*nt,i0:I,i1:I+Z,j0:D-nt+1,j1:D+1}),T=I}O.push([T,P])}}if(!M||M.a*l*l<2500)break;for(let D=Math.max(0,M.j0-3);D<Math.min(p,M.j1+3);D++)for(let O=Math.max(0,M.i0-3);O<Math.min(f,M.i1+3);O++)_[D][O]=!1;const[w,H]=x(h+(M.i0+M.i1)/2*l,u+(M.j0+M.j1)/2*l);m.push({x:w,z:H,w:(M.i1-M.i0)*l-4,d:(M.j1-M.j0)*l-4,angle:n})}return m}function F1(i){i.computeBoundingBox();const t=i.boundingBox,e=i.attributes.position,n=[];for(let s=0;s<e.count;s++)n.push((e.getX(s)-t.min.x)/(t.max.x-t.min.x||1),(e.getZ(s)-t.min.z)/(t.max.z-t.min.z||1));i.setAttribute("uv",new Nt(n,2))}let Uh=1;const Ui=()=>(Uh=Uh*16807%2147483647)/2147483647,B1=i=>{let t=7;for(const e of String(i))t=(t*31+e.charCodeAt(0))%2147483647;return t||1};function Np(i,t){Uh=B1(i.id);const e=i.style||Lp(i.zone),n=Oc(),s=[],r=[],o=w1(i.poly),a=U1(i.zone),l=(x,_)=>t.ground?t.ground(x,_):0,c=i.maxBH!=null?i.maxBH-Rh:null,h=(x,_,m)=>{s.push({material:x,geometry:m.walls},{material:_,geometry:m.top})},u=(x,_,m,g,M,y=n.greenRoof,w=null)=>{const H=w??l(x.x,x.z);return h(M,y,Sd(x.x,H,x.z,_,g,m,x.angle,M.userData.tile)),H+g},f=(x,_)=>c==null?_:Math.max(6,Math.min(_,c-x)),p=(x,_)=>{for(const m of Di(i,x*.5,x*.5,x*.5,3,{allowed:t.allowedLow||t.allowed},_)){const g=x*.3;r.push({x:m.x+(Ui()-.5)*g,z:m.z+(Ui()-.5)*g,y:l(m.x,m.z),s:.8+Ui()*.6})}};if(e==="residential"||e==="mixed"){const x=e==="mixed"?18:12,_=Di(i,26,26,0,8,t);let m=0;for(const G of _)m=u(G,26,26,x,n.podium);const g=i.maxStoreys,M=650,y=Di(i,24,26,26,14,t),w=_.length?m:l(...ki(i.poly)),H=f(w,g?g*3.15:(c??w+100)-w-2),D=Math.max(1,H/3.15),O=Math.max(1,Math.ceil((a??5)*o*(e==="mixed"?.6:.9)/(M*D)));y.slice(0,O).forEach((G,P)=>{const T=f(w,H-P%3*6.3),I=P%2?n.towerAlt:n.tower;u(G,24,26,T,I,n.roof,_.length?w:null)}),p(18,40)}else if(e==="commercial"){const x=Di(i,30,30,0,8,t);let _=0;for(const w of x)_=u(w,30,30,20,n.podium);const m=x.length?_:l(...ki(i.poly)),g=f(m,(c??m+120)-m-2),M=g/4,y=Math.max(1,Math.ceil((a??8)*o*.8/(1400*M)));Di(i,38,34,30,14,t).slice(0,y).forEach((w,H)=>u(w,38,34,f(m,g-H*16),n.office,n.roof,x.length?m:null)),p(18,30)}else if(e==="gic"){const x=Math.min(i.maxStoreys?i.maxStoreys*4.2:30,c!=null?c-l(...ki(i.poly)):30);for(const _ of Di(i,24,24,0,7,t))u(_,24,24,Math.max(8,x),n.civic);p(16,30)}else if(e==="logistics"){const x=Ol[i.cluster]||Ol.B,_=O1(i,t,x.buildings),m=_.reduce((M,y)=>M+y.w*y.d,0)||1;l(...ki(i.poly));const g=Math.max(3,Math.min(x.maxFloors,Math.ceil((a??5)*o*.6/m)));_.forEach((M,y)=>{const w=l(M.x,M.z),H=f(w,g*6.5+2),D=n["logistics"+(i.cluster in Ol?i.cluster:"B")],O=Ya(M.x,M.z,M.w,M.d,M.angle,Math.min(16,M.d*.22)),G=Dh(O,w,H,D.userData.tile);s.push({material:D,geometry:G.walls},{material:n.greenRoof,geometry:G.top}),s.push({material:n.roofDeck,geometry:Nh(Ya(M.x,M.z,M.w-12,M.d-12,M.angle,Math.min(10,M.d*.18)),w+H+.25)});const P=Math.cos(M.angle),T=Math.sin(M.angle),I=(ht,J)=>[M.x+ht*P+J*T,M.z-ht*T+J*P],Y=Math.min(19,M.d*.36),Z=(y%2?-1:1)*(M.w/2-Y*.55),[nt,at]=I(Z,0),it=Dh(Ya(nt,at,Y*2,Y*2,0,Y,6),w,H+1.5,n.ramp.userData.tile);s.push({material:n.ramp,geometry:it.walls},{material:n.greenRoof,geometry:it.top});for(let ht=0;ht<4;ht++){const[J,At]=I((Ui()-.5)*(M.w-40),(Ui()-.5)*(M.d-30));s.push(...Object.entries(Sd(J,w+H+.25,At,4+Ui()*6,2.2,3+Ui()*3,M.angle,[4,4])).map(([,Ut])=>({material:n.roof,geometry:Ut})))}if(x.dronePads)for(const ht of[-.25,.18]){const[J,At]=I(ht*M.w,0);s.push({material:n.dronePad,geometry:Nh(Ya(J,At,15,15,M.angle,7.4,6),w+H+.32,0)})}}),x.dronePads&&s.filter(M=>M.material===n.dronePad).forEach(M=>F1(M.geometry)),p(16,90)}else if(e==="enterprise"){const x=Di(i,32,32,16,10,t),_=x.length*32*32||1,m=Math.ceil((a??5)*o*.75/_),g=l(...ki(i.poly));for(const M of x)u(M,32,32,f(g,m*4.5),n.campus);p(20,40)}else if(e==="village")for(const x of Di(i,11,11,6,4,t))Ui()<.8&&u(x,11,11,8.2,n.house,n.roof);else if(e==="open")p(14,220);else if(e==="green")p(12,320);else if(e==="utility")for(const x of Di(i,30,30,4,8,t))u(x,30,30,Math.min(12,c??12),n.civic,n.roof);return{parts:s,trees:r}}const wd={trunk:new ni(.25,.35,3,6).translate(0,1.5,0),crown:new cu(2.6,1).scale(1,.85,1).translate(0,4.6,0)};function Up(i){if(!i.length)return[];const t=Oc(),e=[];for(const[n,s]of[[wd.trunk,t.trunk],[wd.crown,t.crown]]){const r=new tu(n,s,i.length),o=new Qt;i.forEach((a,l)=>r.setMatrixAt(l,o.compose(new C(a.x,a.y,a.z),new yi,new C(a.s,a.s,a.s)))),r.name="lot vegetation",r.castShadow=!0,r.receiveShadow=!0,e.push(r)}return e}function zp(i){const t=new Map;for(const e of i)t.has(e.material)||t.set(e.material,[]),t.get(e.material).push(e.geometry);return[...t].map(([e,n])=>{const s=new ft(Us(n),e);return n.forEach(r=>r.dispose()),s.castShadow=s.receiveShadow=!0,s})}const k1=new Sy,Fl=new Map;function H1(i){return Fl.has(i)||Fl.set(i,k1.loadAsync(i).then(t=>t.scene)),Fl.get(i).then(t=>t.clone(!0))}async function V1(i,t,e){var c,h;const n=i.model,s=await H1(t),[r,o]=ki(i.poly),a=r+(((c=n.offset)==null?void 0:c[0])||0),l=o+(((h=n.offset)==null?void 0:h[1])||0);return s.position.set(a,e.ground?e.ground(a,l):0,l),s.rotation.y=(n.rotation||0)*Math.PI/180,s.scale.setScalar(n.scale||1),s.traverse(u=>{u.isMesh&&(u.castShadow=u.receiveShadow=!0)}),s}const zh=(i,t)=>{t.length&&i.add(...t)};async function G1(i,t){var n,s;const e=new en;if(e.name="lot:"+i.id,e.userData.lotId=i.id,((n=i.model)==null?void 0:n.type)==="massing"){const{parts:r,trees:o}=Np(i,t);zh(e,[...zp(r),...Up(o)])}else((s=i.model)==null?void 0:s.type)==="glb"&&i.model.src&&e.add(await V1(i,t.modelUrl(i.model.src),t).catch(r=>(console.warn("Lot model failed",i.model.src,r),new en)));return e}async function SS(i,t){var r,o;const e=new en;e.name="OZP lots";const n=new Map,s=[];for(const a of i)if(((r=a.model)==null?void 0:r.type)==="massing"){const l=Np(a,t),[c,h]=ki(a.poly),u=Math.floor(c/400)+":"+Math.floor(h/400);n.has(u)||n.set(u,[]),n.get(u).push(...l.parts),s.push(...l.trees)}else((o=a.model)==null?void 0:o.type)==="glb"&&a.model.src&&e.add(await G1(a,t));for(const a of n.values())zh(e,zp(a));return zh(e,Up(s)),e.updateMatrixWorld(!0),e.traverse(a=>a.matrixAutoUpdate=!1),e}const wS=()=>Object.values(Oc()).filter(i=>i.emissiveMap),bS=i=>{const t=i.filter(e=>e.model&&e.model.type!=="none");return(e,n)=>t.some(s=>xs([e,n],s.poly))},yc=i=>Ve.some(t=>Math.abs(i-t.s)<t.halfWidth+6),vo=i=>Math.abs(i-Pe.gate)<Pe.opening/2,zo=i=>yc(i)||cn.some(t=>Math.abs(t.s-i)<t.halfWidth+.5),Os=(i,t)=>Ar.some(e=>i<e.s+6&&t>e.s-6),bd=i=>Ve.some(t=>Math.abs(i-t.s)<t.halfWidth+11.5),as=(i,t,e,n,s,r=8)=>Array.from({length:r+1},(o,a)=>{const l=n+(s-n)*a/r;return[i+e*Math.cos(l),t+e*Math.sin(l)]});function W1(i){const t=_t(i.s),e=he(i.s).right,n=i.halfWidth,s=6,r=n+8.5,o=[xi(i,-1)-1.5,xi(i,1)-1.5],a=(f,p)=>{const x=_t(f),_=x.x+x.lx*p-t.x,m=x.z+x.lz*p-t.z;return[-(_*t.lx+m*t.lz),-(_*t.tx+m*t.tz)]};let l=as(e+s,-n-s,s,Math.PI/2,Math.PI);if(i.c===2650){const f=m=>a(i.s-m,-Je(i.s-m)+ue.width/2),p=m=>a(i.s-m,-Je(i.s-m)-ue.width/2),x=ue.offset-ue.width/2,_=Math.sqrt((s-3.75)**2-(e+s-x)**2);l=[...as(Fn.kerb+Fn.R,-n-Fn.R,Fn.R,Math.PI/2,Math.PI),p(-r),f(-r),f(-n-s),f(-n-s+_),[x,-n-s+_],[x,-n-s+Math.sqrt(s*s-(e+s-x)**2)],...l.filter(m=>m[0]<x)]}const c=[[-e,r],[e,r],...as(e+s,n+s,s,Math.PI,Math.PI*1.5),[o[1],n],[o[1],-n],...l,[e,-r],[-e,-r],...as(-e-s,-n-s,s,0,Math.PI/2),[-o[0],-n],[-o[0],n],...as(-e-s,n+s,s,-Math.PI/2,0)],h=[],u=2.2*Math.SQRT2;for(const f of[-1,1]){const p=c.map(([x,_])=>_-f*x);for(let x=Math.ceil(Math.min(...p)/u)*u+.37;x<Math.max(...p);x+=u){const _=[];c.forEach((m,g)=>{const M=c[(g+1)%c.length],y=m[1]-f*m[0]-x,w=M[1]-f*M[0]-x;y>0!=w>0&&_.push(m[0]+(M[0]-m[0])*y/(y-w))}),_.sort((m,g)=>m-g);for(let m=0;m+1<_.length;m+=2)h.push([[_[m],f*_[m]+x],[_[m+1],f*_[m+1]+x]])}}return{poly:c,lattice:h}}function X1(i,t,e){const n=(s,r)=>i<s+r&&t>s-r;return!_t(i).elevated&&!_t(t).elevated&&!zo(i)&&!zo(t)&&!Os(i,t)&&!Ve.some(s=>[-1,1].some(r=>n(s.s+r*(s.halfWidth+10),6)))&&!Y1.some(s=>s.side===e&&i<s.end&&t>s.start)&&!(e===1&&n(Pe.gate,22))}function Oo(i,t,e){const n=_t(i.s),s=t.centerOffset+e*44.8,r=0,o=new Qt().makeRotationFromEuler(new Ce(r,n.heading,0,"YXZ")).setPosition(n.x,n.y,n.z),a=i.id==="A1"?Math.max(0,-e*44.8-25)*.42:0,l=[7.05,7.05+i.width].map(u=>new C(-t.side*(u+a),_t(i.s+s).y-n.y+.3,-s).applyMatrix4(o));let c,h;for(let u=10;u<=80;u+=2){c=i.s+s+e*u;const f=_t(c);if(h=[he(c).right,he(c).right+3.75].map(p=>new C(f.x+f.lx*t.side*p,f.groundY+xn(c)+.003,f.z+f.lz*t.side*p)),Math.abs(l[0].y-h[0].y)/l[0].distanceTo(h[0])<=1/15)break}return{a:l,b:h,end:c}}const Y1=Ze.flatMap(i=>i.platforms.map(t=>({side:t.side,start:Oo(i,t,-1).end,end:Oo(i,t,1).end})));function TS(i,t,e=140,n=14){const s=Math.min(e,[...i].sort((r,o)=>r-o)[t]??e);return i.map(r=>Math.min(1,Math.max(0,(s-r)/n)))}function q1(i,t,e=18){let n=0;for(const s of t){const r=s.y-i.y;if(r<-2||r>15)continue;const o=(i.x-s.x)**2+(i.z-s.z)**2;n=Math.max(n,Math.exp(-o/(e*e))*.8)}return n}function Bl(i,t){let e=0;for(const n of t){const s=n.y-i.y;if(s<.1||s>15||n.kind==="deck"&&s>1.5)continue;const r=i.x-n.x,o=i.z-n.z;if(Math.abs(r)>55||Math.abs(o)>55)continue;if(n.kind==="mast"){e=Math.max(e,1.3*Math.exp(-(r*r+o*o)/(30*30)));continue}const a=n.axis||_t(n.s),l=r*a.tx+o*a.tz,c=r*a.lx+o*a.lz,h=n.kind==="cycle"?11:Math.max(9,Math.min(18,s*1.5)),u=n.kind==="cycle"?6:Math.max(5,s*.9);e=Math.max(e,Math.exp(-(l*l/(h*h)+c*c/(u*u)))*.9)}return e}function Fo(i,t){return Math.max(0,...Ch.map(e=>{const n=_t(e.s),s=i-n.x,r=t-n.z;return Math.abs(s*n.lx+r*n.lz)<e.extent?3.8*Math.max(0,Math.min(1,(e.width/2+3-Math.abs(s*n.tx+r*n.tz))/3)):0}))}const kl=Array.from({length:Math.ceil(Ie/3)+1},(i,t)=>mi(Math.min(t*3,Ie)));function Oh(i,t){let e=1/0;for(let n=1;n<kl.length;n++){const s=kl[n-1],r=kl[n],o=r.x-s.x,a=r.z-s.z,l=Math.max(0,Math.min(1,((i-s.x)*o+(t-s.z)*a)/(o*o+a*a||1)));e=Math.min(e,Math.hypot(i-s.x-l*o,t-s.z-l*a))}return e}function K1(i,t,e){if(!xu(i,t,e+Rr/2+16))return!1;if(xs([i,t],tn)||No(i,t,e+Rr/2+14)!=null)return!0;for(let n=0;n<tn.length;n++){const[s,r]=tn[n],[o,a]=tn[(n+1)%tn.length],l=o-s,c=a-r,h=Math.max(0,Math.min(1,((i-s)*l+(t-r)*c)/(l*l+c*c)));if(Math.hypot(i-s-h*l,t-r-h*c)<e+2)return!0}return!1}function Sr(i,t,e,n=!1){const s=pn(i,t),r=_t(s),o=(i-r.x)*r.lx+(t-r.z)*r.lz;if(r.c>680&&r.c<980&&o<-12+e&&o>-145-e||K1(i,t,e)||s>=ue.start-30&&s<=ue.end+40&&o<0&&(s<ue.start||s>ln(3300)?o>-35-e:Math.abs(o+Je(s))<ue.width/2+3.75+e)||Fo(i,t)>0||mn.distance(i,t)<9+e||Oh(i,t)<Io/2+e+(n?.2:1.5))return!1;if(!n)for(const a of xc){const l=_t(a.s),c=i-l.x,h=t-l.z,u=c*l.tx+h*l.tz,f=c*l.lx+h*l.lz;if(Math.abs(u)<a.halfWidth+35+e&&Math.abs(f-(wn(a.s)-6))<12+e)return!1}return $n.some(a=>Math.hypot(i-a.x,t-a.z)<14+e)||Math.hypot(i-r.x,t-r.z)<he(s).right+3.75+e?!1:[...Ve,...cn].every(a=>{const l=_t(a.s),c=i-l.x,h=t-l.z;return Math.abs(c*l.tx+h*l.tz)>a.halfWidth+5+e||Math.abs(c*l.lx+h*l.lz)>a.extent+e})}new C;const Td=new yi;new C;const Ed=new Qt;let Hl=9173;const Yt=()=>(Hl=1664525*Hl+1013904223>>>0,Hl/4294967296);function Is(i){const t=document.createElement("canvas");t.width=t.height=512;const e=t.getContext("2d");if(i.startsWith("leaf")){e.clearRect(0,0,512,512);for(let s=0;s<220;s++){let r=256+(Yt()-.5)*430,o=256+(Yt()-.5)*420;if(Math.hypot((r-256)/230,(o-256)/235)>1)continue;const a=i==="leaf-flowering"&&Yt()<.32;e.fillStyle=a?`hsl(${312+Yt()*25} 48% ${55+Yt()*18}%)`:i==="leaf-golden"?`hsl(${38+Yt()*22} 56% ${35+Yt()*22}%)`:`hsl(${88+Yt()*32} 25% ${19+Yt()*24}%)`,e.beginPath(),e.ellipse(r,o,10+Yt()*16,5+Yt()*11,Yt()*6.28,0,6.28),e.fill()}}else{const s={road:[75,79,77],walk:[151,91,79],grass:[85,102,60],wall:[191,187,169]}[i]||[160,160,150],r=e.createImageData(512,512);for(let o=0;o<r.data.length;o+=4){const a=(Yt()-.5)*(i==="grass"?48:22);r.data[o]=s[0]+a,r.data[o+1]=s[1]+a,r.data[o+2]=s[2]+a,r.data[o+3]=255}if(e.putImageData(r,0,0),i.startsWith("walk")){const o=i==="walk-grey"?["#969b98","#797f7d","#a7aaa1","#686f6c"]:i==="walk-buff"?["#b5a98c","#c1b69d","#9c947d","#837f71"]:["#a67863","#985c4b","#b38e73","#7d7770"];e.fillStyle="#565a53",e.fillRect(0,0,512,512);const a=i!=="walk",l=a?64:32;for(let c=0;c<512/l;c++)for(let h=-1;h<8;h++){const u=h*64+(a?0:c%2*32),f=c*l;e.fillStyle=o[Math.floor(Yt()*o.length)],e.fillRect(u+1,f+1,62,l-2),i==="walk-buff"&&(e.fillStyle="#686c5e",(c+h)%2?e.fillRect(u+31,f+1,2,62):e.fillRect(u+1,f+31,62,2)),e.fillStyle="rgba(230,220,197,.16)",e.fillRect(u+2,f+2,60,1)}for(const c of[0,256])e.fillStyle="#656d68",e.fillRect(0,c,512,12),e.fillStyle="#b4b19e",e.fillRect(0,c+12,512,5);for(let c=0;c<1800;c++)e.fillStyle=c%3?"rgba(36,42,33,.12)":"rgba(215,207,181,.16)",e.fillRect(Yt()*512,Yt()*512,1+Yt()*5,1+Yt()*3);for(let c=0;c<16;c++){const h=Yt()*512,u=Yt()*512;e.strokeStyle="rgba(35,44,36,.24)",e.lineWidth=.7,e.beginPath(),e.moveTo(h,u),e.lineTo(h+8,u+4),e.lineTo(h+17,u+2),e.stroke()}}if(i==="wall"){e.strokeStyle="#9d9a8e",e.lineWidth=3;for(let o=0;o<512;o+=128)e.beginPath(),e.moveTo(0,o),e.lineTo(512,o),e.stroke()}}const n=new ti(t);return n.colorSpace=nn,n.wrapS=n.wrapT=Mi,n.anisotropy=8,n}function je(i,t,e,n,s=0,r=!1,o=!1,a=_t){if(t<=i)return new _e().setAttribute("position",new Nt([],3));const l=[],c=[],h=[];let u=Math.ceil((t-i)/2);for(let x=0;x<=u;x++){let _=i+(t-i)*x/u,m=a(_),g=(r?m.groundY:m.y)+(typeof s=="function"?s(_):s);for(const M of[e,n]){const y=typeof M=="function"?M(_):M;l.push(m.x+m.lx*y,g,m.z+m.lz*y),c.push(y/5,_/5)}}const f=(x,_,m)=>(l[_*3+2]-l[x*3+2])*(l[m*3]-l[x*3])-(l[_*3]-l[x*3])*(l[m*3+2]-l[x*3+2]);for(let x=0;x<u;x++){const _=x*2,m=_t(i+(t-i)*x/u),g=_t(i+(t-i)*(x+1)/u),M=y=>(l[(y+2)*3]-l[y*3])*(g.x-m.x)+(l[(y+2)*3+2]-l[y*3+2])*(g.z-m.z);!(o&&(typeof o=="function"?o:yc)(i+(t-i)*(x+.5)/u))&&f(_,_+2,_+1)>1e-8&&f(_+1,_+2,_+3)>1e-8&&M(_)>0&&M(_+1)>0&&h.push(_,_+2,_+1,_+1,_+2,_+3)}let p=new _e;return p.setAttribute("position",new Nt(l,3)),p.setAttribute("uv",new Nt(c,2)),p.setIndex(h),p.computeVertexNormals(),p}function Bo(i,t,e){for(const a of[...Ve,...cn]){const l=_t(a.s),c=i-l.x,h=t-l.z;if(Math.abs(c*l.lx+h*l.lz)<a.extent+1&&Math.abs(c*l.tx+h*l.tz)<a.halfWidth+4)return a.underpass?l.groundY:l.y}const n=_t(Pe.s),s=(i-n.x)*n.lx+(t-n.z)*n.lz,r=(i-n.x)*n.tx+(t-n.z)*n.tz;if(s>0&&s<55&&Math.abs(r+Pe.s-Pe.gate)<16)return n.y;if(xu(i,t)&&xs([i,t],tn))return n.y-.8;const o=No(i,t,5);return o!=null?o-.1:_t(e).groundY}function ES(i,t){const e=pn(i,t),n=_t(e);return Math.hypot(i-n.x,t-n.z)>100?-5:Bo(i,t,e)}function j1(i,t){const e=de.filter(_=>_.s>=Math.max(0,i-5)&&_.s<=t+5),n=8,s=[],r=[],o=[],a=Math.floor((Math.min(...e.map(_=>_.x))-100)/n)*n,l=Math.max(...e.map(_=>_.x))+100,c=Math.floor((Math.min(...e.map(_=>_.z))-100)/n)*n,h=Math.max(...e.map(_=>_.z))+100,u=Math.ceil((l-a)/n)+1,f=Math.ceil((h-c)/n)+1,p=[];for(let _=0;_<f;_++)for(let m=0;m<u;m++){const g=a+m*n,M=c+_*n,y=pn(g,M),w=_t(y);s.push(g,Bo(g,M,y)-.24-Fo(g,M),M),r.push(g/5,M/5),p.push(Math.hypot(g-w.x,M-w.z)<=100&&y>=i-10&&y<=t+10)}for(let _=0;_<f-1;_++)for(let m=0;m<u-1;m++){const g=_*u+m,M=g+1,y=g+u,w=y+1;[g,M,y,w].every(H=>p[H])&&o.push(g,y,M,M,y,w)}const x=new _e;return x.setAttribute("position",new Nt(s,3)),x.setAttribute("uv",new Nt(r,2)),x.setIndex(o),x.computeVertexNormals(),x}function ic(i,t,e=-2,n=2,s=0){return je(i,t,e,n,r=>zs(r)+s,!0,bo,mi)}function Z1(){return ic(0,Ie)}function Mo(i,t,e,n=_t){const s=[],r=[],o=Math.ceil((t-i)/2),a=e.length;for(let c=0;c<=o;c++){const h=i+(t-i)*c/o,u=n(h);for(const[f,p]of e)s.push(u.x+u.lx*(typeof f=="function"?f(h):f),u.y+(typeof p=="function"?p(h):p),u.z+u.lz*(typeof f=="function"?f(h):f))}for(let c=0;c<o;c++)for(let h=0;h<a;h++){const u=c*a+h,f=c*a+(h+1)%a;r.push(u,f,u+a,f,f+a,u+a)}for(const c of[0,o])for(let h=1;h<a-1;h++)r.push(c*a,c*a+h,c*a+h+1);const l=new _e;return l.setAttribute("position",new Nt(s,3)),l.setIndex(r),l.computeVertexNormals(),l}function AS(i,t,{occupied:e=()=>!1}={}){var $s,ia;const n=new ft(new Pn(14e3,14e3),new ne({color:6649415,roughness:1}));n.rotation.x=-Math.PI/2,n.position.y=-5,i.add(n);const s=Is("road"),r=Is("walk"),o=Is("walk-grey"),a=Is("walk-buff"),l=[r,o,a],c={road:new ne({map:s,roughness:.91}),walk:new ne({map:r,roughness:.96}),grass:new ne({map:Is("grass"),roughness:1}),concrete:new ne({color:13025964,roughness:.9,side:He}),lamp:new ne({color:16773596,emissive:16773596,emissiveIntensity:0}),galvanised:new ne({color:10726830,metalness:.55,roughness:.58}),yellow:new ne({color:16764706,roughness:.8}),white:new ne({color:15526099,roughness:.8}),teal:new ne({color:4683627,roughness:.85}),metal:new ne({color:4609620,metalness:.65,roughness:.4})};c.walkGrey=new ne({map:o,roughness:.97}),c.walkBuff=new ne({map:a,roughness:.96});const h=[],u={},f=[],p=[],x=[],_=[],m=[],g={value:0},M=[],y={box:new qe(1,1,1),cyl:new ni(1,1,1,7),leaf:new Pn(1,1),cone:new ou(1,1,8)},w=new ne({map:Is("leaf"),alphaTest:.38,side:He,roughness:1,color:14869941}),H=[{name:"broadleaf",color:12241306,spread:1,rise:1},{name:"upright",color:9022339,spread:.58,rise:1.55},{name:"golden",color:14203490,spread:1.2,rise:.8},{name:"flowering",color:15115969,spread:.9,rise:1.05}].map(d=>({...d,material:Pl(w,g)}));H.forEach(d=>{d.material.map=Is("leaf-"+d.name),d.material.color.setHex(d.name==="golden"||d.name==="flowering"?16777215:d.color)});const D=Pl(new ne({color:6708035,roughness:1}),g),O=new Pn(1,1),G=["MOVE WITH THE CITY","SHOP · DINE · PLAY","HONG KONG IN MOTION"].map((d,v)=>{const S=document.createElement("canvas");S.width=512,S.height=192;const b=S.getContext("2d");b.fillStyle=["#eab45f","#3d8172","#ae4d55"][v],b.fillRect(0,0,512,192),b.fillStyle="#fff9e8",b.font="bold 42px sans-serif",b.textAlign="center",b.fillText(d,256,92),b.font="24px sans-serif",b.fillText("SGMTS CORRIDOR",256,137);const E=new ti(S);return E.colorSpace=nn,new bn({map:E,side:He})}),P=[];function T(d,v,S,b,E,A=new Ce,N=0){const U=d+"-"+N;u[U]||(u[U]={geometry:v,material:S,matrices:[],chunk:N}),Td.setFromEuler(A),Ed.compose(b,Td,E),u[U].matrices.push(Ed.clone())}function I(d,v,S,b,E,A,N,U,W=0,V=0){T(d,y.box,v,new C(S,b,E),new C(A,N,U),new Ce(0,W,0),V)}function Y(d,v){const S=_t(d);return new C(S.x+S.lx*v,S.groundY,S.z+S.lz*v)}for(let d=0;d<Ie;d+=240){let v=Math.min(d+240,Ie),S=Math.floor(d/240),b=new en;b.userData.s=(d+v)/2,i.add(b),h.push(b);const E=new ft(j1(d,v),c.grass);E.receiveShadow=!0,b.add(E);for(const[B,z,j,lt,tt]of[[rt=>he(rt).left,rt=>he(rt).right,0,c.road,!1],[rt=>he(rt).left-3.75,rt=>he(rt).left,xn,c.walk,!0],[rt=>he(rt).right,rt=>he(rt).right+3.75,xn,c.walk,!0]]){const rt=[c.walk,c.walkGrey,c.walkBuff][(S+(B(d)>0?1:0))%3],mt=new ft(je(d,v,B,z,j,tt,lt===c.walk?Ct=>zo(Ct)||B(Pe.s)>0&&vo(Ct):!1),lt===c.walk?rt:lt);mt.receiveShadow=!0,b.add(mt)}for(const B of[z=>he(z).left,z=>he(z).right]){const z=new ft(je(d,v,j=>B(j)-.05,j=>B(j)+.05,.025,!1,bd),c.white);b.add(z)}for(const B of[-.14,.14]){const z=new ft(je(Math.max(35,d),Math.min(v,Do-75),B-.055,B+.055,.028,!1,j=>bd(j)||zo(j)||vo(j)),c.white);d<Do-75&&b.add(z)}for(let B=Math.max(d,Pe.gate-15);B<Math.min(v,Pe.gate+15);B+=5)b.add(new ft(je(B,Math.min(B+2,v),-.055,.055,.03),c.white));for(let B=Math.max(d,Do-75);B<v;B+=7)b.add(new ft(je(B,Math.min(B+3,v),-.05,.05,.029),c.white));for(let B=Math.ceil(Math.max(d,35)/1.5)*1.5;B<v;B+=1.5)for(const z of[-1,1])for(const j of[0,...Math.abs(ii(B,z))>1.91?[1]:[]])for(const lt of[-.24,.24]){const tt=mt=>j?z*1.9:z===-1?l1(mt):ii(mt),rt=new ft(je(B,Math.min(B+.55,v),mt=>tt(mt)+lt-.085,mt=>tt(mt)+lt+.085,.105,!1,!1),c.white);rt.name="ART guidance marks",b.add(rt)}const A=b.children.filter(B=>B.name==="ART guidance marks"),N=[],U=[];for(const B of A){const z=N.length/3;N.push(...B.geometry.attributes.position.array),U.push(...Array.from(B.geometry.index.array,j=>j+z)),B.geometry.dispose(),b.remove(B)}const W=new _e;W.setAttribute("position",new Nt(N,3)),W.setIndex(U),W.computeVertexNormals();const V=new ft(W,c.white);V.name="ART guidance marks",b.add(V);for(let B=d;B<v;B+=2){const z=Math.min(B+2,v),j=_t((B+z)/2),lt=_t(B),tt=_t(z);for(const rt of[-1,1]){if(yc(B)||rt===1&&vo(B))continue;const mt=rt*(he(B).right+(j.elevated?.21:0)),Ct=rt*(he(z).right+(j.elevated?.21:0)),Lt=lt.x+lt.lx*mt,fe=lt.z+lt.lz*mt,Ge=tt.x+tt.lx*Ct,me=tt.z+tt.lz*Ct,Ue=Math.atan2(Lt-Ge,fe-me),sn=(Lt+Ge)/2,vn=(fe+me)/2,ze=(lt.y+tt.y)/2;if(j.elevated){Math.floor(B/2)%3===0&&(I("parapet-light-housing",c.metal,sn-j.lx*rt*.24,ze+.56,vn-j.lz*rt*.24,.09,.19,1.35,Ue,S),I("parapet-light",c.lamp,sn-j.lx*rt*.3,ze+.56,vn-j.lz*rt*.3,.035,.11,1.15,Ue,S)),Math.floor(B)%12<2&&_.push({s:B,x:sn-j.lx*rt*1.8,y:ze+.6,z:vn-j.lz*rt*1.8,kind:"deck"});const jn=(Zn,An,sa,wu,bu)=>{const ra=Ti=>rt*(he(Ti).right+.21),Tu=new ft(Mo(B,z,[[Ti=>ra(Ti)-sa/2,wu],[Ti=>ra(Ti)+sa/2,wu],[Ti=>ra(Ti)+sa/2,bu],[Ti=>ra(Ti)-sa/2,bu]]),An);Tu.name=Zn,b.add(Tu)};jn("parapet",c.concrete,.42,0,.8);for(const Zn of[1.02,1.3])jn("parapet-rail",c.metal,.06,Zn-.03,Zn+.03);I("parapet-post",c.metal,sn,ze+1.03,vn,.07,.55,.07,Ue,S),j.structure==="ramp"&&(Math.max(.2,ze-j.groundY),jn("retained-ramp",c.concrete,.55,Zn=>_t(Zn).groundY-_t(Zn).y,0))}else{xn((B+z)/2);const jn=An=>rt*he(An).right,Zn=new ft(Mo(B,z,[[An=>jn(An)-.075,0],[An=>jn(An)+.075,0],[An=>jn(An)+.075,xn],[An=>jn(An)-.075,xn]]),c.concrete);Zn.name="continuous-kerb",b.add(Zn)}}}for(const B of["parapet","parapet-rail","retained-ramp","continuous-kerb"]){const z=b.children.filter(j=>j.name===B);if(z.length){const j=new ft(Us(z.map(lt=>lt.geometry)),z[0].material);j.name=B,j.castShadow=!0,j.receiveShadow=!0;for(const lt of z)b.remove(lt),lt.geometry.dispose();b.add(j)}}for(let B=d+5;B<v;B+=11)if(_t(B),!([...Ve,...cn].some(z=>Math.abs(z.s-B)<z.halfWidth+12)||Os(B-10,B+10)))for(let z of[-1,1]){const j=Ze.some(Ct=>Math.abs(Ct.s-B)<60);let lt=z*((z===-1?17:j?20:18)+Yt()*7),tt=Y(B,lt),rt=5+Yt()*5;if(!Sr(tt.x,tt.z,3))continue;const mt=H[Math.floor(Yt()*H.length)];x.push({x:tt.x,z:tt.z,y:tt.y,s:B,kind:mt.name}),T("trunk",y.cyl,D,new C(tt.x,tt.y+rt*.4,tt.z),new C(.16+mt.spread*.05,rt*.8,.16+mt.spread*.05),new Ce,S);for(let Ct=0;Ct<16;Ct++){let Lt=Yt()*6.28,fe=Yt()*2.9*mt.spread,Ge=new C(tt.x+Math.cos(Lt)*fe,tt.y+rt-1+Yt()*3*mt.rise,tt.z+Math.sin(Lt)*fe);T("foliage-"+mt.name,y.leaf,mt.material,Ge,new C((4+Yt()*2)*mt.spread,(3.5+Yt()*2)*mt.rise,1),new Ce((Yt()-.5)*1.6,Lt,0),S)}}for(let B=d+15;B<v;B+=52)if(![...Ve,...cn].some(z=>Math.abs(z.s-B)<z.halfWidth+25))for(let z of[-1,1]){const j=_t(B),lt=z*(48+Yt()*40),tt=Y(B,lt),rt=j.c<650?"residential":j.c<1250?"logistics":j.c<1900?"tech":j.c<2550?"village":j.c<3200?"boulevard":"construction",mt=rt==="village"?6+Yt()*4:rt==="logistics"?8+Yt()*5:rt==="tech"?16+Yt()*18:18+Yt()*66,Ct=15+Yt()*15,Lt=16+Yt()*16,fe=Math.floor(Yt()*4),Ge=Math.hypot(Ct,Lt)/2+2;if(e(tt.x,tt.z)||!Sr(tt.x,tt.z,Ge)||f.some(ze=>Math.hypot(ze.x-tt.x,ze.z-tt.z)<ze.radius+Ge+3))continue;if(f.push({x:tt.x,z:tt.z,radius:Ge,zone:rt}),rt==="construction"){for(let ze=0;ze<mt;ze+=3.2){I("construction-slab",c.concrete,tt.x,tt.y+ze,tt.z,Ct,.3,Lt,j.heading,S);for(const jn of[-Ct/2+1,Ct/2-1])for(const Zn of[-Lt/2+1,Lt/2-1]){const An=new C(jn,ze+1.6,Zn).applyAxisAngle(new C(0,1,0),j.heading).add(tt);I("construction-column",c.concrete,An.x,An.y,An.z,.6,3.2,.6,j.heading,S)}}I("crane-mast",c.teal,tt.x,tt.y+(mt+10)/2,tt.z,.8,mt+10,.8,0,S),I("crane-jib",c.teal,tt.x,tt.y+mt+9,tt.z,Ct+10,.65,.8,j.heading,S),I("crane-counterweight",c.concrete,tt.x,tt.y+mt+8,tt.z,2,2,2,0,S);continue}const me=t.getObjectByName("building_"+(rt==="boulevard"?"residential":rt)),[Ue,sn,vn]=me.userData.dimensions;if(me.updateMatrixWorld(!0),me.traverse(ze=>{if(!ze.isMesh)return;const jn=ze.userData.worldGeometry||(ze.userData.worldGeometry=ze.geometry.clone().applyMatrix4(ze.matrixWorld));T(ze.name,jn,ze.material,tt,new C(Ct/Ue,mt/sn,Lt/vn),new Ce(0,j.heading,0),S),ze.material.name==="window_lit"&&!P.includes(ze.material)&&P.push(ze.material)}),rt!=="village"&&Math.floor(B/52)%2===0){const ze=tt.clone().add(new C(-j.lx*z*(Lt/2+.12),mt*.58,-j.lz*z*(Lt/2+.12)));T("building-ad-"+fe,O,G[fe%G.length],ze,new C(Math.min(13,Ct*.72),3.5,1),new Ce(0,j.heading+(z===1?Math.PI:0),0),S)}}}function Z(d,v,S,b,E=1,A=!1){const N=_t(d),U=Y(d,v),W=Math.floor(d/240),V=A?1.35:1.1,B=c.galvanised;I(b+"-column",B,U.x,U.y+S/2,U.z,.16,S,.16,0,W);for(const z of A?[-1,1]:[E]){const j=U.x-N.lx*z*V,lt=U.z-N.lz*z*V;I(b+"-bracket",B,U.x-N.lx*z*V/2,U.y+S-.15,U.z-N.lz*z*V/2,V,.08,.08,N.heading,W),I(b+"-LED",c.lamp,j,U.y+S-.2,lt,.42,.09,.9,N.heading,W),_.push({s:d,x:j,y:U.y+S-.2,z:lt,kind:b,height:S})}}for(let d=20;d<Ie;){const v=_t(d),S=[...Ve,...Ar].some(A=>Math.abs(A.s-d)<55),b=c1(d)<180,E=he(d).right>5.5;if(!v.elevated&&!yc(d)&&!Ze.some(A=>Math.abs(A.s-d)<A.footprintLength/2+6))for(const A of E||S?[-1,1]:[1])A===1&&vo(d)||Z(d,A*(he(d).right+3.95),S&&E?12:10,"road",A);d+=S||b?27:35}function nt(d,v){const S=mi(d),b=S.x+S.lx*v,E=S.z+S.lz*v,A=S.groundY+zs(d),N=Math.floor(d/240),U=5;I("cycle-column",c.galvanised,b,A+U/2,E,.16,U,.16,0,N);for(const W of[-1,1]){const V=b-S.lx*W*1.35,B=E-S.lz*W*1.35;I("cycle-bracket",c.galvanised,b-S.lx*W*.675,A+U-.15,E-S.lz*W*.675,1.35,.08,.08,S.heading,N),I("cycle-LED",c.lamp,V,A+U-.2,B,.42,.09,.9,S.heading,N),_.push({s:d,x:V,y:A+U-.2,z:B,kind:"cycle",height:U,axis:{tx:S.tx,tz:S.tz,lx:S.lx,lz:S.lz}})}}const at=d=>d.id==="A1"?19.2:7.05+d.width;for(let d=10,v=18,S=mi(10);d<Ie-4;d+=1){const b=mi(d);if(v+=Math.hypot(b.x-S.x,b.z-S.z),S=b,v<18)continue;const E=Dc(d),A=E&&zs(d)>.6?2.15:2.3;if(bo(d)||!E&&[...Ve,...cn].some(U=>Math.abs(U.s-d)<U.halfWidth+2))continue;const N=Math.abs(wn(d)+A);Ze.some(U=>Math.abs(U.s-d)<U.footprintLength/2+2&&N<at(U)+1.6)||(nt(d,A),v=0)}for(const d of Ze)for(const v of[-30,0,30])for(const S of[-9,9]){const b=Y(d.s+v,S);_.push({s:d.s+v,x:b.x,y:_t(d.s+v).y+3,z:b.z})}const it=new ft(Z1(),new ne({color:2649688,roughness:.92,side:He}));it.name="continuous-green-cycleway",it.receiveShadow=!0,i.add(it);for(const d of[-1,1]){const v=new ft(ic(0,Ie,d*1.86-.045,d*1.86+.045,.018),c.white);i.add(v)}for(const d of Ze)for(const v of d.platforms)for(const S of[-1,1]){if(d.id==="A1"&&S===-1)continue;const{a:b,b:E}=Oo(d,v,S),A=new _e;A.setAttribute("position",new Nt([...b[0].toArray(),...b[1].toArray(),...E[0].toArray(),...E[1].toArray()],3)),A.setAttribute("uv",new Nt([0,0,d.width/5,0,0,2,.75,2],2)),A.setIndex(v.side*S===1?[0,2,1,1,2,3]:[0,1,2,1,3,2]),A.computeVertexNormals();const N=new ft(A,c.walk);N.name="Smooth station footpath connection",i.add(N)}for(let d=0;d<Ie-3;d+=6){if(bo(d)||bo(d+2))continue;const v=new ft(ic(d,d+2,-.045,.045,.018),c.white);i.add(v)}const ht=document.createElement("canvas");ht.width=128,ht.height=256;const J=ht.getContext("2d");J.strokeStyle="white",J.lineWidth=5;for(const d of[35,93])J.beginPath(),J.arc(d,172,23,0,Math.PI*2),J.stroke();J.beginPath(),J.moveTo(35,172),J.lineTo(51,133),J.lineTo(76,172),J.closePath(),J.moveTo(51,133),J.lineTo(82,133),J.lineTo(93,172),J.moveTo(82,133),J.lineTo(88,117),J.stroke(),J.fillStyle="white",J.font="65px sans-serif",J.fillText("↑",37,83);const At=new ti(ht),Ut=new bn({map:At,transparent:!0,depthWrite:!1});for(let d=25;d<Ie-5;d+=70){if(bo(d))continue;const v=mi(d);for(const S of[-1,1]){const b=new ft(new Pn(1.2,2.7),Ut);b.rotation.set(-Math.PI/2,0,-v.heading+(S===1?Math.PI:0));const E=S*.9;b.position.set(v.x+v.lx*E,v.groundY+zs(d)+.022,v.z+v.lz*E),i.add(b)}}const zt=document.createElement("canvas");zt.width=zt.height=128;const Ot=zt.getContext("2d");Ot.fillStyle="#1763a0",Ot.beginPath(),Ot.arc(64,64,61,0,Math.PI*2),Ot.fill(),Ot.strokeStyle="white",Ot.lineWidth=4,Ot.stroke(),Ot.drawImage(ht,0,105,128,110,5,44,63,55),Ot.strokeStyle="white",Ot.lineWidth=4,Ot.beginPath(),Ot.moveTo(71,25),Ot.lineTo(71,104),Ot.moveTo(96,52),Ot.lineTo(96,78),Ot.moveTo(82,64),Ot.lineTo(110,64),Ot.moveTo(96,78),Ot.lineTo(85,99),Ot.moveTo(96,78),Ot.lineTo(107,99),Ot.stroke(),Ot.fillStyle="white",Ot.beginPath(),Ot.arc(96,39,7,0,Math.PI*2),Ot.fill();const ve=new bn({map:new ti(zt),transparent:!0,side:He});for(const d of Ve.filter(v=>!xc.includes(v)))for(const v of[-1,1]){const S=d.s+v*(d.halfWidth+9),b=_t(S),E=wn(S),A=new ft(je(S-1.4,S+1.4,V=>wn(V)-2,V=>wn(V)+2,V=>ec(V)+.018,!0),new ne({color:12296783}));i.add(A);const N=Y(S,E-2.4),U=Math.floor(S/240);I("cycle-sign-post",c.metal,N.x,N.y+1.4,N.z,.07,2.8,.07,0,U);const W=new ft(new Pn(.65,.65),ve);W.position.set(N.x,N.y+2.5,N.z),W.rotation.y=b.heading,i.add(W)}const st=_t(Ie-3),dt=new en;dt.name="northern-route-end",dt.position.set(st.x,st.y,st.z),dt.rotation.y=st.heading,i.add(dt);const Pt=document.createElement("canvas");Pt.width=1024,Pt.height=256;const wt=Pt.getContext("2d");wt.fillStyle="#173d35",wt.fillRect(0,0,1024,256),wt.fillStyle="#fff3cd",wt.textAlign="center",wt.font="bold 62px sans-serif",wt.fillText("END OF LINE · 路線終點",512,110),wt.font="36px sans-serif",wt.fillText("Stop here · 請停車",512,185);const re=new ft(new Pn(7,1.75),new bn({map:new ti(Pt),side:He}));re.position.set(0,3,0),dt.add(re);for(const d of[-3.4,3.4]){const v=new ft(new qe(.15,3.8,.15),c.metal);v.position.set(d,1.9,0),dt.add(v)}for(let d=-3.5;d<3.5;d+=.7){const v=new ft(new qe(.7,.45,.35),new ne({color:Math.round((d+3.5)/.7)%2?15779163:2636343}));v.position.set(d+.35,.8,0),dt.add(v)}const ie=(d,v,S,b,E=0)=>{const A=[],N=[];for(const[V,B]of d){const z=B[0]-V[0],j=B[1]-V[1],lt=Math.hypot(z,j)||1,tt=-j/lt*v/2,rt=z/lt*v/2,mt=A.length/3;for(const[Ct,Lt]of[[V[0]+tt,V[1]+rt],[V[0]-tt,V[1]-rt],[B[0]+tt,B[1]+rt],[B[0]-tt,B[1]-rt]])A.push(Ct,S-E*Lt,Lt);N.push(mt,mt+2,mt+1,mt+1,mt+2,mt+3)}const U=new _e;U.setAttribute("position",new Nt(A,3)),U.setIndex(N),U.computeVertexNormals();const W=new ft(U,b);return W.receiveShadow=!0,W},Zt=(d,v,S,b=0)=>{const E=new Tr(new wo(d.map(([U,W])=>new gt(U,-W))));E.rotateX(-Math.PI/2);const A=E.attributes.position;for(let U=0;U<A.count;U++)A.setY(U,(typeof v=="function"?v(A.getZ(U)):v)-b*A.getZ(U));E.setAttribute("uv",new Nt(Array.from({length:A.count},(U,W)=>[A.getX(W)/5,A.getZ(W)/5]).flat(),2)),E.computeVertexNormals();const N=new ft(E,S);return N.receiveShadow=!0,N},Re=new ne({map:r,side:He,roughness:.96}),k=(d,v,S,b,E,A,N,U=0)=>{const W=[],V=[];for(let j=0;j<=12;j++)for(const lt of[b,S]){const tt=E+(A-E)*j/12,rt=d+lt*Math.cos(tt),mt=v+lt*Math.sin(tt);W.push(rt,N-U*mt,mt)}for(let j=0;j<12;j++){const lt=j*2;V.push(lt,lt+2,lt+1,lt+1,lt+2,lt+3)}const B=new _e;B.setAttribute("position",new Nt(W,3)),B.setIndex(V),B.setAttribute("uv",new Nt(W.flatMap((j,lt)=>lt%3===0?[j/5,W[lt+2]/5]:[]),2)),B.computeVertexNormals();const z=new ft(B,Re);return z.name="connected-corner-footpath",z},Me=new ne({color:15189842}),pe=(d,v,S,b,E)=>{const A=[];for(let N=d;N<v-.01;N+=b+E)A.push([[N,S],[Math.min(N+b,v),S]]);return A};for(const d of[...Ve,...cn]){const v=_t(d.s),S=new en,b=he(d.s).right,E=d.halfWidth,A=6;S.name=(d.underpass?"underpass-":"junction-")+d.c,S.position.set(v.x,d.underpass?v.groundY:v.y,v.z),S.rotation.y=v.heading,i.add(S);const N=(U,W,V,B,z,j=.045)=>{const lt=new ft(new qe(U,.05,W,Math.max(1,Math.ceil(U/6)),1,Math.max(1,Math.ceil(W/6))),z);if(lt.position.set(V,j-.025,B),!d.underpass){const tt=lt.geometry.attributes.position;for(let rt=0;rt<tt.count;rt++)tt.setY(rt,tt.getY(rt)-v.grade*(tt.getZ(rt)+B));lt.geometry.computeVertexNormals()}return lt.receiveShadow=!0,S.add(lt),lt};N(d.extent*2,E*2,0,0,c.road);for(const U of[-1,1]){d.c===3395&&U===1||N(d.extent*2,3.75,0,U*(E+1.875),c.walk,.3);for(let W=-d.extent;W<d.extent;W+=7)if(!(d.underpass?d.c===3395&&Math.abs(Math.abs(W)-30)<3.2:Math.abs(W)<xi(d,Math.sign(W)||1)+4.5))for(const V of d.underpass?[-E/2,0,E/2]:[0])N(3,.09,W,V,c.white,.079)}if(d.c===3395){const U=Fi,W=U.x-U.half,V=U.x+U.half,B=W-U.R,z=B-U.taperLength,j=E+U.taper,lt=[-30,30],tt=mt=>mt.flatMap(([Ct,Lt])=>{let fe=[[Ct,Lt]];for(const Ge of lt)fe=fe.flatMap(([me,Ue])=>{const sn=Math.min(me[0],Ue[0]),vn=Math.max(me[0],Ue[0]);return vn<Ge-1.7||sn>Ge+1.7?[[me,Ue]]:[...sn<Ge-1.7?[[[sn,me[1]],[Ge-1.7,me[1]]]]:[],...vn>Ge+1.7?[[[Ge+1.7,me[1]],[vn,me[1]]]]:[]]});return fe});S.add(Zt([[W,E],...as(B,j+U.R,U.R,0,-Math.PI/2),[z,E]],.07,c.road),Zt([[V,E],...as(V+U.R,E+U.R,U.R,-Math.PI/2,-Math.PI)],.07,c.road),Zt([[B,j],[z,E],[z,E+3.75],[B,j+3.75]],.3,c.walk),k(V+U.R,E+U.R,U.R-3.75,U.R,-Math.PI/2,-Math.PI,.3),k(B,j+U.R,U.R-3.75,U.R,0,-Math.PI/2,.3)),N(d.extent-V-U.R,3.75,(d.extent+V+U.R)/2,E+1.875,c.walk,.3),N(d.extent+z,3.75,(z-d.extent)/2,E+1.875,c.walk,.3);const rt=[[U.x-1.8-.75,j+U.R+2],[U.x-1.8+.75,j+U.R+2],[U.x-1.8,j+U.R+7]];S.add(ie([...tt([[[-d.extent,-E+.25],[d.extent,-E+.25]],[[-d.extent,E-.25],[z,E-.25]],[[V+U.R,E-.25],[d.extent,E-.25]]]),[[B,j-.25],[z,E-.25]],...pe(z,V+U.R,E-.25,1,1),...[.35,.75].flatMap(mt=>pe(B+Math.sqrt(U.R*U.R-(U.R-mt)**2)+.1,U.x,j+mt,.6,.3)),...rt.map((mt,Ct)=>[mt,rt[(Ct+1)%3]])],.15,.11,c.white)),S.add(ie(lt.flatMap(mt=>Array.from({length:Math.ceil((2*E-.4)/1.1)},(Ct,Lt)=>[[mt-1.5,-E+.4+Lt*1.1],[mt+1.5,-E+.4+Lt*1.1]])),.55,.085,c.white));for(const mt of lt)for(const Ct of[-1,1]){N(2.9,.6,mt,Ct*(E+.65),Me,.31);const Lt=new ft(new ni(.06,.06,2.6,8),c.metal),fe=new ft(new mc(.2,12,8),new ne({color:16753434,emissive:16746496,emissiveIntensity:.8}));Lt.position.set(mt+2.1,1.6,Ct*(E+.7)),fe.position.set(mt+2.1,3,Ct*(E+.7)),fe.name="zebra-beacon",S.add(Lt,fe)}}if(!d.underpass){const U=W1(d);S.add(ie(U.poly.map((z,j)=>[z,U.poly[(j+1)%U.poly.length]]),.2,.1,c.yellow,v.grade),ie(U.lattice,.12,.1,c.yellow,v.grade));for(const z of[...S.children])z.material===c.walk&&(S.remove(z),z.geometry.dispose());for(const z of[-1,1])for(const j of[-1,1])for(const[lt,tt]of[[b+A,xi(d,z)-1.5],[xi(d,z)+1.5,d.extent]])N(tt-lt,3.75,z*(lt+tt)/2,j*(E+1.875),c.walk,.3);const W=new wo;W.moveTo(-b,E+A),W.lineTo(b,E+A),W.lineTo(b,E+A),W.absarc(b+A,E+A,A,Math.PI,Math.PI*1.5,!1),W.lineTo(b+A,-E),W.absarc(b+A,-E-A,A,Math.PI/2,Math.PI,!1),W.lineTo(-b,-E-A),W.absarc(-b-A,-E-A,A,0,Math.PI/2,!1),W.lineTo(-b-A,E),W.absarc(-b-A,E+A,A,-Math.PI/2,0,!1),W.closePath();const V=new Tr(W,16);V.rotateX(-Math.PI/2);for(let z=0,j=V.attributes.position;z<j.count;z++)j.setY(z,.07-v.grade*j.getZ(z));const B=new ft(V,c.road);S.add(B);for(const z of[-1,1])for(const j of[-1,1]){const lt=[],tt=[];for(let Ct=0;Ct<=16;Ct++)for(const Lt of[A,A-3.75]){const fe=Ct*Math.PI/32,Ge=z*(b+A-Lt*Math.cos(fe)),me=j*(E+A-Lt*Math.sin(fe));lt.push(Ge,.3-v.grade*me,me)}for(let Ct=0;Ct<16;Ct++){const Lt=Ct*2;tt.push(Lt,Lt+2,Lt+1,Lt+1,Lt+2,Lt+3)}const rt=new _e;rt.setAttribute("position",new Nt(lt,3)),rt.setIndex(tt),rt.setAttribute("uv",new Nt(lt.flatMap((Ct,Lt)=>Lt%3===0?[Ct/5,lt[Lt+2]/5]:[]),2)),rt.computeVertexNormals();const mt=new ft(rt,new ne({map:r,side:He,roughness:.96}));mt.name="connected-corner-footpath",S.add(mt)}for(const z of[-1,1]){N(b-.15,.25,-z*b/2,z*d.stop,c.white,.09),N(.25,E-.15,z*(xi(d,z)+3),z*E/2,c.white,.09);const j=[];for(let tt=-b+.275;tt<=b-.2;tt+=1.1)j.push([[tt,z*(E+10)-1.5],[tt,z*(E+10)+1.5]]);for(let tt=-E+.275;tt<=E-.2;tt+=1.1)j.push([[z*xi(d,z)-1.5,tt],[z*xi(d,z)+1.5,tt]]);const lt=ie(j,.55,.125,c.yellow,v.grade);lt.name="Full-width yellow crossings",S.add(lt);for(const tt of[-1,1]){const rt=z*xi(d,z),mt=tt*(E+1.875),Ct=new ft(new Pn(3,3.75),c.walk);Ct.geometry.rotateX(-Math.PI/2);const Lt=Ct.geometry.attributes.position;for(let fe=0;fe<Lt.count;fe++){const Ge=Lt.getZ(fe)+mt;Lt.setY(fe,.02+.28*Math.min(1,(Math.abs(Ge)-E)/3.75)-v.grade*Ge)}Ct.geometry.computeVertexNormals(),Ct.position.set(rt,.005,mt),Ct.name="junction-wheelchair-ramp",S.add(Ct)}}}}for(const d of Ar){const v=d.s;_t(v);const S=he(v),b=new en;b.name="unsignalised-crossing-"+d.station+"-"+Math.round(v),i.add(b);for(let E=S.left+.35;E<S.right-.2;E+=1.1){const A=new ft(je(v-1.5,v+1.5,E,Math.min(E+.55,S.right),.025),c.white);b.add(A)}for(const E of[-1,1]){const A=new ft(je(v-1.45,v+1.45,E>0?S.right+.35:S.left-.95,E>0?S.right+.95:S.left-.35,.025),new ne({color:15189842}));b.add(A)}}for(const d of Ic){const v=ln(d.deckStart),S=ln(d.deckEnd),b=4.76,E=d.depth,A=U=>-E-(d.depth>2?.75*Math.max(0,1-Math.min(...d.piers.map(W=>Math.abs(ln(W)-U)))/9):0),N=new ft(Mo(v,S,[[-b,-.08],[b,-.08],[b,-.38],[2.65,-.55],[1.8,A],[-1.8,A],[-2.65,-.55],[-b,-.38]]),c.concrete);N.name=d.id+"-box-girder",N.castShadow=!0,N.receiveShadow=!0,i.add(N);for(const U of d.piers){const W=ln(U),V=_t(W),B=V.y-V.groundY+A(W)-.2,z=Math.floor(W/240);if(B<=0)continue;I(d.id+"-pier",c.concrete,V.x,V.groundY+B/2,V.z,2.5,B,2,V.heading,z);const j=new _e,lt=[];for(const[mt,Ct,Lt]of[[V.groundY+Math.max(0,B-2.7),2.5,2],[V.groundY+B,4,2.8]])for(const[fe,Ge]of[[-1,-1],[1,-1],[1,1],[-1,1]])lt.push(fe*Ct/2,mt,Ge*Lt/2);j.setAttribute("position",new Nt(lt,3)),j.setIndex([0,1,5,0,5,4,1,2,6,1,6,5,2,3,7,2,7,6,3,0,4,3,4,7,4,5,6,4,6,7]),j.computeVertexNormals();const tt=new ft(j,c.concrete);tt.position.set(V.x,0,V.z),tt.rotation.y=V.heading,tt.castShadow=!0,tt.name=d.id+"-pier-cap-"+U,i.add(tt),I("bearing",c.metal,V.x,V.y+A(W)-.1,V.z,3.4,.2,2.4,V.heading,z);const rt=new ft(new ni(.15,.15,B,8),c.metal);rt.position.set(V.x+V.lx*1.4,V.groundY+B/2,V.z+V.lz*1.4),i.add(rt)}for(const U of[d.deckStart,...d.id==="VB3"?[]:[d.deckEnd]]){const W=ln(U),V=_t(W),B=V.y-V.groundY,z=Math.floor(W/240);I(d.id+"-abutment",c.concrete,V.x,V.groundY+B/2,V.z,9.52,B,1.3,V.heading,z),I("expansion-joint",c.metal,V.x,V.y+.015,V.z,9.1,.035,.18,V.heading,z)}}for(const d of Ch){const v=_t(d.s),S=new en;S.name=d.name,S.position.set(v.x,v.y,v.z),S.rotation.y=v.heading,i.add(S);const b=(W,V,B,z,j,lt,tt)=>{const rt=new ft(new qe(W,V,B),tt);return rt.position.set(z,j,lt),rt.receiveShadow=!0,S.add(rt),rt};b(d.extent*2,.08,d.width,0,-3.25,0,new ne({color:5211527,metalness:.35,roughness:.2}));for(const W of[-1,1]){const V=he(d.s),B=V.right+3.75,z=-wn(d.s)+2.5;b(d.extent-B,3.6,.55,-(d.extent+B)/2,-1.8,W*d.width/2,c.concrete),b(d.extent-z,3.6,.55,(d.extent+z)/2,-1.8,W*d.width/2,c.concrete)}const E=he(d.s),A=E.left-3.75-4,N=E.right+3.75,U=N-A;b(U,.5,d.width+1,-(A+N)/2,-1,0,c.concrete);for(const W of[-N,-A]){for(let V=-d.width/2;V<=d.width/2;V+=d.width/3)b(.7,3.2,.5,W,-1.85,V,c.concrete);b(.75,.6,d.width+1,W,-1,0,c.concrete)}}for(const d of Ch){const v=d.s-d.width/2-3,S=d.s+d.width/2+3;i.add(new ft(je(v,S,b=>he(b).left,b=>he(b).right,.012),c.road));for(const b of[-1,1]){const E=b===1?he(d.s).right+3.6:wn(d.s)-2;for(const A of[.55,1.25])i.add(new ft(Mo(v,S,[[E-.035,A-.035],[E+.035,A-.035],[E+.035,A+.035],[E-.035,A+.035]]),c.metal));for(let A=v;A<S;A+=1.5){const N=Y(A,E);I("river-fence",c.metal,N.x,N.y+.8,N.z,.06,1.2,.06,0,Math.floor(A/240))}}}const oe=ln(3310);_t(ue.end),_t(oe),Y(oe,-Je(oe));const Ft=Zo;for(const[d,v,S]of[[0,c.road,.07],[1,c.walk,xn],[-1,c.walk,xn]]){const b=d?3.75:ue.width,E=N=>-Je(N)+d*(ue.width/2+1.875),A=new ft(je(ue.start,oe,N=>E(N)-b/2,N=>E(N)+b/2,S,!0,d?N=>N<ue.start+Ve.find(U=>U.name==="Road D6").halfWidth+Fn.R:!1),v);A.name=d?"L35 footpath":"Road L35",A.receiveShadow=!0,i.add(A)}for(const d of[-1,1])i.add(new ft(je(ue.start+Ve[1].halfWidth+11.5,oe,v=>-Je(v)+d*(ue.width/2-.18)-.06,v=>-Je(v)+d*(ue.width/2-.18)+.06,.105,!0),c.white)),i.add(new ft(qa(Ft,d*(ue.width/2-.18)-.06,d*(ue.width/2-.18)+.06,.105,0,Ft.getLength()-Fi.R-(d>0?Fi.taper:0)),c.white));for(let d=ue.start+Ve[1].halfWidth+14;d<oe;d+=7){const v=new ft(je(d,Math.min(d+3,oe),S=>-Je(S)-.05,S=>-Je(S)+.05,.1,!0),c.white);i.add(v)}for(const[d,v,S,b]of[[0,ue.width,c.road,.08],[-5.525,3.75,c.walk,.3],[5.525,3.75,c.walk,.3],[0,.12,c.white,.105]]){const E=Ft.getLength()-(S===c.walk?Fi.R+(d>0?Fi.taper:0):S===c.white?Fi.taper:0),A=new ft(qa(Ft,d-v/2,d+v/2,b,0,E),S);A.name="L35 turn beneath VB2",A.receiveShadow=!0,i.add(A)}const we=i.getObjectByName("junction-2650");if(we)for(const d of[...we.children]){if(!d.isMesh||d.material.map!==r||d.name==="junction-wheelchair-ramp")continue;d.updateMatrix();const v=d.geometry.index?d.geometry.toNonIndexed():d.geometry.clone(),S=v.attributes.position,b=[];for(let z=0;z<S.count;z++)b.push(new C().fromBufferAttribute(S,z).applyMatrix4(d.matrix));if(!b.some(z=>z.x>0&&z.z<0))continue;const E=[],A=[],N=ue.offset-ue.width/2,U=Fn.kerb+Fn.R,W=(z,j,lt)=>{const tt=[];for(let rt=0;rt<z.length;rt++){const mt=z[rt],Ct=z[(rt+1)%z.length],Lt=lt*(mt.x-j)>=0,fe=lt*(Ct.x-j)>=0;Lt&&tt.push(mt),Lt!==fe&&tt.push(mt.clone().lerp(Ct,(j-mt.x)/(Ct.x-mt.x)))}return tt};for(let z=0;z<b.length;z+=3){const j=b.slice(z,z+3),lt=j.every(tt=>tt.z<0)?[W(j,N,-1),W(j,U,1)]:[j];for(const tt of lt)for(let rt=1;rt<tt.length-1;rt++)for(const mt of[tt[0],tt[rt],tt[rt+1]])E.push(mt.x,mt.y,mt.z),A.push(mt.x/5,mt.z/5)}const V=new _e;V.setAttribute("position",new Nt(E,3)),V.setAttribute("uv",new Nt(A,2)),V.computeVertexNormals();const B=new ft(V,d.material);B.name=d.name,we.remove(d),we.add(B),v.dispose()}{const d=Ve[1],v=_t(d.s).grade,{kerb:S,R:b}=Fn,E=d.halfWidth,A=Zt([[S,-E],...as(S+b,-E-b,b,Math.PI/2,Math.PI)],.07,c.road,v),N=k(S+b,-E-b,b-3.75,b,Math.PI/2,Math.PI,.3,v);N.name="l35-kerb-return";const U=he(d.s).right,W=ue.offset-ue.width/2,V=Zt([[U+3.75,-E-b-.05],[W,-E-b-.05],[W,-E-b+2.3],[U+3.75,-E-b+2.3]],.3,c.walk,v),B=Zt([[U,-E-b-2.1],[W,-E-b-2.1],[W,-E-b],[U,-E-b]],rt=>xn(d.s-rt)+.005,c.walk,v);V.name=B.name="l35-corner-island",we&&we.add(A,N,V,B);const z=d.s+E+10,j=-Je(z),lt=[];for(let rt=j-ue.width/2+.35;rt<j+ue.width/2-.2;rt+=1.1)lt.push(je(z-1.5,z+1.5,rt,Math.min(rt+.55,j+ue.width/2),.1,!0));const tt=new ft(Us(lt),c.yellow);tt.name="L35 signalised crossing",i.add(tt,new ft(je(z+2.875,z+3.125,j-ue.width/2+.15,j,.1,!0),c.white))}for(const d of Ar.filter(v=>v.s>ue.start&&v.s<oe)){const v=d.s,S=-Je(v),b=ue.width/2,E=[];for(let U=S-b+.35;U<S+b-.2;U+=1.1)E.push(je(v-1.5,v+1.5,U,Math.min(U+.55,S+b),.1,!0));const A=new ft(Us(E),c.white);A.name="L35 zebra crossing "+d.station,i.add(A);for(const[U,W]of[[S+b+.35,S+b+.95],[S-b-.95,S-b-.35]])i.add(new ft(je(v-1.45,v+1.45,U,W,V=>xn(V)+.01,!0),Me));const N=new ft(je(v-1.5,v+1.5,S+b+3.75,-(he(v).right+3.75),xn,!0),c.walk);N.name="L35 crossing verge link",N.receiveShadow=!0,i.add(N)}const Tt=Ze[1],Wt=new ft(je(Tt.s-115,Tt.s+125,-84,-17,.31,!0),c.walk);Wt.name="Hung Shui Kiu regional plaza",Wt.receiveShadow=!0,i.add(Wt);function F(d,v,S,b=12){const E=document.createElement("canvas");E.width=1024,E.height=160;const A=E.getContext("2d");A.fillStyle="#173d35",A.fillRect(0,0,1024,160),A.fillStyle="#fff3d0",A.textAlign="center",A.font="bold 56px sans-serif",A.fillText(d,512,101);const N=new ft(new Pn(b,b/6.4),new bn({map:new ti(E),side:He}));return N.position.copy(v),N.rotation.y=S,i.add(N),N}const R=Array.from({length:Math.ceil(mn.length/2)+1},(d,v)=>mn.at(v*2)),et=(d,v,S,b)=>[[d+v/2,b],[d-v/2,b],[d-v/2,S],[d+v/2,S]];function pt(d,v,S){const b=[],E=[];for(const U of S){for(let W=0;W<U.length;W++){const V=b.length/3;for(const B of R)for(const[z,j]of[U[W],U[(W+1)%U.length]])b.push(B.x+B.lx*z,B.y+j,B.z+B.lz*z);for(let B=0;B<R.length-1;B++){const z=V+B*2;E.push(z,z+1,z+2,z+1,z+3,z+2)}}for(const[W,V]of[[R[0],!0],[R.at(-1),!1]]){const B=b.length/3;for(const[z,j]of U)b.push(W.x+W.lx*z,W.y+j,W.z+W.lz*z);for(let z of Gs.triangulateShape(U.map(([j,lt])=>new gt(j,lt)),[])){const[j,lt,tt]=z.map(rt=>U[rt]);(lt[0]-j[0])*(tt[1]-j[1])-(lt[1]-j[1])*(tt[0]-j[0])>0===V&&(z=[z[0],z[2],z[1]]),E.push(...z.map(rt=>rt+B))}}}const A=new _e;A.setAttribute("position",new Nt(b,3)),A.setIndex(E),A.computeVertexNormals();const N=new ft(A,v);N.name=d,N.castShadow=N.receiveShadow=!0,i.add(N)}pt("MTR-viaduct",c.concrete,[[[5.5,0],[-5.5,0],[-5.5,-.35],[-3.3,-.55],[-2.5,-1.3],[2.5,-1.3],[3.3,-.55],[5.5,-.35]],et(-5.2,.3,0,1.1),et(5.2,.3,0,1.1)]),pt("MTR-rail",c.metal,[-2.85,-1.42,1.42,2.85].map(d=>et(d,.075,0,.15)));const xt=_t(cn[0].s);for(let d=12;d<mn.length;d+=32){const v=mn.at(d),S=pn(v.x,v.z),b=_t(S),E=(v.x-b.x)*b.lx+(v.z-b.z)*b.lz,A=Math.floor(S/240),N=Math.hypot(v.x-b.x,v.z-b.z)>99?-5:b.groundY-.3,U=v.y-1.3-N;Fo(v.x,v.z)>0||E>wn(S)-4&&E<he(S).right+6||Math.abs((v.x-xt.x)*xt.tx+(v.z-xt.z)*xt.tz)<cn[0].halfWidth+7||(I("MTR-pier",c.concrete,v.x,N+U/2,v.z,2.4,U,2.4,v.heading,A),I("MTR-pier-head",c.concrete,v.x,v.y-1.6,v.z,4.6,.6,3,v.heading,A))}const ot={fixture:[],led:[],glow:[],post:[]},Vt=(d,v,S,b,E,A,N,U,W=0)=>{v.updateMatrixWorld(),d.push(new qe(S,b,E).applyMatrix4(new Qt().makeRotationX(W).setPosition(A,N,U)).applyMatrix4(v.matrixWorld))},Et=(d,v,S,b,E,A,N=!1)=>{d.updateMatrixWorld();const U=new Pn(v,S);N||U.rotateX(-Math.PI/2),ot.glow.push(U.translate(b,E,A).applyMatrix4(d.matrixWorld))},Dt=(d,v,S,b)=>{d.updateMatrixWorld();const E=d.localToWorld(new C(v,S,b));_.push({s:pn(E.x,E.z),x:E.x,y:E.y,z:E.z})},se=a1(Tt.s),vt=se.heading,bt=new en;bt.name="Hung Shui Kiu Station",bt.position.set(se.x,_t(Tt.s).groundY,se.z),bt.rotation.y=vt,i.add(bt);const ce=new ne({color:6325648,metalness:.35,roughness:.3,transparent:!0,opacity:.65}),Xt=se.y-bt.position.y;for(const[d,v,S,b,E,A,N]of[[12.4,2.15,220,-10.3,Xt+.075,0,c.concrete],[12.4,2.15,220,10.3,Xt+.075,0,c.concrete],[36,.7,224,0,Xt+7,0,c.metal],[.3,6,218,-16,Xt+3,0,ce],[.3,6,218,16,Xt+3,0,ce],[25,5,42,-22,2.5,0,ce]]){const U=new ft(new qe(d,v,S),N);U.position.set(b,E,A),U.castShadow=!0,bt.add(U)}for(let d=-100;d<=100;d+=20)for(const v of[-14,14]){const S=new ft(new qe(.8,Xt+7,.8),c.concrete);S.position.set(v,(Xt+7)/2,d),bt.add(S)}const Bt=F("洪水橋站  HUNG SHUI KIU",new C(se.x,se.y+4,se.z),vt-Math.PI/2,27);Bt.position.add(new C(-18,0,0).applyAxisAngle(new C(0,1,0),vt));for(const d of[-13,-7.5,7.5,13])Vt(ot.fixture,bt,.3,.06,212,d,Xt+6.62,0);for(const d of[-4.2,4.2])Vt(ot.led,bt,.1,.02,216,d,Xt+1.16,0);for(const d of[-18.05,18.05])Vt(ot.led,bt,.1,.2,224,d,Xt+7,0);Vt(ot.led,bt,24,.1,41,-22,4.85,0);for(let d=-102;d<=102;d+=12)for(const v of[-10.3,10.3])Et(bt,11,14,v,Xt+1.18,d);for(const d of[-14,0,14])Dt(bt,-22,4.6,d);Dt(bt,-38,4,0),Et(Bt,33,6.5,0,0,-.15,!0);for(const d of[-80,0,80]){const v=Y(Tt.s+d,-42),S=Math.floor((Tt.s+d)/240);I("plaza-bench",c.metal,v.x,v.y+.75,v.z,3,.15,.8,_t(Tt.s).heading,S),_.push({s:Tt.s+d,x:v.x,y:v.y+6,z:v.z}),I("plaza-lamp",c.metal,v.x,v.y+3,v.z,.1,6,.1,0,S),I("plaza-light",c.lamp,v.x,v.y+6,v.z,.6,.2,.6,0,S)}const Kt=_t(Pe.s),ae=new en;ae.name="SGMTS depot",i.add(ae);const te=Kt.y,X=Math.floor(Pe.s/240);{const v=tn.map(lt=>lt[0]),S=tn.map(lt=>lt[1]),b=Math.min(...v),E=Math.min(...S),A=Math.ceil((Math.max(...v)-b)/2)+1,N=Math.ceil((Math.max(...S)-E)/2)+1,U=[],W=[],V=[],B=[];for(let lt=0;lt<N;lt++)for(let tt=0;tt<A;tt++){const rt=b+tt*2,mt=E+lt*2;U.push(md(rt,mt)),W.push(rt,te+.05,mt),V.push(rt/6,mt/6)}for(let lt=0;lt<N-1;lt++)for(let tt=0;tt<A-1;tt++){const rt=lt*A+tt,mt=rt+1,Ct=rt+A,Lt=Ct+1;U[rt]&&U[mt]&&U[Ct]&&U[Lt]&&B.push(rt,Ct,mt,mt,Ct,Lt)}const z=new _e;z.setAttribute("position",new Nt(W,3)),z.setAttribute("uv",new Nt(V,2)),z.setIndex(B),z.computeVertexNormals();const j=new ft(z,c.road);j.name="Depot yard",j.receiveShadow=!0,ae.add(j)}const Mt=(()=>{const d=document.createElement("canvas");d.width=d.height=256;const v=d.getContext("2d");v.fillStyle="#dfe3e4",v.fillRect(0,0,256,256),v.fillStyle="#c9cfd2";for(let b=0;b<256;b+=8)v.fillRect(b,0,2,256);v.fillStyle="#8fa4b2",v.fillRect(0,26,256,34),v.fillStyle="#6f7f8a";for(let b=0;b<256;b+=32)v.fillRect(b,26,3,34);const S=new ti(d);return S.wrapS=S.wrapT=Mi,S.colorSpace=nn,new ne({map:S,roughness:.7})})(),ct=new ne({color:2043722,roughness:.35,metalness:.4}),ut=Oc(),yt=(d,v,S,b,E,A,N,U=te)=>{const W=new ft(new qe(b-S,N,A-E),v);return W.name=d,W.position.set((S+b)/2,U+N/2,(E+A)/2),W.castShadow=W.receiveShadow=!0,ae.add(W),W},Jt=(d,v)=>{const S=d.geometry,b=S.attributes.position,E=S.attributes.normal,A=S.attributes.uv;for(let N=0;N<b.count;N++){const U=Math.abs(E.getX(N))>.5?b.getZ(N)*d.scale.z:b.getX(N)*d.scale.x;A.setXY(N,(U+(S.parameters.width+S.parameters.depth))/v[0],(b.getY(N)+S.parameters.height/2)/v[1])}A.needsUpdate=!0};for(const d of Il){const v=()=>{for(let S=d.x0+3;S<d.x1-6;S+=6.2)for(let b=d.z0+3;b<d.z1-4;b+=4.4)I("depot-pv-panel",ct,S+2.8,te+d.h+.35,b+2,5.6,.12,3.8,0,X)};if(d.kind==="office"){const S=yt(d.name,ut.civic,d.x0,d.x1,d.z0,d.z1,d.h);Jt(S,[12,13.5]),yt("Office roof plant",c.concrete,d.x1-18,d.x1-6,d.z0+5,d.z0+12,2.2,te+d.h)}else if(d.kind==="hall"||d.kind==="workshop"){const S=yt(d.name,Mt,d.x0,d.x1,d.z0,d.z1,d.h);Jt(S,[16,d.h]),v();for(const b of d.doors||[]){const E=d.face==="e"?d.x1:d.x0,A=d.face==="e"?1:-1;yt("Depot roller door",c.metal,Math.min(E,E+A*.3),Math.max(E,E+A*.3),b-2.6,b+2.6,Math.min(6.2,d.h-1.2)),yt("Door frame",c.white,Math.min(E,E+A*.4),Math.max(E,E+A*.4),b-2.9,b+2.9,.35,te+Math.min(6.2,d.h-1.2))}}else if(d.kind==="shed"){yt(d.name+" roof",Mt,d.x0,d.x1,d.z0,d.z1,.7,te+d.h),v();const S=(E,A,N,U)=>{const W=yt(d.name+" wall",Mt,E,A,N,U,d.h);Jt(W,[16,d.h])};S(d.x0,d.x1,d.z0,d.z0+.4),S(d.x0,d.x1,d.z1-.4,d.z1),d.open==="w"?S(d.x1-.4,d.x1,d.z0,d.z1):S(d.x0,d.x0+.4,d.z0,d.z1);const b=d.open==="w"?d.x0:d.x1;for(let E=d.z0+1;E<=d.z1;E+=9.4)I("stabling-column",c.galvanised,b,te+d.h/2,E,.5,d.h,.5,0,X);for(let E=d.x0+8;E<d.x1;E+=16)for(let A=d.z0+6;A<d.z1;A+=12)I("stabling-light",c.lamp,E,te+d.h-.2,A,.4,.12,6,0,X)}else yt(d.name,c.concrete,d.x0,d.x1,d.z0,d.z1,d.h)}{const d=Il.find(v=>v.kind==="office");F("SGMTS 車廠  DEPOT",new C(d.x0-.3,te+d.h-2.4,(d.z0+d.z1)/2),-Math.PI/2,26)}for(const d of nc)for(const v of[-d.w/2,d.w/2])I("cv-stall-line",c.white,d.x+v,te+.09,d.z,.12,.02,d.d,0,X);{const d=document.createElement("canvas");d.width=d.height=64;const v=d.getContext("2d");v.strokeStyle="#c3cacd",v.lineWidth=3,v.beginPath(),v.moveTo(0,32),v.lineTo(32,0),v.lineTo(64,32),v.lineTo(32,64),v.closePath(),v.stroke();const S=new ti(d);S.wrapS=S.wrapT=Mi,S.colorSpace=nn;const b=new ne({map:S,alphaTest:.5,side:He,metalness:.5,roughness:.5}),E=[];for(const N of A1)for(let U=1;U<N.length;U++){const[W,V]=N[U-1],[B,z]=N[U],j=Math.hypot(B-W,z-V),lt=Math.atan2(-(z-V),B-W),tt=(W+B)/2,rt=(V+z)/2,mt=new Pn(j,2.4),Ct=mt.attributes.uv;for(let Lt=0;Lt<Ct.count;Lt++)Ct.setXY(Lt,Ct.getX(Lt)*j/.12,Ct.getY(Lt)*2.4/.12);mt.rotateY(lt).translate(tt,te+1.2,rt),E.push(mt);for(let Lt=0;Lt<=j;Lt+=3)I("chainlink-post",c.galvanised,W+(B-W)*Lt/j,te+1.25,V+(z-V)*Lt/j,.08,2.5,.08,0,X);I("chainlink-rail",c.galvanised,tt,te+2.42,rt,j,.05,.05,lt,X)}const A=new ft(Us(E),b);A.name="Vehicle park chain-link fence",ae.add(A)}{const d=new qe(2.4,2.9,2.3),v=new qe(2.45,3.1,1),S=new ni(.5,.5,.35,10).rotateZ(Math.PI/2),b=[14212576,3108787,12729134,15198698,3902026,15774761].map(W=>new ne({color:W,roughness:.6})),E=new ne({color:1776411,roughness:.9}),A=new ne({color:1911347,roughness:.2,metalness:.3});let N=7;const U=()=>(N=N*16807%2147483647)/2147483647;for(const W of nc){if(U()<.35)continue;const V=Math.min(W.d-1.5,U()<.5?9:14),B=new en,z=U()<.5?1:-1,j=b[Math.floor(U()*b.length)],lt=new ft(d,j);lt.position.set(0,1.95,z*(V/2-1.15));const tt=new ft(new qe(2.2,1,.05),A);tt.position.set(0,2.6,z*(V/2-.02));const rt=new ft(v,b[(b.indexOf(j)+3)%b.length]);rt.scale.z=V-2.7,rt.position.set(0,2.05,-z*1.25),B.add(lt,tt,rt);for(const mt of[z*(V/2-1.4),-z*(V/2-1.6),-z*(V/2-2.9)])for(const Ct of[-1.05,1.05]){const Lt=new ft(S,E);Lt.position.set(Ct,.5,mt),B.add(Lt)}B.traverse(mt=>{mt.isMesh&&(mt.castShadow=!0,mt.receiveShadow=!0)}),B.position.set(W.x,te+.05,W.z),B.name="parked goods vehicle",ae.add(B)}}const Se=c.grass.clone();Se.side=He;const Ke=(d,v,S)=>{const b=[],E=[];d.forEach((U,W)=>{const V=S(U),B=(V+5)*1.5;if(b.push(U.x,V-.02,U.z,U.x+v[W].x*B,-5,U.z+v[W].z*B),W){const z=W*2;E.push(z-2,z,z-1,z-1,z,z+1)}});const A=new _e;A.setAttribute("position",new Nt(b,3)),A.setAttribute("uv",new Nt(b.filter((U,W)=>W%3!==1).map(U=>U/5),2)),A.setIndex(E),A.computeVertexNormals();const N=new ft(A,Se);N.name="Depot embankment",N.receiveShadow=!0,ae.add(N)};{const d=[...tn,tn[0]].map(([b,E])=>({x:b,z:E})),v=tn.reduce((b,E,A)=>{const N=tn[(A+1)%tn.length];return b+E[0]*N[1]-N[0]*E[1]},0)>0?1:-1,S=d.map((b,E)=>{const A=d[Math.max(0,E-1)],N=d[Math.min(d.length-1,E+1)],U=N.x-A.x,W=N.z-A.z,V=Math.hypot(U,W)||1;return{x:-W/V*v,z:U/V*v}});Ke(d,S,()=>te)}{const d=[];for(let A=1;A<ds.length;A++){const N=ds[A-1],U=ds[A],W=Math.max(1,Math.ceil(Math.hypot(U.x-N.x,U.z-N.z)/2));for(let V=A>1?1:0;V<=W;V++){const B=V/W;d.push({x:N.x+(U.x-N.x)*B,z:N.z+(U.z-N.z)*B,y:N.y+(U.y-N.y)*B})}}const v=d.map((A,N)=>{if(!N||N===d.length-1)return A;let U=0,W=0,V=0;for(let B=Math.max(0,N-4);B<=Math.min(d.length-1,N+4);B++)U+=d[B].x,W+=d[B].z,V++;return{...A,x:U/V,z:W/V}}),S=v.map((A,N)=>{const U=v[Math.max(0,N-1)],W=v[Math.min(v.length-1,N+1)],V=W.x-U.x,B=W.z-U.z,z=Math.hypot(V,B)||1;return{...A,tx:V/z,tz:B/z,lx:B/z,lz:-V/z}}),b=(A,N,U,W,V,B=0)=>{const z=[],j=[],lt=[];let tt=0;S.forEach((Ct,Lt)=>{Lt&&(tt+=Math.hypot(Ct.x-S[Lt-1].x,Ct.z-S[Lt-1].z));for(const fe of[A,N])z.push(Ct.x+Ct.lx*fe,Ct.y+U,Ct.z+Ct.lz*fe),j.push(fe/4,tt/4);if(Lt&&(!B||Math.floor(tt/B)%2===0)){const fe=Lt*2;lt.push(fe-2,fe,fe-1,fe-1,fe,fe+1)}});const rt=new _e;rt.setAttribute("position",new Nt(z,3)),rt.setAttribute("uv",new Nt(j,2)),rt.setIndex(lt),rt.computeVertexNormals();const mt=new ft(rt,W);mt.name=V,mt.receiveShadow=!0,ae.add(mt)},E=Rr/2;b(-E,E,.04,c.road,"Depot service road");for(const A of[-E+.3,E-.3])b(A-.07,A+.07,.07,c.white,"Service road edge line");b(-.07,.07,.07,c.white,"Service road centre line",3);for(const A of[-1,1])Ke(S.map(N=>({x:N.x+N.lx*A*E,z:N.z+N.lz*A*E})),S.map(N=>({x:N.lx*A,z:N.lz*A})),N=>No(N.x,N.z,E+.5)??te);for(let A=8;A<S.length;A+=15){const N=S[A];vs(new C(N.x,N.y,N.z),new C(N.tx,0,N.tz),Rr,"Depot service road",A%30<15?1:-1,10)}}for(const d of gu){const v=(d.front.x+d.back.x)/2,S=d.length,b=3.2;for(const E of[-b/2,b/2])I("depot-bay-line",c.white,v,te+.09,d.front.z+E,S,.02,.12,0,X);I("depot-bay-line",c.white,d.back.x,te+.09,d.front.z,.12,.02,b,0,X),I("depot-stop-bar",c.yellow,d.front.x-d.dir.x*.3,te+.09,d.front.z,.45,.02,b,0,X)}const an=new wo([new gt(-.35,-2),new gt(.35,-2),new gt(.35,.2),new gt(.9,.2),new gt(0,2),new gt(-.9,.2),new gt(-.35,.2)]),Ee=new Tr(an).rotateX(-Math.PI/2),qn=(d,v)=>{for(let S=10;S<d.getLength()-6;S+=v){const b=S/d.getLength(),E=d.getPointAt(b),A=d.getTangentAt(b);T("depot-arrow",Ee,c.white,new C(E.x,Math.max(E.y,te)+.1,E.z),new C(1,1,1),new Ce(0,Math.atan2(A.x,-A.z)+Math.PI,0),X)}};qn(Qn,30);for(const d of[1,-1])qn(_o(Qn.getPointAt(1),d),30);const Kn=[Qn,_o(Qn.getPointAt(1),1),_o(Qn.getPointAt(1),-1)].flatMap(d=>d.getSpacedPoints(Math.ceil(d.getLength()/2))),ea=(d,v)=>md(d,v)&&!Il.some(S=>d>S.x0-3&&d<S.x1+3&&v>S.z0-3&&v<S.z1+3)&&!nc.some(S=>Math.abs(d-S.x)<S.w/2+1&&Math.abs(v-S.z)<S.d/2+1)&&!Kn.some(S=>Math.hypot(S.x-d,S.z-v)<6)&&No(d,v,Rr/2+3)==null;{const d=tn.map(S=>S[0]),v=tn.map(S=>S[1]);for(let S=Math.min(...d)+10;S<Math.max(...d);S+=36)for(let b=Math.min(...v)+10;b<Math.max(...v);b+=36){let E=null;for(const[A,N]of[[0,0],[6,0],[-6,0],[0,6],[0,-6],[9,9],[-9,-9]])if(ea(S+A,b+N)){E={x:S+A,z:b+N};break}E&&!Nl.some(A=>Math.hypot(A.x-E.x,A.z-E.z)<24)&&Nl.push(E)}}for(const d of Nl){I("depot-mast",c.galvanised,d.x,te+xo/2,d.z,.35,xo,.35,0,X),I("depot-mast-frame",c.galvanised,d.x,te+xo,d.z,2.4,.15,2.4,0,X);for(const[v,S]of[[1,0],[-1,0],[0,1],[0,-1]])I("depot-floodlight",c.lamp,d.x+v*1.1,te+xo-.25,d.z+S*1.1,S?1.2:.35,.3,v?1.2:.35,0,X);_.push({s:Pe.s,x:d.x,y:te+xo-.3,z:d.z,kind:"mast"})}for(let d=0;d<tn.length;d++){const[v,S]=tn[d],[b,E]=tn[(d+1)%tn.length],A=Math.hypot(b-v,E-S),N=Math.atan2(-(E-S),b-v);for(let U=1.5;U<A;U+=3){const W=v+(b-v)*U/A,V=S+(E-S)*U/A,B=(W-Kt.x)*Kt.lx+(V-Kt.z)*Kt.lz,z=(W-Kt.x)*Kt.tx+(V-Kt.z)*Kt.tz;!Tp(W,V)||No(W,V,Rr/2+2)!=null||Math.abs(z)<22&&B<70||Math.hypot(W-_t(pn(W,V)).x,V-_t(pn(W,V)).z)<24||(I("depot-fence",c.galvanised,W,te+1.2,V,3,2.4,.06,N,X),I("depot-fence-post",c.galvanised,W-(b-v)/A*1.5,te+1.25,V-(E-S)/A*1.5,.12,2.5,.12,0,X))}}for(let d=1;d<$n.length;d++){const v=$n[d-1],S=$n[d],b=Math.hypot(S.x-v.x,S.z-v.z),E=Math.atan2(v.x-S.x,v.z-S.z);for(const[A,N,U,W]of[[0,18,c.road,.025],[-10.875,3.75,c.walk,.3],[10.875,3.75,c.walk,.3],...d%2?[[0,.1,c.white,.09]]:[]]){const V=new ft(new qe(N,.1,b+.3),U);V.name="Road D1 connecting alignment",V.position.set((v.x+S.x)/2+Math.cos(E)*A,(v.y+S.y)/2+W,(v.z+S.z)/2-Math.sin(E)*A),V.rotation.set(Math.atan2(S.y-v.y,b),E,0,"YXZ"),V.receiveShadow=!0,i.add(V)}}for(const d of Ar){const v=wn(d.s),S=new ft(je(d.s-1.8,d.s+1.8,v-2,v+2,.33,!0),c.yellow);S.name="Cycle pedestrian crossing",i.add(S);for(const b of[-4,4]){const E=Y(d.s+b,v+2.5);I("cycle-crossing-sign",c.teal,E.x,E.y+2,E.z,.45,.6,.08,_t(d.s).heading,Math.floor(d.s/240)),I("cycle-sign-pole",c.metal,E.x,E.y+1,E.z,.06,2,.06,0,Math.floor(d.s/240))}}for(const d of[...Ve,...cn])for(let v=-135;v<=135;v+=35){if(Math.abs(v)<30)continue;const S=_t(d.s),b=Y(d.s,v);b.x+=S.tx*(d.halfWidth+4.1),b.z+=S.tz*(d.halfWidth+4.1);const E=Math.floor(d.s/240);I("side-road-lamp",c.galvanised,b.x,b.y+6,b.z,.16,12,.16,0,E),I("side-road-fixture",c.lamp,b.x,b.y+12,b.z,.5,.12,1,0,E),_.push({s:d.s,x:b.x,y:b.y+12,z:b.z,kind:"distributor",height:12})}for(let d=ue.start+35;d<ue.end-45;d+=35){const v=Y(d,-Je(d)-7.7),S=Math.floor(d/240);I("L35-lamp",c.galvanised,v.x,v.y+5,v.z,.16,10,.16,0,S),I("L35-light",c.lamp,v.x,v.y+10,v.z,.5,.12,1,0,S),_.push({s:d,x:v.x,y:v.y+10,z:v.z,kind:"L35",height:10})}for(const d of[Ve.find(v=>v.c===2650),cn.find(v=>v.c===3395)]){const v=Y(d.s-25,-Je(d.s)-6),S=Math.floor(d.s/240);I("L35-direction-post",c.metal,v.x,v.y+1.5,v.z,.12,3,.12,0,S),v.y+=3,F("L35  →  "+d.name,v,_t(d.s).heading,6)}function ui(d,v,S,b,E=4.5){const A=new en;A.name=d,A.position.copy(v),A.rotation.y=S,i.add(A);const N=(U,W,V,B,z,j,lt)=>{const tt=new ft(new qe(U,W,V),lt);return tt.position.set(B,z,j),tt.castShadow=tt.receiveShadow=!0,A.add(tt),tt};N(E,.45,b,0,6.15,0,c.concrete);for(const U of[-1,1]){const W=N(.9,5.9,1.2,0,2.95,U*(b/2-.6),c.concrete);W.name="Cycle bridge abutment pier",N(E,.35,1.4,0,5.78,U*(b/2-.6),c.concrete)}N(E+.8,.22,b+1,0,9,0,c.teal);for(let U=-b/2;U<=b/2;U+=4)for(const W of[-1,1])N(.12,2.6,.12,W*E/2,7.7,U,c.metal),N(.07,1,.09,W*E/2,6.9,U,c.metal);for(const U of[-1,1]){N(.09,1.1,b,U*E/2,6.95,0,ce);const W=U*(b/2+2),V=E/2+2.2;N(3.6,9,4.2,V,4.5,W,c.concrete),N(.08,2.5,2.2,V-1.81,1.25,W,ce),N(.08,2.5,2.2,V-1.81,7.55,W,ce),N(6.3,.25,4.2,E/2+3.15,6.25,W,c.concrete);for(let z=0;z<36;z++)N(2.4,(z+1)*6.3/36,.42,E/2+6.5,(z+1)*6.3/72,U*(b/2+4+(35-z)*.42),c.concrete);const B=A.localToWorld(new C(0,8.7,U*b/3));_.push({s:pn(B.x,B.z),x:B.x,y:B.y,z:B.z}),N(E-.6,.08,1,0,8.8,U*b/3,c.lamp),Vt(ot.fixture,A,2.6,.08,.6,V,2.72,W+U*2.45),Dt(A,V,3,W+U*4);for(const z of[V-1.86,V+1.86])Vt(ot.led,A,.06,8.4,.06,z,4.5,W+U*2.12);for(const z of[E/2+5.32,E/2+7.68])Vt(ot.led,A,.05,.05,15.9,z,4.25,U*(b/2+11.35),U*Math.atan2(6.13,14.7));Dt(A,E/2+6.5,3,U*(b/2+20))}return A}for(const d of xc){const v=_t(d.s),S=Y(d.s,wn(d.s)),b=d.halfWidth*2+16,E=ui("Cycle footbridge "+d.name,S,v.heading,b);for(const A of[-1,1]){const N=d.s+A*(d.halfWidth+8),U=d.s+A*(d.halfWidth+8+Gr),W=Math.min(N,U),V=Math.max(N,U),B=me=>_t(me).groundY+zs(me)-_t(me).y-.025,z=new ft(Mo(W,V,[[-2.15,me=>B(me)-.42],[2.15,me=>B(me)-.42],[2.15,B],[-2.15,B]],mi),c.concrete);z.name="Cycle bridge approach ramp",z.castShadow=z.receiveShadow=!0,i.add(z);for(let me=N+A*3;A*(U-me)>4;me+=A*16){const Ue=mi(me),sn=zs(me)-.445;if(sn<.65)continue;const vn=Math.floor(me/240);I("cycle-ramp-pier",c.concrete,Ue.x,Ue.groundY+sn/2,Ue.z,.8,sn,1.2,Ue.heading,vn),I("cycle-ramp-cap",c.concrete,Ue.x,Ue.groundY+sn-.16,Ue.z,3.9,.32,1.3,Ue.heading,vn)}for(const me of[-2.12,2.12]){const Ue=ic(W,V,me-.035,me+.035,1.15),sn=new ft(Ue,c.galvanised);sn.name="Cycle ramp handrail",i.add(sn)}for(let me=W;me<=V;me+=5){const Ue=mi(me),sn=zs(me);for(const vn of[-2.12,2.12])I("cycle-ramp-post",c.galvanised,Ue.x+Ue.lx*vn,Ue.groundY+sn+.57,Ue.z+Ue.lz*vn,.06,1.14,.06,Ue.heading,Math.floor(me/240))}const j=A*(b/2+24),lt=d.s+j,tt=_t(lt),rt=-(he(lt).right+3.75),mt=new C(tt.x+tt.lx*rt,tt.groundY+.3,tt.z+tt.lz*rt),Ct=E.localToWorld(new C(9,.3,-j)),Lt=new Ac(mt,Ct),fe=new ft(qa(Lt,-1.5,1.5,.015),c.walk);fe.name="Footbridge pedestrian approach",i.add(fe);const Ge=new ft(new qe(7,.15,26),c.walk);Ge.position.set(6.7,.225,A*(b/2+14)),E.add(Ge)}}const $r=Y(Tt.s+40,-48),fi=new en;fi.name="HSWRL plaza fountain",fi.position.copy($r),i.add(fi);const Qr=new ft(new ni(11,11,1,64),c.concrete);Qr.position.y=.65,fi.add(Qr);const Ki=new ne({color:5618130,metalness:.35,roughness:.12,transparent:!0,opacity:.8,emissive:873067,emissiveIntensity:.4}),to=new ft(new ni(10.3,10.3,.08,64),Ki);to.position.y=1.2,fi.add(to);for(let d=0;d<16;d++){const v=d*Math.PI/8,S=new ru(new C(Math.cos(v)*8,1.3,Math.sin(v)*8),new C(Math.cos(v)*4,8,Math.sin(v)*4),new C(0,1.3,0)),b=new ft(new lu(S,24,.07,5,!1),Ki);fi.add(b)}const _s=new ft(new ni(.15,.5,6,12),Ki);_s.position.y=4,fi.add(_s);for(const d of[-55,90]){const v=Y(Tt.s+d,-48),S=new en;S.name="HSWRL underground entrance",S.position.copy(v),S.rotation.y=_t(Tt.s).heading,i.add(S);for(const[E,A,N,U,W,V,B]of[[9,.4,12,0,4.2,0,c.teal],[.35,4,12,-4.3,2,0,ce],[.35,4,12,4.3,2,0,ce],[8,3,.3,0,1.5,5.5,c.metal]]){const z=new ft(new qe(E,A,N),B);z.position.set(U,W,V),S.add(z)}for(let E=0;E<12;E++){const A=new ft(new qe(7,.16,.5),c.concrete);A.position.set(0,.32-E*.12,-5+E*.5),S.add(A)}const b=F("HSWRL  高速鐵路  ↓",v.clone().add(new C(0,3.5,0)),_t(Tt.s).heading+Math.PI,8);b.position.addScaledVector(new C(_t(Tt.s).tx,0,_t(Tt.s).tz),6),Vt(ot.fixture,S,7.6,.06,10.6,0,3.97,0),Vt(ot.led,S,7,1.4,.06,0,2.1,5.32),Et(S,7.5,7,0,.36,-2);for(const E of[-9,0])Dt(S,0,3.9,E);Et(b,10,2.6,0,0,-.08,!0),Vt(ot.fixture,b,7.4,.08,.3,0,.78,.18)}const na=Y(Tt.s+115,-28);ui("HSWRL plaza pedestrian bridge",na,_t(Tt.s+115).heading+Math.PI/2,104,7);for(let d=-100;d<=115;d+=25)for(const v of[-22,-72]){const S=Y(Tt.s+d,v),b=Math.floor(Tt.s/240);I("plaza-light-pole",c.metal,S.x,S.y+3.5,S.z,.12,7,.12,0,b),I("plaza-globe",c.lamp,S.x,S.y+7,S.z,.7,.25,.7,0,b),_.push({s:Tt.s+d,x:S.x,y:S.y+7,z:S.z})}function ji(d,v,S){p.push({ax:d.x,az:d.z,bx:v.x,bz:v.z,y:d.y,top:1.2});const b=d.distanceTo(v),E=Math.atan2(d.x-v.x,d.z-v.z),A=d.clone().add(v).multiplyScalar(.5);for(const N of[.18,1.05])T("pedestrian-steel-rail",y.box,c.galvanised,new C(A.x,A.y+N,A.z),new C(.045,.045,b),new Ce(Math.atan2(v.y-d.y,Math.hypot(v.x-d.x,v.z-d.z)),E,0,"YXZ"),S);for(let N=0;N<=b;N+=.22){const U=d.clone().lerp(v,N/b);I("pedestrian-steel-bar",c.galvanised,U.x,U.y+.61,U.z,.025,.88,.025,E,S)}I("pedestrian-steel-post",c.galvanised,d.x,d.y+.6,d.z,.065,1.2,.065,E,S)}for(const d of[...Ve,...cn])for(const v of[-1,1])for(let S=-d.extent;S<d.extent-2;S+=2.2){if(Math.abs(S)<42)continue;const b=_t(d.s),E=Y(d.s,S),A=Y(d.s,S+2.2);for(const N of[E,A])N.x+=b.tx*v*(d.halfWidth+.25),N.z+=b.tz*v*(d.halfWidth+.25),N.y+=.3;ji(E,A,Math.floor(d.s/240))}for(let d=ue.start+30;d<oe-4;d+=2.2)for(const v of[-1,1]){if(Os(d,d+2.2))continue;const S=Y(d,-Je(d)+v*(ue.width/2+.25)),b=Y(d+2.2,-Je(d+2.2)+v*(ue.width/2+.25));S.y+=.3,b.y+=.3,ji(S,b,Math.floor(d/240))}for(let d=35;d<Ie-3;d+=2.2)for(const v of[-1,1]){if(!X1(d,d+2.2,v))continue;const S=Y(d,v*(he(d).right+.25)),b=Y(d+2.2,v*(he(d+2.2).right+.25));S.y+=xn(d),b.y+=xn(d+2.2),ji(S,b,Math.floor(d/240))}for(const d of Ze)for(const v of d.platforms)for(const S of[-1,1]){if(d.id==="A1"&&S===-1)continue;const{a:b,b:E,end:A}=Oo(d,v,S),N=b[0].clone().lerp(b[1],.18/d.width),U=E[0].clone().lerp(E[1],.25/3.75),W=S===1?Math.ceil((A-35)/2.2)*2.2+35:Math.floor((A-35)/2.2)*2.2+35,V=Y(W,v.side*(he(W).right+.25));V.y+=xn(W);for(let B=0;B<5;B++)ji(N.clone().lerp(U,B/5),N.clone().lerp(U,(B+1)/5),Math.floor(d.s/240));ji(U,V,Math.floor(d.s/240))}function vs(d,v,S,b,E=1,A=10){const N=pn(d.x,d.z),U=Math.min(h.length-1,Math.floor(N/240)),W=-v.z,V=v.x,B=d.x+W*E*(S/2+1),z=d.z+V*E*(S/2+1);I("connecting-road-pole",c.galvanised,B,d.y+A/2,z,.15,A,.15,0,U),I("connecting-road-lamp",c.lamp,B-W*E*1.4,d.y+A,z-V*E*1.4,.55,.13,1,Math.atan2(-v.x,-v.z),U),I("connecting-road-arm",c.galvanised,B-W*E*.7,d.y+A-.12,z-V*E*.7,1.6,.09,.09,Math.atan2(-v.x,-v.z),U),_.push({s:N,x:B-W*E*1.4,y:d.y+A,z:z-V*E*1.4,kind:b,axis:{tx:v.x,tz:v.z,lx:W,lz:V}})}for(const d of[...Ve,...cn]){const v=_t(d.s);if(d.underpass)for(const S of[-24,-12,0,12,24])for(const b of[-1,1]){const E=v.x+v.lx*S+v.tx*b*d.halfWidth*.55,A=v.z+v.lz*S+v.tz*b*d.halfWidth*.55,N=Math.min(v.groundY+5.5,v.y-1.2);I("underbridge-LED",c.lamp,E,N,A,.35,.12,2,v.heading+Math.PI/2,Math.floor(d.s/240)),_.push({s:d.s,x:E,y:N,z:A,kind:"underbridge",axis:{tx:v.lx,tz:v.lz,lx:v.tx,lz:v.tz}})}for(let S=-d.extent+8;S<d.extent;S+=26)for(const b of[-1,1])Math.abs(S)<42||vs(new C(v.x+v.lx*S,d.underpass?v.groundY:v.y-v.grade*b*(d.halfWidth+1),v.z+v.lz*S),new C(v.lx,0,v.lz),d.halfWidth*2,d.name,b)}let Ms=0;for(let d=1;d<$n.length;d++){const v=new C($n[d-1].x,$n[d-1].y,$n[d-1].z),S=new C($n[d].x,$n[d].y,$n[d].z),b=v.distanceTo(S),E=S.clone().sub(v).normalize();for(let A=Ms;A<b;A+=26)for(const N of[-1,1])vs(v.clone().lerp(S,A/b),E,18,"D1",N);Ms=(Ms-b)%26,Ms<0&&(Ms+=26)}for(const[d,v,S]of[[Zo,ue.width,"L35 bend"],[Qn,7,"Depot approach"]])for(let b=12;b<(d===Qn?d.getLength()-js.getLength()+6:d.getLength()-12);b+=24){const E=b/d.getLength();vs(d.getPointAt(E),d.getTangentAt(E),v,S,-1,7)}for(let d=0;d<Oe.length;d+=20){const v=Oe.sample(d);vs(new C(v.x,v.y,v.z),new C(v.tx,0,v.tz),Oe.outerRadius-Oe.innerRadius,"Terminal loop",-1,7)}const ys=new ne({color:4016197,metalness:.65,roughness:.85}),L=new ne({color:1207628,roughness:.65}),q=new ne({color:13990185,roughness:.8}),$=new ne({color:8750971,roughness:1}),Q=(d,v)=>{const S=document.createElement("canvas");S.width=256,S.height=256;const b=S.getContext("2d");b.fillStyle=v,b.fillRect(0,0,256,256),b.fillStyle="#f2eee0",b.textAlign="center",b.font="bold 44px sans-serif",d.forEach((A,N)=>b.fillText(A,128,85+N*65));const E=new ti(S);return E.colorSpace=nn,new bn({map:E,side:He})},K=Q(["郵政","POST"],"#126d4c"),St=Q(["廢屑","LITTER"],"#d57929"),It=Q(["行人 →","FOOTPATH"],"#18664e"),kt=new Pn(1,1);for(let d=35;d<Ie-25;d+=18)for(const v of[-1,1]){if(zo(d)||Os(d-5,d+5)||Ze.some(V=>Math.abs(V.s-d)<V.footprintLength/2+12)||v===1&&vo(d))continue;const S=_t(d),b=he(d).right,E=Math.floor(d/240),A=S.groundY+xn(d),N=S.heading,U=Y(d,v*(b+.28));I("kerb-drain-frame",ys,U.x,A+.004,U.z,.4,.025,.82,N,E);for(let V=0;V<8;V++){const B=new C(0,0,(V-3.5)*.09).applyAxisAngle(new C(0,1,0),N).add(U);I("drain-grille",c.galvanised,B.x,A+.022,B.z,.32,.018,.025,N,E)}const W=Math.floor((d-35)/18);if(W%3===0){const V=Y(d+4,v*(he(d+4).right+1.2)),B=_t(d+4).groundY+xn(d+4);I("paving-repair",$,V.x,B+.006,V.z,1.1,.016,1.35,N,E),I("manhole-rim",c.galvanised,V.x,B+.018,V.z,.76,.022,1.03,N,E),I("manhole-cover",ys,V.x,B+.032,V.z,.69,.018,.96,N,E);for(let z=-3;z<=3;z++){const j=new C(z*.085,0,0).applyAxisAngle(new C(0,1,0),N).add(V);I("manhole-tread",c.galvanised,j.x,B+.044,j.z,.018,.008,.82,N,E)}}if(W%4===0){const V=Y(d,v*(b+3.22));V.y=A,T("HK-orange-bin",y.cyl,q,V.clone().add(new C(0,.45,0)),new C(.29,.9,.29),new Ce,E),T("bin-rim",y.cyl,ys,V.clone().add(new C(0,.92,0)),new C(.31,.13,.31),new Ce,E);const B=V.clone().add(new C(0,.5,.295).applyAxisAngle(new C(0,1,0),N));T("bin-label",kt,St,B,new C(.25,.28,1),new Ce(0,N,0),E)}if(v===1&&W%12===0){const V=Y(d+2,b+3.2);V.y=_t(d+2).groundY+xn(d+2),T("HK-pillar-box",y.cyl,L,V.clone().add(new C(0,.58,0)),new C(.25,1.16,.25),new Ce,E),T("pillar-box-cap",y.cyl,L,V.clone().add(new C(0,1.17,0)),new C(.29,.12,.29),new Ce,E);const B=V.clone().add(new C(0,.68,.256).applyAxisAngle(new C(0,1,0),N));T("post-label",kt,K,B,new C(.28,.32,1),new Ce(0,N,0),E);const z=V.clone().add(new C(0,.95,.255).applyAxisAngle(new C(0,1,0),N));I("letter-slot",ys,z.x,z.y,z.z,.23,.045,.025,N,E)}if(W%8===2){const V=Y(d,v*(b+3.3));I("pedestrian-wayfinding-post",c.galvanised,V.x,A+1.25,V.z,.06,2.5,.06,N,E),T("HK-wayfinding-sign",kt,It,new C(V.x,A+2.15,V.z),new C(.8,.65,1),new Ce(0,N,0),E)}if(!S.elevated){const V=d-5,B=d+5,z=v*(b+3.95);for(const lt of[-.21,.21]){const tt=new ft(je(V,B,z+lt-.055,z+lt+.055,.06,!0),c.concrete);tt.name="Open verge drainage channel",h[E].add(tt)}const j=new ft(je(V,B,z-.15,z+.15,-.06,!0),ys);j.name="Drainage channel invert",h[E].add(j)}}t.updateMatrixWorld(!0);const Ht=["grass","meadow","fern","shrub","flowering"].map(d=>{const v=[];t.getObjectByName("vegetation_"+d).traverse(S=>{var b;S.isMesh&&v.push({geometry:S.geometry.clone().applyMatrix4(S.matrixWorld),material:Pl(S.material,g),low:(b=t.getObjectByName(S.name+"_lod"))==null?void 0:b.geometry.clone().applyMatrix4(S.matrixWorld)})});for(const S of v)S.geometry.userData.low=S.low;return{kind:d,parts:v}});for(const d of x){if(f.some(S=>Math.hypot(S.x-d.x,S.z-d.z)<S.radius+3))continue;const v=Ht[3];for(let S=0;S<6;S++){const b=S*Math.PI/3,E=new C(d.x+Math.cos(b)*1.05,d.y-.15,d.z+Math.sin(b)*1.05);for(const A of v.parts)T("tree-shrub-"+A.material.name+"-cell"+Math.floor(d.s/40),A.geometry,A.material,E,new C(.85,.9,.85),new Ce(0,b,0),Math.floor(d.s/240))}}for(let d=8;d<Ie-8;d+=1.7)for(const v of[-1,1])for(let S=0;S<3;S++){if(cn.some(z=>Math.abs(z.s-d)<z.halfWidth+35)||Os(d-9,d+9)||Fo(Y(d,0).x,Y(d,0).z)>0)continue;const b=v===-1?-wn(d)+2:Math.max(he(d).right+3.75,...Ze.filter(z=>Math.abs(z.s-d)<z.footprintLength/2+8).map(z=>7.05+z.width)),E=v*(b+1+S*.8),A=Y(d+(Yt()-.5)*.6,E),N=Ht[S===0?Math.floor(Yt()*2):2+Math.floor(Yt()*3)],U=1.3+Yt()*.45;if(v===-1){const z=mi(d),j=-3-S*.8;A.x=z.x+z.lx*j,A.z=z.z+z.lz*j}const W=pn(A.x,A.z),V=_t(W);if(!Sr(A.x,A.z,.3,!0)||Math.hypot(A.x-V.x,A.z-V.z)<he(W).right+4.2||Oh(A.x,A.z)<2.7||Fo(A.x,A.z)>0||$n.some(z=>Math.hypot(z.x-A.x,z.z-A.z)<14.5)||f.some(z=>Math.hypot(z.x-A.x,z.z-A.z)<z.radius+.5)||mn.distance(A.x,A.z)<8||v===1&&Math.abs(d-Pe.s)<Pe.opening/2+12)continue;A.y-=.18,m.push({x:A.x,z:A.z,kind:N.kind,s:d,lat:E,heightScale:U});const B=new Ce(0,Yt()*Math.PI*2,0);N.parts.forEach((z,j)=>T("vegetation-"+N.kind+"-"+j+"-cell"+Math.floor(d/40),z.geometry,z.material,A,new C(U*.75,U,U*.75),B,Math.floor(d/240)))}for(const d of Ze)for(const v of d.platforms)for(const S of[-1,1]){if(d.id==="A1"&&S===-1)continue;const{a:b,b:E}=Oo(d,v,S);for(const[A,N]of[b,E]){const U=N.clone().addScaledVector(N.clone().sub(A).setY(0).normalize(),.35);ot.post.push(new qe(.12,4,.12).translate(U.x,U.y+2,U.z)),ot.fixture.push(new qe(.34,.12,.34).translate(U.x,U.y+4.02,U.z)),_.push({s:pn(U.x,U.z),x:U.x,y:U.y+4,z:U.z})}}const ee=(d,v)=>Ze.some(S=>Math.abs(d-S.s)<S.footprintLength/2+14&&Math.abs(v)<S.platformLateral+S.width+3);for(let d=6;d<Ie-6;d+=1.3)for(const v of[-1,1]){const S=he(d).right+3.75+.3,b=Ve.some(A=>Math.abs(A.s-d)<A.halfWidth+40),E=v===-1?Math.min(45,-(wn(d)+2)-.35):b?S+14:0;for(let A=S;A<=Math.max(S,E);A+=A-S<6?1.1:2.3){const N=Y(d+(Yt()-.5)*.8,v*(A+(Yt()-.5)*.1)),U=pn(N.x,N.z),W=_t(U),V=A-S>6,B=Ht[V&&Yt()<.35?2+Math.floor(Yt()*3):Math.floor(Yt()*2)],z=B.kind==="grass"||B.kind==="meadow";if(ee(U,v*A)||Os(d-3,d+3)||!Sr(N.x,N.z,0,!0)||Math.hypot(N.x-W.x,N.z-W.z)<he(U).right+(z?4:4.2)||Oh(N.x,N.z)<(z?2.35:2.7)||f.some(tt=>Math.hypot(tt.x-N.x,tt.z-N.z)<tt.radius+.5))continue;const j=1.3+Yt()*.45;N.y=Bo(N.x,N.z,U)-.18,m.push({x:N.x,z:N.z,kind:B.kind,s:d,lat:v*A,heightScale:j,verge:!0});const lt=new Ce(0,Yt()*Math.PI*2,0);B.parts.forEach((tt,rt)=>T("vegetation-"+B.kind+"-"+rt+"-cell"+Math.floor(d/40),tt.geometry,tt.material,N,new C(j*.75,j,j*.75),lt,Math.floor(d/240)))}}for(let d=6;d<Ie-6;d+=.6){const v=he(d).right+3.75,S=-(wn(d)+2),b=S-v;if(b<.45||b>2.4)continue;const E=-(v+b/2),A=Y(d,E),N=pn(A.x,A.z);if(ee(N,E)||Os(d-3,d+3)||!Sr(A.x,A.z,0,!0)||f.some(z=>Math.hypot(z.x-A.x,z.z-A.z)<z.radius+.5))continue;const U=Ht[Yt()<.7?0:1],W=1.3+Yt()*.4,V=Math.min(1,b/1.1);A.y=Bo(A.x,A.z,N)-.15,m.push({x:A.x,z:A.z,kind:U.kind,s:d,lat:E,heightScale:W,verge:!0,strip:!0});const B=new Ce(0,_t(d).heading+(Yt()-.5)*.4,0);U.parts.forEach((z,j)=>T("vegetation-"+U.kind+"-"+j+"-cell"+Math.floor(d/40),z.geometry,z.material,A,new C(W*.75*V,W,W*.75),B,Math.floor(d/240)))}const $t=new Map,jt=(d,v)=>Math.floor(d/50)+","+Math.floor(v/50);for(const d of _){const v={...d,axis:d.axis||_t(d.s)};for(let S=-1;S<=1;S++)for(let b=-1;b<=1;b++){const E=Math.floor(d.x/50)+S+","+(Math.floor(d.z/50)+b);$t.has(E)||$t.set(E,[]),$t.get(E).push(v)}}for(const[d,v]of Object.entries(u)){if(/^(trunk|foliage|tree-shrub)-/.test(d)&&(v.matrices=v.matrices.filter(b=>f.every(E=>Math.hypot(b.elements[12]-E.x,b.elements[14]-E.z)>E.radius+2))),!v.matrices.length)continue;const S=new tu(v.geometry,v.material,v.matrices.length);if(v.matrices.forEach((b,E)=>S.setMatrixAt(E,b)),S.name=d,S.receiveShadow=!0,S.castShadow=!/^(foliage|vegetation|tree-shrub)-/.test(d),/^(trunk|foliage|vegetation|tree-shrub)-/.test(d)){const b=/^(trunk|foliage)-/.test(d),E=new C,A=new Float32Array(v.matrices.length);v.matrices.forEach((W,V)=>{E.setFromMatrixPosition(W);const B=$t.get(jt(E.x,E.z))||[];b?(E.y=Math.min(E.y,Bo(E.x,E.z,pn(E.x,E.z))+1),A[V]=Math.max(q1(E,B),Bl(E,B))):A[V]=Bl(E,B)});const N=new uc(A,1),U=($s=v.geometry.userData.low)==null?void 0:$s.clone();U==null||U.setAttribute("nightGlow",N),v.geometry=v.geometry.clone(),v.geometry.setAttribute("nightGlow",N),v.geometry.userData={low:U},S.geometry=v.geometry}v.geometry.userData.low&&(S.userData.full=v.geometry,S.userData.low=v.geometry.userData.low,S.userData.s=Number(d.match(/cell(\d+)/)[1])*40+20,M.push(S)),(ia=h[v.chunk])==null||ia.add(S)}const be=new pc(Oe.innerRadius,Oe.outerRadius,96);be.rotateX(-Math.PI/2);const Fe=new ft(be,c.road);Fe.position.set(Oe.center.x,Oe.y+.02,Oe.center.z),Fe.receiveShadow=!0,i.add(Fe);const Be=new ft(new ni(Oe.innerRadius-.2,Oe.innerRadius-.2,.35,64),c.grass);Be.position.set(Oe.center.x,Oe.y+.15,Oe.center.z),Be.receiveShadow=!0,i.add(Be);const Tn=Ze[0],le=_t(Tn.s),Gt=new en;Gt.name="A1-connected-throat",Gt.position.set(le.x,le.y,le.z),Gt.rotation.y=le.heading,i.add(Gt);const ke=new wo;ke.moveTo(-7.05,25),ke.lineTo(-15.37,44.8),ke.lineTo(-14.28,47.55),ke.lineTo(14.28,47.55),ke.lineTo(15.37,44.8),ke.lineTo(7.05,25),ke.closePath();const Te=new Tr(ke);Te.rotateX(Math.PI/2);const Dn=new ft(Te,new ne({map:s,roughness:.91,side:He}));Dn.position.y=.012,Gt.add(Dn);const di=new ft(new pc(Oe.outerRadius,Oe.outerRadius+3.75,96,1,Math.atan2(-le.tz,le.tx)+Math.PI/3,Math.PI*4/3),c.walk);di.geometry.rotateX(-Math.PI/2),di.position.set(Oe.center.x,Oe.y+.3,Oe.center.z),i.add(di);for(const d of[-1,1]){const v=new _e,S=[];for(const[E,A,N]of[[15.37,44.8,.3],[20.37,44.8,.3],[20.568,49.675,.3],[17.321,51.55,.3]])S.push(le.x+le.lx*E*d-le.tx*A,le.y+N,le.z+le.lz*E*d-le.tz*A);v.setAttribute("position",new Nt(S,3)),v.setIndex(d===1?[0,2,1,0,3,2]:[0,1,2,0,2,3]),v.computeVertexNormals();const b=new ft(v,new ne({map:r,roughness:.96,side:He}));b.name="A1-loop-footpath-link-"+d,i.add(b)}const En=new ne({color:6649436,roughness:1});for(let d=0;d<26;d++){let v=_t(Ie*d/25),S=new ft(new mc(1,18,12),En);S.position.set(v.x-450-Yt()*280,v.groundY-25,v.z),S.scale.set(210+Yt()*160,80+Yt()*130,260),Sr(S.position.x,S.position.z,Math.max(S.scale.x,S.scale.z)+20)&&i.add(S)}new Zs(Array.from({length:97},(d,v)=>{const S=Oe.sample(Oe.length*v/96);return new C(S.x,S.y,S.z)}),!1,"centripetal");for(const d of[R1,Qn,_o(Qn.getPointAt(1),1),_o(Qn.getPointAt(1),-1)]){const v=[];for(let b=0;b<d.getLength();b+=1.5)for(const E of[-.24,.24])v.push(qa(d,E-.085,E+.085,.105,b,Math.min(b+.55,d.getLength())));const S=new ft(Us(v),c.white);v.forEach(b=>b.dispose()),S.name="ART branch guidance",i.add(S)}const Zi=document.createElement("canvas");Zi.width=Zi.height=64;{const d=Zi.getContext("2d"),v=d.createRadialGradient(32,32,0,32,32,32);v.addColorStop(0,"rgba(255,228,178,.95)"),v.addColorStop(1,"rgba(255,228,178,0)"),d.fillStyle=v,d.fillRect(0,0,64,64)}const Qe=[[ot.fixture,c.lamp,!0],[ot.post,c.metal,!0],[ot.led,new bn({color:16773848}),!1],[ot.glow,new bn({map:new ti(Zi),transparent:!0,opacity:.42,depthWrite:!1,blending:sc,side:He}),!1]].map(([d,v,S])=>{const b=new ft(Us(d),v);return b.name="Station night lighting",b.visible=S,b.userData.nightOnly=!S,b.castShadow=S&&v===c.metal,i.add(b),b}),pi=new p1(4,8);i.updateMatrixWorld(!0),i.traverse(d=>{var b;if(!d.isMesh||d.isInstancedMesh||!((b=d.material)!=null&&b.map)||![s,...l].includes(d.material.map))return;const v=d.geometry.attributes.position,S=[];for(let E=0;E<v.count;E++){const A=new C().fromBufferAttribute(v,E).applyMatrix4(d.matrixWorld);S.push(A.x/3.2,A.z/3.2)}d.geometry.setAttribute("uv",new Nt(S,2))});const Ss=[];i.updateMatrixWorld(!0),i.traverse(d=>{var v;d.isMesh&&!d.isInstancedMesh&&([s,...l].includes((v=d.material)==null?void 0:v.map)||d===it||d.name==="Elevated cycle connection"||d.material===c.grass)&&Ss.push(d)});for(const d of Ss){const v=pi.modify(d.geometry),S=v.attributes.position,b=[],E=new C,A=d.material.color;v.computeBoundingBox();const N=v.boundingBox.clone().applyMatrix4(d.matrixWorld).expandByScalar(55),U=_.filter(B=>N.containsPoint(new C(B.x,B.y,B.z))).map(B=>({...B,axis:B.axis||_t(B.s)}));for(let B=0;B<S.count;B++){E.fromBufferAttribute(S,B).applyMatrix4(d.matrixWorld);const z=Bl(E,U)*1.05;b.push(z*A.r,z*A.g*.94,z*A.b*.83)}v.setAttribute("color",new Nt(b,3));const W=new bn({map:d.material.map,vertexColors:!0,transparent:!0,opacity:.85,blending:sc,depthWrite:!1,side:d.material.side,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),V=new ft(v,W);V.name="Fixed night illumination",V.visible=!1,d.add(V),d.userData.nightOverlay=V}i.traverse(d=>{d.isMesh&&!d.isSkinnedMesh&&(d.updateMatrix(),d.matrixAutoUpdate=!1)});const Nn=[c.road,c.walk,c.walkGrey,c.walkBuff].filter(Boolean).map(d=>({m:d,rough:d.roughness,color:d.color.clone()}));return{groups:h,plots:f,fences:p,trees:x,lampPositions:_,plantings:m,windTime:g,weather(d){for(const{m:v,rough:S,color:b}of Nn)v.roughness=d?S*.38:S,v.color.copy(b).multiplyScalar(d?.72:1)},setNight(d){bp.value=d?1:0,Ss.forEach(v=>v.userData.nightOverlay.visible=d),Qe.forEach(v=>{v.userData.nightOnly&&(v.visible=d)}),ce.emissive.set(d?16761466:0),ce.emissiveIntensity=d?.5:0},nightMaterials:[c.lamp,...P],markingMaterial:c.white,materials:c,update(d,v=0){g.value=v;for(const S of M){const b=Math.abs(S.userData.s-d);S.visible=b<550;const E=b<65?S.userData.full:S.userData.low;S.geometry!==E&&(S.geometry=E,S.boundingSphere=null)}for(const S of h)S.visible=Math.abs(S.userData.s-d)<850},weather(d){c.road.roughness=d?.32:.91,c.road.color.set(d?10332332:16777215)}}}function qa(i,t,e,n=0,s=0,r=i.getLength()){const o=[],a=[],l=[],c=Math.max(1,Math.ceil((r-s)/.6)),h=i.getLength();for(let f=0;f<=c;f++){const p=s+(r-s)*f/c,x=p/h,_=i.getPointAt(x),m=i.getTangentAt(x);for(const g of[t,e])o.push(_.x+m.z*g,_.y+n,_.z-m.x*g),a.push(g/5,p/5);if(f<c){const g=f*2;l.push(g,g+2,g+1,g+1,g+2,g+3)}}const u=new _e;return u.setAttribute("position",new Nt(o,3)),u.setAttribute("uv",new Nt(a,2)),u.setIndex(l),u.computeVertexNormals(),u}export{Tr as $,xs as A,_e as B,qt as C,uy as D,Wr as E,ip as F,en as G,rS as H,wS as I,Sy as J,AS as K,nu as L,J1 as M,bS as N,ES as O,Ds as P,yi as Q,$o as R,cS as S,$1 as T,MS as U,C as V,Q1 as W,G1 as X,yS as Y,vS as Z,wo as _,gt as a,Pe as a$,He as a0,ry as a1,nn as a2,pS as a3,Sr as a4,mS as a5,cs as a6,iS as a7,Nt as a8,ne as a9,gn as aA,lS as aB,hi as aC,kn as aD,Fh as aE,Xi as aF,nS as aG,gm as aH,Bp as aI,np as aJ,vM as aK,ap as aL,ly as aM,R1 as aN,xM as aO,Ve as aP,Oe as aQ,r1 as aR,_o as aS,l1 as aT,ii as aU,wn as aV,zs as aW,Qn as aX,uS as aY,dS as aZ,mi as a_,qe as aa,mn as ab,Us as ac,Qt as ad,sc as ae,ay as af,ni as ag,Jh as ah,ms as ai,mg as aj,Ys as ak,Jo as al,us as am,oS as an,ge as ao,Yn as ap,rf as aq,fp as ar,Bn as as,Jd as at,ps as au,hS as av,xn as aw,Bo as ax,Fo as ay,Ie as az,jm as b,c1 as b0,Ih as b1,_S as b2,ue as b3,Je as b4,xi as b5,SS as b6,xS as b7,gS as b8,TS as b9,cn as ba,xc as bb,Pp as bc,Ar as bd,ou as be,fS as bf,Lo as bg,tS as c,Un as d,de as e,eu as f,m1 as g,sS as h,Ze as i,eS as j,rM as k,ti as l,ft as m,Pn as n,bn as o,pn as p,ki as q,w1 as r,_t as s,U1 as t,Lp as u,Rh as v,he as w,Xn as x,mc as y,aS as z};
