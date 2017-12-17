// Compiled by ClojureScript 1.7.228 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__39088_39092 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__39089_39093 = null;
var count__39090_39094 = (0);
var i__39091_39095 = (0);
while(true){
if((i__39091_39095 < count__39090_39094)){
var k_39096 = cljs.core._nth.call(null,chunk__39089_39093,i__39091_39095);
var v_39097 = (b[k_39096]);
(a[k_39096] = v_39097);

var G__39098 = seq__39088_39092;
var G__39099 = chunk__39089_39093;
var G__39100 = count__39090_39094;
var G__39101 = (i__39091_39095 + (1));
seq__39088_39092 = G__39098;
chunk__39089_39093 = G__39099;
count__39090_39094 = G__39100;
i__39091_39095 = G__39101;
continue;
} else {
var temp__4657__auto___39102 = cljs.core.seq.call(null,seq__39088_39092);
if(temp__4657__auto___39102){
var seq__39088_39103__$1 = temp__4657__auto___39102;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39088_39103__$1)){
var c__35814__auto___39104 = cljs.core.chunk_first.call(null,seq__39088_39103__$1);
var G__39105 = cljs.core.chunk_rest.call(null,seq__39088_39103__$1);
var G__39106 = c__35814__auto___39104;
var G__39107 = cljs.core.count.call(null,c__35814__auto___39104);
var G__39108 = (0);
seq__39088_39092 = G__39105;
chunk__39089_39093 = G__39106;
count__39090_39094 = G__39107;
i__39091_39095 = G__39108;
continue;
} else {
var k_39109 = cljs.core.first.call(null,seq__39088_39103__$1);
var v_39110 = (b[k_39109]);
(a[k_39109] = v_39110);

var G__39111 = cljs.core.next.call(null,seq__39088_39103__$1);
var G__39112 = null;
var G__39113 = (0);
var G__39114 = (0);
seq__39088_39092 = G__39111;
chunk__39089_39093 = G__39112;
count__39090_39094 = G__39113;
i__39091_39095 = G__39114;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__35417__auto__,writer__35418__auto__,opt__35419__auto__){
return cljs.core._write.call(null,writer__35418__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__35417__auto__,writer__35418__auto__,opt__35419__auto__){
return cljs.core._write.call(null,writer__35418__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args39115 = [];
var len__36282__auto___39118 = arguments.length;
var i__36283__auto___39119 = (0);
while(true){
if((i__36283__auto___39119 < len__36282__auto___39118)){
args39115.push((arguments[i__36283__auto___39119]));

var G__39120 = (i__36283__auto___39119 + (1));
i__36283__auto___39119 = G__39120;
continue;
} else {
}
break;
}

var G__39117 = args39115.length;
switch (G__39117) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39115.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__39122 = (i + (2));
var G__39123 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__39122;
ret = G__39123;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__35417__auto__,writer__35418__auto__,opt__35419__auto__){
return cljs.core._write.call(null,writer__35418__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__35417__auto__,writer__35418__auto__,opt__35419__auto__){
return cljs.core._write.call(null,writer__35418__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__39124_39128 = cljs.core.seq.call(null,v);
var chunk__39125_39129 = null;
var count__39126_39130 = (0);
var i__39127_39131 = (0);
while(true){
if((i__39127_39131 < count__39126_39130)){
var x_39132 = cljs.core._nth.call(null,chunk__39125_39129,i__39127_39131);
ret.push(x_39132);

var G__39133 = seq__39124_39128;
var G__39134 = chunk__39125_39129;
var G__39135 = count__39126_39130;
var G__39136 = (i__39127_39131 + (1));
seq__39124_39128 = G__39133;
chunk__39125_39129 = G__39134;
count__39126_39130 = G__39135;
i__39127_39131 = G__39136;
continue;
} else {
var temp__4657__auto___39137 = cljs.core.seq.call(null,seq__39124_39128);
if(temp__4657__auto___39137){
var seq__39124_39138__$1 = temp__4657__auto___39137;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39124_39138__$1)){
var c__35814__auto___39139 = cljs.core.chunk_first.call(null,seq__39124_39138__$1);
var G__39140 = cljs.core.chunk_rest.call(null,seq__39124_39138__$1);
var G__39141 = c__35814__auto___39139;
var G__39142 = cljs.core.count.call(null,c__35814__auto___39139);
var G__39143 = (0);
seq__39124_39128 = G__39140;
chunk__39125_39129 = G__39141;
count__39126_39130 = G__39142;
i__39127_39131 = G__39143;
continue;
} else {
var x_39144 = cljs.core.first.call(null,seq__39124_39138__$1);
ret.push(x_39144);

var G__39145 = cljs.core.next.call(null,seq__39124_39138__$1);
var G__39146 = null;
var G__39147 = (0);
var G__39148 = (0);
seq__39124_39128 = G__39145;
chunk__39125_39129 = G__39146;
count__39126_39130 = G__39147;
i__39127_39131 = G__39148;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__35417__auto__,writer__35418__auto__,opt__35419__auto__){
return cljs.core._write.call(null,writer__35418__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__35417__auto__,writer__35418__auto__,opt__35419__auto__){
return cljs.core._write.call(null,writer__35418__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__39149_39153 = cljs.core.seq.call(null,v);
var chunk__39150_39154 = null;
var count__39151_39155 = (0);
var i__39152_39156 = (0);
while(true){
if((i__39152_39156 < count__39151_39155)){
var x_39157 = cljs.core._nth.call(null,chunk__39150_39154,i__39152_39156);
ret.push(x_39157);

var G__39158 = seq__39149_39153;
var G__39159 = chunk__39150_39154;
var G__39160 = count__39151_39155;
var G__39161 = (i__39152_39156 + (1));
seq__39149_39153 = G__39158;
chunk__39150_39154 = G__39159;
count__39151_39155 = G__39160;
i__39152_39156 = G__39161;
continue;
} else {
var temp__4657__auto___39162 = cljs.core.seq.call(null,seq__39149_39153);
if(temp__4657__auto___39162){
var seq__39149_39163__$1 = temp__4657__auto___39162;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39149_39163__$1)){
var c__35814__auto___39164 = cljs.core.chunk_first.call(null,seq__39149_39163__$1);
var G__39165 = cljs.core.chunk_rest.call(null,seq__39149_39163__$1);
var G__39166 = c__35814__auto___39164;
var G__39167 = cljs.core.count.call(null,c__35814__auto___39164);
var G__39168 = (0);
seq__39149_39153 = G__39165;
chunk__39150_39154 = G__39166;
count__39151_39155 = G__39167;
i__39152_39156 = G__39168;
continue;
} else {
var x_39169 = cljs.core.first.call(null,seq__39149_39163__$1);
ret.push(x_39169);

var G__39170 = cljs.core.next.call(null,seq__39149_39163__$1);
var G__39171 = null;
var G__39172 = (0);
var G__39173 = (0);
seq__39149_39153 = G__39170;
chunk__39150_39154 = G__39171;
count__39151_39155 = G__39172;
i__39152_39156 = G__39173;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__35417__auto__,writer__35418__auto__,opt__35419__auto__){
return cljs.core._write.call(null,writer__35418__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__39174_39178 = cljs.core.seq.call(null,v);
var chunk__39175_39179 = null;
var count__39176_39180 = (0);
var i__39177_39181 = (0);
while(true){
if((i__39177_39181 < count__39176_39180)){
var x_39182 = cljs.core._nth.call(null,chunk__39175_39179,i__39177_39181);
ret.push(x_39182);

var G__39183 = seq__39174_39178;
var G__39184 = chunk__39175_39179;
var G__39185 = count__39176_39180;
var G__39186 = (i__39177_39181 + (1));
seq__39174_39178 = G__39183;
chunk__39175_39179 = G__39184;
count__39176_39180 = G__39185;
i__39177_39181 = G__39186;
continue;
} else {
var temp__4657__auto___39187 = cljs.core.seq.call(null,seq__39174_39178);
if(temp__4657__auto___39187){
var seq__39174_39188__$1 = temp__4657__auto___39187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39174_39188__$1)){
var c__35814__auto___39189 = cljs.core.chunk_first.call(null,seq__39174_39188__$1);
var G__39190 = cljs.core.chunk_rest.call(null,seq__39174_39188__$1);
var G__39191 = c__35814__auto___39189;
var G__39192 = cljs.core.count.call(null,c__35814__auto___39189);
var G__39193 = (0);
seq__39174_39178 = G__39190;
chunk__39175_39179 = G__39191;
count__39176_39180 = G__39192;
i__39177_39181 = G__39193;
continue;
} else {
var x_39194 = cljs.core.first.call(null,seq__39174_39188__$1);
ret.push(x_39194);

var G__39195 = cljs.core.next.call(null,seq__39174_39188__$1);
var G__39196 = null;
var G__39197 = (0);
var G__39198 = (0);
seq__39174_39178 = G__39195;
chunk__39175_39179 = G__39196;
count__39176_39180 = G__39197;
i__39177_39181 = G__39198;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__35417__auto__,writer__35418__auto__,opt__35419__auto__){
return cljs.core._write.call(null,writer__35418__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__35417__auto__,writer__35418__auto__,opt__35419__auto__){
return cljs.core._write.call(null,writer__35418__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args39199 = [];
var len__36282__auto___39210 = arguments.length;
var i__36283__auto___39211 = (0);
while(true){
if((i__36283__auto___39211 < len__36282__auto___39210)){
args39199.push((arguments[i__36283__auto___39211]));

var G__39212 = (i__36283__auto___39211 + (1));
i__36283__auto___39211 = G__39212;
continue;
} else {
}
break;
}

var G__39201 = args39199.length;
switch (G__39201) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39199.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__39202 = obj;
G__39202.push(kfn.call(null,k),vfn.call(null,v));

return G__39202;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x39203 = cljs.core.clone.call(null,handlers);
x39203.forEach = ((function (x39203,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__39204 = cljs.core.seq.call(null,coll);
var chunk__39205 = null;
var count__39206 = (0);
var i__39207 = (0);
while(true){
if((i__39207 < count__39206)){
var vec__39208 = cljs.core._nth.call(null,chunk__39205,i__39207);
var k = cljs.core.nth.call(null,vec__39208,(0),null);
var v = cljs.core.nth.call(null,vec__39208,(1),null);
f.call(null,v,k);

var G__39214 = seq__39204;
var G__39215 = chunk__39205;
var G__39216 = count__39206;
var G__39217 = (i__39207 + (1));
seq__39204 = G__39214;
chunk__39205 = G__39215;
count__39206 = G__39216;
i__39207 = G__39217;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39204);
if(temp__4657__auto__){
var seq__39204__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39204__$1)){
var c__35814__auto__ = cljs.core.chunk_first.call(null,seq__39204__$1);
var G__39218 = cljs.core.chunk_rest.call(null,seq__39204__$1);
var G__39219 = c__35814__auto__;
var G__39220 = cljs.core.count.call(null,c__35814__auto__);
var G__39221 = (0);
seq__39204 = G__39218;
chunk__39205 = G__39219;
count__39206 = G__39220;
i__39207 = G__39221;
continue;
} else {
var vec__39209 = cljs.core.first.call(null,seq__39204__$1);
var k = cljs.core.nth.call(null,vec__39209,(0),null);
var v = cljs.core.nth.call(null,vec__39209,(1),null);
f.call(null,v,k);

var G__39222 = cljs.core.next.call(null,seq__39204__$1);
var G__39223 = null;
var G__39224 = (0);
var G__39225 = (0);
seq__39204 = G__39222;
chunk__39205 = G__39223;
count__39206 = G__39224;
i__39207 = G__39225;
continue;
}
} else {
return null;
}
}
break;
}
});})(x39203,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x39203;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args39226 = [];
var len__36282__auto___39232 = arguments.length;
var i__36283__auto___39233 = (0);
while(true){
if((i__36283__auto___39233 < len__36282__auto___39232)){
args39226.push((arguments[i__36283__auto___39233]));

var G__39234 = (i__36283__auto___39233 + (1));
i__36283__auto___39233 = G__39234;
continue;
} else {
}
break;
}

var G__39228 = args39226.length;
switch (G__39228) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39226.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit39229 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit39229 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta39230){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta39230 = meta39230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit39229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39231,meta39230__$1){
var self__ = this;
var _39231__$1 = this;
return (new cognitect.transit.t_cognitect$transit39229(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta39230__$1));
});

cognitect.transit.t_cognitect$transit39229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39231){
var self__ = this;
var _39231__$1 = this;
return self__.meta39230;
});

cognitect.transit.t_cognitect$transit39229.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit39229.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit39229.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit39229.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit39229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta39230","meta39230",1692875939,null)], null);
});

cognitect.transit.t_cognitect$transit39229.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit39229.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit39229";

cognitect.transit.t_cognitect$transit39229.cljs$lang$ctorPrWriter = (function (this__35417__auto__,writer__35418__auto__,opt__35419__auto__){
return cljs.core._write.call(null,writer__35418__auto__,"cognitect.transit/t_cognitect$transit39229");
});

cognitect.transit.__GT_t_cognitect$transit39229 = (function cognitect$transit$__GT_t_cognitect$transit39229(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta39230){
return (new cognitect.transit.t_cognitect$transit39229(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta39230));
});

}

return (new cognitect.transit.t_cognitect$transit39229(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__34488__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__34488__auto__)){
return or__34488__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map