(()=>{var e={18:(e,t,n)=>{var r=n(202);e.exports=(r.default||r).template({1:function(e,t,n,r,a){var o,i,l=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,c="function",u=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="card__item" >\r\n    <div class="card__img">       \r\n        <img  src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/'+u(typeof(i=null!=(i=d(n,"poster_path")||(null!=t?d(t,"poster_path"):t))?i:s)===c?i.call(l,{name:"poster_path",hash:{},data:a,loc:{start:{line:4,column:67},end:{line:4,column:82}}}):i)+'" alt="'+u(typeof(i=null!=(i=d(n,"title")||(null!=t?d(t,"title"):t))?i:s)===c?i.call(l,{name:"title",hash:{},data:a,loc:{start:{line:4,column:89},end:{line:4,column:98}}}):i)+'"\r\n          />           \r\n    </div>\r\n\r\n    <div class="card__info">\r\n'+(null!=(o=d(n,"if").call(l,null!=t?d(t,"title"):t,{name:"if",hash:{},fn:e.program(2,a,0),inverse:e.program(4,a,0),data:a,loc:{start:{line:9,column:8},end:{line:14,column:16}}}))?o:"")+'        <p class="card__info_genre">'+u(typeof(i=null!=(i=d(n,"genre_ids")||(null!=t?d(t,"genre_ids"):t))?i:s)===c?i.call(l,{name:"genre_ids",hash:{},data:a,loc:{start:{line:15,column:36},end:{line:15,column:49}}}):i)+"<p>\r\n    </div>\r\n</li>\r\n"},2:function(e,t,n,r,a){var o,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'        <h3 class="card__info_name">'+e.escapeExpression("function"==typeof(o=null!=(o=i(n,"title")||(null!=t?i(t,"title"):t))?o:e.hooks.helperMissing)?o.call(null!=t?t:e.nullContext||{},{name:"title",hash:{},data:a,loc:{start:{line:10,column:36},end:{line:10,column:45}}}):o)+"</h3>\r\n       \r\n"},4:function(e,t,n,r,a){var o,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return null!=(o=i(n,"if").call(null!=t?t:e.nullContext||{},null!=t?i(t,"name"):t,{name:"if",hash:{},fn:e.program(5,a,0),inverse:e.noop,data:a,loc:{start:{line:12,column:8},end:{line:14,column:9}}}))?o:""},5:function(e,t,n,r,a){var o,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'        <h3 class="card__info_name">'+e.escapeExpression("function"==typeof(o=null!=(o=i(n,"name")||(null!=t?i(t,"name"):t))?o:e.hooks.helperMissing)?o.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:a,loc:{start:{line:13,column:36},end:{line:13,column:44}}}):o)+"</h3>\r\n         "},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,a){var o;return null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:18,column:9}}}))?o:""},useData:!0})},834:(e,t,n)=>{"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.__esModule=!0;var o=a(n(67)),i=r(n(558)),l=r(n(728)),s=a(n(392)),c=a(n(628)),u=r(n(982));function d(){var e=new o.HandlebarsEnvironment;return s.extend(e,o),e.SafeString=i.default,e.Exception=l.default,e.Utils=s,e.escapeExpression=s.escapeExpression,e.VM=c,e.template=function(t){return c.template(t,e)},e}var p=d();p.create=d,u.default(p),p.default=p,t.default=p,e.exports=t.default},67:(e,t,n)=>{"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=d;var a=n(392),o=r(n(728)),i=n(638),l=n(881),s=r(n(37)),c=n(293);t.VERSION="4.7.7",t.COMPILER_REVISION=8,t.LAST_COMPATIBLE_COMPILER_REVISION=7,t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};var u="[object Object]";function d(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},i.registerDefaultHelpers(this),l.registerDefaultDecorators(this)}d.prototype={constructor:d,logger:s.default,log:s.default.log,registerHelper:function(e,t){if(a.toString.call(e)===u){if(t)throw new o.default("Arg not supported with multiple helpers");a.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if(a.toString.call(e)===u)a.extend(this.partials,e);else{if(void 0===t)throw new o.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if(a.toString.call(e)===u){if(t)throw new o.default("Arg not supported with multiple decorators");a.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){c.resetLoggedProperties()}};var p=s.default.log;t.log=p,t.createFrame=a.createFrame,t.logger=s.default},881:(e,t,n)=>{"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){a.default(e)};var r,a=(r=n(670))&&r.__esModule?r:{default:r}},670:(e,t,n)=>{"use strict";t.__esModule=!0;var r=n(392);t.default=function(e){e.registerDecorator("inline",(function(e,t,n,a){var o=e;return t.partials||(t.partials={},o=function(a,o){var i=n.partials;n.partials=r.extend({},i,t.partials);var l=e(a,o);return n.partials=i,l}),t.partials[a.args[0]]=a.fn,o}))},e.exports=t.default},728:(e,t)=>{"use strict";t.__esModule=!0;var n=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function r(e,t){var a=t&&t.loc,o=void 0,i=void 0,l=void 0,s=void 0;a&&(o=a.start.line,i=a.end.line,l=a.start.column,s=a.end.column,e+=" - "+o+":"+l);for(var c=Error.prototype.constructor.call(this,e),u=0;u<n.length;u++)this[n[u]]=c[n[u]];Error.captureStackTrace&&Error.captureStackTrace(this,r);try{a&&(this.lineNumber=o,this.endLineNumber=i,Object.defineProperty?(Object.defineProperty(this,"column",{value:l,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:s,enumerable:!0})):(this.column=l,this.endColumn=s))}catch(e){}}r.prototype=new Error,t.default=r,e.exports=t.default},638:(e,t,n)=>{"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){a.default(e),o.default(e),i.default(e),l.default(e),s.default(e),c.default(e),u.default(e)},t.moveHelperToHooks=function(e,t,n){e.helpers[t]&&(e.hooks[t]=e.helpers[t],n||delete e.helpers[t])};var a=r(n(342)),o=r(n(822)),i=r(n(905)),l=r(n(405)),s=r(n(702)),c=r(n(593)),u=r(n(978))},342:(e,t,n)=>{"use strict";t.__esModule=!0;var r=n(392);t.default=function(e){e.registerHelper("blockHelperMissing",(function(t,n){var a=n.inverse,o=n.fn;if(!0===t)return o(this);if(!1===t||null==t)return a(this);if(r.isArray(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):a(this);if(n.data&&n.ids){var i=r.createFrame(n.data);i.contextPath=r.appendContextPath(n.data.contextPath,n.name),n={data:i}}return o(t,n)}))},e.exports=t.default},822:(e,t,n)=>{"use strict";t.__esModule=!0;var r,a=n(392),o=(r=n(728))&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("each",(function(e,t){if(!t)throw new o.default("Must pass iterator to #each");var r,i=t.fn,l=t.inverse,s=0,c="",u=void 0,d=void 0;function p(t,n,r){u&&(u.key=t,u.index=n,u.first=0===n,u.last=!!r,d&&(u.contextPath=d+t)),c+=i(e[t],{data:u,blockParams:a.blockParams([e[t],t],[d+t,null])})}if(t.data&&t.ids&&(d=a.appendContextPath(t.data.contextPath,t.ids[0])+"."),a.isFunction(e)&&(e=e.call(this)),t.data&&(u=a.createFrame(t.data)),e&&"object"==typeof e)if(a.isArray(e))for(var f=e.length;s<f;s++)s in e&&p(s,s,s===e.length-1);else if(n.g.Symbol&&e[n.g.Symbol.iterator]){for(var h=[],m=e[n.g.Symbol.iterator](),_=m.next();!_.done;_=m.next())h.push(_.value);for(f=(e=h).length;s<f;s++)p(s,s,s===e.length-1)}else r=void 0,Object.keys(e).forEach((function(e){void 0!==r&&p(r,s-1),r=e,s++})),void 0!==r&&p(r,s-1,!0);return 0===s&&(c=l(this)),c}))},e.exports=t.default},905:(e,t,n)=>{"use strict";t.__esModule=!0;var r,a=(r=n(728))&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new a.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))},e.exports=t.default},405:(e,t,n)=>{"use strict";t.__esModule=!0;var r,a=n(392),o=(r=n(728))&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new o.default("#if requires exactly one argument");return a.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||a.isEmpty(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,n){if(2!=arguments.length)throw new o.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}))},e.exports=t.default},702:(e,t)=>{"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",(function(){for(var t=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)t.push(arguments[r]);var a=1;null!=n.hash.level?a=n.hash.level:n.data&&null!=n.data.level&&(a=n.data.level),t[0]=a,e.log.apply(e,t)}))},e.exports=t.default},593:(e,t)=>{"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",(function(e,t,n){return e?n.lookupProperty(e,t):e}))},e.exports=t.default},978:(e,t,n)=>{"use strict";t.__esModule=!0;var r,a=n(392),o=(r=n(728))&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new o.default("#with requires exactly one argument");a.isFunction(e)&&(e=e.call(this));var n=t.fn;if(a.isEmpty(e))return t.inverse(this);var r=t.data;return t.data&&t.ids&&((r=a.createFrame(t.data)).contextPath=a.appendContextPath(t.data.contextPath,t.ids[0])),n(e,{data:r,blockParams:a.blockParams([e],[r&&r.contextPath])})}))},e.exports=t.default},572:(e,t,n)=>{"use strict";t.__esModule=!0,t.createNewLookupObject=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.extend.apply(void 0,[Object.create(null)].concat(t))};var r=n(392)},293:(e,t,n)=>{"use strict";t.__esModule=!0,t.createProtoAccessControl=function(e){var t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var n=Object.create(null);return n.__proto__=!1,{properties:{whitelist:r.createNewLookupObject(n,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:r.createNewLookupObject(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},t.resultIsAllowed=function(e,t,n){return function(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==o[e]&&(o[e]=!0,a.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}("function"==typeof e?t.methods:t.properties,n)},t.resetLoggedProperties=function(){Object.keys(o).forEach((function(e){delete o[e]}))};var r=n(572),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(37)),o=Object.create(null)},5:(e,t)=>{"use strict";t.__esModule=!0,t.wrapHelper=function(e,t){return"function"!=typeof e?e:function(){return arguments[arguments.length-1]=t(arguments[arguments.length-1]),e.apply(this,arguments)}}},37:(e,t,n)=>{"use strict";t.__esModule=!0;var r=n(392),a={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=r.indexOf(a.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=a.lookupLevel(e),"undefined"!=typeof console&&a.lookupLevel(a.level)<=e){var t=a.methodMap[e];console[t]||(t="log");for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];console[t].apply(console,r)}}};t.default=a,e.exports=t.default},982:(e,t,n)=>{"use strict";t.__esModule=!0,t.default=function(e){var t=void 0!==n.g?n.g:window,r=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=r),e}},e.exports=t.default},628:(e,t,n)=>{"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,n=i.COMPILER_REVISION;if(!(t>=i.LAST_COMPATIBLE_COMPILER_REVISION&&t<=i.COMPILER_REVISION)){if(t<i.LAST_COMPATIBLE_COMPILER_REVISION){var r=i.REVISION_CHANGES[n],a=i.REVISION_CHANGES[t];throw new o.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+a+").")}throw new o.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}},t.template=function(e,t){if(!t)throw new o.default("No environment passed to template");if(!e||!e.main)throw new o.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var n=e.compiler&&7===e.compiler[0],r={strict:function(e,t,n){if(!e||!(t in e))throw new o.default('"'+t+'" not defined in '+e,{loc:n});return r.lookupProperty(e,t)},lookupProperty:function(e,t){var n=e[t];return null==n||Object.prototype.hasOwnProperty.call(e,t)||c.resultIsAllowed(n,r.protoAccessControl,t)?n:void 0},lookup:function(e,t){for(var n=e.length,a=0;a<n;a++)if(null!=(e[a]&&r.lookupProperty(e[a],t)))return e[a][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:a.escapeExpression,invokePartial:function(n,r,i){i.hash&&(r=a.extend({},r,i.hash),i.ids&&(i.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,r,i);var l=a.extend({},i,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),s=t.VM.invokePartial.call(this,n,r,l);if(null==s&&t.compile&&(i.partials[i.name]=t.compile(n,e.compilerOptions,t),s=i.partials[i.name](r,l)),null!=s){if(i.indent){for(var c=s.split("\n"),u=0,d=c.length;u<d&&(c[u]||u+1!==d);u++)c[u]=i.indent+c[u];s=c.join("\n")}return s}throw new o.default("The partial "+i.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,a){var o=this.programs[e],i=this.fn(e);return t||a||r||n?o=u(this,e,i,t,n,r,a):o||(o=this.programs[e]=u(this,e,i)),o},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=a.extend({},t,e)),n},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function d(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=n.data;d._setup(n),!n.partial&&e.useData&&(a=function(e,t){return t&&"root"in t||((t=t?i.createFrame(t):{}).root=e),t}(t,a));var o=void 0,l=e.useBlockParams?[]:void 0;function s(t){return""+e.main(r,t,r.helpers,r.partials,a,l,o)}return e.useDepths&&(o=n.depths?t!=n.depths[0]?[t].concat(n.depths):n.depths:[t]),(s=p(e.main,s,r,n.depths||[],a,l))(t,n)}return d.isTop=!0,d._setup=function(o){if(o.partial)r.protoAccessControl=o.protoAccessControl,r.helpers=o.helpers,r.partials=o.partials,r.decorators=o.decorators,r.hooks=o.hooks;else{var i=a.extend({},t.helpers,o.helpers);!function(e,t){Object.keys(e).forEach((function(n){var r=e[n];e[n]=function(e,t){var n=t.lookupProperty;return s.wrapHelper(e,(function(e){return a.extend({lookupProperty:n},e)}))}(r,t)}))}(i,r),r.helpers=i,e.usePartial&&(r.partials=r.mergeIfNeeded(o.partials,t.partials)),(e.usePartial||e.useDecorators)&&(r.decorators=a.extend({},t.decorators,o.decorators)),r.hooks={},r.protoAccessControl=c.createProtoAccessControl(o);var u=o.allowCallsToHelperMissing||n;l.moveHelperToHooks(r,"helperMissing",u),l.moveHelperToHooks(r,"blockHelperMissing",u)}},d._child=function(t,n,a,i){if(e.useBlockParams&&!a)throw new o.default("must pass block params");if(e.useDepths&&!i)throw new o.default("must pass parent depths");return u(r,t,e[t],n,0,a,i)},d},t.wrapProgram=u,t.resolvePartial=function(e,t,n){return e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name],e},t.invokePartial=function(e,t,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var l=void 0;if(n.fn&&n.fn!==d&&function(){n.data=i.createFrame(n.data);var e=n.fn;l=n.data["partial-block"]=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=i.createFrame(n.data),n.data["partial-block"]=r,e(t,n)},e.partials&&(n.partials=a.extend({},n.partials,e.partials))}(),void 0===e&&l&&(e=l),void 0===e)throw new o.default("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)},t.noop=d;var r,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(392)),o=(r=n(728))&&r.__esModule?r:{default:r},i=n(67),l=n(638),s=n(5),c=n(293);function u(e,t,n,r,a,o,i){function l(t){var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],l=i;return!i||t==i[0]||t===e.nullContext&&null===i[0]||(l=[t].concat(i)),n(e,t,e.helpers,e.partials,a.data||r,o&&[a.blockParams].concat(o),l)}return(l=p(n,l,e,i,r,o)).program=t,l.depth=i?i.length:0,l.blockParams=a||0,l}function d(){return""}function p(e,t,n,r,o,i){if(e.decorator){var l={};t=e.decorator(t,l,n,r&&r[0],o,i,r),a.extend(t,l)}return t}},558:(e,t)=>{"use strict";function n(e){this.string=e}t.__esModule=!0,n.prototype.toString=n.prototype.toHTML=function(){return""+this.string},t.default=n,e.exports=t.default},392:(e,t)=>{"use strict";t.__esModule=!0,t.extend=i,t.indexOf=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return a.test(e)?e.replace(r,o):e},t.isEmpty=function(e){return!e&&0!==e||!(!c(e)||0!==e.length)},t.createFrame=function(e){var t=i({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},r=/[&<>"'`=]/g,a=/[&<>"'`=]/;function o(e){return n[e]}function i(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}var l=Object.prototype.toString;t.toString=l;var s=function(e){return"function"==typeof e};s(/x/)&&(t.isFunction=s=function(e){return"function"==typeof e&&"[object Function]"===l.call(e)}),t.isFunction=s;var c=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===l.call(e)};t.isArray=c},202:(e,t,n)=>{e.exports=n(834).default},60:()=>{const e=document.querySelector("[data-close-modal]"),t=document.querySelector("[data-open-modal]"),n=document.querySelector("[data-backdrob]"),r=function(){n.classList.toggle("is-hidden")};t.addEventListener("click",r),e.addEventListener("click",r),n.addEventListener("click",(function(){console.log("это клик в бекдроб")}))}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e={logoRefs:document.querySelector("#logo"),homeRefs:document.querySelector("#home"),libraryRefs:document.querySelector("#library"),searchForm:document.querySelector("#search-form"),watcheContainer:document.querySelector("#library__watched"),queueContainer:document.querySelector("#library__queue"),watcheBtn:document.querySelector("#btnWatched"),queueBtn:document.querySelector("#btnQueue"),hiddenElement:document.getElementById("box"),form:document.querySelector(".header__form"),btn:document.querySelector(".is-active"),header:document.querySelector("header"),sectionHome:document.querySelector(".home"),sectionLibrary:document.querySelector(".my-library"),cardList:document.querySelector(".cadr-list")};e.homeRefs.classList.add("current");const t=function(t){t.preventDefault(),e.homeRefs.classList.add("current"),e.libraryRefs.classList.remove("current"),e.form.style.display="flex",e.btn.style.display="none",e.header.classList.remove("my__library"),e.sectionLibrary.style.display="none",e.sectionHome.style.display="block"};e.queueBtn.addEventListener("click",(function(){e.watcheBtn.classList.remove("active__btn"),e.queueBtn.classList.add("active__btn"),e.queueContainer.style.display="block",e.watcheContainer.style.display="none"})),e.watcheBtn.addEventListener("click",(function(){e.queueBtn.classList.remove("active__btn"),e.watcheBtn.classList.add("active__btn"),e.queueContainer.style.display="none",e.watcheContainer.style.display="block"})),e.homeRefs.addEventListener("click",t),e.logoRefs.addEventListener("click",t),e.libraryRefs.addEventListener("click",(function(t){t.preventDefault(),e.homeRefs.classList.remove("current"),e.libraryRefs.classList.add("current"),e.form.style.display="none",e.btn.style.display="block",e.header.classList.add("my__library"),e.sectionHome.style.display="none",e.sectionLibrary.style.display="block"}));const r=document.querySelector(".pagination__list");var a=n(18),o=n.n(a);const i="https://api.themoviedb.org/",l="api_key=14f90a9673a8e38c0e2c74de4fe9bbab",s=function(){e.hiddenElement.scrollIntoView({block:"center",behavior:"smooth"})},c=new class{constructor(){this.searchQuery="",this.page=1,this.totalPage=0}async fetchPopularMovies(){const e=`${i}3/trending/all/day?${l}&page=${this.page}`,t=await fetch(e),n=await t.json();return this.totalPage=await n.total_pages,n}async fetchMovies(){const e=`${i}3/search/movie?${l}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=true`,t=await fetch(e),n=await t.json();return this.totalPage=await n.total_pages,n}resetPage(){this.page=1}incrementPage(){this.page!==this.totalPage&&(this.page+=1,console.log(this.page))}dincrementPage(){1!==this.page&&(this.page-=1)}get query(){return this.searchQuery}set query(e){this.searchQuery=e}},u=function(){s(),c.incrementPage(),""!==c.query?c.fetchMovies().then(p).catch((e=>console.log(e.message))):c.fetchPopularMovies().then(p).catch((e=>console.log(e.message)))},d=function(){s(),c.dincrementPage(),""!==c.query?c.fetchMovies().then(p).catch((e=>console.log(e.message))):c.fetchPopularMovies().then(p).catch((e=>console.log(e.message)))},p=async function(t){const n=t.page,a=t.total_pages,i=t.total_results,l=o()(t.results);!function(e,t,n){console.log(t);let a="";if(0!==n){if(a+='<li class="pagination__btn prev"></li>',t<6){for(let e=1;e<=t;e+=1)a+=`<li class="pagination__item ">${e}</li>`;return a+='<li class="pagination__btn next"></li>',void(r.innerHTML=a)}e<=5&&(a+=`<li class="pagination__item ">1</li>\n        <li class="pagination__item">2</li>\n        <li class="pagination__item">3</li>\n        <li class="pagination__item">4</li>\n        <li class="pagination__item">5</li>\n        <li class="pagination__item">6</li>\n        <li class="pagination__item">7</li>        \n        <li class="pagination__dots">...</li>\n        <li class="pagination__item">${t}</li>`),e>=6&&e<=t-4&&(a+=`<li class="pagination__item ">1</li>\n        <li class="pagination__dots">...</li>\n        <li class="pagination__item">${e-2}</li>\n        <li class="pagination__item">${e-1}</li>\n        <li class="pagination__item">${e}</li>\n        <li class="pagination__item">${e+1}</li>\n        <li class="pagination__item">${e+2}</li>        \n        <li class="pagination__dots">...</li>\n        <li class="pagination__item">${t}</li>`),e>=t-3&&(a+=`<li class="pagination__item ">1</li>\n        <li class="pagination__dots">...</li>\n        <li class="pagination__item">${t-6}</li>\n        <li class="pagination__item">${t-5}</li>\n        <li class="pagination__item">${t-4}</li>\n        <li class="pagination__item">${t-3}</li>\n        <li class="pagination__item">${t-2}</li>\n        <li class="pagination__item">${t-1}</li>        \n        <li class="pagination__item">${t}</li>`),a+='<li class="pagination__btn next"></li>',r.innerHTML=a,Array.from(document.querySelectorAll(".pagination__item")).forEach((t=>{t.textContent==e&&t.classList.add("item__active")}))}else r.innerHTML=""}(n,a,i);const f=document.querySelector(".prev"),h=document.querySelector(".next");Array.from(document.querySelectorAll(".pagination__item")).forEach((e=>{e.addEventListener("click",(()=>{c.page=Number(e.textContent),s(),""!==c.query?c.fetchMovies().then(p).catch((e=>console.log(e.message))):c.fetchPopularMovies().then(p).catch((e=>console.log(e.message)))}))})),i>1&&(h.addEventListener("click",u),f.addEventListener("click",d)),e.cardList.innerHTML=l};e.searchForm.addEventListener("submit",(function(e){e.preventDefault(),e.target.searchQuery.value&&""!==e.target.searchQuery.value&&(c.resetPage(),c.query=e.target.searchQuery.value,c.fetchMovies().then(p).catch((e=>console.log(e.message))))})),c.fetchPopularMovies().then(p).catch((e=>console.log(e.message))),n(60)})()})();