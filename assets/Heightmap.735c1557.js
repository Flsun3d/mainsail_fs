import{cZ as $i,d8 as fa,d5 as ds,d9 as vs,da as mr,db as vn,dc as ms,dd as ps,de as da,df as va,dg as _s,dh as gs,di as pr,dj as ys,dk as xs,dl as Ts,dm as Es,dn as As,dp as ma,dq as _t,dr as Ar,ds as Ss,dt as bs,du as ws,dv as Oi,dw as Bi,dx as Cs,dy as pa,dz as _a,dA as ga,dB as ya,dC as Rs,dD as Ms,dE as Ls,dF as Ns,dG as Ps,dH as Ds,dI as wr,dJ as mn,dK as Is,dL as Os,dM as Bs,dN as Fs,dO as Us,dP as Hs,dQ as zs,dR as Gs,dS as Cr,dT as ks,dU as Vs,m as Ws,bZ as Xs,aM as js,O as qs,dV as Ys,r as Zs,a4 as $s,c2 as Ks,ax as Qs,bH as Js,W as eo,C as to,o as it,p as Me,e as Te,d as ut,w as nt,L as ro,aq as io,ae as Rr,M as kt,x as no,K as ao,cj as so,a5 as Mr,_ as pn,a0 as Lr,i as Nr}from"./vendor.60e31b64.js";import{B as oo,C as lo,_ as St,n as ho}from"./index.f5d6ee22.js";$i([fa,ds]);$i(vs);function _n(e,t,r){typeof t=="object"&&(r=t,t=null);var i=this,n;if(!(e instanceof Function)){n=[];for(var a in e)e.hasOwnProperty(a)&&n.push(a)}var s=function(l){if(i.apply(this,arguments),e instanceof Function?gn(this,e.call(this,l)):uo(this,e,n),this.constructor===s)for(var h=s.__initializers__,u=0;u<h.length;u++)h[u].apply(this,arguments)};s.__super__=i,i.__initializers__?s.__initializers__=i.__initializers__.slice():s.__initializers__=[],t&&s.__initializers__.push(t);var o=function(){};return o.prototype=i.prototype,s.prototype=new o,s.prototype.constructor=s,gn(s.prototype,r),s.extend=i.extend,s.derive=i.extend,s}function gn(e,t){if(!!t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])}function uo(e,t,r){for(var i=0;i<r.length;i++){var n=r[i];e[n]=t[n]}}var co={extend:_n,derive:_n};function fo(e,t){this.action=e,this.context=t}var vo={trigger:function(e){if(!!this.hasOwnProperty("__handlers__")&&!!this.__handlers__.hasOwnProperty(e)){var t=this.__handlers__[e],r=t.length,i=-1,n=arguments;switch(n.length){case 1:for(;++i<r;)t[i].action.call(t[i].context);return;case 2:for(;++i<r;)t[i].action.call(t[i].context,n[1]);return;case 3:for(;++i<r;)t[i].action.call(t[i].context,n[1],n[2]);return;case 4:for(;++i<r;)t[i].action.call(t[i].context,n[1],n[2],n[3]);return;case 5:for(;++i<r;)t[i].action.call(t[i].context,n[1],n[2],n[3],n[4]);return;default:for(;++i<r;)t[i].action.apply(t[i].context,Array.prototype.slice.call(n,1));return}}},on:function(e,t,r){if(!(!e||!t)){var i=this.__handlers__||(this.__handlers__={});if(!i[e])i[e]=[];else if(this.has(e,t))return;var n=new fo(t,r||this);return i[e].push(n),this}},once:function(e,t,r){if(!e||!t)return;var i=this;function n(){i.off(e,n),t.apply(this,arguments)}return this.on(e,n,r)},before:function(e,t,r){if(!(!e||!t))return e="before"+e,this.on(e,t,r)},after:function(e,t,r){if(!(!e||!t))return e="after"+e,this.on(e,t,r)},success:function(e,t){return this.once("success",e,t)},error:function(e,t){return this.once("error",e,t)},off:function(e,t){var r=this.__handlers__||(this.__handlers__={});if(!t){r[e]=[];return}if(r[e]){for(var i=r[e],n=[],a=0;a<i.length;a++)t&&i[a].action!==t&&n.push(i[a]);r[e]=n}return this},has:function(e,t){var r=this.__handlers__;if(!r||!r[e])return!1;for(var i=r[e],n=0;n<i.length;n++)if(i[n].action===t)return!0}},Ki=vo,mo=0,po=Array.prototype,_o=po.forEach,cr={genGUID:function(){return++mo},relative2absolute:function(e,t){if(!t||e.match(/^\//))return e;for(var r=e.split("/"),i=t.split("/"),n=r[0];n==="."||n==="..";)n===".."&&i.pop(),r.shift(),n=r[0];return i.join("/")+"/"+r.join("/")},extend:function(e,t){if(t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e},defaults:function(e,t){if(t)for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e},extendWithPropList:function(e,t,r){if(t)for(var i=0;i<r.length;i++){var n=r[i];e[n]=t[n]}return e},defaultsWithPropList:function(e,t,r){if(t)for(var i=0;i<r.length;i++){var n=r[i];e[n]==null&&(e[n]=t[n])}return e},each:function(e,t,r){if(!!(e&&t))if(e.forEach&&e.forEach===_o)e.forEach(t,r);else if(e.length===+e.length)for(var i=0,n=e.length;i<n;i++)t.call(r,e[i],i,e);else for(var a in e)e.hasOwnProperty(a)&&t.call(r,e[a],a,e)},isObject:function(e){return e===Object(e)},isArray:function(e){return Array.isArray(e)},isArrayLike:function(e){return e?e.length===+e.length:!1},clone:function(e){if(cr.isObject(e)){if(cr.isArray(e))return e.slice();if(cr.isArrayLike(e)){for(var t=new e.constructor(e.length),r=0;r<e.length;r++)t[r]=e[r];return t}else return cr.extend({},e)}else return e}},De=cr,ai=function(){this.__uid__=De.genGUID()};ai.__initializers__=[function(e){De.extend(this,e)}];De.extend(ai,co);De.extend(ai.prototype,Ki);var Ye=ai,yn=["OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear","OES_standard_derivatives","OES_vertex_array_object","OES_element_index_uint","WEBGL_compressed_texture_s3tc","WEBGL_depth_texture","EXT_texture_filter_anisotropic","EXT_shader_texture_lod","WEBGL_draw_buffers","EXT_frag_depth","EXT_sRGB","ANGLE_instanced_arrays"],xn=["MAX_TEXTURE_SIZE","MAX_CUBE_MAP_TEXTURE_SIZE"];function go(e){for(var t={},r={},i=0;i<yn.length;i++){var n=yn[i];s(n)}for(var i=0;i<xn.length;i++){var a=xn[i];r[a]=e.getParameter(e[a])}this.getExtension=function(o){return o in t||s(o),t[o]},this.getParameter=function(o){return r[o]};function s(o){if(e.getExtension){var l=e.getExtension(o);l||(l=e.getExtension("MOZ_"+o)),l||(l=e.getExtension("WEBKIT_"+o)),t[o]=l}}}var A={DEPTH_BUFFER_BIT:256,STENCIL_BUFFER_BIT:1024,COLOR_BUFFER_BIT:16384,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,ZERO:0,ONE:1,SRC_COLOR:768,ONE_MINUS_SRC_COLOR:769,SRC_ALPHA:770,ONE_MINUS_SRC_ALPHA:771,DST_ALPHA:772,ONE_MINUS_DST_ALPHA:773,DST_COLOR:774,ONE_MINUS_DST_COLOR:775,SRC_ALPHA_SATURATE:776,FUNC_ADD:32774,BLEND_EQUATION:32777,BLEND_EQUATION_RGB:32777,BLEND_EQUATION_ALPHA:34877,FUNC_SUBTRACT:32778,FUNC_REVERSE_SUBTRACT:32779,BLEND_DST_RGB:32968,BLEND_SRC_RGB:32969,BLEND_DST_ALPHA:32970,BLEND_SRC_ALPHA:32971,CONSTANT_COLOR:32769,ONE_MINUS_CONSTANT_COLOR:32770,CONSTANT_ALPHA:32771,ONE_MINUS_CONSTANT_ALPHA:32772,BLEND_COLOR:32773,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,ARRAY_BUFFER_BINDING:34964,ELEMENT_ARRAY_BUFFER_BINDING:34965,STREAM_DRAW:35040,STATIC_DRAW:35044,DYNAMIC_DRAW:35048,BUFFER_SIZE:34660,BUFFER_USAGE:34661,CURRENT_VERTEX_ATTRIB:34342,FRONT:1028,BACK:1029,FRONT_AND_BACK:1032,CULL_FACE:2884,BLEND:3042,DITHER:3024,STENCIL_TEST:2960,DEPTH_TEST:2929,SCISSOR_TEST:3089,POLYGON_OFFSET_FILL:32823,SAMPLE_ALPHA_TO_COVERAGE:32926,SAMPLE_COVERAGE:32928,NO_ERROR:0,INVALID_ENUM:1280,INVALID_VALUE:1281,INVALID_OPERATION:1282,OUT_OF_MEMORY:1285,CW:2304,CCW:2305,LINE_WIDTH:2849,ALIASED_POINT_SIZE_RANGE:33901,ALIASED_LINE_WIDTH_RANGE:33902,CULL_FACE_MODE:2885,FRONT_FACE:2886,DEPTH_RANGE:2928,DEPTH_WRITEMASK:2930,DEPTH_CLEAR_VALUE:2931,DEPTH_FUNC:2932,STENCIL_CLEAR_VALUE:2961,STENCIL_FUNC:2962,STENCIL_FAIL:2964,STENCIL_PASS_DEPTH_FAIL:2965,STENCIL_PASS_DEPTH_PASS:2966,STENCIL_REF:2967,STENCIL_VALUE_MASK:2963,STENCIL_WRITEMASK:2968,STENCIL_BACK_FUNC:34816,STENCIL_BACK_FAIL:34817,STENCIL_BACK_PASS_DEPTH_FAIL:34818,STENCIL_BACK_PASS_DEPTH_PASS:34819,STENCIL_BACK_REF:36003,STENCIL_BACK_VALUE_MASK:36004,STENCIL_BACK_WRITEMASK:36005,VIEWPORT:2978,SCISSOR_BOX:3088,COLOR_CLEAR_VALUE:3106,COLOR_WRITEMASK:3107,UNPACK_ALIGNMENT:3317,PACK_ALIGNMENT:3333,MAX_TEXTURE_SIZE:3379,MAX_VIEWPORT_DIMS:3386,SUBPIXEL_BITS:3408,RED_BITS:3410,GREEN_BITS:3411,BLUE_BITS:3412,ALPHA_BITS:3413,DEPTH_BITS:3414,STENCIL_BITS:3415,POLYGON_OFFSET_UNITS:10752,POLYGON_OFFSET_FACTOR:32824,TEXTURE_BINDING_2D:32873,SAMPLE_BUFFERS:32936,SAMPLES:32937,SAMPLE_COVERAGE_VALUE:32938,SAMPLE_COVERAGE_INVERT:32939,COMPRESSED_TEXTURE_FORMATS:34467,DONT_CARE:4352,FASTEST:4353,NICEST:4354,GENERATE_MIPMAP_HINT:33170,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,DEPTH_COMPONENT:6402,ALPHA:6406,RGB:6407,RGBA:6408,LUMINANCE:6409,LUMINANCE_ALPHA:6410,UNSIGNED_SHORT_4_4_4_4:32819,UNSIGNED_SHORT_5_5_5_1:32820,UNSIGNED_SHORT_5_6_5:33635,FRAGMENT_SHADER:35632,VERTEX_SHADER:35633,MAX_VERTEX_ATTRIBS:34921,MAX_VERTEX_UNIFORM_VECTORS:36347,MAX_VARYING_VECTORS:36348,MAX_COMBINED_TEXTURE_IMAGE_UNITS:35661,MAX_VERTEX_TEXTURE_IMAGE_UNITS:35660,MAX_TEXTURE_IMAGE_UNITS:34930,MAX_FRAGMENT_UNIFORM_VECTORS:36349,SHADER_TYPE:35663,DELETE_STATUS:35712,LINK_STATUS:35714,VALIDATE_STATUS:35715,ATTACHED_SHADERS:35717,ACTIVE_UNIFORMS:35718,ACTIVE_ATTRIBUTES:35721,SHADING_LANGUAGE_VERSION:35724,CURRENT_PROGRAM:35725,NEVER:512,LESS:513,EQUAL:514,LEQUAL:515,GREATER:516,NOTEQUAL:517,GEQUAL:518,ALWAYS:519,KEEP:7680,REPLACE:7681,INCR:7682,DECR:7683,INVERT:5386,INCR_WRAP:34055,DECR_WRAP:34056,VENDOR:7936,RENDERER:7937,VERSION:7938,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,TEXTURE_MAG_FILTER:10240,TEXTURE_MIN_FILTER:10241,TEXTURE_WRAP_S:10242,TEXTURE_WRAP_T:10243,TEXTURE_2D:3553,TEXTURE:5890,TEXTURE_CUBE_MAP:34067,TEXTURE_BINDING_CUBE_MAP:34068,TEXTURE_CUBE_MAP_POSITIVE_X:34069,TEXTURE_CUBE_MAP_NEGATIVE_X:34070,TEXTURE_CUBE_MAP_POSITIVE_Y:34071,TEXTURE_CUBE_MAP_NEGATIVE_Y:34072,TEXTURE_CUBE_MAP_POSITIVE_Z:34073,TEXTURE_CUBE_MAP_NEGATIVE_Z:34074,MAX_CUBE_MAP_TEXTURE_SIZE:34076,TEXTURE0:33984,TEXTURE1:33985,TEXTURE2:33986,TEXTURE3:33987,TEXTURE4:33988,TEXTURE5:33989,TEXTURE6:33990,TEXTURE7:33991,TEXTURE8:33992,TEXTURE9:33993,TEXTURE10:33994,TEXTURE11:33995,TEXTURE12:33996,TEXTURE13:33997,TEXTURE14:33998,TEXTURE15:33999,TEXTURE16:34e3,TEXTURE17:34001,TEXTURE18:34002,TEXTURE19:34003,TEXTURE20:34004,TEXTURE21:34005,TEXTURE22:34006,TEXTURE23:34007,TEXTURE24:34008,TEXTURE25:34009,TEXTURE26:34010,TEXTURE27:34011,TEXTURE28:34012,TEXTURE29:34013,TEXTURE30:34014,TEXTURE31:34015,ACTIVE_TEXTURE:34016,REPEAT:10497,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,INT_VEC2:35667,INT_VEC3:35668,INT_VEC4:35669,BOOL:35670,BOOL_VEC2:35671,BOOL_VEC3:35672,BOOL_VEC4:35673,FLOAT_MAT2:35674,FLOAT_MAT3:35675,FLOAT_MAT4:35676,SAMPLER_2D:35678,SAMPLER_CUBE:35680,VERTEX_ATTRIB_ARRAY_ENABLED:34338,VERTEX_ATTRIB_ARRAY_SIZE:34339,VERTEX_ATTRIB_ARRAY_STRIDE:34340,VERTEX_ATTRIB_ARRAY_TYPE:34341,VERTEX_ATTRIB_ARRAY_NORMALIZED:34922,VERTEX_ATTRIB_ARRAY_POINTER:34373,VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:34975,COMPILE_STATUS:35713,LOW_FLOAT:36336,MEDIUM_FLOAT:36337,HIGH_FLOAT:36338,LOW_INT:36339,MEDIUM_INT:36340,HIGH_INT:36341,FRAMEBUFFER:36160,RENDERBUFFER:36161,RGBA4:32854,RGB5_A1:32855,RGB565:36194,DEPTH_COMPONENT16:33189,STENCIL_INDEX:6401,STENCIL_INDEX8:36168,DEPTH_STENCIL:34041,RENDERBUFFER_WIDTH:36162,RENDERBUFFER_HEIGHT:36163,RENDERBUFFER_INTERNAL_FORMAT:36164,RENDERBUFFER_RED_SIZE:36176,RENDERBUFFER_GREEN_SIZE:36177,RENDERBUFFER_BLUE_SIZE:36178,RENDERBUFFER_ALPHA_SIZE:36179,RENDERBUFFER_DEPTH_SIZE:36180,RENDERBUFFER_STENCIL_SIZE:36181,FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE:36048,FRAMEBUFFER_ATTACHMENT_OBJECT_NAME:36049,FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL:36050,FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE:36051,COLOR_ATTACHMENT0:36064,DEPTH_ATTACHMENT:36096,STENCIL_ATTACHMENT:36128,DEPTH_STENCIL_ATTACHMENT:33306,NONE:0,FRAMEBUFFER_COMPLETE:36053,FRAMEBUFFER_INCOMPLETE_ATTACHMENT:36054,FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:36055,FRAMEBUFFER_INCOMPLETE_DIMENSIONS:36057,FRAMEBUFFER_UNSUPPORTED:36061,FRAMEBUFFER_BINDING:36006,RENDERBUFFER_BINDING:36007,MAX_RENDERBUFFER_SIZE:34024,INVALID_FRAMEBUFFER_OPERATION:1286,UNPACK_FLIP_Y_WEBGL:37440,UNPACK_PREMULTIPLY_ALPHA_WEBGL:37441,CONTEXT_LOST_WEBGL:37442,UNPACK_COLORSPACE_CONVERSION_WEBGL:37443,BROWSER_DEFAULT_WEBGL:37444};function yo(e){var t=new XMLHttpRequest;t.open("get",e.url),t.responseType=e.responseType||"text",e.onprogress&&(t.onprogress=function(r){if(r.lengthComputable){var i=r.loaded/r.total;e.onprogress(i,r.loaded,r.total)}else e.onprogress(null)}),t.onload=function(r){t.status>=400?e.onerror&&e.onerror():e.onload&&e.onload(t.response)},e.onerror&&(t.onerror=e.onerror),t.send(null)}var xo={get:yo},fi,Xe={};Xe.supportWebGL=function(){if(fi==null)try{var e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");if(!t)throw new Error}catch{fi=!1}return fi};Xe.Int8Array=typeof Int8Array>"u"?Array:Int8Array;Xe.Uint8Array=typeof Uint8Array>"u"?Array:Uint8Array;Xe.Uint16Array=typeof Uint16Array>"u"?Array:Uint16Array;Xe.Uint32Array=typeof Uint32Array>"u"?Array:Uint32Array;Xe.Int16Array=typeof Int16Array>"u"?Array:Int16Array;Xe.Float32Array=typeof Float32Array>"u"?Array:Float32Array;Xe.Float64Array=typeof Float64Array>"u"?Array:Float64Array;var Ot={};typeof window<"u"?Ot=window:typeof global<"u"&&(Ot=global);Xe.requestAnimationFrame=Ot.requestAnimationFrame||Ot.msRequestAnimationFrame||Ot.mozRequestAnimationFrame||Ot.webkitRequestAnimationFrame||function(e){setTimeout(e,16)};Xe.createCanvas=function(){return document.createElement("canvas")};Xe.createImage=function(){return new Ot.Image};Xe.request={get:xo.get};Xe.addEventListener=function(e,t,r,i){e.addEventListener(t,r,i)};Xe.removeEventListener=function(e,t,r){e.removeEventListener(t,r)};var be=Xe,Ne=function(){this.head=null,this.tail=null,this._length=0};Ne.prototype.insert=function(e){var t=new Ne.Entry(e);return this.insertEntry(t),t};Ne.prototype.insertAt=function(e,t){if(!(e<0)){for(var r=this.head,i=0;r&&i!=e;)r=r.next,i++;if(r){var n=new Ne.Entry(t),a=r.prev;a?(a.next=n,n.prev=a):this.head=n,n.next=r,r.prev=n}else this.insert(t)}};Ne.prototype.insertBeforeEntry=function(e,t){var r=new Ne.Entry(e),i=t.prev;i?(i.next=r,r.prev=i):this.head=r,r.next=t,t.prev=r,this._length++};Ne.prototype.insertEntry=function(e){this.head?(this.tail.next=e,e.prev=this.tail,this.tail=e):this.head=this.tail=e,this._length++};Ne.prototype.remove=function(e){var t=e.prev,r=e.next;t?t.next=r:this.head=r,r?r.prev=t:this.tail=t,e.next=e.prev=null,this._length--};Ne.prototype.removeAt=function(e){if(!(e<0)){for(var t=this.head,r=0;t&&r!=e;)t=t.next,r++;if(t)return this.remove(t),t.value}};Ne.prototype.getHead=function(){if(this.head)return this.head.value};Ne.prototype.getTail=function(){if(this.tail)return this.tail.value};Ne.prototype.getAt=function(e){if(!(e<0)){for(var t=this.head,r=0;t&&r!=e;)t=t.next,r++;return t.value}};Ne.prototype.indexOf=function(e){for(var t=this.head,r=0;t;){if(t.value===e)return r;t=t.next,r++}};Ne.prototype.length=function(){return this._length};Ne.prototype.isEmpty=function(){return this._length===0};Ne.prototype.forEach=function(e,t){for(var r=this.head,i=0,n=typeof t<"u";r;)n?e.call(t,r.value,i):e(r.value,i),r=r.next,i++};Ne.prototype.clear=function(){this.tail=this.head=null,this._length=0};Ne.Entry=function(e){this.value=e,this.next=null,this.prev=null};var To=Ne,ir=function(e){this._list=new To,this._map={},this._maxSize=e||10};ir.prototype.setMaxSize=function(e){this._maxSize=e};ir.prototype.put=function(e,t){if(!this._map.hasOwnProperty(e)){var r=this._list.length();if(r>=this._maxSize&&r>0){var i=this._list.head;this._list.remove(i),delete this._map[i.key]}var n=this._list.insert(t);n.key=e,this._map[e]=n}};ir.prototype.get=function(e){var t=this._map[e];if(this._map.hasOwnProperty(e))return t!==this._list.tail&&(this._list.remove(t),this._list.insertEntry(t)),t.value};ir.prototype.remove=function(e){var t=this._map[e];typeof t<"u"&&(delete this._map[e],this._list.remove(t))};ir.prototype.clear=function(){this._list.clear(),this._map={}};var xa=ir,pe={},Tn={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function ot(e){return e=Math.round(e),e<0?0:e>255?255:e}function Eo(e){return e=Math.round(e),e<0?0:e>360?360:e}function _r(e){return e<0?0:e>1?1:e}function di(e){return e.length&&e.charAt(e.length-1)==="%"?ot(parseFloat(e)/100*255):ot(parseInt(e,10))}function Jt(e){return e.length&&e.charAt(e.length-1)==="%"?_r(parseFloat(e)/100):_r(parseFloat(e))}function vi(e,t,r){return r<0?r+=1:r>1&&(r-=1),r*6<1?e+(t-e)*r*6:r*2<1?t:r*3<2?e+(t-e)*(2/3-r)*6:e}function bt(e,t,r){return e+(t-e)*r}function st(e,t,r,i,n){return e[0]=t,e[1]=r,e[2]=i,e[3]=n,e}function Fi(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}var Ta=new xa(20),Pr=null;function Vt(e,t){Pr&&Fi(Pr,t),Pr=Ta.put(e,Pr||t.slice())}pe.parse=function(e,t){if(!!e){t=t||[];var r=Ta.get(e);if(r)return Fi(t,r);e=e+"";var i=e.replace(/ /g,"").toLowerCase();if(i in Tn)return Fi(t,Tn[i]),Vt(e,t),t;if(i.charAt(0)==="#"){if(i.length===4){var n=parseInt(i.substr(1),16);if(!(n>=0&&n<=4095)){st(t,0,0,0,1);return}return st(t,(n&3840)>>4|(n&3840)>>8,n&240|(n&240)>>4,n&15|(n&15)<<4,1),Vt(e,t),t}else if(i.length===7){var n=parseInt(i.substr(1),16);if(!(n>=0&&n<=16777215)){st(t,0,0,0,1);return}return st(t,(n&16711680)>>16,(n&65280)>>8,n&255,1),Vt(e,t),t}return}var a=i.indexOf("("),s=i.indexOf(")");if(a!==-1&&s+1===i.length){var o=i.substr(0,a),l=i.substr(a+1,s-(a+1)).split(","),h=1;switch(o){case"rgba":if(l.length!==4){st(t,0,0,0,1);return}h=Jt(l.pop());case"rgb":if(l.length!==3){st(t,0,0,0,1);return}return st(t,di(l[0]),di(l[1]),di(l[2]),h),Vt(e,t),t;case"hsla":if(l.length!==4){st(t,0,0,0,1);return}return l[3]=Jt(l[3]),Ui(l,t),Vt(e,t),t;case"hsl":if(l.length!==3){st(t,0,0,0,1);return}return Ui(l,t),Vt(e,t),t;default:return}}st(t,0,0,0,1)}};pe.parseToFloat=function(e,t){if(t=pe.parse(e,t),!!t)return t[0]/=255,t[1]/=255,t[2]/=255,t};function Ui(e,t){var r=(parseFloat(e[0])%360+360)%360/360,i=Jt(e[1]),n=Jt(e[2]),a=n<=.5?n*(i+1):n+i-n*i,s=n*2-a;return t=t||[],st(t,ot(vi(s,a,r+1/3)*255),ot(vi(s,a,r)*255),ot(vi(s,a,r-1/3)*255),1),e.length===4&&(t[3]=e[3]),t}function Ao(e){if(!!e){var t=e[0]/255,r=e[1]/255,i=e[2]/255,n=Math.min(t,r,i),a=Math.max(t,r,i),s=a-n,o=(a+n)/2,l,h;if(s===0)l=0,h=0;else{o<.5?h=s/(a+n):h=s/(2-a-n);var u=((a-t)/6+s/2)/s,c=((a-r)/6+s/2)/s,d=((a-i)/6+s/2)/s;t===a?l=d-c:r===a?l=1/3+u-d:i===a&&(l=2/3+c-u),l<0&&(l+=1),l>1&&(l-=1)}var f=[l*360,h,o];return e[3]!=null&&f.push(e[3]),f}}pe.lift=function(e,t){var r=pe.parse(e);if(r){for(var i=0;i<3;i++)t<0?r[i]=r[i]*(1-t)|0:r[i]=(255-r[i])*t+r[i]|0;return pe.stringify(r,r.length===4?"rgba":"rgb")}};pe.toHex=function(e){var t=pe.parse(e);if(t)return((1<<24)+(t[0]<<16)+(t[1]<<8)+ +t[2]).toString(16).slice(1)};pe.fastLerp=function(e,t,r){if(!(!(t&&t.length)||!(e>=0&&e<=1))){r=r||[];var i=e*(t.length-1),n=Math.floor(i),a=Math.ceil(i),s=t[n],o=t[a],l=i-n;return r[0]=ot(bt(s[0],o[0],l)),r[1]=ot(bt(s[1],o[1],l)),r[2]=ot(bt(s[2],o[2],l)),r[3]=_r(bt(s[3],o[3],l)),r}};pe.fastMapToColor=pe.fastLerp;pe.lerp=function(e,t,r){if(!(!(t&&t.length)||!(e>=0&&e<=1))){var i=e*(t.length-1),n=Math.floor(i),a=Math.ceil(i),s=pe.parse(t[n]),o=pe.parse(t[a]),l=i-n,h=pe.stringify([ot(bt(s[0],o[0],l)),ot(bt(s[1],o[1],l)),ot(bt(s[2],o[2],l)),_r(bt(s[3],o[3],l))],"rgba");return r?{color:h,leftIndex:n,rightIndex:a,value:i}:h}};pe.mapToColor=pe.lerp;pe.modifyHSL=function(e,t,r,i){if(e=pe.parse(e),e)return e=Ao(e),t!=null&&(e[0]=Eo(t)),r!=null&&(e[1]=Jt(r)),i!=null&&(e[2]=Jt(i)),pe.stringify(Ui(e),"rgba")};pe.modifyAlpha=function(e,t){if(e=pe.parse(e),e&&t!=null)return e[3]=_r(t),pe.stringify(e,"rgba")};pe.stringify=function(e,t){if(!(!e||!e.length)){var r=e[0]+","+e[1]+","+e[2];return(t==="rgba"||t==="hsva"||t==="hsla")&&(r+=","+e[3]),t+"("+r+")"}};var So=pe,bo=So.parseToFloat,mi={};function En(e){var t=Object.keys(e);t.sort();for(var r=[],i=0;i<t.length;i++){var n=t[i],a=e[n];a===null?r.push(n):r.push(n+" "+a.toString())}return r.join(`
`)}function wo(e,t,r){r.sort();for(var i=[],n=0;n<r.length;n++){var a=r[n];i.push(a)}var s=En(e)+`
`+En(t)+`
`+i.join(`
`);if(mi[s])return mi[s];var o=De.genGUID();return mi[s]=o,o}var Co=Ye.extend(function(){return{name:"",depthTest:!0,depthMask:!0,transparent:!1,blend:null,autoUpdateTextureStatus:!0,uniforms:{},vertexDefines:{},fragmentDefines:{},_textureStatus:{},_enabledUniforms:null}},function(){this.name||(this.name="MATERIAL_"+this.__uid__),this.shader&&this.attachShader(this.shader,!0)},{precision:"highp",setUniform:function(e,t){t===void 0&&console.warn('Uniform value "'+e+'" is undefined');var r=this.uniforms[e];r&&(typeof t=="string"&&(t=bo(t)||t),r.value=t,this.autoUpdateTextureStatus&&r.type==="t"&&(t?this.enableTexture(e):this.disableTexture(e)))},setUniforms:function(e){for(var t in e){var r=e[t];this.setUniform(t,r)}},isUniformEnabled:function(e){return this._enabledUniforms.indexOf(e)>=0},getEnabledUniforms:function(){return this._enabledUniforms},getTextureUniforms:function(){return this._textureUniforms},set:function(e,t){if(typeof e=="object")for(var r in e){var i=e[r];this.setUniform(r,i)}else this.setUniform(e,t)},get:function(e){var t=this.uniforms[e];if(t)return t.value},attachShader:function(e,t){var r=this.uniforms;this.uniforms=e.createUniforms(),this.shader=e;var i=this.uniforms;this._enabledUniforms=Object.keys(i),this._enabledUniforms.sort(),this._textureUniforms=this._enabledUniforms.filter(function(h){var u=this.uniforms[h].type;return u==="t"||u==="tv"},this);var n=this.vertexDefines,a=this.fragmentDefines;if(this.vertexDefines=De.clone(e.vertexDefines),this.fragmentDefines=De.clone(e.fragmentDefines),t){for(var s in r)i[s]&&(i[s].value=r[s].value);De.defaults(this.vertexDefines,n),De.defaults(this.fragmentDefines,a)}var o={};for(var l in e.textures)o[l]={shaderType:e.textures[l].shaderType,type:e.textures[l].type,enabled:t&&this._textureStatus[l]?this._textureStatus[l].enabled:!1};this._textureStatus=o,this._programKey=""},clone:function(){var e=new this.constructor({name:this.name,shader:this.shader});for(var t in this.uniforms)e.uniforms[t].value=this.uniforms[t].value;return e.depthTest=this.depthTest,e.depthMask=this.depthMask,e.transparent=this.transparent,e.blend=this.blend,e.vertexDefines=De.clone(this.vertexDefines),e.fragmentDefines=De.clone(this.fragmentDefines),e.enableTexture(this.getEnabledTextures()),e.precision=this.precision,e},define:function(e,t,r){var i=this.vertexDefines,n=this.fragmentDefines;e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<3&&(r=t,t=e,e="both"),r=r!=null?r:null,(e==="vertex"||e==="both")&&i[t]!==r&&(i[t]=r,this._programKey=""),(e==="fragment"||e==="both")&&n[t]!==r&&(n[t]=r,e!=="both"&&(this._programKey=""))},undefine:function(e,t){e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<2&&(t=e,e="both"),(e==="vertex"||e==="both")&&this.isDefined("vertex",t)&&(delete this.vertexDefines[t],this._programKey=""),(e==="fragment"||e==="both")&&this.isDefined("fragment",t)&&(delete this.fragmentDefines[t],e!=="both"&&(this._programKey=""))},isDefined:function(e,t){switch(e){case"vertex":return this.vertexDefines[t]!==void 0;case"fragment":return this.fragmentDefines[t]!==void 0}},getDefine:function(e,t){switch(e){case"vertex":return this.vertexDefines[t];case"fragment":return this.fragmentDefines[t]}},enableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.enableTexture(e[t]);return}var r=this._textureStatus[e];if(r){var i=r.enabled;i||(r.enabled=!0,this._programKey="")}},enableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!0;this._programKey=""},disableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.disableTexture(e[t]);return}var r=this._textureStatus[e];if(r){var i=!r.enabled;i||(r.enabled=!1,this._programKey="")}},disableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!1;this._programKey=""},isTextureEnabled:function(e){var t=this._textureStatus;return!!t[e]&&t[e].enabled},getEnabledTextures:function(){var e=[],t=this._textureStatus;for(var r in t)t[r].enabled&&e.push(r);return e},dirtyDefines:function(){this._programKey=""},getProgramKey:function(){return this._programKey||(this._programKey=wo(this.vertexDefines,this.fragmentDefines,this.getEnabledTextures())),this._programKey}}),yt=Co,Vr=1e-6,Ie=Array,Kt=Math.random,$={};$.create=function(){var e=new Ie(2);return e[0]=0,e[1]=0,e};$.clone=function(e){var t=new Ie(2);return t[0]=e[0],t[1]=e[1],t};$.fromValues=function(e,t){var r=new Ie(2);return r[0]=e,r[1]=t,r};$.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e};$.set=function(e,t,r){return e[0]=t,e[1]=r,e};$.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e};$.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e};$.sub=$.subtract;$.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e};$.mul=$.multiply;$.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e};$.div=$.divide;$.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e};$.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e};$.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e};$.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e};$.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1];return Math.sqrt(r*r+i*i)};$.dist=$.distance;$.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1];return r*r+i*i};$.sqrDist=$.squaredDistance;$.length=function(e){var t=e[0],r=e[1];return Math.sqrt(t*t+r*r)};$.len=$.length;$.squaredLength=function(e){var t=e[0],r=e[1];return t*t+r*r};$.sqrLen=$.squaredLength;$.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e};$.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e};$.normalize=function(e,t){var r=t[0],i=t[1],n=r*r+i*i;return n>0&&(n=1/Math.sqrt(n),e[0]=t[0]*n,e[1]=t[1]*n),e};$.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]};$.cross=function(e,t,r){var i=t[0]*r[1]-t[1]*r[0];return e[0]=e[1]=0,e[2]=i,e};$.lerp=function(e,t,r,i){var n=t[0],a=t[1];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e};$.random=function(e,t){t=t||1;var r=GLMAT_RANDOM()*2*Math.PI;return e[0]=Math.cos(r)*t,e[1]=Math.sin(r)*t,e};$.transformMat2=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[2]*n,e[1]=r[1]*i+r[3]*n,e};$.transformMat2d=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[2]*n+r[4],e[1]=r[1]*i+r[3]*n+r[5],e};$.transformMat3=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[3]*n+r[6],e[1]=r[1]*i+r[4]*n+r[7],e};$.transformMat4=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[4]*n+r[12],e[1]=r[1]*i+r[5]*n+r[13],e};$.forEach=function(){var e=$.create();return function(t,r,i,n,a,s){var o,l;for(r||(r=2),i||(i=0),n?l=Math.min(n*r+i,t.length):l=t.length,o=i;o<l;o+=r)e[0]=t[o],e[1]=t[o+1],a(e,e,s),t[o]=e[0],t[o+1]=e[1];return t}}();var H=$,Q=function(e,t){e=e||0,t=t||0,this.array=H.fromValues(e,t),this._dirty=!0};Q.prototype={constructor:Q,add:function(e){return H.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t){return this.array[0]=e,this.array[1]=t,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this._dirty=!0,this},clone:function(){return new Q(this.x,this.y)},copy:function(e){return H.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return H.cross(e.array,this.array,t.array),e._dirty=!0,this},dist:function(e){return H.dist(this.array,e.array)},distance:function(e){return H.distance(this.array,e.array)},div:function(e){return H.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return H.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return H.dot(this.array,e.array)},len:function(){return H.len(this.array)},length:function(){return H.length(this.array)},lerp:function(e,t,r){return H.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return H.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return H.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return H.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return H.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return H.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return H.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return H.random(this.array,e),this._dirty=!0,this},scale:function(e){return H.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return H.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return H.sqrDist(this.array,e.array)},squaredDistance:function(e){return H.squaredDistance(this.array,e.array)},sqrLen:function(){return H.sqrLen(this.array)},squaredLength:function(){return H.squaredLength(this.array)},sub:function(e){return H.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return H.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat2:function(e){return H.transformMat2(this.array,this.array,e.array),this._dirty=!0,this},transformMat2d:function(e){return H.transformMat2d(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return H.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return H.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};if(Object.defineProperty){var An=Q.prototype;Object.defineProperty(An,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Object.defineProperty(An,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}})}Q.add=function(e,t,r){return H.add(e.array,t.array,r.array),e._dirty=!0,e};Q.set=function(e,t,r){return H.set(e.array,t,r),e._dirty=!0,e};Q.copy=function(e,t){return H.copy(e.array,t.array),e._dirty=!0,e};Q.cross=function(e,t,r){return H.cross(e.array,t.array,r.array),e._dirty=!0,e};Q.dist=function(e,t){return H.distance(e.array,t.array)};Q.distance=Q.dist;Q.div=function(e,t,r){return H.divide(e.array,t.array,r.array),e._dirty=!0,e};Q.divide=Q.div;Q.dot=function(e,t){return H.dot(e.array,t.array)};Q.len=function(e){return H.length(e.array)};Q.lerp=function(e,t,r,i){return H.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};Q.min=function(e,t,r){return H.min(e.array,t.array,r.array),e._dirty=!0,e};Q.max=function(e,t,r){return H.max(e.array,t.array,r.array),e._dirty=!0,e};Q.mul=function(e,t,r){return H.multiply(e.array,t.array,r.array),e._dirty=!0,e};Q.multiply=Q.mul;Q.negate=function(e,t){return H.negate(e.array,t.array),e._dirty=!0,e};Q.normalize=function(e,t){return H.normalize(e.array,t.array),e._dirty=!0,e};Q.random=function(e,t){return H.random(e.array,t),e._dirty=!0,e};Q.scale=function(e,t,r){return H.scale(e.array,t.array,r),e._dirty=!0,e};Q.scaleAndAdd=function(e,t,r,i){return H.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};Q.sqrDist=function(e,t){return H.sqrDist(e.array,t.array)};Q.squaredDistance=Q.sqrDist;Q.sqrLen=function(e){return H.sqrLen(e.array)};Q.squaredLength=Q.sqrLen;Q.sub=function(e,t,r){return H.subtract(e.array,t.array,r.array),e._dirty=!0,e};Q.subtract=Q.sub;Q.transformMat2=function(e,t,r){return H.transformMat2(e.array,t.array,r.array),e._dirty=!0,e};Q.transformMat2d=function(e,t,r){return H.transformMat2d(e.array,t.array,r.array),e._dirty=!0,e};Q.transformMat3=function(e,t,r){return H.transformMat3(e.array,t.array,r.array),e._dirty=!0,e};Q.transformMat4=function(e,t,r){return H.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};var $e=Q,Sn=1,bn=2,pi=3,wn={};function Ro(e){for(var t=e.split(`
`),r=0,i=t.length;r<i;r++)t[r]=r+1+": "+t[r];return t.join(`
`)}function Cn(e,t,r){if(!e.getShaderParameter(t,e.COMPILE_STATUS))return[e.getShaderInfoLog(t),Ro(r)].join(`
`)}var Rn=new be.Float32Array(16),Mo=Ye.extend({uniformSemantics:{},attributes:{}},function(){this._locations={},this._textureSlot=0,this._program=null},{bind:function(e){this._textureSlot=0,e.gl.useProgram(this._program)},hasUniform:function(e){var t=this._locations[e];return t!=null},useTextureSlot:function(e,t,r){t&&(e.gl.activeTexture(e.gl.TEXTURE0+r),t.isRenderable()?t.bind(e):t.unbind(e))},currentTextureSlot:function(){return this._textureSlot},resetTextureSlot:function(e){this._textureSlot=e||0},takeCurrentTextureSlot:function(e,t){var r=this._textureSlot;return this.useTextureSlot(e,t,r),this._textureSlot++,r},setUniform:function(e,t,r,i){var n=this._locations,a=n[r];if(a==null)return!1;switch(t){case"m4":if(!(i instanceof Float32Array)){for(var s=0;s<i.length;s++)Rn[s]=i[s];i=Rn}e.uniformMatrix4fv(a,!1,i);break;case"2i":e.uniform2i(a,i[0],i[1]);break;case"2f":e.uniform2f(a,i[0],i[1]);break;case"3i":e.uniform3i(a,i[0],i[1],i[2]);break;case"3f":e.uniform3f(a,i[0],i[1],i[2]);break;case"4i":e.uniform4i(a,i[0],i[1],i[2],i[3]);break;case"4f":e.uniform4f(a,i[0],i[1],i[2],i[3]);break;case"1i":e.uniform1i(a,i);break;case"1f":e.uniform1f(a,i);break;case"1fv":e.uniform1fv(a,i);break;case"1iv":e.uniform1iv(a,i);break;case"2iv":e.uniform2iv(a,i);break;case"2fv":e.uniform2fv(a,i);break;case"3iv":e.uniform3iv(a,i);break;case"3fv":e.uniform3fv(a,i);break;case"4iv":e.uniform4iv(a,i);break;case"4fv":e.uniform4fv(a,i);break;case"m2":case"m2v":e.uniformMatrix2fv(a,!1,i);break;case"m3":case"m3v":e.uniformMatrix3fv(a,!1,i);break;case"m4v":if(Array.isArray(i)&&Array.isArray(i[0])){for(var o=new be.Float32Array(i.length*16),l=0,s=0;s<i.length;s++)for(var h=i[s],u=0;u<16;u++)o[l++]=h[u];e.uniformMatrix4fv(a,!1,o)}else e.uniformMatrix4fv(a,!1,i);break}return!0},setUniformOfSemantic:function(e,t,r){var i=this.uniformSemantics[t];return i?this.setUniform(e,i.type,i.symbol,r):!1},enableAttributes:function(e,t,r){var i=e.gl,n=this._program,a=this._locations,s;r?s=r.__enabledAttributeList:s=wn[e.__uid__],s||(r?s=r.__enabledAttributeList=[]:s=wn[e.__uid__]=[]);for(var o=[],l=0;l<t.length;l++){var h=t[l];if(!this.attributes[h]){o[l]=-1;continue}var u=a[h];if(u==null){if(u=i.getAttribLocation(n,h),u===-1){o[l]=-1;continue}a[h]=u}o[l]=u,s[u]?s[u]=bn:s[u]=Sn}for(var l=0;l<s.length;l++)switch(s[l]){case Sn:i.enableVertexAttribArray(l),s[l]=pi;break;case bn:s[l]=pi;break;case pi:i.disableVertexAttribArray(l),s[l]=0;break}return o},getAttribLocation:function(e,t){var r=this._locations,i=r[t];return i==null&&(i=e.getAttribLocation(this._program,t),r[t]=i),i},buildProgram:function(e,t,r,i){var n=e.createShader(e.VERTEX_SHADER),a=e.createProgram();e.shaderSource(n,r),e.compileShader(n);var s=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(s,i),e.compileShader(s);var o=Cn(e,n,r);if(o||(o=Cn(e,s,i),o))return o;if(e.attachShader(a,n),e.attachShader(a,s),t.attributeSemantics.POSITION)e.bindAttribLocation(a,0,t.attributeSemantics.POSITION.symbol);else{var l=Object.keys(this.attributes);e.bindAttribLocation(a,0,l[0])}if(e.linkProgram(a),e.deleteShader(n),e.deleteShader(s),this._program=a,this.vertexCode=r,this.fragmentCode=i,!e.getProgramParameter(a,e.LINK_STATUS))return`Could not link program
`+e.getProgramInfoLog(a);for(var h=0;h<t.uniforms.length;h++){var u=t.uniforms[h];this._locations[u]=e.getUniformLocation(a,u)}}}),Lo=Mo,No=/for\s*?\(int\s*?_idx_\s*\=\s*([\w-]+)\;\s*_idx_\s*<\s*([\w-]+);\s*_idx_\s*\+\+\s*\)\s*\{\{([\s\S]+?)(?=\}\})\}\}/g;function Mn(e,t,r){function i(s,o,l,h){var u="";isNaN(o)&&(o in t?o=t[o]:o=n[o]),isNaN(l)&&(l in t?l=t[l]:l=n[l]);for(var c=parseInt(o);c<parseInt(l);c++)u+="{"+h.replace(/float\s*\(\s*_idx_\s*\)/g,c.toFixed(1)).replace(/_idx_/g,c)+"}";return u}var n={};for(var a in r)n[a+"_COUNT"]=r[a];return e.replace(No,i)}function _i(e,t,r){var i=[];if(t)for(var n in t){var a=t[n];a>0&&i.push("#define "+n.toUpperCase()+"_COUNT "+a)}if(r)for(var s=0;s<r.length;s++){var o=r[s];i.push("#define "+o.toUpperCase()+"_ENABLED")}for(var o in e){var l=e[o];l===null?i.push("#define "+o):i.push("#define "+o+" "+l.toString())}return i.join(`
`)}function Po(e){for(var t=[],r=0;r<e.length;r++)t.push("#extension GL_"+e[r]+" : enable");return t.join(`
`)}function Do(e){return["precision",e,"float"].join(" ")+`;
`+["precision",e,"int"].join(" ")+`;
`+["precision",e,"sampler2D"].join(" ")+`;
`}function Ea(e){this._renderer=e,this._cache={}}Ea.prototype.getProgram=function(e,t,r){var i=this._cache,n=e.isSkinnedMesh&&e.isSkinnedMesh(),a=e.isInstancedMesh&&e.isInstancedMesh(),s="s"+t.shader.shaderID+"m"+t.getProgramKey();r&&(s+="se"+r.getProgramKey(e.lightGroup)),n&&(s+=",sk"+e.joints.length),a&&(s+=",is");var g=i[s];if(g)return g;var o=r?r.getLightsNumbers(e.lightGroup):{},l=this._renderer,h=l.gl,u=t.getEnabledTextures(),c="";if(n){var d={SKINNING:null,JOINT_COUNT:e.joints.length};e.joints.length>l.getMaxJointNumber()&&(d.USE_SKIN_MATRICES_TEXTURE=null),c+=`
`+_i(d)+`
`}a&&(c+=`
#define INSTANCING
`);var f=c+_i(t.vertexDefines,o,u),v=c+_i(t.fragmentDefines,o,u),m=f+`
`+t.shader.vertex,p=["OES_standard_derivatives","EXT_shader_texture_lod"].filter(function(S){return l.getGLExtension(S)!=null});p.indexOf("EXT_shader_texture_lod")>=0&&(v+=`
#define SUPPORT_TEXTURE_LOD`),p.indexOf("OES_standard_derivatives")>=0&&(v+=`
#define SUPPORT_STANDARD_DERIVATIVES`);var _=Po(p)+`
`+Do(t.precision)+`
`+v+`
`+t.shader.fragment,x=Mn(m,t.vertexDefines,o),y=Mn(_,t.fragmentDefines,o),g=new Lo;g.uniformSemantics=t.shader.uniformSemantics,g.attributes=t.shader.attributes;var E=g.buildProgram(h,t.shader,x,y);return g.__error=E,i[s]=g,g};var Ln=/uniform\s+(bool|float|int|vec2|vec3|vec4|ivec2|ivec3|ivec4|mat2|mat3|mat4|sampler2D|samplerCube)\s+([\s\S]*?);/g,Io=/attribute\s+(float|int|vec2|vec3|vec4)\s+([\s\S]*?);/g,Nn=/#define\s+(\w+)?(\s+[\d-.]+)?\s*;?\s*\n/g,Oo={bool:"1i",int:"1i",sampler2D:"t",samplerCube:"t",float:"1f",vec2:"2f",vec3:"3f",vec4:"4f",ivec2:"2i",ivec3:"3i",ivec4:"4i",mat2:"m2",mat3:"m3",mat4:"m4"};function mt(e){for(var t=[],r=0;r<e;r++)t[r]=0;return t}var Pn={bool:function(){return!0},int:function(){return 0},float:function(){return 0},sampler2D:function(){return null},samplerCube:function(){return null},vec2:function(){return mt(2)},vec3:function(){return mt(3)},vec4:function(){return mt(4)},ivec2:function(){return mt(2)},ivec3:function(){return mt(3)},ivec4:function(){return mt(4)},mat2:function(){return mt(4)},mat3:function(){return mt(9)},mat4:function(){return mt(16)},array:function(){return[]}},Hi=["POSITION","NORMAL","BINORMAL","TANGENT","TEXCOORD","TEXCOORD_0","TEXCOORD_1","COLOR","JOINT","WEIGHT"],Aa=["SKIN_MATRIX","VIEWPORT_SIZE","VIEWPORT","DEVICEPIXELRATIO","WINDOW_SIZE","NEAR","FAR","TIME"],Sa=["WORLD","VIEW","PROJECTION","WORLDVIEW","VIEWPROJECTION","WORLDVIEWPROJECTION","WORLDINVERSE","VIEWINVERSE","PROJECTIONINVERSE","WORLDVIEWINVERSE","VIEWPROJECTIONINVERSE","WORLDVIEWPROJECTIONINVERSE","WORLDTRANSPOSE","VIEWTRANSPOSE","PROJECTIONTRANSPOSE","WORLDVIEWTRANSPOSE","VIEWPROJECTIONTRANSPOSE","WORLDVIEWPROJECTIONTRANSPOSE","WORLDINVERSETRANSPOSE","VIEWINVERSETRANSPOSE","PROJECTIONINVERSETRANSPOSE","WORLDVIEWINVERSETRANSPOSE","VIEWPROJECTIONINVERSETRANSPOSE","WORLDVIEWPROJECTIONINVERSETRANSPOSE"],Bo={vec4:4,vec3:3,vec2:2,float:1},gi={},ba={};function Fo(e,t){var r="vertex:"+e+"fragment:"+t;if(gi[r])return gi[r];var i=De.genGUID();return gi[r]=i,ba[i]={vertex:e,fragment:t},i}function Dn(e){return e.replace(/[ \t]*\/\/.*\n/g,"").replace(/[ \t]*\/\*[\s\S]*?\*\//g,"")}function Wt(){console.error("Wrong uniform/attributes syntax")}function In(e,t){for(var r=/[,=\(\):]/,i=t.replace(/:\s*\[\s*(.*)\s*\]/g,"="+e+"($1)").replace(/\s+/g,"").split(/(?=[,=\(\):])/g),n=[],a=0;a<i.length;a++)i[a].match(r)?n.push(i[a].charAt(0),i[a].slice(1)):n.push(i[a]);i=n;var s=0,o=1,l=2,h=3,u=4,c=5,d=s,f={},v=null,m;p(i[0]);function p(y){y||Wt();var g=y.match(/\[(.*?)\]/);m=y.replace(/\[(.*?)\]/,""),f[m]={},g&&(f[m].isArray=!0,f[m].arraySize=g[1])}for(var a=1;a<i.length;a++){var _=i[a];if(!!_){if(_==="="){if(d!==s&&d!==h){Wt();break}d=o;continue}else if(_===":"){d=u;continue}else if(_===","){if(d===l){if(!(v instanceof Array)){Wt();break}v.push(+i[++a])}else d=c;continue}else if(_===")"){f[m].value=new be.Float32Array(v),v=null,d=c;continue}else if(_==="("){if(d!==l){Wt();break}if(!(v instanceof Array)){Wt();break}v.push(+i[++a]);continue}else if(_.indexOf("vec")>=0){if(d!==o&&d!==u){Wt();break}d=l,v=[];continue}else if(d===o){e==="bool"?f[m].value=_==="true":f[m].value=parseFloat(_),v=null;continue}else if(d===u){var x=_;Hi.indexOf(x)>=0||Aa.indexOf(x)>=0||Sa.indexOf(x)>=0?f[m].semantic=x:x==="ignore"||x==="unconfigurable"?f[m].ignore=!0:e==="bool"?f[m].value=x==="true":f[m].value=parseFloat(x);continue}p(_),d=s}}return f}function L(e,t){typeof e=="object"&&(t=e.fragment,e=e.vertex),e=Dn(e),t=Dn(t),this._shaderID=Fo(e,t),this._vertexCode=L.parseImport(e),this._fragmentCode=L.parseImport(t),this.attributeSemantics={},this.matrixSemantics={},this.uniformSemantics={},this.matrixSemanticKeys=[],this.uniformTemplates={},this.attributes={},this.textures={},this.vertexDefines={},this.fragmentDefines={},this._parseAttributes(),this._parseUniforms(),this._parseDefines()}L.prototype={constructor:L,createUniforms:function(){var e={};for(var t in this.uniformTemplates){var r=this.uniformTemplates[t];e[t]={type:r.type,value:r.value()}}return e},_parseImport:function(){this._vertexCode=L.parseImport(this.vertex),this._fragmentCode=L.parseImport(this.fragment)},_addSemanticUniform:function(e,t,r){if(Hi.indexOf(r)>=0)this.attributeSemantics[r]={symbol:e,type:t};else if(Sa.indexOf(r)>=0){var i=!1,n=r;r.match(/TRANSPOSE$/)&&(i=!0,n=r.slice(0,-9)),this.matrixSemantics[r]={symbol:e,type:t,isTranspose:i,semanticNoTranspose:n}}else Aa.indexOf(r)>=0&&(this.uniformSemantics[r]={symbol:e,type:t})},_addMaterialUniform:function(e,t,r,i,n,a){a[e]={type:r,value:n?Pn.array:i||Pn[t],semantic:null}},_parseUniforms:function(){var e={},t=this,r="vertex";this._uniformList=[],this._vertexCode=this._vertexCode.replace(Ln,n),r="fragment",this._fragmentCode=this._fragmentCode.replace(Ln,n),t.matrixSemanticKeys=Object.keys(this.matrixSemantics);function i(a){return a!=null?function(){return a}:null}function n(a,s,o){var l=In(s,o),h=[];for(var u in l){var c=l[u],d=c.semantic,f=u,v=Oo[s],m=i(l[u].value);l[u].isArray&&(f+="["+l[u].arraySize+"]",v+="v"),h.push(f),t._uniformList.push(u),c.ignore||((s==="sampler2D"||s==="samplerCube")&&(t.textures[u]={shaderType:r,type:s}),d?t._addSemanticUniform(u,v,d):t._addMaterialUniform(u,s,v,m,l[u].isArray,e))}return h.length>0?"uniform "+s+" "+h.join(",")+`;
`:""}this.uniformTemplates=e},_parseAttributes:function(){var e={},t=this;this._vertexCode=this._vertexCode.replace(Io,r);function r(i,n,a){var s=In(n,a),o=Bo[n]||1,l=[];for(var h in s){var u=s[h].semantic;if(e[h]={type:"float",size:o,semantic:u||null},u){if(Hi.indexOf(u)<0)throw new Error('Unkown semantic "'+u+'"');t.attributeSemantics[u]={symbol:h,type:n}}l.push(h)}return"attribute "+n+" "+l.join(",")+`;
`}this.attributes=e},_parseDefines:function(){var e=this,t="vertex";this._vertexCode=this._vertexCode.replace(Nn,r),t="fragment",this._fragmentCode=this._fragmentCode.replace(Nn,r);function r(i,n,a){var s=t==="vertex"?e.vertexDefines:e.fragmentDefines;return s[n]||(a==="false"?s[n]=!1:a==="true"?s[n]=!0:s[n]=a?isNaN(parseFloat(a))?a.trim():parseFloat(a):null),""}},clone:function(){var e=ba[this._shaderID],t=new L(e.vertex,e.fragment);return t}};Object.defineProperty&&(Object.defineProperty(L.prototype,"shaderID",{get:function(){return this._shaderID}}),Object.defineProperty(L.prototype,"vertex",{get:function(){return this._vertexCode}}),Object.defineProperty(L.prototype,"fragment",{get:function(){return this._fragmentCode}}),Object.defineProperty(L.prototype,"uniforms",{get:function(){return this._uniformList}}));var Uo=/(@import)\s*([0-9a-zA-Z_\-\.]*)/g;L.parseImport=function(e){return e=e.replace(Uo,function(n,r,i){var n=L.source(i);return n?L.parseImport(n):(console.error('Shader chunk "'+i+'" not existed in library'),"")}),e};var Ho=/(@export)\s*([0-9a-zA-Z_\-\.]*)\s*\n([\s\S]*?)@end/g;L.import=function(e){e.replace(Ho,function(t,r,i,a){var a=a.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+\x24)/g,"");if(a){for(var s=i.split("."),o=L.codes,l=0,h;l<s.length-1;)h=s[l++],o[h]||(o[h]={}),o=o[h];h=s[l],o[h]=a}return a})};L.codes={};L.source=function(e){for(var t=e.split("."),r=L.codes,i=0;r&&i<t.length;){var n=t[i++];r=r[n]}return typeof r!="string"?(console.error('Shader "'+e+'" not existed in library'),""):r};var wa=`@export clay.prez.vertex
uniform mat4 WVP : WORLDVIEWPROJECTION;
attribute vec3 pos : POSITION;
attribute vec2 uv : TEXCOORD_0;
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec2 v_Texcoord;
void main()
{
 vec4 P = vec4(pos, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = WVP * P;
 v_Texcoord = uv * uvRepeat + uvOffset;
}
@end
@export clay.prez.fragment
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
varying vec2 v_Texcoord;
void main()
{
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
 gl_FragColor = vec4(0.0,0.0,0.0,1.0);
}
@end`,le={};le.create=function(){var e=new Ie(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};le.clone=function(e){var t=new Ie(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t};le.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};le.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};le.transpose=function(e,t){if(e===t){var r=t[1],i=t[2],n=t[3],a=t[6],s=t[7],o=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=i,e[9]=a,e[11]=t[14],e[12]=n,e[13]=s,e[14]=o}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e};le.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],s=t[4],o=t[5],l=t[6],h=t[7],u=t[8],c=t[9],d=t[10],f=t[11],v=t[12],m=t[13],p=t[14],_=t[15],x=r*o-i*s,y=r*l-n*s,g=r*h-a*s,E=i*l-n*o,S=i*h-a*o,R=n*h-a*l,b=u*m-c*v,M=u*p-d*v,F=u*_-f*v,w=c*p-d*m,U=c*_-f*m,O=d*_-f*p,N=x*O-y*U+g*w+E*F-S*M+R*b;return N?(N=1/N,e[0]=(o*O-l*U+h*w)*N,e[1]=(n*U-i*O-a*w)*N,e[2]=(m*R-p*S+_*E)*N,e[3]=(d*S-c*R-f*E)*N,e[4]=(l*F-s*O-h*M)*N,e[5]=(r*O-n*F+a*M)*N,e[6]=(p*g-v*R-_*y)*N,e[7]=(u*R-d*g+f*y)*N,e[8]=(s*U-o*F+h*b)*N,e[9]=(i*F-r*U-a*b)*N,e[10]=(v*S-m*g+_*x)*N,e[11]=(c*g-u*S-f*x)*N,e[12]=(o*M-s*w-l*b)*N,e[13]=(r*w-i*M+n*b)*N,e[14]=(m*y-v*E-p*x)*N,e[15]=(u*E-c*y+d*x)*N,e):null};le.adjoint=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],s=t[4],o=t[5],l=t[6],h=t[7],u=t[8],c=t[9],d=t[10],f=t[11],v=t[12],m=t[13],p=t[14],_=t[15];return e[0]=o*(d*_-f*p)-c*(l*_-h*p)+m*(l*f-h*d),e[1]=-(i*(d*_-f*p)-c*(n*_-a*p)+m*(n*f-a*d)),e[2]=i*(l*_-h*p)-o*(n*_-a*p)+m*(n*h-a*l),e[3]=-(i*(l*f-h*d)-o*(n*f-a*d)+c*(n*h-a*l)),e[4]=-(s*(d*_-f*p)-u*(l*_-h*p)+v*(l*f-h*d)),e[5]=r*(d*_-f*p)-u*(n*_-a*p)+v*(n*f-a*d),e[6]=-(r*(l*_-h*p)-s*(n*_-a*p)+v*(n*h-a*l)),e[7]=r*(l*f-h*d)-s*(n*f-a*d)+u*(n*h-a*l),e[8]=s*(c*_-f*m)-u*(o*_-h*m)+v*(o*f-h*c),e[9]=-(r*(c*_-f*m)-u*(i*_-a*m)+v*(i*f-a*c)),e[10]=r*(o*_-h*m)-s*(i*_-a*m)+v*(i*h-a*o),e[11]=-(r*(o*f-h*c)-s*(i*f-a*c)+u*(i*h-a*o)),e[12]=-(s*(c*p-d*m)-u*(o*p-l*m)+v*(o*d-l*c)),e[13]=r*(c*p-d*m)-u*(i*p-n*m)+v*(i*d-n*c),e[14]=-(r*(o*p-l*m)-s*(i*p-n*m)+v*(i*l-n*o)),e[15]=r*(o*d-l*c)-s*(i*d-n*c)+u*(i*l-n*o),e};le.determinant=function(e){var t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],s=e[5],o=e[6],l=e[7],h=e[8],u=e[9],c=e[10],d=e[11],f=e[12],v=e[13],m=e[14],p=e[15],_=t*s-r*a,x=t*o-i*a,y=t*l-n*a,g=r*o-i*s,E=r*l-n*s,S=i*l-n*o,R=h*v-u*f,b=h*m-c*f,M=h*p-d*f,F=u*m-c*v,w=u*p-d*v,U=c*p-d*m;return _*U-x*w+y*F+g*M-E*b+S*R};le.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3],o=t[4],l=t[5],h=t[6],u=t[7],c=t[8],d=t[9],f=t[10],v=t[11],m=t[12],p=t[13],_=t[14],x=t[15],y=r[0],g=r[1],E=r[2],S=r[3];return e[0]=y*i+g*o+E*c+S*m,e[1]=y*n+g*l+E*d+S*p,e[2]=y*a+g*h+E*f+S*_,e[3]=y*s+g*u+E*v+S*x,y=r[4],g=r[5],E=r[6],S=r[7],e[4]=y*i+g*o+E*c+S*m,e[5]=y*n+g*l+E*d+S*p,e[6]=y*a+g*h+E*f+S*_,e[7]=y*s+g*u+E*v+S*x,y=r[8],g=r[9],E=r[10],S=r[11],e[8]=y*i+g*o+E*c+S*m,e[9]=y*n+g*l+E*d+S*p,e[10]=y*a+g*h+E*f+S*_,e[11]=y*s+g*u+E*v+S*x,y=r[12],g=r[13],E=r[14],S=r[15],e[12]=y*i+g*o+E*c+S*m,e[13]=y*n+g*l+E*d+S*p,e[14]=y*a+g*h+E*f+S*_,e[15]=y*s+g*u+E*v+S*x,e};le.multiplyAffine=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[4],o=t[5],l=t[6],h=t[8],u=t[9],c=t[10],d=t[12],f=t[13],v=t[14],m=r[0],p=r[1],_=r[2];return e[0]=m*i+p*s+_*h,e[1]=m*n+p*o+_*u,e[2]=m*a+p*l+_*c,m=r[4],p=r[5],_=r[6],e[4]=m*i+p*s+_*h,e[5]=m*n+p*o+_*u,e[6]=m*a+p*l+_*c,m=r[8],p=r[9],_=r[10],e[8]=m*i+p*s+_*h,e[9]=m*n+p*o+_*u,e[10]=m*a+p*l+_*c,m=r[12],p=r[13],_=r[14],e[12]=m*i+p*s+_*h+d,e[13]=m*n+p*o+_*u+f,e[14]=m*a+p*l+_*c+v,e};le.mul=le.multiply;le.mulAffine=le.multiplyAffine;le.translate=function(e,t,r){var i=r[0],n=r[1],a=r[2],s,o,l,h,u,c,d,f,v,m,p,_;return t===e?(e[12]=t[0]*i+t[4]*n+t[8]*a+t[12],e[13]=t[1]*i+t[5]*n+t[9]*a+t[13],e[14]=t[2]*i+t[6]*n+t[10]*a+t[14],e[15]=t[3]*i+t[7]*n+t[11]*a+t[15]):(s=t[0],o=t[1],l=t[2],h=t[3],u=t[4],c=t[5],d=t[6],f=t[7],v=t[8],m=t[9],p=t[10],_=t[11],e[0]=s,e[1]=o,e[2]=l,e[3]=h,e[4]=u,e[5]=c,e[6]=d,e[7]=f,e[8]=v,e[9]=m,e[10]=p,e[11]=_,e[12]=s*i+u*n+v*a+t[12],e[13]=o*i+c*n+m*a+t[13],e[14]=l*i+d*n+p*a+t[14],e[15]=h*i+f*n+_*a+t[15]),e};le.scale=function(e,t,r){var i=r[0],n=r[1],a=r[2];return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=t[3]*i,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};le.rotate=function(e,t,r,i){var n=i[0],a=i[1],s=i[2],o=Math.sqrt(n*n+a*a+s*s),l,h,u,c,d,f,v,m,p,_,x,y,g,E,S,R,b,M,F,w,U,O,N,G;return Math.abs(o)<Vr?null:(o=1/o,n*=o,a*=o,s*=o,l=Math.sin(r),h=Math.cos(r),u=1-h,c=t[0],d=t[1],f=t[2],v=t[3],m=t[4],p=t[5],_=t[6],x=t[7],y=t[8],g=t[9],E=t[10],S=t[11],R=n*n*u+h,b=a*n*u+s*l,M=s*n*u-a*l,F=n*a*u-s*l,w=a*a*u+h,U=s*a*u+n*l,O=n*s*u+a*l,N=a*s*u-n*l,G=s*s*u+h,e[0]=c*R+m*b+y*M,e[1]=d*R+p*b+g*M,e[2]=f*R+_*b+E*M,e[3]=v*R+x*b+S*M,e[4]=c*F+m*w+y*U,e[5]=d*F+p*w+g*U,e[6]=f*F+_*w+E*U,e[7]=v*F+x*w+S*U,e[8]=c*O+m*N+y*G,e[9]=d*O+p*N+g*G,e[10]=f*O+_*N+E*G,e[11]=v*O+x*N+S*G,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)};le.rotateX=function(e,t,r){var i=Math.sin(r),n=Math.cos(r),a=t[4],s=t[5],o=t[6],l=t[7],h=t[8],u=t[9],c=t[10],d=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*n+h*i,e[5]=s*n+u*i,e[6]=o*n+c*i,e[7]=l*n+d*i,e[8]=h*n-a*i,e[9]=u*n-s*i,e[10]=c*n-o*i,e[11]=d*n-l*i,e};le.rotateY=function(e,t,r){var i=Math.sin(r),n=Math.cos(r),a=t[0],s=t[1],o=t[2],l=t[3],h=t[8],u=t[9],c=t[10],d=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*n-h*i,e[1]=s*n-u*i,e[2]=o*n-c*i,e[3]=l*n-d*i,e[8]=a*i+h*n,e[9]=s*i+u*n,e[10]=o*i+c*n,e[11]=l*i+d*n,e};le.rotateZ=function(e,t,r){var i=Math.sin(r),n=Math.cos(r),a=t[0],s=t[1],o=t[2],l=t[3],h=t[4],u=t[5],c=t[6],d=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*n+h*i,e[1]=s*n+u*i,e[2]=o*n+c*i,e[3]=l*n+d*i,e[4]=h*n-a*i,e[5]=u*n-s*i,e[6]=c*n-o*i,e[7]=d*n-l*i,e};le.fromRotationTranslation=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3],o=i+i,l=n+n,h=a+a,u=i*o,c=i*l,d=i*h,f=n*l,v=n*h,m=a*h,p=s*o,_=s*l,x=s*h;return e[0]=1-(f+m),e[1]=c+x,e[2]=d-_,e[3]=0,e[4]=c-x,e[5]=1-(u+m),e[6]=v+p,e[7]=0,e[8]=d+_,e[9]=v-p,e[10]=1-(u+f),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e};le.fromQuat=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],s=r+r,o=i+i,l=n+n,h=r*s,u=i*s,c=i*o,d=n*s,f=n*o,v=n*l,m=a*s,p=a*o,_=a*l;return e[0]=1-c-v,e[1]=u+_,e[2]=d-p,e[3]=0,e[4]=u-_,e[5]=1-h-v,e[6]=f+m,e[7]=0,e[8]=d+p,e[9]=f-m,e[10]=1-h-c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};le.frustum=function(e,t,r,i,n,a,s){var o=1/(r-t),l=1/(n-i),h=1/(a-s);return e[0]=a*2*o,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*l,e[6]=0,e[7]=0,e[8]=(r+t)*o,e[9]=(n+i)*l,e[10]=(s+a)*h,e[11]=-1,e[12]=0,e[13]=0,e[14]=s*a*2*h,e[15]=0,e};le.perspective=function(e,t,r,i,n){var a=1/Math.tan(t/2),s=1/(i-n);return e[0]=a/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(n+i)*s,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*n*i*s,e[15]=0,e};le.ortho=function(e,t,r,i,n,a,s){var o=1/(t-r),l=1/(i-n),h=1/(a-s);return e[0]=-2*o,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*h,e[11]=0,e[12]=(t+r)*o,e[13]=(n+i)*l,e[14]=(s+a)*h,e[15]=1,e};le.lookAt=function(e,t,r,i){var n,a,s,o,l,h,u,c,d,f,v=t[0],m=t[1],p=t[2],_=i[0],x=i[1],y=i[2],g=r[0],E=r[1],S=r[2];return Math.abs(v-g)<Vr&&Math.abs(m-E)<Vr&&Math.abs(p-S)<Vr?le.identity(e):(u=v-g,c=m-E,d=p-S,f=1/Math.sqrt(u*u+c*c+d*d),u*=f,c*=f,d*=f,n=x*d-y*c,a=y*u-_*d,s=_*c-x*u,f=Math.sqrt(n*n+a*a+s*s),f?(f=1/f,n*=f,a*=f,s*=f):(n=0,a=0,s=0),o=c*s-d*a,l=d*n-u*s,h=u*a-c*n,f=Math.sqrt(o*o+l*l+h*h),f?(f=1/f,o*=f,l*=f,h*=f):(o=0,l=0,h=0),e[0]=n,e[1]=o,e[2]=u,e[3]=0,e[4]=a,e[5]=l,e[6]=c,e[7]=0,e[8]=s,e[9]=h,e[10]=d,e[11]=0,e[12]=-(n*v+a*m+s*p),e[13]=-(o*v+l*m+h*p),e[14]=-(u*v+c*m+d*p),e[15]=1,e)};le.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2)+Math.pow(e[9],2)+Math.pow(e[10],2)+Math.pow(e[11],2)+Math.pow(e[12],2)+Math.pow(e[13],2)+Math.pow(e[14],2)+Math.pow(e[15],2))};var C=le,X={};X.create=function(){var e=new Ie(3);return e[0]=0,e[1]=0,e[2]=0,e};X.clone=function(e){var t=new Ie(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t};X.fromValues=function(e,t,r){var i=new Ie(3);return i[0]=e,i[1]=t,i[2]=r,i};X.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};X.set=function(e,t,r,i){return e[0]=t,e[1]=r,e[2]=i,e};X.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e};X.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e};X.sub=X.subtract;X.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e};X.mul=X.multiply;X.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e};X.div=X.divide;X.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e};X.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e};X.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e};X.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e};X.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2];return Math.sqrt(r*r+i*i+n*n)};X.dist=X.distance;X.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2];return r*r+i*i+n*n};X.sqrDist=X.squaredDistance;X.length=function(e){var t=e[0],r=e[1],i=e[2];return Math.sqrt(t*t+r*r+i*i)};X.len=X.length;X.squaredLength=function(e){var t=e[0],r=e[1],i=e[2];return t*t+r*r+i*i};X.sqrLen=X.squaredLength;X.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e};X.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e};X.normalize=function(e,t){var r=t[0],i=t[1],n=t[2],a=r*r+i*i+n*n;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e};X.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]};X.cross=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=r[0],o=r[1],l=r[2];return e[0]=n*l-a*o,e[1]=a*s-i*l,e[2]=i*o-n*s,e};X.lerp=function(e,t,r,i){var n=t[0],a=t[1],s=t[2];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e[2]=s+i*(r[2]-s),e};X.random=function(e,t){t=t||1;var r=Kt()*2*Math.PI,i=Kt()*2-1,n=Math.sqrt(1-i*i)*t;return e[0]=Math.cos(r)*n,e[1]=Math.sin(r)*n,e[2]=i*t,e};X.transformMat4=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=r[3]*i+r[7]*n+r[11]*a+r[15];return s=s||1,e[0]=(r[0]*i+r[4]*n+r[8]*a+r[12])/s,e[1]=(r[1]*i+r[5]*n+r[9]*a+r[13])/s,e[2]=(r[2]*i+r[6]*n+r[10]*a+r[14])/s,e};X.transformMat3=function(e,t,r){var i=t[0],n=t[1],a=t[2];return e[0]=i*r[0]+n*r[3]+a*r[6],e[1]=i*r[1]+n*r[4]+a*r[7],e[2]=i*r[2]+n*r[5]+a*r[8],e};X.transformQuat=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=r[0],o=r[1],l=r[2],h=r[3],u=h*i+o*a-l*n,c=h*n+l*i-s*a,d=h*a+s*n-o*i,f=-s*i-o*n-l*a;return e[0]=u*h+f*-s+c*-l-d*-o,e[1]=c*h+f*-o+d*-s-u*-l,e[2]=d*h+f*-l+u*-o-c*-s,e};X.rotateX=function(e,t,r,i){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[0],a[1]=n[1]*Math.cos(i)-n[2]*Math.sin(i),a[2]=n[1]*Math.sin(i)+n[2]*Math.cos(i),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};X.rotateY=function(e,t,r,i){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[2]*Math.sin(i)+n[0]*Math.cos(i),a[1]=n[1],a[2]=n[2]*Math.cos(i)-n[0]*Math.sin(i),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};X.rotateZ=function(e,t,r,i){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[0]*Math.cos(i)-n[1]*Math.sin(i),a[1]=n[0]*Math.sin(i)+n[1]*Math.cos(i),a[2]=n[2],e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};X.forEach=function(){var e=X.create();return function(t,r,i,n,a,s){var o,l;for(r||(r=3),i||(i=0),n?l=Math.min(n*r+i,t.length):l=t.length,o=i;o<l;o+=r)e[0]=t[o],e[1]=t[o+1],e[2]=t[o+2],a(e,e,s),t[o]=e[0],t[o+1]=e[1],t[o+2]=e[2];return t}}();X.angle=function(e,t){var r=X.fromValues(e[0],e[1],e[2]),i=X.fromValues(t[0],t[1],t[2]);X.normalize(r,r),X.normalize(i,i);var n=X.dot(r,i);return n>1?0:Math.acos(n)};var T=X;L.import(wa);var de=C.create,On={};function Bn(e){return e.material}function zo(e,t,r){return t.uniforms[r].value}function Go(e,t,r,i){return r!==i}function ko(e){return!0}function Fn(){}var Un={float:A.FLOAT,byte:A.BYTE,ubyte:A.UNSIGNED_BYTE,short:A.SHORT,ushort:A.UNSIGNED_SHORT};function Vo(e,t,r){this.availableAttributes=e,this.availableAttributeSymbols=t,this.indicesBuffer=r,this.vao=null}function Wo(e){var t,r;this.bind=function(i){t||(t=be.createCanvas(),t.width=t.height=1,t.getContext("2d"));var n=i.gl,a=!r;a&&(r=n.createTexture()),n.bindTexture(n.TEXTURE_2D,r),a&&n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t)},this.unbind=function(i){i.gl.bindTexture(i.gl.TEXTURE_2D,null)},this.isRenderable=function(){return!0}}var wt=Ye.extend(function(){return{canvas:null,_width:100,_height:100,devicePixelRatio:typeof window<"u"&&window.devicePixelRatio||1,clearColor:[0,0,0,0],clearBit:17664,alpha:!0,depth:!0,stencil:!1,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!1,throwError:!0,gl:null,viewport:{},maxJointNumber:20,__currentFrameBuffer:null,_viewportStack:[],_clearStack:[],_sceneRendering:null}},function(){this.canvas||(this.canvas=be.createCanvas());var e=this.canvas;try{var t={alpha:this.alpha,depth:this.depth,stencil:this.stencil,antialias:this.antialias,premultipliedAlpha:this.premultipliedAlpha,preserveDrawingBuffer:this.preserveDrawingBuffer};if(this.gl=e.getContext("webgl",t)||e.getContext("experimental-webgl",t),!this.gl)throw new Error;this._glinfo=new go(this.gl),this.gl.targetRenderer&&console.error("Already created a renderer"),this.gl.targetRenderer=this,this.resize()}catch(r){throw"Error creating WebGL Context "+r}this._programMgr=new Ea(this),this._placeholderTexture=new Wo(this)},{resize:function(e,t){var r=this.canvas,i=this.devicePixelRatio;e!=null?(r.style&&(r.style.width=e+"px",r.style.height=t+"px"),r.width=e*i,r.height=t*i,this._width=e,this._height=t):(this._width=r.width/i,this._height=r.height/i),this.setViewport(0,0,this._width,this._height)},getWidth:function(){return this._width},getHeight:function(){return this._height},getViewportAspect:function(){var e=this.viewport;return e.width/e.height},setDevicePixelRatio:function(e){this.devicePixelRatio=e,this.resize(this._width,this._height)},getDevicePixelRatio:function(){return this.devicePixelRatio},getGLExtension:function(e){return this._glinfo.getExtension(e)},getGLParameter:function(e){return this._glinfo.getParameter(e)},setViewport:function(e,t,r,i,n){if(typeof e=="object"){var a=e;e=a.x,t=a.y,r=a.width,i=a.height,n=a.devicePixelRatio}n=n||this.devicePixelRatio,this.gl.viewport(e*n,t*n,r*n,i*n),this.viewport={x:e,y:t,width:r,height:i,devicePixelRatio:n}},saveViewport:function(){this._viewportStack.push(this.viewport)},restoreViewport:function(){this._viewportStack.length>0&&this.setViewport(this._viewportStack.pop())},saveClear:function(){this._clearStack.push({clearBit:this.clearBit,clearColor:this.clearColor})},restoreClear:function(){if(this._clearStack.length>0){var e=this._clearStack.pop();this.clearColor=e.clearColor,this.clearBit=e.clearBit}},bindSceneRendering:function(e){this._sceneRendering=e},render:function(e,t,r,i){var n=this.gl,a=this.clearColor;if(this.clearBit){n.colorMask(!0,!0,!0,!0),n.depthMask(!0);var s=this.viewport,o=!1,l=s.devicePixelRatio;(s.width!==this._width||s.height!==this._height||l&&l!==this.devicePixelRatio||s.x||s.y)&&(o=!0,n.enable(n.SCISSOR_TEST),n.scissor(s.x*l,s.y*l,s.width*l,s.height*l)),n.clearColor(a[0],a[1],a[2],a[3]),n.clear(this.clearBit),o&&n.disable(n.SCISSOR_TEST)}if(r||e.update(!1),e.updateLights(),t=t||e.getMainCamera(),!t){console.error("Can't find camera in the scene.");return}t.update();var h=e.updateRenderList(t,!0);this._sceneRendering=e;var u=h.opaque,c=h.transparent,d=e.material;e.trigger("beforerender",this,e,t,h),i?(this.renderPreZ(u,e,t),n.depthFunc(n.LEQUAL)):n.depthFunc(n.LESS);for(var f=de(),v=T.create(),m=0;m<c.length;m++){var p=c[m];C.multiplyAffine(f,t.viewMatrix.array,p.worldTransform.array),T.transformMat4(v,p.position.array,f),p.__depth=v[2]}this.renderPass(u,t,{getMaterial:function(_){return d||_.material},sortCompare:this.opaqueSortCompare}),this.renderPass(c,t,{getMaterial:function(_){return d||_.material},sortCompare:this.transparentSortCompare}),e.trigger("afterrender",this,e,t,h),this._sceneRendering=null},getProgram:function(e,t,r){return t=t||e.material,this._programMgr.getProgram(e,t,r)},validateProgram:function(e){if(e.__error){var t=e.__error;if(On[e.__uid__])return;if(On[e.__uid__]=!0,this.throwError)throw new Error(t);this.trigger("error",t)}},updatePrograms:function(e,t,r){var i=r&&r.getMaterial||Bn;t=t||null;for(var n=0;n<e.length;n++){var a=e[n],s=i.call(this,a);if(n>0){var o=e[n-1],l=o.joints?o.joints.length:0,h=a.joints?a.joints.length:0;if(h===l&&a.material===o.material&&a.lightGroup===o.lightGroup){a.__program=o.__program;continue}}var u=this._programMgr.getProgram(a,s,t);this.validateProgram(u),a.__program=u}},renderPass:function(e,t,r){this.trigger("beforerenderpass",this,e,t,r),r=r||{},r.getMaterial=r.getMaterial||Bn,r.getUniform=r.getUniform||zo,r.isMaterialChanged=r.isMaterialChanged||Go,r.beforeRender=r.beforeRender||Fn,r.afterRender=r.afterRender||Fn;var i=r.ifRender||ko;this.updatePrograms(e,this._sceneRendering,r),r.sortCompare&&e.sort(r.sortCompare);var n=this.viewport,a=n.devicePixelRatio,s=[n.x*a,n.y*a,n.width*a,n.height*a],o=this.devicePixelRatio,l=this.__currentFrameBuffer?[this.__currentFrameBuffer.getTextureWidth(),this.__currentFrameBuffer.getTextureHeight()]:[this._width*o,this._height*o],h=[s[2],s[3]],u=Date.now();t?(C.copy(fe.VIEW,t.viewMatrix.array),C.copy(fe.PROJECTION,t.projectionMatrix.array),C.copy(fe.VIEWINVERSE,t.worldTransform.array)):(C.identity(fe.VIEW),C.identity(fe.PROJECTION),C.identity(fe.VIEWINVERSE)),C.multiply(fe.VIEWPROJECTION,fe.PROJECTION,fe.VIEW),C.invert(fe.PROJECTIONINVERSE,fe.PROJECTION),C.invert(fe.VIEWPROJECTIONINVERSE,fe.VIEWPROJECTION);for(var c=this.gl,d=this._sceneRendering,f,v,m,p,_,x,y,g,E,S,R,b,M=null,F=0;F<e.length;F++){var w=e[F],U=w.worldTransform!=null,O;if(!!i(w)){U&&(O=w.isSkinnedMesh&&w.isSkinnedMesh()?w.offsetMatrix?w.offsetMatrix.array:fe.IDENTITY:w.worldTransform.array);var N=w.geometry,G=r.getMaterial.call(this,w),B=w.__program,Z=G.shader,I=N.__uid__+"-"+B.__uid__,ce=I!==S;S=I,ce&&M&&M.bindVertexArrayOES(null),U&&(C.copy(fe.WORLD,O),C.multiply(fe.WORLDVIEWPROJECTION,fe.VIEWPROJECTION,O),C.multiplyAffine(fe.WORLDVIEW,fe.VIEW,O),(Z.matrixSemantics.WORLDINVERSE||Z.matrixSemantics.WORLDINVERSETRANSPOSE)&&C.invert(fe.WORLDINVERSE,O),(Z.matrixSemantics.WORLDVIEWINVERSE||Z.matrixSemantics.WORLDVIEWINVERSETRANSPOSE)&&C.invert(fe.WORLDVIEWINVERSE,fe.WORLDVIEW),(Z.matrixSemantics.WORLDVIEWPROJECTIONINVERSE||Z.matrixSemantics.WORLDVIEWPROJECTIONINVERSETRANSPOSE)&&C.invert(fe.WORLDVIEWPROJECTIONINVERSE,fe.WORLDVIEWPROJECTION)),w.beforeRender&&w.beforeRender(this),r.beforeRender.call(this,w,G,f);var k=B!==v;k?(B.bind(this),B.setUniformOfSemantic(c,"VIEWPORT",s),B.setUniformOfSemantic(c,"WINDOW_SIZE",l),t&&(B.setUniformOfSemantic(c,"NEAR",t.near),B.setUniformOfSemantic(c,"FAR",t.far)),B.setUniformOfSemantic(c,"DEVICEPIXELRATIO",a),B.setUniformOfSemantic(c,"TIME",u),B.setUniformOfSemantic(c,"VIEWPORT_SIZE",h),d&&d.setLightUniforms(B,w.lightGroup,this)):B=v,(k||r.isMaterialChanged(w,m,G,f))&&(G.depthTest!==p&&(G.depthTest?c.enable(c.DEPTH_TEST):c.disable(c.DEPTH_TEST),p=G.depthTest),G.depthMask!==_&&(c.depthMask(G.depthMask),_=G.depthMask),G.transparent!==E&&(G.transparent?c.enable(c.BLEND):c.disable(c.BLEND),E=G.transparent),G.transparent&&(G.blend?G.blend(c):(c.blendEquationSeparate(c.FUNC_ADD,c.FUNC_ADD),c.blendFuncSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA))),b=this._bindMaterial(w,G,B,m||null,f||null,v||null,r.getUniform),f=G);var ye=Z.matrixSemanticKeys;if(U)for(var ae=0;ae<ye.length;ae++){var ve=ye[ae],me=Z.matrixSemantics[ve],Oe=fe[ve];if(me.isTranspose){var Be=fe[me.semanticNoTranspose];C.transpose(Oe,Be)}B.setUniform(c,me.type,me.symbol,Oe)}w.cullFace!==y&&(y=w.cullFace,c.cullFace(y)),w.frontFace!==g&&(g=w.frontFace,c.frontFace(g)),w.culling!==x&&(x=w.culling,x?c.enable(c.CULL_FACE):c.disable(c.CULL_FACE)),this._updateSkeleton(w,B,b),ce&&(R=this._bindVAO(M,Z,N,B)),this._renderObject(w,R,B),r.afterRender(this,w),w.afterRender&&w.afterRender(this),v=B,m=w}}this.trigger("afterrenderpass",this,e,t,r)},getMaxJointNumber:function(){return this.maxJointNumber},_updateSkeleton:function(e,t,r){var i=this.gl,n=e.skeleton;if(n)if(n.update(),e.joints.length>this.getMaxJointNumber()){var a=n.getSubSkinMatricesTexture(e.__uid__,e.joints);t.useTextureSlot(this,a,r),t.setUniform(i,"1i","skinMatricesTexture",r),t.setUniform(i,"1f","skinMatricesTextureSize",a.width)}else{var s=n.getSubSkinMatrices(e.__uid__,e.joints);t.setUniformOfSemantic(i,"SKIN_MATRIX",s)}},_renderObject:function(e,t,r){var i=this.gl,n=e.geometry,a=e.mode;a==null&&(a=4);var s=null,o=e.isInstancedMesh&&e.isInstancedMesh();if(o&&(s=this.getGLExtension("ANGLE_instanced_arrays"),!s)){console.warn("Device not support ANGLE_instanced_arrays extension");return}var l;if(o&&(l=this._bindInstancedAttributes(e,r,s)),t.indicesBuffer){var h=this.getGLExtension("OES_element_index_uint"),u=h&&n.indices instanceof Uint32Array,c=u?i.UNSIGNED_INT:i.UNSIGNED_SHORT;o?s.drawElementsInstancedANGLE(a,t.indicesBuffer.count,c,0,e.getInstanceCount()):i.drawElements(a,t.indicesBuffer.count,c,0)}else o?s.drawArraysInstancedANGLE(a,0,n.vertexCount,e.getInstanceCount()):i.drawArrays(a,0,n.vertexCount);if(o)for(var d=0;d<l.length;d++)i.disableVertexAttribArray(l[d])},_bindInstancedAttributes:function(e,t,r){for(var i=this.gl,n=e.getInstancedAttributesBuffers(this),a=[],s=0;s<n.length;s++){var o=n[s],l=t.getAttribLocation(i,o.symbol);if(!(l<0)){var h=Un[o.type]||i.FLOAT;i.enableVertexAttribArray(l),i.bindBuffer(i.ARRAY_BUFFER,o.buffer),i.vertexAttribPointer(l,o.size,h,!1,0,0),r.vertexAttribDivisorANGLE(l,o.divisor),a.push(l)}}return a},_bindMaterial:function(e,t,r,i,n,a,s){for(var o=this.gl,l=a===r,h=r.currentTextureSlot(),u=t.getEnabledUniforms(),c=t.getTextureUniforms(),d=this._placeholderTexture,f=0;f<c.length;f++){var v=c[f],m=s(e,t,v),p=t.uniforms[v].type;if(p==="t"&&m)m.__slot=-1;else if(p==="tv")for(var _=0;_<m.length;_++)m[_]&&(m[_].__slot=-1)}d.__slot=-1;for(var f=0;f<u.length;f++){var v=u[f],x=t.uniforms[v],m=s(e,t,v),p=x.type,y=p==="t";if(y&&(!m||!m.isRenderable())&&(m=d),n&&l){var g=s(i,n,v);if(y&&(!g||!g.isRenderable())&&(g=d),g===m){if(y)r.takeCurrentTextureSlot(this,null);else if(p==="tv"&&m)for(var _=0;_<m.length;_++)r.takeCurrentTextureSlot(this,null);continue}}if(m!=null)if(y)if(m.__slot<0){var E=r.currentTextureSlot(),S=r.setUniform(o,"1i",v,E);S&&(r.takeCurrentTextureSlot(this,m),m.__slot=E)}else r.setUniform(o,"1i",v,m.__slot);else if(Array.isArray(m)){if(m.length===0)continue;if(p==="tv"){if(!r.hasUniform(v))continue;for(var R=[],_=0;_<m.length;_++){var b=m[_];if(b.__slot<0){var E=r.currentTextureSlot();R.push(E),r.takeCurrentTextureSlot(this,b),b.__slot=E}else R.push(b.__slot)}r.setUniform(o,"1iv",v,R)}else r.setUniform(o,x.type,v,m)}else r.setUniform(o,x.type,v,m)}var M=r.currentTextureSlot();return r.resetTextureSlot(h),M},_bindVAO:function(e,t,r,i){var n=!r.dynamic,a=this.gl,s=this.__uid__+"-"+i.__uid__,o=r.__vaoCache[s];if(!o){var l=r.getBufferChunks(this);if(!l||!l.length)return;for(var h=l[0],u=h.attributeBuffers,g=h.indicesBuffer,y=[],c=[],d=0;d<u.length;d++){var f=u[d],v=f.name,m=f.semantic,p;if(m){var _=t.attributeSemantics[m];p=_&&_.symbol}else p=v;p&&i.attributes[p]&&(y.push(f),c.push(p))}o=new Vo(y,c,g),n&&(r.__vaoCache[s]=o)}var x=!0;e&&n&&(o.vao==null?o.vao=e.createVertexArrayOES():x=!1,e.bindVertexArrayOES(o.vao));var y=o.availableAttributes,g=o.indicesBuffer;if(x){for(var E=i.enableAttributes(this,o.availableAttributeSymbols,e&&n&&o),d=0;d<y.length;d++){var S=E[d];if(S!==-1){var f=y[d],R=f.buffer,b=f.size,M=Un[f.type]||a.FLOAT;a.bindBuffer(a.ARRAY_BUFFER,R),a.vertexAttribPointer(S,b,M,!1,0,0)}}r.isUseIndices()&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.buffer)}return o},renderPreZ:function(e,t,r){var i=this.gl,n=this._prezMaterial||new yt({shader:new L(L.source("clay.prez.vertex"),L.source("clay.prez.fragment"))});this._prezMaterial=n,i.colorMask(!1,!1,!1,!1),i.depthMask(!0),this.renderPass(e,r,{ifRender:function(a){return!a.ignorePreZ},isMaterialChanged:function(a,s){var o=a.material,l=s.material;return o.get("diffuseMap")!==l.get("diffuseMap")||(o.get("alphaCutoff")||0)!==(l.get("alphaCutoff")||0)},getUniform:function(a,s,o){if(o==="alphaMap")return a.material.get("diffuseMap");if(o==="alphaCutoff"){if(a.material.isDefined("fragment","ALPHA_TEST")&&a.material.get("diffuseMap")){var l=a.material.get("alphaCutoff");return l||0}return 0}else return o==="uvRepeat"?a.material.get("uvRepeat"):o==="uvOffset"?a.material.get("uvOffset"):s.get(o)},getMaterial:function(){return n},sort:this.opaqueSortCompare}),i.colorMask(!0,!0,!0,!0),i.depthMask(!0)},disposeScene:function(e){this.disposeNode(e,!0,!0),e.dispose()},disposeNode:function(e,t,r){e.getParent()&&e.getParent().remove(e);var i={};e.traverse(function(n){var a=n.material;if(n.geometry&&t&&n.geometry.dispose(this),r&&a&&!i[a.__uid__]){for(var s=a.getTextureUniforms(),o=0;o<s.length;o++){var l=s[o],h=a.uniforms[l].value,u=a.uniforms[l].type;if(!!h){if(u==="t")h.dispose&&h.dispose(this);else if(u==="tv")for(var c=0;c<h.length;c++)h[c]&&h[c].dispose&&h[c].dispose(this)}}i[a.__uid__]=!0}n.dispose&&n.dispose(this)},this)},disposeGeometry:function(e){e.dispose(this)},disposeTexture:function(e){e.dispose(this)},disposeFrameBuffer:function(e){e.dispose(this)},dispose:function(){},screenToNDC:function(e,t,r){r||(r=new $e),t=this._height-t;var i=this.viewport,n=r.array;return n[0]=(e-i.x)/i.width,n[0]=n[0]*2-1,n[1]=(t-i.y)/i.height,n[1]=n[1]*2-1,r}});wt.opaqueSortCompare=wt.prototype.opaqueSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.renderOrder-t.renderOrder};wt.transparentSortCompare=wt.prototype.transparentSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__depth===t.__depth?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.__depth-t.__depth:e.renderOrder-t.renderOrder};var fe={IDENTITY:de(),WORLD:de(),VIEW:de(),PROJECTION:de(),WORLDVIEW:de(),VIEWPROJECTION:de(),WORLDVIEWPROJECTION:de(),WORLDINVERSE:de(),VIEWINVERSE:de(),PROJECTIONINVERSE:de(),WORLDVIEWINVERSE:de(),VIEWPROJECTIONINVERSE:de(),WORLDVIEWPROJECTIONINVERSE:de(),WORLDTRANSPOSE:de(),VIEWTRANSPOSE:de(),PROJECTIONTRANSPOSE:de(),WORLDVIEWTRANSPOSE:de(),VIEWPROJECTIONTRANSPOSE:de(),WORLDVIEWPROJECTIONTRANSPOSE:de(),WORLDINVERSETRANSPOSE:de(),VIEWINVERSETRANSPOSE:de(),PROJECTIONINVERSETRANSPOSE:de(),WORLDVIEWINVERSETRANSPOSE:de(),VIEWPROJECTIONINVERSETRANSPOSE:de(),WORLDVIEWPROJECTIONINVERSETRANSPOSE:de()};wt.COLOR_BUFFER_BIT=A.COLOR_BUFFER_BIT;wt.DEPTH_BUFFER_BIT=A.DEPTH_BUFFER_BIT;wt.STENCIL_BUFFER_BIT=A.STENCIL_BUFFER_BIT;var vr=wt,W=function(e,t,r){e=e||0,t=t||0,r=r||0,this.array=T.fromValues(e,t,r),this._dirty=!0};W.prototype={constructor:W,add:function(e){return T.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,r){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this._dirty=!0,this},clone:function(){return new W(this.x,this.y,this.z)},copy:function(e){return T.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return T.cross(this.array,e.array,t.array),this._dirty=!0,this},dist:function(e){return T.dist(this.array,e.array)},distance:function(e){return T.distance(this.array,e.array)},div:function(e){return T.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return T.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return T.dot(this.array,e.array)},len:function(){return T.len(this.array)},length:function(){return T.length(this.array)},lerp:function(e,t,r){return T.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return T.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return T.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return T.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return T.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return T.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return T.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return T.random(this.array,e),this._dirty=!0,this},scale:function(e){return T.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return T.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return T.sqrDist(this.array,e.array)},squaredDistance:function(e){return T.squaredDistance(this.array,e.array)},sqrLen:function(){return T.sqrLen(this.array)},squaredLength:function(){return T.squaredLength(this.array)},sub:function(e){return T.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return T.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return T.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return T.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return T.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},applyProjection:function(e){var t=this.array;if(e=e.array,e[15]===0){var r=-1/t[2];t[0]=e[0]*t[0]*r,t[1]=e[5]*t[1]*r,t[2]=(e[10]*t[2]+e[14])*r}else t[0]=e[0]*t[0]+e[12],t[1]=e[5]*t[1]+e[13],t[2]=e[10]*t[2]+e[14];return this._dirty=!0,this},eulerFromQuat:function(e,t){W.eulerFromQuat(this,e,t)},eulerFromMat3:function(e,t){W.eulerFromMat3(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Dr=Object.defineProperty;if(Dr){var yi=W.prototype;Dr(yi,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Dr(yi,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),Dr(yi,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}})}W.add=function(e,t,r){return T.add(e.array,t.array,r.array),e._dirty=!0,e};W.set=function(e,t,r,i){T.set(e.array,t,r,i),e._dirty=!0};W.copy=function(e,t){return T.copy(e.array,t.array),e._dirty=!0,e};W.cross=function(e,t,r){return T.cross(e.array,t.array,r.array),e._dirty=!0,e};W.dist=function(e,t){return T.distance(e.array,t.array)};W.distance=W.dist;W.div=function(e,t,r){return T.divide(e.array,t.array,r.array),e._dirty=!0,e};W.divide=W.div;W.dot=function(e,t){return T.dot(e.array,t.array)};W.len=function(e){return T.length(e.array)};W.lerp=function(e,t,r,i){return T.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};W.min=function(e,t,r){return T.min(e.array,t.array,r.array),e._dirty=!0,e};W.max=function(e,t,r){return T.max(e.array,t.array,r.array),e._dirty=!0,e};W.mul=function(e,t,r){return T.multiply(e.array,t.array,r.array),e._dirty=!0,e};W.multiply=W.mul;W.negate=function(e,t){return T.negate(e.array,t.array),e._dirty=!0,e};W.normalize=function(e,t){return T.normalize(e.array,t.array),e._dirty=!0,e};W.random=function(e,t){return T.random(e.array,t),e._dirty=!0,e};W.scale=function(e,t,r){return T.scale(e.array,t.array,r),e._dirty=!0,e};W.scaleAndAdd=function(e,t,r,i){return T.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};W.sqrDist=function(e,t){return T.sqrDist(e.array,t.array)};W.squaredDistance=W.sqrDist;W.sqrLen=function(e){return T.sqrLen(e.array)};W.squaredLength=W.sqrLen;W.sub=function(e,t,r){return T.subtract(e.array,t.array,r.array),e._dirty=!0,e};W.subtract=W.sub;W.transformMat3=function(e,t,r){return T.transformMat3(e.array,t.array,r.array),e._dirty=!0,e};W.transformMat4=function(e,t,r){return T.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};W.transformQuat=function(e,t,r){return T.transformQuat(e.array,t.array,r.array),e._dirty=!0,e};function Je(e,t,r){return e<t?t:e>r?r:e}var oe=Math.atan2,et=Math.asin,Xt=Math.abs;W.eulerFromQuat=function(e,t,d){e._dirty=!0,t=t.array;var i=e.array,n=t[0],a=t[1],s=t[2],o=t[3],l=n*n,h=a*a,u=s*s,c=o*o,d=(d||"XYZ").toUpperCase();switch(d){case"XYZ":i[0]=oe(2*(n*o-a*s),c-l-h+u),i[1]=et(Je(2*(n*s+a*o),-1,1)),i[2]=oe(2*(s*o-n*a),c+l-h-u);break;case"YXZ":i[0]=et(Je(2*(n*o-a*s),-1,1)),i[1]=oe(2*(n*s+a*o),c-l-h+u),i[2]=oe(2*(n*a+s*o),c-l+h-u);break;case"ZXY":i[0]=et(Je(2*(n*o+a*s),-1,1)),i[1]=oe(2*(a*o-s*n),c-l-h+u),i[2]=oe(2*(s*o-n*a),c-l+h-u);break;case"ZYX":i[0]=oe(2*(n*o+s*a),c-l-h+u),i[1]=et(Je(2*(a*o-n*s),-1,1)),i[2]=oe(2*(n*a+s*o),c+l-h-u);break;case"YZX":i[0]=oe(2*(n*o-s*a),c-l+h-u),i[1]=oe(2*(a*o-n*s),c+l-h-u),i[2]=et(Je(2*(n*a+s*o),-1,1));break;case"XZY":i[0]=oe(2*(n*o+a*s),c-l+h-u),i[1]=oe(2*(n*s+a*o),c+l-h-u),i[2]=et(Je(2*(s*o-n*a),-1,1));break;default:console.warn("Unkown order: "+d)}return e};W.eulerFromMat3=function(e,t,v){var i=t.array,n=i[0],a=i[3],s=i[6],o=i[1],l=i[4],h=i[7],u=i[2],c=i[5],d=i[8],f=e.array,v=(v||"XYZ").toUpperCase();switch(v){case"XYZ":f[1]=et(Je(s,-1,1)),Xt(s)<.99999?(f[0]=oe(-h,d),f[2]=oe(-a,n)):(f[0]=oe(c,l),f[2]=0);break;case"YXZ":f[0]=et(-Je(h,-1,1)),Xt(h)<.99999?(f[1]=oe(s,d),f[2]=oe(o,l)):(f[1]=oe(-u,n),f[2]=0);break;case"ZXY":f[0]=et(Je(c,-1,1)),Xt(c)<.99999?(f[1]=oe(-u,d),f[2]=oe(-a,l)):(f[1]=0,f[2]=oe(o,n));break;case"ZYX":f[1]=et(-Je(u,-1,1)),Xt(u)<.99999?(f[0]=oe(c,d),f[2]=oe(o,n)):(f[0]=0,f[2]=oe(-a,l));break;case"YZX":f[2]=et(Je(o,-1,1)),Xt(o)<.99999?(f[0]=oe(-h,l),f[1]=oe(-u,n)):(f[0]=0,f[1]=oe(s,d));break;case"XZY":f[2]=et(-Je(a,-1,1)),Xt(a)<.99999?(f[0]=oe(c,l),f[1]=oe(s,n)):(f[0]=oe(-h,d),f[1]=0);break;default:console.warn("Unkown order: "+v)}return e._dirty=!0,e};Object.defineProperties(W,{POSITIVE_X:{get:function(){return new W(1,0,0)}},NEGATIVE_X:{get:function(){return new W(-1,0,0)}},POSITIVE_Y:{get:function(){return new W(0,1,0)}},NEGATIVE_Y:{get:function(){return new W(0,-1,0)}},POSITIVE_Z:{get:function(){return new W(0,0,1)}},NEGATIVE_Z:{get:function(){return new W(0,0,-1)}},UP:{get:function(){return new W(0,1,0)}},ZERO:{get:function(){return new W}}});var P=W,xi=1e-5,Wr=function(e,t){this.origin=e||new P,this.direction=t||new P};Wr.prototype={constructor:Wr,intersectPlane:function(e,t){var r=e.normal.array,i=e.distance,n=this.origin.array,a=this.direction.array,s=T.dot(r,a);if(s===0)return null;t||(t=new P);var o=(T.dot(r,n)-i)/s;return T.scaleAndAdd(t.array,n,a,-o),t._dirty=!0,t},mirrorAgainstPlane:function(e){var t=T.dot(e.normal.array,this.direction.array);T.scaleAndAdd(this.direction.array,this.direction.array,e.normal.array,-t*2),this.direction._dirty=!0},distanceToPoint:function(){var e=T.create();return function(t){T.sub(e,t,this.origin.array);var r=T.dot(e,this.direction.array);if(r<0)return T.distance(this.origin.array,t);var i=T.lenSquared(e);return Math.sqrt(i-r*r)}}(),intersectSphere:function(){var e=T.create();return function(t,r,i){var n=this.origin.array,a=this.direction.array;t=t.array,T.sub(e,t,n);var s=T.dot(e,a),o=T.squaredLength(e),l=o-s*s,h=r*r;if(!(l>h)){var u=Math.sqrt(h-l),c=s-u,d=s+u;return i||(i=new P),c<0?d<0?null:(T.scaleAndAdd(i.array,n,a,d),i):(T.scaleAndAdd(i.array,n,a,c),i)}}}(),intersectBoundingBox:function(e,t){var r=this.direction.array,i=this.origin.array,n=e.min.array,a=e.max.array,s=1/r[0],o=1/r[1],l=1/r[2],h,u,c,d,f,v;if(s>=0?(h=(n[0]-i[0])*s,u=(a[0]-i[0])*s):(u=(n[0]-i[0])*s,h=(a[0]-i[0])*s),o>=0?(c=(n[1]-i[1])*o,d=(a[1]-i[1])*o):(d=(n[1]-i[1])*o,c=(a[1]-i[1])*o),h>d||c>u||((c>h||h!==h)&&(h=c),(d<u||u!==u)&&(u=d),l>=0?(f=(n[2]-i[2])*l,v=(a[2]-i[2])*l):(v=(n[2]-i[2])*l,f=(a[2]-i[2])*l),h>v||f>u)||((f>h||h!==h)&&(h=f),(v<u||u!==u)&&(u=v),u<0))return null;var m=h>=0?h:u;return t||(t=new P),T.scaleAndAdd(t.array,i,r,m),t},intersectTriangle:function(){var e=T.create(),t=T.create(),r=T.create(),i=T.create();return function(n,a,s,o,l,h){var u=this.direction.array,c=this.origin.array;n=n.array,a=a.array,s=s.array,T.sub(e,a,n),T.sub(t,s,n),T.cross(i,t,u);var d=T.dot(e,i);if(o){if(d>-xi)return null}else if(d>-xi&&d<xi)return null;T.sub(r,c,n);var f=T.dot(i,r)/d;if(f<0||f>1)return null;T.cross(i,e,r);var v=T.dot(u,i)/d;if(v<0||v>1||f+v>1)return null;T.cross(i,e,t);var m=-T.dot(r,i)/d;return m<0?null:(l||(l=new P),h&&P.set(h,1-f-v,f,v),T.scaleAndAdd(l.array,c,u,m),l)}}(),applyTransform:function(e){P.add(this.direction,this.direction,this.origin),P.transformMat4(this.origin,this.origin,e),P.transformMat4(this.direction,this.direction,e),P.sub(this.direction,this.direction,this.origin),P.normalize(this.direction,this.direction)},copy:function(e){P.copy(this.origin,e.origin),P.copy(this.direction,e.direction)},clone:function(){var e=new Wr;return e.copy(this),e}};var $r=Wr,K={};K.create=function(){var e=new Ie(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e};K.clone=function(e){var t=new Ie(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};K.fromValues=function(e,t,r,i){var n=new Ie(4);return n[0]=e,n[1]=t,n[2]=r,n[3]=i,n};K.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};K.set=function(e,t,r,i,n){return e[0]=t,e[1]=r,e[2]=i,e[3]=n,e};K.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e};K.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e};K.sub=K.subtract;K.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e};K.mul=K.multiply;K.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e};K.div=K.divide;K.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e};K.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e};K.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e};K.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e[3]=t[3]+r[3]*i,e};K.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2],a=t[3]-e[3];return Math.sqrt(r*r+i*i+n*n+a*a)};K.dist=K.distance;K.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2],a=t[3]-e[3];return r*r+i*i+n*n+a*a};K.sqrDist=K.squaredDistance;K.length=function(e){var t=e[0],r=e[1],i=e[2],n=e[3];return Math.sqrt(t*t+r*r+i*i+n*n)};K.len=K.length;K.squaredLength=function(e){var t=e[0],r=e[1],i=e[2],n=e[3];return t*t+r*r+i*i+n*n};K.sqrLen=K.squaredLength;K.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e};K.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e};K.normalize=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],s=r*r+i*i+n*n+a*a;return s>0&&(s=1/Math.sqrt(s),e[0]=t[0]*s,e[1]=t[1]*s,e[2]=t[2]*s,e[3]=t[3]*s),e};K.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]};K.lerp=function(e,t,r,i){var n=t[0],a=t[1],s=t[2],o=t[3];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e[2]=s+i*(r[2]-s),e[3]=o+i*(r[3]-o),e};K.random=function(e,t){return t=t||1,e[0]=Kt(),e[1]=Kt(),e[2]=Kt(),e[3]=Kt(),K.normalize(e,e),K.scale(e,e,t),e};K.transformMat4=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3];return e[0]=r[0]*i+r[4]*n+r[8]*a+r[12]*s,e[1]=r[1]*i+r[5]*n+r[9]*a+r[13]*s,e[2]=r[2]*i+r[6]*n+r[10]*a+r[14]*s,e[3]=r[3]*i+r[7]*n+r[11]*a+r[15]*s,e};K.transformQuat=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=r[0],o=r[1],l=r[2],h=r[3],u=h*i+o*a-l*n,c=h*n+l*i-s*a,d=h*a+s*n-o*i,f=-s*i-o*n-l*a;return e[0]=u*h+f*-s+c*-l-d*-o,e[1]=c*h+f*-o+d*-s-u*-l,e[2]=d*h+f*-l+u*-o-c*-s,e};K.forEach=function(){var e=K.create();return function(t,r,i,n,a,s){var o,l;for(r||(r=4),i||(i=0),n?l=Math.min(n*r+i,t.length):l=t.length,o=i;o<l;o+=r)e[0]=t[o],e[1]=t[o+1],e[2]=t[o+2],e[3]=t[o+3],a(e,e,s),t[o]=e[0],t[o+1]=e[1],t[o+2]=e[2],t[o+3]=e[3];return t}}();var D=K,Ce={};Ce.create=function(){var e=new Ie(9);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};Ce.fromMat4=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e};Ce.clone=function(e){var t=new Ie(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t};Ce.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};Ce.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};Ce.transpose=function(e,t){if(e===t){var r=t[1],i=t[2],n=t[5];e[1]=t[3],e[2]=t[6],e[3]=r,e[5]=t[7],e[6]=i,e[7]=n}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e};Ce.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],s=t[4],o=t[5],l=t[6],h=t[7],u=t[8],c=u*s-o*h,d=-u*a+o*l,f=h*a-s*l,v=r*c+i*d+n*f;return v?(v=1/v,e[0]=c*v,e[1]=(-u*i+n*h)*v,e[2]=(o*i-n*s)*v,e[3]=d*v,e[4]=(u*r-n*l)*v,e[5]=(-o*r+n*a)*v,e[6]=f*v,e[7]=(-h*r+i*l)*v,e[8]=(s*r-i*a)*v,e):null};Ce.adjoint=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],s=t[4],o=t[5],l=t[6],h=t[7],u=t[8];return e[0]=s*u-o*h,e[1]=n*h-i*u,e[2]=i*o-n*s,e[3]=o*l-a*u,e[4]=r*u-n*l,e[5]=n*a-r*o,e[6]=a*h-s*l,e[7]=i*l-r*h,e[8]=r*s-i*a,e};Ce.determinant=function(e){var t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],s=e[5],o=e[6],l=e[7],h=e[8];return t*(h*a-s*l)+r*(-h*n+s*o)+i*(l*n-a*o)};Ce.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3],o=t[4],l=t[5],h=t[6],u=t[7],c=t[8],d=r[0],f=r[1],v=r[2],m=r[3],p=r[4],_=r[5],x=r[6],y=r[7],g=r[8];return e[0]=d*i+f*s+v*h,e[1]=d*n+f*o+v*u,e[2]=d*a+f*l+v*c,e[3]=m*i+p*s+_*h,e[4]=m*n+p*o+_*u,e[5]=m*a+p*l+_*c,e[6]=x*i+y*s+g*h,e[7]=x*n+y*o+g*u,e[8]=x*a+y*l+g*c,e};Ce.mul=Ce.multiply;Ce.translate=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3],o=t[4],l=t[5],h=t[6],u=t[7],c=t[8],d=r[0],f=r[1];return e[0]=i,e[1]=n,e[2]=a,e[3]=s,e[4]=o,e[5]=l,e[6]=d*i+f*s+h,e[7]=d*n+f*o+u,e[8]=d*a+f*l+c,e};Ce.rotate=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3],o=t[4],l=t[5],h=t[6],u=t[7],c=t[8],d=Math.sin(r),f=Math.cos(r);return e[0]=f*i+d*s,e[1]=f*n+d*o,e[2]=f*a+d*l,e[3]=f*s-d*i,e[4]=f*o-d*n,e[5]=f*l-d*a,e[6]=h,e[7]=u,e[8]=c,e};Ce.scale=function(e,t,r){var i=r[0],n=r[1];return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=n*t[3],e[4]=n*t[4],e[5]=n*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};Ce.fromMat2d=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=t[2],e[4]=t[3],e[5]=0,e[6]=t[4],e[7]=t[5],e[8]=1,e};Ce.fromQuat=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],s=r+r,o=i+i,l=n+n,h=r*s,u=i*s,c=i*o,d=n*s,f=n*o,v=n*l,m=a*s,p=a*o,_=a*l;return e[0]=1-c-v,e[3]=u-_,e[6]=d+p,e[1]=u+_,e[4]=1-h-v,e[7]=f-m,e[2]=d-p,e[5]=f+m,e[8]=1-h-c,e};Ce.normalFromMat4=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],s=t[4],o=t[5],l=t[6],h=t[7],u=t[8],c=t[9],d=t[10],f=t[11],v=t[12],m=t[13],p=t[14],_=t[15],x=r*o-i*s,y=r*l-n*s,g=r*h-a*s,E=i*l-n*o,S=i*h-a*o,R=n*h-a*l,b=u*m-c*v,M=u*p-d*v,F=u*_-f*v,w=c*p-d*m,U=c*_-f*m,O=d*_-f*p,N=x*O-y*U+g*w+E*F-S*M+R*b;return N?(N=1/N,e[0]=(o*O-l*U+h*w)*N,e[1]=(l*F-s*O-h*M)*N,e[2]=(s*U-o*F+h*b)*N,e[3]=(n*U-i*O-a*w)*N,e[4]=(r*O-n*F+a*M)*N,e[5]=(i*F-r*U-a*b)*N,e[6]=(m*R-p*S+_*E)*N,e[7]=(p*g-v*R-_*y)*N,e[8]=(v*S-m*g+_*x)*N,e):null};Ce.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2))};var ee=Ce,ie={};ie.create=function(){var e=new Ie(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};ie.rotationTo=function(){var e=T.create(),t=T.fromValues(1,0,0),r=T.fromValues(0,1,0);return function(i,n,a){var s=T.dot(n,a);return s<-.999999?(T.cross(e,t,n),T.length(e)<1e-6&&T.cross(e,r,n),T.normalize(e,e),ie.setAxisAngle(i,e,Math.PI),i):s>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(T.cross(e,n,a),i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=1+s,ie.normalize(i,i))}}();ie.setAxes=function(){var e=ee.create();return function(t,r,i,n){return e[0]=i[0],e[3]=i[1],e[6]=i[2],e[1]=n[0],e[4]=n[1],e[7]=n[2],e[2]=-r[0],e[5]=-r[1],e[8]=-r[2],ie.normalize(t,ie.fromMat3(t,e))}}();ie.clone=D.clone;ie.fromValues=D.fromValues;ie.copy=D.copy;ie.set=D.set;ie.identity=function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};ie.setAxisAngle=function(e,t,r){r=r*.5;var i=Math.sin(r);return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=Math.cos(r),e};ie.add=D.add;ie.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3],o=r[0],l=r[1],h=r[2],u=r[3];return e[0]=i*u+s*o+n*h-a*l,e[1]=n*u+s*l+a*o-i*h,e[2]=a*u+s*h+i*l-n*o,e[3]=s*u-i*o-n*l-a*h,e};ie.mul=ie.multiply;ie.scale=D.scale;ie.rotateX=function(e,t,r){r*=.5;var i=t[0],n=t[1],a=t[2],s=t[3],o=Math.sin(r),l=Math.cos(r);return e[0]=i*l+s*o,e[1]=n*l+a*o,e[2]=a*l-n*o,e[3]=s*l-i*o,e};ie.rotateY=function(e,t,r){r*=.5;var i=t[0],n=t[1],a=t[2],s=t[3],o=Math.sin(r),l=Math.cos(r);return e[0]=i*l-a*o,e[1]=n*l+s*o,e[2]=a*l+i*o,e[3]=s*l-n*o,e};ie.rotateZ=function(e,t,r){r*=.5;var i=t[0],n=t[1],a=t[2],s=t[3],o=Math.sin(r),l=Math.cos(r);return e[0]=i*l+n*o,e[1]=n*l-i*o,e[2]=a*l+s*o,e[3]=s*l-a*o,e};ie.calculateW=function(e,t){var r=t[0],i=t[1],n=t[2];return e[0]=r,e[1]=i,e[2]=n,e[3]=Math.sqrt(Math.abs(1-r*r-i*i-n*n)),e};ie.dot=D.dot;ie.lerp=D.lerp;ie.slerp=function(e,t,r,i){var n=t[0],a=t[1],s=t[2],o=t[3],l=r[0],h=r[1],u=r[2],c=r[3],d,f,v,m,p;return f=n*l+a*h+s*u+o*c,f<0&&(f=-f,l=-l,h=-h,u=-u,c=-c),1-f>1e-6?(d=Math.acos(f),v=Math.sin(d),m=Math.sin((1-i)*d)/v,p=Math.sin(i*d)/v):(m=1-i,p=i),e[0]=m*n+p*l,e[1]=m*a+p*h,e[2]=m*s+p*u,e[3]=m*o+p*c,e};ie.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],s=r*r+i*i+n*n+a*a,o=s?1/s:0;return e[0]=-r*o,e[1]=-i*o,e[2]=-n*o,e[3]=a*o,e};ie.conjugate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e};ie.length=D.length;ie.len=ie.length;ie.squaredLength=D.squaredLength;ie.sqrLen=ie.squaredLength;ie.normalize=D.normalize;ie.fromMat3=function(e,t){var r=t[0]+t[4]+t[8],i;if(r>0)i=Math.sqrt(r+1),e[3]=.5*i,i=.5/i,e[0]=(t[5]-t[7])*i,e[1]=(t[6]-t[2])*i,e[2]=(t[1]-t[3])*i;else{var n=0;t[4]>t[0]&&(n=1),t[8]>t[n*3+n]&&(n=2);var a=(n+1)%3,s=(n+2)%3;i=Math.sqrt(t[n*3+n]-t[a*3+a]-t[s*3+s]+1),e[n]=.5*i,i=.5/i,e[3]=(t[a*3+s]-t[s*3+a])*i,e[a]=(t[a*3+n]+t[n*3+a])*i,e[s]=(t[s*3+n]+t[n*3+s])*i}return e};var q=ie,ue=function(){this._axisX=new P,this._axisY=new P,this._axisZ=new P,this.array=C.create(),this._dirty=!0};ue.prototype={constructor:ue,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return C.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new ue().copy(this)},copy:function(e){return C.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return C.determinant(this.array)},fromQuat:function(e){return C.fromQuat(this.array,e.array),this._dirty=!0,this},fromRotationTranslation:function(e,t){return C.fromRotationTranslation(this.array,e.array,t.array),this._dirty=!0,this},fromMat2d:function(e){return ue.fromMat2d(this,e),this},frustum:function(e,t,r,i,n,a){return C.frustum(this.array,e,t,r,i,n,a),this._dirty=!0,this},identity:function(){return C.identity(this.array),this._dirty=!0,this},invert:function(){return C.invert(this.array,this.array),this._dirty=!0,this},lookAt:function(e,t,r){return C.lookAt(this.array,e.array,t.array,r.array),this._dirty=!0,this},mul:function(e){return C.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return C.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return C.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return C.multiply(this.array,e.array,this.array),this._dirty=!0,this},ortho:function(e,t,r,i,n,a){return C.ortho(this.array,e,t,r,i,n,a),this._dirty=!0,this},perspective:function(e,t,r,i){return C.perspective(this.array,e,t,r,i),this._dirty=!0,this},rotate:function(e,t){return C.rotate(this.array,this.array,e,t.array),this._dirty=!0,this},rotateX:function(e){return C.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return C.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return C.rotateZ(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return C.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return C.translate(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return C.transpose(this.array,this.array),this._dirty=!0,this},decomposeMatrix:function(){var e=T.create(),t=T.create(),r=T.create(),i=ee.create();return function(n,a,s){var o=this.array;T.set(e,o[0],o[1],o[2]),T.set(t,o[4],o[5],o[6]),T.set(r,o[8],o[9],o[10]);var l=T.length(e),h=T.length(t),u=T.length(r),c=this.determinant();c<0&&(l=-l),n&&n.set(l,h,u),s.set(o[12],o[13],o[14]),ee.fromMat4(i,o),i[0]/=l,i[1]/=l,i[2]/=l,i[3]/=h,i[4]/=h,i[5]/=h,i[6]/=u,i[7]/=u,i[8]/=u,q.fromMat3(a.array,i),q.normalize(a.array,a.array),a._dirty=!0,s._dirty=!0}}(),toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Ir=Object.defineProperty;if(Ir){var Ti=ue.prototype;Ir(Ti,"z",{get:function(){var e=this.array;return this._axisZ.set(e[8],e[9],e[10]),this._axisZ},set:function(e){var t=this.array;e=e.array,t[8]=e[0],t[9]=e[1],t[10]=e[2],this._dirty=!0}}),Ir(Ti,"y",{get:function(){var e=this.array;return this._axisY.set(e[4],e[5],e[6]),this._axisY},set:function(e){var t=this.array;e=e.array,t[4]=e[0],t[5]=e[1],t[6]=e[2],this._dirty=!0}}),Ir(Ti,"x",{get:function(){var e=this.array;return this._axisX.set(e[0],e[1],e[2]),this._axisX},set:function(e){var t=this.array;e=e.array,t[0]=e[0],t[1]=e[1],t[2]=e[2],this._dirty=!0}})}ue.adjoint=function(e,t){return C.adjoint(e.array,t.array),e._dirty=!0,e};ue.copy=function(e,t){return C.copy(e.array,t.array),e._dirty=!0,e};ue.determinant=function(e){return C.determinant(e.array)};ue.identity=function(e){return C.identity(e.array),e._dirty=!0,e};ue.ortho=function(e,t,r,i,n,a,s){return C.ortho(e.array,t,r,i,n,a,s),e._dirty=!0,e};ue.perspective=function(e,t,r,i,n){return C.perspective(e.array,t,r,i,n),e._dirty=!0,e};ue.lookAt=function(e,t,r,i){return C.lookAt(e.array,t.array,r.array,i.array),e._dirty=!0,e};ue.invert=function(e,t){return C.invert(e.array,t.array),e._dirty=!0,e};ue.mul=function(e,t,r){return C.mul(e.array,t.array,r.array),e._dirty=!0,e};ue.multiply=ue.mul;ue.fromQuat=function(e,t){return C.fromQuat(e.array,t.array),e._dirty=!0,e};ue.fromRotationTranslation=function(e,t,r){return C.fromRotationTranslation(e.array,t.array,r.array),e._dirty=!0,e};ue.fromMat2d=function(i,r){i._dirty=!0;var r=r.array,i=i.array;return i[0]=r[0],i[4]=r[2],i[12]=r[4],i[1]=r[1],i[5]=r[3],i[13]=r[5],i};ue.rotate=function(e,t,r,i){return C.rotate(e.array,t.array,r,i.array),e._dirty=!0,e};ue.rotateX=function(e,t,r){return C.rotateX(e.array,t.array,r),e._dirty=!0,e};ue.rotateY=function(e,t,r){return C.rotateY(e.array,t.array,r),e._dirty=!0,e};ue.rotateZ=function(e,t,r){return C.rotateZ(e.array,t.array,r),e._dirty=!0,e};ue.scale=function(e,t,r){return C.scale(e.array,t.array,r.array),e._dirty=!0,e};ue.transpose=function(e,t){return C.transpose(e.array,t.array),e._dirty=!0,e};ue.translate=function(e,t,r){return C.translate(e.array,t.array,r.array),e._dirty=!0,e};var z=ue,se=function(e,t,r,i){e=e||0,t=t||0,r=r||0,i=i===void 0?1:i,this.array=q.fromValues(e,t,r,i),this._dirty=!0};se.prototype={constructor:se,add:function(e){return q.add(this.array,this.array,e.array),this._dirty=!0,this},calculateW:function(){return q.calculateW(this.array,this.array),this._dirty=!0,this},set:function(e,t,r,i){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this.array[3]=i,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new se(this.x,this.y,this.z,this.w)},conjugate:function(){return q.conjugate(this.array,this.array),this._dirty=!0,this},copy:function(e){return q.copy(this.array,e.array),this._dirty=!0,this},dot:function(e){return q.dot(this.array,e.array)},fromMat3:function(e){return q.fromMat3(this.array,e.array),this._dirty=!0,this},fromMat4:function(){var e=ee.create();return function(t){return ee.fromMat4(e,t.array),ee.transpose(e,e),q.fromMat3(this.array,e),this._dirty=!0,this}}(),identity:function(){return q.identity(this.array),this._dirty=!0,this},invert:function(){return q.invert(this.array,this.array),this._dirty=!0,this},len:function(){return q.len(this.array)},length:function(){return q.length(this.array)},lerp:function(e,t,r){return q.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},mul:function(e){return q.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return q.multiply(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return q.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return q.multiply(this.array,e.array,this.array),this._dirty=!0,this},normalize:function(){return q.normalize(this.array,this.array),this._dirty=!0,this},rotateX:function(e){return q.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return q.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return q.rotateZ(this.array,this.array,e),this._dirty=!0,this},rotationTo:function(e,t){return q.rotationTo(this.array,e.array,t.array),this._dirty=!0,this},setAxes:function(e,t,r){return q.setAxes(this.array,e.array,t.array,r.array),this._dirty=!0,this},setAxisAngle:function(e,t){return q.setAxisAngle(this.array,e.array,t),this._dirty=!0,this},slerp:function(e,t,r){return q.slerp(this.array,e.array,t.array,r),this._dirty=!0,this},sqrLen:function(){return q.sqrLen(this.array)},squaredLength:function(){return q.squaredLength(this.array)},fromEuler:function(e,t){return se.fromEuler(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var ar=Object.defineProperty;if(ar){var Or=se.prototype;ar(Or,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),ar(Or,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),ar(Or,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),ar(Or,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}se.add=function(e,t,r){return q.add(e.array,t.array,r.array),e._dirty=!0,e};se.set=function(e,t,r,i,n){q.set(e.array,t,r,i,n),e._dirty=!0};se.copy=function(e,t){return q.copy(e.array,t.array),e._dirty=!0,e};se.calculateW=function(e,t){return q.calculateW(e.array,t.array),e._dirty=!0,e};se.conjugate=function(e,t){return q.conjugate(e.array,t.array),e._dirty=!0,e};se.identity=function(e){return q.identity(e.array),e._dirty=!0,e};se.invert=function(e,t){return q.invert(e.array,t.array),e._dirty=!0,e};se.dot=function(e,t){return q.dot(e.array,t.array)};se.len=function(e){return q.length(e.array)};se.lerp=function(e,t,r,i){return q.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};se.slerp=function(e,t,r,i){return q.slerp(e.array,t.array,r.array,i),e._dirty=!0,e};se.mul=function(e,t,r){return q.multiply(e.array,t.array,r.array),e._dirty=!0,e};se.multiply=se.mul;se.rotateX=function(e,t,r){return q.rotateX(e.array,t.array,r),e._dirty=!0,e};se.rotateY=function(e,t,r){return q.rotateY(e.array,t.array,r),e._dirty=!0,e};se.rotateZ=function(e,t,r){return q.rotateZ(e.array,t.array,r),e._dirty=!0,e};se.setAxisAngle=function(e,t,r){return q.setAxisAngle(e.array,t.array,r),e._dirty=!0,e};se.normalize=function(e,t){return q.normalize(e.array,t.array),e._dirty=!0,e};se.sqrLen=function(e){return q.sqrLen(e.array)};se.squaredLength=se.sqrLen;se.fromMat3=function(e,t){return q.fromMat3(e.array,t.array),e._dirty=!0,e};se.setAxes=function(e,t,r,i){return q.setAxes(e.array,t.array,r.array,i.array),e._dirty=!0,e};se.rotationTo=function(e,t,r){return q.rotationTo(e.array,t.array,r.array),e._dirty=!0,e};se.fromEuler=function(e,t,u){e._dirty=!0,t=t.array;var i=e.array,n=Math.cos(t[0]/2),a=Math.cos(t[1]/2),s=Math.cos(t[2]/2),o=Math.sin(t[0]/2),l=Math.sin(t[1]/2),h=Math.sin(t[2]/2),u=(u||"XYZ").toUpperCase();switch(u){case"XYZ":i[0]=o*a*s+n*l*h,i[1]=n*l*s-o*a*h,i[2]=n*a*h+o*l*s,i[3]=n*a*s-o*l*h;break;case"YXZ":i[0]=o*a*s+n*l*h,i[1]=n*l*s-o*a*h,i[2]=n*a*h-o*l*s,i[3]=n*a*s+o*l*h;break;case"ZXY":i[0]=o*a*s-n*l*h,i[1]=n*l*s+o*a*h,i[2]=n*a*h+o*l*s,i[3]=n*a*s-o*l*h;break;case"ZYX":i[0]=o*a*s-n*l*h,i[1]=n*l*s+o*a*h,i[2]=n*a*h-o*l*s,i[3]=n*a*s+o*l*h;break;case"YZX":i[0]=o*a*s+n*l*h,i[1]=n*l*s+o*a*h,i[2]=n*a*h-o*l*s,i[3]=n*a*s-o*l*h;break;case"XZY":i[0]=o*a*s-n*l*h,i[1]=n*l*s-o*a*h,i[2]=n*a*h+o*l*s,i[3]=n*a*s+o*l*h;break}};var Ca=se,Et=T.set,Br=T.copy,Xr=function(e,t){this.min=e||new P(1/0,1/0,1/0),this.max=t||new P(-1/0,-1/0,-1/0),this.vertices=null};Xr.prototype={constructor:Xr,updateFromVertices:function(e){if(e.length>0){var t=this.min,r=this.max,i=t.array,n=r.array;Br(i,e[0]),Br(n,e[0]);for(var a=1;a<e.length;a++){var s=e[a];s[0]<i[0]&&(i[0]=s[0]),s[1]<i[1]&&(i[1]=s[1]),s[2]<i[2]&&(i[2]=s[2]),s[0]>n[0]&&(n[0]=s[0]),s[1]>n[1]&&(n[1]=s[1]),s[2]>n[2]&&(n[2]=s[2])}t._dirty=!0,r._dirty=!0}},union:function(e){var t=this.min,r=this.max;return T.min(t.array,t.array,e.min.array),T.max(r.array,r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},intersection:function(e){var t=this.min,r=this.max;return T.max(t.array,t.array,e.min.array),T.min(r.array,r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},intersectBoundingBox:function(e){var t=this.min.array,r=this.max.array,i=e.min.array,n=e.max.array;return!(t[0]>n[0]||t[1]>n[1]||t[2]>n[2]||r[0]<i[0]||r[1]<i[1]||r[2]<i[2])},containBoundingBox:function(e){var t=this.min.array,r=this.max.array,i=e.min.array,n=e.max.array;return t[0]<=i[0]&&t[1]<=i[1]&&t[2]<=i[2]&&r[0]>=n[0]&&r[1]>=n[1]&&r[2]>=n[2]},containPoint:function(e){var t=this.min.array,r=this.max.array,i=e.array;return t[0]<=i[0]&&t[1]<=i[1]&&t[2]<=i[2]&&r[0]>=i[0]&&r[1]>=i[1]&&r[2]>=i[2]},isFinite:function(){var e=this.min.array,t=this.max.array;return isFinite(e[0])&&isFinite(e[1])&&isFinite(e[2])&&isFinite(t[0])&&isFinite(t[1])&&isFinite(t[2])},applyTransform:function(e){this.transformFrom(this,e)},transformFrom:function(){var e=T.create(),t=T.create(),r=T.create(),i=T.create(),n=T.create(),a=T.create();return function(s,o){var l=s.min.array,h=s.max.array,u=o.array;return e[0]=u[0]*l[0],e[1]=u[1]*l[0],e[2]=u[2]*l[0],t[0]=u[0]*h[0],t[1]=u[1]*h[0],t[2]=u[2]*h[0],r[0]=u[4]*l[1],r[1]=u[5]*l[1],r[2]=u[6]*l[1],i[0]=u[4]*h[1],i[1]=u[5]*h[1],i[2]=u[6]*h[1],n[0]=u[8]*l[2],n[1]=u[9]*l[2],n[2]=u[10]*l[2],a[0]=u[8]*h[2],a[1]=u[9]*h[2],a[2]=u[10]*h[2],l=this.min.array,h=this.max.array,l[0]=Math.min(e[0],t[0])+Math.min(r[0],i[0])+Math.min(n[0],a[0])+u[12],l[1]=Math.min(e[1],t[1])+Math.min(r[1],i[1])+Math.min(n[1],a[1])+u[13],l[2]=Math.min(e[2],t[2])+Math.min(r[2],i[2])+Math.min(n[2],a[2])+u[14],h[0]=Math.max(e[0],t[0])+Math.max(r[0],i[0])+Math.max(n[0],a[0])+u[12],h[1]=Math.max(e[1],t[1])+Math.max(r[1],i[1])+Math.max(n[1],a[1])+u[13],h[2]=Math.max(e[2],t[2])+Math.max(r[2],i[2])+Math.max(n[2],a[2])+u[14],this.min._dirty=!0,this.max._dirty=!0,this}}(),applyProjection:function(e){var t=this.min.array,r=this.max.array,i=e.array,n=t[0],a=t[1],s=t[2],o=r[0],l=r[1],h=t[2],u=r[0],c=r[1],d=r[2];if(i[15]===1)t[0]=i[0]*n+i[12],t[1]=i[5]*a+i[13],r[2]=i[10]*s+i[14],r[0]=i[0]*u+i[12],r[1]=i[5]*c+i[13],t[2]=i[10]*d+i[14];else{var f=-1/s;t[0]=i[0]*n*f,t[1]=i[5]*a*f,r[2]=(i[10]*s+i[14])*f,f=-1/h,r[0]=i[0]*o*f,r[1]=i[5]*l*f,f=-1/d,t[2]=(i[10]*d+i[14])*f}return this.min._dirty=!0,this.max._dirty=!0,this},updateVertices:function(){var e=this.vertices;if(!e){e=[];for(var t=0;t<8;t++)e[t]=T.fromValues(0,0,0);this.vertices=e}var r=this.min.array,i=this.max.array;return Et(e[0],r[0],r[1],r[2]),Et(e[1],r[0],i[1],r[2]),Et(e[2],i[0],r[1],r[2]),Et(e[3],i[0],i[1],r[2]),Et(e[4],r[0],r[1],i[2]),Et(e[5],r[0],i[1],i[2]),Et(e[6],i[0],r[1],i[2]),Et(e[7],i[0],i[1],i[2]),this},copy:function(e){var t=this.min,r=this.max;return Br(t.array,e.min.array),Br(r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},clone:function(){var e=new Xr;return e.copy(this),e}};var ke=Xr,Xo=0,jo=Ye.extend({name:"",position:null,rotation:null,scale:null,worldTransform:null,localTransform:null,autoUpdateLocalTransform:!0,_parent:null,_scene:null,_needsUpdateWorldTransform:!0,_inIterating:!1,__depth:0},function(){this.name||(this.name=(this.type||"NODE")+"_"+Xo++),this.position||(this.position=new P),this.rotation||(this.rotation=new Ca),this.scale||(this.scale=new P(1,1,1)),this.worldTransform=new z,this.localTransform=new z,this._children=[]},{target:null,invisible:!1,isSkinnedMesh:function(){return!1},isRenderable:function(){return!1},setName:function(e){var t=this._scene;if(t){var r=t._nodeRepository;delete r[this.name],r[e]=this}this.name=e},add:function(e){var t=e._parent;if(t!==this){t&&t.remove(e),e._parent=this,this._children.push(e);var r=this._scene;r&&r!==e.scene&&e.traverse(this._addSelfToScene,this),e._needsUpdateWorldTransform=!0}},remove:function(e){var t=this._children,r=t.indexOf(e);r<0||(t.splice(r,1),e._parent=null,this._scene&&e.traverse(this._removeSelfFromScene,this))},removeAll:function(){for(var e=this._children,t=0;t<e.length;t++)e[t]._parent=null,this._scene&&e[t].traverse(this._removeSelfFromScene,this);this._children=[]},getScene:function(){return this._scene},getParent:function(){return this._parent},_removeSelfFromScene:function(e){e._scene.removeFromScene(e),e._scene=null},_addSelfToScene:function(e){this._scene.addToScene(e),e._scene=this._scene},isAncestor:function(e){for(var t=e._parent;t;){if(t===this)return!0;t=t._parent}return!1},children:function(){return this._children.slice()},childAt:function(e){return this._children[e]},getChildByName:function(e){for(var t=this._children,r=0;r<t.length;r++)if(t[r].name===e)return t[r]},getDescendantByName:function(e){for(var t=this._children,r=0;r<t.length;r++){var i=t[r];if(i.name===e)return i;var n=i.getDescendantByName(e);if(n)return n}},queryNode:function(e){if(!!e){for(var t=e.split("/"),r=this,i=0;i<t.length;i++){var n=t[i];if(!!n){for(var a=!1,s=r._children,o=0;o<s.length;o++){var l=s[o];if(l.name===n){r=l,a=!0;break}}if(!a)return}}return r}},getPath:function(e){if(!this._parent)return"/";for(var t=this._parent,r=this.name;t._parent&&(r=t.name+"/"+r,t._parent!=e);)t=t._parent;return!t._parent&&e?null:r},traverse:function(e,t){e.call(t,this);for(var r=this._children,i=0,n=r.length;i<n;i++)r[i].traverse(e,t)},eachChild:function(e,t){for(var r=this._children,i=0,n=r.length;i<n;i++){var a=r[i];e.call(t,a,i)}},setLocalTransform:function(e){C.copy(this.localTransform.array,e.array),this.decomposeLocalTransform()},decomposeLocalTransform:function(e){var t=e?null:this.scale;this.localTransform.decomposeMatrix(t,this.rotation,this.position)},setWorldTransform:function(e){C.copy(this.worldTransform.array,e.array),this.decomposeWorldTransform()},decomposeWorldTransform:function(){var e=C.create();return function(t){var r=this.localTransform,i=this.worldTransform;this._parent?(C.invert(e,this._parent.worldTransform.array),C.multiply(r.array,e,i.array)):C.copy(r.array,i.array);var n=t?null:this.scale;r.decomposeMatrix(n,this.rotation,this.position)}}(),transformNeedsUpdate:function(){return this.position._dirty||this.rotation._dirty||this.scale._dirty},updateLocalTransform:function(){var e=this.position,t=this.rotation,r=this.scale;if(this.transformNeedsUpdate()){var i=this.localTransform.array;C.fromRotationTranslation(i,t.array,e.array),C.scale(i,i,r.array),t._dirty=!1,r._dirty=!1,e._dirty=!1,this._needsUpdateWorldTransform=!0}},_updateWorldTransformTopDown:function(){var e=this.localTransform.array,t=this.worldTransform.array;this._parent?C.multiplyAffine(t,this._parent.worldTransform.array,e):C.copy(t,e)},updateWorldTransform:function(){for(var e=this;e&&e.getParent()&&e.getParent().transformNeedsUpdate();)e=e.getParent();e.update()},update:function(e){this.autoUpdateLocalTransform?this.updateLocalTransform():e=!0,(e||this._needsUpdateWorldTransform)&&(this._updateWorldTransformTopDown(),e=!0,this._needsUpdateWorldTransform=!1);for(var t=this._children,r=0,i=t.length;r<i;r++)t[r].update(e)},getBoundingBox:function(){function e(n){return!n.invisible&&n.geometry}var t=new ke,r=new z,i=new z;return function(n,a){return a=a||new ke,this._parent?z.invert(i,this._parent.worldTransform):z.identity(i),this.traverse(function(s){s.geometry&&s.geometry.boundingBox&&(t.copy(s.geometry.boundingBox),z.multiply(r,i,s.worldTransform),t.applyTransform(r),a.union(t))},this,e),a}}(),getWorldPosition:function(e){this.transformNeedsUpdate()&&this.updateWorldTransform();var t=this.worldTransform.array;if(e){var r=e.array;return r[0]=t[12],r[1]=t[13],r[2]=t[14],e}else return new P(t[12],t[13],t[14])},clone:function(){var e=new this.constructor,t=this._children;e.setName(this.name),e.position.copy(this.position),e.rotation.copy(this.rotation),e.scale.copy(this.scale);for(var r=0;r<t.length;r++)e.add(t[r].clone());return e},rotateAround:function(){var e=new P,t=new z;return function(r,i,n){e.copy(this.position).subtract(r);var a=this.localTransform;a.identity(),a.translate(r),a.rotate(n,i),t.fromRotationTranslation(this.rotation,e),a.multiply(t),a.scale(this.scale),this.decomposeLocalTransform(),this._needsUpdateWorldTransform=!0}}(),lookAt:function(){var e=new z;return function(t,r){e.lookAt(this.position,t,r||this.localTransform.y).invert(),this.setLocalTransform(e),this.target=t}}()}),dt=jo,Ke=dt.extend({material:null,geometry:null,mode:A.TRIANGLES,_renderInfo:null},{__program:null,lightGroup:0,renderOrder:0,culling:!0,cullFace:A.BACK,frontFace:A.CCW,frustumCulling:!0,receiveShadow:!0,castShadow:!0,ignorePicking:!1,ignorePreZ:!1,ignoreGBuffer:!1,isRenderable:function(){return this.geometry&&this.material&&this.material.shader&&!this.invisible&&this.geometry.vertexCount>0},beforeRender:function(e){},afterRender:function(e,t){},getBoundingBox:function(e,t){return t=dt.prototype.getBoundingBox.call(this,e,t),this.geometry&&this.geometry.boundingBox&&t.union(this.geometry.boundingBox),t},clone:function(){var e=["castShadow","receiveShadow","mode","culling","cullFace","frontFace","frustumCulling","renderOrder","lineWidth","ignorePicking","ignorePreZ","ignoreGBuffer"];return function(){var t=dt.prototype.clone.call(this);t.geometry=this.geometry,t.material=this.material;for(var r=0;r<e.length;r++){var i=e[r];t[i]!==this[i]&&(t[i]=this[i])}return t}}()});Ke.POINTS=A.POINTS;Ke.LINES=A.LINES;Ke.LINE_LOOP=A.LINE_LOOP;Ke.LINE_STRIP=A.LINE_STRIP;Ke.TRIANGLES=A.TRIANGLES;Ke.TRIANGLE_STRIP=A.TRIANGLE_STRIP;Ke.TRIANGLE_FAN=A.TRIANGLE_FAN;Ke.BACK=A.BACK;Ke.FRONT=A.FRONT;Ke.FRONT_AND_BACK=A.FRONT_AND_BACK;Ke.CW=A.CW;Ke.CCW=A.CCW;var zi=Ke,Qi=Ye.extend({scene:null,camera:null,renderer:null},function(){this._ray=new $r,this._ndc=new $e},{pick:function(e,t,r){var i=this.pickAll(e,t,[],r);return i[0]||null},pickAll:function(e,t,r,i){return this.renderer.screenToNDC(e,t,this._ndc),this.camera.castRay(this._ndc,this._ray),r=r||[],this._intersectNode(this.scene,r,i||!1),r.sort(this._intersectionCompareFunc),r},_intersectNode:function(e,t,r){e instanceof zi&&e.isRenderable()&&(!e.ignorePicking||r)&&(e.mode===A.TRIANGLES&&e.geometry.isUseIndices()||e.geometry.pickByRay||e.geometry.pick)&&this._intersectRenderable(e,t);for(var i=0;i<e._children.length;i++)this._intersectNode(e._children[i],t,r)},_intersectRenderable:function(){var e=new P,t=new P,r=new P,i=new $r,n=new z;return function(a,s){var o=a.isSkinnedMesh();i.copy(this._ray),z.invert(n,a.worldTransform),o||i.applyTransform(n);var l=a.geometry,h=o?a.skeleton.boundingBox:l.boundingBox;if(!(h&&!i.intersectBoundingBox(h))){if(l.pick){l.pick(this._ndc.x,this._ndc.y,this.renderer,this.camera,a,s);return}else if(l.pickByRay){l.pickByRay(i,a,s);return}var u=a.cullFace===A.BACK&&a.frontFace===A.CCW||a.cullFace===A.FRONT&&a.frontFace===A.CW,c,d=l.indices,f=l.attributes.position,v=l.attributes.weight,m=l.attributes.joint,p,_=[];if(!(!f||!f.value||!d)){if(o){p=a.skeleton.getSubSkinMatrices(a.__uid__,a.joints);for(var x=0;x<a.joints.length;x++){_[x]=_[x]||[];for(var y=0;y<16;y++)_[x][y]=p[x*16+y]}var g=[],E=[],S=[],R=[],b=[],M=l.attributes.skinnedPosition;(!M||!M.value)&&(l.createAttribute("skinnedPosition","f",3),M=l.attributes.skinnedPosition,M.init(l.vertexCount));for(var x=0;x<l.vertexCount;x++){f.get(x,g),v.get(x,E),m.get(x,S),E[3]=1-E[0]-E[1]-E[2],T.set(R,0,0,0);for(var y=0;y<4;y++)S[y]>=0&&E[y]>1e-4&&(T.transformMat4(b,g,_[S[y]]),T.scaleAndAdd(R,R,b,E[y]));M.set(x,R)}}for(var x=0;x<d.length;x+=3){var F=d[x],w=d[x+1],U=d[x+2],O=o?l.attributes.skinnedPosition:f;if(O.get(F,e.array),O.get(w,t.array),O.get(U,r.array),u?c=i.intersectTriangle(e,t,r,a.culling):c=i.intersectTriangle(e,r,t,a.culling),c){var N=new P;o?P.copy(N,c):P.transformMat4(N,c,a.worldTransform),s.push(new Qi.Intersection(c,N,a,[F,w,U],x/3,P.dist(N,this._ray.origin)))}}}}}}(),_intersectionCompareFunc:function(e,t){return e.distance-t.distance}});Qi.Intersection=function(e,t,r,i,n,a){this.point=e,this.pointWorld=t,this.target=r,this.triangle=i,this.triangleIndex=n,this.distance=a};var qo=Qi,sr="__dt__",Kr=function(){this._contextId=0,this._caches=[],this._context={}};Kr.prototype={use:function(e,t){var r=this._caches;r[e]||(r[e]={},t&&(r[e]=t())),this._contextId=e,this._context=r[e]},put:function(e,t){this._context[e]=t},get:function(e){return this._context[e]},dirty:function(e){e=e||"";var t=sr+e;this.put(t,!0)},dirtyAll:function(e){e=e||"";for(var t=sr+e,r=this._caches,i=0;i<r.length;i++)r[i]&&(r[i][t]=!0)},fresh:function(e){e=e||"";var t=sr+e;this.put(t,!1)},freshAll:function(e){e=e||"";for(var t=sr+e,r=this._caches,i=0;i<r.length;i++)r[i]&&(r[i][t]=!1)},isDirty:function(e){e=e||"";var t=sr+e,r=this._context;return!r.hasOwnProperty(t)||r[t]===!0},deleteContext:function(e){delete this._caches[e],this._context={}},delete:function(e){delete this._context[e]},clearAll:function(){this._caches={}},getContext:function(){return this._context},eachContext:function(e,t){var r=Object.keys(this._caches);r.forEach(function(i){e&&e.call(t,i)})},miss:function(e){return!this._context.hasOwnProperty(e)}};Kr.prototype.constructor=Kr;var Ji=Kr,te=Ye.extend({width:512,height:512,type:A.UNSIGNED_BYTE,format:A.RGBA,wrapS:A.REPEAT,wrapT:A.REPEAT,minFilter:A.LINEAR_MIPMAP_LINEAR,magFilter:A.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,sRGB:!0,unpackAlignment:4,premultiplyAlpha:!1,dynamic:!1,NPOT:!1,__used:0},function(){this._cache=new Ji},{getWebGLTexture:function(e){var t=e.gl,r=this._cache;return r.use(e.__uid__),r.miss("webgl_texture")&&r.put("webgl_texture",t.createTexture()),this.dynamic?this.update(e):r.isDirty()&&(this.update(e),r.fresh()),r.get("webgl_texture")},bind:function(){},unbind:function(){},dirty:function(){this._cache&&this._cache.dirtyAll()},update:function(e){},updateCommon:function(e){var t=e.gl;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,this.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,this.unpackAlignment),this.format===A.DEPTH_COMPONENT&&(this.useMipmap=!1);var r=e.getGLExtension("EXT_sRGB");this.format===te.SRGB&&!r&&(this.format=te.RGB),this.format===te.SRGB_ALPHA&&!r&&(this.format=te.RGBA),this.NPOT=!this.isPowerOfTwo()},getAvailableWrapS:function(){return this.NPOT?A.CLAMP_TO_EDGE:this.wrapS},getAvailableWrapT:function(){return this.NPOT?A.CLAMP_TO_EDGE:this.wrapT},getAvailableMinFilter:function(){var e=this.minFilter;return this.NPOT||!this.useMipmap?e===A.NEAREST_MIPMAP_NEAREST||e===A.NEAREST_MIPMAP_LINEAR?A.NEAREST:e===A.LINEAR_MIPMAP_LINEAR||e===A.LINEAR_MIPMAP_NEAREST?A.LINEAR:e:e},getAvailableMagFilter:function(){return this.magFilter},nextHighestPowerOfTwo:function(e){--e;for(var t=1;t<32;t<<=1)e=e|e>>t;return e+1},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("webgl_texture");r&&e.gl.deleteTexture(r),t.deleteContext(e.__uid__)},isRenderable:function(){},isPowerOfTwo:function(){}});Object.defineProperty(te.prototype,"width",{get:function(){return this._width},set:function(e){this._width=e}});Object.defineProperty(te.prototype,"height",{get:function(){return this._height},set:function(e){this._height=e}});te.BYTE=A.BYTE;te.UNSIGNED_BYTE=A.UNSIGNED_BYTE;te.SHORT=A.SHORT;te.UNSIGNED_SHORT=A.UNSIGNED_SHORT;te.INT=A.INT;te.UNSIGNED_INT=A.UNSIGNED_INT;te.FLOAT=A.FLOAT;te.HALF_FLOAT=36193;te.UNSIGNED_INT_24_8_WEBGL=34042;te.DEPTH_COMPONENT=A.DEPTH_COMPONENT;te.DEPTH_STENCIL=A.DEPTH_STENCIL;te.ALPHA=A.ALPHA;te.RGB=A.RGB;te.RGBA=A.RGBA;te.LUMINANCE=A.LUMINANCE;te.LUMINANCE_ALPHA=A.LUMINANCE_ALPHA;te.SRGB=35904;te.SRGB_ALPHA=35906;te.COMPRESSED_RGB_S3TC_DXT1_EXT=33776;te.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777;te.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778;te.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779;te.NEAREST=A.NEAREST;te.LINEAR=A.LINEAR;te.NEAREST_MIPMAP_NEAREST=A.NEAREST_MIPMAP_NEAREST;te.LINEAR_MIPMAP_NEAREST=A.LINEAR_MIPMAP_NEAREST;te.NEAREST_MIPMAP_LINEAR=A.NEAREST_MIPMAP_LINEAR;te.LINEAR_MIPMAP_LINEAR=A.LINEAR_MIPMAP_LINEAR;te.REPEAT=A.REPEAT;te.CLAMP_TO_EDGE=A.CLAMP_TO_EDGE;te.MIRRORED_REPEAT=A.MIRRORED_REPEAT;var Y=te,Qe=zi.extend({skeleton:null,joints:null},function(){this.joints||(this.joints=[])},{offsetMatrix:null,isInstancedMesh:function(){return!1},isSkinnedMesh:function(){return!!(this.skeleton&&this.joints&&this.joints.length>0)},clone:function(){var e=zi.prototype.clone.call(this);return e.skeleton=this.skeleton,this.joints&&(e.joints=this.joints.slice()),e}});Qe.POINTS=A.POINTS;Qe.LINES=A.LINES;Qe.LINE_LOOP=A.LINE_LOOP;Qe.LINE_STRIP=A.LINE_STRIP;Qe.TRIANGLES=A.TRIANGLES;Qe.TRIANGLE_STRIP=A.TRIANGLE_STRIP;Qe.TRIANGLE_FAN=A.TRIANGLE_FAN;Qe.BACK=A.BACK;Qe.FRONT=A.FRONT;Qe.FRONT_AND_BACK=A.FRONT_AND_BACK;Qe.CW=A.CW;Qe.CCW=A.CCW;var en=Qe,si={};si.isPowerOfTwo=function(e){return(e&e-1)===0};si.nextPowerOfTwo=function(e){return e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,e++,e};si.nearestPowerOfTwo=function(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))};var Ra=si,Hn=Ra.isPowerOfTwo;function zn(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function Yo(e,t){var r=zn(e.width),i=zn(e.height);t=t||document.createElement("canvas"),t.width=r,t.height=i;var n=t.getContext("2d");return n.drawImage(e.image,0,0,r,i),t}var tn=Y.extend(function(){return{image:null,pixels:null,mipmaps:[],convertToPOT:!1}},{textureType:"texture2D",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),this.updateCommon(e);var r=this.format,i=this.type,n=!!(this.convertToPOT&&!this.mipmaps.length&&this.image&&(this.wrapS===Y.REPEAT||this.wrapT===Y.REPEAT)&&this.NPOT);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,n?this.wrapS:this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,n?this.wrapT:this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n?this.magFilter:this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n?this.minFilter:this.getAvailableMinFilter());var a=e.getGLExtension("EXT_texture_filter_anisotropic");if(a&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_2D,a.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),i===36193){var s=e.getGLExtension("OES_texture_half_float");s||(i=A.FLOAT)}if(this.mipmaps.length)for(var o=this.width,l=this.height,h=0;h<this.mipmaps.length;h++){var u=this.mipmaps[h];this._updateTextureData(t,u,h,o,l,r,i,!1),o/=2,l/=2}else this._updateTextureData(t,this,0,this.width,this.height,r,i,n),this.useMipmap&&(!this.NPOT||n)&&t.generateMipmap(t.TEXTURE_2D);t.bindTexture(t.TEXTURE_2D,null)},_updateTextureData:function(e,t,r,i,n,a,s,o){if(t.image){var l=t.image;o&&(this._potCanvas=Yo(this,this._potCanvas),l=this._potCanvas),e.texImage2D(e.TEXTURE_2D,r,a,a,s,l)}else a<=Y.COMPRESSED_RGBA_S3TC_DXT5_EXT&&a>=Y.COMPRESSED_RGB_S3TC_DXT1_EXT?e.compressedTexImage2D(e.TEXTURE_2D,r,a,i,n,0,t.pixels):e.texImage2D(e.TEXTURE_2D,r,a,i,n,0,a,s,t.pixels)},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_2D))},isPowerOfTwo:function(){return Hn(this.width)&&Hn(this.height)},isRenderable:function(){return this.image?this.image.width>0&&this.image.height>0:!!(this.width&&this.height)},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,null)},load:function(e,t){var r=be.createImage();t&&(r.crossOrigin=t);var i=this;return r.onload=function(){i.dirty(),i.trigger("success",i)},r.onerror=function(){i.trigger("error",i)},r.src=e,this.image=r,this}});Object.defineProperty(tn.prototype,"width",{get:function(){return this.image?this.image.width:this._width},set:function(e){this.image?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty(tn.prototype,"height",{get:function(){return this.image?this.image.height:this._height},set:function(e){this.image?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});var ne=tn;function Ma(e){return{byte:be.Int8Array,ubyte:be.Uint8Array,short:be.Int16Array,ushort:be.Uint16Array}[e]||be.Float32Array}function Ei(e){return"attr_"+e}function er(e,t,r,i){switch(this.name=e,this.type=t,this.size=r,this.semantic=i||"",this.value=null,r){case 1:this.get=function(n){return this.value[n]},this.set=function(n,a){this.value[n]=a},this.copy=function(n,a){this.value[n]=this.value[n]};break;case 2:this.get=function(n,a){var s=this.value;return a[0]=s[n*2],a[1]=s[n*2+1],a},this.set=function(n,a){var s=this.value;s[n*2]=a[0],s[n*2+1]=a[1]},this.copy=function(n,a){var s=this.value;a*=2,n*=2,s[n]=s[a],s[n+1]=s[a+1]};break;case 3:this.get=function(n,a){var s=n*3,o=this.value;return a[0]=o[s],a[1]=o[s+1],a[2]=o[s+2],a},this.set=function(n,a){var s=n*3,o=this.value;o[s]=a[0],o[s+1]=a[1],o[s+2]=a[2]},this.copy=function(n,a){var s=this.value;a*=3,n*=3,s[n]=s[a],s[n+1]=s[a+1],s[n+2]=s[a+2]};break;case 4:this.get=function(n,a){var s=this.value,o=n*4;return a[0]=s[o],a[1]=s[o+1],a[2]=s[o+2],a[3]=s[o+3],a},this.set=function(n,a){var s=this.value,o=n*4;s[o]=a[0],s[o+1]=a[1],s[o+2]=a[2],s[o+3]=a[3]},this.copy=function(n,a){var s=this.value;a*=4,n*=4,s[n]=s[a],s[n+1]=s[a+1],s[n+2]=s[a+2],s[n+3]=s[a+3]}}}er.prototype.init=function(e){if(!this.value||this.value.length!==e*this.size){var t=Ma(this.type);this.value=new t(e*this.size)}};er.prototype.fromArray=function(e){var t=Ma(this.type),r;if(e[0]&&e[0].length){var i=0,n=this.size;r=new t(e.length*n);for(var a=0;a<e.length;a++)for(var s=0;s<n;s++)r[i++]=e[a][s]}else r=new t(e);this.value=r};er.prototype.clone=function(e){var t=new er(this.name,this.type,this.size,this.semantic);return e&&console.warn("todo"),t};function La(e,t,r,i,n){this.name=e,this.type=t,this.buffer=r,this.size=i,this.semantic=n,this.symbol="",this.needsRemove=!1}function Na(e){this.buffer=e,this.count=0}var gt=Ye.extend(function(){return{attributes:{},indices:null,dynamic:!0,_enabledAttributes:null,__used:0}},function(){this._cache=new Ji,this._attributeList=Object.keys(this.attributes),this.__vaoCache={}},{mainAttribute:"",pick:null,pickByRay:null,dirty:function(){for(var e=this.getEnabledAttributes(),t=0;t<e.length;t++)this.dirtyAttribute(e[t]);this.dirtyIndices(),this._enabledAttributes=null,this._cache.dirty("any")},dirtyIndices:function(){this._cache.dirtyAll("indices")},dirtyAttribute:function(e){this._cache.dirtyAll(Ei(e)),this._cache.dirtyAll("attributes")},getTriangleIndices:function(e,t){if(e<this.triangleCount&&e>=0){t||(t=[]);var r=this.indices;return t[0]=r[e*3],t[1]=r[e*3+1],t[2]=r[e*3+2],t}},setTriangleIndices:function(e,t){var r=this.indices;r[e*3]=t[0],r[e*3+1]=t[1],r[e*3+2]=t[2]},isUseIndices:function(){return!!this.indices},initIndicesFromArray:function(e){var t,r=this.vertexCount>65535?be.Uint32Array:be.Uint16Array;if(e[0]&&e[0].length){var i=0,n=3;t=new r(e.length*n);for(var a=0;a<e.length;a++)for(var s=0;s<n;s++)t[i++]=e[a][s]}else t=new r(e);this.indices=t},createAttribute:function(e,t,r,i){var n=new er(e,t,r,i);return this.attributes[e]&&this.removeAttribute(e),this.attributes[e]=n,this._attributeList.push(e),n},removeAttribute:function(e){var t=this._attributeList,r=t.indexOf(e);return r>=0?(t.splice(r,1),delete this.attributes[e],!0):!1},getAttribute:function(e){return this.attributes[e]},getEnabledAttributes:function(){var e=this._enabledAttributes,t=this._attributeList;if(e)return e;for(var r=[],i=this.vertexCount,n=0;n<t.length;n++){var a=t[n],s=this.attributes[a];s.value&&s.value.length===i*s.size&&r.push(a)}return this._enabledAttributes=r,r},getBufferChunks:function(e){var t=this._cache;t.use(e.__uid__);var r=t.isDirty("attributes"),i=t.isDirty("indices");if(r||i){this._updateBuffer(e.gl,r,i);for(var n=this.getEnabledAttributes(),a=0;a<n.length;a++)t.fresh(Ei(n[a]));t.fresh("attributes"),t.fresh("indices")}return t.fresh("any"),t.get("chunks")},_updateBuffer:function(e,t,r){var i=this._cache,n=i.get("chunks"),a=!1;n||(n=[],n[0]={attributeBuffers:[],indicesBuffer:null},i.put("chunks",n),a=!0);var s=n[0],o=s.attributeBuffers,l=s.indicesBuffer;if(t||a){var h=this.getEnabledAttributes(),u={};if(!a)for(var c=0;c<o.length;c++)u[o[c].name]=o[c];for(var d=0;d<h.length;d++){var f=h[d],v=this.attributes[f],m;a||(m=u[f]);var p;m?p=m.buffer:p=e.createBuffer(),i.isDirty(Ei(f))&&(e.bindBuffer(e.ARRAY_BUFFER,p),e.bufferData(e.ARRAY_BUFFER,v.value,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW)),o[d]=new La(f,v.type,p,v.size,v.semantic)}for(var c=d;c<o.length;c++)e.deleteBuffer(o[c].buffer);o.length=d}this.isUseIndices()&&(r||a)&&(l||(l=new Na(e.createBuffer()),s.indicesBuffer=l),l.count=this.indices.length,e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,l.buffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW))},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("chunks");if(r)for(var i=0;i<r.length;i++){for(var n=r[i],a=0;a<n.attributeBuffers.length;a++){var s=n.attributeBuffers[a];e.gl.deleteBuffer(s.buffer)}n.indicesBuffer&&e.gl.deleteBuffer(n.indicesBuffer.buffer)}if(this.__vaoCache){var o=e.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var h=this.__vaoCache[l].vao;h&&o.deleteVertexArrayOES(h)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});Object.defineProperty&&(Object.defineProperty(gt.prototype,"vertexCount",{enumerable:!1,get:function(){var e=this.attributes[this.mainAttribute];return e||(e=this.attributes[this._attributeList[0]]),!e||!e.value?0:e.value.length/e.size}}),Object.defineProperty(gt.prototype,"triangleCount",{enumerable:!1,get:function(){var e=this.indices;return e?e.length/3:0}}));gt.STATIC_DRAW=A.STATIC_DRAW;gt.DYNAMIC_DRAW=A.DYNAMIC_DRAW;gt.STREAM_DRAW=A.STREAM_DRAW;gt.AttributeBuffer=La;gt.IndicesBuffer=Na;gt.Attribute=er;var Ht=gt,Ge=T.create,jt=T.add,Rt=T.set,ct=Ht.Attribute,zt=Ht.extend(function(){return{attributes:{position:new ct("position","float",3,"POSITION"),texcoord0:new ct("texcoord0","float",2,"TEXCOORD_0"),texcoord1:new ct("texcoord1","float",2,"TEXCOORD_1"),normal:new ct("normal","float",3,"NORMAL"),tangent:new ct("tangent","float",4,"TANGENT"),color:new ct("color","float",4,"COLOR"),weight:new ct("weight","float",3,"WEIGHT"),joint:new ct("joint","float",4,"JOINT"),barycentric:new ct("barycentric","float",3,null)},boundingBox:null}},{mainAttribute:"position",updateBoundingBox:function(){var e=this.boundingBox;e||(e=this.boundingBox=new ke);var t=this.attributes.position.value;if(t&&t.length){var r=e.min,i=e.max,n=r.array,a=i.array;T.set(n,t[0],t[1],t[2]),T.set(a,t[0],t[1],t[2]);for(var s=3;s<t.length;){var o=t[s++],l=t[s++],h=t[s++];o<n[0]&&(n[0]=o),l<n[1]&&(n[1]=l),h<n[2]&&(n[2]=h),o>a[0]&&(a[0]=o),l>a[1]&&(a[1]=l),h>a[2]&&(a[2]=h)}r._dirty=!0,i._dirty=!0}},generateVertexNormals:function(){if(!!this.vertexCount){var e=this.indices,t=this.attributes,r=t.position.value,i=t.normal.value;if(!i||i.length!==r.length)i=t.normal.value=new be.Float32Array(r.length);else for(var n=0;n<i.length;n++)i[n]=0;for(var a=Ge(),s=Ge(),o=Ge(),l=Ge(),h=Ge(),u=Ge(),c=e?e.length:this.vertexCount,d,f,v,m=0;m<c;){e?(d=e[m++],f=e[m++],v=e[m++]):(d=m++,f=m++,v=m++),Rt(a,r[d*3],r[d*3+1],r[d*3+2]),Rt(s,r[f*3],r[f*3+1],r[f*3+2]),Rt(o,r[v*3],r[v*3+1],r[v*3+2]),T.sub(l,a,s),T.sub(h,s,o),T.cross(u,l,h);for(var n=0;n<3;n++)i[d*3+n]=i[d*3+n]+u[n],i[f*3+n]=i[f*3+n]+u[n],i[v*3+n]=i[v*3+n]+u[n]}for(var n=0;n<i.length;)Rt(u,i[n],i[n+1],i[n+2]),T.normalize(u,u),i[n++]=u[0],i[n++]=u[1],i[n++]=u[2];this.dirty()}},generateFaceNormals:function(){if(!!this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.indices,t=this.attributes,r=t.position.value,i=t.normal.value,n=Ge(),a=Ge(),s=Ge(),o=Ge(),l=Ge(),h=Ge();i||(i=t.normal.value=new Float32Array(r.length));for(var u=e?e.length:this.vertexCount,c,d,f,v=0;v<u;){e?(c=e[v++],d=e[v++],f=e[v++]):(c=v++,d=v++,f=v++),Rt(n,r[c*3],r[c*3+1],r[c*3+2]),Rt(a,r[d*3],r[d*3+1],r[d*3+2]),Rt(s,r[f*3],r[f*3+1],r[f*3+2]),T.sub(o,n,a),T.sub(l,a,s),T.cross(h,o,l),T.normalize(h,h);for(var m=0;m<3;m++)i[c*3+m]=h[m],i[d*3+m]=h[m],i[f*3+m]=h[m]}this.dirty()}},generateTangents:function(){if(!!this.vertexCount){var e=this.vertexCount,t=this.attributes;t.tangent.value||(t.tangent.value=new Float32Array(e*4));var r=t.texcoord0.value,i=t.position.value,n=t.tangent.value,a=t.normal.value;if(!r){console.warn("Geometry without texcoords can't generate tangents.");return}for(var s=[],o=[],l=0;l<e;l++)s[l]=[0,0,0],o[l]=[0,0,0];for(var h=[0,0,0],u=[0,0,0],c=this.indices,d=c?c.length:this.vertexCount,f,v,m,l=0;l<d;){c?(f=c[l++],v=c[l++],m=c[l++]):(f=l++,v=l++,m=l++);var p=r[f*2],_=r[v*2],x=r[m*2],y=r[f*2+1],g=r[v*2+1],E=r[m*2+1],S=i[f*3],R=i[v*3],b=i[m*3],M=i[f*3+1],F=i[v*3+1],w=i[m*3+1],U=i[f*3+2],O=i[v*3+2],N=i[m*3+2],G=R-S,B=b-S,Z=F-M,I=w-M,ce=O-U,k=N-U,ye=_-p,ae=x-p,ve=g-y,me=E-y,Oe=1/(ye*me-ve*ae);h[0]=(me*G-ve*B)*Oe,h[1]=(me*Z-ve*I)*Oe,h[2]=(me*ce-ve*k)*Oe,u[0]=(ye*B-ae*G)*Oe,u[1]=(ye*I-ae*Z)*Oe,u[2]=(ye*k-ae*ce)*Oe,jt(s[f],s[f],h),jt(s[v],s[v],h),jt(s[m],s[m],h),jt(o[f],o[f],u),jt(o[v],o[v],u),jt(o[m],o[m],u)}for(var Be=Ge(),Re=Ge(),ze=Ge(),l=0;l<e;l++){ze[0]=a[l*3],ze[1]=a[l*3+1],ze[2]=a[l*3+2];var Ze=s[l];T.scale(Be,ze,T.dot(ze,Ze)),T.sub(Be,Ze,Be),T.normalize(Be,Be),T.cross(Re,ze,Ze),n[l*4]=Be[0],n[l*4+1]=Be[1],n[l*4+2]=Be[2],n[l*4+3]=T.dot(Re,o[l])<0?-1:1}this.dirty()}},isUniqueVertex:function(){return this.isUseIndices()?this.vertexCount===this.indices.length:!0},generateUniqueVertex:function(){if(!(!this.vertexCount||!this.indices)){this.indices.length>65535&&(this.indices=new be.Uint32Array(this.indices));for(var e=this.attributes,t=this.indices,r=this.getEnabledAttributes(),i={},n=0;n<r.length;n++){var a=r[n];i[a]=e[a].value,e[a].init(this.indices.length)}for(var s=0,o=0;o<t.length;o++){for(var l=t[o],n=0;n<r.length;n++)for(var a=r[n],h=e[a].value,u=e[a].size,c=0;c<u;c++)h[s*u+c]=i[a][l*u+c];t[o]=s,s++}this.dirty()}},generateBarycentric:function(){if(!!this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.attributes,t=e.barycentric.value,r=this.indices;if(!(t&&t.length===r.length*3)){t=e.barycentric.value=new Float32Array(r.length*3);for(var i=0;i<(r?r.length:this.vertexCount/3);)for(var n=0;n<3;n++){var a=r?r[i++]:i*3+n;t[a*3+n]=1}this.dirty()}}},applyTransform:function(e){var t=this.attributes,r=t.position.value,i=t.normal.value,n=t.tangent.value;e=e.array;var a=C.create();C.invert(a,e),C.transpose(a,a);var s=T.transformMat4,o=T.forEach;o(r,3,0,null,s,e),i&&o(i,3,0,null,s,a),n&&o(n,4,0,null,s,a),this.boundingBox&&this.updateBoundingBox()},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("chunks");if(r)for(var i=0;i<r.length;i++){for(var n=r[i],a=0;a<n.attributeBuffers.length;a++){var s=n.attributeBuffers[a];e.gl.deleteBuffer(s.buffer)}n.indicesBuffer&&e.gl.deleteBuffer(n.indicesBuffer.buffer)}if(this.__vaoCache){var o=e.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var h=this.__vaoCache[l].vao;h&&o.deleteVertexArrayOES(h)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});zt.STATIC_DRAW=Ht.STATIC_DRAW;zt.DYNAMIC_DRAW=Ht.DYNAMIC_DRAW;zt.STREAM_DRAW=Ht.STREAM_DRAW;zt.AttributeBuffer=Ht.AttributeBuffer;zt.IndicesBuffer=Ht.IndicesBuffer;zt.Attribute=ct;var Ae=zt,Zo=`vec3 calcAmbientSHLight(int idx, vec3 N) {
 int offset = 9 * idx;
 return ambientSHLightCoefficients[0]
 + ambientSHLightCoefficients[1] * N.x
 + ambientSHLightCoefficients[2] * N.y
 + ambientSHLightCoefficients[3] * N.z
 + ambientSHLightCoefficients[4] * N.x * N.z
 + ambientSHLightCoefficients[5] * N.z * N.y
 + ambientSHLightCoefficients[6] * N.y * N.x
 + ambientSHLightCoefficients[7] * (3.0 * N.z * N.z - 1.0)
 + ambientSHLightCoefficients[8] * (N.x * N.x - N.y * N.y);
}`,at="uniform vec3 ",or="uniform float ",qt="@export clay.header.",Yt="@end",Pe=":unconfigurable;",$o=[qt+"directional_light",at+"directionalLightDirection[DIRECTIONAL_LIGHT_COUNT]"+Pe,at+"directionalLightColor[DIRECTIONAL_LIGHT_COUNT]"+Pe,Yt,qt+"ambient_light",at+"ambientLightColor[AMBIENT_LIGHT_COUNT]"+Pe,Yt,qt+"ambient_sh_light",at+"ambientSHLightColor[AMBIENT_SH_LIGHT_COUNT]"+Pe,at+"ambientSHLightCoefficients[AMBIENT_SH_LIGHT_COUNT * 9]"+Pe,Zo,Yt,qt+"ambient_cubemap_light",at+"ambientCubemapLightColor[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Pe,"uniform samplerCube ambientCubemapLightCubemap[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Pe,"uniform sampler2D ambientCubemapLightBRDFLookup[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Pe,Yt,qt+"point_light",at+"pointLightPosition[POINT_LIGHT_COUNT]"+Pe,or+"pointLightRange[POINT_LIGHT_COUNT]"+Pe,at+"pointLightColor[POINT_LIGHT_COUNT]"+Pe,Yt,qt+"spot_light",at+"spotLightPosition[SPOT_LIGHT_COUNT]"+Pe,at+"spotLightDirection[SPOT_LIGHT_COUNT]"+Pe,or+"spotLightRange[SPOT_LIGHT_COUNT]"+Pe,or+"spotLightUmbraAngleCosine[SPOT_LIGHT_COUNT]"+Pe,or+"spotLightPenumbraAngleCosine[SPOT_LIGHT_COUNT]"+Pe,or+"spotLightFalloffFactor[SPOT_LIGHT_COUNT]"+Pe,at+"spotLightColor[SPOT_LIGHT_COUNT]"+Pe,Yt].join(`
`);L.import($o);var Ko=dt.extend(function(){return{color:[1,1,1],intensity:1,castShadow:!0,shadowResolution:512,group:0}},{type:"",clone:function(){var e=dt.prototype.clone.call(this);return e.color=Array.prototype.slice.call(this.color),e.intensity=this.intensity,e.castShadow=this.castShadow,e.shadowResolution=this.shadowResolution,e}}),lt=Ko,jr=function(e,t){this.normal=e||new P(0,1,0),this.distance=t||0};jr.prototype={constructor:jr,distanceToPoint:function(e){return T.dot(e.array,this.normal.array)-this.distance},projectPoint:function(e,t){t||(t=new P);var r=this.distanceToPoint(e);return T.scaleAndAdd(t.array,e.array,this.normal.array,-r),t._dirty=!0,t},normalize:function(){var e=1/T.len(this.normal.array);T.scale(this.normal.array,e),this.distance*=e},intersectFrustum:function(e){for(var t=e.vertices,r=this.normal.array,i=T.dot(t[0].array,r)>this.distance,n=1;n<8;n++)if(T.dot(t[n].array,r)>this.distance!=i)return!0},intersectLine:function(){var e=T.create();return function(t,r,i){var n=this.distanceToPoint(t),a=this.distanceToPoint(r);if(n>0&&a>0||n<0&&a<0)return null;var s=this.normal.array,o=this.distance,l=t.array;T.sub(e,r.array,t.array),T.normalize(e,e);var h=T.dot(s,e);if(h===0)return null;i||(i=new P);var u=(T.dot(s,l)-o)/h;return T.scaleAndAdd(i.array,l,e,-u),i._dirty=!0,i}}(),applyTransform:function(){var e=C.create(),t=D.create(),r=D.create();return r[3]=1,function(i){i=i.array,T.scale(r,this.normal.array,this.distance),D.transformMat4(r,r,i),this.distance=T.dot(r,this.normal.array),C.invert(e,i),C.transpose(e,e),t[3]=0,T.copy(t,this.normal.array),D.transformMat4(t,t,e),T.copy(this.normal.array,t)}}(),copy:function(e){T.copy(this.normal.array,e.normal.array),this.normal._dirty=!0,this.distance=e.distance},clone:function(){var e=new jr;return e.copy(this),e}};var Pa=jr,Ee=T.set,Gn=T.copy,kn=T.transformMat4,Ai=Math.min,Si=Math.max,Da=function(){this.planes=[];for(var e=0;e<6;e++)this.planes.push(new Pa);this.boundingBox=new ke,this.vertices=[];for(var e=0;e<8;e++)this.vertices[e]=T.fromValues(0,0,0)};Da.prototype={setFromProjection:function(e){var t=this.planes,r=e.array,i=r[0],n=r[1],a=r[2],s=r[3],o=r[4],l=r[5],h=r[6],u=r[7],c=r[8],d=r[9],f=r[10],v=r[11],m=r[12],p=r[13],_=r[14],x=r[15];Ee(t[0].normal.array,s-i,u-o,v-c),t[0].distance=-(x-m),t[0].normalize(),Ee(t[1].normal.array,s+i,u+o,v+c),t[1].distance=-(x+m),t[1].normalize(),Ee(t[2].normal.array,s+n,u+l,v+d),t[2].distance=-(x+p),t[2].normalize(),Ee(t[3].normal.array,s-n,u-l,v-d),t[3].distance=-(x-p),t[3].normalize(),Ee(t[4].normal.array,s-a,u-h,v-f),t[4].distance=-(x-_),t[4].normalize(),Ee(t[5].normal.array,s+a,u+h,v+f),t[5].distance=-(x+_),t[5].normalize();var y=this.boundingBox,g=this.vertices;if(x===0){var E=l/i,S=-_/(f-1),R=-_/(f+1),b=-R/l,M=-S/l;y.min.set(-b*E,-b,R),y.max.set(b*E,b,S),Ee(g[0],-b*E,-b,R),Ee(g[1],-b*E,b,R),Ee(g[2],b*E,-b,R),Ee(g[3],b*E,b,R),Ee(g[4],-M*E,-M,S),Ee(g[5],-M*E,M,S),Ee(g[6],M*E,-M,S),Ee(g[7],M*E,M,S)}else{var F=(-1-m)/i,w=(1-m)/i,U=(1-p)/l,O=(-1-p)/l,N=(-1-_)/f,G=(1-_)/f;y.min.set(Math.min(F,w),Math.min(O,U),Math.min(G,N)),y.max.set(Math.max(w,F),Math.max(U,O),Math.max(N,G));var B=y.min.array,Z=y.max.array;Ee(g[0],B[0],B[1],B[2]),Ee(g[1],B[0],Z[1],B[2]),Ee(g[2],Z[0],B[1],B[2]),Ee(g[3],Z[0],Z[1],B[2]),Ee(g[4],B[0],B[1],Z[2]),Ee(g[5],B[0],Z[1],Z[2]),Ee(g[6],Z[0],B[1],Z[2]),Ee(g[7],Z[0],Z[1],Z[2])}},getTransformedBoundingBox:function(){var e=T.create();return function(t,r){var i=this.vertices,n=r.array,a=t.min,s=t.max,o=a.array,l=s.array,h=i[0];kn(e,h,n),Gn(o,e),Gn(l,e);for(var u=1;u<8;u++)h=i[u],kn(e,h,n),o[0]=Ai(e[0],o[0]),o[1]=Ai(e[1],o[1]),o[2]=Ai(e[2],o[2]),l[0]=Si(e[0],l[0]),l[1]=Si(e[1],l[1]),l[2]=Si(e[2],l[2]);return a._dirty=!0,s._dirty=!0,t}}()};var rn=Da,Qo=dt.extend(function(){return{projectionMatrix:new z,invProjectionMatrix:new z,viewMatrix:new z,frustum:new rn}},function(){this.update(!0)},{update:function(e){dt.prototype.update.call(this,e),z.invert(this.viewMatrix,this.worldTransform),this.updateProjectionMatrix(),z.invert(this.invProjectionMatrix,this.projectionMatrix),this.frustum.setFromProjection(this.projectionMatrix)},setViewMatrix:function(e){z.copy(this.viewMatrix,e),z.invert(this.worldTransform,e),this.decomposeWorldTransform()},decomposeProjectionMatrix:function(){},setProjectionMatrix:function(e){z.copy(this.projectionMatrix,e),z.invert(this.invProjectionMatrix,e),this.decomposeProjectionMatrix()},updateProjectionMatrix:function(){},castRay:function(){var e=D.create();return function(t,r){var i=r!==void 0?r:new $r,n=t.array[0],a=t.array[1];return D.set(e,n,a,-1,1),D.transformMat4(e,e,this.invProjectionMatrix.array),D.transformMat4(e,e,this.worldTransform.array),T.scale(i.origin.array,e,1/e[3]),D.set(e,n,a,1,1),D.transformMat4(e,e,this.invProjectionMatrix.array),D.transformMat4(e,e,this.worldTransform.array),T.scale(e,e,1/e[3]),T.sub(i.direction.array,e,i.origin.array),T.normalize(i.direction.array,i.direction.array),i.direction._dirty=!0,i.origin._dirty=!0,i}}()}),tr=Qo,Jo=C.create(),Vn=C.create(),bi={};function el(e){var t=[],r=Object.keys(e);r.sort();for(var i=0;i<r.length;i++){var n=r[i];t.push(n+" "+e[n])}var a=t.join(`
`);if(bi[a])return bi[a];var s=De.genGUID();return bi[a]=s,s}function oi(){this.opaque=[],this.transparent=[],this._opaqueCount=0,this._transparentCount=0}oi.prototype.startCount=function(){this._opaqueCount=0,this._transparentCount=0};oi.prototype.add=function(e,t){t?this.transparent[this._transparentCount++]=e:this.opaque[this._opaqueCount++]=e};oi.prototype.endCount=function(){this.transparent.length=this._transparentCount,this.opaque.length=this._opaqueCount};var tl=dt.extend(function(){return{material:null,lights:[],viewBoundingBoxLastFrame:new ke,shadowUniforms:{},_cameraList:[],_lightUniforms:{},_previousLightNumber:{},_lightNumber:{},_lightProgramKeys:{},_nodeRepository:{},_renderLists:new xa(20)}},function(){this._scene=this},{addToScene:function(e){e instanceof tr?(this._cameraList.length>0&&console.warn("Found multiple camera in one scene. Use the fist one."),this._cameraList.push(e)):e instanceof lt&&this.lights.push(e),e.name&&(this._nodeRepository[e.name]=e)},removeFromScene:function(e){var t;e instanceof tr?(t=this._cameraList.indexOf(e),t>=0&&this._cameraList.splice(t,1)):e instanceof lt&&(t=this.lights.indexOf(e),t>=0&&this.lights.splice(t,1)),e.name&&delete this._nodeRepository[e.name]},getNode:function(e){return this._nodeRepository[e]},setMainCamera:function(e){var t=this._cameraList.indexOf(e);t>=0&&this._cameraList.splice(t,1),this._cameraList.unshift(e)},getMainCamera:function(){return this._cameraList[0]},getLights:function(){return this.lights},updateLights:function(){var e=this.lights;this._previousLightNumber=this._lightNumber;for(var t={},r=0;r<e.length;r++){var i=e[r];if(!i.invisible){var n=i.group;t[n]||(t[n]={}),t[n][i.type]=t[n][i.type]||0,t[n][i.type]++}}this._lightNumber=t;for(var a in t)this._lightProgramKeys[a]=el(t[a]);this._updateLightUniforms()},cloneNode:function(e){var t=e.clone(),r={};function i(n,a){r[n.__uid__]=a;for(var s=0;s<n._children.length;s++){var o=n._children[s],l=a._children[s];i(o,l)}}return i(e,t),t.traverse(function(n){n.skeleton&&(n.skeleton=n.skeleton.clone(r)),n.material&&(n.material=n.material.clone())}),t},updateRenderList:function(e,t){var r=e.__uid__,i=this._renderLists.get(r);i||(i=new oi,this._renderLists.put(r,i)),i.startCount(),t&&(this.viewBoundingBoxLastFrame.min.set(1/0,1/0,1/0),this.viewBoundingBoxLastFrame.max.set(-1/0,-1/0,-1/0));var n=this.material&&this.material.transparent||!1;return this._doUpdateRenderList(this,e,n,i,t),i.endCount(),i},getRenderList:function(e){return this._renderLists.get(e.__uid__)},_doUpdateRenderList:function(e,t,r,i,n){if(!e.invisible)for(var a=0;a<e._children.length;a++){var s=e._children[a];if(s.isRenderable()){var o=s.isSkinnedMesh()?Jo:s.worldTransform.array,l=s.geometry;C.multiplyAffine(Vn,t.viewMatrix.array,o),(n&&!l.boundingBox||!this.isFrustumCulled(s,t,Vn))&&i.add(s,s.material.transparent||r)}s._children.length>0&&this._doUpdateRenderList(s,t,r,i,n)}},isFrustumCulled:function(){var e=new ke,t=new z;return function(r,i,n){var a=r.boundingBox;if(a||(r.skeleton&&r.skeleton.boundingBox?a=r.skeleton.boundingBox:a=r.geometry.boundingBox),!a)return!1;if(t.array=n,e.transformFrom(a,t),r.castShadow&&this.viewBoundingBoxLastFrame.union(e),r.frustumCulling){if(!e.intersectBoundingBox(i.frustum.boundingBox))return!0;t.array=i.projectionMatrix.array,e.max.array[2]>0&&e.min.array[2]<0&&(e.max.array[2]=-1e-20),e.applyProjection(t);var s=e.min.array,o=e.max.array;if(o[0]<-1||s[0]>1||o[1]<-1||s[1]>1||o[2]<-1||s[2]>1)return!0}return!1}}(),_updateLightUniforms:function(){var e=this.lights;e.sort(rl);var t=this._lightUniforms;for(var r in t)for(var i in t[r])t[r][i].value.length=0;for(var n=0;n<e.length;n++){var a=e[n];if(!a.invisible){var r=a.group;for(var i in a.uniformTemplates){var s=a.uniformTemplates[i],o=s.value(a);if(o!=null){t[r]||(t[r]={}),t[r][i]||(t[r][i]={type:"",value:[]});var l=t[r][i];switch(l.type=s.type+"v",s.type){case"1i":case"1f":case"t":l.value.push(o);break;case"2f":case"3f":case"4f":for(var h=0;h<o.length;h++)l.value.push(o[h]);break;default:console.error("Unkown light uniform type "+s.type)}}}}}},getLightGroups:function(){var e=[];for(var t in this._lightNumber)e.push(t);return e},getNumberChangedLightGroups:function(){var e=[];for(var t in this._lightNumber)this.isLightNumberChanged(t)&&e.push(t);return e},isLightNumberChanged:function(e){var t=this._previousLightNumber,r=this._lightNumber;for(var i in r[e])if(!t[e]||r[e][i]!==t[e][i])return!0;for(var i in t[e])if(!r[e]||r[e][i]!==t[e][i])return!0;return!1},getLightsNumbers:function(e){return this._lightNumber[e]},getProgramKey:function(e){return this._lightProgramKeys[e]},setLightUniforms:function(){function e(t,r,i){for(var n in t){var a=t[n];if(a.type==="tv"){if(!r.hasUniform(n))continue;for(var s=[],o=0;o<a.value.length;o++){var l=a.value[o],h=r.takeCurrentTextureSlot(i,l);s.push(h)}r.setUniform(i.gl,"1iv",n,s)}else r.setUniform(i.gl,a.type,n,a.value)}}return function(t,r,i){e(this._lightUniforms[r],t,i),e(this.shadowUniforms,t,i)}}(),dispose:function(){this.material=null,this._opaqueList=[],this._transparentList=[],this.lights=[],this._lightUniforms={},this._lightNumber={},this._nodeRepository={}}});function rl(e,t){if(t.castShadow&&!e.castShadow)return!0}var Ct=tl,Fr=Ra.isPowerOfTwo,il=["px","nx","py","ny","pz","nz"],nn=Y.extend(function(){return{image:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},pixels:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},mipmaps:[]}},{textureType:"textureCube",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),this.updateCommon(e);var r=this.format,i=this.type;t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_S,this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_T,this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAG_FILTER,this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MIN_FILTER,this.getAvailableMinFilter());var n=e.getGLExtension("EXT_texture_filter_anisotropic");if(n&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),i===36193){var a=e.getGLExtension("OES_texture_half_float");a||(i=A.FLOAT)}if(this.mipmaps.length)for(var s=this.width,o=this.height,l=0;l<this.mipmaps.length;l++){var h=this.mipmaps[l];this._updateTextureData(t,h,l,s,o,r,i),s/=2,o/=2}else this._updateTextureData(t,this,0,this.width,this.height,r,i),!this.NPOT&&this.useMipmap&&t.generateMipmap(t.TEXTURE_CUBE_MAP);t.bindTexture(t.TEXTURE_CUBE_MAP,null)},_updateTextureData:function(e,t,r,i,n,a,s){for(var o=0;o<6;o++){var l=il[o],h=t.image&&t.image[l];h?e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,r,a,a,s,h):e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,r,a,i,n,0,a,s,t.pixels&&t.pixels[l])}},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_CUBE_MAP))},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,null)},isPowerOfTwo:function(){return this.image.px?Fr(this.image.px.width)&&Fr(this.image.px.height):Fr(this.width)&&Fr(this.height)},isRenderable:function(){return this.image.px?Zt(this.image.px)&&Zt(this.image.nx)&&Zt(this.image.py)&&Zt(this.image.ny)&&Zt(this.image.pz)&&Zt(this.image.nz):!!(this.width&&this.height)},load:function(e,t){var r=0,i=this;return De.each(e,function(n,a){var s=be.createImage();t&&(s.crossOrigin=t),s.onload=function(){r--,r===0&&(i.dirty(),i.trigger("success",i))},s.onerror=function(){r--},r++,s.src=n,i.image[a]=s}),this}});Object.defineProperty(nn.prototype,"width",{get:function(){return this.image&&this.image.px?this.image.px.width:this._width},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty(nn.prototype,"height",{get:function(){return this.image&&this.image.px?this.image.px.height:this._height},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});function Zt(e){return e.width>0&&e.height>0}var gr=nn,nl=tr.extend({fov:50,aspect:1,near:.1,far:2e3},{updateProjectionMatrix:function(){var e=this.fov/180*Math.PI;this.projectionMatrix.perspective(e,this.aspect,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array,t=Math.atan(1/e[5])*2;this.fov=t/Math.PI*180,this.aspect=e[5]/e[0],this.near=e[14]/(e[10]-1),this.far=e[14]/(e[10]+1)},clone:function(){var e=tr.prototype.clone.call(this);return e.fov=this.fov,e.aspect=this.aspect,e.near=this.near,e.far=this.far,e}}),Le=nl,Ur="framebuffer",pt="renderbuffer",Wn=pt+"_width",Xn=pt+"_height",wi=pt+"_attached",Ci="depthtexture_attached",Mt=A.FRAMEBUFFER,lr=A.RENDERBUFFER,fr=A.DEPTH_ATTACHMENT,Ia=A.COLOR_ATTACHMENT0,Sr=Ye.extend({depthBuffer:!0,viewport:null,_width:0,_height:0,_textures:null,_boundRenderer:null},function(){this._cache=new Ji,this._textures={}},{getTextureWidth:function(){return this._width},getTextureHeight:function(){return this._height},bind:function(e){if(e.__currentFrameBuffer){if(e.__currentFrameBuffer===this)return;console.warn("Renderer already bound with another framebuffer. Unbind it first")}e.__currentFrameBuffer=this;var t=e.gl;t.bindFramebuffer(Mt,this._getFrameBufferGL(e)),this._boundRenderer=e;var r=this._cache;r.put("viewport",e.viewport);var i=!1,n,a;for(var s in this._textures){i=!0;var o=this._textures[s];o&&(n=o.texture.width,a=o.texture.height,this._doAttach(e,o.texture,s,o.target))}this._width=n,this._height=a,!i&&this.depthBuffer&&console.error("Must attach texture before bind, or renderbuffer may have incorrect width and height."),this.viewport?e.setViewport(this.viewport):e.setViewport(0,0,n,a,1);var l=r.get("attached_textures");if(l){for(var s in l)if(!this._textures[s]){var h=l[s];this._doDetach(t,s,h)}}if(!r.get(Ci)&&this.depthBuffer){r.miss(pt)&&r.put(pt,t.createRenderbuffer());var u=r.get(pt);(n!==r.get(Wn)||a!==r.get(Xn))&&(t.bindRenderbuffer(lr,u),t.renderbufferStorage(lr,t.DEPTH_COMPONENT16,n,a),r.put(Wn,n),r.put(Xn,a),t.bindRenderbuffer(lr,null)),r.get(wi)||(t.framebufferRenderbuffer(Mt,fr,lr,u),r.put(wi,!0))}},unbind:function(e){e.__currentFrameBuffer=null;var t=e.gl;t.bindFramebuffer(Mt,null),this._boundRenderer=null,this._cache.use(e.__uid__);var r=this._cache.get("viewport");r&&e.setViewport(r),this.updateMipmap(e)},updateMipmap:function(e){var t=e.gl;for(var r in this._textures){var i=this._textures[r];if(i){var n=i.texture;if(!n.NPOT&&n.useMipmap&&n.minFilter===Y.LINEAR_MIPMAP_LINEAR){var a=n.textureType==="textureCube"?A.TEXTURE_CUBE_MAP:A.TEXTURE_2D;t.bindTexture(a,n.getWebGLTexture(e)),t.generateMipmap(a),t.bindTexture(a,null)}}}},checkStatus:function(e){return e.checkFramebufferStatus(Mt)},_getFrameBufferGL:function(e){var t=this._cache;return t.use(e.__uid__),t.miss(Ur)&&t.put(Ur,e.gl.createFramebuffer()),t.get(Ur)},attach:function(e,t,r){if(!e.width)throw new Error("The texture attached to color buffer is not a valid.");t=t||Ia,r=r||A.TEXTURE_2D;var i=this._boundRenderer,n=i&&i.gl,a;if(n){var s=this._cache;s.use(i.__uid__),a=s.get("attached_textures")}var o=this._textures[t];if(!(o&&o.target===r&&o.texture===e&&a&&a[t]!=null)){var l=!0;i&&(l=this._doAttach(i,e,t,r),this.viewport||i.setViewport(0,0,e.width,e.height,1)),l&&(this._textures[t]=this._textures[t]||{},this._textures[t].texture=e,this._textures[t].target=r)}},_doAttach:function(e,t,r,i){var n=e.gl,a=t.getWebGLTexture(e),s=this._cache.get("attached_textures");if(s&&s[r]){var o=s[r];if(o.texture===t&&o.target===i)return}r=+r;var l=!0;if(r===fr||r===A.DEPTH_STENCIL_ATTACHMENT){var h=e.getGLExtension("WEBGL_depth_texture");if(h||(console.error("Depth texture is not supported by the browser"),l=!1),t.format!==A.DEPTH_COMPONENT&&t.format!==A.DEPTH_STENCIL&&(console.error("The texture attached to depth buffer is not a valid."),l=!1),l){var u=this._cache.get(pt);u&&(n.framebufferRenderbuffer(Mt,fr,lr,null),n.deleteRenderbuffer(u),this._cache.put(pt,!1)),this._cache.put(wi,!1),this._cache.put(Ci,!0)}}return n.framebufferTexture2D(Mt,r,i,a,0),s||(s={},this._cache.put("attached_textures",s)),s[r]=s[r]||{},s[r].texture=t,s[r].target=i,l},_doDetach:function(e,t,r){e.framebufferTexture2D(Mt,t,r,null,0);var i=this._cache.get("attached_textures");i&&i[t]&&(i[t]=null),(t===fr||t===A.DEPTH_STENCIL_ATTACHMENT)&&this._cache.put(Ci,!1)},detach:function(e,t){if(this._textures[e]=null,this._boundRenderer){var r=this._cache;r.use(this._boundRenderer.__uid__),this._doDetach(this._boundRenderer.gl,e,t)}},dispose:function(e){var t=e.gl,r=this._cache;r.use(e.__uid__);var i=r.get(pt);i&&t.deleteRenderbuffer(i);var n=r.get(Ur);n&&t.deleteFramebuffer(n),r.deleteContext(e.__uid__),this._textures={}}});Sr.DEPTH_ATTACHMENT=fr;Sr.COLOR_ATTACHMENT0=Ia;Sr.STENCIL_ATTACHMENT=A.STENCIL_ATTACHMENT;Sr.DEPTH_STENCIL_ATTACHMENT=A.DEPTH_STENCIL_ATTACHMENT;var Ue=Sr,al=["px","nx","py","ny","pz","nz"],sl=Ye.extend(function(){var e={position:new P,far:1e3,near:.1,texture:null,shadowMapPass:null},t=e._cameras={px:new Le({fov:90}),nx:new Le({fov:90}),py:new Le({fov:90}),ny:new Le({fov:90}),pz:new Le({fov:90}),nz:new Le({fov:90})};return t.px.lookAt(P.POSITIVE_X,P.NEGATIVE_Y),t.nx.lookAt(P.NEGATIVE_X,P.NEGATIVE_Y),t.py.lookAt(P.POSITIVE_Y,P.POSITIVE_Z),t.ny.lookAt(P.NEGATIVE_Y,P.NEGATIVE_Z),t.pz.lookAt(P.POSITIVE_Z,P.NEGATIVE_Y),t.nz.lookAt(P.NEGATIVE_Z,P.NEGATIVE_Y),e._frameBuffer=new Ue,e},{getCamera:function(e){return this._cameras[e]},render:function(e,t,r){var i=e.gl;r||t.update();for(var n=this.texture.width,a=2*Math.atan(n/(n-.5))/Math.PI*180,s=0;s<6;s++){var o=al[s],l=this._cameras[o];if(P.copy(l.position,this.position),l.far=this.far,l.near=this.near,l.fov=a,this.shadowMapPass){l.update();var h=t.getBoundingBox();h.applyTransform(l.viewMatrix),t.viewBoundingBoxLastFrame.copy(h),this.shadowMapPass.render(e,t,l,!0)}this._frameBuffer.attach(this.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+s),this._frameBuffer.bind(e),e.render(t,l,!0),this._frameBuffer.unbind(e)}},dispose:function(e){this._frameBuffer.dispose(e)}}),an=sl,ol=Ae.extend({dynamic:!1,widthSegments:1,heightSegments:1},function(){this.build()},{build:function(){for(var e=this.heightSegments,t=this.widthSegments,r=this.attributes,i=[],n=[],a=[],s=[],o=0;o<=e;o++)for(var l=o/e,h=0;h<=t;h++){var u=h/t;if(i.push([2*u-1,2*l-1,0]),n&&n.push([u,l]),a&&a.push([0,0,1]),h<t&&o<e){var c=h+o*(t+1);s.push([c,c+1,c+t+1]),s.push([c+t+1,c+1,c+t+2])}}r.position.fromArray(i),r.texcoord0.fromArray(n),r.normal.fromArray(a),this.initIndicesFromArray(s),this.boundingBox=new ke,this.boundingBox.min.set(-1,-1,0),this.boundingBox.max.set(1,1,0)}}),sn=ol,ge=new z,ll=Ae.extend({dynamic:!1,widthSegments:1,heightSegments:1,depthSegments:1,inside:!1},function(){this.build()},{build:function(){var e={px:$t("px",this.depthSegments,this.heightSegments),nx:$t("nx",this.depthSegments,this.heightSegments),py:$t("py",this.widthSegments,this.depthSegments),ny:$t("ny",this.widthSegments,this.depthSegments),pz:$t("pz",this.widthSegments,this.heightSegments),nz:$t("nz",this.widthSegments,this.heightSegments)},t=["position","texcoord0","normal"],r=0,i=0;for(var n in e)r+=e[n].vertexCount,i+=e[n].indices.length;for(var a=0;a<t.length;a++)this.attributes[t[a]].init(r);this.indices=new be.Uint16Array(i);var s=0,o=0;for(var n in e){for(var l=e[n],a=0;a<t.length;a++)for(var h=t[a],u=l.attributes[h].value,c=l.attributes[h].size,d=h==="normal",f=0;f<u.length;f++){var v=u[f];this.inside&&d&&(v=-v),this.attributes[h].value[f+c*o]=v}for(var m=l.indices.length,f=0;f<l.indices.length;f++)this.indices[f+s]=o+l.indices[this.inside?m-f-1:f];s+=l.indices.length,o+=l.vertexCount}this.boundingBox=new ke,this.boundingBox.max.set(1,1,1),this.boundingBox.min.set(-1,-1,-1)}});function $t(e,t,r){ge.identity();var i=new sn({widthSegments:t,heightSegments:r});switch(e){case"px":z.translate(ge,ge,P.POSITIVE_X),z.rotateY(ge,ge,Math.PI/2);break;case"nx":z.translate(ge,ge,P.NEGATIVE_X),z.rotateY(ge,ge,-Math.PI/2);break;case"py":z.translate(ge,ge,P.POSITIVE_Y),z.rotateX(ge,ge,-Math.PI/2);break;case"ny":z.translate(ge,ge,P.NEGATIVE_Y),z.rotateX(ge,ge,Math.PI/2);break;case"pz":z.translate(ge,ge,P.POSITIVE_Z);break;case"nz":z.translate(ge,ge,P.NEGATIVE_Z),z.rotateY(ge,ge,Math.PI);break}return i.applyTransform(ge),i}var Oa=ll,hl=`@export clay.skybox.vertex
#define SHADER_NAME skybox
uniform mat4 world : WORLD;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
varying vec3 v_WorldPosition;
void main()
{
 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end
@export clay.skybox.fragment
#define PI 3.1415926
uniform mat4 viewInverse : VIEWINVERSE;
#ifdef EQUIRECTANGULAR
uniform sampler2D environmentMap;
#else
uniform samplerCube environmentMap;
#endif
uniform float lod: 0.0;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
@import clay.util.srgb
@import clay.util.ACES
void main()
{
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
#ifdef EQUIRECTANGULAR
 float phi = acos(V.y);
 float theta = atan(-V.x, V.z) + PI * 0.5;
 vec2 uv = vec2(theta / 2.0 / PI, phi / PI);
 vec4 texel = decodeHDR(texture2D(environmentMap, fract(uv)));
#else
 #if defined(LOD) || defined(SUPPORT_TEXTURE_LOD)
 vec4 texel = decodeHDR(textureCubeLodEXT(environmentMap, V, lod));
 #else
 vec4 texel = decodeHDR(textureCube(environmentMap, V));
 #endif
#endif
#ifdef SRGB_DECODE
 texel = sRGBToLinear(texel);
#endif
#ifdef TONEMAPPING
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
#ifdef SRGB_ENCODE
 texel = linearTosRGB(texel);
#endif
 gl_FragColor = encodeHDR(vec4(texel.rgb, 1.0));
}
@end`;L.import(hl);var ul=en.extend(function(){var e=new L({vertex:L.source("clay.skybox.vertex"),fragment:L.source("clay.skybox.fragment")}),t=new yt({shader:e,depthMask:!1});return{scene:null,geometry:new Oa,material:t,environmentMap:null,culling:!1,_dummyCamera:new Le}},function(){var e=this.scene;e&&this.attachScene(e),this.environmentMap&&this.setEnvironmentMap(this.environmentMap)},{attachScene:function(e){this.scene&&this.detachScene(),e.skybox=this,this.scene=e,e.on("beforerender",this._beforeRenderScene,this)},detachScene:function(){this.scene&&(this.scene.off("beforerender",this._beforeRenderScene),this.scene.skybox=null),this.scene=null},dispose:function(e){this.detachScene(),this.geometry.dispose(e)},setEnvironmentMap:function(e){e.textureType==="texture2D"?(this.material.define("EQUIRECTANGULAR"),e.minFilter=Y.LINEAR):this.material.undefine("EQUIRECTANGULAR"),this.material.set("environmentMap",e)},getEnvironmentMap:function(){return this.material.get("environmentMap")},_beforeRenderScene:function(e,t,r){this.renderSkybox(e,r)},renderSkybox:function(e,t){var r=this._dummyCamera;r.aspect=e.getViewportAspect(),r.fov=t.fov||50,r.updateProjectionMatrix(),z.invert(r.invProjectionMatrix,r.projectionMatrix),r.worldTransform.copy(t.worldTransform),r.viewMatrix.copy(t.viewMatrix),this.position.copy(t.getWorldPosition()),this.update(),e.gl.disable(e.gl.BLEND),this.material.get("lod")>0?this.material.define("fragment","LOD"):this.material.undefine("fragment","LOD"),e.renderPass([this],r)}}),yr=ul,cl=542327876,fl=131072,dl=512,vl=4;function on(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}var ml=31,pl=on("DXT1"),_l=on("DXT3"),gl=on("DXT5"),yl=0,xl=1,Tl=2,El=3,Al=4,Sl=7,bl=20,wl=21,Cl=28,Rl={parse:function(e,t){var r=new Int32Array(e,0,ml);if(r[yl]!==cl||!r(bl)&vl)return null;var i=r(wl),n=r[Al],a=r[El],s=r[Cl]&dl,o=r[Tl]&fl,l,h;switch(i){case pl:l=8,h=Y.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case _l:l=16,h=Y.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case gl:l=16,h=Y.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return null}var u=r[xl]+4,c=s?6:1,d=1;o&&(d=Math.max(1,r[Sl]));for(var f=[],v=0;v<c;v++){var m=n,p=a;f[v]=new ne({width:m,height:p,format:h});for(var _=[],x=0;x<d;x++){var y=Math.max(4,m)/4*Math.max(4,p)/4*l,g=new Uint8Array(e,u,y);u+=y,m*=.5,p*=.5,_[x]=g}f[v].pixels=_[0],o&&(f[v].mipmaps=_)}if(t)t.width=f[0].width,t.height=f[0].height,t.format=f[0].format,t.pixels=f[0].pixels,t.mipmaps=f[0].mipmaps;else return f[0]}},Ml=Rl,qr=String.fromCharCode,Ll=8,Nl=32767;function Pl(e,t,r,i){if(e[3]>0){var n=Math.pow(2,e[3]-128-8+i);t[r+0]=e[0]*n,t[r+1]=e[1]*n,t[r+2]=e[2]*n}else t[r+0]=0,t[r+1]=0,t[r+2]=0;return t[r+3]=1,t}function Dl(e,t,r){for(var i="",n=t;n<r;n++)i+=qr(e[n]);return i}function Il(e,t){t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3]}function jn(e,t,r,i){for(var n=0,a=0,s=i;s>0;)if(e[a][0]=t[r++],e[a][1]=t[r++],e[a][2]=t[r++],e[a][3]=t[r++],e[a][0]===1&&e[a][1]===1&&e[a][2]===1){for(var o=e[a][3]<<n>>>0;o>0;o--)Il(e[a-1],e[a]),a++,s--;n+=8}else a++,s--,n=0;return r}function Ol(e,t,r,i){if(i<Ll|i>Nl)return jn(e,t,r,i);var n=t[r++];if(n!=2)return jn(e,t,r-1,i);if(e[0][1]=t[r++],e[0][2]=t[r++],n=t[r++],(e[0][2]<<8>>>0|n)>>>0!==i)return null;for(var n=0;n<4;n++)for(var a=0;a<i;){var s=t[r++];if(s>128){s=(s&127)>>>0;for(var o=t[r++];s--;)e[a++][n]=o}else for(;s--;)e[a++][n]=t[r++]}return r}var Bl={parseRGBE:function(e,t,r){r==null&&(r=0);var i=new Uint8Array(e),n=i.length;if(Dl(i,0,2)==="#?"){for(var a=2;a<n&&!(qr(i[a])===`
`&&qr(i[a+1])===`
`);a++);if(!(a>=n)){a+=2;for(var s="";a<n;a++){var o=qr(i[a]);if(o===`
`)break;s+=o}var l=s.split(" "),h=parseInt(l[1]),u=parseInt(l[3]);if(!(!u||!h)){for(var c=a+1,d=[],f=0;f<u;f++){d[f]=[];for(var v=0;v<4;v++)d[f][v]=0}for(var m=new Float32Array(u*h*4),p=0,_=0;_<h;_++){var c=Ol(d,i,c,u);if(!c)return null;for(var f=0;f<u;f++)Pl(d[f],m,p,r),p+=4}return t||(t=new ne),t.width=u,t.height=h,t.pixels=m,t.type=Y.FLOAT,t}}}},parseRGBEFromPNG:function(e){}},Fl=Bl,Yr={loadTexture:function(e,t,r,i){var n;if(typeof t=="function"?(r=t,i=r,t={}):t=t||{},typeof e=="string"){if(e.match(/.hdr$/)||t.fileType==="hdr")return n=new ne({width:0,height:0,sRGB:!1}),Yr._fetchTexture(e,function(a){Fl.parseRGBE(a,n,t.exposure),n.dirty(),r&&r(n)},i),n;e.match(/.dds$/)||t.fileType==="dds"?(n=new ne({width:0,height:0}),Yr._fetchTexture(e,function(a){Ml.parse(a,n),n.dirty(),r&&r(n)},i)):(n=new ne,n.load(e),n.success(r),n.error(i))}else typeof e=="object"&&typeof e.px<"u"&&(n=new gr,n.load(e),n.success(r),n.error(i));return n},loadPanorama:function(e,t,r,i,n,a){var s=this;typeof i=="function"?(n=i,a=n,i={}):i=i||{},Yr.loadTexture(t,i,function(o){o.flipY=i.flipY||!1,s.panoramaToCubeMap(e,o,r,i),o.dispose(e),n&&n(r)},a)},panoramaToCubeMap:function(e,t,r,i){var n=new an,a=new yr({scene:new Ct});return a.setEnvironmentMap(t),i=i||{},i.encodeRGBM&&a.material.define("fragment","RGBM_ENCODE"),r.sRGB=t.sRGB,n.texture=r,n.render(e,a.scene),n.texture=null,n.dispose(e),r},heightToNormal:function(e,t){var r=document.createElement("canvas"),i=r.width=e.width,n=r.height=e.height,a=r.getContext("2d");a.drawImage(e,0,0,i,n),t=t||!1;for(var s=a.getImageData(0,0,i,n),o=a.createImageData(i,n),l=0;l<s.data.length;l+=4){if(t){var h=s.data[l],u=s.data[l+1],c=s.data[l+2],d=Math.abs(h-u)+Math.abs(u-c);if(d>20)return console.warn("Given image is not a height map"),e}var f,v,m,p;l%(i*4)===0?(f=s.data[l],m=s.data[l+4]):l%(i*4)===(i-1)*4?(f=s.data[l-4],m=s.data[l]):(f=s.data[l-4],m=s.data[l+4]),l<i*4?(v=s.data[l],p=s.data[l+i*4]):l>i*(n-1)*4?(v=s.data[l-i*4],p=s.data[l]):(v=s.data[l-i*4],p=s.data[l+i*4]),o.data[l]=f-m+127,o.data[l+1]=v-p+127,o.data[l+2]=255,o.data[l+3]=255}return a.putImageData(o,0,0),r},isHeightImage:function(e,t,r){if(!e||!e.width||!e.height)return!1;var i=document.createElement("canvas"),n=i.getContext("2d"),a=t||32;r=r||20,i.width=i.height=a,n.drawImage(e,0,0,a,a);for(var s=n.getImageData(0,0,a,a),o=0;o<s.data.length;o+=4){var l=s.data[o],h=s.data[o+1],u=s.data[o+2],c=Math.abs(l-h)+Math.abs(h-u);if(c>r)return!1}return!0},_fetchTexture:function(e,t,r){be.request.get({url:e,responseType:"arraybuffer",onload:t,onerror:r})},createChessboard:function(e,t,r,i){e=e||512,t=t||64,r=r||"black",i=i||"white";var n=Math.ceil(e/t),a=document.createElement("canvas");a.width=e,a.height=e;var s=a.getContext("2d");s.fillStyle=i,s.fillRect(0,0,e,e),s.fillStyle=r;for(var o=0;o<n;o++)for(var l=0;l<n;l++){var h=l%2?o%2:o%2-1;h&&s.fillRect(o*t,l*t,t,t)}var u=new ne({image:a,anisotropic:8});return u},createBlank:function(e){var t=document.createElement("canvas");t.width=1,t.height=1;var r=t.getContext("2d");r.fillStyle=e,r.fillRect(0,0,1,1);var i=new ne({image:t});return i}},Ft=Yr,Gi=["mousedown","mouseup","mousemove","mouseover","mouseout","click","dblclick","contextmenu"];function ki(e){return"_on"+e}var Vi=function(e){var t=this;this._texture=new ne({anisotropic:32,flipY:!1,surface:this,dispose:function(r){t.dispose(),ne.prototype.dispose.call(this,r)}}),Gi.forEach(function(r){this[ki(r)]=function(i){!i.triangle||this._meshes.forEach(function(n){this.dispatchEvent(r,n,i.triangle,i.point)},this)}},this),this._meshes=[],e&&this.setECharts(e),this.onupdate=null};Vi.prototype={constructor:Vi,getTexture:function(){return this._texture},setECharts:function(e){this._chart=e;var t=e.getDom();if(!(t instanceof HTMLCanvasElement))console.error("ECharts must init on canvas if it is used as texture."),t=document.createElement("canvas");else{var r=this,i=e.getZr(),n=i.__oldRefreshImmediately||i.refreshImmediately;i.refreshImmediately=function(){n.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},i.__oldRefreshImmediately=n}this._texture.image=t,this._texture.dirty(),this.onupdate&&this.onupdate()},dispatchEvent:function(){var e=new P,t=new P,r=new P,i=new $e,n=new $e,a=new $e,s=new $e,o=new P;return function(l,h,u,c){var d=h.geometry,f=d.attributes.position,v=d.attributes.texcoord0,m=P.dot,p=P.cross;f.get(u[0],e.array),f.get(u[1],t.array),f.get(u[2],r.array),v.get(u[0],i.array),v.get(u[1],n.array),v.get(u[2],a.array),p(o,t,r);var _=m(e,o),x=m(c,o)/_;p(o,r,e);var y=m(c,o)/_;p(o,e,t);var g=m(c,o)/_;$e.scale(s,i,x),$e.scaleAndAdd(s,s,n,y),$e.scaleAndAdd(s,s,a,g);var E=s.x*this._chart.getWidth(),S=s.y*this._chart.getHeight();this._chart.getZr().handler.dispatch(l,{zrX:E,zrY:S})}}(),attachToMesh:function(e){this._meshes.indexOf(e)>=0||(Gi.forEach(function(t){e.on(t,this[ki(t)],this)},this),this._meshes.push(e))},detachFromMesh:function(e){var t=this._meshes.indexOf(e);t>=0&&this._meshes.splice(t,1),Gi.forEach(function(r){e.off(r,this[ki(r)])},this)},dispose:function(){this._meshes.forEach(function(e){this.detachFromMesh(e)},this)}};var Ul=Vi,Hl=tr.extend({left:-1,right:1,near:-1,far:1,top:1,bottom:-1},{updateProjectionMatrix:function(){this.projectionMatrix.ortho(this.left,this.right,this.bottom,this.top,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array;this.left=(-1-e[12])/e[0],this.right=(1-e[12])/e[0],this.top=(1-e[13])/e[5],this.bottom=(-1-e[13])/e[5],this.near=-(-1-e[14])/e[10],this.far=-(1-e[14])/e[10]},clone:function(){var e=tr.prototype.clone.call(this);return e.left=this.left,e.right=this.right,e.near=this.near,e.far=this.far,e.top=this.top,e.bottom=this.bottom,e}}),xr=Hl,zl=`
@export clay.compositor.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
varying vec2 v_Texcoord;
void main()
{
 v_Texcoord = texcoord;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end`;L.import(zl);var Gl=new sn,qn=new en({geometry:Gl,frustumCulling:!1}),kl=new xr,Vl=Ye.extend(function(){return{fragment:"",outputs:null,material:null,blendWithPrevious:!1,clearColor:!1,clearDepth:!0}},function(){var e=new L(L.source("clay.compositor.vertex"),this.fragment),t=new yt({shader:e});t.enableTexturesAll(),this.material=t},{setUniform:function(e,t){this.material.setUniform(e,t)},getUniform:function(e){var t=this.material.uniforms[e];if(t)return t.value},attachOutput:function(e,t){this.outputs||(this.outputs={}),t=t||A.COLOR_ATTACHMENT0,this.outputs[t]=e},detachOutput:function(e){for(var t in this.outputs)this.outputs[t]===e&&(this.outputs[t]=null)},bind:function(e,t){if(this.outputs)for(var r in this.outputs){var i=this.outputs[r];i&&t.attach(i,r)}t&&t.bind(e)},unbind:function(e,t){t.unbind(e)},render:function(e,t){var r=e.gl;if(t){this.bind(e,t);var i=e.getGLExtension("EXT_draw_buffers");if(i&&this.outputs){var n=[];for(var a in this.outputs)a=+a,a>=r.COLOR_ATTACHMENT0&&a<=r.COLOR_ATTACHMENT0+8&&n.push(a);i.drawBuffersEXT(n)}}this.trigger("beforerender",this,e);var s=this.clearDepth?r.DEPTH_BUFFER_BIT:0;if(r.depthMask(!0),this.clearColor){s=s|r.COLOR_BUFFER_BIT,r.colorMask(!0,!0,!0,!0);var o=this.clearColor;Array.isArray(o)&&r.clearColor(o[0],o[1],o[2],o[3])}r.clear(s),this.blendWithPrevious?(r.enable(r.BLEND),this.material.transparent=!0):(r.disable(r.BLEND),this.material.transparent=!1),this.renderQuad(e),this.trigger("afterrender",this,e),t&&this.unbind(e,t)},renderQuad:function(e){qn.material=this.material,e.renderPass([qn],kl)},dispose:function(e){}}),Ve=Vl,Wl=`#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform sampler2D normalDistribution;
uniform vec2 viewportSize : [512, 256];
const vec3 N = vec3(0.0, 0.0, 1.0);
const float fSampleNumber = float(SAMPLE_NUMBER);
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
float G_Smith(float roughness, float NoV, float NoL) {
 float k = roughness * roughness / 2.0;
 float G1V = NoV / (NoV * (1.0 - k) + k);
 float G1L = NoL / (NoL * (1.0 - k) + k);
 return G1L * G1V;
}
void main() {
 vec2 uv = gl_FragCoord.xy / viewportSize;
 float NoV = uv.x;
 float roughness = uv.y;
 vec3 V;
 V.x = sqrt(1.0 - NoV * NoV);
 V.y = 0.0;
 V.z = NoV;
 float A = 0.0;
 float B = 0.0;
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(L.z, 0.0, 1.0);
 float NoH = clamp(H.z, 0.0, 1.0);
 float VoH = clamp(dot(V, H), 0.0, 1.0);
 if (NoL > 0.0) {
 float G = G_Smith(roughness, NoV, NoL);
 float G_Vis = G * VoH / (NoH * NoV);
 float Fc = pow(1.0 - VoH, 5.0);
 A += (1.0 - Fc) * G_Vis;
 B += Fc * G_Vis;
 }
 }
 gl_FragColor = vec4(vec2(A, B) / fSampleNumber, 0.0, 1.0);
}
`,Xl=`#define SHADER_NAME prefilter
#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform mat4 viewInverse : VIEWINVERSE;
uniform samplerCube environmentMap;
uniform sampler2D normalDistribution;
uniform float roughness : 0.5;
varying vec2 v_Texcoord;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
void main() {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
 vec3 N = V;
 vec3 prefilteredColor = vec3(0.0);
 float totalWeight = 0.0;
 float fMaxSampleNumber = float(SAMPLE_NUMBER);
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fMaxSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(dot(N, L), 0.0, 1.0);
 if (NoL > 0.0) {
 prefilteredColor += decodeHDR(textureCube(environmentMap, L)).rgb * NoL;
 totalWeight += NoL;
 }
 }
 gl_FragColor = encodeHDR(vec4(prefilteredColor / totalWeight, 1.0));
}
`,Ut={},Ri=["px","nx","py","ny","pz","nz"];Ut.prefilterEnvironmentMap=function(e,t,r,i,n){(!n||!i)&&(i=Ut.generateNormalDistribution(),n=Ut.integrateBRDF(e,i)),r=r||{};var a=r.width||64,s=r.height||64,o=r.type||t.type,l=new gr({width:a,height:s,type:o,flipY:!1,mipmaps:[]});l.isPowerOfTwo()||console.warn("Width and height must be power of two to enable mipmap.");var h=Math.min(a,s),u=Math.log(h)/Math.log(2)+1,c=new yt({shader:new L({vertex:L.source("clay.skybox.vertex"),fragment:Xl})});c.set("normalDistribution",i),r.encodeRGBM&&c.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&c.define("fragment","RGBM_DECODE");var d=new Ct,f;if(t.textureType==="texture2D"){var v=new gr({width:a,height:s,type:o===Y.FLOAT?Y.HALF_FLOAT:o});Ft.panoramaToCubeMap(e,t,v,{encodeRGBM:r.decodeRGBM}),t=v}f=new yr({scene:d,material:c}),f.material.set("environmentMap",t);var m=new an({texture:l});r.encodeRGBM&&(o=l.type=Y.UNSIGNED_BYTE);for(var p=new ne({width:a,height:s,type:o}),_=new Ue({depthBuffer:!1}),x=be[o===Y.UNSIGNED_BYTE?"Uint8Array":"Float32Array"],y=0;y<u;y++){l.mipmaps[y]={pixels:{}},f.material.set("roughness",y/(u-1));for(var g=p.width,E=2*Math.atan(g/(g-.5))/Math.PI*180,S=0;S<Ri.length;S++){var R=new x(p.width*p.height*4);_.attach(p),_.bind(e);var b=m.getCamera(Ri[S]);b.fov=E,e.render(d,b),e.gl.readPixels(0,0,p.width,p.height,Y.RGBA,o,R),_.unbind(e),l.mipmaps[y].pixels[Ri[S]]=R}p.width/=2,p.height/=2,p.dirty()}return _.dispose(e),p.dispose(e),f.dispose(e),i.dispose(e),{environmentMap:l,brdfLookup:n,normalDistribution:i,maxMipmapLevel:u}};Ut.integrateBRDF=function(e,t){t=t||Ut.generateNormalDistribution();var r=new Ue({depthBuffer:!1}),i=new Ve({fragment:Wl}),n=new ne({width:512,height:256,type:Y.HALF_FLOAT,wrapS:Y.CLAMP_TO_EDGE,wrapT:Y.CLAMP_TO_EDGE,minFilter:Y.NEAREST,magFilter:Y.NEAREST,useMipmap:!1});return i.setUniform("normalDistribution",t),i.setUniform("viewportSize",[512,256]),i.attachOutput(n),i.render(e,r),r.dispose(e),n};Ut.generateNormalDistribution=function(r,i){for(var r=r||256,i=i||1024,n=new ne({width:r,height:i,type:Y.FLOAT,minFilter:Y.NEAREST,magFilter:Y.NEAREST,wrapS:Y.CLAMP_TO_EDGE,wrapT:Y.CLAMP_TO_EDGE,useMipmap:!1}),a=new Float32Array(i*r*4),s=[],o=0;o<r;o++){for(var l=o/r,h=l*l,u=0;u<i;u++){var c=(u<<16|u>>>16)>>>0;c=((c&1431655765)<<1|(c&2863311530)>>>1)>>>0,c=((c&858993459)<<2|(c&3435973836)>>>2)>>>0,c=((c&252645135)<<4|(c&4042322160)>>>4)>>>0,c=(((c&16711935)<<8|(c&4278255360)>>>8)>>>0)/4294967296;var d=Math.sqrt((1-c)/(1+(h*h-1)*c));s[u]=d}for(var u=0;u<i;u++){var f=(u*r+o)*4,d=s[u],v=Math.sqrt(1-d*d),m=u/i,p=2*Math.PI*m;a[f]=v*Math.cos(p),a[f+1]=d,a[f+2]=v*Math.sin(p),a[f+3]=1}}return n.pixels=a,n};var Zr=Ut,jl=lt.extend({cubemap:null,castShadow:!1,_normalDistribution:null,_brdfLookup:null},{type:"AMBIENT_CUBEMAP_LIGHT",prefilter:function(e,t){if(!e.getGLExtension("EXT_shader_texture_lod")){console.warn("Device not support textureCubeLodEXT");return}this._brdfLookup||(this._normalDistribution=Zr.generateNormalDistribution(),this._brdfLookup=Zr.integrateBRDF(e,this._normalDistribution));var r=this.cubemap;if(!r.__prefiltered){var i=Zr.prefilterEnvironmentMap(e,r,{encodeRGBM:!0,width:t,height:t},this._normalDistribution,this._brdfLookup);this.cubemap=i.environmentMap,this.cubemap.__prefiltered=!0,r.dispose(e)}},getBRDFLookup:function(){return this._brdfLookup},uniformTemplates:{ambientCubemapLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}},ambientCubemapLightCubemap:{type:"t",value:function(e){return e.cubemap}},ambientCubemapLightBRDFLookup:{type:"t",value:function(e){return e._brdfLookup}}}}),ql=jl,Yl=lt.extend({castShadow:!1,coefficients:[]},function(){this._coefficientsTmpArr=new be.Float32Array(9*3)},{type:"AMBIENT_SH_LIGHT",uniformTemplates:{ambientSHLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}},ambientSHLightCoefficients:{type:"3f",value:function(e){for(var t=e._coefficientsTmpArr,r=0;r<e.coefficients.length;r++)t[r]=e.coefficients[r];return t}}}}),Zl=Yl,Ba={},Bt=["px","nx","py","ny","pz","nz"];function $l(e,t){var r=e[0],i=e[1],n=e[2];return t===0?1:t===1?r:t===2?i:t===3?n:t===4?r*n:t===5?i*n:t===6?r*i:t===7?3*n*n-1:r*r-i*i}var Kl={px:[2,1,0,-1,-1,1],nx:[2,1,0,1,-1,-1],py:[0,2,1,1,-1,-1],ny:[0,2,1,1,1,1],pz:[0,1,2,-1,-1,-1],nz:[0,1,2,1,-1,1]};function Ql(e,t,r,i){for(var n=new be.Float32Array(27),a=T.create(),s=T.create(),o=T.create(),l=0;l<9;l++){for(var h=T.create(),u=0;u<Bt.length;u++){for(var c=t[Bt[u]],d=T.create(),f=0,v=0,m=Kl[Bt[u]],p=0;p<i;p++)for(var _=0;_<r;_++){a[0]=_/(r-1)*2-1,a[1]=p/(i-1)*2-1,a[2]=-1,T.normalize(a,a),o[0]=a[m[0]]*m[3],o[1]=a[m[1]]*m[4],o[2]=a[m[2]]*m[5],s[0]=c[v++]/255,s[1]=c[v++]/255,s[2]=c[v++]/255;var x=c[v++]/255*8.12;s[0]*=x,s[1]*=x,s[2]*=x,T.scaleAndAdd(d,d,s,$l(o,l)*-a[2]),f+=-a[2]}T.scaleAndAdd(h,h,d,1/f)}n[l*3]=h[0]/6,n[l*3+1]=h[1]/6,n[l*3+2]=h[2]/6}return n}Ba.projectEnvironmentMap=function(e,t,r){r=r||{},r.lod=r.lod||0;var i,n=new Ct,a=64;t.textureType==="texture2D"?i=new yr({scene:n,environmentMap:t}):(a=t.image&&t.image.px?t.image.px.width:t.width,i=new yr({scene:n,environmentMap:t}));var s=Math.ceil(a/Math.pow(2,r.lod)),o=Math.ceil(a/Math.pow(2,r.lod)),l=new ne({width:s,height:o}),h=new Ue;i.material.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&i.material.define("fragment","RGBM_DECODE"),i.material.set("lod",r.lod);for(var u=new an({texture:l}),c={},d=0;d<Bt.length;d++){c[Bt[d]]=new Uint8Array(s*o*4);var f=u.getCamera(Bt[d]);f.fov=90,h.attach(l),h.bind(e),e.render(n,f),e.gl.readPixels(0,0,s,o,Y.RGBA,Y.UNSIGNED_BYTE,c[Bt[d]]),h.unbind(e)}return i.dispose(e),h.dispose(e),l.dispose(e),Ql(e,c,s,o)};var Jl=Ba,eh={firstNotNull:function(){for(var e=0,t=arguments.length;e<t;e++)if(arguments[e]!=null)return arguments[e]},queryDataIndex:function(e,t){if(t.dataIndexInside!=null)return t.dataIndexInside;if(t.dataIndex!=null)return mr(t.dataIndex)?vn(t.dataIndex,function(r){return e.indexOfRawIndex(r)}):e.indexOfRawIndex(t.dataIndex);if(t.name!=null)return mr(t.name)?vn(t.name,function(r){return e.indexOfName(r)}):e.indexOfName(t.name)}},tt=eh,th=Ae.extend({dynamic:!1,widthSegments:40,heightSegments:20,phiStart:0,phiLength:Math.PI*2,thetaStart:0,thetaLength:Math.PI,radius:1},function(){this.build()},{build:function(){var e=this.heightSegments,t=this.widthSegments,r=this.attributes.position,i=this.attributes.texcoord0,n=this.attributes.normal,a=(t+1)*(e+1);r.init(a),i.init(a),n.init(a);var s=a>65535?Uint32Array:Uint16Array,o=this.indices=new s(t*e*6),l,h,u,c,d,f,v,y=this.radius,m=this.phiStart,p=this.phiLength,_=this.thetaStart,x=this.thetaLength,y=this.radius,g=[],E=[],S=0,R=1/y;for(v=0;v<=e;v++)for(f=0;f<=t;f++)c=f/t,d=v/e,l=-y*Math.cos(m+c*p)*Math.sin(_+d*x),h=y*Math.cos(_+d*x),u=y*Math.sin(m+c*p)*Math.sin(_+d*x),g[0]=l,g[1]=h,g[2]=u,E[0]=c,E[1]=d,r.set(S,g),i.set(S,E),g[0]*=R,g[1]*=R,g[2]*=R,n.set(S,g),S++;var b,M,F,w,U=t+1,O=0;for(v=0;v<e;v++)for(f=0;f<t;f++)M=v*U+f,b=v*U+f+1,w=(v+1)*U+f+1,F=(v+1)*U+f,o[O++]=b,o[O++]=M,o[O++]=w,o[O++]=M,o[O++]=F,o[O++]=w;this.boundingBox=new ke,this.boundingBox.max.set(y,y,y),this.boundingBox.min.set(-y,-y,-y)}}),rh=th,ih=lt.extend({castShadow:!1},{type:"AMBIENT_LIGHT",uniformTemplates:{ambientLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}}}),nh=ih,ah=lt.extend({shadowBias:.001,shadowSlopeScale:2,shadowCascade:1,cascadeSplitLogFactor:.2},{type:"DIRECTIONAL_LIGHT",uniformTemplates:{directionalLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new P,e.__dir.copy(e.worldTransform.z).normalize().negate().array}},directionalLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=lt.prototype.clone.call(this);return e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}}),sh=ah,oh=lt.extend({range:100,castShadow:!1},{type:"POINT_LIGHT",uniformTemplates:{pointLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},pointLightRange:{type:"1f",value:function(e){return e.range}},pointLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=lt.prototype.clone.call(this);return e.range=this.range,e}}),lh=oh,hh=lt.extend({range:20,umbraAngle:30,penumbraAngle:45,falloffFactor:2,shadowBias:.001,shadowSlopeScale:2},{type:"SPOT_LIGHT",uniformTemplates:{spotLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},spotLightRange:{type:"1f",value:function(e){return e.range}},spotLightUmbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.umbraAngle*Math.PI/180)}},spotLightPenumbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.penumbraAngle*Math.PI/180)}},spotLightFalloffFactor:{type:"1f",value:function(e){return e.falloffFactor}},spotLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new P,e.__dir.copy(e.worldTransform.z).negate().array}},spotLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=lt.prototype.clone.call(this);return e.range=this.range,e.umbraAngle=this.umbraAngle,e.penumbraAngle=this.penumbraAngle,e.falloffFactor=this.falloffFactor,e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}}),uh=hh,re=function(e,t,r,i){e=e||0,t=t||0,r=r||0,i=i||0,this.array=D.fromValues(e,t,r,i),this._dirty=!0};re.prototype={constructor:re,add:function(e){return D.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,r,i){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this.array[3]=i,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new re(this.x,this.y,this.z,this.w)},copy:function(e){return D.copy(this.array,e.array),this._dirty=!0,this},dist:function(e){return D.dist(this.array,e.array)},distance:function(e){return D.distance(this.array,e.array)},div:function(e){return D.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return D.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return D.dot(this.array,e.array)},len:function(){return D.len(this.array)},length:function(){return D.length(this.array)},lerp:function(e,t,r){return D.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return D.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return D.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return D.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return D.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return D.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return D.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return D.random(this.array,e),this._dirty=!0,this},scale:function(e){return D.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return D.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return D.sqrDist(this.array,e.array)},squaredDistance:function(e){return D.squaredDistance(this.array,e.array)},sqrLen:function(){return D.sqrLen(this.array)},squaredLength:function(){return D.squaredLength(this.array)},sub:function(e){return D.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return D.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return D.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return D.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var hr=Object.defineProperty;if(hr){var Hr=re.prototype;hr(Hr,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),hr(Hr,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),hr(Hr,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),hr(Hr,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}re.add=function(e,t,r){return D.add(e.array,t.array,r.array),e._dirty=!0,e};re.set=function(e,t,r,i,n){D.set(e.array,t,r,i,n),e._dirty=!0};re.copy=function(e,t){return D.copy(e.array,t.array),e._dirty=!0,e};re.dist=function(e,t){return D.distance(e.array,t.array)};re.distance=re.dist;re.div=function(e,t,r){return D.divide(e.array,t.array,r.array),e._dirty=!0,e};re.divide=re.div;re.dot=function(e,t){return D.dot(e.array,t.array)};re.len=function(e){return D.length(e.array)};re.lerp=function(e,t,r,i){return D.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};re.min=function(e,t,r){return D.min(e.array,t.array,r.array),e._dirty=!0,e};re.max=function(e,t,r){return D.max(e.array,t.array,r.array),e._dirty=!0,e};re.mul=function(e,t,r){return D.multiply(e.array,t.array,r.array),e._dirty=!0,e};re.multiply=re.mul;re.negate=function(e,t){return D.negate(e.array,t.array),e._dirty=!0,e};re.normalize=function(e,t){return D.normalize(e.array,t.array),e._dirty=!0,e};re.random=function(e,t){return D.random(e.array,t),e._dirty=!0,e};re.scale=function(e,t,r){return D.scale(e.array,t.array,r),e._dirty=!0,e};re.scaleAndAdd=function(e,t,r,i){return D.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};re.sqrDist=function(e,t){return D.sqrDist(e.array,t.array)};re.squaredDistance=re.sqrDist;re.sqrLen=function(e){return D.sqrLen(e.array)};re.squaredLength=re.sqrLen;re.sub=function(e,t,r){return D.subtract(e.array,t.array,r.array),e._dirty=!0,e};re.subtract=re.sub;re.transformMat4=function(e,t,r){return D.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};re.transformQuat=function(e,t,r){return D.transformQuat(e.array,t.array,r.array),e._dirty=!0,e};var ch=re,He={};He.create=function(){var e=new Ie(4);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};He.clone=function(e){var t=new Ie(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};He.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};He.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};He.transpose=function(e,t){if(e===t){var r=t[1];e[1]=t[2],e[2]=r}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e};He.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],s=r*a-n*i;return s?(s=1/s,e[0]=a*s,e[1]=-i*s,e[2]=-n*s,e[3]=r*s,e):null};He.adjoint=function(e,t){var r=t[0];return e[0]=t[3],e[1]=-t[1],e[2]=-t[2],e[3]=r,e};He.determinant=function(e){return e[0]*e[3]-e[2]*e[1]};He.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3],o=r[0],l=r[1],h=r[2],u=r[3];return e[0]=i*o+a*l,e[1]=n*o+s*l,e[2]=i*h+a*u,e[3]=n*h+s*u,e};He.mul=He.multiply;He.rotate=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3],o=Math.sin(r),l=Math.cos(r);return e[0]=i*l+a*o,e[1]=n*l+s*o,e[2]=i*-o+a*l,e[3]=n*-o+s*l,e};He.scale=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3],o=r[0],l=r[1];return e[0]=i*o,e[1]=n*o,e[2]=a*l,e[3]=s*l,e};He.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2))};He.LDU=function(e,t,r,i){return e[2]=i[2]/i[0],r[0]=i[0],r[1]=i[1],r[3]=i[3]-e[2]*r[1],[e,t,r]};var xe=He,We=function(){this.array=xe.create(),this._dirty=!0};We.prototype={constructor:We,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new We().copy(this)},copy:function(e){return xe.copy(this.array,e.array),this._dirty=!0,this},adjoint:function(){return xe.adjoint(this.array,this.array),this._dirty=!0,this},determinant:function(){return xe.determinant(this.array)},identity:function(){return xe.identity(this.array),this._dirty=!0,this},invert:function(){return xe.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return xe.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return xe.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return xe.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return xe.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return xe.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return xe.scale(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return xe.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};We.adjoint=function(e,t){return xe.adjoint(e.array,t.array),e._dirty=!0,e};We.copy=function(e,t){return xe.copy(e.array,t.array),e._dirty=!0,e};We.determinant=function(e){return xe.determinant(e.array)};We.identity=function(e){return xe.identity(e.array),e._dirty=!0,e};We.invert=function(e,t){return xe.invert(e.array,t.array),e._dirty=!0,e};We.mul=function(e,t,r){return xe.mul(e.array,t.array,r.array),e._dirty=!0,e};We.multiply=We.mul;We.rotate=function(e,t,r){return xe.rotate(e.array,t.array,r),e._dirty=!0,e};We.scale=function(e,t,r){return xe.scale(e.array,t.array,r.array),e._dirty=!0,e};We.transpose=function(e,t){return xe.transpose(e.array,t.array),e._dirty=!0,e};var fh=We,qe={};qe.create=function(){var e=new Ie(6);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};qe.clone=function(e){var t=new Ie(6);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t};qe.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e};qe.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};qe.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],s=t[4],o=t[5],l=r*a-i*n;return l?(l=1/l,e[0]=a*l,e[1]=-i*l,e[2]=-n*l,e[3]=r*l,e[4]=(n*o-a*s)*l,e[5]=(i*s-r*o)*l,e):null};qe.determinant=function(e){return e[0]*e[3]-e[1]*e[2]};qe.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3],o=t[4],l=t[5],h=r[0],u=r[1],c=r[2],d=r[3],f=r[4],v=r[5];return e[0]=i*h+a*u,e[1]=n*h+s*u,e[2]=i*c+a*d,e[3]=n*c+s*d,e[4]=i*f+a*v+o,e[5]=n*f+s*v+l,e};qe.mul=qe.multiply;qe.rotate=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3],o=t[4],l=t[5],h=Math.sin(r),u=Math.cos(r);return e[0]=i*u+a*h,e[1]=n*u+s*h,e[2]=i*-h+a*u,e[3]=n*-h+s*u,e[4]=o,e[5]=l,e};qe.scale=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3],o=t[4],l=t[5],h=r[0],u=r[1];return e[0]=i*h,e[1]=n*h,e[2]=a*u,e[3]=s*u,e[4]=o,e[5]=l,e};qe.translate=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3],o=t[4],l=t[5],h=r[0],u=r[1];return e[0]=i,e[1]=n,e[2]=a,e[3]=s,e[4]=i*h+a*u+o,e[5]=n*h+s*u+l,e};qe.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+1)};var Se=qe,je=function(){this.array=Se.create(),this._dirty=!0};je.prototype={constructor:je,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new je().copy(this)},copy:function(e){return Se.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return Se.determinant(this.array)},identity:function(){return Se.identity(this.array),this._dirty=!0,this},invert:function(){return Se.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return Se.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return Se.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return Se.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return Se.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return Se.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return Se.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return Se.translate(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};je.copy=function(e,t){return Se.copy(e.array,t.array),e._dirty=!0,e};je.determinant=function(e){return Se.determinant(e.array)};je.identity=function(e){return Se.identity(e.array),e._dirty=!0,e};je.invert=function(e,t){return Se.invert(e.array,t.array),e._dirty=!0,e};je.mul=function(e,t,r){return Se.mul(e.array,t.array,r.array),e._dirty=!0,e};je.multiply=je.mul;je.rotate=function(e,t,r){return Se.rotate(e.array,t.array,r),e._dirty=!0,e};je.scale=function(e,t,r){return Se.scale(e.array,t.array,r.array),e._dirty=!0,e};je.translate=function(e,t,r){return Se.translate(e.array,t.array,r.array),e._dirty=!0,e};var dh=je,we=function(){this.array=ee.create(),this._dirty=!0};we.prototype={constructor:we,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return ee.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new we().copy(this)},copy:function(e){return ee.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return ee.determinant(this.array)},fromMat2d:function(e){return ee.fromMat2d(this.array,e.array),this._dirty=!0,this},fromMat4:function(e){return ee.fromMat4(this.array,e.array),this._dirty=!0,this},fromQuat:function(e){return ee.fromQuat(this.array,e.array),this._dirty=!0,this},identity:function(){return ee.identity(this.array),this._dirty=!0,this},invert:function(){return ee.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return ee.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return ee.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return ee.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return ee.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return ee.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return ee.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return ee.translate(this.array,this.array,e.array),this._dirty=!0,this},normalFromMat4:function(e){return ee.normalFromMat4(this.array,e.array),this._dirty=!0,this},transpose:function(){return ee.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};we.adjoint=function(e,t){return ee.adjoint(e.array,t.array),e._dirty=!0,e};we.copy=function(e,t){return ee.copy(e.array,t.array),e._dirty=!0,e};we.determinant=function(e){return ee.determinant(e.array)};we.identity=function(e){return ee.identity(e.array),e._dirty=!0,e};we.invert=function(e,t){return ee.invert(e.array,t.array),e};we.mul=function(e,t,r){return ee.mul(e.array,t.array,r.array),e._dirty=!0,e};we.multiply=we.mul;we.fromMat2d=function(e,t){return ee.fromMat2d(e.array,t.array),e._dirty=!0,e};we.fromMat4=function(e,t){return ee.fromMat4(e.array,t.array),e._dirty=!0,e};we.fromQuat=function(e,t){return ee.fromQuat(e.array,t.array),e._dirty=!0,e};we.normalFromMat4=function(e,t){return ee.normalFromMat4(e.array,t.array),e._dirty=!0,e};we.rotate=function(e,t,r){return ee.rotate(e.array,t.array,r),e._dirty=!0,e};we.scale=function(e,t,r){return ee.scale(e.array,t.array,r.array),e._dirty=!0,e};we.transpose=function(e,t){return ee.transpose(e.array,t.array),e._dirty=!0,e};we.translate=function(e,t,r){return ee.translate(e.array,t.array,r.array),e._dirty=!0,e};var vh=we,mh={_animators:null,getAnimators:function(){return this._animators=this._animators||[],this._animators},animate:function(e,t){this._animators=this._animators||[];var r=this,i;if(e){for(var n=e.split("."),a=r,s=0,o=n.length;s<o;s++)!a||(a=a[n[s]]);a&&(i=a)}else i=r;if(i==null)throw new Error("Target "+e+" not exists");var l=this._animators,h=new ms(i,t),u=this;return h.during(function(){u.__zr&&u.__zr.refresh()}).done(function(){var c=l.indexOf(h);c>=0&&l.splice(c,1)}),l.push(h),this.__zr&&this.__zr.animation.addAnimator(h),h},stopAnimation:function(e){this._animators=this._animators||[];for(var t=this._animators,r=t.length,i=0;i<r;i++)t[i].stop(e);return t.length=0,this},addAnimatorsToZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.addAnimator(this._animators[t])},removeAnimatorsFromZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.removeAnimator(this._animators[t])}},ph=mh,_h=`
@export clay.util.rand
highp float rand(vec2 uv) {
 const highp float a = 12.9898, b = 78.233, c = 43758.5453;
 highp float dt = dot(uv.xy, vec2(a,b)), sn = mod(dt, 3.141592653589793);
 return fract(sin(sn) * c);
}
@end
@export clay.util.calculate_attenuation
uniform float attenuationFactor : 5.0;
float lightAttenuation(float dist, float range)
{
 float attenuation = 1.0;
 attenuation = dist*dist/(range*range+1.0);
 float att_s = attenuationFactor;
 attenuation = 1.0/(attenuation*att_s+1.0);
 att_s = 1.0/(att_s+1.0);
 attenuation = attenuation - att_s;
 attenuation /= 1.0 - att_s;
 return clamp(attenuation, 0.0, 1.0);
}
@end
@export clay.util.edge_factor
#ifdef SUPPORT_STANDARD_DERIVATIVES
float edgeFactor(float width)
{
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * width, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#else
float edgeFactor(float width)
{
 return 1.0;
}
#endif
@end
@export clay.util.encode_float
vec4 encodeFloat(const in float depth)
{
 const vec4 bitShifts = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);
 const vec4 bit_mask = vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);
 vec4 res = fract(depth * bitShifts);
 res -= res.xxyz * bit_mask;
 return res;
}
@end
@export clay.util.decode_float
float decodeFloat(const in vec4 color)
{
 const vec4 bitShifts = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);
 return dot(color, bitShifts);
}
@end
@export clay.util.float
@import clay.util.encode_float
@import clay.util.decode_float
@end
@export clay.util.rgbm_decode
vec3 RGBMDecode(vec4 rgbm, float range) {
 return range * rgbm.rgb * rgbm.a;
}
@end
@export clay.util.rgbm_encode
vec4 RGBMEncode(vec3 color, float range) {
 if (dot(color, color) == 0.0) {
 return vec4(0.0);
 }
 vec4 rgbm;
 color /= range;
 rgbm.a = clamp(max(max(color.r, color.g), max(color.b, 1e-6)), 0.0, 1.0);
 rgbm.a = ceil(rgbm.a * 255.0) / 255.0;
 rgbm.rgb = color / rgbm.a;
 return rgbm;
}
@end
@export clay.util.rgbm
@import clay.util.rgbm_decode
@import clay.util.rgbm_encode
vec4 decodeHDR(vec4 color)
{
#if defined(RGBM_DECODE) || defined(RGBM)
 return vec4(RGBMDecode(color, 8.12), 1.0);
#else
 return color;
#endif
}
vec4 encodeHDR(vec4 color)
{
#if defined(RGBM_ENCODE) || defined(RGBM)
 return RGBMEncode(color.xyz, 8.12);
#else
 return color;
#endif
}
@end
@export clay.util.srgb
vec4 sRGBToLinear(in vec4 value) {
 return vec4(mix(pow(value.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), value.rgb * 0.0773993808, vec3(lessThanEqual(value.rgb, vec3(0.04045)))), value.w);
}
vec4 linearTosRGB(in vec4 value) {
 return vec4(mix(pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055), value.rgb * 12.92, vec3(lessThanEqual(value.rgb, vec3(0.0031308)))), value.w);
}
@end
@export clay.chunk.skinning_header
#ifdef SKINNING
attribute vec3 weight : WEIGHT;
attribute vec4 joint : JOINT;
#ifdef USE_SKIN_MATRICES_TEXTURE
uniform sampler2D skinMatricesTexture : ignore;
uniform float skinMatricesTextureSize: ignore;
mat4 getSkinMatrix(sampler2D tex, float idx) {
 float j = idx * 4.0;
 float x = mod(j, skinMatricesTextureSize);
 float y = floor(j / skinMatricesTextureSize) + 0.5;
 vec2 scale = vec2(skinMatricesTextureSize);
 return mat4(
 texture2D(tex, vec2(x + 0.5, y) / scale),
 texture2D(tex, vec2(x + 1.5, y) / scale),
 texture2D(tex, vec2(x + 2.5, y) / scale),
 texture2D(tex, vec2(x + 3.5, y) / scale)
 );
}
mat4 getSkinMatrix(float idx) {
 return getSkinMatrix(skinMatricesTexture, idx);
}
#else
uniform mat4 skinMatrix[JOINT_COUNT] : SKIN_MATRIX;
mat4 getSkinMatrix(float idx) {
 return skinMatrix[int(idx)];
}
#endif
#endif
@end
@export clay.chunk.skin_matrix
mat4 skinMatrixWS = getSkinMatrix(joint.x) * weight.x;
if (weight.y > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.y) * weight.y;
}
if (weight.z > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.z) * weight.z;
}
float weightW = 1.0-weight.x-weight.y-weight.z;
if (weightW > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.w) * weightW;
}
@end
@export clay.chunk.instancing_header
#ifdef INSTANCING
attribute vec4 instanceMat1;
attribute vec4 instanceMat2;
attribute vec4 instanceMat3;
#endif
@end
@export clay.chunk.instancing_matrix
mat4 instanceMat = mat4(
 vec4(instanceMat1.xyz, 0.0),
 vec4(instanceMat2.xyz, 0.0),
 vec4(instanceMat3.xyz, 0.0),
 vec4(instanceMat1.w, instanceMat2.w, instanceMat3.w, 1.0)
);
@end
@export clay.util.parallax_correct
vec3 parallaxCorrect(in vec3 dir, in vec3 pos, in vec3 boxMin, in vec3 boxMax) {
 vec3 first = (boxMax - pos) / dir;
 vec3 second = (boxMin - pos) / dir;
 vec3 further = max(first, second);
 float dist = min(further.x, min(further.y, further.z));
 vec3 fixedPos = pos + dir * dist;
 vec3 boxCenter = (boxMax + boxMin) * 0.5;
 return normalize(fixedPos - boxCenter);
}
@end
@export clay.util.clamp_sample
vec4 clampSample(const in sampler2D texture, const in vec2 coord)
{
#ifdef STEREO
 float eye = step(0.5, coord.x) * 0.5;
 vec2 coordClamped = clamp(coord, vec2(eye, 0.0), vec2(0.5 + eye, 1.0));
#else
 vec2 coordClamped = clamp(coord, vec2(0.0), vec2(1.0));
#endif
 return texture2D(texture, coordClamped);
}
@end
@export clay.util.ACES
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
@end`,gh=`
@export ecgl.common.transformUniforms
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
uniform mat4 world : WORLD;
@end

@export ecgl.common.attributes
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 normal : NORMAL;
@end

@export ecgl.common.uv.header
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
uniform vec2 detailUvRepeat : [1.0, 1.0];
uniform vec2 detailUvOffset : [0.0, 0.0];

varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end

@export ecgl.common.uv.main
v_Texcoord = texcoord * uvRepeat + uvOffset;
v_DetailTexcoord = texcoord * detailUvRepeat + detailUvOffset;
@end

@export ecgl.common.uv.fragmentHeader
varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end


@export ecgl.common.albedo.main

 vec4 albedoTexel = vec4(1.0);
#ifdef DIFFUSEMAP_ENABLED
 albedoTexel = texture2D(diffuseMap, v_Texcoord);
 #ifdef SRGB_DECODE
 albedoTexel = sRGBToLinear(albedoTexel);
 #endif
#endif

#ifdef DETAILMAP_ENABLED
 vec4 detailTexel = texture2D(detailMap, v_DetailTexcoord);
 #ifdef SRGB_DECODE
 detailTexel = sRGBToLinear(detailTexel);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, detailTexel.rgb, detailTexel.a);
 albedoTexel.a = detailTexel.a + (1.0 - detailTexel.a) * albedoTexel.a;
#endif

@end

@export ecgl.common.wireframe.vertexHeader

#ifdef WIREFRAME_QUAD
attribute vec4 barycentric;
varying vec4 v_Barycentric;
#elif defined(WIREFRAME_TRIANGLE)
attribute vec3 barycentric;
varying vec3 v_Barycentric;
#endif

@end

@export ecgl.common.wireframe.vertexMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 v_Barycentric = barycentric;
#endif

@end


@export ecgl.common.wireframe.fragmentHeader

uniform float wireframeLineWidth : 1;
uniform vec4 wireframeLineColor: [0, 0, 0, 0.5];

#ifdef WIREFRAME_QUAD
varying vec4 v_Barycentric;
float edgeFactor () {
 vec4 d = fwidth(v_Barycentric);
 vec4 a4 = smoothstep(vec4(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(min(a4.x, a4.y), a4.z), a4.w);
}
#elif defined(WIREFRAME_TRIANGLE)
varying vec3 v_Barycentric;
float edgeFactor () {
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#endif

@end


@export ecgl.common.wireframe.fragmentMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 if (wireframeLineWidth > 0.) {
 vec4 lineColor = wireframeLineColor;
#ifdef SRGB_DECODE
 lineColor = sRGBToLinear(lineColor);
#endif

 gl_FragColor.rgb = mix(gl_FragColor.rgb, lineColor.rgb, (1.0 - edgeFactor()) * lineColor.a);
 }
#endif
@end




@export ecgl.common.bumpMap.header

#ifdef BUMPMAP_ENABLED
uniform sampler2D bumpMap;
uniform float bumpScale : 1.0;


vec3 bumpNormal(vec3 surfPos, vec3 surfNormal, vec3 baseNormal)
{
 vec2 dSTdx = dFdx(v_Texcoord);
 vec2 dSTdy = dFdy(v_Texcoord);

 float Hll = bumpScale * texture2D(bumpMap, v_Texcoord).x;
 float dHx = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdx).x - Hll;
 float dHy = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdy).x - Hll;

 vec3 vSigmaX = dFdx(surfPos);
 vec3 vSigmaY = dFdy(surfPos);
 vec3 vN = surfNormal;

 vec3 R1 = cross(vSigmaY, vN);
 vec3 R2 = cross(vN, vSigmaX);

 float fDet = dot(vSigmaX, R1);

 vec3 vGrad = sign(fDet) * (dHx * R1 + dHy * R2);
 return normalize(abs(fDet) * baseNormal - vGrad);

}
#endif

@end

@export ecgl.common.normalMap.vertexHeader

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.vertexMain

#ifdef NORMALMAP_ENABLED
 if (dot(tangent, tangent) > 0.0) {
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
 }
#endif

@end


@export ecgl.common.normalMap.fragmentHeader

#ifdef NORMALMAP_ENABLED
uniform sampler2D normalMap;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.fragmentMain
#ifdef NORMALMAP_ENABLED
 if (dot(v_Tangent, v_Tangent) > 0.0) {
 vec3 normalTexel = texture2D(normalMap, v_DetailTexcoord).xyz;
 if (dot(normalTexel, normalTexel) > 0.0) { N = normalTexel * 2.0 - 1.0;
 mat3 tbn = mat3(v_Tangent, v_Bitangent, v_Normal);
 N = normalize(tbn * N);
 }
 }
#endif
@end



@export ecgl.common.vertexAnimation.header

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevNormal;
uniform float percent;
#endif

@end

@export ecgl.common.vertexAnimation.main

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 vec3 norm = mix(prevNormal, normal, percent);
#else
 vec3 pos = position;
 vec3 norm = normal;
#endif

@end


@export ecgl.common.ssaoMap.header
#ifdef SSAOMAP_ENABLED
uniform sampler2D ssaoMap;
uniform vec4 viewport : VIEWPORT;
#endif
@end

@export ecgl.common.ssaoMap.main
 float ao = 1.0;
#ifdef SSAOMAP_ENABLED
 ao = texture2D(ssaoMap, (gl_FragCoord.xy - viewport.xy) / viewport.zw).r;
#endif
@end




@export ecgl.common.diffuseLayer.header

#if (LAYER_DIFFUSEMAP_COUNT > 0)
uniform float layerDiffuseIntensity[LAYER_DIFFUSEMAP_COUNT];
uniform sampler2D layerDiffuseMap[LAYER_DIFFUSEMAP_COUNT];
#endif

@end

@export ecgl.common.emissiveLayer.header

#if (LAYER_EMISSIVEMAP_COUNT > 0)
uniform float layerEmissionIntensity[LAYER_EMISSIVEMAP_COUNT];
uniform sampler2D layerEmissiveMap[LAYER_EMISSIVEMAP_COUNT];
#endif

@end

@export ecgl.common.layers.header
@import ecgl.common.diffuseLayer.header
@import ecgl.common.emissiveLayer.header
@end

@export ecgl.common.diffuseLayer.main

#if (LAYER_DIFFUSEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_DIFFUSEMAP_COUNT; _idx_++) {{
 float intensity = layerDiffuseIntensity[_idx_];
 vec4 texel2 = texture2D(layerDiffuseMap[_idx_], v_Texcoord);
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, texel2.rgb * intensity, texel2.a);
 albedoTexel.a = texel2.a + (1.0 - texel2.a) * albedoTexel.a;
 }}
#endif

@end

@export ecgl.common.emissiveLayer.main

#if (LAYER_EMISSIVEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_EMISSIVEMAP_COUNT; _idx_++)
 {{
 vec4 texel2 = texture2D(layerEmissiveMap[_idx_], v_Texcoord) * layerEmissionIntensity[_idx_];
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 float intensity = layerEmissionIntensity[_idx_];
 gl_FragColor.rgb += texel2.rgb * texel2.a * intensity;
 }}
#endif

@end
`,yh=`@export ecgl.color.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

@import ecgl.common.uv.header

attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 position: POSITION;

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

#ifdef ATMOSPHERE_ENABLED
attribute vec3 normal: NORMAL;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
varying vec3 v_Normal;
#endif

void main()
{
#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 @import ecgl.common.uv.main

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef ATMOSPHERE_ENABLED
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end

@export ecgl.color.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
varying vec3 v_Normal;
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.layers.header

@import ecgl.common.uv.fragmentHeader

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain

}
@end`,xh=`/**
 * http: */

@export ecgl.lambert.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header


@import ecgl.common.attributes

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif


@import ecgl.common.vertexAnimation.header


varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{
 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main


 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

 @import ecgl.common.wireframe.vertexMain
}

@end


@export ecgl.lambert.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 gl_FragColor *= sRGBToLinear(v_Color);
 #else
 gl_FragColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseColor = vec3(0.0, 0.0, 0.0);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 diffuseColor += ambientLightColor[i] * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseColor += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 vec3 lightColor = directionalLightColor[i];

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 diffuseColor += lightColor * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor.rgb *= diffuseColor;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,Th=`@export ecgl.realistic.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes


@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@import ecgl.common.vertexAnimation.header

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{

 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef NORMALMAP_ENABLED
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end



@export ecgl.realistic.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0
#define PI 3.14159265358979
#define ROUGHNESS_CHANEL 0
#define METALNESS_CHANEL 1

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;

uniform sampler2D detailMap;
uniform sampler2D metalnessMap;
uniform sampler2D roughnessMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform float metalness : 0.0;
uniform float roughness : 0.5;

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
@import clay.header.ambient_cubemap_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.normalMap.fragmentHeader

@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import clay.util.rgbm

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}

float D_Phong(float g, float ndh) {
 float a = pow(8192.0, g);
 return (a + 2.0) / 8.0 * pow(ndh, a);
}

void main()
{
 vec4 albedoColor = color;

 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);
#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 albedoColor *= sRGBToLinear(v_Color);
 #else
 albedoColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 albedoColor *= albedoTexel;

 float m = metalness;

#ifdef METALNESSMAP_ENABLED
 float m2 = texture2D(metalnessMap, v_DetailTexcoord)[METALNESS_CHANEL];
 m = clamp(m2 + (m - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 baseColor = albedoColor.rgb;
 albedoColor.rgb = baseColor * (1.0 - m);
 vec3 specFactor = mix(vec3(0.04), baseColor, m);

 float g = 1.0 - roughness;

#ifdef ROUGHNESSMAP_ENABLED
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 N = v_Normal;

#ifdef DOUBLE_SIDED
 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

@import ecgl.common.normalMap.fragmentMain

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseTerm = vec3(0.0);
 vec3 specularTerm = vec3(0.0);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 vec3 fresnelTerm = F_Schlick(ndv, specFactor);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += ambientLightColor[_idx_] * ambientFactor * ao;
 }}
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++)
 {{
 vec3 L = -directionalLightDirection[_idx_];
 vec3 lc = directionalLightColor[_idx_];

 vec3 H = normalize(L + V);
 float ndl = clamp(dot(N, normalize(L)), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[_idx_];
 }
#endif

 vec3 li = lc * ndl * shadowContrib;

 diffuseTerm += li;
 specularTerm += li * fresnelTerm * D_Phong(g, ndh);
 }}
#endif


#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
 vec3 L = reflect(-V, N);
 L = vec3(L.x, L[NORMAL_UP_AXIS], L[NORMAL_FRONT_AXIS]);
 float rough2 = clamp(1.0 - g, 0.0, 1.0);
 float bias2 = rough2 * 5.0;
 vec2 brdfParam2 = texture2D(ambientCubemapLightBRDFLookup[0], vec2(rough2, ndv)).xy;
 vec3 envWeight2 = specFactor * brdfParam2.x + brdfParam2.y;
 vec3 envTexel2;
 for(int _idx_ = 0; _idx_ < AMBIENT_CUBEMAP_LIGHT_COUNT; _idx_++)
 {{
 envTexel2 = RGBMDecode(textureCubeLodEXT(ambientCubemapLightCubemap[_idx_], L, bias2), 8.12);
 specularTerm += ambientCubemapLightColor[_idx_] * envTexel2 * envWeight2 * ao;
 }}
#endif

 gl_FragColor.rgb = albedoColor.rgb * diffuseTerm + specularTerm;
 gl_FragColor.a = albedoColor.a;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

#ifdef SRGB_ENCODE
 gl_FragColor = linearTosRGB(gl_FragColor);
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,Eh=`@export ecgl.hatching.vertex

@import ecgl.realistic.vertex

@end


@export ecgl.hatching.fragment

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform vec4 color : [0.0, 0.0, 0.0, 1.0];
uniform vec4 paperColor : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

uniform sampler2D hatch1;
uniform sampler2D hatch2;
uniform sampler2D hatch3;
uniform sampler2D hatch4;
uniform sampler2D hatch5;
uniform sampler2D hatch6;

float shade(in float tone) {
 vec4 c = vec4(1. ,1., 1., 1.);
 float step = 1. / 6.;
 vec2 uv = v_DetailTexcoord;
 if (tone <= step / 2.0) {
 c = mix(vec4(0.), texture2D(hatch6, uv), 12. * tone);
 }
 else if (tone <= step) {
 c = mix(texture2D(hatch6, uv), texture2D(hatch5, uv), 6. * tone);
 }
 if(tone > step && tone <= 2. * step){
 c = mix(texture2D(hatch5, uv), texture2D(hatch4, uv) , 6. * (tone - step));
 }
 if(tone > 2. * step && tone <= 3. * step){
 c = mix(texture2D(hatch4, uv), texture2D(hatch3, uv), 6. * (tone - 2. * step));
 }
 if(tone > 3. * step && tone <= 4. * step){
 c = mix(texture2D(hatch3, uv), texture2D(hatch2, uv), 6. * (tone - 3. * step));
 }
 if(tone > 4. * step && tone <= 5. * step){
 c = mix(texture2D(hatch2, uv), texture2D(hatch1, uv), 6. * (tone - 4. * step));
 }
 if(tone > 5. * step){
 c = mix(texture2D(hatch1, uv), vec4(1.), 6. * (tone - 5. * step));
 }

 return c.r;
}

const vec3 w = vec3(0.2125, 0.7154, 0.0721);

void main()
{
#ifdef SRGB_DECODE
 vec4 inkColor = sRGBToLinear(color);
#else
 vec4 inkColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 inkColor *= sRGBToLinear(v_Color);
 #else
 inkColor *= v_Color;
 #endif
#endif

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float tone = 0.0;

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 tone += dot(ambientLightColor[i], w) * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 tone += dot(calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_], w) * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 float lightTone = dot(directionalLightColor[i], w);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 tone += lightTone * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor = mix(inkColor, paperColor, shade(clamp(tone, 0.0, 1.0)));
 }
@end
`,Ah=`@export ecgl.sm.depth.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;

void main(){

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 v_ViewPosition = worldViewProjection * vec4(pos, 1.0);
 gl_Position = v_ViewPosition;

 v_Texcoord = texcoord;

}
@end



@export ecgl.sm.depth.fragment

@import clay.sm.depth.fragment

@end`;Object.assign(dt.prototype,ph);L.import(_h);L.import(wa);L.import(gh);L.import(yh);L.import(xh);L.import(Th);L.import(Eh);L.import(Ah);function Sh(e){return!e||e==="none"}function Fa(e){return e instanceof HTMLCanvasElement||e instanceof HTMLImageElement||e instanceof Image}function bh(e){return e.getZr&&e.setOption}var wh=Ct.prototype.addToScene,Ch=Ct.prototype.removeFromScene;Ct.prototype.addToScene=function(e){if(wh.call(this,e),this.__zr){var t=this.__zr;e.traverse(function(r){r.__zr=t,r.addAnimatorsToZr&&r.addAnimatorsToZr(t)})}};Ct.prototype.removeFromScene=function(e){Ch.call(this,e),e.traverse(function(t){var r=t.__zr;t.__zr=null,r&&t.removeAnimatorsFromZr&&t.removeAnimatorsFromZr(r)})};yt.prototype.setTextureImage=function(e,t,r,i){if(!!this.shader){var n=r.getZr(),a=this,s;return a.autoUpdateTextureStatus=!1,a.disableTexture(e),Sh(t)||(s=j.loadTexture(t,r,i,function(o){a.enableTexture(e),n&&n.refresh()}),a.set(e,s)),s}};var j={};j.Renderer=vr;j.Node=dt;j.Mesh=en;j.Shader=L;j.Material=yt;j.Texture=Y;j.Texture2D=ne;j.Geometry=Ae;j.SphereGeometry=rh;j.PlaneGeometry=sn;j.CubeGeometry=Oa;j.AmbientLight=nh;j.DirectionalLight=sh;j.PointLight=lh;j.SpotLight=uh;j.PerspectiveCamera=Le;j.OrthographicCamera=xr;j.Vector2=$e;j.Vector3=P;j.Vector4=ch;j.Quaternion=Ca;j.Matrix2=fh;j.Matrix2d=dh;j.Matrix3=vh;j.Matrix4=z;j.Plane=Pa;j.Ray=$r;j.BoundingBox=ke;j.Frustum=rn;var zr=null;function Rh(){return zr!==null||(zr=Ft.createBlank("rgba(255,255,255,0)").image),zr}function Yn(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function Zn(e){if((e.wrapS===Y.REPEAT||e.wrapT===Y.REPEAT)&&e.image){var t=Yn(e.width),r=Yn(e.height);if(t!==e.width||r!==e.height){var i=document.createElement("canvas");i.width=t,i.height=r;var n=i.getContext("2d");n.drawImage(e.image,0,0,t,r),e.image=i}}}j.loadTexture=function(e,t,r,i){typeof r=="function"&&(i=r,r={}),r=r||{};for(var n=Object.keys(r).sort(),a="",s=0;s<n.length;s++)a+=n[s]+"_"+r[n[s]]+"_";var o=t.__textureCache=t.__textureCache||new ps(20);if(bh(e)){var l=e.__textureid__,h=o.get(a+l);if(h)h.texture.surface.setECharts(e),i&&i(h.texture);else{var u=new Ul(e);u.onupdate=function(){t.getZr().refresh()},h={texture:u.getTexture()};for(var s=0;s<n.length;s++)h.texture[n[s]]=r[n[s]];l=e.__textureid__||"__ecgl_ec__"+h.texture.__uid__,e.__textureid__=l,o.put(a+l,h),i&&i(h.texture)}return h.texture}else if(Fa(e)){var l=e.__textureid__,h=o.get(a+l);if(!h){h={texture:new j.Texture2D({image:e})};for(var s=0;s<n.length;s++)h.texture[n[s]]=r[n[s]];l=e.__textureid__||"__ecgl_image__"+h.texture.__uid__,e.__textureid__=l,o.put(a+l,h),Zn(h.texture),i&&i(h.texture)}return h.texture}else{var h=o.get(a+e);if(h)h.callbacks?h.callbacks.push(i):i&&i(h.texture);else if(e.match(/.hdr$|^data:application\/octet-stream/)){h={callbacks:[i]};var c=Ft.loadTexture(e,{exposure:r.exposure,fileType:"hdr"},function(){c.dirty(),h.callbacks.forEach(function(v){v&&v(c)}),h.callbacks=null});h.texture=c,o.put(a+e,h)}else{for(var c=new j.Texture2D({image:new Image}),s=0;s<n.length;s++)c[n[s]]=r[n[s]];h={texture:c,callbacks:[i]};var d=c.image;d.onload=function(){c.image=d,Zn(c),c.dirty(),h.callbacks.forEach(function(m){m&&m(c)}),h.callbacks=null},d.crossOrigin="Anonymous",d.src=e,c.image=Rh(),o.put(a+e,h)}return h.texture}};j.createAmbientCubemap=function(e,t,r,i){e=e||{};var n=e.texture,a=tt.firstNotNull(e.exposure,1),s=new ql({intensity:tt.firstNotNull(e.specularIntensity,1)}),o=new Zl({intensity:tt.firstNotNull(e.diffuseIntensity,1),coefficients:[.844,.712,.691,-.037,.083,.167,.343,.288,.299,-.041,-.021,-.009,-.003,-.041,-.064,-.011,-.007,-.004,-.031,.034,.081,-.06,-.049,-.06,.046,.056,.05]});return s.cubemap=j.loadTexture(n,r,{exposure:a},function(){s.cubemap.flipY=!1,s.prefilter(t,32),o.coefficients=Jl.projectEnvironmentMap(t,s.cubemap,{lod:1}),i&&i()}),{specular:s,diffuse:o}};j.createBlankTexture=Ft.createBlank;j.isImage=Fa;j.additiveBlend=function(e){e.blendEquation(e.FUNC_ADD),e.blendFunc(e.SRC_ALPHA,e.ONE)};j.parseColor=function(e,t){return e instanceof Array?(t||(t=[]),t[0]=e[0],t[1]=e[1],t[2]=e[2],e.length>3?t[3]=e[3]:t[3]=1,t):(t=da(e||"#000",t)||[0,0,0,0],t[0]/=255,t[1]/=255,t[2]/=255,t)};j.directionFromAlphaBeta=function(e,t){var r=e/180*Math.PI+Math.PI/2,i=-t/180*Math.PI+Math.PI/2,n=[],a=Math.sin(r);return n[0]=a*Math.cos(i),n[1]=-Math.cos(r),n[2]=a*Math.sin(i),n};j.getShadowResolution=function(e){var t=1024;switch(e){case"low":t=512;break;case"medium":break;case"high":t=2048;break;case"ultra":t=4096;break}return t};j.COMMON_SHADERS=["lambert","color","realistic","hatching","shadow"];j.createShader=function(e){e==="ecgl.shadow"&&(e="ecgl.displayShadow");var t=L.source(e+".vertex"),r=L.source(e+".fragment");t||console.error("Vertex shader of '%s' not exits",e),r||console.error("Fragment shader of '%s' not exits",e);var i=new L(t,r);return i.name=e,i};j.createMaterial=function(e,t){t instanceof Array||(t=[t]);var r=j.createShader(e),i=new yt({shader:r});return t.forEach(function(n){typeof n=="string"&&i.define(n)}),i};j.setMaterialFromModel=function(e,t,r,i){t.autoUpdateTextureStatus=!1;var n=r.getModel(e+"Material"),a=n.get("detailTexture"),s=tt.firstNotNull(n.get("textureTiling"),1),o=tt.firstNotNull(n.get("textureOffset"),0);typeof s=="number"&&(s=[s,s]),typeof o=="number"&&(o=[o,o]);var l=s[0]>1||s[1]>1?j.Texture.REPEAT:j.Texture.CLAMP_TO_EDGE,h={anisotropic:8,wrapS:l,wrapT:l};if(e==="realistic"){var u=n.get("roughness"),c=n.get("metalness");c!=null?isNaN(c)&&(t.setTextureImage("metalnessMap",c,i,h),c=tt.firstNotNull(n.get("metalnessAdjust"),.5)):c=0,u!=null?isNaN(u)&&(t.setTextureImage("roughnessMap",u,i,h),u=tt.firstNotNull(n.get("roughnessAdjust"),.5)):u=.5;var d=n.get("normalTexture");t.setTextureImage("detailMap",a,i,h),t.setTextureImage("normalMap",d,i,h),t.set({roughness:u,metalness:c,detailUvRepeat:s,detailUvOffset:o})}else if(e==="lambert")t.setTextureImage("detailMap",a,i,h),t.set({detailUvRepeat:s,detailUvOffset:o});else if(e==="color")t.setTextureImage("detailMap",a,i,h),t.set({detailUvRepeat:s,detailUvOffset:o});else if(e==="hatching"){var f=n.get("hatchingTextures")||[];f.length<6;for(var v=0;v<6;v++)t.setTextureImage("hatch"+(v+1),f[v],i,{anisotropic:8,wrapS:j.Texture.REPEAT,wrapT:j.Texture.REPEAT});t.set({detailUvRepeat:s,detailUvOffset:o})}};j.updateVertexAnimation=function(e,t,r,i){var n=i.get("animation"),a=i.get("animationDurationUpdate"),s=i.get("animationEasingUpdate"),o=r.shadowDepthMaterial;if(n&&t&&a>0&&t.geometry.vertexCount===r.geometry.vertexCount){r.material.define("vertex","VERTEX_ANIMATION"),r.ignorePreZ=!0,o&&o.define("vertex","VERTEX_ANIMATION");for(var l=0;l<e.length;l++)r.geometry.attributes[e[l][0]].value=t.geometry.attributes[e[l][1]].value;r.geometry.dirty(),r.__percent=0,r.material.set("percent",0),r.stopAnimation(),r.animate().when(a,{__percent:1}).during(function(){r.material.set("percent",r.__percent),o&&o.set("percent",r.__percent)}).done(function(){r.ignorePreZ=!1,r.material.undefine("vertex","VERTEX_ANIMATION"),o&&o.undefine("vertex","VERTEX_ANIMATION")}).start(s)}else r.material.undefine("vertex","VERTEX_ANIMATION"),o&&o.undefine("vertex","VERTEX_ANIMATION")};var V=j,he=function(e,t){this.id=e,this.zr=t;try{this.renderer=new vr({clearBit:0,devicePixelRatio:t.painter.dpr,preserveDrawingBuffer:!0,premultipliedAlpha:!0}),this.renderer.resize(t.painter.getWidth(),t.painter.getHeight())}catch(i){this.renderer=null,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute; left: 0; top: 0; right: 0; bottom: 0;",this.dom.className="ecgl-nowebgl",this.dom.innerHTML="Sorry, your browser does not support WebGL",console.error(i);return}this.onglobalout=this.onglobalout.bind(this),t.on("globalout",this.onglobalout),this.dom=this.renderer.canvas;var r=this.dom.style;r.position="absolute",r.left="0",r.top="0",this.views=[],this._picking=new qo({renderer:this.renderer}),this._viewsToDispose=[],this._accumulatingId=0,this._zrEventProxy=new va({shape:{x:-1,y:-1,width:2,height:2},__isGLToZRProxy:!0}),this._backgroundColor=null,this._disposed=!1};he.prototype.setUnpainted=function(){};he.prototype.addView=function(e){if(e.layer!==this){var t=this._viewsToDispose.indexOf(e);t>=0&&this._viewsToDispose.splice(t,1),this.views.push(e),e.layer=this;var r=this.zr;e.scene.traverse(function(i){i.__zr=r,i.addAnimatorsToZr&&i.addAnimatorsToZr(r)})}};function Ua(e){var t=e.__zr;e.__zr=null,t&&e.removeAnimatorsFromZr&&e.removeAnimatorsFromZr(t)}he.prototype.removeView=function(e){if(e.layer===this){var t=this.views.indexOf(e);t>=0&&(this.views.splice(t,1),e.scene.traverse(Ua,this),e.layer=null,this._viewsToDispose.push(e))}};he.prototype.removeViewsAll=function(){this.views.forEach(function(e){e.scene.traverse(Ua,this),e.layer=null,this._viewsToDispose.push(e)},this),this.views.length=0};he.prototype.resize=function(e,t){var r=this.renderer;r.resize(e,t)};he.prototype.clear=function(){var e=this.renderer.gl,t=this._backgroundColor||[0,0,0,0];e.clearColor(t[0],t[1],t[2],t[3]),e.depthMask(!0),e.colorMask(!0,!0,!0,!0),e.clear(e.DEPTH_BUFFER_BIT|e.COLOR_BUFFER_BIT)};he.prototype.clearDepth=function(){var e=this.renderer.gl;e.clear(e.DEPTH_BUFFER_BIT)};he.prototype.clearColor=function(){var e=this.renderer.gl;e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT)};he.prototype.needsRefresh=function(){this.zr.refresh()};he.prototype.refresh=function(e){this._backgroundColor=e?V.parseColor(e):[0,0,0,0],this.renderer.clearColor=this._backgroundColor;for(var t=0;t<this.views.length;t++)this.views[t].prepareRender(this.renderer);this._doRender(!1),this._trackAndClean();for(var t=0;t<this._viewsToDispose.length;t++)this._viewsToDispose[t].dispose(this.renderer);this._viewsToDispose.length=0,this._startAccumulating()};he.prototype.renderToCanvas=function(e){this._startAccumulating(!0),e.drawImage(this.dom,0,0,e.canvas.width,e.canvas.height)};he.prototype._doRender=function(e){this.clear(),this.renderer.saveViewport();for(var t=0;t<this.views.length;t++)this.views[t].render(this.renderer,e);this.renderer.restoreViewport()};he.prototype._stopAccumulating=function(){this._accumulatingId=0,clearTimeout(this._accumulatingTimeout)};var Mh=1;he.prototype._startAccumulating=function(e){var t=this;this._stopAccumulating();for(var r=!1,i=0;i<this.views.length;i++)r=this.views[i].needsAccumulate()||r;if(!r)return;function n(a){if(!(!t._accumulatingId||a!==t._accumulatingId)){for(var s=!0,o=0;o<t.views.length;o++)s=t.views[o].isAccumulateFinished()&&r;s||(t._doRender(!0),e?n(a):gs(function(){n(a)}))}}this._accumulatingId=Mh++,e?n(t._accumulatingId):this._accumulatingTimeout=setTimeout(function(){n(t._accumulatingId)},50)};he.prototype._trackAndClean=function(){var e=[],t=[];this._textureList&&(Qr(this._textureList),Qr(this._geometriesList));for(var r=0;r<this.views.length;r++)Lh(this.views[r].scene,e,t);this._textureList&&(Jr(this.renderer,this._textureList),Jr(this.renderer,this._geometriesList)),this._textureList=e,this._geometriesList=t};function Qr(e){for(var t=0;t<e.length;t++)e[t].__used__=0}function Jr(e,t){for(var r=0;r<t.length;r++)t[r].__used__||t[r].dispose(e)}function Gr(e,t){e.__used__=e.__used__||0,e.__used__++,e.__used__===1&&t.push(e)}function Lh(e,t,r){var i,n;e.traverse(function(s){if(s.isRenderable()){var o=s.geometry,l=s.material;if(l!==i)for(var h=l.getTextureUniforms(),u=0;u<h.length;u++){var c=h[u],d=l.uniforms[c].value;if(!!d){if(d instanceof Y)Gr(d,t);else if(d instanceof Array)for(var f=0;f<d.length;f++)d[f]instanceof Y&&Gr(d[f],t)}}o!==n&&Gr(o,r),i=l,n=o}});for(var a=0;a<e.lights.length;a++)e.lights[a].cubemap&&Gr(e.lights[a].cubemap,t)}he.prototype.dispose=function(){this._disposed||(this._stopAccumulating(),this._textureList&&(Qr(this._textureList),Qr(this._geometriesList),Jr(this.renderer,this._textureList),Jr(this.renderer,this._geometriesList)),this.zr.off("globalout",this.onglobalout),this._disposed=!0)};he.prototype.onmousedown=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mousedown",e,t),this._dispatchDataEvent("mousedown",e,t)),this._downX=e.offsetX,this._downY=e.offsetY}};he.prototype.onmousemove=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY),r=t&&t.target,i=this._hovered;this._hovered=t,i&&r!==i.target&&(i.relatedTarget=r,this._dispatchEvent("mouseout",e,i),this.zr.setCursorStyle("default")),this._dispatchEvent("mousemove",e,t),t&&(this.zr.setCursorStyle("pointer"),(!i||r!==i.target)&&this._dispatchEvent("mouseover",e,t)),this._dispatchDataEvent("mousemove",e,t)}};he.prototype.onmouseup=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mouseup",e,t),this._dispatchDataEvent("mouseup",e,t)),this._upX=e.offsetX,this._upY=e.offsetY}};he.prototype.onclick=he.prototype.dblclick=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){var t=this._upX-this._downX,r=this._upY-this._downY;if(!(Math.sqrt(t*t+r*r)>20)){e=e.event;var i=this.pickObject(e.offsetX,e.offsetY);i&&(this._dispatchEvent(e.type,e,i),this._dispatchDataEvent(e.type,e,i));var n=this._clickToSetFocusPoint(e);if(n){var a=n.view.setDOFFocusOnPoint(n.distance);a&&this.zr.refresh()}}}};he.prototype._clickToSetFocusPoint=function(e){for(var t=this.renderer,r=t.viewport,i=this.views.length-1;i>=0;i--){var n=this.views[i];if(n.hasDOF()&&n.containPoint(e.offsetX,e.offsetY)){this._picking.scene=n.scene,this._picking.camera=n.camera,t.viewport=n.viewport;var a=this._picking.pick(e.offsetX,e.offsetY,!0);if(a)return a.view=n,a}}t.viewport=r};he.prototype.onglobalout=function(e){var t=this._hovered;t&&this._dispatchEvent("mouseout",e,{target:t.target})};he.prototype.pickObject=function(e,t){for(var r=[],i=this.renderer,n=i.viewport,a=0;a<this.views.length;a++){var s=this.views[a];s.containPoint(e,t)&&(this._picking.scene=s.scene,this._picking.camera=s.camera,i.viewport=s.viewport,this._picking.pickAll(e,t,r))}return i.viewport=n,r.sort(function(o,l){return o.distance-l.distance}),r[0]};he.prototype._dispatchEvent=function(e,t,r){r||(r={});var i=r.target;for(r.cancelBubble=!1,r.event=t,r.type=e,r.offsetX=t.offsetX,r.offsetY=t.offsetY;i&&(i.trigger(e,r),i=i.getParent(),!r.cancelBubble););this._dispatchToView(e,r)};he.prototype._dispatchDataEvent=function(e,t,r){var i=r&&r.target,n=i&&i.dataIndex,a=i&&i.seriesIndex,s=i&&i.eventData,o=!1,l=this._zrEventProxy;l.x=t.offsetX,l.y=t.offsetY,l.update();var h={target:l};const u=_s(l);e==="mousemove"&&(n!=null?n!==this._lastDataIndex&&(parseInt(this._lastDataIndex,10)>=0&&(u.dataIndex=this._lastDataIndex,u.seriesIndex=this._lastSeriesIndex,this.zr.handler.dispatchToElement(h,"mouseout",t)),o=!0):s!=null&&s!==this._lastEventData&&(this._lastEventData!=null&&(u.eventData=this._lastEventData,this.zr.handler.dispatchToElement(h,"mouseout",t)),o=!0),this._lastEventData=s,this._lastDataIndex=n,this._lastSeriesIndex=a),u.eventData=s,u.dataIndex=n,u.seriesIndex=a,(s!=null||parseInt(n,10)>=0&&parseInt(a,10)>=0)&&(this.zr.handler.dispatchToElement(h,e,t),o&&this.zr.handler.dispatchToElement(h,"mouseover",t))};he.prototype._dispatchToView=function(e,t){for(var r=0;r<this.views.length;r++)this.views[r].containPoint(t.offsetX,t.offsetY)&&this.views[r].trigger(e,t)};Object.assign(he.prototype,Ki);var Ha=he,Nh=["bar3D","line3D","map3D","scatter3D","surface","lines3D","scatterGL","scatter3D"];function dr(e,t){if(e&&e[t]&&(e[t].normal||e[t].emphasis)){var r=e[t].normal,i=e[t].emphasis;r&&(e[t]=r),i&&(e.emphasis=e.emphasis||{},e.emphasis[t]=i)}}function Ph(e){dr(e,"itemStyle"),dr(e,"lineStyle"),dr(e,"areaStyle"),dr(e,"label")}function kr(e){!e||(e instanceof Array||(e=[e]),pr(e,function(t){if(t.axisLabel){var r=t.axisLabel;Object.assign(r,r.textStyle),r.textStyle=null}}))}function Dh(e){pr(e.series,function(t){ys(Nh,t.type)>=0&&(Ph(t),t.coordinateSystem==="mapbox"&&(t.coordinateSystem="mapbox3D",e.mapbox3D=e.mapbox))}),kr(e.xAxis3D),kr(e.yAxis3D),kr(e.zAxis3D),kr(e.grid3D),dr(e.geo3D)}function za(e){this._layers={},this._zr=e}za.prototype.update=function(e,t){var r=this,i=t.getZr();if(!i.getWidth()||!i.getHeight()){console.warn("Dom has no width or height");return}function n(o){i.setSleepAfterStill(0);var l;o.coordinateSystem&&o.coordinateSystem.model,l=o.get("zlevel");var h=r._layers,u=h[l];if(!u){if(u=h[l]=new Ha("gl-"+l,i),i.painter.isSingleCanvas()){u.virtual=!0;var c=new As({z:1e4,style:{image:u.renderer.canvas},silent:!0});u.__hostImage=c,i.add(c)}i.painter.insertLayer(l,u)}return u.__hostImage&&u.__hostImage.setStyle({width:u.renderer.getWidth(),height:u.renderer.getHeight()}),u}function a(o,l){o&&o.traverse(function(h){h.isRenderable&&h.isRenderable()&&(h.ignorePicking=h.$ignorePicking!=null?h.$ignorePicking:l)})}for(var s in this._layers)this._layers[s].removeViewsAll();e.eachComponent(function(o,l){if(o!=="series"){var h=t.getViewOfComponentModel(l),u=l.coordinateSystem;if(h.__ecgl__){var c;if(u){if(!u.viewGL){console.error("Can't find viewGL in coordinateSystem of component "+l.id);return}c=u.viewGL}else{if(!l.viewGL){console.error("Can't find viewGL of component "+l.id);return}c=u.viewGL}var c=u.viewGL,d=n(l);d.addView(c),h.afterRender&&h.afterRender(l,e,t,d),a(h.groupGL,l.get("silent"))}}}),e.eachSeries(function(o){var l=t.getViewOfSeriesModel(o),h=o.coordinateSystem;if(l.__ecgl__){if(h&&!h.viewGL&&!l.viewGL){console.error("Can't find viewGL of series "+l.id);return}var u=h&&h.viewGL||l.viewGL,c=n(o);c.addView(u),l.afterRender&&l.afterRender(o,e,t,c),a(l.groupGL,o.get("silent"))}})};xs(function(e){var t=e.getZr(),r=t.painter.dispose;t.painter.dispose=function(){typeof this.eachOtherLayer=="function"&&this.eachOtherLayer(function(i){i instanceof Ha&&i.dispose()}),r.call(this)},t.painter.getRenderedCanvas=function(i){if(i=i||{},this._singleCanvas)return this._layers[0].dom;var n=document.createElement("canvas"),a=i.pixelRatio||this.dpr;n.width=this.getWidth()*a,n.height=this.getHeight()*a;var s=n.getContext("2d");s.dpr=a,s.clearRect(0,0,n.width,n.height),i.backgroundColor&&(s.fillStyle=i.backgroundColor,s.fillRect(0,0,n.width,n.height));var o=this.storage.getDisplayList(!0),l={},h,u=this;function c(m,p){var _=u._zlevelList;m==null&&(m=-1/0);for(var x,y=0;y<_.length;y++){var g=_[y],E=u._layers[g];if(!E.__builtin__&&g>m&&g<p){x=E;break}}x&&x.renderToCanvas&&(s.save(),x.renderToCanvas(s),s.restore())}for(var d={ctx:s},f=0;f<o.length;f++){var v=o[f];v.zlevel!==h&&(c(h,v.zlevel),h=v.zlevel),this._doPaintEl(v,d,!0,null,l)}return c(h,1/0),n}});Ts(function(e,t){var r=t.getZr(),i=r.__egl=r.__egl||new za(r);i.update(e,t)});Es(Dh);var Ih={defaultOption:{viewControl:{projection:"perspective",autoRotate:!1,autoRotateDirection:"cw",autoRotateSpeed:10,autoRotateAfterStill:3,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",distance:150,minDistance:40,maxDistance:400,orthographicSize:150,maxOrthographicSize:400,minOrthographicSize:20,center:[0,0,0],alpha:0,beta:0,minAlpha:-90,maxAlpha:90}},setView:function(e){e=e||{},this.option.viewControl=this.option.viewControl||{},e.alpha!=null&&(this.option.viewControl.alpha=e.alpha),e.beta!=null&&(this.option.viewControl.beta=e.beta),e.distance!=null&&(this.option.viewControl.distance=e.distance),e.center!=null&&(this.option.viewControl.center=e.center)}},Oh={defaultOption:{postEffect:{enable:!1,bloom:{enable:!0,intensity:.1},depthOfField:{enable:!1,focalRange:20,focalDistance:50,blurRadius:10,fstop:2.8,quality:"medium"},screenSpaceAmbientOcclusion:{enable:!1,radius:2,quality:"medium",intensity:1},screenSpaceReflection:{enable:!1,quality:"medium",maxRoughness:.8},colorCorrection:{enable:!0,exposure:0,brightness:0,contrast:1,saturation:1,lookupTexture:""},edge:{enable:!1},FXAA:{enable:!1}},temporalSuperSampling:{enable:"auto"}}},Bh={defaultOption:{light:{main:{shadow:!1,shadowQuality:"high",color:"#fff",intensity:1,alpha:0,beta:0},ambient:{color:"#fff",intensity:.2},ambientCubemap:{texture:null,exposure:1,diffuseIntensity:.5,specularIntensity:.5}}}},li=ma.extend({type:"grid3D",dependencies:["xAxis3D","yAxis3D","zAxis3D"],defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",boxWidth:100,boxHeight:100,boxDepth:100,axisPointer:{show:!0,lineStyle:{color:"rgba(0, 0, 0, 0.8)",width:1},label:{show:!0,formatter:null,margin:8,textStyle:{fontSize:14,color:"#fff",backgroundColor:"rgba(0,0,0,0.5)",padding:3,borderRadius:3}}},axisLine:{show:!0,lineStyle:{color:"#333",width:2,type:"solid"}},axisTick:{show:!0,inside:!1,length:3,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,margin:8,textStyle:{fontSize:12}},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}},light:{main:{alpha:30,beta:40},ambient:{intensity:.4}},viewControl:{alpha:20,beta:40,autoRotate:!1,distance:200,minDistance:40,maxDistance:400}}});_t(li.prototype,Ih);_t(li.prototype,Oh);_t(li.prototype,Bh);var Fh=li,ur=tt.firstNotNull,$n={left:0,middle:1,right:2};function Kn(e){return e instanceof Array||(e=[e,e]),e}var Ga=Ye.extend(function(){return{zr:null,viewGL:null,_center:new P,minDistance:.5,maxDistance:1.5,maxOrthographicSize:300,minOrthographicSize:30,minAlpha:-90,maxAlpha:90,minBeta:-1/0,maxBeta:1/0,autoRotateAfterStill:0,autoRotateDirection:"cw",autoRotateSpeed:60,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",_mode:"rotate",_camera:null,_needsUpdate:!1,_rotating:!1,_phi:0,_theta:0,_mouseX:0,_mouseY:0,_rotateVelocity:new $e,_panVelocity:new $e,_distance:500,_zoomSpeed:0,_stillTimeout:0,_animators:[]}},function(){["_mouseDownHandler","_mouseWheelHandler","_mouseMoveHandler","_mouseUpHandler","_pinchHandler","_contextMenuHandler","_update"].forEach(function(e){this[e]=this[e].bind(this)},this)},{init:function(){var e=this.zr;e&&(e.on("mousedown",this._mouseDownHandler),e.on("globalout",this._mouseUpHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("pinch",this._pinchHandler),e.animation.on("frame",this._update),e.dom.addEventListener("contextmenu",this._contextMenuHandler))},dispose:function(){var e=this.zr;e&&(e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("pinch",this._pinchHandler),e.off("globalout",this._mouseUpHandler),e.dom.removeEventListener("contextmenu",this._contextMenuHandler),e.animation.off("frame",this._update)),this.stopAllAnimation()},getDistance:function(){return this._distance},setDistance:function(e){this._distance=e,this._needsUpdate=!0},getOrthographicSize:function(){return this._orthoSize},setOrthographicSize:function(e){this._orthoSize=e,this._needsUpdate=!0},getAlpha:function(){return this._theta/Math.PI*180},getBeta:function(){return-this._phi/Math.PI*180},getCenter:function(){return this._center.toArray()},setAlpha:function(e){e=Math.max(Math.min(this.maxAlpha,e),this.minAlpha),this._theta=e/180*Math.PI,this._needsUpdate=!0},setBeta:function(e){e=Math.max(Math.min(this.maxBeta,e),this.minBeta),this._phi=-e/180*Math.PI,this._needsUpdate=!0},setCenter:function(e){this._center.setArray(e)},setViewGL:function(e){this.viewGL=e},getCamera:function(){return this.viewGL.camera},setFromViewControlModel:function(e,t){t=t||{};var r=t.baseDistance||0,i=t.baseOrthoSize||1,n=e.get("projection");n!=="perspective"&&n!=="orthographic"&&n!=="isometric"&&(n="perspective"),this._projection=n,this.viewGL.setProjection(n);var a=e.get("distance")+r,s=e.get("orthographicSize")+i;[["damping",.8],["autoRotate",!1],["autoRotateAfterStill",3],["autoRotateDirection","cw"],["autoRotateSpeed",10],["minDistance",30],["maxDistance",400],["minOrthographicSize",30],["maxOrthographicSize",300],["minAlpha",-90],["maxAlpha",90],["minBeta",-1/0],["maxBeta",1/0],["rotateSensitivity",1],["zoomSensitivity",1],["panSensitivity",1],["panMouseButton","left"],["rotateMouseButton","middle"]].forEach(function(d){this[d[0]]=ur(e.get(d[0]),d[1])},this),this.minDistance+=r,this.maxDistance+=r,this.minOrthographicSize+=i,this.maxOrthographicSize+=i;var o=e.ecModel,l={};["animation","animationDurationUpdate","animationEasingUpdate"].forEach(function(d){l[d]=ur(e.get(d),o&&o.get(d))});var h=ur(t.alpha,e.get("alpha"))||0,u=ur(t.beta,e.get("beta"))||0,c=ur(t.center,e.get("center"))||[0,0,0];l.animation&&l.animationDurationUpdate>0&&this._notFirst?this.animateTo({alpha:h,beta:u,center:c,distance:a,orthographicSize:s,easing:l.animationEasingUpdate,duration:l.animationDurationUpdate}):(this.setDistance(a),this.setAlpha(h),this.setBeta(u),this.setCenter(c),this.setOrthographicSize(s)),this._notFirst=!0,this._validateProperties()},_validateProperties:function(){},animateTo:function(e){var t=this.zr,r=this,i={},n={};return e.distance!=null&&(i.distance=this.getDistance(),n.distance=e.distance),e.orthographicSize!=null&&(i.orthographicSize=this.getOrthographicSize(),n.orthographicSize=e.orthographicSize),e.alpha!=null&&(i.alpha=this.getAlpha(),n.alpha=e.alpha),e.beta!=null&&(i.beta=this.getBeta(),n.beta=e.beta),e.center!=null&&(i.center=this.getCenter(),n.center=e.center),this._addAnimator(t.animation.animate(i).when(e.duration||1e3,n).during(function(){i.alpha!=null&&r.setAlpha(i.alpha),i.beta!=null&&r.setBeta(i.beta),i.distance!=null&&r.setDistance(i.distance),i.center!=null&&r.setCenter(i.center),i.orthographicSize!=null&&r.setOrthographicSize(i.orthographicSize),r._needsUpdate=!0})).start(e.easing||"linear")},stopAllAnimation:function(){for(var e=0;e<this._animators.length;e++)this._animators[e].stop();this._animators.length=0},update:function(){this._needsUpdate=!0,this._update(20)},_isAnimating:function(){return this._animators.length>0},_update:function(e){if(this._rotating){var t=(this.autoRotateDirection==="cw"?1:-1)*this.autoRotateSpeed/180*Math.PI;this._phi-=t*e/1e3,this._needsUpdate=!0}else this._rotateVelocity.len()>0&&(this._needsUpdate=!0);(Math.abs(this._zoomSpeed)>.1||this._panVelocity.len()>0)&&(this._needsUpdate=!0),this._needsUpdate&&(e=Math.min(e,50),this._updateDistanceOrSize(e),this._updatePan(e),this._updateRotate(e),this._updateTransform(),this.getCamera().update(),this.zr&&this.zr.refresh(),this.trigger("update"),this._needsUpdate=!1)},_updateRotate:function(e){var t=this._rotateVelocity;this._phi=t.y*e/20+this._phi,this._theta=t.x*e/20+this._theta,this.setAlpha(this.getAlpha()),this.setBeta(this.getBeta()),this._vectorDamping(t,Math.pow(this.damping,e/16))},_updateDistanceOrSize:function(e){this._projection==="perspective"?this._setDistance(this._distance+this._zoomSpeed*e/20):this._setOrthoSize(this._orthoSize+this._zoomSpeed*e/20),this._zoomSpeed*=Math.pow(this.damping,e/16)},_setDistance:function(e){this._distance=Math.max(Math.min(e,this.maxDistance),this.minDistance)},_setOrthoSize:function(e){this._orthoSize=Math.max(Math.min(e,this.maxOrthographicSize),this.minOrthographicSize);var t=this.getCamera(),r=this._orthoSize,i=r/this.viewGL.viewport.height*this.viewGL.viewport.width;t.left=-i/2,t.right=i/2,t.top=r/2,t.bottom=-r/2},_updatePan:function(e){var t=this._panVelocity,r=this._distance,i=this.getCamera(),n=i.worldTransform.y,a=i.worldTransform.x;this._center.scaleAndAdd(a,-t.x*r/200).scaleAndAdd(n,-t.y*r/200),this._vectorDamping(t,0)},_updateTransform:function(){var e=this.getCamera(),t=new P,r=this._theta+Math.PI/2,i=this._phi+Math.PI/2,n=Math.sin(r);t.x=n*Math.cos(i),t.y=-Math.cos(r),t.z=n*Math.sin(i),e.position.copy(this._center).scaleAndAdd(t,this._distance),e.rotation.identity().rotateY(-this._phi).rotateX(-this._theta)},_startCountingStill:function(){clearTimeout(this._stillTimeout);var e=this.autoRotateAfterStill,t=this;!isNaN(e)&&e>0&&(this._stillTimeout=setTimeout(function(){t._rotating=!0},e*1e3))},_vectorDamping:function(e,t){var r=e.len();r=r*t,r<1e-4&&(r=0),e.normalize().scale(r)},_decomposeTransform:function(){if(!!this.getCamera()){this.getCamera().updateWorldTransform();var e=this.getCamera().worldTransform.z,t=Math.asin(e.y),r=Math.atan2(e.x,e.z);this._theta=t,this._phi=-r,this.setBeta(this.getBeta()),this.setAlpha(this.getAlpha()),this.getCamera().aspect?this._setDistance(this.getCamera().position.dist(this._center)):this._setOrthoSize(this.getCamera().top-this.getCamera().bottom)}},_mouseDownHandler:function(e){if(!e.target&&!this._isAnimating()){var t=e.offsetX,r=e.offsetY;this.viewGL&&!this.viewGL.containPoint(t,r)||(this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler),e.event.targetTouches?e.event.targetTouches.length===1&&(this._mode="rotate"):e.event.button===$n[this.rotateMouseButton]?this._mode="rotate":e.event.button===$n[this.panMouseButton]?this._mode="pan":this._mode="",this._rotateVelocity.set(0,0),this._rotating=!1,this.autoRotate&&this._startCountingStill(),this._mouseX=e.offsetX,this._mouseY=e.offsetY)}},_mouseMoveHandler:function(e){if(!(e.target&&e.target.__isGLToZRProxy)&&!this._isAnimating()){var t=Kn(this.panSensitivity),r=Kn(this.rotateSensitivity);this._mode==="rotate"?(this._rotateVelocity.y=(e.offsetX-this._mouseX)/this.zr.getHeight()*2*r[0],this._rotateVelocity.x=(e.offsetY-this._mouseY)/this.zr.getWidth()*2*r[1]):this._mode==="pan"&&(this._panVelocity.x=(e.offsetX-this._mouseX)/this.zr.getWidth()*t[0]*400,this._panVelocity.y=(-e.offsetY+this._mouseY)/this.zr.getHeight()*t[1]*400),this._mouseX=e.offsetX,this._mouseY=e.offsetY,e.event.preventDefault()}},_mouseWheelHandler:function(e){if(!this._isAnimating()){var t=e.event.wheelDelta||-e.event.detail;this._zoomHandler(e,t)}},_pinchHandler:function(e){this._isAnimating()||(this._zoomHandler(e,e.pinchScale>1?1:-1),this._mode="")},_zoomHandler:function(e,t){if(t!==0){var r=e.offsetX,i=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(r,i))){var n;this._projection==="perspective"?n=Math.max(Math.max(Math.min(this._distance-this.minDistance,this.maxDistance-this._distance))/20,.5):n=Math.max(Math.max(Math.min(this._orthoSize-this.minOrthographicSize,this.maxOrthographicSize-this._orthoSize))/20,.5),this._zoomSpeed=(t>0?-1:1)*n*this.zoomSensitivity,this._rotating=!1,this.autoRotate&&this._mode==="rotate"&&this._startCountingStill(),e.event.preventDefault()}}},_mouseUpHandler:function(){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_isRightMouseButtonUsed:function(){return this.rotateMouseButton==="right"||this.panMouseButton==="right"},_contextMenuHandler:function(e){this._isRightMouseButtonUsed()&&e.preventDefault()},_addAnimator:function(e){var t=this._animators;return t.push(e),e.done(function(){var r=t.indexOf(e);r>=0&&t.splice(r,1)}),e}});Object.defineProperty(Ga.prototype,"autoRotate",{get:function(e){return this._autoRotate},set:function(e){this._autoRotate=e,this._rotating=e}});var Uh=Ga,ln={convertToDynamicArray:function(e){e&&this.resetOffset();var t=this.attributes;for(var r in t)e||!t[r].value?t[r].value=[]:t[r].value=Array.prototype.slice.call(t[r].value);e||!this.indices?this.indices=[]:this.indices=Array.prototype.slice.call(this.indices)},convertToTypedArray:function(){var e=this.attributes;for(var t in e)e[t].value&&e[t].value.length>0?e[t].value=new Float32Array(e[t].value):e[t].value=null;this.indices&&this.indices.length>0&&(this.indices=this.vertexCount>65535?new Uint32Array(this.indices):new Uint16Array(this.indices)),this.dirty()}},hi={vec2:H,vec3:T,vec4:D,mat2:xe,mat2d:Se,mat3:ee,mat4:C,quat:q},Mi=hi.vec3,Qn=[[0,0],[1,1]],ka=Ae.extend(function(){return{segmentScale:1,dynamic:!0,useNativeLine:!0,attributes:{position:new Ae.Attribute("position","float",3,"POSITION"),positionPrev:new Ae.Attribute("positionPrev","float",3),positionNext:new Ae.Attribute("positionNext","float",3),prevPositionPrev:new Ae.Attribute("prevPositionPrev","float",3),prevPosition:new Ae.Attribute("prevPosition","float",3),prevPositionNext:new Ae.Attribute("prevPositionNext","float",3),offset:new Ae.Attribute("offset","float",1),color:new Ae.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.positionPrev.init(e),t.positionNext.init(e),t.offset.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,r,i){var n=Mi.dist(e,t)+Mi.dist(r,t)+Mi.dist(i,r),a=1/(n+1)*this.segmentScale;return a},getCubicCurveVertexCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?a*2:a*2+2},getCubicCurveTriangleCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?0:a*2},getLineVertexCount:function(){return this.getPolylineVertexCount(Qn)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(Qn)},getPolylineVertexCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/3}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/3}return this.useNativeLine?0:Math.max(t-1,0)*2},addCubicCurve:function(e,t,r,i,n,a){a==null&&(a=1);for(var s=e[0],o=e[1],l=e[2],h=t[0],u=t[1],c=t[2],d=r[0],f=r[1],v=r[2],m=i[0],p=i[1],_=i[2],x=this._getCubicCurveApproxStep(e,t,r,i),y=x*x,g=y*x,E=3*x,S=3*y,R=6*y,b=6*g,M=s-h*2+d,F=o-u*2+f,w=l-c*2+v,U=(h-d)*3-s+m,O=(u-f)*3-o+p,N=(c-v)*3-l+_,G=s,B=o,Z=l,I=(h-s)*E+M*S+U*g,ce=(u-o)*E+F*S+O*g,k=(c-l)*E+w*S+N*g,ye=M*R+U*b,ae=F*R+O*b,ve=w*R+N*b,me=U*b,Oe=O*b,Be=N*b,Re=0,ze=0,Ze=Math.ceil(1/x),Fe=new Float32Array((Ze+1)*3),Fe=[],rt=0,ze=0;ze<Ze+1;ze++)Fe[rt++]=G,Fe[rt++]=B,Fe[rt++]=Z,G+=I,B+=ce,Z+=k,I+=ye,ce+=ae,k+=ve,ye+=me,ae+=Oe,ve+=Be,Re+=x,Re>1&&(G=I>0?Math.min(G,m):Math.max(G,m),B=ce>0?Math.min(B,p):Math.max(B,p),Z=k>0?Math.min(Z,_):Math.max(Z,_));return this.addPolyline(Fe,n,a)},addLine:function(e,t,r,i){return this.addPolyline([e,t],r,i)},addPolyline:function(e,t,r,i,n){if(!!e.length){var a=typeof e[0]!="number";if(n==null&&(n=a?e.length:e.length/3),!(n<2)){i==null&&(i=0),r==null&&(r=1),this._itemVertexOffsets.push(this._vertexOffset);var a=typeof e[0]!="number",s=a?typeof t[0]!="number":t.length/4===n,o=this.attributes.position,l=this.attributes.positionPrev,h=this.attributes.positionNext,u=this.attributes.color,c=this.attributes.offset,d=this.indices,f=this._vertexOffset,v,m;r=Math.max(r,.01);for(var p=i;p<n;p++){if(a)v=e[p],s?m=t[p]:m=t;else{var _=p*3;if(v=v||[],v[0]=e[_],v[1]=e[_+1],v[2]=e[_+2],s){var x=p*4;m=m||[],m[0]=t[x],m[1]=t[x+1],m[2]=t[x+2],m[3]=t[x+3]}else m=t}if(this.useNativeLine?p>1&&(o.copy(f,f-1),u.copy(f,f-1),f++):(p<n-1&&(l.set(f+2,v),l.set(f+3,v)),p>0&&(h.set(f-2,v),h.set(f-1,v)),o.set(f,v),o.set(f+1,v),u.set(f,m),u.set(f+1,m),c.set(f,r/2),c.set(f+1,-r/2),f+=2),this.useNativeLine)u.set(f,m),o.set(f,v),f++;else if(p>0){var y=this._triangleOffset*3,d=this.indices;d[y]=f-4,d[y+1]=f-3,d[y+2]=f-2,d[y+3]=f-3,d[y+4]=f-1,d[y+5]=f-2,this._triangleOffset+=2}}if(!this.useNativeLine){var g=this._vertexOffset,E=this._vertexOffset+n*2;l.copy(g,g+2),l.copy(g+1,g+3),h.copy(E-1,E-3),h.copy(E-2,E-4)}return this._vertexOffset=f,this._vertexOffset}}},setItemColor:function(e,t){for(var r=this._itemVertexOffsets[e],i=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,n=r;n<i;n++)this.attributes.color.set(n,t);this.dirty("color")},currentTriangleOffset:function(){return this._triangleOffset},currentVertexOffset:function(){return this._vertexOffset}});Ar(ka.prototype,ln);var hn=ka;function ei(e,t,r,i,n,a,s){this._zr=e,this._x=0,this._y=0,this._rowHeight=0,this.width=i,this.height=n,this.offsetX=t,this.offsetY=r,this.dpr=s,this.gap=a}ei.prototype={constructor:ei,clear:function(){this._x=0,this._y=0,this._rowHeight=0},add:function(e,t,r){var i=e.getBoundingRect();t==null&&(t=i.width),r==null&&(r=i.height),t*=this.dpr,r*=this.dpr,this._fitElement(e,t,r);var n=this._x,a=this._y,s=this.width*this.dpr,o=this.height*this.dpr,l=this.gap;if(n+t+l>s&&(n=this._x=0,a+=this._rowHeight+l,this._y=a,this._rowHeight=0),this._x+=t+l,this._rowHeight=Math.max(this._rowHeight,r),a+r+l>o)return null;e.x+=this.offsetX*this.dpr+n,e.y+=this.offsetY*this.dpr+a,this._zr.add(e);var h=[this.offsetX/this.width,this.offsetY/this.height],u=[[n/s+h[0],a/o+h[1]],[(n+t)/s+h[0],(a+r)/o+h[1]]];return u},_fitElement:function(e,t,r){var i=e.getBoundingRect(),n=t/i.width,a=r/i.height;e.x=-i.x*n,e.y=-i.y*a,e.scaleX=n,e.scaleY=a,e.update()}};function Wi(e){e=e||{},e.width=e.width||512,e.height=e.height||512,e.devicePixelRatio=e.devicePixelRatio||1,e.gap=e.gap==null?2:e.gap;var t=document.createElement("canvas");t.width=e.width*e.devicePixelRatio,t.height=e.height*e.devicePixelRatio,this._canvas=t,this._texture=new ne({image:t,flipY:!1});var r=this;this._zr=Ss(t);var i=this._zr.refreshImmediately;this._zr.refreshImmediately=function(){i.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},this._dpr=e.devicePixelRatio,this._coords={},this.onupdate=e.onupdate,this._gap=e.gap,this._textureAtlasNodes=[new ei(this._zr,0,0,e.width,e.height,this._gap,this._dpr)],this._nodeWidth=e.width,this._nodeHeight=e.height,this._currentNodeIdx=0}Wi.prototype={clear:function(){for(var e=0;e<this._textureAtlasNodes.length;e++)this._textureAtlasNodes[e].clear();this._currentNodeIdx=0,this._zr.clear(),this._coords={}},getWidth:function(){return this._width},getHeight:function(){return this._height},getTexture:function(){return this._texture},getDevicePixelRatio:function(){return this._dpr},getZr:function(){return this._zr},_getCurrentNode:function(){return this._textureAtlasNodes[this._currentNodeIdx]},_expand:function(){if(this._currentNodeIdx++,this._textureAtlasNodes[this._currentNodeIdx])return this._textureAtlasNodes[this._currentNodeIdx];var e=4096/this._dpr,t=this._textureAtlasNodes,r=t.length,i=r*this._nodeWidth%e,n=Math.floor(r*this._nodeWidth/e)*this._nodeHeight;if(!(n>=e)){var a=(i+this._nodeWidth)*this._dpr,s=(n+this._nodeHeight)*this._dpr;try{this._zr.resize({width:a,height:s})}catch{this._canvas.width=a,this._canvas.height=s}var o=new ei(this._zr,i,n,this._nodeWidth,this._nodeHeight,this._gap,this._dpr);return this._textureAtlasNodes.push(o),o}},add:function(e,t,r){if(this._coords[e.id])return this._coords[e.id];var i=this._getCurrentNode().add(e,t,r);if(!i){var n=this._expand();if(!n)return;i=n.add(e,t,r)}return this._coords[e.id]=i,i},getCoordsScale:function(){var e=this._dpr;return[this._nodeWidth/this._canvas.width*e,this._nodeHeight/this._canvas.height*e]},getCoords:function(e){return this._coords[e]},dispose:function(){this._zr.dispose()}};function Xi(){}Xi.prototype={constructor:Xi,setScene:function(e){this._scene=e,this._skybox&&this._skybox.attachScene(this._scene)},initLight:function(e){this._lightRoot=e,this.mainLight=new V.DirectionalLight({shadowBias:.005}),this.ambientLight=new V.AmbientLight,e.add(this.mainLight),e.add(this.ambientLight)},dispose:function(){this._lightRoot&&(this._lightRoot.remove(this.mainLight),this._lightRoot.remove(this.ambientLight))},updateLight:function(e){var t=this.mainLight,r=this.ambientLight,i=e.getModel("light"),n=i.getModel("main"),a=i.getModel("ambient");t.intensity=n.get("intensity"),r.intensity=a.get("intensity"),t.color=V.parseColor(n.get("color")).slice(0,3),r.color=V.parseColor(a.get("color")).slice(0,3);var s=n.get("alpha")||0,o=n.get("beta")||0;t.position.setArray(V.directionFromAlphaBeta(s,o)),t.lookAt(V.Vector3.ZERO),t.castShadow=n.get("shadow"),t.shadowResolution=V.getShadowResolution(n.get("shadowQuality"))},updateAmbientCubemap:function(e,t,r){var i=t.getModel("light.ambientCubemap"),n=i.get("texture");if(n){this._cubemapLightsCache=this._cubemapLightsCache||{};var a=this._cubemapLightsCache[n];if(!a){var s=this;a=this._cubemapLightsCache[n]=V.createAmbientCubemap(i.option,e,r,function(){s._isSkyboxFromAmbientCubemap&&s._skybox.setEnvironmentMap(a.specular.cubemap),r.getZr().refresh()})}this._lightRoot.add(a.diffuse),this._lightRoot.add(a.specular),this._currentCubemapLights=a}else this._currentCubemapLights&&(this._lightRoot.remove(this._currentCubemapLights.diffuse),this._lightRoot.remove(this._currentCubemapLights.specular),this._currentCubemapLights=null)},updateSkybox:function(e,t,r){var i=t.get("environment"),n=this;function a(){return n._skybox=n._skybox||new yr,n._skybox}var s=a();if(i&&i!=="none")if(i==="auto")if(this._isSkyboxFromAmbientCubemap=!0,this._currentCubemapLights){var o=this._currentCubemapLights.specular.cubemap;s.setEnvironmentMap(o),this._scene&&s.attachScene(this._scene),s.material.set("lod",3)}else this._skybox&&this._skybox.detachScene();else if(typeof i=="object"&&i.colorStops||typeof i=="string"&&da(i)){this._isSkyboxFromAmbientCubemap=!1;var l=new V.Texture2D({anisotropic:8,flipY:!1});s.setEnvironmentMap(l);var h=l.image=document.createElement("canvas");h.width=h.height=16;var u=h.getContext("2d"),c=new va({shape:{x:0,y:0,width:16,height:16},style:{fill:i}});bs(u,c),s.attachScene(this._scene)}else{this._isSkyboxFromAmbientCubemap=!1;var l=V.loadTexture(i,r,{anisotropic:8,flipY:!1});s.setEnvironmentMap(l),s.attachScene(this._scene)}else this._skybox&&this._skybox.detachScene(this._scene),this._skybox=null;var d=t.coordinateSystem;if(this._skybox)if(d&&d.viewGL&&i!=="auto"&&!(i.match&&i.match(/.hdr$/))){var f=d.viewGL.isLinearSpace()?"define":"undefine";this._skybox.material[f]("fragment","SRGB_DECODE")}else this._skybox.material.undefine("fragment","SRGB_DECODE")}};var Lt=hi.vec3,Va=Ae.extend(function(){return{segmentScale:1,useNativeLine:!0,attributes:{position:new Ae.Attribute("position","float",3,"POSITION"),normal:new Ae.Attribute("normal","float",3,"NORMAL"),color:new Ae.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setQuadCount:function(e){var t=this.attributes,r=this.getQuadVertexCount()*e,i=this.getQuadTriangleCount()*e;this.vertexCount!==r&&(t.position.init(r),t.normal.init(r),t.color.init(r)),this.triangleCount!==i&&(this.indices=r>65535?new Uint32Array(i*3):new Uint16Array(i*3))},getQuadVertexCount:function(){return 4},getQuadTriangleCount:function(){return 2},addQuad:function(){var e=Lt.create(),t=Lt.create(),r=Lt.create(),i=[0,3,1,3,2,1];return function(n,a){var s=this.attributes.position,o=this.attributes.normal,l=this.attributes.color;Lt.sub(e,n[1],n[0]),Lt.sub(t,n[2],n[1]),Lt.cross(r,e,t),Lt.normalize(r,r);for(var h=0;h<4;h++)s.set(this._vertexOffset+h,n[h]),l.set(this._vertexOffset+h,a),o.set(this._vertexOffset+h,r);for(var u=this._faceOffset*3,h=0;h<6;h++)this.indices[u+h]=i[h]+this._vertexOffset;this._vertexOffset+=4,this._faceOffset+=2}}()});Ar(Va.prototype,ln);var Hh=Va,ji=tt.firstNotNull,zh={x:0,y:2,z:1};function Gh(e,t,r,i){var n=[0,0,0],a=i<0?r.getExtentMin():r.getExtentMax();n[zh[r.dim]]=a,e.position.setArray(n),e.rotation.identity(),t.distance=-Math.abs(a),t.normal.set(0,0,0),r.dim==="x"?(e.rotation.rotateY(i*Math.PI/2),t.normal.x=-i):r.dim==="z"?(e.rotation.rotateX(-i*Math.PI/2),t.normal.y=-i):(i>0&&e.rotation.rotateY(Math.PI),t.normal.z=-i)}function ui(e,t,r){this.rootNode=new V.Node;var i=new V.Mesh({geometry:new hn({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:1}),n=new V.Mesh({geometry:new Hh,material:r,castShadow:!1,culling:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:0});this.rootNode.add(n),this.rootNode.add(i),this.faceInfo=e,this.plane=new V.Plane,this.linesMesh=i,this.quadsMesh=n}ui.prototype.update=function(e,t,r){var i=e.coordinateSystem,n=[i.getAxis(this.faceInfo[0]),i.getAxis(this.faceInfo[1])],a=this.linesMesh.geometry,s=this.quadsMesh.geometry;a.convertToDynamicArray(!0),s.convertToDynamicArray(!0),this._updateSplitLines(a,n,e,r),this._udpateSplitAreas(s,n,e,r),a.convertToTypedArray(),s.convertToTypedArray();var o=i.getAxis(this.faceInfo[2]);Gh(this.rootNode,this.plane,o,this.faceInfo[3])};ui.prototype._updateSplitLines=function(e,t,r,i){var n=i.getDevicePixelRatio();t.forEach(function(a,s){var o=a.model,l=t[1-s].getExtent();if(!a.scale.isBlank()){var h=o.getModel("splitLine",r.getModel("splitLine"));if(h.get("show")){var u=h.getModel("lineStyle"),c=u.get("color"),d=ji(u.get("opacity"),1),f=ji(u.get("width"),1);c=mr(c)?c:[c];for(var v=a.getTicksCoords({tickModel:h}),m=0,p=0;p<v.length;p++){var _=v[p].coord,x=V.parseColor(c[m%c.length]);x[3]*=d;var y=[0,0,0],g=[0,0,0];y[s]=g[s]=_,y[1-s]=l[0],g[1-s]=l[1],e.addLine(y,g,x,f*n),m++}}}})};ui.prototype._udpateSplitAreas=function(e,t,r,i){t.forEach(function(n,a){var s=n.model,o=t[1-a].getExtent();if(!n.scale.isBlank()){var l=s.getModel("splitArea",r.getModel("splitArea"));if(l.get("show")){var h=l.getModel("areaStyle"),u=h.get("color"),c=ji(h.get("opacity"),1);u=mr(u)?u:[u];for(var d=n.getTicksCoords({tickModel:l,clamp:!0}),f=0,v=[0,0,0],m=[0,0,0],p=0;p<d.length;p++){var _=d[p].coord,x=[0,0,0],y=[0,0,0];if(x[a]=y[a]=_,x[1-a]=o[0],y[1-a]=o[1],p===0){v=x,m=y;continue}var g=V.parseColor(u[f%u.length]);g[3]*=c,e.addQuad([v,x,y,m],g),v=x,m=y,f++}}}})};var Jn=[0,1,2,0,2,3],Wa=Ae.extend(function(){return{attributes:{position:new Ae.Attribute("position","float",3,"POSITION"),texcoord:new Ae.Attribute("texcoord","float",2,"TEXCOORD_0"),offset:new Ae.Attribute("offset","float",2),color:new Ae.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setSpriteCount:function(e){this._spriteCount=e;var t=e*4,r=e*2;this.vertexCount!==t&&(this.attributes.position.init(t),this.attributes.offset.init(t),this.attributes.color.init(t)),this.triangleCount!==r&&(this.indices=t>65535?new Uint32Array(r*3):new Uint16Array(r*3))},setSpriteAlign:function(e,t,r,i,n){r==null&&(r="left"),i==null&&(i="top");var a,s,o,l;switch(n=n||0,r){case"left":a=n,o=t[0]+n;break;case"center":case"middle":a=-t[0]/2,o=t[0]/2;break;case"right":a=-t[0]-n,o=-n;break}switch(i){case"bottom":s=n,l=t[1]+n;break;case"middle":s=-t[1]/2,l=t[1]/2;break;case"top":s=-t[1]-n,l=-n;break}var h=e*4,u=this.attributes.offset;u.set(h,[a,l]),u.set(h+1,[o,l]),u.set(h+2,[o,s]),u.set(h+3,[a,s])},addSprite:function(e,t,r,i,n,a){var s=this._vertexOffset;this.setSprite(this._vertexOffset/4,e,t,r,i,n,a);for(var o=0;o<Jn.length;o++)this.indices[this._faceOffset*3+o]=Jn[o]+s;return this._faceOffset+=2,this._vertexOffset+=4,s/4},setSprite:function(e,t,r,i,n,a,s){for(var o=e*4,l=this.attributes,h=0;h<4;h++)l.position.set(o+h,t);var u=l.texcoord;u.set(o,[i[0][0],i[0][1]]),u.set(o+1,[i[1][0],i[0][1]]),u.set(o+2,[i[1][0],i[1][1]]),u.set(o+3,[i[0][0],i[1][1]]),this.setSpriteAlign(e,r,n,a,s)}});Ar(Wa.prototype,ln);var kh=Wa,Vh=`@export ecgl.labels.vertex

attribute vec3 position: POSITION;
attribute vec2 texcoord: TEXCOORD_0;
attribute vec2 offset;
#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;

varying vec2 v_Texcoord;

void main()
{
 vec4 proj = worldViewProjection * vec4(position, 1.0);

 vec2 screen = (proj.xy / abs(proj.w) + 1.0) * 0.5 * viewport.zw;

 screen += offset;

 proj.xy = (screen / viewport.zw - 0.5) * 2.0 * abs(proj.w);
 gl_Position = proj;
#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif
 v_Texcoord = texcoord;
}
@end


@export ecgl.labels.fragment

uniform vec3 color : [1.0, 1.0, 1.0];
uniform float alpha : 1.0;
uniform sampler2D textureAtlas;
uniform vec2 uvScale: [1.0, 1.0];

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif
varying float v_Miter;

varying vec2 v_Texcoord;

void main()
{
 gl_FragColor = vec4(color, alpha) * texture2D(textureAtlas, v_Texcoord * uvScale);
#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif
}

@end`;V.Shader.import(Vh);var Xa=V.Mesh.extend(function(){var e=new kh({dynamic:!0}),t=new V.Material({shader:V.createShader("ecgl.labels"),transparent:!0,depthMask:!1});return{geometry:e,material:t,culling:!1,castShadow:!1,ignorePicking:!0}}),Nt=tt.firstNotNull,Pt={x:0,y:2,z:1};function un(e,t){var r=new V.Mesh({geometry:new hn({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,renderOrder:2}),i=new Xa;i.material.depthMask=!1;var n=new V.Node;n.add(r),n.add(i),this.rootNode=n,this.dim=e,this.linesMesh=r,this.labelsMesh=i,this.axisLineCoords=null,this.labelElements=[]}var Li={x:"y",y:"x",z:"y"};un.prototype.update=function(e,t,r){var i=e.coordinateSystem,n=i.getAxis(this.dim),a=this.linesMesh.geometry,s=this.labelsMesh.geometry;a.convertToDynamicArray(!0),s.convertToDynamicArray(!0);var o=n.model,l=n.getExtent(),w=r.getDevicePixelRatio(),h=o.getModel("axisLine",e.getModel("axisLine")),u=o.getModel("axisTick",e.getModel("axisTick")),c=o.getModel("axisLabel",e.getModel("axisLabel")),d=h.get("lineStyle.color");if(h.get("show")){var f=h.getModel("lineStyle"),v=[0,0,0],m=[0,0,0],p=Pt[n.dim];v[p]=l[0],m[p]=l[1],this.axisLineCoords=[v,m];var _=V.parseColor(d),x=Nt(f.get("width"),1),y=Nt(f.get("opacity"),1);_[3]*=y,a.addLine(v,m,_,x*w)}if(u.get("show")){var g=u.getModel("lineStyle"),E=V.parseColor(Nt(g.get("color"),d)),x=Nt(g.get("width"),1);E[3]*=Nt(g.get("opacity"),1);for(var S=n.getTicksCoords(),R=u.get("length"),b=0;b<S.length;b++){var M=S[b].coord,v=[0,0,0],m=[0,0,0],p=Pt[n.dim],F=Pt[Li[n.dim]];v[p]=m[p]=M,m[F]=R,a.addLine(v,m,E,x*w)}}this.labelElements=[];var w=r.getDevicePixelRatio();if(c.get("show"))for(var S=n.getTicksCoords(),U=o.get("data"),O=c.get("margin"),N=n.getViewLabels(),b=0;b<N.length;b++){var G=N[b].tickValue,B=N[b].formattedLabel,Z=N[b].rawLabel,M=n.dataToCoord(G),I=[0,0,0],p=Pt[n.dim],F=Pt[Li[n.dim]];I[p]=I[p]=M,I[F]=O;var ce=c;U&&U[G]&&U[G].textStyle&&(ce=new ws(U[G].textStyle,c,o.ecModel));var k=Nt(ce.get("color"),d),ye=new Oi({style:Bi(ce,{text:B,fill:typeof k=="function"?k(n.type==="category"?Z:n.type==="value"?G+"":G,b):k,verticalAlign:"top",align:"left"})}),ae=t.add(ye),ve=ye.getBoundingRect();s.addSprite(I,[ve.width*w,ve.height*w],ae),this.labelElements.push(ye)}if(o.get("name")){var me=o.getModel("nameTextStyle"),I=[0,0,0],p=Pt[n.dim],F=Pt[Li[n.dim]],Oe=Nt(me.get("color"),d),Be=me.get("borderColor"),x=me.get("borderWidth");I[p]=I[p]=(l[0]+l[1])/2,I[F]=o.get("nameGap");var ye=new Oi({style:Bi(me,{text:o.get("name"),fill:Oe,stroke:Be,lineWidth:x})}),ae=t.add(ye),ve=ye.getBoundingRect();s.addSprite(I,[ve.width*w,ve.height*w],ae),ye.__idx=this.labelElements.length,this.nameLabelElement=ye}this.labelsMesh.material.set("textureAtlas",t.getTexture()),this.labelsMesh.material.set("uvScale",t.getCoordsScale()),a.convertToTypedArray(),s.convertToTypedArray()};un.prototype.setSpriteAlign=function(e,t,r){for(var i=r.getDevicePixelRatio(),n=this.labelsMesh.geometry,a=0;a<this.labelElements.length;a++){var s=this.labelElements[a],o=s.getBoundingRect();n.setSpriteAlign(a,[o.width*i,o.height*i],e,t)}var l=this.nameLabelElement;if(l){var o=l.getBoundingRect();n.setSpriteAlign(l.__idx,[o.width*i,o.height*i],e,t),n.dirty()}this.textAlign=e,this.textVerticalAlign=t};var Wh=`@export ecgl.lines3D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

void main()
{
 gl_Position = worldViewProjection * vec4(position, 1.0);
 v_Color = a_Color;
}

@end

@export ecgl.lines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif
}
@end



@export ecgl.lines3D.clipNear

vec4 clipNear(vec4 p1, vec4 p2) {
 float n = (p1.w - near) / (p1.w - p2.w);
 return vec4(mix(p1.xy, p2.xy, n), -near, near);
}

@end

@export ecgl.lines3D.expandLine
#ifdef VERTEX_ANIMATION
 vec4 prevProj = worldViewProjection * vec4(mix(prevPositionPrev, positionPrev, percent), 1.0);
 vec4 currProj = worldViewProjection * vec4(mix(prevPosition, position, percent), 1.0);
 vec4 nextProj = worldViewProjection * vec4(mix(prevPositionNext, positionNext, percent), 1.0);
#else
 vec4 prevProj = worldViewProjection * vec4(positionPrev, 1.0);
 vec4 currProj = worldViewProjection * vec4(position, 1.0);
 vec4 nextProj = worldViewProjection * vec4(positionNext, 1.0);
#endif

 if (currProj.w < 0.0) {
 if (nextProj.w > 0.0) {
 currProj = clipNear(currProj, nextProj);
 }
 else if (prevProj.w > 0.0) {
 currProj = clipNear(currProj, prevProj);
 }
 }

 vec2 prevScreen = (prevProj.xy / abs(prevProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 currScreen = (currProj.xy / abs(currProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 nextScreen = (nextProj.xy / abs(nextProj.w) + 1.0) * 0.5 * viewport.zw;

 vec2 dir;
 float len = offset;
 if (position == positionPrev) {
 dir = normalize(nextScreen - currScreen);
 }
 else if (position == positionNext) {
 dir = normalize(currScreen - prevScreen);
 }
 else {
 vec2 dirA = normalize(currScreen - prevScreen);
 vec2 dirB = normalize(nextScreen - currScreen);

 vec2 tanget = normalize(dirA + dirB);

 float miter = 1.0 / max(dot(tanget, dirA), 0.5);
 len *= miter;
 dir = tanget;
 }

 dir = vec2(-dir.y, dir.x) * len;
 currScreen += dir;

 currProj.xy = (currScreen / viewport.zw - 0.5) * 2.0 * abs(currProj.w);
@end


@export ecgl.meshLines3D.vertex

attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute vec4 a_Color : COLOR;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevPositionPrev;
attribute vec3 prevPositionNext;
uniform float percent : 1.0;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

varying vec4 v_Color;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain
}
@end


@export ecgl.meshLines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain
}

@end`,ea=tt.firstNotNull;V.Shader.import(Wh);var Dt={x:0,y:2,z:1},Xh=Cs.extend({type:"grid3D",__ecgl__:!0,init:function(e,t){var r=[["y","z","x",-1,"left"],["y","z","x",1,"right"],["x","y","z",-1,"bottom"],["x","y","z",1,"top"],["x","z","y",-1,"far"],["x","z","y",1,"near"]],i=["x","y","z"],n=new V.Material({shader:V.createShader("ecgl.color"),depthMask:!1,transparent:!0}),a=new V.Material({shader:V.createShader("ecgl.meshLines3D"),depthMask:!1,transparent:!0});n.define("fragment","DOUBLE_SIDED"),n.define("both","VERTEX_COLOR"),this.groupGL=new V.Node,this._control=new Uh({zr:t.getZr()}),this._control.init(),this._faces=r.map(function(o){var l=new ui(o,a,n);return this.groupGL.add(l.rootNode),l},this),this._axes=i.map(function(o){var l=new un(o,a);return this.groupGL.add(l.rootNode),l},this);var s=t.getDevicePixelRatio();this._axisLabelSurface=new Wi({width:256,height:256,devicePixelRatio:s}),this._axisLabelSurface.onupdate=function(){t.getZr().refresh()},this._axisPointerLineMesh=new V.Mesh({geometry:new hn({useNativeLine:!1}),material:a,castShadow:!1,ignorePicking:!0,renderOrder:3}),this.groupGL.add(this._axisPointerLineMesh),this._axisPointerLabelsSurface=new Wi({width:128,height:128,devicePixelRatio:s}),this._axisPointerLabelsMesh=new Xa({ignorePicking:!0,renderOrder:4,castShadow:!1}),this._axisPointerLabelsMesh.material.set("textureAtlas",this._axisPointerLabelsSurface.getTexture()),this.groupGL.add(this._axisPointerLabelsMesh),this._lightRoot=new V.Node,this._sceneHelper=new Xi,this._sceneHelper.initLight(this._lightRoot)},render:function(e,t,r){this._model=e,this._api=r;var i=e.coordinateSystem;i.viewGL.add(this._lightRoot),e.get("show")?i.viewGL.add(this.groupGL):i.viewGL.remove(this.groupGL);var n=this._control;n.setViewGL(i.viewGL);var a=e.getModel("viewControl");n.setFromViewControlModel(a,0),this._axisLabelSurface.clear(),n.off("update"),e.get("show")&&(this._faces.forEach(function(s){s.update(e,t,r)},this),this._axes.forEach(function(s){s.update(e,this._axisLabelSurface,r)},this)),n.on("update",this._onCameraChange.bind(this,e,r),this),this._sceneHelper.setScene(i.viewGL.scene),this._sceneHelper.updateLight(e),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._initMouseHandler(e)},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r)},showAxisPointer:function(e,t,r,i){this._doShowAxisPointer(),this._updateAxisPointer(i.value)},hideAxisPointer:function(e,t,r,i){this._doHideAxisPointer()},_initMouseHandler:function(e){var t=e.coordinateSystem,r=t.viewGL;e.get("show")&&e.get("axisPointer.show")?r.on("mousemove",this._updateAxisPointerOnMousePosition,this):r.off("mousemove",this._updateAxisPointerOnMousePosition)},_updateAxisPointerOnMousePosition:function(e){if(!e.target){for(var t=this._model,r=t.coordinateSystem,i=r.viewGL,n=i.castRay(e.offsetX,e.offsetY,new V.Ray),a,s=0;s<this._faces.length;s++){var o=this._faces[s];if(!o.rootNode.invisible){o.plane.normal.dot(i.camera.worldTransform.z)<0&&o.plane.normal.negate();var l=n.intersectPlane(o.plane);if(!!l){var h=r.getAxis(o.faceInfo[0]),u=r.getAxis(o.faceInfo[1]),c=Dt[o.faceInfo[0]],d=Dt[o.faceInfo[1]];h.contain(l.array[c])&&u.contain(l.array[d])&&(a=l)}}}if(a){var f=r.pointToData(a.array,[],!0);this._updateAxisPointer(f),this._doShowAxisPointer()}else this._doHideAxisPointer()}},_onCameraChange:function(e,t){e.get("show")&&(this._updateFaceVisibility(),this._updateAxisLinePosition());var r=this._control;t.dispatchAction({type:"grid3DChangeCamera",alpha:r.getAlpha(),beta:r.getBeta(),distance:r.getDistance(),center:r.getCenter(),from:this.uid,grid3DId:e.id})},_updateFaceVisibility:function(){var e=this._control.getCamera(),t=new V.Vector3;e.update();for(var r=0;r<this._faces.length/2;r++){for(var i=[],n=0;n<2;n++){var a=this._faces[r*2+n];a.rootNode.getWorldPosition(t),t.transformMat4(e.viewMatrix),i[n]=t.z}var s=i[0]>i[1]?0:1,o=this._faces[r*2+s],l=this._faces[r*2+1-s];o.rootNode.invisible=!0,l.rootNode.invisible=!1}},_updateAxisLinePosition:function(){var e=this._model.coordinateSystem,t=e.getAxis("x"),r=e.getAxis("y"),i=e.getAxis("z"),n=i.getExtentMax(),a=i.getExtentMin(),s=t.getExtentMin(),o=t.getExtentMax(),l=r.getExtentMax(),h=r.getExtentMin(),u=this._axes[0].rootNode,c=this._axes[1].rootNode,d=this._axes[2].rootNode,f=this._faces,v=f[4].rootNode.invisible?h:l,m=f[2].rootNode.invisible?n:a,p=f[0].rootNode.invisible?s:o,_=f[2].rootNode.invisible?n:a,x=f[0].rootNode.invisible?o:s,y=f[4].rootNode.invisible?h:l;u.rotation.identity(),c.rotation.identity(),d.rotation.identity(),f[4].rootNode.invisible&&(this._axes[0].flipped=!0,u.rotation.rotateX(Math.PI)),f[0].rootNode.invisible&&(this._axes[1].flipped=!0,c.rotation.rotateZ(Math.PI)),f[4].rootNode.invisible&&(this._axes[2].flipped=!0,d.rotation.rotateY(Math.PI)),u.position.set(0,m,v),c.position.set(p,_,0),d.position.set(x,0,y),u.update(),c.update(),d.update(),this._updateAxisLabelAlign()},_updateAxisLabelAlign:function(){var e=this._control.getCamera(),t=[new V.Vector4,new V.Vector4],r=new V.Vector4;this.groupGL.getWorldPosition(r),r.w=1,r.transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),r.x/=r.w,r.y/=r.w,this._axes.forEach(function(i){var n=i.axisLineCoords;i.labelsMesh.geometry;for(var a=0;a<t.length;a++)t[a].setArray(n[a]),t[a].w=1,t[a].transformMat4(i.rootNode.worldTransform).transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),t[a].x/=t[a].w,t[a].y/=t[a].w;var s=t[1].x-t[0].x,o=t[1].y-t[0].y,l=(t[1].x+t[0].x)/2,h=(t[1].y+t[0].y)/2,u,c;Math.abs(o/s)<.5?(u="center",c=h>r.y?"bottom":"top"):(c="middle",u=l>r.x?"left":"right"),i.setSpriteAlign(u,c,this._api)},this)},_doShowAxisPointer:function(){!this._axisPointerLineMesh.invisible||(this._axisPointerLineMesh.invisible=!1,this._axisPointerLabelsMesh.invisible=!1,this._api.getZr().refresh())},_doHideAxisPointer:function(){this._axisPointerLineMesh.invisible||(this._axisPointerLineMesh.invisible=!0,this._axisPointerLabelsMesh.invisible=!0,this._api.getZr().refresh())},_updateAxisPointer:function(e){var t=this._model.coordinateSystem,r=t.dataToPoint(e),i=this._axisPointerLineMesh,n=i.geometry,a=this._model.getModel("axisPointer"),s=this._api.getDevicePixelRatio();n.convertToDynamicArray(!0);function o(b){return tt.firstNotNull(b.model.get("axisPointer.show"),a.get("show"))}function l(b){var M=b.model.getModel("axisPointer",a),F=M.getModel("lineStyle"),w=V.parseColor(F.get("color")),U=ea(F.get("width"),1),O=ea(F.get("opacity"),1);return w[3]*=O,{color:w,lineWidth:U}}for(var h=0;h<this._faces.length;h++){var u=this._faces[h];if(!u.rootNode.invisible){for(var c=u.faceInfo,d=c[3]<0?t.getAxis(c[2]).getExtentMin():t.getAxis(c[2]).getExtentMax(),f=Dt[c[2]],v=0;v<2;v++){var m=c[v],p=c[1-v],_=t.getAxis(m),x=t.getAxis(p);if(!!o(_)){var y=[0,0,0],g=[0,0,0],E=Dt[m],S=Dt[p];y[E]=g[E]=r[E],y[f]=g[f]=d,y[S]=x.getExtentMin(),g[S]=x.getExtentMax();var R=l(_);n.addLine(y,g,R.color,R.lineWidth*s)}}if(o(t.getAxis(c[2]))){var y=r.slice(),g=r.slice();g[f]=d;var R=l(t.getAxis(c[2]));n.addLine(y,g,R.color,R.lineWidth*s)}}}n.convertToTypedArray(),this._updateAxisPointerLabelsMesh(e),this._api.getZr().refresh()},_updateAxisPointerLabelsMesh:function(e){var t=this._model,r=this._axisPointerLabelsMesh,i=this._axisPointerLabelsSurface,n=t.coordinateSystem,a=t.getModel("axisPointer");r.geometry.convertToDynamicArray(!0),i.clear();var s={x:"y",y:"x",z:"y"};this._axes.forEach(function(o,l){var h=n.getAxis(o.dim),u=h.model,c=u.getModel("axisPointer",a),d=c.getModel("label"),f=c.get("lineStyle.color");if(!(!d.get("show")||!c.get("show"))){var v=e[l],m=d.get("formatter"),p=h.scale.getLabel({value:v});if(m!=null)p=m(p,e);else if(h.scale.type==="interval"||h.scale.type==="log"){var _=pa(h.scale.getTicks()[0]);p=v.toFixed(_+2)}var x=d.get("color"),y=new Oi({style:Bi(d,{text:p,fill:x||f,align:"left",verticalAlign:"top"})}),g=i.add(y),E=y.getBoundingRect(),S=this._api.getDevicePixelRatio(),R=o.rootNode.position.toArray(),b=Dt[s[o.dim]];R[b]+=(o.flipped?-1:1)*d.get("margin"),R[Dt[o.dim]]=h.dataToCoord(e[l]),r.geometry.addSprite(R,[E.width*S,E.height*S],g,o.textAlign,o.textVerticalAlign)}},this),i.getZr().refreshImmediately(),r.material.set("uvScale",i.getCoordsScale()),r.geometry.convertToTypedArray()},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._axisLabelSurface.dispose(),this._axisPointerLabelsSurface.dispose()}});function Tr(e){_a.call(this,e),this.type="cartesian3D",this.dimensions=["x","y","z"],this.size=[0,0,0]}Tr.prototype={constructor:Tr,model:null,containPoint:function(e){return this.getAxis("x").contain(e[0])&&this.getAxis("y").contain(e[2])&&this.getAxis("z").contain(e[1])},containData:function(e){return this.getAxis("x").containData(e[0])&&this.getAxis("y").containData(e[1])&&this.getAxis("z").containData(e[2])},dataToPoint:function(e,t,r){return t=t||[],t[0]=this.getAxis("x").dataToCoord(e[0],r),t[2]=this.getAxis("y").dataToCoord(e[1],r),t[1]=this.getAxis("z").dataToCoord(e[2],r),t},pointToData:function(e,t,r){return t=t||[],t[0]=this.getAxis("x").coordToData(e[0],r),t[1]=this.getAxis("y").coordToData(e[2],r),t[2]=this.getAxis("z").coordToData(e[1],r),t}};ga(Tr,_a);function ti(e,t,r){ya.call(this,e,t,r)}ti.prototype={constructor:ti,getExtentMin:function(){var e=this._extent;return Math.min(e[0],e[1])},getExtentMax:function(){var e=this._extent;return Math.max(e[0],e[1])},calculateCategoryInterval:function(){return Math.floor(this.scale.count()/8)}};ga(ti,ya);var qi=function(){this._pool={},this._allocatedTextures=[]};qi.prototype={constructor:qi,get:function(e){var t=ta(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var r=this._pool[t];if(!r.length){var i=new ne(e);return this._allocatedTextures.push(i),i}return r.pop()},put:function(e){var t=ta(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var r=this._pool[t];r.push(e)},clear:function(e){for(var t=0;t<this._allocatedTextures.length;t++)this._allocatedTextures[t].dispose(e);this._pool={},this._allocatedTextures=[]}};var ja={width:512,height:512,type:A.UNSIGNED_BYTE,format:A.RGBA,wrapS:A.CLAMP_TO_EDGE,wrapT:A.CLAMP_TO_EDGE,minFilter:A.LINEAR_MIPMAP_LINEAR,magFilter:A.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,unpackAlignment:4,premultiplyAlpha:!1},Ni=Object.keys(ja);function ta(e){De.defaultsWithPropList(e,ja,Ni),jh(e);for(var t="",r=0;r<Ni.length;r++){var i=Ni[r],n=e[i].toString();t+=n}return t}function jh(e){var t=qh(e.width,e.height);e.format===A.DEPTH_COMPONENT&&(e.useMipmap=!1),(!t||!e.useMipmap)&&(e.minFilter==A.NEAREST_MIPMAP_NEAREST||e.minFilter==A.NEAREST_MIPMAP_LINEAR?e.minFilter=A.NEAREST:(e.minFilter==A.LINEAR_MIPMAP_LINEAR||e.minFilter==A.LINEAR_MIPMAP_NEAREST)&&(e.minFilter=A.LINEAR)),t||(e.wrapS=A.CLAMP_TO_EDGE,e.wrapT=A.CLAMP_TO_EDGE)}function qh(e,t){return(e&e-1)===0&&(t&t-1)===0}var qa=qi,Yh=`@export clay.sm.depth.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
uniform vec2 uvRepeat = vec2(1.0, 1.0);
uniform vec2 uvOffset = vec2(0.0, 0.0);
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
void main(){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 v_ViewPosition = worldViewProjection * P;
 gl_Position = v_ViewPosition;
 v_Texcoord = texcoord * uvRepeat + uvOffset;
}
@end
@export clay.sm.depth.fragment
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
uniform float bias : 0.001;
uniform float slopeScale : 1.0;
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
@import clay.util.encode_float
void main(){
 float depth = v_ViewPosition.z / v_ViewPosition.w;
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
#ifdef USE_VSM
 depth = depth * 0.5 + 0.5;
 float moment1 = depth;
 float moment2 = depth * depth;
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 moment2 += 0.25*(dx*dx+dy*dy);
 #endif
 gl_FragColor = vec4(moment1, moment2, 0.0, 1.0);
#else
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 depth += sqrt(dx*dx + dy*dy) * slopeScale + bias;
 #else
 depth += bias;
 #endif
 gl_FragColor = encodeFloat(depth * 0.5 + 0.5);
#endif
}
@end
@export clay.sm.debug_depth
uniform sampler2D depthMap;
varying vec2 v_Texcoord;
@import clay.util.decode_float
void main() {
 vec4 tex = texture2D(depthMap, v_Texcoord);
#ifdef USE_VSM
 gl_FragColor = vec4(tex.rgb, 1.0);
#else
 float depth = decodeFloat(tex);
 gl_FragColor = vec4(depth, depth, depth, 1.0);
#endif
}
@end
@export clay.sm.distance.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 world : WORLD;
attribute vec3 position : POSITION;
@import clay.chunk.skinning_header
varying vec3 v_WorldPosition;
void main (){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = worldViewProjection * P;
 v_WorldPosition = (world * P).xyz;
}
@end
@export clay.sm.distance.fragment
uniform vec3 lightPosition;
uniform float range : 100;
varying vec3 v_WorldPosition;
@import clay.util.encode_float
void main(){
 float dist = distance(lightPosition, v_WorldPosition);
#ifdef USE_VSM
 gl_FragColor = vec4(dist, dist * dist, 0.0, 0.0);
#else
 dist = dist / range;
 gl_FragColor = encodeFloat(dist);
#endif
}
@end
@export clay.plugin.shadow_map_common
@import clay.util.decode_float
float tapShadowMap(sampler2D map, vec2 uv, float z){
 vec4 tex = texture2D(map, uv);
 return step(z, decodeFloat(tex) * 2.0 - 1.0);
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize, vec2 scale) {
 float shadowContrib = tapShadowMap(map, uv, z);
 vec2 offset = vec2(1.0 / textureSize) * scale;
#ifdef PCF_KERNEL_SIZE
 for (int _idx_ = 0; _idx_ < PCF_KERNEL_SIZE; _idx_++) {{
 shadowContrib += tapShadowMap(map, uv + offset * pcfKernel[_idx_], z);
 }}
 return shadowContrib / float(PCF_KERNEL_SIZE + 1);
#else
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, -offset.y), z);
 return shadowContrib / 9.0;
#endif
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize) {
 return pcf(map, uv, z, textureSize, vec2(1.0));
}
float chebyshevUpperBound(vec2 moments, float z){
 float p = 0.0;
 z = z * 0.5 + 0.5;
 if (z <= moments.x) {
 p = 1.0;
 }
 float variance = moments.y - moments.x * moments.x;
 variance = max(variance, 0.0000001);
 float mD = moments.x - z;
 float pMax = variance / (variance + mD * mD);
 pMax = clamp((pMax-0.4)/(1.0-0.4), 0.0, 1.0);
 return max(p, pMax);
}
float computeShadowContrib(
 sampler2D map, mat4 lightVPM, vec3 position, float textureSize, vec2 scale, vec2 offset
) {
 vec4 posInLightSpace = lightVPM * vec4(position, 1.0);
 posInLightSpace.xyz /= posInLightSpace.w;
 float z = posInLightSpace.z;
 if(all(greaterThan(posInLightSpace.xyz, vec3(-0.99, -0.99, -1.0))) &&
 all(lessThan(posInLightSpace.xyz, vec3(0.99, 0.99, 1.0)))){
 vec2 uv = (posInLightSpace.xy+1.0) / 2.0;
 #ifdef USE_VSM
 vec2 moments = texture2D(map, uv * scale + offset).xy;
 return chebyshevUpperBound(moments, z);
 #else
 return pcf(map, uv * scale + offset, z, textureSize, scale);
 #endif
 }
 return 1.0;
}
float computeShadowContrib(sampler2D map, mat4 lightVPM, vec3 position, float textureSize) {
 return computeShadowContrib(map, lightVPM, position, textureSize, vec2(1.0), vec2(0.0));
}
float computeShadowContribOmni(samplerCube map, vec3 direction, float range)
{
 float dist = length(direction);
 vec4 shadowTex = textureCube(map, direction);
#ifdef USE_VSM
 vec2 moments = shadowTex.xy;
 float variance = moments.y - moments.x * moments.x;
 float mD = moments.x - dist;
 float p = variance / (variance + mD * mD);
 if(moments.x + 0.001 < dist){
 return clamp(p, 0.0, 1.0);
 }else{
 return 1.0;
 }
#else
 return step(dist, (decodeFloat(shadowTex) + 0.0002) * range);
#endif
}
@end
@export clay.plugin.compute_shadow_map
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT) || defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT) || defined(POINT_LIGHT_SHADOWMAP_COUNT)
#ifdef SPOT_LIGHT_SHADOWMAP_COUNT
uniform sampler2D spotLightShadowMaps[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 spotLightMatrices[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float spotLightShadowMapSizes[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#ifdef DIRECTIONAL_LIGHT_SHADOWMAP_COUNT
#if defined(SHADOW_CASCADE)
uniform sampler2D directionalLightShadowMaps[1]:unconfigurable;
uniform mat4 directionalLightMatrices[SHADOW_CASCADE]:unconfigurable;
uniform float directionalLightShadowMapSizes[1]:unconfigurable;
uniform float shadowCascadeClipsNear[SHADOW_CASCADE]:unconfigurable;
uniform float shadowCascadeClipsFar[SHADOW_CASCADE]:unconfigurable;
#else
uniform sampler2D directionalLightShadowMaps[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 directionalLightMatrices[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float directionalLightShadowMapSizes[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#endif
#ifdef POINT_LIGHT_SHADOWMAP_COUNT
uniform samplerCube pointLightShadowMaps[POINT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
uniform bool shadowEnabled : true;
#ifdef PCF_KERNEL_SIZE
uniform vec2 pcfKernel[PCF_KERNEL_SIZE];
#endif
@import clay.plugin.shadow_map_common
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfSpotLights(vec3 position, inout float shadowContribs[SPOT_LIGHT_COUNT] ) {
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < SPOT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 spotLightShadowMaps[_idx_], spotLightMatrices[_idx_], position,
 spotLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = SPOT_LIGHT_SHADOWMAP_COUNT; _idx_ < SPOT_LIGHT_COUNT; _idx_++){{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
#ifdef SHADOW_CASCADE
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float depth = (2.0 * gl_FragCoord.z - gl_DepthRange.near - gl_DepthRange.far)
 / (gl_DepthRange.far - gl_DepthRange.near);
 float shadowContrib;
 shadowContribs[0] = 1.0;
 for (int _idx_ = 0; _idx_ < SHADOW_CASCADE; _idx_++) {{
 if (
 depth >= shadowCascadeClipsNear[_idx_] &&
 depth <= shadowCascadeClipsFar[_idx_]
 ) {
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[0], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[0],
 vec2(1.0 / float(SHADOW_CASCADE), 1.0),
 vec2(float(_idx_) / float(SHADOW_CASCADE), 0.0)
 );
 shadowContribs[0] = shadowContrib;
 }
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#else
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[_idx_], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
#if defined(POINT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfPointLights(vec3 position, inout float shadowContribs[POINT_LIGHT_COUNT] ){
 vec3 lightPosition;
 vec3 direction;
 for(int _idx_ = 0; _idx_ < POINT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 lightPosition = pointLightPosition[_idx_];
 direction = position - lightPosition;
 shadowContribs[_idx_] = computeShadowContribOmni(pointLightShadowMaps[_idx_], direction, pointLightRange[_idx_]);
 }}
 for(int _idx_ = POINT_LIGHT_SHADOWMAP_COUNT; _idx_ < POINT_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
@end`,At=["px","nx","py","ny","pz","nz"];L.import(Yh);function Pi(e,t,r){if(r==="alphaMap")return e.material.get("diffuseMap");if(r==="alphaCutoff"){if(e.material.isDefined("fragment","ALPHA_TEST")&&e.material.get("diffuseMap")){var i=e.material.get("alphaCutoff");return i||0}return 0}else return r==="uvRepeat"?e.material.get("uvRepeat"):r==="uvOffset"?e.material.get("uvOffset"):t.get(r)}function ra(e,t){var r=e.material,i=t.material;return r.get("diffuseMap")!==i.get("diffuseMap")||(r.get("alphaCutoff")||0)!==(i.get("alphaCutoff")||0)}var ft=Ye.extend(function(){return{softShadow:ft.PCF,shadowBlur:1,lightFrustumBias:"auto",kernelPCF:new Float32Array([1,0,1,1,-1,1,0,1,-1,0,-1,-1,1,-1,0,-1]),precision:"highp",_lastRenderNotCastShadow:!1,_frameBuffer:new Ue,_textures:{},_shadowMapNumber:{POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},_depthMaterials:{},_distanceMaterials:{},_receivers:[],_lightsCastShadow:[],_lightCameras:{},_lightMaterials:{},_texturePool:new qa}},function(){this._gaussianPassH=new Ve({fragment:L.source("clay.compositor.gaussian_blur")}),this._gaussianPassV=new Ve({fragment:L.source("clay.compositor.gaussian_blur")}),this._gaussianPassH.setUniform("blurSize",this.shadowBlur),this._gaussianPassH.setUniform("blurDir",0),this._gaussianPassV.setUniform("blurSize",this.shadowBlur),this._gaussianPassV.setUniform("blurDir",1),this._outputDepthPass=new Ve({fragment:L.source("clay.sm.debug_depth")})},{render:function(e,t,r,i){r||(r=t.getMainCamera()),this.trigger("beforerender",this,e,t,r),this._renderShadowPass(e,t,r,i),this.trigger("afterrender",this,e,t,r)},renderDebug:function(e,t){e.saveClear();var r=e.viewport,i=0,n=0,a=t||r.width/4,s=a;this.softShadow===ft.VSM?this._outputDepthPass.material.define("fragment","USE_VSM"):this._outputDepthPass.material.undefine("fragment","USE_VSM");for(var o in this._textures){var l=this._textures[o];e.setViewport(i,n,a*l.width/l.height,s),this._outputDepthPass.setUniform("depthMap",l),this._outputDepthPass.render(e),i+=a*l.width/l.height}e.setViewport(r),e.restoreClear()},_updateReceivers:function(e,t){if(t.receiveShadow?(this._receivers.push(t),t.material.set("shadowEnabled",1),t.material.set("pcfKernel",this.kernelPCF)):t.material.set("shadowEnabled",0),this.softShadow===ft.VSM)t.material.define("fragment","USE_VSM"),t.material.undefine("fragment","PCF_KERNEL_SIZE");else{t.material.undefine("fragment","USE_VSM");var r=this.kernelPCF;r&&r.length?t.material.define("fragment","PCF_KERNEL_SIZE",r.length/2):t.material.undefine("fragment","PCF_KERNEL_SIZE")}},_update:function(e,t){var r=this;t.traverse(function(a){a.isRenderable()&&r._updateReceivers(e,a)});for(var i=0;i<t.lights.length;i++){var n=t.lights[i];n.castShadow&&!n.invisible&&this._lightsCastShadow.push(n)}},_renderShadowPass:function(e,t,r,i){for(var n in this._shadowMapNumber)this._shadowMapNumber[n]=0;this._lightsCastShadow.length=0,this._receivers.length=0;var a=e.gl;if(i||t.update(),r&&r.update(),t.updateLights(),this._update(e,t),!this._lightsCastShadow.length&&this._lastRenderNotCastShadow)return;this._lastRenderNotCastShadow=this._lightsCastShadow===0,a.enable(a.DEPTH_TEST),a.depthMask(!0),a.disable(a.BLEND),a.clearColor(1,1,1,1);for(var s=[],o=[],l=[],h=[],u=[],c=[],d,f=0;f<this._lightsCastShadow.length;f++){var v=this._lightsCastShadow[f];if(v.type==="DIRECTIONAL_LIGHT"){if(d){console.warn("Only one direectional light supported with shadow cascade");continue}if(v.shadowCascade>4){console.warn("Support at most 4 cascade");continue}v.shadowCascade>1&&(d=v),this.renderDirectionalLightShadow(e,t,r,v,u,h,l)}else v.type==="SPOT_LIGHT"?this.renderSpotLightShadow(e,t,v,o,s):v.type==="POINT_LIGHT"&&this.renderPointLightShadow(e,t,v,c);this._shadowMapNumber[v.type]++}for(var m in this._shadowMapNumber)for(var p=this._shadowMapNumber[m],_=m+"_SHADOWMAP_COUNT",f=0;f<this._receivers.length;f++){var x=this._receivers[f],y=x.material;y.fragmentDefines[_]!==p&&(p>0?y.define("fragment",_,p):y.isDefined("fragment",_)&&y.undefine("fragment",_))}for(var f=0;f<this._receivers.length;f++){var x=this._receivers[f],y=x.material;d?y.define("fragment","SHADOW_CASCADE",d.shadowCascade):y.undefine("fragment","SHADOW_CASCADE")}var g=t.shadowUniforms;function E(F){return F.height}if(l.length>0){var S=l.map(E);if(g.directionalLightShadowMaps={value:l,type:"tv"},g.directionalLightMatrices={value:h,type:"m4v"},g.directionalLightShadowMapSizes={value:S,type:"1fv"},d){var R=u.slice(),b=u.slice();R.pop(),b.shift(),R.reverse(),b.reverse(),h.reverse(),g.shadowCascadeClipsNear={value:R,type:"1fv"},g.shadowCascadeClipsFar={value:b,type:"1fv"}}}if(s.length>0){var M=s.map(E),g=t.shadowUniforms;g.spotLightShadowMaps={value:s,type:"tv"},g.spotLightMatrices={value:o,type:"m4v"},g.spotLightShadowMapSizes={value:M,type:"1fv"}}c.length>0&&(g.pointLightShadowMaps={value:c,type:"tv"})},renderDirectionalLightShadow:function(){var e=new rn,t=new z,r=new ke,i=new z,n=new z,a=new z,s=new z;return function(o,l,h,u,c,d,f){var v=this._getDepthMaterial(u),m={getMaterial:function(ve){return ve.shadowDepthMaterial||v},isMaterialChanged:ra,getUniform:Pi,ifRender:function(ve){return ve.castShadow},sortCompare:vr.opaqueSortCompare};if(!l.viewBoundingBoxLastFrame.isFinite()){var p=l.getBoundingBox();l.viewBoundingBoxLastFrame.copy(p).applyTransform(h.viewMatrix)}var _=Math.min(-l.viewBoundingBoxLastFrame.min.z,h.far),x=Math.max(-l.viewBoundingBoxLastFrame.max.z,h.near),y=this._getDirectionalLightCamera(u,l,h),g=a.array;s.copy(y.projectionMatrix),C.invert(n.array,y.worldTransform.array),C.multiply(n.array,n.array,h.worldTransform.array),C.multiply(g,s.array,n.array);for(var E=[],S=h instanceof Le,R=(h.near+h.far)/(h.near-h.far),b=2*h.near*h.far/(h.near-h.far),M=0;M<=u.shadowCascade;M++){var F=x*Math.pow(_/x,M/u.shadowCascade),w=x+(_-x)*M/u.shadowCascade,U=F*u.cascadeSplitLogFactor+w*(1-u.cascadeSplitLogFactor);E.push(U),c.push(-(-U*R+b)/-U)}var O=this._getTexture(u,u.shadowCascade);f.push(O);var N=o.viewport,G=o.gl;this._frameBuffer.attach(O),this._frameBuffer.bind(o),G.clear(G.COLOR_BUFFER_BIT|G.DEPTH_BUFFER_BIT);for(var M=0;M<u.shadowCascade;M++){var B=E[M],Z=E[M+1];S?C.perspective(t.array,h.fov/180*Math.PI,h.aspect,B,Z):C.ortho(t.array,h.left,h.right,h.bottom,h.top,B,Z),e.setFromProjection(t),e.getTransformedBoundingBox(r,n),r.applyProjection(s);var I=r.min.array,ce=r.max.array;I[0]=Math.max(I[0],-1),I[1]=Math.max(I[1],-1),ce[0]=Math.min(ce[0],1),ce[1]=Math.min(ce[1],1),i.ortho(I[0],ce[0],I[1],ce[1],1,-1),y.projectionMatrix.multiplyLeft(i);var k=u.shadowResolution||512;o.setViewport((u.shadowCascade-M-1)*k,0,k,k,1);var ye=l.updateRenderList(y);o.renderPass(ye.opaque,y,m),this.softShadow===ft.VSM&&this._gaussianFilter(o,O,O.width);var ae=new z;ae.copy(y.viewMatrix).multiplyLeft(y.projectionMatrix),d.push(ae.array),y.projectionMatrix.copy(s)}this._frameBuffer.unbind(o),o.setViewport(N)}}(),renderSpotLightShadow:function(e,t,r,i,n){var a=this._getTexture(r),s=this._getSpotLightCamera(r),o=e.gl;this._frameBuffer.attach(a),this._frameBuffer.bind(e),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT);var l=this._getDepthMaterial(r),h={getMaterial:function(d){return d.shadowDepthMaterial||l},isMaterialChanged:ra,getUniform:Pi,ifRender:function(d){return d.castShadow},sortCompare:vr.opaqueSortCompare},u=t.updateRenderList(s);e.renderPass(u.opaque,s,h),this._frameBuffer.unbind(e),this.softShadow===ft.VSM&&this._gaussianFilter(e,a,a.width);var c=new z;c.copy(s.worldTransform).invert().multiplyLeft(s.projectionMatrix),n.push(a),i.push(c.array)},renderPointLightShadow:function(e,t,r,i){var n=this._getTexture(r),a=e.gl;i.push(n);var s=this._getDepthMaterial(r),o={getMaterial:function(x){return x.shadowDepthMaterial||s},getUniform:Pi,sortCompare:vr.opaqueSortCompare},l={px:[],py:[],pz:[],nx:[],ny:[],nz:[]},h=new ke,u=r.getWorldPosition().array,c=new ke,d=r.range;c.min.setArray(u),c.max.setArray(u);var f=new P(d,d,d);c.max.add(f),c.min.sub(f);var v={px:!1,py:!1,pz:!1,nx:!1,ny:!1,nz:!1};t.traverse(function(x){if(x.isRenderable()&&x.castShadow){var y=x.geometry;if(!y.boundingBox){for(var g=0;g<At.length;g++)l[At[g]].push(x);return}if(h.transformFrom(y.boundingBox,x.worldTransform),!h.intersectBoundingBox(c))return;h.updateVertices();for(var g=0;g<At.length;g++)v[At[g]]=!1;for(var g=0;g<8;g++){var E=h.vertices[g],S=E[0]-u[0],R=E[1]-u[1],b=E[2]-u[2],M=Math.abs(S),F=Math.abs(R),w=Math.abs(b);M>F?M>w?v[S>0?"px":"nx"]=!0:v[b>0?"pz":"nz"]=!0:F>w?v[R>0?"py":"ny"]=!0:v[b>0?"pz":"nz"]=!0}for(var g=0;g<At.length;g++)v[At[g]]&&l[At[g]].push(x)}});for(var m=0;m<6;m++){var p=At[m],_=this._getPointLightCamera(r,p);this._frameBuffer.attach(n,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+m),this._frameBuffer.bind(e),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),e.renderPass(l[p],_,o)}this._frameBuffer.unbind(e)},_getDepthMaterial:function(e){var t=this._lightMaterials[e.__uid__],r=e.type==="POINT_LIGHT";if(!t){var i=r?"clay.sm.distance.":"clay.sm.depth.";t=new yt({precision:this.precision,shader:new L(L.source(i+"vertex"),L.source(i+"fragment"))}),this._lightMaterials[e.__uid__]=t}return e.shadowSlopeScale!=null&&t.setUniform("slopeScale",e.shadowSlopeScale),e.shadowBias!=null&&t.setUniform("bias",e.shadowBias),this.softShadow===ft.VSM?t.define("fragment","USE_VSM"):t.undefine("fragment","USE_VSM"),r&&(t.set("lightPosition",e.getWorldPosition().array),t.set("range",e.range)),t},_gaussianFilter:function(e,t,r){var i={width:r,height:r,type:Y.FLOAT},n=this._texturePool.get(i);this._frameBuffer.attach(n),this._frameBuffer.bind(e),this._gaussianPassH.setUniform("texture",t),this._gaussianPassH.setUniform("textureWidth",r),this._gaussianPassH.render(e),this._frameBuffer.attach(t),this._gaussianPassV.setUniform("texture",n),this._gaussianPassV.setUniform("textureHeight",r),this._gaussianPassV.render(e),this._frameBuffer.unbind(e),this._texturePool.put(n)},_getTexture:function(e,t){var r=e.__uid__,i=this._textures[r],n=e.shadowResolution||512;return t=t||1,i||(e.type==="POINT_LIGHT"?i=new gr:i=new ne,i.width=n*t,i.height=n,this.softShadow===ft.VSM?(i.type=Y.FLOAT,i.anisotropic=4):(i.minFilter=A.NEAREST,i.magFilter=A.NEAREST,i.useMipmap=!1),this._textures[r]=i),i},_getPointLightCamera:function(e,t){this._lightCameras.point||(this._lightCameras.point={px:new Le,nx:new Le,py:new Le,ny:new Le,pz:new Le,nz:new Le});var r=this._lightCameras.point[t];switch(r.far=e.range,r.fov=90,r.position.set(0,0,0),t){case"px":r.lookAt(P.POSITIVE_X,P.NEGATIVE_Y);break;case"nx":r.lookAt(P.NEGATIVE_X,P.NEGATIVE_Y);break;case"py":r.lookAt(P.POSITIVE_Y,P.POSITIVE_Z);break;case"ny":r.lookAt(P.NEGATIVE_Y,P.NEGATIVE_Z);break;case"pz":r.lookAt(P.POSITIVE_Z,P.NEGATIVE_Y);break;case"nz":r.lookAt(P.NEGATIVE_Z,P.NEGATIVE_Y);break}return e.getWorldPosition(r.position),r.update(),r},_getDirectionalLightCamera:function(){var e=new z,t=new ke,r=new ke;return function(i,n,a){this._lightCameras.directional||(this._lightCameras.directional=new xr);var s=this._lightCameras.directional;t.copy(n.viewBoundingBoxLastFrame),t.intersection(a.frustum.boundingBox),s.position.copy(t.min).add(t.max).scale(.5).transformMat4(a.worldTransform),s.rotation.copy(i.rotation),s.scale.copy(i.scale),s.updateWorldTransform(),z.invert(e,s.worldTransform),z.multiply(e,e,a.worldTransform),r.copy(t).applyTransform(e);var o=r.min.array,l=r.max.array;return s.position.set((o[0]+l[0])/2,(o[1]+l[1])/2,l[2]).transformMat4(s.worldTransform),s.near=0,s.far=-o[2]+l[2],isNaN(this.lightFrustumBias)?s.far*=4:s.far+=this.lightFrustumBias,s.left=o[0],s.right=l[0],s.top=l[1],s.bottom=o[1],s.update(!0),s}}(),_getSpotLightCamera:function(e){this._lightCameras.spot||(this._lightCameras.spot=new Le);var t=this._lightCameras.spot;return t.fov=e.penumbraAngle*2,t.far=e.range,t.worldTransform.copy(e.worldTransform),t.updateProjectionMatrix(),C.invert(t.viewMatrix.array,t.worldTransform.array),t},dispose:function(e){var t=e.gl||e;this._frameBuffer&&this._frameBuffer.dispose(t);for(var r in this._textures)this._textures[r].dispose(t);this._texturePool.clear(e.gl),this._depthMaterials={},this._distanceMaterials={},this._textures={},this._lightCameras={},this._shadowMapNumber={POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},this._meshMaterials={};for(var i=0;i<this._receivers.length;i++){var n=this._receivers[i];if(n.material){var a=n.material;a.undefine("fragment","POINT_LIGHT_SHADOW_COUNT"),a.undefine("fragment","DIRECTIONAL_LIGHT_SHADOW_COUNT"),a.undefine("fragment","AMBIENT_LIGHT_SHADOW_COUNT"),a.set("shadowEnabled",0)}}this._receivers=[],this._lightsCastShadow=[]}});ft.VSM=1;ft.PCF=2;var Zh=ft,$h=Ye.extend(function(){return{name:"",inputLinks:{},outputLinks:{},_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},{updateParameter:function(e,t){var r=this.outputs[e],i=r.parameters,n=r._parametersCopy;if(n||(n=r._parametersCopy={}),i)for(var a in i)a!=="width"&&a!=="height"&&(n[a]=i[a]);var s,o;return i.width instanceof Function?s=i.width.call(this,t):s=i.width,i.height instanceof Function?o=i.height.call(this,t):o=i.height,(n.width!==s||n.height!==o)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t.gl),n.width=s,n.height=o,n},setParameter:function(e,t){},getParameter:function(e){},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},render:function(){},getOutput:function(e,t){if(t==null)return t=e,this._outputTextures[t];var r=this.outputs[t];if(!!r)return this._rendered?r.outputLastFrame?this._prevOutputTextures[t]:this._outputTextures[t]:this._rendering?(this._prevOutputTextures[t]||(this._prevOutputTextures[t]=this._compositor.allocateTexture(r.parameters||{})),this._prevOutputTextures[t]):(this.render(e),this._outputTextures[t])},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},link:function(e,t,r){this.inputLinks[e]={node:t,pin:r},t.outputLinks[r]||(t.outputLinks[r]=[]),t.outputLinks[r].push({node:this,pin:e}),this.pass.material.enableTexture(e)},clear:function(){this.inputLinks={},this.outputLinks={}},updateReference:function(e){if(!this._rendering){this._rendering=!0;for(var t in this.inputLinks){var r=this.inputLinks[t];r.node.updateReference(r.pin)}this._rendering=!1}e&&this._outputReferences[e]++},beforeFrame:function(){this._rendered=!1;for(var e in this.outputLinks)this._outputReferences[e]=0},afterFrame:function(){for(var e in this.outputLinks)if(this._outputReferences[e]>0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}}}),Er=$h,Kh=Ye.extend(function(){return{nodes:[]}},{dirty:function(){this._dirty=!0},addNode:function(e){this.nodes.indexOf(e)>=0||(this.nodes.push(e),this._dirty=!0)},removeNode:function(e){typeof e=="string"&&(e=this.getNodeByName(e));var t=this.nodes.indexOf(e);t>=0&&(this.nodes.splice(t,1),this._dirty=!0)},getNodeByName:function(e){for(var t=0;t<this.nodes.length;t++)if(this.nodes[t].name===e)return this.nodes[t]},update:function(){for(var e=0;e<this.nodes.length;e++)this.nodes[e].clear();for(var e=0;e<this.nodes.length;e++){var t=this.nodes[e];if(!!t.inputs){for(var r in t.inputs)if(!!t.inputs[r]){if(t.pass&&!t.pass.material.isUniformEnabled(r)){console.warn("Pin "+t.name+"."+r+" not used.");continue}var i=t.inputs[r],n=this.findPin(i);n?t.link(r,n.node,n.pin):console.warn(typeof i=="string"?"Node "+i+" not exist":"Pin of "+i.node+"."+i.pin+" not exist")}}}},findPin:function(e){var t;if((typeof e=="string"||e instanceof Er)&&(e={node:e}),typeof e.node=="string")for(var r=0;r<this.nodes.length;r++){var i=this.nodes[r];i.name===e.node&&(t=i)}else t=e.node;if(t){var n=e.pin;if(n||t.outputs&&(n=Object.keys(t.outputs)[0]),t.outputs[n])return{node:t,pin:n}}}}),ia=Kh,Qh=ia.extend(function(){return{_outputs:[],_texturePool:new qa,_frameBuffer:new Ue({depthBuffer:!1})}},{addNode:function(e){ia.prototype.addNode.call(this,e),e._compositor=this},render:function(e,t){if(this._dirty){this.update(),this._dirty=!1,this._outputs.length=0;for(var r=0;r<this.nodes.length;r++)this.nodes[r].outputs||this._outputs.push(this.nodes[r])}for(var r=0;r<this.nodes.length;r++)this.nodes[r].beforeFrame();for(var r=0;r<this._outputs.length;r++)this._outputs[r].updateReference();for(var r=0;r<this._outputs.length;r++)this._outputs[r].render(e,t);for(var r=0;r<this.nodes.length;r++)this.nodes[r].afterFrame()},allocateTexture:function(e){return this._texturePool.get(e)},releaseTexture:function(e){this._texturePool.put(e)},getFrameBuffer:function(){return this._frameBuffer},dispose:function(e){this._texturePool.clear(e)}}),Jh=Qh,eu=Er.extend({name:"scene",scene:null,camera:null,autoUpdateScene:!0,preZ:!1},function(){this.frameBuffer=new Ue},{render:function(e){this._rendering=!0;var t=e.gl;this.trigger("beforerender");var r;if(!this.outputs)r=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ);else{var i=this.frameBuffer;for(var n in this.outputs){var a=this.updateParameter(n,e),s=this.outputs[n],o=this._compositor.allocateTexture(a);this._outputTextures[n]=o;var l=s.attachment||t.COLOR_ATTACHMENT0;typeof l=="string"&&(l=t[l]),i.attach(o,l)}i.bind(e);var h=e.getGLExtension("EXT_draw_buffers");if(h){var u=[];for(var l in this.outputs)l=parseInt(l),l>=t.COLOR_ATTACHMENT0&&l<=t.COLOR_ATTACHMENT0+8&&u.push(l);h.drawBuffersEXT(u)}e.saveClear(),e.clearBit=A.DEPTH_BUFFER_BIT|A.COLOR_BUFFER_BIT,r=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ),e.restoreClear(),i.unbind(e)}this.trigger("afterrender",r),this._rendering=!1,this._rendered=!0}}),tu=eu,ru=Er.extend(function(){return{texture:null,outputs:{color:{}}}},function(){},{getOutput:function(e,t){return this.texture},beforeFrame:function(){},afterFrame:function(){}}),iu=ru,nu=Er.extend(function(){return{name:"",inputs:{},outputs:null,shader:"",inputLinks:{},outputLinks:{},pass:null,_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},function(){var e=new Ve({fragment:this.shader});this.pass=e},{render:function(e,t){this.trigger("beforerender",e),this._rendering=!0;var r=e.gl;for(var i in this.inputLinks){var n=this.inputLinks[i],a=n.node.getOutput(e,n.pin);this.pass.setUniform(i,a)}if(!this.outputs)this.pass.outputs=null,this._compositor.getFrameBuffer().unbind(e),this.pass.render(e,t);else{this.pass.outputs={};var s={};for(var o in this.outputs){var l=this.updateParameter(o,e);isNaN(l.width)&&this.updateParameter(o,e);var h=this.outputs[o],u=this._compositor.allocateTexture(l);this._outputTextures[o]=u;var c=h.attachment||r.COLOR_ATTACHMENT0;typeof c=="string"&&(c=r[c]),s[c]=u}this._compositor.getFrameBuffer().bind(e);for(var c in s)this._compositor.getFrameBuffer().attach(s[c],c);this.pass.render(e),this._compositor.getFrameBuffer().updateMipmap(e)}for(var i in this.inputLinks){var n=this.inputLinks[i];n.node.removeReference(n.pin)}this._rendering=!1,this._rendered=!0,this.trigger("afterrender",e)},updateParameter:function(e,t){var r=this.outputs[e],i=r.parameters,n=r._parametersCopy;if(n||(n=r._parametersCopy={}),i)for(var a in i)a!=="width"&&a!=="height"&&(n[a]=i[a]);var s,o;return typeof i.width=="function"?s=i.width.call(this,t):s=i.width,typeof i.height=="function"?o=i.height.call(this,t):o=i.height,s=Math.ceil(s),o=Math.ceil(o),(n.width!==s||n.height!==o)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t),n.width=s,n.height=o,n},setParameter:function(e,t){this.pass.setUniform(e,t)},getParameter:function(e){return this.pass.getUniform(e)},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},define:function(e,t){this.pass.material.define("fragment",e,t)},undefine:function(e){this.pass.material.undefine("fragment",e)},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},clear:function(){Er.prototype.clear.call(this),this.pass.material.disableTexturesAll()}}),au=nu,su=`@export clay.compositor.coloradjust
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float exposure : 0.0;
uniform float gamma : 1.0;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = clamp(tex.rgb + vec3(brightness), 0.0, 1.0);
 color = clamp( (color-vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 color = clamp( color * pow(2.0, exposure), 0.0, 1.0);
 color = clamp( pow(color, vec3(gamma)), 0.0, 1.0);
 float luminance = dot( color, w );
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.brightness
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = tex.rgb + vec3(brightness);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.contrast
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float contrast : 1.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = (tex.rgb-vec3(0.5))*contrast+vec3(0.5);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.exposure
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float exposure : 0.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb * pow(2.0, exposure);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.gamma
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float gamma : 1.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = pow(tex.rgb, vec3(gamma));
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.saturation
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb;
 float luminance = dot(color, w);
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end`,Ya=`@export clay.compositor.kernel.gaussian_9
float gaussianKernel[9];
gaussianKernel[0] = 0.07;
gaussianKernel[1] = 0.09;
gaussianKernel[2] = 0.12;
gaussianKernel[3] = 0.14;
gaussianKernel[4] = 0.16;
gaussianKernel[5] = 0.14;
gaussianKernel[6] = 0.12;
gaussianKernel[7] = 0.09;
gaussianKernel[8] = 0.07;
@end
@export clay.compositor.kernel.gaussian_13
float gaussianKernel[13];
gaussianKernel[0] = 0.02;
gaussianKernel[1] = 0.03;
gaussianKernel[2] = 0.06;
gaussianKernel[3] = 0.08;
gaussianKernel[4] = 0.11;
gaussianKernel[5] = 0.13;
gaussianKernel[6] = 0.14;
gaussianKernel[7] = 0.13;
gaussianKernel[8] = 0.11;
gaussianKernel[9] = 0.08;
gaussianKernel[10] = 0.06;
gaussianKernel[11] = 0.03;
gaussianKernel[12] = 0.02;
@end
@export clay.compositor.gaussian_blur
#define SHADER_NAME gaussian_blur
uniform sampler2D texture;varying vec2 v_Texcoord;
uniform float blurSize : 2.0;
uniform vec2 textureSize : [512.0, 512.0];
uniform float blurDir : 0.0;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main (void)
{
 @import clay.compositor.kernel.gaussian_9
 vec2 off = blurSize / textureSize;
 off *= vec2(1.0 - blurDir, blurDir);
 vec4 sum = vec4(0.0);
 float weightAll = 0.0;
 for (int i = 0; i < 9; i++) {
 float w = gaussianKernel[i];
 vec4 texel = decodeHDR(clampSample(texture, v_Texcoord + float(i - 4) * off));
 sum += texel * w;
 weightAll += w;
 }
 gl_FragColor = encodeHDR(sum / max(weightAll, 0.01));
}
@end
`,ou=`@export clay.compositor.hdr.log_lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 float luminance = dot(tex.rgb, w);
 luminance = log(luminance + 0.001);
 gl_FragColor = encodeHDR(vec4(vec3(luminance), 1.0));
}
@end
@export clay.compositor.hdr.lum_adaption
varying vec2 v_Texcoord;
uniform sampler2D adaptedLum;
uniform sampler2D currentLum;
uniform float frameTime : 0.02;
@import clay.util.rgbm
void main()
{
 float fAdaptedLum = decodeHDR(texture2D(adaptedLum, vec2(0.5, 0.5))).r;
 float fCurrentLum = exp(encodeHDR(texture2D(currentLum, vec2(0.5, 0.5))).r);
 fAdaptedLum += (fCurrentLum - fAdaptedLum) * (1.0 - pow(0.98, 30.0 * frameTime));
 gl_FragColor = encodeHDR(vec4(vec3(fAdaptedLum), 1.0));
}
@end
@export clay.compositor.lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord );
 float luminance = dot(tex.rgb, w);
 gl_FragColor = vec4(vec3(luminance), 1.0);
}
@end`,Za=`
@export clay.compositor.lut
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform sampler2D lookup;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 float blueColor = tex.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec4 newColor1 = texture2D(lookup, texPos1);
 vec4 newColor2 = texture2D(lookup, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 gl_FragColor = vec4(newColor.rgb, tex.w);
}
@end`,lu=`@export clay.compositor.vignette
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float darkness: 1;
uniform float offset: 1;
@import clay.util.rgbm
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = texel.rgb;
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(offset);
 gl_FragColor = encodeHDR(vec4(mix(texel.rgb, vec3(1.0 - darkness), dot(uv, uv)), texel.a));
}
@end`,$a=`@export clay.compositor.output
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = tex.rgb;
#ifdef OUTPUT_ALPHA
 gl_FragColor.a = tex.a;
#else
 gl_FragColor.a = 1.0;
#endif
 gl_FragColor = encodeHDR(gl_FragColor);
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,Ka=`@export clay.compositor.bright
uniform sampler2D texture;
uniform float threshold : 1;
uniform float scale : 1.0;
uniform vec2 textureSize: [512, 512];
varying vec2 v_Texcoord;
const vec3 lumWeight = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
vec4 median(vec4 a, vec4 b, vec4 c)
{
 return a + b + c - min(min(a, b), c) - max(max(a, b), c);
}
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
#ifdef ANTI_FLICKER
 vec3 d = 1.0 / textureSize.xyx * vec3(1.0, 1.0, 0.0);
 vec4 s1 = decodeHDR(texture2D(texture, v_Texcoord - d.xz));
 vec4 s2 = decodeHDR(texture2D(texture, v_Texcoord + d.xz));
 vec4 s3 = decodeHDR(texture2D(texture, v_Texcoord - d.zy));
 vec4 s4 = decodeHDR(texture2D(texture, v_Texcoord + d.zy));
 texel = median(median(texel, s1, s2), s3, s4);
#endif
 float lum = dot(texel.rgb , lumWeight);
 vec4 color;
 if (lum > threshold && texel.a > 0.0)
 {
 color = vec4(texel.rgb * scale, texel.a * scale);
 }
 else
 {
 color = vec4(0.0);
 }
 gl_FragColor = encodeHDR(color);
}
@end
`,Qa=`@export clay.compositor.downsample
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
varying vec2 v_Texcoord;
@import clay.util.rgbm
float brightness(vec3 c)
{
 return max(max(c.r, c.g), c.b);
}
@import clay.util.clamp_sample
void main()
{
 vec4 d = vec4(-1.0, -1.0, 1.0, 1.0) / textureSize.xyxy;
#ifdef ANTI_FLICKER
 vec3 s1 = decodeHDR(clampSample(texture, v_Texcoord + d.xy)).rgb;
 vec3 s2 = decodeHDR(clampSample(texture, v_Texcoord + d.zy)).rgb;
 vec3 s3 = decodeHDR(clampSample(texture, v_Texcoord + d.xw)).rgb;
 vec3 s4 = decodeHDR(clampSample(texture, v_Texcoord + d.zw)).rgb;
 float s1w = 1.0 / (brightness(s1) + 1.0);
 float s2w = 1.0 / (brightness(s2) + 1.0);
 float s3w = 1.0 / (brightness(s3) + 1.0);
 float s4w = 1.0 / (brightness(s4) + 1.0);
 float oneDivideSum = 1.0 / (s1w + s2w + s3w + s4w);
 vec4 color = vec4(
 (s1 * s1w + s2 * s2w + s3 * s3w + s4 * s4w) * oneDivideSum,
 1.0
 );
#else
 vec4 color = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 color *= 0.25;
#endif
 gl_FragColor = encodeHDR(color);
}
@end`,Ja=`
@export clay.compositor.upsample
#define HIGH_QUALITY
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
uniform float sampleScale: 0.5;
varying vec2 v_Texcoord;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main()
{
#ifdef HIGH_QUALITY
 vec4 d = vec4(1.0, 1.0, -1.0, 0.0) / textureSize.xyxy * sampleScale;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord - d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord - d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord - d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord )) * 4.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 gl_FragColor = encodeHDR(s / 16.0);
#else
 vec4 d = vec4(-1.0, -1.0, +1.0, +1.0) / textureSize.xyxy;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 gl_FragColor = encodeHDR(s / 4.0);
#endif
}
@end`,es=`@export clay.compositor.hdr.composite
#define TONEMAPPING
uniform sampler2D texture;
#ifdef BLOOM_ENABLED
uniform sampler2D bloom;
#endif
#ifdef LENSFLARE_ENABLED
uniform sampler2D lensflare;
uniform sampler2D lensdirt;
#endif
#ifdef LUM_ENABLED
uniform sampler2D lum;
#endif
#ifdef LUT_ENABLED
uniform sampler2D lut;
#endif
#ifdef COLOR_CORRECTION
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float saturation : 1.0;
#endif
#ifdef VIGNETTE
uniform float vignetteDarkness: 1.0;
uniform float vignetteOffset: 1.0;
#endif
uniform float exposure : 1.0;
uniform float bloomIntensity : 0.25;
uniform float lensflareIntensity : 1;
varying vec2 v_Texcoord;
@import clay.util.srgb
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
float eyeAdaption(float fLum)
{
 return mix(0.2, fLum, 0.5);
}
#ifdef LUT_ENABLED
vec3 lutTransform(vec3 color) {
 float blueColor = color.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec4 newColor1 = texture2D(lut, texPos1);
 vec4 newColor2 = texture2D(lut, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 return newColor.rgb;
}
#endif
@import clay.util.rgbm
void main()
{
 vec4 texel = vec4(0.0);
 vec4 originalTexel = vec4(0.0);
#ifdef TEXTURE_ENABLED
 texel = decodeHDR(texture2D(texture, v_Texcoord));
 originalTexel = texel;
#endif
#ifdef BLOOM_ENABLED
 vec4 bloomTexel = decodeHDR(texture2D(bloom, v_Texcoord));
 texel.rgb += bloomTexel.rgb * bloomIntensity;
 texel.a += bloomTexel.a * bloomIntensity;
#endif
#ifdef LENSFLARE_ENABLED
 texel += decodeHDR(texture2D(lensflare, v_Texcoord)) * texture2D(lensdirt, v_Texcoord) * lensflareIntensity;
#endif
 texel.a = min(texel.a, 1.0);
#ifdef LUM_ENABLED
 float fLum = texture2D(lum, vec2(0.5, 0.5)).r;
 float adaptedLumDest = 3.0 / (max(0.1, 1.0 + 10.0*eyeAdaption(fLum)));
 float exposureBias = adaptedLumDest * exposure;
#else
 float exposureBias = exposure;
#endif
#ifdef TONEMAPPING
 texel.rgb *= exposureBias;
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
 texel = linearTosRGB(texel);
#ifdef LUT_ENABLED
 texel.rgb = lutTransform(clamp(texel.rgb,vec3(0.0),vec3(1.0)));
#endif
#ifdef COLOR_CORRECTION
 texel.rgb = clamp(texel.rgb + vec3(brightness), 0.0, 1.0);
 texel.rgb = clamp((texel.rgb - vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 float lum = dot(texel.rgb, vec3(0.2125, 0.7154, 0.0721));
 texel.rgb = mix(vec3(lum), texel.rgb, saturation);
#endif
#ifdef VIGNETTE
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(vignetteOffset);
 texel.rgb = mix(texel.rgb, vec3(1.0 - vignetteDarkness), dot(uv, uv));
#endif
 gl_FragColor = encodeHDR(texel);
#ifdef DEBUG
 #if DEBUG == 1
 gl_FragColor = encodeHDR(decodeHDR(texture2D(texture, v_Texcoord)));
 #elif DEBUG == 2
 gl_FragColor = encodeHDR(decodeHDR(texture2D(bloom, v_Texcoord)) * bloomIntensity);
 #elif DEBUG == 3
 gl_FragColor = encodeHDR(decodeHDR(texture2D(lensflare, v_Texcoord) * lensflareIntensity));
 #endif
#endif
 if (originalTexel.a <= 0.01 && gl_FragColor.a > 1e-5) {
 gl_FragColor.a = dot(gl_FragColor.rgb, vec3(0.2125, 0.7154, 0.0721));
 }
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,hu=`@export clay.compositor.lensflare
#define SAMPLE_NUMBER 8
uniform sampler2D texture;
uniform sampler2D lenscolor;
uniform vec2 textureSize : [512, 512];
uniform float dispersal : 0.3;
uniform float haloWidth : 0.4;
uniform float distortion : 1.0;
varying vec2 v_Texcoord;
@import clay.util.rgbm
vec4 textureDistorted(
 in vec2 texcoord,
 in vec2 direction,
 in vec3 distortion
) {
 return vec4(
 decodeHDR(texture2D(texture, texcoord + direction * distortion.r)).r,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.g)).g,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.b)).b,
 1.0
 );
}
void main()
{
 vec2 texcoord = -v_Texcoord + vec2(1.0); vec2 textureOffset = 1.0 / textureSize;
 vec2 ghostVec = (vec2(0.5) - texcoord) * dispersal;
 vec2 haloVec = normalize(ghostVec) * haloWidth;
 vec3 distortion = vec3(-textureOffset.x * distortion, 0.0, textureOffset.x * distortion);
 vec4 result = vec4(0.0);
 for (int i = 0; i < SAMPLE_NUMBER; i++)
 {
 vec2 offset = fract(texcoord + ghostVec * float(i));
 float weight = length(vec2(0.5) - offset) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 }
 result *= texture2D(lenscolor, vec2(length(vec2(0.5) - texcoord)) / length(vec2(0.5)));
 float weight = length(vec2(0.5) - fract(texcoord + haloVec)) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 vec2 offset = fract(texcoord + haloVec);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 gl_FragColor = result;
}
@end`,ts=`@export clay.compositor.blend
#define SHADER_NAME blend
#ifdef TEXTURE1_ENABLED
uniform sampler2D texture1;
uniform float weight1 : 1.0;
#endif
#ifdef TEXTURE2_ENABLED
uniform sampler2D texture2;
uniform float weight2 : 1.0;
#endif
#ifdef TEXTURE3_ENABLED
uniform sampler2D texture3;
uniform float weight3 : 1.0;
#endif
#ifdef TEXTURE4_ENABLED
uniform sampler2D texture4;
uniform float weight4 : 1.0;
#endif
#ifdef TEXTURE5_ENABLED
uniform sampler2D texture5;
uniform float weight5 : 1.0;
#endif
#ifdef TEXTURE6_ENABLED
uniform sampler2D texture6;
uniform float weight6 : 1.0;
#endif
varying vec2 v_Texcoord;
@import clay.util.rgbm
void main()
{
 vec4 tex = vec4(0.0);
#ifdef TEXTURE1_ENABLED
 tex += decodeHDR(texture2D(texture1, v_Texcoord)) * weight1;
#endif
#ifdef TEXTURE2_ENABLED
 tex += decodeHDR(texture2D(texture2, v_Texcoord)) * weight2;
#endif
#ifdef TEXTURE3_ENABLED
 tex += decodeHDR(texture2D(texture3, v_Texcoord)) * weight3;
#endif
#ifdef TEXTURE4_ENABLED
 tex += decodeHDR(texture2D(texture4, v_Texcoord)) * weight4;
#endif
#ifdef TEXTURE5_ENABLED
 tex += decodeHDR(texture2D(texture5, v_Texcoord)) * weight5;
#endif
#ifdef TEXTURE6_ENABLED
 tex += decodeHDR(texture2D(texture6, v_Texcoord)) * weight6;
#endif
 gl_FragColor = encodeHDR(tex);
}
@end`,rs=`@export clay.compositor.fxaa
uniform sampler2D texture;
uniform vec4 viewport : VIEWPORT;
varying vec2 v_Texcoord;
#define FXAA_REDUCE_MIN (1.0/128.0)
#define FXAA_REDUCE_MUL (1.0/8.0)
#define FXAA_SPAN_MAX 8.0
@import clay.util.rgbm
void main()
{
 vec2 resolution = 1.0 / viewport.zw;
 vec3 rgbNW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbNE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ) ).xyz;
 vec4 rgbaM = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution ) );
 vec3 rgbM = rgbaM.xyz;
 float opacity = rgbaM.w;
 vec3 luma = vec3( 0.299, 0.587, 0.114 );
 float lumaNW = dot( rgbNW, luma );
 float lumaNE = dot( rgbNE, luma );
 float lumaSW = dot( rgbSW, luma );
 float lumaSE = dot( rgbSE, luma );
 float lumaM = dot( rgbM, luma );
 float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );
 float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );
 vec2 dir;
 dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
 dir.y = ((lumaNW + lumaSW) - (lumaNE + lumaSE));
 float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );
 float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );
 dir = min( vec2( FXAA_SPAN_MAX, FXAA_SPAN_MAX),
 max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
 dir * rcpDirMin)) * resolution;
 vec3 rgbA = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 1.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 2.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA *= 0.5;
 vec3 rgbB = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * -0.5 ) ).xyz;
 rgbB += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * 0.5 ) ).xyz;
 rgbB *= 0.25;
 rgbB += rgbA * 0.5;
 float lumaB = dot( rgbB, luma );
 if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) )
 {
 gl_FragColor = vec4( rgbA, opacity );
 }
 else {
 gl_FragColor = vec4( rgbB, opacity );
 }
}
@end`;function uu(e){e.import(su),e.import(Ya),e.import(ou),e.import(Za),e.import(lu),e.import($a),e.import(Ka),e.import(Qa),e.import(Ja),e.import(es),e.import(hu),e.import(ts),e.import(rs)}uu(L);var cu=/^#source\((.*?)\)/;function fu(e,t){var r=new Jh;t=t||{};var i={textures:{},parameters:{}},n=function(o,l){for(var h=0;h<e.nodes.length;h++){var u=e.nodes[h],c=du(u,i,t);c&&r.addNode(c)}};for(var a in e.parameters){var s=e.parameters[a];i.parameters[a]=cn(s)}return pu(e,i,t,function(o){i.textures=o,n()}),r}function du(e,t,r){var i=e.type||"filter",n,a,s;if(i==="filter"){var o=e.shader.trim(),l=cu.exec(o);if(l?n=L.source(l[1].trim()):o.charAt(0)==="#"&&(n=t.shaders[o.substr(1)]),n||(n=o),!n)return}if(e.inputs){a={};for(var h in e.inputs)typeof e.inputs[h]=="string"?a[h]=e.inputs[h]:a[h]={node:e.inputs[h].node,pin:e.inputs[h].pin}}if(e.outputs){s={};for(var h in e.outputs){var u=e.outputs[h];s[h]={},u.attachment!=null&&(s[h].attachment=u.attachment),u.keepLastFrame!=null&&(s[h].keepLastFrame=u.keepLastFrame),u.outputLastFrame!=null&&(s[h].outputLastFrame=u.outputLastFrame),u.parameters&&(s[h].parameters=cn(u.parameters))}}var c;if(i==="scene"?c=new tu({name:e.name,scene:r.scene,camera:r.camera,outputs:s}):i==="texture"?c=new iu({name:e.name,outputs:s}):c=new au({name:e.name,shader:n,inputs:a,outputs:s}),c){if(e.parameters)for(var h in e.parameters){var d=e.parameters[h];typeof d=="string"?(d=d.trim(),d.charAt(0)==="#"?d=t.textures[d.substr(1)]:c.on("beforerender",_u(h,is(d)))):typeof d=="function"&&c.on("beforerender",d),c.setParameter(h,d)}if(e.defines&&c.pass)for(var h in e.defines){var d=e.defines[h];c.pass.material.define("fragment",h,d)}}return c}function vu(e,t){return e}function mu(e,t){return t}function cn(e){var t={};if(!e)return t;["type","minFilter","magFilter","wrapS","wrapT","flipY","useMipmap"].forEach(function(i){var n=e[i];n!=null&&(typeof n=="string"&&(n=Y[n]),t[i]=n)});var r=e.scale||1;return["width","height"].forEach(function(i){if(e[i]!=null){var n=e[i];typeof n=="string"?(n=n.trim(),t[i]=gu(i,is(n),r)):t[i]=n}}),t.width||(t.width=vu),t.height||(t.height=mu),e.useMipmap!=null&&(t.useMipmap=e.useMipmap),t}function pu(e,t,r,i){if(!e.textures){i({});return}var n={},a=0,s=!1,o=r.textureRootPath;De.each(e.textures,function(l,h){var u,c=l.path,d=cn(l.parameters);if(Array.isArray(c)&&c.length===6)o&&(c=c.map(function(f){return De.relative2absolute(f,o)})),u=new gr(d);else if(typeof c=="string")o&&(c=De.relative2absolute(c,o)),u=new ne(d);else return;u.load(c),a++,u.once("success",function(){n[h]=u,a--,a===0&&(i(n),s=!0)})}),a===0&&!s&&i(n)}function _u(e,t){return function(r){var i=r.getDevicePixelRatio(),n=r.getWidth(),a=r.getHeight(),s=t(n,a,i);this.setParameter(e,s)}}function gu(e,t,r){return r=r||1,function(i){var n=i.getDevicePixelRatio(),a=i.getWidth()*r,s=i.getHeight()*r;return t(a,s,n)}}function is(e){var t=/^expr\((.*)\)$/.exec(e);if(t)try{var r=new Function("width","height","dpr","return "+t[1]);return r(1,1),r}catch{throw new Error("Invalid expression.")}}function rr(e,t){for(var r=0,i=1/t,n=e;n>0;)r=r+i*(n%t),n=Math.floor(n/t),i=i/t;return r}var yu=`@export ecgl.ssao.estimate

uniform sampler2D depthTex;

uniform sampler2D normalTex;

uniform sampler2D noiseTex;

uniform vec2 depthTexSize;

uniform vec2 noiseTexSize;

uniform mat4 projection;

uniform mat4 projectionInv;

uniform mat4 viewInverseTranspose;

uniform vec3 kernel[KERNEL_SIZE];

uniform float radius : 1;

uniform float power : 1;

uniform float bias: 1e-2;

uniform float intensity: 1.0;

varying vec2 v_Texcoord;

float ssaoEstimator(in vec3 originPos, in mat3 kernelBasis) {
 float occlusion = 0.0;

 for (int i = 0; i < KERNEL_SIZE; i++) {
 vec3 samplePos = kernel[i];
#ifdef NORMALTEX_ENABLED
 samplePos = kernelBasis * samplePos;
#endif
 samplePos = samplePos * radius + originPos;

 vec4 texCoord = projection * vec4(samplePos, 1.0);
 texCoord.xy /= texCoord.w;

 vec4 depthTexel = texture2D(depthTex, texCoord.xy * 0.5 + 0.5);

 float sampleDepth = depthTexel.r * 2.0 - 1.0;
 if (projection[3][3] == 0.0) {
 sampleDepth = projection[3][2] / (sampleDepth * projection[2][3] - projection[2][2]);
 }
 else {
 sampleDepth = (sampleDepth - projection[3][2]) / projection[2][2];
 }
 
 float rangeCheck = smoothstep(0.0, 1.0, radius / abs(originPos.z - sampleDepth));
 occlusion += rangeCheck * step(samplePos.z, sampleDepth - bias);
 }
#ifdef NORMALTEX_ENABLED
 occlusion = 1.0 - occlusion / float(KERNEL_SIZE);
#else
 occlusion = 1.0 - clamp((occlusion / float(KERNEL_SIZE) - 0.6) * 2.5, 0.0, 1.0);
#endif
 return pow(occlusion, power);
}

void main()
{

 vec4 depthTexel = texture2D(depthTex, v_Texcoord);

#ifdef NORMALTEX_ENABLED
 vec4 tex = texture2D(normalTex, v_Texcoord);
 if (dot(tex.rgb, tex.rgb) == 0.0) {
 gl_FragColor = vec4(1.0);
 return;
 }
 vec3 N = tex.rgb * 2.0 - 1.0;
 N = (viewInverseTranspose * vec4(N, 0.0)).xyz;

 vec2 noiseTexCoord = depthTexSize / vec2(noiseTexSize) * v_Texcoord;
 vec3 rvec = texture2D(noiseTex, noiseTexCoord).rgb * 2.0 - 1.0;
 vec3 T = normalize(rvec - N * dot(rvec, N));
 vec3 BT = normalize(cross(N, T));
 mat3 kernelBasis = mat3(T, BT, N);
#else
 if (depthTexel.r > 0.99999) {
 gl_FragColor = vec4(1.0);
 return;
 }
 mat3 kernelBasis;
#endif

 float z = depthTexel.r * 2.0 - 1.0;

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * projectedPos;

 vec3 position = p4.xyz / p4.w;

 float ao = ssaoEstimator(position, kernelBasis);
 ao = clamp(1.0 - (1.0 - ao) * intensity, 0.0, 1.0);
 gl_FragColor = vec4(vec3(ao), 1.0);
}

@end


@export ecgl.ssao.blur
#define SHADER_NAME SSAO_BLUR

uniform sampler2D ssaoTexture;

#ifdef NORMALTEX_ENABLED
uniform sampler2D normalTex;
#endif

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

uniform int direction: 0.0;

#ifdef DEPTHTEX_ENABLED
uniform sampler2D depthTex;
uniform mat4 projection;
uniform float depthRange : 0.5;

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(depthTex, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}
#endif

void main()
{
 float kernel[5];
 kernel[0] = 0.122581;
 kernel[1] = 0.233062;
 kernel[2] = 0.288713;
 kernel[3] = 0.233062;
 kernel[4] = 0.122581;

 vec2 off = vec2(0.0);
 if (direction == 0) {
 off[0] = blurSize / textureSize.x;
 }
 else {
 off[1] = blurSize / textureSize.y;
 }

 vec2 coord = v_Texcoord;

 float sum = 0.0;
 float weightAll = 0.0;

#ifdef NORMALTEX_ENABLED
 vec3 centerNormal = texture2D(normalTex, v_Texcoord).rgb * 2.0 - 1.0;
#endif
#if defined(DEPTHTEX_ENABLED)
 float centerDepth = getLinearDepth(v_Texcoord);
#endif

 for (int i = 0; i < 5; i++) {
 vec2 coord = clamp(v_Texcoord + vec2(float(i) - 2.0) * off, vec2(0.0), vec2(1.0));

 float w = kernel[i];
#ifdef NORMALTEX_ENABLED
 vec3 normal = texture2D(normalTex, coord).rgb * 2.0 - 1.0;
 w *= clamp(dot(normal, centerNormal), 0.0, 1.0);
#endif
#ifdef DEPTHTEX_ENABLED
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(centerDepth - d) / depthRange, 0.0, 1.0));
#endif

 weightAll += w;
 sum += texture2D(ssaoTexture, coord).r * w;
 }

 gl_FragColor = vec4(vec3(sum / weightAll), 1.0);
}

@end
`;L.import(yu);function ns(e){for(var t=new Uint8Array(e*e*4),r=0,i=new P,n=0;n<e;n++)for(var a=0;a<e;a++)i.set(Math.random()*2-1,Math.random()*2-1,0).normalize(),t[r++]=(i.x*.5+.5)*255,t[r++]=(i.y*.5+.5)*255,t[r++]=0,t[r++]=255;return t}function na(e){return new ne({pixels:ns(e),wrapS:Y.REPEAT,wrapT:Y.REPEAT,width:e,height:e})}function xu(e,t,r){var i=new Float32Array(e*3);t=t||0;for(var n=0;n<e;n++){var a=rr(n+t,2)*(r?1:2)*Math.PI,s=rr(n+t,3)*Math.PI,o=Math.random(),l=Math.cos(a)*Math.sin(s)*o,h=Math.cos(s)*o,u=Math.sin(a)*Math.sin(s)*o;i[n*3]=l,i[n*3+1]=h,i[n*3+2]=u}return i}function xt(e){e=e||{},this._ssaoPass=new Ve({fragment:L.source("ecgl.ssao.estimate")}),this._blurPass=new Ve({fragment:L.source("ecgl.ssao.blur")}),this._framebuffer=new Ue({depthBuffer:!1}),this._ssaoTexture=new ne,this._blurTexture=new ne,this._blurTexture2=new ne,this._depthTex=e.depthTexture,this._normalTex=e.normalTexture,this.setNoiseSize(4),this.setKernelSize(e.kernelSize||12),e.radius!=null&&this.setParameter("radius",e.radius),e.power!=null&&this.setParameter("power",e.power),this._normalTex||(this._ssaoPass.material.disableTexture("normalTex"),this._blurPass.material.disableTexture("normalTex")),this._depthTex||this._blurPass.material.disableTexture("depthTex"),this._blurPass.material.setUniform("normalTex",this._normalTex),this._blurPass.material.setUniform("depthTex",this._depthTex)}xt.prototype.setDepthTexture=function(e){this._depthTex=e};xt.prototype.setNormalTexture=function(e){this._normalTex=e,this._ssaoPass.material[e?"enableTexture":"disableTexture"]("normalTex"),this.setKernelSize(this._kernelSize)};xt.prototype.update=function(e,t,r){var i=e.getWidth(),n=e.getHeight(),a=this._ssaoPass,s=this._blurPass;a.setUniform("kernel",this._kernels[r%this._kernels.length]),a.setUniform("depthTex",this._depthTex),this._normalTex!=null&&a.setUniform("normalTex",this._normalTex),a.setUniform("depthTexSize",[this._depthTex.width,this._depthTex.height]);var o=new z;z.transpose(o,t.worldTransform),a.setUniform("projection",t.projectionMatrix.array),a.setUniform("projectionInv",t.invProjectionMatrix.array),a.setUniform("viewInverseTranspose",o.array);var l=this._ssaoTexture,h=this._blurTexture,u=this._blurTexture2;l.width=i/2,l.height=n/2,h.width=i,h.height=n,u.width=i,u.height=n,this._framebuffer.attach(l),this._framebuffer.bind(e),e.gl.clearColor(1,1,1,1),e.gl.clear(e.gl.COLOR_BUFFER_BIT),a.render(e),s.setUniform("textureSize",[i/2,n/2]),s.setUniform("projection",t.projectionMatrix.array),this._framebuffer.attach(h),s.setUniform("direction",0),s.setUniform("ssaoTexture",l),s.render(e),this._framebuffer.attach(u),s.setUniform("textureSize",[i,n]),s.setUniform("direction",1),s.setUniform("ssaoTexture",h),s.render(e),this._framebuffer.unbind(e);var c=e.clearColor;e.gl.clearColor(c[0],c[1],c[2],c[3])};xt.prototype.getTargetTexture=function(){return this._blurTexture2};xt.prototype.setParameter=function(e,t){e==="noiseTexSize"?this.setNoiseSize(t):e==="kernelSize"?this.setKernelSize(t):e==="intensity"?this._ssaoPass.material.set("intensity",t):this._ssaoPass.setUniform(e,t)};xt.prototype.setKernelSize=function(e){this._kernelSize=e,this._ssaoPass.material.define("fragment","KERNEL_SIZE",e),this._kernels=this._kernels||[];for(var t=0;t<30;t++)this._kernels[t]=xu(e,t*e,!!this._normalTex)};xt.prototype.setNoiseSize=function(e){var t=this._ssaoPass.getUniform("noiseTex");t?(t.data=ns(e),t.width=t.height=e,t.dirty()):(t=na(e),this._ssaoPass.setUniform("noiseTex",na(e))),this._ssaoPass.setUniform("noiseTexSize",[e,e])};xt.prototype.dispose=function(e){this._blurTexture.dispose(e),this._ssaoTexture.dispose(e),this._blurTexture2.dispose(e)};var Tu=`@export ecgl.ssr.main

#define SHADER_NAME SSR
#define MAX_ITERATION 20;
#define SAMPLE_PER_FRAME 5;
#define TOTAL_SAMPLES 128;

uniform sampler2D sourceTexture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform sampler2D gBufferTexture3;
uniform samplerCube specularCubemap;
uniform float specularIntensity: 1;

uniform mat4 projection;
uniform mat4 projectionInv;
uniform mat4 toViewSpace;
uniform mat4 toWorldSpace;

uniform float maxRayDistance: 200;

uniform float pixelStride: 16;
uniform float pixelStrideZCutoff: 50; 
uniform float screenEdgeFadeStart: 0.9; 
uniform float eyeFadeStart : 0.2; uniform float eyeFadeEnd: 0.8; 
uniform float minGlossiness: 0.2; uniform float zThicknessThreshold: 1;

uniform float nearZ;
uniform vec2 viewportSize : VIEWPORT_SIZE;

uniform float jitterOffset: 0;

varying vec2 v_Texcoord;

#ifdef DEPTH_DECODE
@import clay.util.decode_float
#endif

#ifdef PHYSICALLY_CORRECT
uniform sampler2D normalDistribution;
uniform float sampleOffset: 0;
uniform vec2 normalDistributionSize;

vec3 transformNormal(vec3 H, vec3 N) {
 vec3 upVector = N.y > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
vec3 importanceSampleNormalGGX(float i, float roughness, vec3 N) {
 float p = fract((i + sampleOffset) / float(TOTAL_SAMPLES));
 vec3 H = texture2D(normalDistribution,vec2(roughness, p)).rgb;
 return transformNormal(H, N);
}
float G_Smith(float g, float ndv, float ndl) {
 float roughness = 1.0 - g;
 float k = roughness * roughness / 2.0;
 float G1V = ndv / (ndv * (1.0 - k) + k);
 float G1L = ndl / (ndl * (1.0 - k) + k);
 return G1L * G1V;
}
vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}
#endif

float fetchDepth(sampler2D depthTexture, vec2 uv)
{
 vec4 depthTexel = texture2D(depthTexture, uv);
 return depthTexel.r * 2.0 - 1.0;
}

float linearDepth(float depth)
{
 if (projection[3][3] == 0.0) {
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
 }
 else {
 return (depth - projection[3][2]) / projection[2][2];
 }
}

bool rayIntersectDepth(float rayZNear, float rayZFar, vec2 hitPixel)
{
 if (rayZFar > rayZNear)
 {
 float t = rayZFar; rayZFar = rayZNear; rayZNear = t;
 }
 float cameraZ = linearDepth(fetchDepth(gBufferTexture2, hitPixel));
 return rayZFar <= cameraZ && rayZNear >= cameraZ - zThicknessThreshold;
}


bool traceScreenSpaceRay(
 vec3 rayOrigin, vec3 rayDir, float jitter,
 out vec2 hitPixel, out vec3 hitPoint, out float iterationCount
)
{
 float rayLength = ((rayOrigin.z + rayDir.z * maxRayDistance) > -nearZ)
 ? (-nearZ - rayOrigin.z) / rayDir.z : maxRayDistance;

 vec3 rayEnd = rayOrigin + rayDir * rayLength;

 vec4 H0 = projection * vec4(rayOrigin, 1.0);
 vec4 H1 = projection * vec4(rayEnd, 1.0);

 float k0 = 1.0 / H0.w, k1 = 1.0 / H1.w;

 vec3 Q0 = rayOrigin * k0, Q1 = rayEnd * k1;

 vec2 P0 = (H0.xy * k0 * 0.5 + 0.5) * viewportSize;
 vec2 P1 = (H1.xy * k1 * 0.5 + 0.5) * viewportSize;

 P1 += dot(P1 - P0, P1 - P0) < 0.0001 ? 0.01 : 0.0;
 vec2 delta = P1 - P0;

 bool permute = false;
 if (abs(delta.x) < abs(delta.y)) {
 permute = true;
 delta = delta.yx;
 P0 = P0.yx;
 P1 = P1.yx;
 }
 float stepDir = sign(delta.x);
 float invdx = stepDir / delta.x;

 vec3 dQ = (Q1 - Q0) * invdx;
 float dk = (k1 - k0) * invdx;

 vec2 dP = vec2(stepDir, delta.y * invdx);

 float strideScaler = 1.0 - min(1.0, -rayOrigin.z / pixelStrideZCutoff);
 float pixStride = 1.0 + strideScaler * pixelStride;

 dP *= pixStride; dQ *= pixStride; dk *= pixStride;

 vec4 pqk = vec4(P0, Q0.z, k0);
 vec4 dPQK = vec4(dP, dQ.z, dk);

 pqk += dPQK * jitter;
 float rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);
 float rayZNear;

 bool intersect = false;

 vec2 texelSize = 1.0 / viewportSize;

 iterationCount = 0.0;

 for (int i = 0; i < MAX_ITERATION; i++)
 {
 pqk += dPQK;

 rayZNear = rayZFar;
 rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);

 hitPixel = permute ? pqk.yx : pqk.xy;
 hitPixel *= texelSize;

 intersect = rayIntersectDepth(rayZNear, rayZFar, hitPixel);

 iterationCount += 1.0;

 dPQK *= 1.2;

 if (intersect) {
 break;
 }
 }

 Q0.xy += dQ.xy * iterationCount;
 Q0.z = pqk.z;
 hitPoint = Q0 / pqk.w;

 return intersect;
}

float calculateAlpha(
 float iterationCount, float reflectivity,
 vec2 hitPixel, vec3 hitPoint, float dist, vec3 rayDir
)
{
 float alpha = clamp(reflectivity, 0.0, 1.0);
 alpha *= 1.0 - (iterationCount / float(MAX_ITERATION));
 vec2 hitPixelNDC = hitPixel * 2.0 - 1.0;
 float maxDimension = min(1.0, max(abs(hitPixelNDC.x), abs(hitPixelNDC.y)));
 alpha *= 1.0 - max(0.0, maxDimension - screenEdgeFadeStart) / (1.0 - screenEdgeFadeStart);

 float _eyeFadeStart = eyeFadeStart;
 float _eyeFadeEnd = eyeFadeEnd;
 if (_eyeFadeStart > _eyeFadeEnd) {
 float tmp = _eyeFadeEnd;
 _eyeFadeEnd = _eyeFadeStart;
 _eyeFadeStart = tmp;
 }

 float eyeDir = clamp(rayDir.z, _eyeFadeStart, _eyeFadeEnd);
 alpha *= 1.0 - (eyeDir - _eyeFadeStart) / (_eyeFadeEnd - _eyeFadeStart);

 alpha *= 1.0 - clamp(dist / maxRayDistance, 0.0, 1.0);

 return alpha;
}

@import clay.util.rand

@import clay.util.rgbm

void main()
{
 vec4 normalAndGloss = texture2D(gBufferTexture1, v_Texcoord);

 if (dot(normalAndGloss.rgb, vec3(1.0)) == 0.0) {
 discard;
 }

 float g = normalAndGloss.a;
#if !defined(PHYSICALLY_CORRECT)
 if (g <= minGlossiness) {
 discard;
 }
#endif

 float reflectivity = (g - minGlossiness) / (1.0 - minGlossiness);

 vec3 N = normalize(normalAndGloss.rgb * 2.0 - 1.0);
 N = normalize((toViewSpace * vec4(N, 0.0)).xyz);

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, fetchDepth(gBufferTexture2, v_Texcoord), 1.0);
 vec4 pos = projectionInv * projectedPos;
 vec3 rayOrigin = pos.xyz / pos.w;
 vec3 V = -normalize(rayOrigin);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 float iterationCount;
 float jitter = rand(fract(v_Texcoord + jitterOffset));

#ifdef PHYSICALLY_CORRECT
 vec4 color = vec4(vec3(0.0), 1.0);
 vec4 albedoMetalness = texture2D(gBufferTexture3, v_Texcoord);
 vec3 albedo = albedoMetalness.rgb;
 float m = albedoMetalness.a;
 vec3 diffuseColor = albedo * (1.0 - m);
 vec3 spec = mix(vec3(0.04), albedo, m);

 float jitter2 = rand(fract(v_Texcoord)) * float(TOTAL_SAMPLES);

 for (int i = 0; i < SAMPLE_PER_FRAME; i++) {
 vec3 H = importanceSampleNormalGGX(float(i) + jitter2, 1.0 - g, N);
 vec3 rayDir = normalize(reflect(-V, H));
#else
 vec3 rayDir = normalize(reflect(-V, N));
#endif
 vec2 hitPixel;
 vec3 hitPoint;

 bool intersect = traceScreenSpaceRay(rayOrigin, rayDir, jitter, hitPixel, hitPoint, iterationCount);

 float dist = distance(rayOrigin, hitPoint);

 vec3 hitNormal = texture2D(gBufferTexture1, hitPixel).rgb * 2.0 - 1.0;
 hitNormal = normalize((toViewSpace * vec4(hitNormal, 0.0)).xyz);
#ifdef PHYSICALLY_CORRECT
 float ndl = clamp(dot(N, rayDir), 0.0, 1.0);
 float vdh = clamp(dot(V, H), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);
 vec3 litTexel = vec3(0.0);
 if (dot(hitNormal, rayDir) < 0.0 && intersect) {
 litTexel = texture2D(sourceTexture, hitPixel).rgb;
 litTexel *= pow(clamp(1.0 - dist / 200.0, 0.0, 1.0), 3.0);

 }
 else {
 #ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 litTexel = RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, 0.0), 8.12).rgb * specularIntensity;
#endif
 }
 color.rgb += ndl * litTexel * (
 F_Schlick(ndl, spec) * G_Smith(g, ndv, ndl) * vdh / (ndh * ndv + 0.001)
 );
 }
 color.rgb /= float(SAMPLE_PER_FRAME);
#else
 #if !defined(SPECULARCUBEMAP_ENABLED)
 if (dot(hitNormal, rayDir) >= 0.0) {
 discard;
 }
 if (!intersect) {
 discard;
 }
#endif
 float alpha = clamp(calculateAlpha(iterationCount, reflectivity, hitPixel, hitPoint, dist, rayDir), 0.0, 1.0);
 vec4 color = texture2D(sourceTexture, hitPixel);
 color.rgb *= alpha;

#ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 alpha = alpha * (intersect ? 1.0 : 0.0);
 float bias = (1.0 -g) * 5.0;
 color.rgb += (1.0 - alpha)
 * RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, bias), 8.12).rgb
 * specularIntensity;
#endif

#endif

 gl_FragColor = encodeHDR(color);
}
@end

@export ecgl.ssr.blur

uniform sampler2D texture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform mat4 projection;
uniform float depthRange : 0.05;

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

#ifdef BLEND
 #ifdef SSAOTEX_ENABLED
uniform sampler2D ssaoTex;
 #endif
uniform sampler2D sourceTexture;
#endif

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(gBufferTexture2, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}

@import clay.util.rgbm


void main()
{
 @import clay.compositor.kernel.gaussian_9

 vec4 centerNTexel = texture2D(gBufferTexture1, v_Texcoord);
 float g = centerNTexel.a;
 float maxBlurSize = clamp(1.0 - g, 0.0, 1.0) * blurSize;
#ifdef VERTICAL
 vec2 off = vec2(0.0, maxBlurSize / textureSize.y);
#else
 vec2 off = vec2(maxBlurSize / textureSize.x, 0.0);
#endif

 vec2 coord = v_Texcoord;

 vec4 sum = vec4(0.0);
 float weightAll = 0.0;

 vec3 cN = centerNTexel.rgb * 2.0 - 1.0;
 float cD = getLinearDepth(v_Texcoord);
 for (int i = 0; i < 9; i++) {
 vec2 coord = clamp((float(i) - 4.0) * off + v_Texcoord, vec2(0.0), vec2(1.0));
 float w = gaussianKernel[i]
 * clamp(dot(cN, texture2D(gBufferTexture1, coord).rgb * 2.0 - 1.0), 0.0, 1.0);
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(cD - d) / depthRange, 0.0, 1.0));

 weightAll += w;
 sum += decodeHDR(texture2D(texture, coord)) * w;
 }

#ifdef BLEND
 float aoFactor = 1.0;
 #ifdef SSAOTEX_ENABLED
 aoFactor = texture2D(ssaoTex, v_Texcoord).r;
 #endif
 gl_FragColor = encodeHDR(
 sum / weightAll * aoFactor + decodeHDR(texture2D(sourceTexture, v_Texcoord))
 );
#else
 gl_FragColor = encodeHDR(sum / weightAll);
#endif
}

@end`;L.import(Tu);function Tt(e){e=e||{},this._ssrPass=new Ve({fragment:L.source("ecgl.ssr.main"),clearColor:[0,0,0,0]}),this._blurPass1=new Ve({fragment:L.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blurPass2=new Ve({fragment:L.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blendPass=new Ve({fragment:L.source("clay.compositor.blend")}),this._blendPass.material.disableTexturesAll(),this._blendPass.material.enableTexture(["texture1","texture2"]),this._ssrPass.setUniform("gBufferTexture1",e.normalTexture),this._ssrPass.setUniform("gBufferTexture2",e.depthTexture),this._blurPass1.setUniform("gBufferTexture1",e.normalTexture),this._blurPass1.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.setUniform("gBufferTexture1",e.normalTexture),this._blurPass2.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.material.define("fragment","VERTICAL"),this._blurPass2.material.define("fragment","BLEND"),this._ssrTexture=new ne({type:Y.HALF_FLOAT}),this._texture2=new ne({type:Y.HALF_FLOAT}),this._texture3=new ne({type:Y.HALF_FLOAT}),this._prevTexture=new ne({type:Y.HALF_FLOAT}),this._currentTexture=new ne({type:Y.HALF_FLOAT}),this._frameBuffer=new Ue({depthBuffer:!1}),this._normalDistribution=null,this._totalSamples=256,this._samplePerFrame=4,this._ssrPass.material.define("fragment","SAMPLE_PER_FRAME",this._samplePerFrame),this._ssrPass.material.define("fragment","TOTAL_SAMPLES",this._totalSamples),this._downScale=1}Tt.prototype.setAmbientCubemap=function(e,t){this._ssrPass.material.set("specularCubemap",e),this._ssrPass.material.set("specularIntensity",t);var r=e&&t;this._ssrPass.material[r?"enableTexture":"disableTexture"]("specularCubemap")};Tt.prototype.update=function(e,t,r,i){var n=e.getWidth(),a=e.getHeight(),s=this._ssrTexture,o=this._texture2,l=this._texture3;s.width=this._prevTexture.width=this._currentTexture.width=n/this._downScale,s.height=this._prevTexture.height=this._currentTexture.height=a/this._downScale,o.width=l.width=n,o.height=l.height=a;var h=this._frameBuffer,u=this._ssrPass,c=this._blurPass1,d=this._blurPass2,f=this._blendPass,v=new z,m=new z;z.transpose(v,t.worldTransform),z.transpose(m,t.viewMatrix),u.setUniform("sourceTexture",r),u.setUniform("projection",t.projectionMatrix.array),u.setUniform("projectionInv",t.invProjectionMatrix.array),u.setUniform("toViewSpace",v.array),u.setUniform("toWorldSpace",m.array),u.setUniform("nearZ",t.near);var p=i/this._totalSamples*this._samplePerFrame;if(u.setUniform("jitterOffset",p),u.setUniform("sampleOffset",i*this._samplePerFrame),c.setUniform("textureSize",[s.width,s.height]),d.setUniform("textureSize",[n,a]),d.setUniform("sourceTexture",r),c.setUniform("projection",t.projectionMatrix.array),d.setUniform("projection",t.projectionMatrix.array),h.attach(s),h.bind(e),u.render(e),this._physicallyCorrect&&(h.attach(this._currentTexture),f.setUniform("texture1",this._prevTexture),f.setUniform("texture2",s),f.material.set({weight1:i>=1?.95:0,weight2:i>=1?.05:1}),f.render(e)),h.attach(o),c.setUniform("texture",this._physicallyCorrect?this._currentTexture:s),c.render(e),h.attach(l),d.setUniform("texture",o),d.render(e),h.unbind(e),this._physicallyCorrect){var _=this._prevTexture;this._prevTexture=this._currentTexture,this._currentTexture=_}};Tt.prototype.getTargetTexture=function(){return this._texture3};Tt.prototype.setParameter=function(e,t){e==="maxIteration"?this._ssrPass.material.define("fragment","MAX_ITERATION",t):this._ssrPass.setUniform(e,t)};Tt.prototype.setPhysicallyCorrect=function(e){e?(this._normalDistribution||(this._normalDistribution=Zr.generateNormalDistribution(64,this._totalSamples)),this._ssrPass.material.define("fragment","PHYSICALLY_CORRECT"),this._ssrPass.material.set("normalDistribution",this._normalDistribution),this._ssrPass.material.set("normalDistributionSize",[64,this._totalSamples])):this._ssrPass.material.undefine("fragment","PHYSICALLY_CORRECT"),this._physicallyCorrect=e};Tt.prototype.setSSAOTexture=function(e){var t=this._blurPass2;e?(t.material.enableTexture("ssaoTex"),t.material.set("ssaoTex",e)):t.material.disableTexture("ssaoTex")};Tt.prototype.isFinished=function(e){return this._physicallyCorrect?e>this._totalSamples/this._samplePerFrame:!0};Tt.prototype.dispose=function(e){this._ssrTexture.dispose(e),this._texture2.dispose(e),this._texture3.dispose(e),this._prevTexture.dispose(e),this._currentTexture.dispose(e),this._frameBuffer.dispose(e)};var aa=[0,0,-.321585265978,-.154972575841,.458126042375,.188473391593,.842080129861,.527766490688,.147304551086,-.659453822776,-.331943915203,-.940619700594,.0479226680259,.54812163202,.701581552186,-.709825561388,-.295436780218,.940589268233,-.901489676764,.237713156085,.973570876096,-.109899459384,-.866792314779,-.451805525005,.330975007087,.800048655954,-.344275183665,.381779221166,-.386139432542,-.437418421534,-.576478634965,-.0148463392551,.385798197415,-.262426961053,-.666302061145,.682427250835,-.628010632582,-.732836215494,.10163141741,-.987658134403,.711995289051,-.320024291314,.0296005138058,.950296523438,.0130612307608,-.351024443122,-.879596633704,-.10478487883,.435712737232,.504254490347,.779203817497,.206477676721,.388264289969,-.896736162545,-.153106280781,-.629203242522,-.245517550697,.657969239148,.126830499058,.26862328493,-.634888119007,-.302301223431,.617074219636,.779817204925],Eu=`@export ecgl.normal.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

@import ecgl.common.normalMap.vertexHeader

@import ecgl.common.vertexAnimation.header

void main()
{

 @import ecgl.common.vertexAnimation.main

 @import ecgl.common.uv.main

 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

 @import ecgl.common.normalMap.vertexMain

 gl_Position = worldViewProjection * vec4(pos, 1.0);

}


@end


@export ecgl.normal.fragment

#define ROUGHNESS_CHANEL 0

uniform bool useBumpMap;
uniform bool useRoughnessMap;
uniform bool doubleSide;
uniform float roughness;

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform mat4 viewInverse : VIEWINVERSE;

@import ecgl.common.normalMap.fragmentHeader
@import ecgl.common.bumpMap.header

uniform sampler2D roughnessMap;

void main()
{
 vec3 N = v_Normal;
 
 bool flipNormal = false;
 if (doubleSide) {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 flipNormal = true;
 }
 }

 @import ecgl.common.normalMap.fragmentMain

 if (useBumpMap) {
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 }

 float g = 1.0 - roughness;

 if (useRoughnessMap) {
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
 }

 if (flipNormal) {
 N = -N;
 }

 gl_FragColor.rgb = (N.xyz + 1.0) * 0.5;
 gl_FragColor.a = g;
}
@end`;L.import(Eu);function Di(e,t,r,i,n){var a=e.gl;t.setUniform(a,"1i",r,n),a.activeTexture(a.TEXTURE0+n),i.isRenderable()?i.bind(e):i.unbind(e)}function Au(e,t,r,i,n){var a,s,o,l,h=e.gl;return function(u,c,d){if(!(l&&l.material===u.material)){var f=u.material,v=u.__program,m=f.get("roughness");m==null&&(m=1);var p=f.get("normalMap")||t,_=f.get("roughnessMap"),x=f.get("bumpMap"),y=f.get("uvRepeat"),g=f.get("uvOffset"),E=f.get("detailUvRepeat"),S=f.get("detailUvOffset"),R=!!x&&f.isTextureEnabled("bumpMap"),b=!!_&&f.isTextureEnabled("roughnessMap"),M=f.isDefined("fragment","DOUBLE_SIDED");x=x||r,_=_||i,d!==c?(c.set("normalMap",p),c.set("bumpMap",x),c.set("roughnessMap",_),c.set("useBumpMap",R),c.set("useRoughnessMap",b),c.set("doubleSide",M),y!=null&&c.set("uvRepeat",y),g!=null&&c.set("uvOffset",g),E!=null&&c.set("detailUvRepeat",E),S!=null&&c.set("detailUvOffset",S),c.set("roughness",m)):(v.setUniform(h,"1f","roughness",m),a!==p&&Di(e,v,"normalMap",p,0),s!==x&&x&&Di(e,v,"bumpMap",x,1),o!==_&&_&&Di(e,v,"roughnessMap",_,2),y!=null&&v.setUniform(h,"2f","uvRepeat",y),g!=null&&v.setUniform(h,"2f","uvOffset",g),E!=null&&v.setUniform(h,"2f","detailUvRepeat",E),S!=null&&v.setUniform(h,"2f","detailUvOffset",S),v.setUniform(h,"1i","useBumpMap",+R),v.setUniform(h,"1i","useRoughnessMap",+b),v.setUniform(h,"1i","doubleSide",+M)),a=p,s=x,o=_,l=u}}}function nr(e){this._depthTex=new ne({format:Y.DEPTH_COMPONENT,type:Y.UNSIGNED_INT}),this._normalTex=new ne({type:Y.HALF_FLOAT}),this._framebuffer=new Ue,this._framebuffer.attach(this._normalTex),this._framebuffer.attach(this._depthTex,Ue.DEPTH_ATTACHMENT),this._normalMaterial=new yt({shader:new L(L.source("ecgl.normal.vertex"),L.source("ecgl.normal.fragment"))}),this._normalMaterial.enableTexture(["normalMap","bumpMap","roughnessMap"]),this._defaultNormalMap=Ft.createBlank("#000"),this._defaultBumpMap=Ft.createBlank("#000"),this._defaultRoughessMap=Ft.createBlank("#000"),this._debugPass=new Ve({fragment:L.source("clay.compositor.output")}),this._debugPass.setUniform("texture",this._normalTex),this._debugPass.material.undefine("fragment","OUTPUT_ALPHA")}nr.prototype.getDepthTexture=function(){return this._depthTex};nr.prototype.getNormalTexture=function(){return this._normalTex};nr.prototype.update=function(e,t,r){var i=e.getWidth(),n=e.getHeight(),a=this._depthTex,s=this._normalTex,o=this._normalMaterial;a.width=i,a.height=n,s.width=i,s.height=n;var l=t.getRenderList(r).opaque;this._framebuffer.bind(e),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.gl.disable(e.gl.BLEND),e.renderPass(l,r,{getMaterial:function(){return o},ifRender:function(h){return h.renderNormal},beforeRender:Au(e,this._defaultNormalMap,this._defaultBumpMap,this._defaultRoughessMap,this._normalMaterial),sort:e.opaqueSortCompare}),this._framebuffer.unbind(e)};nr.prototype.renderDebug=function(e){this._debugPass.render(e)};nr.prototype.dispose=function(e){this._depthTex.dispose(e),this._normalTex.dispose(e)};function br(e){e=e||{},this._edgePass=new Ve({fragment:L.source("ecgl.edge")}),this._edgePass.setUniform("normalTexture",e.normalTexture),this._edgePass.setUniform("depthTexture",e.depthTexture),this._targetTexture=new ne({type:Y.HALF_FLOAT}),this._frameBuffer=new Ue,this._frameBuffer.attach(this._targetTexture)}br.prototype.update=function(e,t,r,i){var n=e.getWidth(),a=e.getHeight(),s=this._targetTexture;s.width=n,s.height=a;var o=this._frameBuffer;o.bind(e),this._edgePass.setUniform("projectionInv",t.invProjectionMatrix.array),this._edgePass.setUniform("textureSize",[n,a]),this._edgePass.setUniform("texture",r),this._edgePass.render(e),o.unbind(e)};br.prototype.getTargetTexture=function(){return this._targetTexture};br.prototype.setParameter=function(e,t){this._edgePass.setUniform(e,t)};br.prototype.dispose=function(e){this._targetTexture.dispose(e),this._frameBuffer.dispose(e)};var Su={type:"compositor",nodes:[{name:"source",type:"texture",outputs:{color:{}}},{name:"source_half",shader:"#source(clay.compositor.downsample)",inputs:{texture:"source"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bright",shader:"#source(clay.compositor.bright)",inputs:{texture:"source_half"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{threshold:2,scale:4,textureSize:"expr([width * 1.0 / 2, height / 2])"}},{name:"bright_downsample_4",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 2, height / 2] )"}},{name:"bright_downsample_8",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 4, height / 4] )"}},{name:"bright_downsample_16",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 8, height / 8] )"}},{name:"bright_downsample_32",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 32)",height:"expr(height * 1.0 / 32)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 16, height / 16] )"}},{name:"bright_upsample_16_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_32"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 32, height / 32] )"}},{name:"bright_upsample_16_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_16_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_8_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_8_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_8_blur_v",texture2:"bright_upsample_16_blur_v"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_4_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_4_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_4_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_4_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_4_blur_v",texture2:"bright_upsample_8_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_2_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_2_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_2_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_2_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_2_blur_v",texture2:"bright_upsample_4_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_full_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_full_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_full_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bloom_composite",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_full_blur_v",texture2:"bright_upsample_2_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"coc",shader:"#source(ecgl.dof.coc)",outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{focalDist:50,focalRange:30}},{name:"dof_far_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"dof_near_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_NEARFIELD:null}},{name:"dof_coc_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"coc"},outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_COC:null}},{name:"dof_composite",shader:"#source(ecgl.dof.composite)",inputs:{original:"source",blurred:"dof_far_blur",nearfield:"dof_near_blur",coc:"coc",nearcoc:"dof_coc_blur"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}}},{name:"composite",shader:"#source(clay.compositor.hdr.composite)",inputs:{texture:"source",bloom:"bloom_composite"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},defines:{}},{name:"FXAA",shader:"#source(clay.compositor.fxaa)",inputs:{texture:"composite"}}]},bu=`@export ecgl.dof.coc

uniform sampler2D depth;

uniform float zNear: 0.1;
uniform float zFar: 2000;

uniform float focalDistance: 3;
uniform float focalRange: 1;
uniform float focalLength: 30;
uniform float fstop: 2.8;

varying vec2 v_Texcoord;

@import clay.util.encode_float

void main()
{
 float z = texture2D(depth, v_Texcoord).r * 2.0 - 1.0;

 float dist = 2.0 * zNear * zFar / (zFar + zNear - z * (zFar - zNear));

 float aperture = focalLength / fstop;

 float coc;

 float uppper = focalDistance + focalRange;
 float lower = focalDistance - focalRange;
 if (dist <= uppper && dist >= lower) {
 coc = 0.5;
 }
 else {
 float focalAdjusted = dist > uppper ? uppper : lower;

 coc = abs(aperture * (focalLength * (dist - focalAdjusted)) / (dist * (focalAdjusted - focalLength)));
 coc = clamp(coc, 0.0, 2.0) / 2.00001;

 if (dist < lower) {
 coc = -coc;
 }
 coc = coc * 0.5 + 0.5;
 }

 gl_FragColor = encodeFloat(coc);
}
@end


@export ecgl.dof.composite

#define DEBUG 0

uniform sampler2D original;
uniform sampler2D blurred;
uniform sampler2D nearfield;
uniform sampler2D coc;
uniform sampler2D nearcoc;
varying vec2 v_Texcoord;

@import clay.util.rgbm
@import clay.util.float

void main()
{
 vec4 blurredColor = texture2D(blurred, v_Texcoord);
 vec4 originalColor = texture2D(original, v_Texcoord);

 float fCoc = decodeFloat(texture2D(coc, v_Texcoord));

 fCoc = abs(fCoc * 2.0 - 1.0);

 float weight = smoothstep(0.0, 1.0, fCoc);
 
#ifdef NEARFIELD_ENABLED
 vec4 nearfieldColor = texture2D(nearfield, v_Texcoord);
 float fNearCoc = decodeFloat(texture2D(nearcoc, v_Texcoord));
 fNearCoc = abs(fNearCoc * 2.0 - 1.0);

 gl_FragColor = encodeHDR(
 mix(
 nearfieldColor, mix(originalColor, blurredColor, weight),
 pow(1.0 - fNearCoc, 4.0)
 )
 );
#else
 gl_FragColor = encodeHDR(mix(originalColor, blurredColor, weight));
#endif

}

@end



@export ecgl.dof.diskBlur

#define POISSON_KERNEL_SIZE 16;

uniform sampler2D texture;
uniform sampler2D coc;
varying vec2 v_Texcoord;

uniform float blurRadius : 10.0;
uniform vec2 textureSize : [512.0, 512.0];

uniform vec2 poissonKernel[POISSON_KERNEL_SIZE];

uniform float percent;

float nrand(const in vec2 n) {
 return fract(sin(dot(n.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

@import clay.util.rgbm
@import clay.util.float


void main()
{
 vec2 offset = blurRadius / textureSize;

 float rnd = 6.28318 * nrand(v_Texcoord + 0.07 * percent );
 float cosa = cos(rnd);
 float sina = sin(rnd);
 vec4 basis = vec4(cosa, -sina, sina, cosa);

#if !defined(BLUR_NEARFIELD) && !defined(BLUR_COC)
 offset *= abs(decodeFloat(texture2D(coc, v_Texcoord)) * 2.0 - 1.0);
#endif

#ifdef BLUR_COC
 float cocSum = 0.0;
#else
 vec4 color = vec4(0.0);
#endif


 float weightSum = 0.0;

 for (int i = 0; i < POISSON_KERNEL_SIZE; i++) {
 vec2 ofs = poissonKernel[i];

 ofs = vec2(dot(ofs, basis.xy), dot(ofs, basis.zw));

 vec2 uv = v_Texcoord + ofs * offset;
 vec4 texel = texture2D(texture, uv);

 float w = 1.0;
#ifdef BLUR_COC
 float fCoc = decodeFloat(texel) * 2.0 - 1.0;
 cocSum += clamp(fCoc, -1.0, 0.0) * w;
#else
 texel = texel;
 #if !defined(BLUR_NEARFIELD)
 float fCoc = decodeFloat(texture2D(coc, uv)) * 2.0 - 1.0;
 w *= abs(fCoc);
 #endif
 texel.rgb *= texel.a;
 color += texel * w;
#endif

 weightSum += w;
 }

#ifdef BLUR_COC
 gl_FragColor = encodeFloat(clamp(cocSum / weightSum, -1.0, 0.0) * 0.5 + 0.5);
#else
 color /= weightSum;
 color.rgb /= (color.a + 0.0001);
 gl_FragColor = color;
#endif
}

@end`,wu=`@export ecgl.edge

uniform sampler2D texture;

uniform sampler2D normalTexture;
uniform sampler2D depthTexture;

uniform mat4 projectionInv;

uniform vec2 textureSize;

uniform vec4 edgeColor: [0,0,0,0.8];

varying vec2 v_Texcoord;

vec3 packColor(vec2 coord) {
 float z = texture2D(depthTexture, coord).r * 2.0 - 1.0;
 vec4 p = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * p;

 return vec3(
 texture2D(normalTexture, coord).rg,
 -p4.z / p4.w / 5.0
 );
}

void main() {
 vec2 cc = v_Texcoord;
 vec3 center = packColor(cc);

 float size = clamp(1.0 - (center.z - 10.0) / 100.0, 0.0, 1.0) * 0.5;
 float dx = size / textureSize.x;
 float dy = size / textureSize.y;

 vec2 coord;
 vec3 topLeft = packColor(cc+vec2(-dx, -dy));
 vec3 top = packColor(cc+vec2(0.0, -dy));
 vec3 topRight = packColor(cc+vec2(dx, -dy));
 vec3 left = packColor(cc+vec2(-dx, 0.0));
 vec3 right = packColor(cc+vec2(dx, 0.0));
 vec3 bottomLeft = packColor(cc+vec2(-dx, dy));
 vec3 bottom = packColor(cc+vec2(0.0, dy));
 vec3 bottomRight = packColor(cc+vec2(dx, dy));

 vec3 v = -topLeft-2.0*top-topRight+bottomLeft+2.0*bottom+bottomRight;
 vec3 h = -bottomLeft-2.0*left-topLeft+bottomRight+2.0*right+topRight;

 float edge = sqrt(dot(h, h) + dot(v, v));

 edge = smoothstep(0.8, 1.0, edge);

 gl_FragColor = mix(texture2D(texture, v_Texcoord), vec4(edgeColor.rgb, 1.0), edgeColor.a * edge);
}
@end`;L.import(Ya);L.import(Za);L.import($a);L.import(Ka);L.import(Qa);L.import(Ja);L.import(es);L.import(ts);L.import(rs);L.import(bu);L.import(wu);function as(e,t){return{color:{parameters:{width:e,height:t}}}}var fn=["composite","FXAA"];function J(){this._width,this._height,this._dpr,this._sourceTexture=new ne({type:Y.HALF_FLOAT}),this._depthTexture=new ne({format:Y.DEPTH_COMPONENT,type:Y.UNSIGNED_INT}),this._framebuffer=new Ue,this._framebuffer.attach(this._sourceTexture),this._framebuffer.attach(this._depthTexture,Ue.DEPTH_ATTACHMENT),this._normalPass=new nr,this._compositor=fu(Su);var e=this._compositor.getNodeByName("source");e.texture=this._sourceTexture;var t=this._compositor.getNodeByName("coc");this._sourceNode=e,this._cocNode=t,this._compositeNode=this._compositor.getNodeByName("composite"),this._fxaaNode=this._compositor.getNodeByName("FXAA"),this._dofBlurNodes=["dof_far_blur","dof_near_blur","dof_coc_blur"].map(function(i){return this._compositor.getNodeByName(i)},this),this._dofBlurKernel=0,this._dofBlurKernelSize=new Float32Array(0),this._finalNodesChain=fn.map(function(i){return this._compositor.getNodeByName(i)},this);var r={normalTexture:this._normalPass.getNormalTexture(),depthTexture:this._normalPass.getDepthTexture()};this._ssaoPass=new xt(r),this._ssrPass=new Tt(r),this._edgePass=new br(r)}J.prototype.resize=function(i,n,r){r=r||1;var i=i*r,n=n*r,a=this._sourceTexture,s=this._depthTexture;a.width=i,a.height=n,s.width=i,s.height=n;var o={getWidth:function(){return i},getHeight:function(){return n},getDevicePixelRatio:function(){return r}};function l(h,u){if(typeof h[u]=="function"){var c=h[u].__original||h[u];h[u]=function(d){return c.call(this,o)},h[u].__original=c}}this._compositor.nodes.forEach(function(h){for(var u in h.outputs){var c=h.outputs[u].parameters;c&&(l(c,"width"),l(c,"height"))}for(var d in h.parameters)l(h.parameters,d)}),this._width=i,this._height=n,this._dpr=r};J.prototype.getWidth=function(){return this._width};J.prototype.getHeight=function(){return this._height};J.prototype._ifRenderNormalPass=function(){return this._enableSSAO||this._enableEdge||this._enableSSR};J.prototype._getPrevNode=function(e){for(var t=fn.indexOf(e.name)-1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t-=1,r=this._finalNodesChain[t];return r};J.prototype._getNextNode=function(e){for(var t=fn.indexOf(e.name)+1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t+=1,r=this._finalNodesChain[t];return r};J.prototype._addChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);!t||(e.inputs.texture=t.name,r?(e.outputs=as(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=e.name):e.outputs=null,this._compositor.addNode(e))};J.prototype._removeChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);!t||(r?(t.outputs=as(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=t.name):t.outputs=null,this._compositor.removeNode(e))};J.prototype.updateNormal=function(e,t,r,i){this._ifRenderNormalPass()&&this._normalPass.update(e,t,r)};J.prototype.updateSSAO=function(e,t,r,i){this._ssaoPass.update(e,r,i)};J.prototype.enableSSAO=function(){this._enableSSAO=!0};J.prototype.disableSSAO=function(){this._enableSSAO=!1};J.prototype.enableSSR=function(){this._enableSSR=!0};J.prototype.disableSSR=function(){this._enableSSR=!1};J.prototype.getSSAOTexture=function(){return this._ssaoPass.getTargetTexture()};J.prototype.getSourceFrameBuffer=function(){return this._framebuffer};J.prototype.getSourceTexture=function(){return this._sourceTexture};J.prototype.disableFXAA=function(){this._removeChainNode(this._fxaaNode)};J.prototype.enableFXAA=function(){this._addChainNode(this._fxaaNode)};J.prototype.enableBloom=function(){this._compositeNode.inputs.bloom="bloom_composite",this._compositor.dirty()};J.prototype.disableBloom=function(){this._compositeNode.inputs.bloom=null,this._compositor.dirty()};J.prototype.enableDOF=function(){this._compositeNode.inputs.texture="dof_composite",this._compositor.dirty()};J.prototype.disableDOF=function(){this._compositeNode.inputs.texture="source",this._compositor.dirty()};J.prototype.enableColorCorrection=function(){this._compositeNode.define("COLOR_CORRECTION"),this._enableColorCorrection=!0};J.prototype.disableColorCorrection=function(){this._compositeNode.undefine("COLOR_CORRECTION"),this._enableColorCorrection=!1};J.prototype.enableEdge=function(){this._enableEdge=!0};J.prototype.disableEdge=function(){this._enableEdge=!1};J.prototype.setBloomIntensity=function(e){this._compositeNode.setParameter("bloomIntensity",e)};J.prototype.setSSAOParameter=function(e,t){switch(e){case"quality":var r={low:6,medium:12,high:32,ultra:62}[t]||12;this._ssaoPass.setParameter("kernelSize",r);break;case"radius":this._ssaoPass.setParameter(e,t),this._ssaoPass.setParameter("bias",t/200);break;case"intensity":this._ssaoPass.setParameter(e,t);break}};J.prototype.setDOFParameter=function(e,t){switch(e){case"focalDistance":case"focalRange":case"fstop":this._cocNode.setParameter(e,t);break;case"blurRadius":for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].setParameter("blurRadius",t);break;case"quality":var i={low:4,medium:8,high:16,ultra:32}[t]||8;this._dofBlurKernelSize=i;for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].pass.material.define("POISSON_KERNEL_SIZE",i);this._dofBlurKernel=new Float32Array(i*2);break}};J.prototype.setSSRParameter=function(e,t){if(t!=null)switch(e){case"quality":var r={low:10,medium:15,high:30,ultra:80}[t]||20,i={low:32,medium:16,high:8,ultra:4}[t]||16;this._ssrPass.setParameter("maxIteration",r),this._ssrPass.setParameter("pixelStride",i);break;case"maxRoughness":this._ssrPass.setParameter("minGlossiness",Math.max(Math.min(1-t,1),0));break;case"physical":this.setPhysicallyCorrectSSR(t);break;default:console.warn("Unkown SSR parameter "+e)}};J.prototype.setPhysicallyCorrectSSR=function(e){this._ssrPass.setPhysicallyCorrect(e)};J.prototype.setEdgeColor=function(e){var t=V.parseColor(e);this._edgePass.setParameter("edgeColor",t)};J.prototype.setExposure=function(e){this._compositeNode.setParameter("exposure",Math.pow(2,e))};J.prototype.setColorLookupTexture=function(e,t){this._compositeNode.pass.material.setTextureImage("lut",this._enableColorCorrection?e:"none",t,{minFilter:V.Texture.NEAREST,magFilter:V.Texture.NEAREST,flipY:!1})};J.prototype.setColorCorrection=function(e,t){this._compositeNode.setParameter(e,t)};J.prototype.isSSREnabled=function(){return this._enableSSR};J.prototype.composite=function(e,t,r,i,n){var a=this._sourceTexture,s=a;this._enableEdge&&(this._edgePass.update(e,r,a,n),a=s=this._edgePass.getTargetTexture()),this._enableSSR&&(this._ssrPass.update(e,r,a,n),s=this._ssrPass.getTargetTexture(),this._ssrPass.setSSAOTexture(this._enableSSAO?this._ssaoPass.getTargetTexture():null)),this._sourceNode.texture=s,this._cocNode.setParameter("depth",this._depthTexture);for(var o=this._dofBlurKernel,l=this._dofBlurKernelSize,h=Math.floor(aa.length/2/l),u=n%h,c=0;c<l*2;c++)o[c]=aa[c+u*l*2];for(var c=0;c<this._dofBlurNodes.length;c++)this._dofBlurNodes[c].setParameter("percent",n/30),this._dofBlurNodes[c].setParameter("poissonKernel",o);this._cocNode.setParameter("zNear",r.near),this._cocNode.setParameter("zFar",r.far),this._compositor.render(e,i)};J.prototype.dispose=function(e){this._sourceTexture.dispose(e),this._depthTexture.dispose(e),this._framebuffer.dispose(e),this._compositor.dispose(e),this._normalPass.dispose(e),this._ssaoPass.dispose(e)};function Yi(e){for(var t=[],r=0;r<30;r++)t.push([rr(r,2),rr(r,3)]);this._haltonSequence=t,this._frame=0,this._sourceTex=new ne,this._sourceFb=new Ue,this._sourceFb.attach(this._sourceTex),this._prevFrameTex=new ne,this._outputTex=new ne;var i=this._blendPass=new Ve({fragment:L.source("clay.compositor.blend")});i.material.disableTexturesAll(),i.material.enableTexture(["texture1","texture2"]),this._blendFb=new Ue({depthBuffer:!1}),this._outputPass=new Ve({fragment:L.source("clay.compositor.output"),blendWithPrevious:!0}),this._outputPass.material.define("fragment","OUTPUT_ALPHA"),this._outputPass.material.blend=function(n){n.blendEquationSeparate(n.FUNC_ADD,n.FUNC_ADD),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA)}}Yi.prototype={constructor:Yi,jitterProjection:function(e,t){var r=e.viewport,i=r.devicePixelRatio||e.getDevicePixelRatio(),n=r.width*i,a=r.height*i,s=this._haltonSequence[this._frame%this._haltonSequence.length],o=new z;o.array[12]=(s[0]*2-1)/n,o.array[13]=(s[1]*2-1)/a,z.mul(t.projectionMatrix,o,t.projectionMatrix),z.invert(t.invProjectionMatrix,t.projectionMatrix)},resetFrame:function(){this._frame=0},getFrame:function(){return this._frame},getSourceFrameBuffer:function(){return this._sourceFb},getOutputTexture:function(){return this._outputTex},resize:function(e,t){this._prevFrameTex.width=e,this._prevFrameTex.height=t,this._outputTex.width=e,this._outputTex.height=t,this._sourceTex.width=e,this._sourceTex.height=t,this._prevFrameTex.dirty(),this._outputTex.dirty(),this._sourceTex.dirty()},isFinished:function(){return this._frame>=this._haltonSequence.length},render:function(e,t,r){var i=this._blendPass;this._frame===0?(i.setUniform("weight1",0),i.setUniform("weight2",1)):(i.setUniform("weight1",.9),i.setUniform("weight2",.1)),i.setUniform("texture1",this._prevFrameTex),i.setUniform("texture2",t||this._sourceTex),this._blendFb.attach(this._outputTex),this._blendFb.bind(e),i.render(e),this._blendFb.unbind(e),r||(this._outputPass.setUniform("texture",this._outputTex),this._outputPass.render(e));var n=this._prevFrameTex;this._prevFrameTex=this._outputTex,this._outputTex=n,this._frame++},dispose:function(e){this._sourceFb.dispose(e),this._blendFb.dispose(e),this._prevFrameTex.dispose(e),this._outputTex.dispose(e),this._sourceTex.dispose(e),this._outputPass.dispose(e),this._blendPass.dispose(e)}};function _e(e){e=e||"perspective",this.layer=null,this.scene=new Ct,this.rootNode=this.scene,this.viewport={x:0,y:0,width:0,height:0},this.setProjection(e),this._compositor=new J,this._temporalSS=new Yi,this._shadowMapPass=new Zh;for(var t=[],r=0,i=0;i<30;i++){for(var n=[],a=0;a<6;a++)n.push(rr(r,2)*4-2),n.push(rr(r,3)*4-2),r++;t.push(n)}this._pcfKernels=t,this.scene.on("beforerender",function(s,o,l){this.needsTemporalSS()&&this._temporalSS.jitterProjection(s,l)},this)}_e.prototype.setProjection=function(e){var t=this.camera;t&&t.update(),e==="perspective"?this.camera instanceof Le||(this.camera=new Le,t&&this.camera.setLocalTransform(t.localTransform)):this.camera instanceof xr||(this.camera=new xr,t&&this.camera.setLocalTransform(t.localTransform)),this.camera.near=.1,this.camera.far=2e3};_e.prototype.setViewport=function(e,t,r,i,n){this.camera instanceof Le&&(this.camera.aspect=r/i),n=n||1,this.viewport.x=e,this.viewport.y=t,this.viewport.width=r,this.viewport.height=i,this.viewport.devicePixelRatio=n,this._compositor.resize(r*n,i*n),this._temporalSS.resize(r*n,i*n)};_e.prototype.containPoint=function(e,t){var r=this.viewport,i=this.layer.renderer.getHeight();return t=i-t,e>=r.x&&t>=r.y&&e<=r.x+r.width&&t<=r.y+r.height};var sa=new $e;_e.prototype.castRay=function(e,t,r){var i=this.layer.renderer,n=i.viewport;return i.viewport=this.viewport,i.screenToNDC(e,t,sa),this.camera.castRay(sa,r),i.viewport=n,r};_e.prototype.prepareRender=function(){this.scene.update(),this.camera.update(),this.scene.updateLights();var e=this.scene.updateRenderList(this.camera);this._needsSortProgressively=!1;for(var t=0;t<e.transparent.length;t++){var r=e.transparent[t],i=r.geometry;i.needsSortVerticesProgressively&&i.needsSortVerticesProgressively()&&(this._needsSortProgressively=!0),i.needsSortTrianglesProgressively&&i.needsSortTrianglesProgressively()&&(this._needsSortProgressively=!0)}this._frame=0,this._temporalSS.resetFrame()};_e.prototype.render=function(e,t){this._doRender(e,t,this._frame),this._frame++};_e.prototype.needsAccumulate=function(){return this.needsTemporalSS()||this._needsSortProgressively};_e.prototype.needsTemporalSS=function(){var e=this._enableTemporalSS;return e==="auto"&&(e=this._enablePostEffect),e};_e.prototype.hasDOF=function(){return this._enableDOF};_e.prototype.isAccumulateFinished=function(){return this.needsTemporalSS()?this._temporalSS.isFinished():this._frame>30};_e.prototype._doRender=function(e,t,r){var i=this.scene,n=this.camera;r=r||0,this._updateTransparent(e,i,n,r),t||(this._shadowMapPass.kernelPCF=this._pcfKernels[0],this._shadowMapPass.render(e,i,n,!0)),this._updateShadowPCFKernel(r);var a=e.clearColor;if(e.gl.clearColor(a[0],a[1],a[2],a[3]),this._enablePostEffect&&(this.needsTemporalSS()&&this._temporalSS.jitterProjection(e,n),this._compositor.updateNormal(e,i,n,this._temporalSS.getFrame())),this._updateSSAO(e,i,n,this._temporalSS.getFrame()),this._enablePostEffect){var s=this._compositor.getSourceFrameBuffer();s.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),e.render(i,n,!0,!0),s.unbind(e),this.needsTemporalSS()&&t?(this._compositor.composite(e,i,n,this._temporalSS.getSourceFrameBuffer(),this._temporalSS.getFrame()),e.setViewport(this.viewport),this._temporalSS.render(e)):(e.setViewport(this.viewport),this._compositor.composite(e,i,n,null,0))}else if(this.needsTemporalSS()&&t){var s=this._temporalSS.getSourceFrameBuffer();s.bind(e),e.saveClear(),e.clearBit=e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT,e.render(i,n,!0,!0),e.restoreClear(),s.unbind(e),e.setViewport(this.viewport),this._temporalSS.render(e)}else e.setViewport(this.viewport),e.render(i,n,!0,!0)};_e.prototype._updateTransparent=function(e,t,r,i){for(var n=new P,a=new z,s=r.getWorldPosition(),o=t.getRenderList(r).transparent,l=0;l<o.length;l++){var h=o[l],u=h.geometry;z.invert(a,h.worldTransform),P.transformMat4(n,s,a),u.needsSortTriangles&&u.needsSortTriangles()&&u.doSortTriangles(n,i),u.needsSortVertices&&u.needsSortVertices()&&u.doSortVertices(n,i)}};_e.prototype._updateSSAO=function(e,t,r){var i=this._enableSSAO&&this._enablePostEffect;i&&this._compositor.updateSSAO(e,t,r,this._temporalSS.getFrame());for(var n=t.getRenderList(r),a=0;a<n.opaque.length;a++){var s=n.opaque[a];s.renderNormal&&s.material[i?"enableTexture":"disableTexture"]("ssaoMap"),i&&s.material.set("ssaoMap",this._compositor.getSSAOTexture())}};_e.prototype._updateShadowPCFKernel=function(e){for(var t=this._pcfKernels[e%this._pcfKernels.length],r=this.scene.getRenderList(this.camera),i=r.opaque,n=0;n<i.length;n++)i[n].receiveShadow&&(i[n].material.set("pcfKernel",t),i[n].material.define("fragment","PCF_KERNEL_SIZE",t.length/2))};_e.prototype.dispose=function(e){this._compositor.dispose(e.gl),this._temporalSS.dispose(e.gl),this._shadowMapPass.dispose(e)};_e.prototype.setPostEffect=function(e,t){var r=this._compositor;this._enablePostEffect=e.get("enable");var i=e.getModel("bloom"),n=e.getModel("edge"),a=e.getModel("DOF",e.getModel("depthOfField")),s=e.getModel("SSAO",e.getModel("screenSpaceAmbientOcclusion")),o=e.getModel("SSR",e.getModel("screenSpaceReflection")),l=e.getModel("FXAA"),h=e.getModel("colorCorrection");i.get("enable")?r.enableBloom():r.disableBloom(),a.get("enable")?r.enableDOF():r.disableDOF(),o.get("enable")?r.enableSSR():r.disableSSR(),h.get("enable")?r.enableColorCorrection():r.disableColorCorrection(),n.get("enable")?r.enableEdge():r.disableEdge(),l.get("enable")?r.enableFXAA():r.disableFXAA(),this._enableDOF=a.get("enable"),this._enableSSAO=s.get("enable"),this._enableSSAO?r.enableSSAO():r.disableSSAO(),r.setBloomIntensity(i.get("intensity")),r.setEdgeColor(n.get("color")),r.setColorLookupTexture(h.get("lookupTexture"),t),r.setExposure(h.get("exposure")),["radius","quality","intensity"].forEach(function(u){r.setSSAOParameter(u,s.get(u))}),["quality","maxRoughness","physical"].forEach(function(u){r.setSSRParameter(u,o.get(u))}),["quality","focalDistance","focalRange","blurRadius","fstop"].forEach(function(u){r.setDOFParameter(u,a.get(u))}),["brightness","contrast","saturation"].forEach(function(u){r.setColorCorrection(u,h.get(u))})};_e.prototype.setDOFFocusOnPoint=function(e){if(this._enablePostEffect)return e>this.camera.far||e<this.camera.near?void 0:(this._compositor.setDOFParameter("focalDistance",e),!0)};_e.prototype.setTemporalSuperSampling=function(e){this._enableTemporalSS=e.get("enable")};_e.prototype.isLinearSpace=function(){return this._enablePostEffect};_e.prototype.setRootNode=function(e){if(this.rootNode!==e){for(var t=this.rootNode.children(),r=0;r<t.length;r++)e.add(t[r]);e!==this.scene&&this.scene.add(e),this.rootNode=e}};_e.prototype.add=function(e){this.rootNode.add(e)};_e.prototype.remove=function(e){this.rootNode.remove(e)};_e.prototype.removeAll=function(e){this.rootNode.removeAll(e)};Object.assign(_e.prototype,Ki);function Cu(e,t){var r=e.getBoxLayoutParams(),i=Rs(r,{width:t.getWidth(),height:t.getHeight()});i.y=t.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,t.getDevicePixelRatio());var n=e.get("boxWidth"),a=e.get("boxHeight"),s=e.get("boxDepth");this.getAxis("x").setExtent(-n/2,n/2),this.getAxis("y").setExtent(s/2,-s/2),this.getAxis("z").setExtent(-a/2,a/2),this.size=[n,a,s]}function Ru(e,t){var r={};function i(n,a){r[n]=r[n]||[1/0,-1/0],r[n][0]=Math.min(a[0],r[n][0]),r[n][1]=Math.max(a[1],r[n][1])}e.eachSeries(function(n){if(n.coordinateSystem===this){var a=n.getData();["x","y","z"].forEach(function(s){a.mapDimensionsAll(s,!0).forEach(function(o){i(s,a.getDataExtent(o,!0))})})}},this),["xAxis3D","yAxis3D","zAxis3D"].forEach(function(n){e.eachComponent(n,function(a){var s=n.charAt(0),o=a.getReferringComponents("grid3D").models[0],l=o.coordinateSystem;if(l===this){var h=l.getAxis(s);if(!h){var u=Ms(r[s]||[1/0,-1/0],a);h=new ti(s,u),h.type=a.get("type");var c=h.type==="category";h.onBand=c&&a.get("boundaryGap"),h.inverse=a.get("inverse"),a.axis=h,h.model=a,h.getLabelModel=function(){return a.getModel("axisLabel",o.getModel("axisLabel"))},h.getTickModel=function(){return a.getModel("axisTick",o.getModel("axisTick"))},l.addAxis(h)}}},this)},this),this.resize(this.model,t)}var Mu={dimensions:Tr.prototype.dimensions,create:function(e,t){var r=[];e.eachComponent("grid3D",function(a){a.__viewGL=a.__viewGL||new _e;var s=new Tr;s.model=a,s.viewGL=a.__viewGL,a.coordinateSystem=s,r.push(s),s.resize=Cu,s.update=Ru});var i=["xAxis3D","yAxis3D","zAxis3D"];function n(a,s){return i.map(function(o){var l=a.getReferringComponents(o).models[0];return l==null&&(l=s.getComponent(o)),l})}return e.eachSeries(function(a){if(a.get("coordinateSystem")==="cartesian3D"){var s=a.getReferringComponents("grid3D").models[0];if(s==null){var o=n(a,e),s=o[0].getCoordSysModel();o.forEach(function(u){u.getCoordSysModel()})}var l=s.coordinateSystem;a.coordinateSystem=l}}),r}},Lu=Mu,ss=ma.extend({type:"cartesian3DAxis",axis:null,getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid3D",index:this.option.gridIndex,id:this.option.gridId})[0]}});Ls(ss);var Nu=ss,os={show:!0,grid3DIndex:0,inverse:!1,name:"",nameLocation:"middle",nameTextStyle:{fontSize:16},nameGap:20,axisPointer:{},axisLine:{},axisTick:{},axisLabel:{},splitArea:{}},Pu=_t({boundaryGap:!0,axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"},axisPointer:{label:{show:!1}}},os),dn=_t({boundaryGap:[0,0],splitNumber:5,axisPointer:{label:{}}},os),Du=Ar({scale:!0,min:"dataMin",max:"dataMax"},dn),ls=Ar({logBase:10},dn);ls.scale=!0;var Iu={categoryAxis3D:Pu,valueAxis3D:dn,timeAxis3D:Du,logAxis3D:ls},Ou=["value","category","time","log"];function Bu(e,t,r,i,n){Ou.forEach(function(a){var s=r.extend({type:t+"Axis3D."+a,__ordinalMeta:null,mergeDefaultAndTheme:function(o,l){var h=l.getTheme();_t(o,h.get(a+"Axis3D")),_t(o,this.getDefaultOption()),o.type=i(t,o)},optionUpdated:function(){var o=this.option;o.type==="category"&&(this.__ordinalMeta=Ns.createByAxisModel(this))},getCategories:function(){if(this.option.type==="category")return this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:_t(Ps(Iu[a+"Axis3D"]),n||{},!0)});e.registerComponentModel(s)}),e.registerSubTypeDefaulter(t+"Axis3D",Ds(i,t))}function Fu(e,t){return t.type||(t.data?"category":"value")}function Uu(e){e.registerComponentModel(Fh),e.registerComponentView(Xh),e.registerCoordinateSystem("grid3D",Lu),["x","y","z"].forEach(function(t){Bu(e,t,Nu,Fu,{name:t.toUpperCase()});const r=e.ComponentView.extend({type:t+"Axis3D"});e.registerComponentView(r)}),e.registerAction({type:"grid3DChangeCamera",event:"grid3dcamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"grid3D",query:t},function(i){i.setView(t)})}),e.registerAction({type:"grid3DShowAxisPointer",event:"grid3dshowaxispointer",update:"grid3D:showAxisPointer"},function(t,r){}),e.registerAction({type:"grid3DHideAxisPointer",event:"grid3dhideaxispointer",update:"grid3D:hideAxisPointer"},function(t,r){})}var Hu={defaultOption:{shading:null,realisticMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},lambertMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},colorMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},hatchingMaterial:{textureTiling:1,textureOffset:0,paperColor:"#fff"}}};function Ii(e,t,r){var i=e[t];e[t]=e[r],e[r]=i}function hs(e,t,r,i,n){var a=r,s=e[t];Ii(e,t,i);for(var o=r;o<i;o++)n(e[o],s)<0&&(Ii(e,o,a),a++);return Ii(e,i,a),a}function ri(e,t,r,i){if(r<i){var n=Math.floor((r+i)/2),a=hs(e,n,r,i,t);ri(e,t,r,a-1),ri(e,t,a+1,i)}}function ii(){this._parts=[]}ii.prototype.step=function(e,t,r){var i=e.length;if(r===0){this._parts=[],this._sorted=!1;var n=Math.floor(i/2);this._parts.push({pivot:n,left:0,right:i-1}),this._currentSortPartIdx=0}if(!this._sorted){var a=this._parts;if(a.length===0)return this._sorted=!0,!0;if(a.length<512){for(var s=0;s<a.length;s++)a[s].pivot=hs(e,a[s].pivot,a[s].left,a[s].right,t);for(var o=[],s=0;s<a.length;s++){var l=a[s].left,h=a[s].pivot-1;h>l&&o.push({pivot:Math.floor((h+l)/2),left:l,right:h});var l=a[s].pivot+1,h=a[s].right;h>l&&o.push({pivot:Math.floor((h+l)/2),left:l,right:h})}a=this._parts=o}else for(var s=0;s<Math.floor(a.length/10);s++){var u=a.length-1-this._currentSortPartIdx;if(ri(e,t,a[u].left,a[u].right),this._currentSortPartIdx++,this._currentSortPartIdx===a.length)return this._sorted=!0,!0}return!1}};ii.sort=ri;var Qt=hi.vec3,oa=Qt.create(),la=Qt.create(),ha=Qt.create(),zu={needsSortTriangles:function(){return this.indices&&this.sortTriangles},needsSortTrianglesProgressively:function(){return this.needsSortTriangles()&&this.triangleCount>=2e4},doSortTriangles:function(e,t){var r=this.indices;if(t===0){var i=this.attributes.position,e=e.array;(!this._triangleZList||this._triangleZList.length!==this.triangleCount)&&(this._triangleZList=new Float32Array(this.triangleCount),this._sortedTriangleIndices=new Uint32Array(this.triangleCount),this._indicesTmp=new r.constructor(r.length),this._triangleZListTmp=new Float32Array(this.triangleCount));for(var n=0,a,s=0;s<r.length;){i.get(r[s++],oa),i.get(r[s++],la),i.get(r[s++],ha);var o=Qt.sqrDist(oa,e),l=Qt.sqrDist(la,e),h=Qt.sqrDist(ha,e),u=Math.min(o,l);u=Math.min(u,h),s===3?(a=u,u=0):u=u-a,this._triangleZList[n++]=u}}for(var c=this._sortedTriangleIndices,s=0;s<c.length;s++)c[s]=s;if(this.triangleCount<2e4)t===0&&this._simpleSort(!0);else for(var s=0;s<3;s++)this._progressiveQuickSort(t*3+s);for(var d=this._indicesTmp,f=this._triangleZListTmp,v=this._triangleZList,s=0;s<this.triangleCount;s++){var m=c[s]*3,p=s*3;d[p++]=r[m++],d[p++]=r[m++],d[p]=r[m],f[s]=v[c[s]]}var _=this._indicesTmp;this._indicesTmp=this.indices,this.indices=_;var _=this._triangleZListTmp;this._triangleZListTmp=this._triangleZList,this._triangleZList=_,this.dirtyIndices()},_simpleSort:function(e){var t=this._triangleZList,r=this._sortedTriangleIndices;function i(n,a){return t[a]-t[n]}e?Array.prototype.sort.call(r,i):ii.sort(r,i,0,r.length-1)},_progressiveQuickSort:function(e){var t=this._triangleZList,r=this._sortedTriangleIndices;this._quickSort=this._quickSort||new ii,this._quickSort.step(r,function(i,n){return t[n]-t[i]},e)}};function Zi(e,t){const r=e.getItemVisual(t,"style");if(r){const i=e.getVisual("drawType");return r[i]}}function ua(e,t){const r=e.getItemVisual(t,"style");return r&&r.opacity}function Gu(e,t){var r=[];return pr(e.dimensions,function(i){var n=e.getDimensionInfo(i),a=n.otherDims,s=a[t];s!=null&&s!==!1&&(r[s]=n.name)}),r}function ku(e,t,r){function i(c){var d=!0,f=[],v=Gu(n,"tooltip");v.length?pr(v,function(p){m(n.get(p,t),p)}):pr(c,m);function m(p,_){var x=n.getDimensionInfo(_);if(!(!x||x.otherDims.tooltip===!1)){var y=x.type,g="- "+(x.tooltipName||x.name)+": "+(y==="ordinal"?p+"":y==="time"?r?"":Bs("yyyy/MM/dd hh:mm:ss",p):mn(p));g&&f.push(wr(g))}}return(d?"<br/>":"")+f.join(d?"<br/>":", ")}var n=e.getData(),a=e.getRawValue(t),s=mr(a)?i(a):wr(mn(a)),o=n.getName(t),l=Zi(n,t);Is(l)&&l.colorStops&&(l=(l.colorStops[0]||{}).color),l=l||"transparent";var h=Os(l),u=e.name;return u==="\0-"&&(u=""),u=u?wr(u)+(r?": ":"<br/>"):"",r?h+u+s:u+h+(o?wr(o)+": "+s:s)}function Vu(e,t,r){r=r||e.getSource();var i=t||Fs(e.get("coordinateSystem"))||["x","y","z"],n=Us(r,{dimensionsDefine:r.dimensionsDefine||e.get("dimensions"),encodeDefine:r.encodeDefine||e.get("encode"),coordDimensions:i.map(function(o){var l=e.getReferringComponents(o+"Axis3D").models[0];return{type:l&&l.get("type")==="category"?"ordinal":"float",name:o}})});e.get("coordinateSystem")==="cartesian3D"&&n.forEach(function(o){if(i.indexOf(o.coordDim)>=0){var l=e.getReferringComponents(o.coordDim+"Axis3D").models[0];l&&l.get("type")==="category"&&(o.ordinalMeta=l.getOrdinalMeta())}});var a=Hs.enableDataStack(e,n,{byIndex:!0,stackedCoordDimension:"z"}),s=new zs(n,e);return s.setCalculationInfo(a),s.initData(r),s}var us=Gs.extend({type:"series.surface",dependencies:["globe","grid3D","geo3D"],visualStyleAccessPath:"itemStyle",formatTooltip:function(e){return ku(this,e)},getInitialData:function(e,t){var r=e.data;function i(Z){return!(isNaN(Z.min)||isNaN(Z.max)||isNaN(Z.step))}function n(Z){var I=pa;return Math.max(I(Z.min),I(Z.max),I(Z.step))+1}if(!r)if(e.parametric){var g=e.parametricEquation||{},E=g.u||{},S=g.v||{};["u","v"].forEach(function(I){i(g[I])}),["x","y","z"].forEach(function(I){g[I]});var R=Math.floor((E.max+E.step-E.min)/E.step),b=Math.floor((S.max+S.step-S.min)/S.step);r=new Float32Array(R*b*5);for(var M=n(E),F=n(S),d=0,f=0;f<b;f++)for(var v=0;v<R;v++){var w=v*E.step+E.min,U=f*S.step+S.min,O=Cr(Math.min(w,E.max),M),N=Cr(Math.min(U,S.max),F),m=g.x(O,N),p=g.y(O,N),y=g.z(O,N);r[d++]=m,r[d++]=p,r[d++]=y,r[d++]=O,r[d++]=N}}else{var a=e.equation||{},s=a.x||{},o=a.y||{};if(["x","y"].forEach(function(Z){i(a[Z])}),typeof a.z!="function")return;var l=Math.floor((s.max+s.step-s.min)/s.step),h=Math.floor((o.max+o.step-o.min)/o.step);r=new Float32Array(l*h*3);for(var u=n(s),c=n(o),d=0,f=0;f<h;f++)for(var v=0;v<l;v++){var m=v*s.step+s.min,p=f*o.step+o.min,_=Cr(Math.min(m,s.max),u),x=Cr(Math.min(p,o.max),c),y=a.z(_,x);r[d++]=_,r[d++]=x,r[d++]=y}}var G=["x","y","z"];e.parametric&&G.push("u","v");var B=Vu(this,G,r);return B},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,grid3DIndex:0,shading:"lambert",parametric:!1,wireframe:{show:!0,lineStyle:{color:"rgba(0,0,0,0.5)",width:1}},equation:{x:{min:-1,max:1,step:.1},y:{min:-1,max:1,step:.1},z:null},parametricEquation:{u:{min:-1,max:1,step:.1},v:{min:-1,max:1,step:.1},x:null,y:null,z:null},dataShape:null,itemStyle:{},animationDurationUpdate:500}});_t(us.prototype,Hu);var Wu=us,It=hi.vec3;function Xu(e){return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])}var ju=ks.extend({type:"surface",__ecgl__:!0,init:function(e,t){this.groupGL=new V.Node},render:function(e,t,r){var i=this._prevSurfaceMesh;this._prevSurfaceMesh=this._surfaceMesh,this._surfaceMesh=i,this._surfaceMesh||(this._surfaceMesh=this._createSurfaceMesh()),this.groupGL.remove(this._prevSurfaceMesh),this.groupGL.add(this._surfaceMesh);var n=e.coordinateSystem,a=e.get("shading"),s=e.getData(),o="ecgl."+a;if((!this._surfaceMesh.material||this._surfaceMesh.material.shader.name!==o)&&(this._surfaceMesh.material=V.createMaterial(o,["VERTEX_COLOR","DOUBLE_SIDED"])),V.setMaterialFromModel(a,this._surfaceMesh.material,e,r),n&&n.viewGL){n.viewGL.add(this.groupGL);var l=n.viewGL.isLinearSpace()?"define":"undefine";this._surfaceMesh.material[l]("fragment","SRGB_DECODE")}var h=e.get("parametric"),u=e.get("dataShape");u||(u=this._getDataShape(s,h));var c=e.getModel("wireframe"),d=c.get("lineStyle.width"),f=c.get("show")&&d>0;this._updateSurfaceMesh(this._surfaceMesh,e,u,f);var v=this._surfaceMesh.material;f?(v.define("WIREFRAME_QUAD"),v.set("wireframeLineWidth",d),v.set("wireframeLineColor",V.parseColor(c.get("lineStyle.color")))):v.undefine("WIREFRAME_QUAD"),this._initHandler(e,r),this._updateAnimation(e)},_updateAnimation:function(e){V.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevSurfaceMesh,this._surfaceMesh,e)},_createSurfaceMesh:function(){var e=new V.Mesh({geometry:new V.Geometry({dynamic:!0,sortTriangles:!0}),shadowDepthMaterial:new V.Material({shader:new V.Shader(V.Shader.source("ecgl.sm.depth.vertex"),V.Shader.source("ecgl.sm.depth.fragment"))}),culling:!1,renderOrder:10,renderNormal:!0});return e.geometry.createAttribute("barycentric","float",4),e.geometry.createAttribute("prevPosition","float",3),e.geometry.createAttribute("prevNormal","float",3),Object.assign(e.geometry,zu),e},_initHandler:function(e,t){var r=e.getData(),i=this._surfaceMesh,n=e.coordinateSystem;function a(o,l){for(var h=1/0,u=-1,c=[],d=0;d<o.length;d++){i.geometry.attributes.position.get(o[d],c);var f=It.dist(l.array,c);f<h&&(h=f,u=o[d])}return u}i.seriesIndex=e.seriesIndex;var s=-1;i.off("mousemove"),i.off("mouseout"),i.on("mousemove",function(o){var l=a(o.triangle,o.point);if(l>=0){var h=[];i.geometry.attributes.position.get(l,h);for(var u=n.pointToData(h),c=1/0,d=-1,f=[],v=0;v<r.count();v++){f[0]=r.get("x",v),f[1]=r.get("y",v),f[2]=r.get("z",v);var m=It.squaredDistance(f,u);m<c&&(d=v,c=m)}d!==s&&t.dispatchAction({type:"grid3DShowAxisPointer",value:u}),s=d,i.dataIndex=d}else i.dataIndex=-1},this),i.on("mouseout",function(o){s=-1,i.dataIndex=-1,t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_updateSurfaceMesh:function(e,t,r,i){var n=e.geometry,a=t.getData(),s=a.getLayout("points"),o=0;a.each(function(ht){a.hasValue(ht)||o++});var l=o||i,h=n.attributes.position,u=n.attributes.normal,c=n.attributes.texcoord0,d=n.attributes.barycentric,f=n.attributes.color,v=r[0],m=r[1],p=t.get("shading"),_=p!=="color";if(l){var x=(v-1)*(m-1)*4;h.init(x),i&&d.init(x)}else h.value=new Float32Array(s);f.init(n.vertexCount),c.init(n.vertexCount);var y=[0,3,1,1,3,2],g=[[1,1,0,0],[0,1,0,1],[1,0,0,1],[1,0,1,0]],E=n.indices=new(n.vertexCount>65535?Uint32Array:Uint16Array)((v-1)*(m-1)*6),S=function(ht,Gt,vt){vt[1]=ht*m+Gt,vt[0]=ht*m+Gt+1,vt[3]=(ht+1)*m+Gt+1,vt[2]=(ht+1)*m+Gt},R=!1;if(l){var b=[],M=[],F=0;_?u.init(n.vertexCount):u.value=null;for(var w=[[],[],[]],U=[],O=[],N=It.create(),G=function(ht,Gt,vt){var ci=Gt*3;return vt[0]=ht[ci],vt[1]=ht[ci+1],vt[2]=ht[ci+2],vt},B=new Float32Array(s.length),Z=new Float32Array(s.length/3*4),I=0;I<a.count();I++)if(a.hasValue(I)){var Fe=V.parseColor(Zi(a,I)),ce=ua(a,I);ce!=null&&(Fe[3]*=ce),Fe[3]<.99&&(R=!0);for(var k=0;k<4;k++)Z[I*4+k]=Fe[k]}for(var ye=[1e7,1e7,1e7],I=0;I<v-1;I++)for(var ae=0;ae<m-1;ae++){var ve=I*(m-1)+ae,me=ve*4;S(I,ae,b);for(var Oe=!1,k=0;k<4;k++)G(s,b[k],M),Xu(M)&&(Oe=!0);for(var k=0;k<4;k++)Oe?h.set(me+k,ye):(G(s,b[k],M),h.set(me+k,M)),i&&d.set(me+k,g[k]);for(var k=0;k<6;k++)E[F++]=y[k]+me;if(_&&!Oe)for(var k=0;k<2;k++){for(var Be=k*3,Re=0;Re<3;Re++){var ze=b[y[Be]+Re];G(s,ze,w[Re])}It.sub(U,w[0],w[1]),It.sub(O,w[1],w[2]),It.cross(N,U,O);for(var Re=0;Re<3;Re++){var Ze=b[y[Be]+Re]*3;B[Ze]=B[Ze]+N[0],B[Ze+1]=B[Ze+1]+N[1],B[Ze+2]=B[Ze+2]+N[2]}}}if(_)for(var I=0;I<B.length/3;I++)G(B,I,N),It.normalize(N,N),B[I*3]=N[0],B[I*3+1]=N[1],B[I*3+2]=N[2];for(var Fe=[],rt=[],I=0;I<v-1;I++)for(var ae=0;ae<m-1;ae++){var ve=I*(m-1)+ae,me=ve*4;S(I,ae,b);for(var k=0;k<4;k++){for(var Re=0;Re<4;Re++)Fe[Re]=Z[b[k]*4+Re];f.set(me+k,Fe),_&&(G(B,b[k],N),u.set(me+k,N));var ze=b[k];rt[0]=ze%m/(m-1),rt[1]=Math.floor(ze/m)/(v-1),c.set(me+k,rt)}ve++}}else{for(var rt=[],I=0;I<a.count();I++){rt[0]=I%m/(m-1),rt[1]=Math.floor(I/m)/(v-1);var Fe=V.parseColor(Zi(a,I)),ce=ua(a,I);ce!=null&&(Fe[3]*=ce),Fe[3]<.99&&(R=!0),f.set(I,Fe),c.set(I,rt)}for(var b=[],fs=0,I=0;I<v-1;I++)for(var ae=0;ae<m-1;ae++){S(I,ae,b);for(var k=0;k<6;k++)E[fs++]=b[y[k]]}_?n.generateVertexNormals():u.value=null}e.material.get("normalMap")&&n.generateTangents(),n.updateBoundingBox(),n.dirty(),e.material.transparent=R,e.material.depthMask=!R},_getDataShape:function(e,t){for(var r=-1/0,i=0,n=0,a=!1,s=t?"u":"x",o=e.count(),l=0;l<o;l++){var h=e.get(s,l);h<r&&(n=0,i++),r=h,n++}if((!i||n===1)&&(a=!0),!a)return[i+1,n];for(var u=Math.floor(Math.sqrt(o));u>0;){if(Math.floor(o/u)===o/u)return[u,o/u];u--}return u=Math.floor(Math.sqrt(o)),[u,u]},dispose:function(){this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function qu(e){e.registerChartView(ju),e.registerSeriesModel(Wu),e.registerLayout(function(t,r){t.eachSeriesByType("surface",function(i){var n=i.coordinateSystem;!n||n.type;var a=i.getData(),s=new Float32Array(3*a.count()),o=[NaN,NaN,NaN];if(n&&n.type==="cartesian3D"){var l=n.dimensions,h=l.map(function(u){return i.coordDimToDataDim(u)[0]});a.each(h,function(u,c,d,f){var v;a.hasValue(f)?v=n.dataToPoint([u,c,d]):v=o,s[f*3]=v[0],s[f*3+1]=v[1],s[f*3+2]=v[2]})}a.setLayout("points",s)})})}var Yu=Object.defineProperty,Zu=Object.getOwnPropertyDescriptor,cs=(e,t,r,i)=>{for(var n=i>1?void 0:i?Zu(t,r):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(n=(i?s(t,r,n):s(n))||n);return i&&n&&Yu(t,r,n),n};$i([fa,Vs,Uu,qu]);let ni=class extends Ws(oo,lo){constructor(){super(...arguments);this.mdiGrid=Xs,this.mdiHome=js,this.mdiInformation=qs,this.mdiStackOverflow=Ys,this.mdiLockOutline=Zs,this.mdiCloseThick=$s,this.mdiPencil=Ks,this.mdiDelete=Qs,this.mdiProgressUpload=Js,this.renameDialog=!1,this.removeDialogProfile="",this.removeDialog=!1,this.saveConfigDialog=!1,this.calibrateDialog={boolShow:!1,name:"default"},this.newName="",this.oldName="",this.heightmapScale=.5,this.probedOpacity=1,this.meshOpacity=1,this.flatOpacity=.5,this.colorAxisName="rgba(255,255,255,0.5)",this.colorAxisLabel="rgba(255,255,255,0.5)",this.colorAxisLine="rgba(255,255,255,0.2)",this.colorAxisTick="rgba(255,255,255,0.2)",this.colorSplitLine="rgba(255,255,255,0.2)",this.colorAxisPointer="rgba(255,255,255,0.8)",this.colorVisualMap="rgba(255,255,255,0.8)",this.fontSizeVisualMap=14}get chartOptions(){return{tooltip:{backgroundColor:"rgba(0,0,0,0.9)",borderWidth:0,textStyle:{color:"#fff",fontSize:"14px"},padding:15,formatter:this.tooltipFormatter},darkMode:!0,animation:!1,legend:{show:!1,selected:this.selected},visualMap:{show:!0,min:this.visualMapRange[0],max:this.visualMapRange[1],calculable:!0,dimension:2,inRange:{color:["#313695","#4575b4","#74add1","#abd9e9","#e0f3f8","#ffffbf","#fee090","#fdae61","#f46d43","#d73027","#a50026"]},seriesIndex:this.visualMapSeriesIndex,left:this.isMobile?10:30,top:20,bottom:0,itemWidth:this.isMobile?10:30,itemHeight:350,precision:3,textStyle:{color:this.colorVisualMap,fontSize:this.fontSizeVisualMap}},xAxis3D:{type:"value",nameTextStyle:{color:this.colorAxisName},min:this.rangeX[0],max:this.rangeX[1],minInterval:1},yAxis3D:{type:"value",nameTextStyle:{color:this.colorAxisName},min:this.rangeY[0],max:this.rangeY[1]},zAxis3D:{type:"value",min:this.heightmapScale*-1,max:this.heightmapScale,nameTextStyle:{color:this.colorAxisName},axisPointer:{label:{formatter:function(e){return e=parseFloat(e),e.toFixed(2)}}}},grid3D:{axisLabel:{textStyle:{color:this.colorAxisLabel}},axisLine:{lineStyle:{color:this.colorAxisLine}},axisTick:{lineStyle:{color:this.colorAxisTick}},splitLine:{lineStyle:{color:this.colorSplitLine}},axisPointer:{lineStyle:{color:this.colorAxisPointer},label:{textStyle:{color:this.colorAxisPointer}}}},series:this.series}}get chart(){var e,t;return(t=(e=this.$refs.heightmap)==null?void 0:e.chart)!=null?t:null}get profiles(){return this.$store.getters["printer/getBedMeshProfiles"]}get bed_mesh(){var e;return(e=this.$store.state.printer.bed_mesh)!=null?e:null}get currentProfileName(){var e,t;return(t=(e=this.bed_mesh)==null?void 0:e.profile_name)!=null?t:""}get currentProfile(){return this.profiles.find(e=>e.name===this.currentProfileName)}bed_meshChanged(){var e;(e=this.chart)==null||e.setOption(this.chartOptions)}get showProbed(){var e;return(e=this.$store.state.gui.view.heightmap.probed)!=null?e:!0}set showProbed(e){this.$store.dispatch("gui/saveSetting",{name:"view.heightmap.probed",value:e})}get showMesh(){var e;return(e=this.$store.state.gui.view.heightmap.mesh)!=null?e:!0}set showMesh(e){this.$store.dispatch("gui/saveSetting",{name:"view.heightmap.mesh",value:e})}get showFlat(){var e;return(e=this.$store.state.gui.view.heightmap.flat)!=null?e:!0}set showFlat(e){this.$store.dispatch("gui/saveSetting",{name:"view.heightmap.flat",value:e})}get wireframe(){var e;return(e=this.$store.state.gui.view.heightmap.wireframe)!=null?e:!0}set wireframe(e){this.$store.dispatch("gui/saveSetting",{name:"view.heightmap.wireframe",value:e})}get scale(){var e;return(e=this.$store.state.gui.view.heightmap.scale)!=null?e:!0}set scale(e){this.$store.dispatch("gui/saveSetting",{name:"view.heightmap.scale",value:e})}get scaleVisualMap(){var e;return(e=this.$store.state.gui.view.heightmap.scaleVisualMap)!=null?e:!1}set scaleVisualMap(e){this.$store.dispatch("gui/saveSetting",{name:"view.heightmap.scaleVisualMap",value:e})}get rangeX(){var r,i,n,a;const e=(r=this.$store.state.printer.toolhead)==null?void 0:r.axis_minimum,t=(i=this.$store.state.printer.toolhead)==null?void 0:i.axis_maximum;return[(n=e[0])!=null?n:0,(a=t[0])!=null?a:0]}get rangeY(){var r,i,n,a,s,o;const e=(i=(r=this.$store.state.printer.toolhead)==null?void 0:r.axis_minimum)!=null?i:[0,0],t=(a=(n=this.$store.state.printer.toolhead)==null?void 0:n.axis_maximum)!=null?a:[0,0];return[(s=e[1])!=null?s:0,(o=t[1])!=null?o:0]}get heightmapLimit(){let e=0,t=0;if(this.bed_mesh){const r=[];if(this.showProbed)for(const i of this.bed_mesh.probed_matrix)for(const n of i)r.push(n);if(this.showMesh)for(const i of this.bed_mesh.mesh_matrix)for(const n of i)r.push(n);e=Math.min(e,...r),t=Math.max(t,...r)}return[e,t]}get probedHeightmapLimit(){let e=0,t=0;return this.currentProfile&&(e=this.currentProfile.min,t=this.currentProfile.max),[e,t]}get heightmapRangeLimit(){const[e,t]=this.heightmapLimit,r=Math.round(Math.max(Math.abs(e),Math.abs(t))*10)/10,i=Math.max(r,1);return[r,i]}get selected(){return{probed:this.showProbed,mesh:this.showMesh,flat:this.showFlat}}get series(){const e=[];return this.bed_mesh&&(e.push(this.seriesProbed),e.push(this.seriesMesh),e.push(this.seriesFlat)),e}get seriesProbed(){const e={type:"surface",name:"probed",data:[],itemStyle:{opacity:this.probedOpacity},wireframe:{show:this.wireframe}};if(this.bed_mesh){const t=this.bed_mesh.probed_matrix[0].length,r=this.bed_mesh.probed_matrix.length,i=this.bed_mesh.mesh_min[0],n=this.bed_mesh.mesh_max[0],a=this.bed_mesh.mesh_min[1],s=this.bed_mesh.mesh_max[1],o=(n-i)/(t-1),l=(s-a)/(r-1),h=[];let u=0;this.bed_mesh.probed_matrix.forEach(c=>{let d=0;c.forEach(f=>{h.push([i+o*d,a+l*u,f]),d++}),u++}),e.data=h,e.dataShape=[r,t]}return e}get seriesMesh(){const e={type:"surface",name:"mesh",data:[],itemStyle:{opacity:this.meshOpacity},wireframe:{show:this.wireframe}};if(this.bed_mesh){const t=this.bed_mesh.mesh_matrix[0].length,r=this.bed_mesh.mesh_matrix.length,i=this.bed_mesh.mesh_min[0],n=this.bed_mesh.mesh_max[0],a=this.bed_mesh.mesh_min[1],s=this.bed_mesh.mesh_max[1],o=(n-i)/(t-1),l=(s-a)/(r-1),h=[];let u=0;this.bed_mesh.mesh_matrix.forEach(c=>{let d=0;c.forEach(f=>{h.push([i+o*d,a+l*u,f]),d++}),u++}),e.data=h,e.dataShape=[r,t]}return e}get seriesFlat(){var r,i;const e={type:"surface",name:"flat",data:[],itemStyle:{color:[1,1,1,1],opacity:this.flatOpacity},wireframe:{show:this.wireframe}},t=(i=(r=this.$store.state.printer.configfile)==null?void 0:r.settings)==null?void 0:i.bed_mesh;if(t){let n=[1,1];t.probe_count&&typeof t.probe_count=="string"?n=t.probe_count.split(","):t.probe_count?n=t.probe_count:t.round_probe_count&&(n=[t.round_probe_count,t.round_probe_count]);let a=[],s=[];t.mesh_min&&t.mesh_max?(a=typeof t.mesh_min=="string"?t.mesh_min.split(","):t.mesh_min,s=typeof t.mesh_max=="string"?t.mesh_max.split(","):t.mesh_max):(a=[t.mesh_radius*-1,t.mesh_radius*-1],s=[t.mesh_radius,t.mesh_radius]);const o=n[0],l=n[1],h=parseFloat(a[0]),u=parseFloat(s[0]),c=parseFloat(a[1]),d=parseFloat(s[1]),f=(u-h)/(o-1),v=(d-c)/(l-1),m=[];for(let p=0;p<l;p++)for(let _=0;_<o;_++)m.push([h+f*_,c+v*p,0]);e.data=m,e.dataShape=[l,o]}return e}get visualMapRange(){return this.scaleVisualMap?this.heightmapLimit:[-.1,.1]}get visualMapSeriesIndex(){const e=[];return this.showProbed?e.push(0):this.showMesh&&e.push(1),e}get bedMeshMaxPoint(){if(this.bed_mesh.profile_name==="")return{row:0,col:0,positionX:0,positionY:0,value:0};const[,e]=this.probedHeightmapLimit;let t=0,r=0;this.bed_mesh.probed_matrix.forEach((a,s)=>{Math.max(...a)===e&&(t=s+1,r=a.findIndex(o=>o===e)+1)});const i=Math.round((this.bed_mesh.mesh_min[0]+(this.bed_mesh.mesh_max[0]-this.bed_mesh.mesh_min[0])/this.bed_mesh.probed_matrix[0].length*(r-1))*10)/10,n=Math.round((this.bed_mesh.mesh_min[1]+(this.bed_mesh.mesh_max[1]-this.bed_mesh.mesh_min[1])/this.bed_mesh.probed_matrix.length*(t-1))*10)/10;return{row:t,col:r,positionX:i,positionY:n,value:e}}get bedMeshMinPoint(){if(this.bed_mesh.profile_name==="")return{row:0,col:0,positionX:0,positionY:0,value:0};const[e]=this.probedHeightmapLimit;let t=0,r=0;this.bed_mesh.probed_matrix.forEach((a,s)=>{Math.min(...a)===e&&(t=s+1,r=a.findIndex(o=>o===e)+1)});const i=Math.round((this.bed_mesh.mesh_min[0]+(this.bed_mesh.mesh_max[0]-this.bed_mesh.mesh_min[0])/this.bed_mesh.probed_matrix[0].length*(r-1))*10)/10,n=Math.round((this.bed_mesh.mesh_min[1]+(this.bed_mesh.mesh_max[1]-this.bed_mesh.mesh_min[1])/this.bed_mesh.probed_matrix.length*(t-1))*10)/10;return{row:t,col:r,positionX:i,positionY:n,value:e}}get meshLoaded(){return this.bed_mesh!==null?this.bed_mesh.profile_name!=="":!1}tooltipFormatter(e){const t=[];return t.push("<b>"+e.seriesName+"</b>"),Object.keys(e.encode).sort().forEach(r=>{t.push("<b>"+r.toUpperCase()+"</b>: "+e.data[e.encode[r][0]].toFixed(r==="z"?3:1)+" mm")}),t.join("<br />")}loadProfile(e){const t='BED_MESH_PROFILE LOAD="'+e+'"';this.$store.dispatch("server/addEvent",{message:t,type:"command"}),this.$socket.emit("printer.gcode.script",{script:t},{loading:"bedMeshLoad_"+e})}openRenameProfile(){var e,t;this.newName=(t=(e=this.bed_mesh)==null?void 0:e.profile_name)!=null?t:"",this.oldName=this.bed_mesh.profile_name,this.renameDialog=!0,setTimeout(()=>{var r;(r=this.$refs.inputDialogRenameHeightmapName)==null||r.focus()},200)}renameProfile(){this.renameDialog=!1;const e='BED_MESH_PROFILE SAVE="'+this.newName+'"',t='BED_MESH_PROFILE REMOVE="'+this.oldName+'"';this.$store.dispatch("server/addEvent",{message:e,type:"command"}),this.$store.dispatch("server/addEvent",{message:t,type:"command"}),this.$socket.emit("printer.gcode.script",{script:e},{loading:"bedMeshRename"}),this.$socket.emit("printer.gcode.script",{script:t},{loading:"bedMeshRename"}),this.newName="",this.oldName=""}openRemoveProfile(e){this.removeDialogProfile=e,this.removeDialog=!0}removeProfile(){this.removeDialog=!1;const e='BED_MESH_PROFILE REMOVE="'+this.removeDialogProfile+'"';this.$store.dispatch("server/addEvent",{message:e,type:"command"}),this.$socket.emit("printer.gcode.script",{script:e},{action:"printer/removeBedMeshProfile",actionPayload:{name:this.removeDialogProfile},loading:"bedMeshRename_"+this.removeDialogProfile}),this.removeDialogProfile="",this.saveConfigDialog=!0}homePrinter(){const e="G28";this.$store.dispatch("server/addEvent",{message:e,type:"command"}),this.$socket.emit("printer.gcode.script",{script:e},{loading:"homeAll"})}clearBedMesh(){const e="BED_MESH_CLEAR";this.$store.dispatch("server/addEvent",{message:e,type:"command"}),this.$socket.emit("printer.gcode.script",{script:e},{loading:"bedMeshClear"})}openCalibrateMesh(){this.calibrateDialog.name="default",this.calibrateDialog.boolShow=!0,setTimeout(()=>{var e;(e=this.$refs.inputFieldCalibrateBedMeshName)==null||e.focus()},200)}calibrateMesh(){this.calibrateDialog.boolShow=!1;const e='BED_MESH_CALIBRATE PROFILE="'+this.calibrateDialog.name+'"';this.$store.dispatch("server/addEvent",{message:e,type:"command"}),this.$socket.emit("printer.gcode.script",{script:e},{loading:"bedMeshCalibrate"})}saveConfig(){const e="SAVE_CONFIG";this.$store.dispatch("server/addEvent",{message:e,type:"command"}),this.$socket.emit("printer.gcode.script",{script:e},{loading:"topbarSaveConfig"}),this.saveConfigDialog=!1}beforeDestroy(){typeof window>"u"||this.chart&&this.chart.dispose()}};cs([eo("bed_mesh",{deep:!0})],ni.prototype,"bed_meshChanged",1);ni=cs([to({components:{Panel:St}})],ni);var $u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.klipperReadyForGui?r(it,[r(Me,{staticClass:"col-12 col-md-8 pb-0"},[r(St,{attrs:{"card-class":"heightmap-map-panel",title:e.$t("Heightmap.Heightmap").toString(),icon:e.mdiGrid},scopedSlots:e._u([{key:"buttons",fn:function(){return[r(Te,{staticClass:"d-none d-sm-flex",attrs:{icon:"",tile:"",disabled:e.printerIsPrinting,color:e.homedAxes.includes("xyz")?"primary":"warning",loading:e.loadings.includes("homeAll"),title:e.$t("Heightmap.TitleHomeAll"),ripple:!0},on:{click:e.homePrinter}},[r(ut,[e._v(e._s(e.mdiHome))])],1),e.meshLoaded?r(Te,{staticClass:"d-none d-sm-flex",attrs:{text:"",tile:"",loading:e.loadings.includes("bedMeshClear"),title:e.$t("Heightmap.TitleClear")},on:{click:e.clearBedMesh}},[e._v(" "+e._s(e.$t("Heightmap.Clear"))+" ")]):e._e(),r(Te,{staticClass:"d-none d-sm-flex",attrs:{text:"",tile:"",loading:e.loadings.includes("bedMeshCalibrate"),disabled:e.printerIsPrinting,title:e.$t("Heightmap.TitleCalibrate")},on:{click:e.openCalibrateMesh}},[e._v(" "+e._s(e.$t("Heightmap.Calibrate"))+" ")])]},proxy:!0}],null,!1,2015509893)},[r(nt,{staticClass:"d-sm-none text-center pb-0"},[r(ro,{staticClass:"v-btn-toggle",attrs:{tile:"",name:"controllers"}},[r(Te,{staticClass:"px-2 minwidth-0",attrs:{text:"",small:"",disabled:e.printerIsPrinting,color:e.homedAxes.includes("xyz")?"primary":"warning",loading:e.loadings.includes("homeAll"),title:e.$t("Heightmap.TitleHomeAll")},on:{click:e.homePrinter}},[r(ut,{attrs:{color:e.homedAxes.includes("xyz")?"primary":"warning",small:""}},[e._v(" "+e._s(e.mdiHome)+" ")])],1),e.bed_mesh?r(Te,{staticClass:"px-2 minwidth-0",attrs:{text:"",small:"",color:"primary",loading:e.loadings.includes("bedMeshClear"),title:e.$t("Heightmap.TitleClear")},on:{click:e.clearBedMesh}},[e._v(" "+e._s(e.$t("Heightmap.Clear"))+" ")]):e._e(),r(Te,{staticClass:"px-2 minwidth-0",attrs:{text:"",small:"",color:"primary",loading:e.loadings.includes("bedMeshCalibrate"),disabled:e.printerIsPrinting,title:e.$t("Heightmap.TitleCalibrate")},on:{click:e.openCalibrateMesh}},[e._v(" "+e._s(e.$t("Heightmap.Calibrate"))+" ")])],1)],1),e.meshLoaded?[r(nt,{staticClass:"py-0 px-0"},[r(it,[r(Me,{},[r("e-chart",{ref:"heightmap",staticStyle:{height:"400px",width:"100%",overflow:"hidden"},attrs:{option:e.chartOptions,"init-options":{renderer:"canvas"}}})],1)],1),r(it,[r(Me,{staticClass:"col-12 col-sm-auto pt-0 pb-0 pl-lg-6 d-flex justify-center justify-sm-start"},[r(io,{staticClass:"mt-0 ml-5",attrs:{label:e.$t("Heightmap.ScaleGradient")},model:{value:e.scaleVisualMap,callback:function(i){e.scaleVisualMap=i},expression:"scaleVisualMap"}})],1),r(Me,{staticClass:"d-flex justify-center pt-0 pb-6 pb-lg-3"},[r(Rr,{staticClass:"mx-3 mt-0",attrs:{label:e.$t("Heightmap.Probed"),"hide-details":""},model:{value:e.showProbed,callback:function(i){e.showProbed=i},expression:"showProbed"}}),r(Rr,{staticClass:"mx-3 mt-0",attrs:{label:e.$t("Heightmap.Mesh"),"hide-details":""},model:{value:e.showMesh,callback:function(i){e.showMesh=i},expression:"showMesh"}}),r(Rr,{staticClass:"mx-3 mt-0",attrs:{label:e.$t("Heightmap.Flat"),"hide-details":""},model:{value:e.showFlat,callback:function(i){e.showFlat=i},expression:"showFlat"}}),r(Rr,{staticClass:"mx-3 mt-0",attrs:{label:e.$t("Heightmap.Wireframe"),"hide-details":""},model:{value:e.wireframe,callback:function(i){e.wireframe=i},expression:"wireframe"}})],1)],1)],1),r(kt),r(nt,{staticClass:"pt-0 pb-3"},[r(it,[r(Me,[r(no,{staticClass:"mt-4",attrs:{label:e.$t("Heightmap.ScaleZMax"),min:e.heightmapRangeLimit[0],max:e.heightmapRangeLimit[1],step:.1,ticks:"always","hide-details":""},model:{value:e.heightmapScale,callback:function(i){e.heightmapScale=i},expression:"heightmapScale"}})],1)],1)],1)]:[r(nt,{staticClass:"text-center py-3 font-italic"},[e._v(" "+e._s(e.$t("Heightmap.NoBedMeshHasBeenLoadedYet"))+" ")])]],2)],1),r(Me,{staticClass:"col-12 col-md-4"},[e.currentProfile?r(St,{staticClass:"mt-0",attrs:{title:e.$t("Heightmap.CurrentMesh.Headline").toString(),"card-class":"heightmap-current-mesh-panel",icon:e.mdiInformation,collapsible:!0}},[r(nt,{staticClass:"py-3 px-0"},[r(it,{staticClass:"px-3"},[r(Me,[e._v(e._s(e.$t("Heightmap.CurrentMesh.Name")))]),r(Me,{staticClass:"text-right"},[r("span",{staticClass:"currentMeshName font-weight-bold",on:{click:function(i){return e.openRenameProfile()}}},[r(ut,{attrs:{left:"",small:"",color:"primary"}},[e._v(e._s(e.mdiPencil))]),e._v(" "+e._s(e.currentProfileName)+" ")],1)])],1),r(kt,{staticClass:"my-3"}),"data"in e.currentProfile?r(it,{staticClass:"px-3"},[r(Me,[e._v(e._s(e.$t("Heightmap.CurrentMesh.Size")))]),r(Me,{staticClass:"text-right"},[e._v(" "+e._s(e.currentProfile.data.x_count)+"x"+e._s(e.currentProfile.data.y_count)+" ")])],1):e._e(),r(kt,{staticClass:"my-3"}),r(it,{staticClass:"px-3"},[r(Me,[e._v(" "+e._s(e.$t("Heightmap.CurrentMesh.Max"))+" ["+e._s(e.bedMeshMaxPoint.positionX)+", "+e._s(e.bedMeshMaxPoint.positionY)+"] ")]),r(Me,{staticClass:"text-right"},[e._v(e._s(e.currentProfile.max.toFixed(3))+" mm")])],1),r(kt,{staticClass:"my-3"}),r(it,{staticClass:"px-3"},[r(Me,[e._v(" "+e._s(e.$t("Heightmap.CurrentMesh.Min"))+" ["+e._s(e.bedMeshMinPoint.positionX)+", "+e._s(e.bedMeshMinPoint.positionY)+"] ")]),r(Me,{staticClass:"text-right"},[e._v(e._s(e.currentProfile.min.toFixed(3))+" mm")])],1),r(kt,{staticClass:"my-3"}),r(it,{staticClass:"px-3"},[r(Me,[e._v(e._s(e.$t("Heightmap.CurrentMesh.Variance")))]),r(Me,{staticClass:"text-right"},[e._v(e._s(e.currentProfile.variance.toFixed(3))+" mm")])],1)],1)],1):e._e(),r(St,{staticClass:"mt-6 mt-md-0",attrs:{title:e.$t("Heightmap.Profiles").toString(),"card-class":"heightmap-profiles-panel",icon:e.mdiStackOverflow,collapsible:!0}},[e.profiles.length?r(nt,{staticClass:"px-0 py-3"},[e._l(e.profiles,function(i,n){return[n?r(kt,{key:"deliver_"+n,staticClass:"my-3"}):e._e(),r(it,{key:n,staticClass:"rowProfile"},[r(Me,{staticClass:"pl-6 py-0 colName"},[r("span",{class:i.is_active?"current":"",staticStyle:{cursor:"pointer"},on:{click:function(a){i.is_active?e.openRenameProfile():e.loadProfile(i.name)}}},[e._v(" "+e._s(i.name)+" ")])]),r(Me,{staticClass:"text-center py-0 colVariance"},[r(ao,{attrs:{top:"",color:"rgba(0,0,0,0.8)"},scopedSlots:e._u([{key:"activator",fn:function(a){var s=a.on,o=a.attrs;return[r("small",e._g(e._b({},"small",o,!1),s),[e._v(" "+e._s(i.variance.toFixed(3))+" ")])]}}],null,!0)},[r("span",[e._v(" max: "+e._s(i.max)+" "),r("br"),e._v(" min: "+e._s(i.min)+" ")])])],1),r(Me,{staticClass:"py-0 colActions"},[i.is_active?r(Te,{staticClass:"px-2 minwidth-0",attrs:{text:"",tile:"",loading:e.loadings.includes("bedMeshLoad_"+i.name)},on:{click:e.openRenameProfile}},[r(ut,[e._v(e._s(e.mdiPencil))])],1):r(Te,{staticClass:"px-2 minwidth-0",attrs:{text:"",tile:"",loading:e.loadings.includes("bedMeshLoad_"+i.name)},on:{click:function(a){return e.loadProfile(i.name)}}},[r(ut,[e._v(e._s(e.mdiProgressUpload))])],1),r(Te,{staticClass:"px-2 minwidth-0",attrs:{text:"",tile:"",loading:e.loadings.includes("bedMeshRemove_"+i.name),title:e.$t("Heightmap.DeleteBedMeshProfile")},on:{click:function(a){return e.openRemoveProfile(i.name)}}},[r(ut,[e._v(e._s(e.mdiDelete))])],1)],1)],1)]})],2):r(nt,[r("p",{staticClass:"mb-0"},[e._v(e._s(e.$t("Heightmap.NoProfile")))])])],1)],1)],1):r(it,[r(so,{staticClass:"mx-auto mt-6",attrs:{border:"left","colored-border":"",type:"warning",elevation:"2","max-width":"500",icon:e.mdiLockOutline}},[e._v(" "+e._s(e.$t("Heightmap.ErrorKlipperNotReady"))+" ")])],1),r(Mr,{attrs:{persistent:"","max-width":400},on:{keydown:function(i){if(!i.type.indexOf("key")&&e._k(i.keyCode,"esc",27,i.key,["Esc","Escape"]))return null;e.renameDialog=!1}},model:{value:e.renameDialog,callback:function(i){e.renameDialog=i},expression:"renameDialog"}},[r(St,{attrs:{title:e.$t("Heightmap.RenameBedMeshProfile").toString(),icon:e.mdiGrid,"card-class":"heightmap-rename-dialog","margin-bottom":!1},scopedSlots:e._u([{key:"buttons",fn:function(){return[r(Te,{attrs:{icon:"",tile:""},on:{click:function(i){e.renameDialog=!1}}},[r(ut,[e._v(e._s(e.mdiCloseThick))])],1)]},proxy:!0}])},[r(nt,[r(pn,{ref:"inputDialogRenameHeightmapName",attrs:{label:e.$t("Heightmap.Name"),required:""},on:{keyup:function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"enter",13,i.key,"Enter")?null:e.renameProfile.apply(null,arguments)}},model:{value:e.newName,callback:function(i){e.newName=i},expression:"newName"}})],1),r(Lr,[r(Nr),r(Te,{attrs:{text:""},on:{click:function(i){e.renameDialog=!1}}},[e._v(e._s(e.$t("Heightmap.Abort")))]),r(Te,{attrs:{color:"primary",text:""},on:{click:e.renameProfile}},[e._v(e._s(e.$t("Heightmap.Rename")))])],1)],1)],1),r(Mr,{attrs:{persistent:"","max-width":400},on:{keydown:function(i){if(!i.type.indexOf("key")&&e._k(i.keyCode,"esc",27,i.key,["Esc","Escape"]))return null;e.calibrateDialog.boolShow=!1}},model:{value:e.calibrateDialog.boolShow,callback:function(i){e.$set(e.calibrateDialog,"boolShow",i)},expression:"calibrateDialog.boolShow"}},[r(St,{attrs:{title:e.$t("Heightmap.BedMeshCalibrate").toString(),icon:e.mdiGrid,"card-class":"heightmap-calibrate-dialog","margin-bottom":!1},scopedSlots:e._u([{key:"buttons",fn:function(){return[r(Te,{attrs:{icon:"",tile:""},on:{click:function(i){e.calibrateDialog.boolShow=!1}}},[r(ut,[e._v(e._s(e.mdiCloseThick))])],1)]},proxy:!0}])},[r(nt,[r(pn,{ref:"inputFieldCalibrateBedMeshName",attrs:{label:e.$t("Heightmap.Name"),required:""},on:{keyup:function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"enter",13,i.key,"Enter")?null:e.calibrateMesh.apply(null,arguments)}},model:{value:e.calibrateDialog.name,callback:function(i){e.$set(e.calibrateDialog,"name",i)},expression:"calibrateDialog.name"}})],1),r(Lr,[r(Nr),r(Te,{attrs:{text:""},on:{click:function(i){e.calibrateDialog.boolShow=!1}}},[e._v(e._s(e.$t("Heightmap.Abort")))]),r(Te,{attrs:{color:"primary",text:""},on:{click:e.calibrateMesh}},[e._v(e._s(e.$t("Heightmap.Calibrate")))])],1)],1)],1),r(Mr,{attrs:{persistent:"","max-width":400},on:{keydown:function(i){if(!i.type.indexOf("key")&&e._k(i.keyCode,"esc",27,i.key,["Esc","Escape"]))return null;e.removeDialog=!1}},model:{value:e.removeDialog,callback:function(i){e.removeDialog=i},expression:"removeDialog"}},[r(St,{attrs:{title:e.$t("Heightmap.BedMeshRemove").toString(),icon:e.mdiGrid,"card-class":"heightmap-remove-dialog","margin-bottom":!1},scopedSlots:e._u([{key:"buttons",fn:function(){return[r(Te,{attrs:{icon:"",tile:""},on:{click:function(i){e.removeDialog=!1}}},[r(ut,[e._v(e._s(e.mdiCloseThick))])],1)]},proxy:!0}])},[r(nt,[r("p",{staticClass:"mb-0"},[e._v(e._s(e.$t("Heightmap.DoYouReallyWantToDelete",{name:e.removeDialogProfile})))])]),r(Lr,[r(Nr),r(Te,{attrs:{text:""},on:{click:function(i){e.removeDialog=!1}}},[e._v(e._s(e.$t("Heightmap.Abort")))]),r(Te,{attrs:{color:"error",text:""},on:{click:e.removeProfile}},[e._v(e._s(e.$t("Heightmap.Remove")))])],1)],1)],1),r(Mr,{attrs:{persistent:"","max-width":400},on:{keydown:function(i){if(!i.type.indexOf("key")&&e._k(i.keyCode,"esc",27,i.key,["Esc","Escape"]))return null;e.saveConfigDialog=!1}},model:{value:e.saveConfigDialog,callback:function(i){e.saveConfigDialog=i},expression:"saveConfigDialog"}},[r(St,{attrs:{title:e.$t("Heightmap.SAVE_CONFIG").toString(),icon:e.mdiGrid,"card-class":"heightmap-remove-save-dialog","margin-bottom":!1},scopedSlots:e._u([{key:"buttons",fn:function(){return[r(Te,{attrs:{icon:"",tile:""},on:{click:function(i){e.saveConfigDialog=!1}}},[r(ut,[e._v(e._s(e.mdiCloseThick))])],1)]},proxy:!0}])},[r(nt,[r("p",{staticClass:"mb-0"},[e._v(e._s(e.$t("Heightmap.RemoveSaveDescription")))])]),r(Lr,[r(Nr),e.printerIsPrinting?[r(Te,{attrs:{text:""},on:{click:function(i){e.saveConfigDialog=!1}}},[e._v(e._s(e.$t("Heightmap.Ok")))])]:[r(Te,{attrs:{color:"primary",text:""},on:{click:e.saveConfig}},[e._v(" "+e._s(e.$t("Heightmap.SAVE_CONFIG"))+" ")]),r(Te,{attrs:{text:""},on:{click:function(i){e.saveConfigDialog=!1}}},[e._v(e._s(e.$t("Heightmap.Later")))])]],2)],1)],1)],1)},Ku=[];const ca={};var Qu=ho(ni,$u,Ku,!1,Ju,"2cbd4faa",null,null);function Ju(e){for(let t in ca)this[t]=ca[t]}var rc=function(){return Qu.exports}();export{rc as default};
