!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var o=n(1),r=i(o),a=n(2),u=i(a),s=n(5),c=(i(s),n(6));i(c);new r.default(.1).init();new u.default("img/damn_pablos_heads.png",{w:512,h:512},{w:54,h:90})},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(e){i(this,t),this.delta=e,this.clock=0,this.clockInterval,this.deltaTime=1e3*this.delta,this.objects=[]}return o(t,[{key:"init",value:function(){var t=this;this.clock=0,this.clockInterval=setInterval(function(){return t.update()},this.deltaTime)}},{key:"stop",value:function(){clearInterval(this.clockInterval)}},{key:"update",value:function(){this.clock=Math.round(10*(this.clock+this.delta))/10,this.objects.forEach(function(t){t.update()})}},{key:"addObject",value:function(t){this.objects.push(t)}},{key:"removeObject",value:function(t){}}]),t}();e.default=r},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),u=function(t){return t&&t.__esModule?t:{default:t}}(a),s=function(t){function e(t,n,r){i(this,e);for(var a=[],u=0,s=0,c=0,l=Math.floor(n.w/r.w),h=Math.floor(n.h/r.h),f=0;f<h;f++){for(var p=0;p<l;p++){var d={w:r.w,h:r.h,x:u,y:s};a.push(d),u+=r.w,c++}u=0,s+=r.h}return o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,a))}return r(e,t),e}(u.default);e.default=s},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=n(4),a=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function(){function t(e,n,o){var r=this;i(this,t),this.url=e,this.width=n.w,this.height=n.h,this.map=[],o.forEach(function(t){r.map.push(new a.default(t.w,t.h,t.x,t.y))})}return o(t,[{key:"getURL",value:function(){return this.url}},{key:"getSprite",value:function(t){return this.map[t]}}]),t}();e.default=u},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(e,n,o,r){i(this,t),this.w=e,this.h=n,this.x=o,this.y=r}return o(t,[{key:"getWidth",value:function(){return this.w}},{key:"getHeight",value:function(){return this.h}},{key:"getX",value:function(){return this.x}},{key:"getY",value:function(){return this.y}}]),t}();e.default=r},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(e,n,o,r){i(this,t),this.name=e,this.spriteSheetUrl=n.getURL(),this.spriteAnimation=[],this.direction={FORWARD:"forward",BACKWARD:"backward",RANDOM:"random"},this.setSpriteAnimation(n,o),this.setOptions(r)}return o(t,[{key:"setOption",value:function(t){this.options=t}},{key:"setLoop",value:function(t){this.options.loop=t}},{key:"getAnimation",value:function(){return this}},{key:"getName",value:function(){return this.name}},{key:"getURL",value:function(){return this.spriteSheetUrl}},{key:"getSprite",value:function(t){return this.spriteAnimation[t]}},{key:"setSpriteAnimation",value:function(t,e){var n=this;e.forEach(function(e){n.spriteAnimation.push(t.getSprite(e))})}},{key:"setOptions",value:function(t){var e={delay:0,loops:0,direction:this.direction.FORWARD,callBack:null};this.options=t?{delay:t.delay?t.delay:e.delay,loops:t.loops?t.loops:e.loops,direction:t.direction?t.direction:e.direction,callBack:t.callBack?t.callBack:e.callBack}:e,this.resetAnimation()}},{key:"resetAnimation",value:function(){this.options.delayTime=this.options.delay-1,this.options.loopsNumber=this.options.loops-1}},{key:"getNextFrame",value:function(t){var e=void 0,n=this.spriteAnimation.length;return this.options.delayTime<=0?this.options.direction===this.direction.FORWARD?e=t+1:this.options.direction===this.direction.BACKWARD?e=t-1:this.options.direction===this.direction.RANDOM&&(e=Math.floor(Math.random()*n+0)):(e=t,this.options.delayTime--),(e>=n||e<0)&&(-1===this.options.loops||this.options.loopsNumber>0?(e>=n?e=0:e<0&&(e=n),-1!=this.options.loops&&this.options.loopsNumber--,this.options.delayTime=this.options.delay):e=-1,null!=this.options.callBack&&this.options.callBack()),e}}]),t}();e.default=r},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(e,n){i(this,t),this.id=e,this.clock=n,this.domElem=document.getElementById(e),this.anim=[],this.currentAnimation,this.currentFrame,this.clock.addObject(this)}return o(t,[{key:"addAnimation",value:function(t){var e=t.getName();-1===this.getAnimationByName(e)?this.anim.push(t):alert("The RogerObject "+this.id+" has ALREADY an animation with the name: "+e+" \n Please choose another name and try it again.")}},{key:"setDefaultAnimation",value:function(t){var e=this.getAnimationByName(t),n=this.anim[this.getAnimationByName(t)].getAnimation();this.anim[e]=this.anim[0],this.anim[0]=n}},{key:"playAnimation",value:function(t){this.domElem.width="2000px",this.currentAnimation&&(document.getElementById(this.currentAnimation.getName()).style.display="none"),this.currentAnimation=this.anim[this.getAnimationByName(t)].getAnimation(),this.currentFrame=0,this.currentAnimation.resetAnimation(),document.getElementById(t).style.display="block"}},{key:"getAnimationByName",value:function(t){for(var e=-1,n=0;n<this.anim.length;n++)this.anim[n].getName()===t&&(e=n);return e}},{key:"setFrame",value:function(t,e){this.currentAnimation=t,this.currentFrame=e;var n=t.getName(),i=t.getSprite(e);document.getElementById(n).style.width=i.getWidth(),document.getElementById(n).style.height=i.getHeight(),document.getElementById(n).style.backgroundPositionX=-i.getX()+"px",document.getElementById(n).style.backgroundPositionY=-i.getY()+"px"}},{key:"update",value:function(){-1!=this.currentFrame&&(this.setFrame(this.currentAnimation,this.currentFrame),this.currentFrame=this.currentAnimation.getNextFrame(this.currentFrame))}}]),t}();e.default=r}]);