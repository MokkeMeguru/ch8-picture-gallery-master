// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37564_37578 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37565_37579 = null;
var count__37566_37580 = (0);
var i__37567_37581 = (0);
while(true){
if((i__37567_37581 < count__37566_37580)){
var f_37582 = cljs.core._nth.call(null,chunk__37565_37579,i__37567_37581);
cljs.core.println.call(null,"  ",f_37582);

var G__37583 = seq__37564_37578;
var G__37584 = chunk__37565_37579;
var G__37585 = count__37566_37580;
var G__37586 = (i__37567_37581 + (1));
seq__37564_37578 = G__37583;
chunk__37565_37579 = G__37584;
count__37566_37580 = G__37585;
i__37567_37581 = G__37586;
continue;
} else {
var temp__4657__auto___37587 = cljs.core.seq.call(null,seq__37564_37578);
if(temp__4657__auto___37587){
var seq__37564_37588__$1 = temp__4657__auto___37587;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37564_37588__$1)){
var c__35814__auto___37589 = cljs.core.chunk_first.call(null,seq__37564_37588__$1);
var G__37590 = cljs.core.chunk_rest.call(null,seq__37564_37588__$1);
var G__37591 = c__35814__auto___37589;
var G__37592 = cljs.core.count.call(null,c__35814__auto___37589);
var G__37593 = (0);
seq__37564_37578 = G__37590;
chunk__37565_37579 = G__37591;
count__37566_37580 = G__37592;
i__37567_37581 = G__37593;
continue;
} else {
var f_37594 = cljs.core.first.call(null,seq__37564_37588__$1);
cljs.core.println.call(null,"  ",f_37594);

var G__37595 = cljs.core.next.call(null,seq__37564_37588__$1);
var G__37596 = null;
var G__37597 = (0);
var G__37598 = (0);
seq__37564_37578 = G__37595;
chunk__37565_37579 = G__37596;
count__37566_37580 = G__37597;
i__37567_37581 = G__37598;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37599 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__34488__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__34488__auto__)){
return or__34488__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37599);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37599)))?cljs.core.second.call(null,arglists_37599):arglists_37599));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37568 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37569 = null;
var count__37570 = (0);
var i__37571 = (0);
while(true){
if((i__37571 < count__37570)){
var vec__37572 = cljs.core._nth.call(null,chunk__37569,i__37571);
var name = cljs.core.nth.call(null,vec__37572,(0),null);
var map__37573 = cljs.core.nth.call(null,vec__37572,(1),null);
var map__37573__$1 = ((((!((map__37573 == null)))?((((map__37573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37573):map__37573);
var doc = cljs.core.get.call(null,map__37573__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__37573__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__37600 = seq__37568;
var G__37601 = chunk__37569;
var G__37602 = count__37570;
var G__37603 = (i__37571 + (1));
seq__37568 = G__37600;
chunk__37569 = G__37601;
count__37570 = G__37602;
i__37571 = G__37603;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37568);
if(temp__4657__auto__){
var seq__37568__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37568__$1)){
var c__35814__auto__ = cljs.core.chunk_first.call(null,seq__37568__$1);
var G__37604 = cljs.core.chunk_rest.call(null,seq__37568__$1);
var G__37605 = c__35814__auto__;
var G__37606 = cljs.core.count.call(null,c__35814__auto__);
var G__37607 = (0);
seq__37568 = G__37604;
chunk__37569 = G__37605;
count__37570 = G__37606;
i__37571 = G__37607;
continue;
} else {
var vec__37575 = cljs.core.first.call(null,seq__37568__$1);
var name = cljs.core.nth.call(null,vec__37575,(0),null);
var map__37576 = cljs.core.nth.call(null,vec__37575,(1),null);
var map__37576__$1 = ((((!((map__37576 == null)))?((((map__37576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37576):map__37576);
var doc = cljs.core.get.call(null,map__37576__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__37576__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__37608 = cljs.core.next.call(null,seq__37568__$1);
var G__37609 = null;
var G__37610 = (0);
var G__37611 = (0);
seq__37568 = G__37608;
chunk__37569 = G__37609;
count__37570 = G__37610;
i__37571 = G__37611;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map