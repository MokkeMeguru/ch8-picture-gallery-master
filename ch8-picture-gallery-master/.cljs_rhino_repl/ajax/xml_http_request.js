// Compiled by ClojureScript 1.7.228 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__39239,handler){
var map__39240 = p__39239;
var map__39240__$1 = ((((!((map__39240 == null)))?((((map__39240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39240):map__39240);
var uri = cljs.core.get.call(null,map__39240__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__39240__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__39240__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__39240__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__39240__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__39240__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__39240__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__39240,map__39240__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__39238_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__39238_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__39240,map__39240__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___39248 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___39248)){
var response_type_39249 = temp__4657__auto___39248;
this$__$1.responseType = cljs.core.name.call(null,response_type_39249);
} else {
}

var seq__39242_39250 = cljs.core.seq.call(null,headers);
var chunk__39243_39251 = null;
var count__39244_39252 = (0);
var i__39245_39253 = (0);
while(true){
if((i__39245_39253 < count__39244_39252)){
var vec__39246_39254 = cljs.core._nth.call(null,chunk__39243_39251,i__39245_39253);
var k_39255 = cljs.core.nth.call(null,vec__39246_39254,(0),null);
var v_39256 = cljs.core.nth.call(null,vec__39246_39254,(1),null);
this$__$1.setRequestHeader(k_39255,v_39256);

var G__39257 = seq__39242_39250;
var G__39258 = chunk__39243_39251;
var G__39259 = count__39244_39252;
var G__39260 = (i__39245_39253 + (1));
seq__39242_39250 = G__39257;
chunk__39243_39251 = G__39258;
count__39244_39252 = G__39259;
i__39245_39253 = G__39260;
continue;
} else {
var temp__4657__auto___39261 = cljs.core.seq.call(null,seq__39242_39250);
if(temp__4657__auto___39261){
var seq__39242_39262__$1 = temp__4657__auto___39261;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39242_39262__$1)){
var c__35814__auto___39263 = cljs.core.chunk_first.call(null,seq__39242_39262__$1);
var G__39264 = cljs.core.chunk_rest.call(null,seq__39242_39262__$1);
var G__39265 = c__35814__auto___39263;
var G__39266 = cljs.core.count.call(null,c__35814__auto___39263);
var G__39267 = (0);
seq__39242_39250 = G__39264;
chunk__39243_39251 = G__39265;
count__39244_39252 = G__39266;
i__39245_39253 = G__39267;
continue;
} else {
var vec__39247_39268 = cljs.core.first.call(null,seq__39242_39262__$1);
var k_39269 = cljs.core.nth.call(null,vec__39247_39268,(0),null);
var v_39270 = cljs.core.nth.call(null,vec__39247_39268,(1),null);
this$__$1.setRequestHeader(k_39269,v_39270);

var G__39271 = cljs.core.next.call(null,seq__39242_39262__$1);
var G__39272 = null;
var G__39273 = (0);
var G__39274 = (0);
seq__39242_39250 = G__39271;
chunk__39243_39251 = G__39272;
count__39244_39252 = G__39273;
i__39245_39253 = G__39274;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__34488__auto__ = body;
if(cljs.core.truth_(or__34488__auto__)){
return or__34488__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map