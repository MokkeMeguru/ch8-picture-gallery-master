// Compiled by ClojureScript 1.7.228 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__36354__auto__ = [];
var len__36282__auto___39281 = arguments.length;
var i__36283__auto___39282 = (0);
while(true){
if((i__36283__auto___39282 < len__36282__auto___39281)){
args__36354__auto__.push((arguments[i__36283__auto___39282]));

var G__39283 = (i__36283__auto___39282 + (1));
i__36283__auto___39282 = G__39283;
continue;
} else {
}
break;
}

var argseq__36355__auto__ = ((((1) < args__36354__auto__.length))?(new cljs.core.IndexedSeq(args__36354__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36355__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__39279){
var vec__39280 = p__39279;
var default$ = cljs.core.nth.call(null,vec__39280,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq39277){
var G__39278 = cljs.core.first.call(null,seq39277);
var seq39277__$1 = cljs.core.next.call(null,seq39277);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__39278,seq39277__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__36354__auto__ = [];
var len__36282__auto___39288 = arguments.length;
var i__36283__auto___39289 = (0);
while(true){
if((i__36283__auto___39289 < len__36282__auto___39288)){
args__36354__auto__.push((arguments[i__36283__auto___39289]));

var G__39290 = (i__36283__auto___39289 + (1));
i__36283__auto___39289 = G__39290;
continue;
} else {
}
break;
}

var argseq__36355__auto__ = ((((1) < args__36354__auto__.length))?(new cljs.core.IndexedSeq(args__36354__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36355__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__39286){
var vec__39287 = p__39286;
var default$ = cljs.core.nth.call(null,vec__39287,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq39284){
var G__39285 = cljs.core.first.call(null,seq39284);
var seq39284__$1 = cljs.core.next.call(null,seq39284);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__39285,seq39284__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__36354__auto__ = [];
var len__36282__auto___39293 = arguments.length;
var i__36283__auto___39294 = (0);
while(true){
if((i__36283__auto___39294 < len__36282__auto___39293)){
args__36354__auto__.push((arguments[i__36283__auto___39294]));

var G__39295 = (i__36283__auto___39294 + (1));
i__36283__auto___39294 = G__39295;
continue;
} else {
}
break;
}

var argseq__36355__auto__ = ((((1) < args__36354__auto__.length))?(new cljs.core.IndexedSeq(args__36354__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36355__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq39291){
var G__39292 = cljs.core.first.call(null,seq39291);
var seq39291__$1 = cljs.core.next.call(null,seq39291);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39292,seq39291__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__39296_SHARP_){
return cljs.core.assoc_in.call(null,p1__39296_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__36354__auto__ = [];
var len__36282__auto___39301 = arguments.length;
var i__36283__auto___39302 = (0);
while(true){
if((i__36283__auto___39302 < len__36282__auto___39301)){
args__36354__auto__.push((arguments[i__36283__auto___39302]));

var G__39303 = (i__36283__auto___39302 + (1));
i__36283__auto___39302 = G__39303;
continue;
} else {
}
break;
}

var argseq__36355__auto__ = ((((1) < args__36354__auto__.length))?(new cljs.core.IndexedSeq(args__36354__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36355__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__39299){
var vec__39300 = p__39299;
var default$ = cljs.core.nth.call(null,vec__39300,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq39297){
var G__39298 = cljs.core.first.call(null,seq39297);
var seq39297__$1 = cljs.core.next.call(null,seq39297);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39298,seq39297__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__36354__auto__ = [];
var len__36282__auto___39308 = arguments.length;
var i__36283__auto___39309 = (0);
while(true){
if((i__36283__auto___39309 < len__36282__auto___39308)){
args__36354__auto__.push((arguments[i__36283__auto___39309]));

var G__39310 = (i__36283__auto___39309 + (1));
i__36283__auto___39309 = G__39310;
continue;
} else {
}
break;
}

var argseq__36355__auto__ = ((((1) < args__36354__auto__.length))?(new cljs.core.IndexedSeq(args__36354__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36355__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__39306){
var vec__39307 = p__39306;
var default$ = cljs.core.nth.call(null,vec__39307,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq39304){
var G__39305 = cljs.core.first.call(null,seq39304);
var seq39304__$1 = cljs.core.next.call(null,seq39304);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39305,seq39304__$1);
});
/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__36354__auto__ = [];
var len__36282__auto___39315 = arguments.length;
var i__36283__auto___39316 = (0);
while(true){
if((i__36283__auto___39316 < len__36282__auto___39315)){
args__36354__auto__.push((arguments[i__36283__auto___39316]));

var G__39317 = (i__36283__auto___39316 + (1));
i__36283__auto___39316 = G__39317;
continue;
} else {
}
break;
}

var argseq__36355__auto__ = ((((2) < args__36354__auto__.length))?(new cljs.core.IndexedSeq(args__36354__auto__.slice((2)),(0))):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36355__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__39311_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__39311_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq39312){
var G__39313 = cljs.core.first.call(null,seq39312);
var seq39312__$1 = cljs.core.next.call(null,seq39312);
var G__39314 = cljs.core.first.call(null,seq39312__$1);
var seq39312__$2 = cljs.core.next.call(null,seq39312__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39313,G__39314,seq39312__$2);
});
/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__36354__auto__ = [];
var len__36282__auto___39322 = arguments.length;
var i__36283__auto___39323 = (0);
while(true){
if((i__36283__auto___39323 < len__36282__auto___39322)){
args__36354__auto__.push((arguments[i__36283__auto___39323]));

var G__39324 = (i__36283__auto___39323 + (1));
i__36283__auto___39323 = G__39324;
continue;
} else {
}
break;
}

var argseq__36355__auto__ = ((((2) < args__36354__auto__.length))?(new cljs.core.IndexedSeq(args__36354__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36355__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__39318_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__39318_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq39319){
var G__39320 = cljs.core.first.call(null,seq39319);
var seq39319__$1 = cljs.core.next.call(null,seq39319);
var G__39321 = cljs.core.first.call(null,seq39319__$1);
var seq39319__$2 = cljs.core.next.call(null,seq39319__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39320,G__39321,seq39319__$2);
});

//# sourceMappingURL=session.js.map