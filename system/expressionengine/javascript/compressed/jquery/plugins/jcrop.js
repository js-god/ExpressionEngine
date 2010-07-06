/**
 * jquery.Jcrop.js v0.9.8
 * jQuery Image Cropping Plugin
 * @author Kelly Hallman <khallman@gmail.com>
 * Copyright (c) 2008-2009 Kelly Hallman - released under MIT License {{{
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.

 * }}}
 */
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/* }}} */
/*{{{*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*}}}*/
/*{{{*/
/* Insert draggable elements {{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*}}}*/
/*{{{*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/* {{{ */
/* }}} */
/*}}}*/
/*{{{*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*}}}*/
/*{{{*/
/*{{{*/
/*}}}*/
/*}}}*/

(function(p){p.Jcrop=function(C,D){function o(a){return""+parseInt(a)+"px"}function Q(a){a=p(a).offset();return[a.left,a.top]}function J(a){return[a.pageX-X[0],a.pageY-X[1]]}function na(a,g){return function(k){if(d.aspectRatio)switch(a){case "e":k[1]=g.y+1;break;case "w":k[1]=g.y+1;break;case "n":k[0]=g.x+1;break;case "s":k[0]=g.x+1;break}else switch(a){case "e":k[1]=g.y2;break;case "w":k[1]=g.y2;break;case "n":k[0]=g.x2;break;case "s":k[0]=g.x2;break}t.setCurrent(k);u.update()}}function oa(a){var g=
a;Z.watchKeys();return function(k){t.moveOffset([k[0]-g[0],k[1]-g[1]]);g=k;u.update()}}function ea(a){switch(a){case "n":return"sw";case "s":return"nw";case "e":return"nw";case "w":return"ne";case "ne":return"sw";case "nw":return"se";case "se":return"nw";case "sw":return"ne"}}function fa(a){return function(g){if(d.disabled)return false;if(a=="move"&&!d.allowMove)return false;R=true;var k=J(g);X=Q(z);H.setCursor(a=="move"?a:a+"-resize");if(a=="move")H.activateHandlers(oa(k),$);else{k=t.getFixed();
var m=ea(a),c=t.getCorner(ea(m));t.setPressed(t.getCorner(m));t.setCurrent(c);H.activateHandlers(na(a,k),$)}g.stopPropagation();g.preventDefault();return false}}function aa(a){return{x:parseInt(a.x*E),y:parseInt(a.y*G),x2:parseInt(a.x2*E),y2:parseInt(a.y2*G),w:parseInt(a.w*E),h:parseInt(a.h*G)}}function $(){var a=t.getFixed();if(a.w>d.minSelect[0]&&a.h>d.minSelect[1]){u.enableHandles();u.done()}else u.release();H.setCursor(d.allowSelect?"crosshair":"default")}function pa(a){t.setCurrent(a);u.update()}
function ga(){var a=p("<div></div>").addClass(d.baseClass+"-tracker");p.browser.msie&&a.css({opacity:0,backgroundColor:"white"});return a}function ha(a){ia([a[0]/E,a[1]/G,a[2]/E,a[3]/G])}function ia(a){t.setPressed([a[0],a[1]]);t.setCurrent([a[2],a[3]]);u.update()}function ja(a){if(typeof a!="object")a={};d=p.extend(d,a);if(typeof d.onChange!=="function")d.onChange=function(){};if(typeof d.onSelect!=="function")d.onSelect=function(){}}function ba(a){d.allowResize?a?u.enableOnly():u.enableHandles():
u.disableHandles();H.setCursor(d.allowSelect?"crosshair":"default");u.setCursor(d.allowMove?"move":"default");ca.css("backgroundColor",d.bgColor);if("setSelect"in d){ha(D.setSelect);u.done();delete d.setSelect}if("trueSize"in d){E=d.trueSize[0]/y;G=d.trueSize[1]/x}S=d.maxSize[0]||0;T=d.maxSize[1]||0;U=d.minSize[0]||0;V=d.minSize[1]||0;if("outerImage"in d){z.attr("src",d.outerImage);delete d.outerImage}u.refresh()}C=C;D=D;if(typeof C!=="object")C=p(C)[0];if(typeof D!=="object")D={};if(!("trackDocument"in
D)){D.trackDocument=p.browser.msie?false:true;if(p.browser.msie&&p.browser.version.split(".")[0]=="8")D.trackDocument=true}if(!("keySupport"in D))D.keySupport=p.browser.msie?false:true;var d={trackDocument:false,baseClass:"jcrop",addClass:null,bgColor:"black",bgOpacity:0.6,borderOpacity:0.4,handleOpacity:0.5,handlePad:5,handleSize:9,handleOffset:5,edgeMargin:14,aspectRatio:0,keySupport:true,cornerHandles:true,sideHandles:true,drawBorders:true,dragEdges:true,boxWidth:0,boxHeight:0,boundary:8,animationDelay:20,
swingSpeed:3,allowSelect:true,allowMove:true,allowResize:true,minSelect:[0,0],maxSize:[0,0],minSize:[0,0],onChange:function(){},onSelect:function(){}};ja(D);var K=p(C),z=K.clone().removeAttr("id").css({position:"absolute"});z.width(K.width());z.height(K.height());K.after(z).hide();(function(a,g,k){var m=a.width(),c=a.height();if(m>g&&g>0){m=g;c=g/a.width()*a.height()}if(c>k&&k>0){c=k;m=k/a.height()*a.width()}E=a.width()/m;G=a.height()/c;a.width(m).height(c)})(z,d.boxWidth,d.boxHeight);var y=z.width(),
x=z.height(),ca=p("<div />").width(y).height(x).addClass(d.baseClass+"-holder").css({position:"relative",backgroundColor:d.bgColor}).insertAfter(K).append(z);d.addClass&&ca.addClass(d.addClass);var ka=p("<img />").attr("src",z.attr("src")).css("position","absolute").width(y).height(x),da=p("<div />").width(""+parseInt(100)+"%").height(""+parseInt(100)+"%").css({zIndex:310,position:"absolute",overflow:"hidden"}).append(ka),P=p("<div />").width(""+parseInt(100)+"%").height(""+parseInt(100)+"%").css("zIndex",
320),Y=p("<div />").css({position:"absolute",zIndex:300}).insertBefore(z).append(da,P),L=d.boundary,W=ga().width(y+L*2).height(x+L*2).css({position:"absolute",top:o(-L),left:o(-L),zIndex:290}).mousedown(function(a){if(d.disabled)return false;if(!d.allowSelect)return false;R=true;X=Q(z);u.disableHandles();if("crosshair"!=la){H.setCursor("crosshair");la="crosshair"}var g=J(a);t.setPressed(g);H.activateHandlers(pa,$);Z.watchKeys();u.update();a.stopPropagation();a.preventDefault();return false}),S,T,
U,V,E,G,X=Q(z),R,la,ma,qa,t=function(){function a(){if(!d.aspectRatio){var b=r-c,l=s-e;if(S&&Math.abs(b)>S)r=b>0?c+S:c-S;if(T&&Math.abs(l)>T)s=l>0?e+T:e-T;if(V&&Math.abs(l)<V)s=l>0?e+V:e-V;if(U&&Math.abs(b)<U)r=b>0?c+U:c-U;if(c<0){r-=c;c-=c}if(e<0){s-=e;e-=e}if(r<0){c-=r;r-=r}if(s<0){e-=s;s-=s}if(r>y){b=r-y;c-=b;r-=b}if(s>x){b=s-x;e-=b;s-=b}if(c>y){b=c-x;s-=b;e-=b}if(e>x){b=e-x;s-=b;e-=b}return m(k(c,e,r,s))}b=d.aspectRatio;l=d.minSize[0]/E;var v=d.maxSize[0]/E,B=r-c,q=s-e,n=Math.abs(B),f=Math.abs(q),
M=n/f;if(v==0)v=y*10;if(M<b){n=s;w=f*b;f=B<0?c-w:w+c;if(f<0){f=0;h=Math.abs((f-c)/b);n=q<0?e-h:h+e}else if(f>y){f=y;h=Math.abs((f-c)/b);n=q<0?e-h:h+e}}else{f=r;h=n/b;n=q<0?e-h:e+h;if(n<0){n=0;w=Math.abs((n-e)*b);f=B<0?c-w:w+c}else if(n>x){n=x;w=Math.abs(n-e)*b;f=B<0?c-w:w+c}}if(f>c){if(f-c<l)f=c+l;else if(f-c>v)f=c+v;n=n>e?e+(f-c)/b:e-(f-c)/b}else if(f<c){if(c-f<l)f=c-l;else if(c-f>v)f=c-v;n=n>e?e+(c-f)/b:e-(c-f)/b}if(f<0){c-=f;f=0}else if(f>y){c-=f-y;f=y}if(n<0){e-=n;n=0}else if(n>x){e-=n-x;n=x}return last=
m(k(c,e,f,n))}function g(b){if(b[0]<0)b[0]=0;if(b[1]<0)b[1]=0;if(b[0]>y)b[0]=y;if(b[1]>x)b[1]=x;return[b[0],b[1]]}function k(b,l,v,B){var q=b,n=v,f=l,M=B;if(v<b){q=v;n=b}if(B<l){f=B;M=l}return[Math.round(q),Math.round(f),Math.round(n),Math.round(M)]}function m(b){return{x:b[0],y:b[1],x2:b[2],y2:b[3],w:b[2]-b[0],h:b[3]-b[1]}}var c=0,e=0,r=0,s=0,N,I;return{flipCoords:k,setPressed:function(b){b=g(b);r=c=b[0];s=e=b[1]},setCurrent:function(b){b=g(b);N=b[0]-r;I=b[1]-s;r=b[0];s=b[1]},getOffset:function(){return[N,
I]},moveOffset:function(b){var l=b[0];b=b[1];if(0>c+l)l-=l+c;if(0>e+b)b-=b+e;if(x<s+b)b+=x-(s+b);if(y<r+l)l+=y-(r+l);c+=l;r+=l;e+=b;s+=b},getCorner:function(b){var l=a();switch(b){case "ne":return[l.x2,l.y];case "nw":return[l.x,l.y];case "se":return[l.x2,l.y2];case "sw":return[l.x,l.y2]}},getFixed:a}}(),u=function(){function a(j){j=p("<div />").css({position:"absolute",opacity:d.borderOpacity}).addClass(d.baseClass+"-"+j);da.append(j);return j}function g(j,A){var F=p("<div />").mousedown(fa(j)).css({cursor:j+
"-resize",position:"absolute",zIndex:A});P.append(F);return F}function k(j){var A=d.handleSize,F=f,O=A;A=A;switch(j){case "n":case "s":A=""+parseInt(100)+"%";break;case "e":case "w":O=""+parseInt(100)+"%";break}return g(j,v++).width(A).height(O).css({top:o(-F+1),left:o(-F+1)})}function m(j){for(i in j)q[j[i]]=g(j[i],v++).css({top:o(-f+1),left:o(-f+1),opacity:d.handleOpacity}).addClass(d.baseClass+"-handle")}function c(j){var A=Math.round(j.h/2-f),F=Math.round(j.w/2-f);west=-f+1;var O=j.w-f;j=j.h-
f;"e"in q&&q.e.css({top:o(A),left:o(O)})&&q.w.css({top:o(A)})&&q.s.css({top:o(j),left:o(F)})&&q.n.css({left:o(F)});"ne"in q&&q.ne.css({left:o(O)})&&q.se.css({top:o(j),left:o(O)})&&q.sw.css({top:o(j)});"b"in q&&q.b.css({top:o(j)})&&q.r.css({left:o(O)})}function e(){var j=t.getFixed();t.setPressed([j.x,j.y]);t.setCurrent([j.x2,j.y2]);r()}function r(){if(l)return s()}function s(){var j=t.getFixed(),A=j.h;Y.width(j.w).height(A);A=j.x;var F=j.y;ka.css({top:o(-F),left:o(-A)});Y.css({top:o(F),left:o(A)});
d.drawBorders&&B.right.css({left:o(j.w-1)})&&B.bottom.css({top:o(j.h-1)});n&&c(j);if(!l){Y.show();z.css("opacity",d.bgOpacity);l=true}d.onChange(aa(j))}function N(){n=true;if(d.allowResize){c(t.getFixed());P.show();return true}}function I(){n=false;P.hide()}function b(j){(ma=j)?I():N()}var l,v=370,B={},q={},n=false,f=d.handleOffset;if(d.drawBorders)B={top:a("hline").css("top",p.browser.msie?o(-1):o(0)),bottom:a("hline"),left:a("vline"),right:a("vline")};if(d.dragEdges){q.t=k("n");q.b=k("s");q.r=k("e");
q.l=k("w")}d.sideHandles&&m(["n","s","e","w"]);d.cornerHandles&&m(["sw","nw","ne","se"]);var M=ga().mousedown(fa("move")).css({cursor:"move",position:"absolute",zIndex:360});da.append(M);I();return{updateVisible:r,update:s,release:function(){I();Y.hide();z.css("opacity",1);l=false},refresh:e,setCursor:function(j){M.css("cursor",j)},enableHandles:N,enableOnly:function(){n=true},showHandles:function(){if(n){c(t.getFixed());P.show()}},disableHandles:I,animMode:b,done:function(){b(false);e()}}}(),H=function(){function a(e){k(J(e))}
function g(e){e.preventDefault();e.stopPropagation();if(R){R=false;m(J(e));d.onSelect(aa(t.getFixed()));W.css({zIndex:290});c&&p(document).unbind("mousemove",a).unbind("mouseup",g);k=function(){};m=function(){}}return false}var k=function(){},m=function(){},c=d.trackDocument;c||W.mousemove(a).mouseup(g).mouseout(g);z.before(W);return{activateHandlers:function(e,r){R=true;k=e;m=r;W.css({zIndex:450});c&&p(document).mousemove(a).mouseup(g);return false},setCursor:function(e){W.css("cursor",e)}}}(),Z=
function(){function a(m,c,e){if(d.allowMove){t.moveOffset([c,e]);u.updateVisible()}m.preventDefault();m.stopPropagation()}var g=p('<input type="radio" />').css({position:"absolute",left:"-30px"}).keypress(function(m){if(m.ctrlKey)return true;var c=(qa=m.shiftKey?true:false)?10:1;switch(m.keyCode){case 37:a(m,-c,0);break;case 39:a(m,c,0);break;case 38:a(m,0,-c);break;case 40:a(m,0,c);break;case 27:u.release();break;case 9:return true}return nothing(m)}).blur(function(){g.hide()}),k=p("<div />").css({position:"absolute",
overflow:"hidden"}).append(g);d.keySupport&&k.insertBefore(z);return{watchKeys:function(){if(d.keySupport){g.show();g.focus()}}}}();P.hide();ba(true);L={animateTo:function(a){var g=a[2]/E,k=a[3]/G;if(!ma){a=t.flipCoords(a[0]/E,a[1]/G,g,k);var m=t.getFixed(),c=initcr=[m.x,m.y,m.x2,m.y2],e=d.animationDelay,r=c[0],s=c[1];g=c[2];k=c[3];var N=a[0]-initcr[0],I=a[1]-initcr[1],b=a[2]-initcr[2],l=a[3]-initcr[3],v=0,B=d.swingSpeed;u.animMode(true);var q=function(){return function(){v+=(100-v)/B;c[0]=r+v/100*
N;c[1]=s+v/100*I;c[2]=g+v/100*b;c[3]=k+v/100*l;v<100?window.setTimeout(q,e):u.done();if(v>=99.8)v=100;ia(c)}}();window.setTimeout(q,e)}},setSelect:ha,setOptions:function(a){ja(a);ba()},tellSelect:function(){return aa(t.getFixed())},tellScaled:function(){return t.getFixed()},disable:function(){d.disabled=true;u.disableHandles();u.setCursor("default");H.setCursor("default")},enable:function(){d.disabled=false;ba()},cancel:function(){u.done();H.activateHandlers(null,null)},focus:Z.watchKeys,getBounds:function(){return[y*
E,x*G]},getWidgetSize:function(){return[y,x]},release:u.release,destroy:function(){ca.remove();K.show()}};K.data("Jcrop",L);return L};p.fn.Jcrop=function(C){function D(o){var Q=C.useImg||o.src,J=new Image;J.onload=function(){p.Jcrop(o,C)};J.src=Q}if(typeof C!=="object")C={};this.each(function(){if(p(this).data("Jcrop"))if(C=="api")return p(this).data("Jcrop");else p(this).data("Jcrop").setOptions(C);else D(this)});return this}})(jQuery);
