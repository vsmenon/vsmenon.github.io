self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,H={
boj:function(d){var w,v=d.length,u=new Int32Array(v)
for(w=0;w<v;++w)u[w]=d[w].a
return u},
bwS:function(d){var w,v,u,t=d.length,s=new Float32Array(t*2)
for(w=0,v=0;w<t;++w,v+=2){u=d[w]
s[v]=u.a
s[v+1]=u.b}return s}},J,P={
boO:function(d,e,f){var w=H.boj(f),v=H.bwS(e)
if($.SZ==null)$.SZ=new H.afe()
return new H.LL(d,v,w)}},W,Y,U={Uv:function Uv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},ajD:function ajD(d){this.a=d},ajC:function ajC(d,e){this.a=d
this.b=e},yh:function yh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},aEo:function aEo(d){this.a=d}},N,R,B={Xi:function Xi(d,e,f){this.c=d
this.d=e
this.a=f}},A,G,V,S,T={
ape:function(d,e,f){var w,v,u=f.a,t=e.a,s=Math.pow(u[0]-t[0],2)+Math.pow(u[1]-t[1],2)
if(s===0)return e
w=d.nf(0,e)
v=f.nf(0,e)
return e.a0(0,v.z7(C.E.P(w.DG(v)/s,0,1)))},
blz:function(d,e){var w,v,u,t,s,r,q,p={},o=e.a,n=d.nf(0,o),m=e.b,l=m.nf(0,o),k=e.d,j=k.nf(0,o),i=n.DG(l),h=l.DG(l),g=n.DG(j),f=j.DG(j)
if(0<=i&&i<=h&&0<=g&&g<=f)return d
w=e.c
v=[T.ape(d,o,m),T.ape(d,m,w),T.ape(d,w,k),T.ape(d,k,o)]
p.a=null
p.b=!1
u=new T.apd(p)
for(o=d.a,t=1/0,s=0;s<4;++s){r=v[s]
m=r.a
q=Math.sqrt(Math.pow(o[0]-m[0],2)+Math.pow(o[1]-m[1],2))
if(q<t){u.$1(r)
t=q}}return new T.apc(p).$0()},
boB:function(){var w=new E.bZ(new Float64Array(16))
w.ro()
return new T.a4e(w,new P.bK(x.V))},
baM:function(d,e){var w,v,u,t,s,r,q=new E.bZ(new Float64Array(16))
q.qh(d)
q.zr(q)
w=e.a
v=e.b
u=new E.cy(new Float64Array(3))
u.tG(w,v,0)
u=q.z2(u)
t=e.c
s=new E.cy(new Float64Array(3))
s.tG(t,v,0)
s=q.z2(s)
v=e.d
r=new E.cy(new Float64Array(3))
r.tG(t,v,0)
r=q.z2(r)
t=new E.cy(new Float64Array(3))
t.tG(w,v,0)
t=q.z2(t)
w=new E.cy(new Float64Array(3))
w.qh(u)
v=new E.cy(new Float64Array(3))
v.qh(s)
u=new E.cy(new Float64Array(3))
u.qh(r)
s=new E.cy(new Float64Array(3))
s.qh(t)
return new E.a1E(w,v,u,s)},
ba7:function(d,e){var w,v,u,t,s,r,q=[e.a,e.b,e.c,e.d]
for(w=C.m,v=0;v<4;++v){u=q[v]
t=T.blz(u,d).a
s=u.a
r=t[0]-s[0]
s=t[1]-s[1]
if(Math.abs(r)>Math.abs(w.a))w=new P.r(r,w.b)
if(Math.abs(s)>Math.abs(w.b))w=new P.r(w.a,s)}return T.b37(w)},
b37:function(d){return new P.r(P.agW(J.c7(d.a,9)),P.agW(J.c7(d.b,9)))},
bsq:function(d,e){if(J.m(d,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.y:C.p},
Ip:function Ip(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.x=f
_.z=g
_.ch=h
_.cy=i
_.a=j},
apd:function apd(d){this.a=d},
apc:function apc(d){this.a=d},
ON:function ON(d,e,f,g){var _=this
_.d=null
_.e=d
_.f=e
_.x=_.r=null
_.y=!1
_.ch=_.Q=_.z=null
_.cy=_.cx=0
_.db=null
_.nc$=f
_.a=null
_.b=g
_.c=null},
aKX:function aKX(){},
a4e:function a4e(d,e){this.a=d
this.U$=e},
On:function On(d){this.b=d},
Ss:function Ss(){}},M,D,Z,L,E={a1E:function a1E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},K={
boC:function(){return new K.rI(null)},
rI:function rI(d){this.a=d},
Rw:function Rw(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.f=f
_.y=_.x=_.r=null
_.nc$=g
_.a=null
_.b=h
_.c=null},
aTo:function aTo(d,e){this.a=d
this.b=e},
aTp:function aTp(d){this.a=d},
aTv:function aTv(d){this.a=d},
aTu:function aTu(d){this.a=d},
aTt:function aTt(d){this.a=d},
aTs:function aTs(d){this.a=d},
aTr:function aTr(d,e){this.a=d
this.b=e},
aTq:function aTq(d,e,f){this.a=d
this.b=e
this.c=f},
a5w:function a5w(d,e){this.b=d
this.a=e},
aCL:function aCL(d,e){this.a=d
this.b=e},
ST:function ST(){}},O={
b01:function(d,e,f,g,h){var w=new O.TS(e,g,f,H.b([],x.n),h,H.b([],x.Z))
w.ak4(d,e,f,g,h)
return w},
TS:function TS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aiw:function aiw(d){this.a=d},
aiv:function aiv(d){this.a=d},
aiu:function aiu(d){this.a=d},
aCK:function aCK(d){this.a=d
this.c=this.b=null},
aOG:function aOG(d,e){this.a=d
this.b=e},
hh:function hh(d,e,f){this.a=d
this.b=e
this.c=f},
a5x:function a5x(){}},Q,X,F
a.setFunctionNamesIfNecessary([H,P,U,B,T,E,K,O])
C=c[0]
H=a.updateHolder(c[1],H)
J=c[2]
P=a.updateHolder(c[3],P)
W=c[4]
Y=c[5]
U=a.updateHolder(c[6],U)
N=c[7]
R=c[8]
B=a.updateHolder(c[9],B)
A=c[10]
G=c[11]
V=c[12]
S=c[13]
T=a.updateHolder(c[14],T)
M=c[15]
D=c[16]
Z=c[17]
L=c[18]
E=a.updateHolder(c[19],E)
K=a.updateHolder(c[20],K)
O=a.updateHolder(c[21],O)
Q=c[22]
X=c[23]
F=c[24]
T.Ip.prototype={
G:function(){var w=x.z
return new T.ON(new N.aN(null,w),new N.aN(null,w),null,C.k)}}
T.ON.prototype={
gzf:function(){return this.y?this.x:H.j(H.v("Field '_controller' has not been initialized."))},
gLf:function(){var w=$.bD.h(0,this.e).gI()
w.toString
w=x.x.a(w).r1
w.toString
return this.a.d.OT(new P.O(0,0,0+w.a,0+w.b))},
gNk:function(){var w=$.bD.h(0,this.f).gI()
w.toString
w=x.x.a(w).r1
return new P.O(0,0,0+w.a,0+w.b)},
Mi:function(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this
if(a2.p(0,C.m)){a1.toString
w=new E.bZ(new Float64Array(16))
w.qh(a1)
return w}a0.a.toString
a1.toString
v=new E.bZ(new Float64Array(16))
v.qh(a1)
v.nY(0,a2.a,a2.b)
u=T.baM(v,a0.gNk())
w=a0.gLf()
if(w.a>=1/0||w.b>=1/0||w.c>=1/0||w.d>=1/0)return v
w=a0.gLf()
t=a0.cy
s=new E.bZ(new Float64Array(16))
s.ro()
r=w.c
q=w.a
p=r-q
o=w.d
w=w.b
n=o-w
s.nY(0,p/2,n/2)
s.PZ(t)
s.nY(0,-p/2,-n/2)
t=new E.cy(new Float64Array(3))
t.tG(q,w,0)
t=s.z2(t)
p=new E.cy(new Float64Array(3))
p.tG(r,w,0)
p=s.z2(p)
w=new E.cy(new Float64Array(3))
w.tG(r,o,0)
w=s.z2(w)
r=new E.cy(new Float64Array(3))
r.tG(q,o,0)
r=s.z2(r)
q=new Float64Array(3)
new E.cy(q).qh(t)
t=new Float64Array(3)
new E.cy(t).qh(p)
p=new Float64Array(3)
new E.cy(p).qh(w)
w=new Float64Array(3)
new E.cy(w).qh(r)
r=q[0]
o=t[0]
n=p[0]
m=w[0]
l=Math.min(r,Math.min(o,Math.min(n,m)))
q=q[1]
t=t[1]
p=p[1]
w=w[1]
k=Math.min(q,Math.min(t,Math.min(p,w)))
j=Math.max(r,Math.max(o,Math.max(n,m)))
i=Math.max(q,Math.max(t,Math.max(p,w)))
w=new E.cy(new Float64Array(3))
w.tG(l,k,0)
t=new E.cy(new Float64Array(3))
t.tG(j,k,0)
r=new E.cy(new Float64Array(3))
r.tG(j,i,0)
q=new E.cy(new Float64Array(3))
q.tG(l,i,0)
p=new E.cy(new Float64Array(3))
p.qh(w)
w=new E.cy(new Float64Array(3))
w.qh(t)
t=new E.cy(new Float64Array(3))
t.qh(r)
r=new E.cy(new Float64Array(3))
r.qh(q)
h=new E.a1E(p,w,t,r)
g=T.ba7(h,u)
if(g.p(0,C.m))return v
w=v.Qu().a
t=w[0]
w=w[1]
f=a1.Kk()
t-=g.a*f
w-=g.b*f
e=new E.bZ(new Float64Array(16))
e.qh(a1)
r=new E.cy(new Float64Array(3))
r.tG(t,w,0)
e.Zy(r)
d=T.ba7(h,T.baM(e,a0.gNk()))
if(d.p(0,C.m))return e
r=d.a===0
if(!r&&d.b!==0){w=new E.bZ(new Float64Array(16))
w.qh(a1)
return w}t=r?t:0
w=d.b===0?w:0
r=new E.bZ(new Float64Array(16))
r.qh(a1)
q=new E.cy(new Float64Array(3))
q.tG(t,w,0)
r.Zy(q)
return r},
a43:function(d,e){var w,v,u,t,s,r,q=this
if(e===1){d.toString
w=new E.bZ(new Float64Array(16))
w.qh(d)
return w}v=q.d.a.Kk()
w=q.gNk()
u=q.gLf()
t=q.gNk()
s=q.gLf()
r=C.h.P(Math.max(v*e,Math.max((w.c-w.a)/(u.c-u.a),(t.d-t.b)/(s.d-s.b))),q.a.z,2.5)
d.toString
w=new E.bZ(new Float64Array(16))
w.qh(d)
w.qP(0,r/v)
return w},
awj:function(d,e,f){var w,v,u,t
if(e===0){d.toString
w=new E.bZ(new Float64Array(16))
w.qh(d)
return w}v=this.d.z1(f)
d.toString
w=new E.bZ(new Float64Array(16))
w.qh(d)
u=v.a
t=v.b
w.nY(0,u,t)
w.PZ(-e)
w.nY(0,-u,-t)
return w},
SA:function(d){switch(d){case C.Mj:return!1
case C.tv:this.a.toString
return!1
case C.nz:case null:this.a.toString
return!0
default:throw H.e(H.t(y.b))}},
a2s:function(d){this.a.toString
if(Math.abs(0)>Math.abs(0))return C.tv
else return C.nz},
avH:function(d){var w,v=this
v.a.ch.$1(d)
if(v.gzf().gtc()){v.gzf().ru(0)
w=v.gzf()
w.sk(0,w.a)
w=v.r
if(w!=null)w.a.ah(0,v.gMp())
v.r=null}v.z=v.db=null
v.ch=v.d.a.Kk()
v.Q=v.d.z1(d.b)
v.cx=v.cy},
axl:function(d){var w,v,u,t,s,r,q=this,p=q.d.a.Kk(),o=d.b,n=q.d.z1(o),m=q.db
if(m===C.nz)m=q.db=q.a2s(d)
else if(m==null){m=q.a2s(d)
q.db=m}if(!q.SA(m))return
m=q.db
m.toString
switch(m){case C.tv:m=q.ch
m.toString
w=q.d
w.sk(0,q.a43(w.a,m*d.c/p))
v=q.d.z1(o)
m=q.d
w=m.a
u=q.Q
u.toString
m.sk(0,q.Mi(w,v.nf(0,u)))
t=q.d.z1(o)
o=q.Q
o.toString
if(!T.b37(o).p(0,T.b37(t)))q.Q=t
break
case C.Mj:m=d.f
if(m===0)return
w=q.cx
w.toString
s=w+m
m=q.d
m.sk(0,q.awj(m.a,q.cy-s,o))
q.cy=s
break
case C.nz:if(d.c!==1)return
if(q.z==null){m=q.Q
m.toString
q.z=T.bsq(m,n)}m=q.Q
m.toString
r=n.nf(0,m)
m=q.d
m.sk(0,q.Mi(m.a,r))
q.Q=q.d.z1(o)
break
default:throw H.e(H.t(y.b))}q.a.toString},
axh:function(d){var w,v,u,t,s,r,q,p=this
p.a.toString
p.Q=p.cx=p.ch=null
w=p.r
if(w!=null)w.a.ah(0,p.gMp())
w=p.gzf()
w.sk(0,w.a)
if(!p.SA(p.db)){p.z=null
return}if(p.db!==C.nz||d.a.a.gtT()<50){p.z=null
return}w=p.d.a.Qu().a
v=w[0]
w=w[1]
u=d.a.a
t=Math.log(0.0000135)
s=Math.log(0.0000135)
r=Math.log(10/u.gtT())
q=Math.log(135e-9)
t=new D.Ae(0.0000135,t,v,u.a,C.db).gJd()
u=new D.Ae(0.0000135,s,w,u.b,C.db).gJd()
s=x.L
p.r=new R.an(S.bw(C.fm,p.gzf(),null),new R.aG(new P.r(v,w),new P.r(t,u),s),s.i("an<aC.T>"))
p.gzf().e=P.ei(0,0,C.E.a2(r/q*1000),0,0)
p.r.a.qf(0,p.gMp())
p.gzf().nX(0)},
avJ:function(d){var w,v,u,t,s,r,q=this
if(x.C.b(d)){w=q.a.ch
v=d.grH(d)
u=d.guD()
w.$1(new B.rm(v,u==null?v:u))
if(!q.SA(C.tv)){q.a.toString
return}w=$.bD.h(0,q.e).gI()
w.toString
w=x.x.a(w).r1
w.toString
t=1-d.gKt().b/w.b
if(t===0)return
w=q.d
w.toString
s=w.z1(d.guD())
w=q.d
w.sk(0,q.a43(w.a,t))
w=q.d
w.toString
r=w.z1(d.guD())
w=q.d
w.sk(0,q.Mi(w.a,r.nf(0,s)))
q.a.toString}},
awW:function(){var w,v,u,t,s,r=this
if(!r.gzf().gtc()){r.z=null
w=r.r
if(w!=null)w.a.ah(0,r.gMp())
r.r=null
w=r.gzf()
w.sk(0,w.a)
return}w=r.d.a.Qu().a
v=w[0]
w=w[1]
u=r.d.z1(new P.r(v,w))
w=r.d
w.toString
v=r.r
t=v.b
v=v.a
s=w.z1(t.S(0,v.gk(v))).nf(0,u)
v=r.d
v.sk(0,r.Mi(v.a,s))},
axz:function(){this.C(new T.aKX())},
a7:function(){var w,v=this,u=null
v.af()
w=v.a.cy
v.d=w
w=w.U$
w.qY(w.c,new B.c1(v.gTx()),!1)
w=G.by(C.v,u,u,0,u,1,u,v)
v.y=!0
v.x=w},
oh:function(d){var w,v,u=this
u.qd(d)
d.toString
w=u.a
if(w.cy!==d.cy){w=u.gTx()
u.d.ah(0,w)
v=u.a.cy
u.d=v
v=v.U$
v.qY(v.c,new B.c1(w),!1)}},
m:function(d){var w=this
w.gzf().m(0)
w.d.ah(0,w.gTx())
w.a.toString
w.ajo(0)},
l:function(d,e){var w=this,v=null,u=w.d.a,t=T.lR(v,new T.hl(w.a.e,w.e),u,!0)
return T.IX(C.lI,D.d0(C.aW,t,C.D,!1,v,v,v,v,v,v,v,v,v,v,v,v,w.gaxg(),w.gavG(),w.gaxk(),v,v,v,v,v,v,v),w.f,v,v,w.gavI(),v)}}
T.a4e.prototype={
z1:function(d){var w,v,u=this.a,t=new E.bZ(new Float64Array(16))
if(t.zr(u)===0)H.j(P.ip(u,"other","Matrix cannot be inverted"))
u=d.a
w=d.b
v=new E.cy(new Float64Array(3))
v.tG(u,w,0)
v=t.z2(v).a
return new P.r(v[0],v[1])}}
T.On.prototype={
j:function(d){return this.b}}
T.Ss.prototype={
m:function(d){this.at(0)},
a9:function(){var w,v=this.c
v.toString
w=!U.c2(v)
v=this.nc$
if(v!=null)for(v=P.cC(v,v.r);v.w();)v.d.sqg(0,w)
this.nQ()}}
K.rI.prototype={
G:function(){var w=null
return new K.Rw(new N.aN(w,x.H),O.b01(w,8,1,16,w),T.boB(),w,C.k)}}
K.Rw.prototype={
awX:function(){var w=this,v=w.r,u=v.b
v=v.a
w.f.sk(0,u.S(0,v.gk(v)))
if(!w.x.gtc()){v=w.r
if(v!=null)v.a.ah(0,w.gTu())
w.r=null
v=w.x
v.sk(0,v.a)}},
axj:function(d){var w,v=this
if(v.x.grD()===C.a9){v.x.ru(0)
w=v.r
if(w!=null)w.a.ah(0,v.gTu())
v.r=null
w=v.x
w.sk(0,w.a)}},
axw:function(d){var w=this,v=w.f.z1(d.a.nf(0,T.fC(x.T.a($.bD.h(0,w.d).gI()).t7(0,null),C.m)))
w.C(new K.aTo(w,w.e.aKP(v)))},
a7:function(){var w=null
this.af()
this.x=G.by(C.v,w,w,0,w,1,w,this)},
l:function(d,e){var w=null,v=K.H(e,!1).n
return M.ck(E.cT(w,w,!1,w,w,1,w,w,w,!1,w,w,w,w,!0,w,w,w,L.w(L.i(e,C.b,x.h).gb_(),w,w,w,w,w,w,w),w,w,1),v.a,M.aq(w,new A.di(new K.aTp(this),w),C.e,C.AO,w,w,w,w,w,w,w,w,w,w),w,w,!1,w,w,w,H.b([this.gaLw(),this.gaGW()],x.t),w)},
gaLw:function(){var w=this.c
w.toString
return B.cF(K.H(w,!1).n.e,C.a0N,null,new K.aTv(this),C.S,null,"Reset")},
gaGW:function(){var w=this.c
w.toString
return B.cF(K.H(w,!1).n.e,C.CA,null,new K.aTt(this),C.S,null,"Edit")},
m:function(d){this.x.m(0)
this.ak_(0)}}
K.a5w.prototype={
nz:function(d,e){this.b.ny(0,new K.aCL(this,d))},
uW:function(d){return d.b!==this.b}}
K.ST.prototype={
m:function(d){this.at(0)},
a9:function(){var w,v=this.c
v.toString
w=!U.c2(v)
v=this.nc$
if(v!=null)for(v=P.cC(v,v.r);v.w();)v.d.sqg(0,w)
this.nQ()}}
O.TS.prototype={
ak4:function(d,e,f,g,h){var w,v,u,t,s,r=this,q=r.b,p=-q,o=q-r.c,n=Math.sqrt(3)/2*o
q=0+n
w=p+0.5*o
v=p+1.5*o
u=p+2*o
t=0-n
C.c.np(r.d,H.b([new P.r(0,p),new P.r(q,w),new P.r(q,v),new P.r(q,v),new P.r(0,u),new P.r(0,u),new P.r(t,v),new P.r(t,v),new P.r(t,w)],x.n))
if(d!=null)C.c.np(r.f,d)
else{s=r.a2A(null)
for(q=r.f;s!=null;){q.push(s)
s=r.a2A(s)}}},
gad:function(d){return new O.aCK(this.f)},
a2F:function(d){var w=this.a,v=-w
if(d<=0)v-=d
else w-=d
return new O.aOG(v,w)},
a2A:function(d){var w,v,u,t=this
if(d==null)return new O.hh(-t.a,0,C.lt)
w=d.a
v=t.a2F(w)
if(w>=t.a&&d.b>=v.b)return null
u=d.b
if(u>=v.b){++w
return new O.hh(w,t.a2F(w).a,C.lt)}return new O.hh(w,u+1,C.lt)},
guX:function(d){var w=this.b,v=this.a
return new P.av((v*2+1)*(Math.sqrt(3)/2*w)*2,2*(w+v*1.5*w))},
aKP:function(d){var w=this,v=w.guX(w),u=d.b-w.guX(w).b/2,t=w.b,s=new O.hh(C.E.a2((Math.sqrt(3)/3*(d.a-v.a/2)-0.3333333333333333*u)/t),C.E.a2(0.6666666666666666*u/t),C.lt)
v=C.NB.ga9d().a
u=s.ga9d().a
if(C.h.ri(Math.abs(v[0]-u[0])+Math.abs(v[1]-u[1])+Math.abs(v[2]-u[2]),2)>w.a)return null
return C.c.Jf(w.f,new O.aiw(s))},
adY:function(d,e){var w=this,v=w.b,u=d.b,t=w.d,s=H.bt(t).i("bv<1,r*>"),r=P.b3(new H.bv(t,new O.aiv(new P.jb(Math.sqrt(3)*v*d.a+Math.sqrt(3)/2*v*u+w.guX(w).a/2,1.5*v*u+w.guX(w).b/2,x.e)),s),!0,s.i("cp.E"))
return P.boO(C.yV,r,P.cz(r.length,e,!1,x.G))},
aG7:function(d){var w=this
if(J.m(w.e,d))return w
return O.b01(w.f,w.a,w.c,w.b,d)},
aG6:function(d,e){var w,v,u=this,t=new O.hh(d.a,d.b,e),s=u.f,r=C.c.aIF(s,new O.aiu(d))
if(J.m(u.qC(0,r),d)&&J.m(d.c,e))return u
w=P.b3(s,!0,x.y)
w[r]=t
v=u.e
if(d.p(0,v))v=t
return O.b01(w,u.a,u.c,u.b,v)},
$iR:1}
O.aCK.prototype={
w:function(){var w,v=this,u=v.b
u=u==null?v.b=0:v.b=u+1
w=v.a
if(u>=w.length){v.c=null
return!1}v.c=w[u]
return!0},
gL:function(d){return this.c}}
O.aOG.prototype={}
O.hh.prototype={
j:function(d){return"BoardPoint("+this.a+", "+this.b+", "+H.c(this.c)+")"},
p:function(d,e){if(e==null)return!1
if(J.b5(e)!==H.aM(this))return!1
return e instanceof O.hh&&e.a===this.a&&e.b===this.b},
gW:function(d){return P.bq(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
ga9d:function(){var w=this.a,v=this.b,u=new E.cy(new Float64Array(3))
u.tG(w,v,-w-v)
return u}}
O.a5x.prototype={}
U.Uv.prototype={
l:function(d,e){var w=this.c,v=H.aw(w).i("ld<eG.E,yh*>")
return T.bn(P.b3(new H.ld(w,new U.ajD(this),v),!0,v.i("R.E")),C.l,null,C.b6,C.j,null)}}
U.yh.prototype={
l:function(d,e){var w=null,v=!this.d?w:C.a08
return M.aq(w,Z.b1F(!1,v,C.e,C.Oj,0,2,this.c,w,4,w,w,8,w,4,w,w,new U.aEo(this),C.ee,w,w),C.e,w,w,w,w,60,w,w,C.Yw,w,w,60)}}
B.Xi.prototype={
l:function(d,e){var w,v,u=null
P.he(C.Ak)
w=P.dZ([C.o,C.uU,C.uL,C.AW,C.AO],x.G)
v=this.c
return T.aJ(H.b([L.w(""+v.a+", "+v.b,u,u,u,u,C.yF,C.kU,u),new U.Uv(w,v.c,this.d,u)],x.t),C.aI,u,C.i,C.j)}}
E.a1E.prototype={}
var z=a.updateTypes(["~()","ao*(hh*)","~(rm)","~(KS)","~(BE)","~(kz)","~(rm*)","~(f5*)","~(hh*)","yh*(q*)"])
T.apd.prototype={
$1:function(d){var w=this.a
w.b=!0
return w.a=d},
$S:743}
T.apc.prototype={
$0:function(){var w=this.a
return w.b?w.a:H.j(H.v("Local 'closestOverall' has not been initialized."))},
$S:744}
T.aKX.prototype={
$0:function(){},
$S:0}
K.aTo.prototype={
$0:function(){var w=this.a
w.e=w.e.aG7(this.b)},
$S:0}
K.aTp.prototype={
$2:function(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=this.a
if(q.y==null){w=new E.bZ(new Float64Array(16))
w.ro()
v=q.e
v=v.guX(v)
u=q.e
w.nY(0,s/2-v.a/2,r/2-u.guX(u).b/2)
q.y=w
q.f.sk(0,w)}w=q.e
w=w.guX(w)
return T.kf(D.d0(C.aW,new T.Ip(new V.aF(s,r,s,r),T.b1K(T.hA(t,t,t,new K.a5w(q.e,t),w)),!1,0.01,q.gaxi(),q.f,q.d),C.D,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,q.gaxv(),t,t,t),t)},
$S:745}
K.aTv.prototype={
$0:function(){var w=this.a
w.C(new K.aTu(w))},
$C:"$0",
$R:0,
$S:0}
K.aTu.prototype={
$0:function(){var w,v,u=this.a,t=u.x
t.sk(0,t.a)
t=u.f.a
w=u.y
v=u.x
u.r=new R.an(v,new G.o8(t,w),x.d.i("an<aC.T>"))
v.e=C.BF
v.qf(0,u.gTu())
u.x.nX(0)},
$S:0}
K.aTt.prototype={
$0:function(){var w,v=this.a
if(v.e.e==null)return
w=v.c
w.toString
E.b3N(new K.aTs(v),w,x.M)},
$C:"$0",
$R:0,
$S:0}
K.aTs.prototype={
$1:function(d){var w=null,v=this.a
return M.aq(w,new B.Xi(v.e.e,new K.aTr(v,d),w),C.e,w,w,w,w,150,w,w,C.lH,w,w,1/0)},
$S:746}
K.aTr.prototype={
$1:function(d){var w=this.a
w.C(new K.aTq(w,d,this.b))},
$S:747}
K.aTq.prototype={
$0:function(){var w=this.a,v=w.e
w.e=v.aG6(v.e,this.b)
K.c9(this.c,!1).rR(0,null)},
$S:0}
K.aCL.prototype={
$1:function(d){var w,v=d.c,u=this.a.b,t=J.m(u.e,d)?0.7:1
v.toString
w=u.adY(d,P.aE(C.h.a2(255*t),v.gk(v)>>>16&255,v.gk(v)>>>8&255,v.gk(v)&255))
this.b.AF(0,w,C.lb,new H.b7(new H.bb()))},
$S:z+8}
O.aiw.prototype={
$1:function(d){var w=this.a
return d.a===w.a&&d.b===w.b},
$S:z+1}
O.aiv.prototype={
$1:function(d){var w=this.a
return new P.r(d.a+w.a,d.b+w.b)},
$S:219}
O.aiu.prototype={
$1:function(d){var w=this.a
return d.a===w.a&&d.b===w.b},
$S:z+1}
U.ajD.prototype={
$1:function(d){var w=this.a
return new U.yh(d,J.m(d,w.d),new U.ajC(w,d),null)},
$S:z+9}
U.ajC.prototype={
$0:function(){this.a.e.$1(this.b)},
$S:0}
U.aEo.prototype={
$0:function(){this.a.e.$0()},
$S:0};(function aliases(){var w=T.Ss.prototype
w.ajo=w.m
w=K.ST.prototype
w.ak_=w.m})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u
var u
w(u=T.ON.prototype,"gavG","avH",2)
w(u,"gaxk","axl",3)
w(u,"gaxg","axh",4)
w(u,"gavI","avJ",5)
v(u,"gMp","awW",0)
v(u,"gTx","axz",0)
v(u=K.Rw.prototype,"gTu","awX",0)
w(u,"gaxi","axj",6)
w(u,"gaxv","axw",7)})();(function inheritance(){var w=a.mixin,v=a.inheritMany,u=a.inherit
v(N.D,[T.Ip,K.rI])
v(H.bJ,[T.apd,T.apc,T.aKX,K.aTo,K.aTp,K.aTv,K.aTu,K.aTt,K.aTs,K.aTr,K.aTq,K.aCL,O.aiw,O.aiv,O.aiu,U.ajD,U.ajC,U.aEo])
v(N.I,[T.Ss,K.ST])
u(T.ON,T.Ss)
u(T.a4e,B.cl)
v(P.ap,[T.On,O.a5x,O.aOG,O.hh,E.a1E])
u(K.Rw,K.ST)
u(K.a5w,V.ir)
u(O.TS,O.a5x)
u(O.aCK,P.It)
v(N.x,[U.Uv,U.yh,B.Xi])
w(T.Ss,U.d4)
w(K.ST,U.d4)
w(O.a5x,P.jC)})()
H.a_(b.typeUniverse,JSON.parse('{"a1":"k","aa":"k","a3":"V","a2":"f","ah":"f","ai":"f","a0":"o","ab":"o","am":"P","a4":"l","af":"l","aj":"n","a9":"n","ac":"T","al":"Q","a6":"U","a8":"S","a5":"p","ak":"p","ag":"Y","ae":"X","ad":"W","a7":"M","Ip":{"D":[],"d":[]},"ON":{"I":["Ip"]},"a4e":{"cl":["bZ"],"bu":[]},"rI":{"D":[],"d":[]},"Rw":{"I":["rI*"]},"a5w":{"bu":[]},"TS":{"jC":["hh*"],"R":["hh*"],"jC.E":"hh*"},"Uv":{"x":[],"d":[]},"yh":{"x":[],"d":[]},"Xi":{"x":[],"d":[]}}'))
var y={b:"`null` encountered as case in a switch expression with a non-nullable enum type."}
var x=(function rtii(){var w=H.B
return{Z:w("y<hh*>"),n:w("y<r*>"),t:w("y<d*>"),z:w("aN<I<D>>"),H:w("aN<I<D*>*>"),V:w("bK<c1>"),d:w("o8"),e:w("jb<z*>"),C:w("r6"),x:w("F"),L:w("aG<r>"),y:w("hh*"),G:w("q*"),h:w("E*"),T:w("F*"),M:w("d*")}})();(function constants(){C.lt=new P.q(4291677645)
C.NB=new O.hh(0,0,C.lt)
C.AO=new P.q(4280756007)
C.Yw=new V.aF(2,0,2,0)
C.ZO=new X.b6(58956,"MaterialIcons",null,!1)
C.a08=new L.bA(C.ZO,null,C.o,null,null)
C.a_L=new X.b6(59771,"MaterialIcons",null,!1)
C.a0N=new L.bA(C.a_L,null,null,null,null)
C.nz=new T.On("_GestureType.pan")
C.tv=new T.On("_GestureType.scale")
C.Mj=new T.On("_GestureType.rotate")})()}
$__dart_deferred_initializers__["tn7O7KjfCMHSfVepftnbuvDJHqc="] = $__dart_deferred_initializers__.current