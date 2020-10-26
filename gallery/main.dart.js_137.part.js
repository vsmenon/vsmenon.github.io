self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,H,J,P,W,Y,U,N,R={a39:function a39(d,e){this.a=d
this.b=e}},B,A,G,V,S,T,M,D,Z,L,E,K,O,Q,X,F={
bnx:function(d,e,f,g,h,i,j){var x=null,w=new F.a1W(new R.a39(x,x),C.xS,e,j,d,i,x)
w.gm6()
w.gni()
w.fr=!0
w.dy=!1
w.spt(x)
w.akz(d,x,e,f,g,h,i,j)
return w},
Bu:function Bu(d){this.b=d},
a1W:function a1W(d,e,f,g,h,i,j){var _=this
_.qD=null
_.qF=!1
_.ql=null
_.qy=!1
_.r7=d
_.tC=null
_.tf=!1
_.ty=null
_.tL=e
_.rm=f
_.tg=g
_.B=_.ux=null
_.V=h
_.an=i
_.q$=j
_.r2=_.r1=_.k4=null
_.rx=0
_.e=_.d=null
_.r=_.f=!1
_.x=null
_.y=!1
_.z=!0
_.Q=null
_.ch=!1
_.cx=null
_.cy=!1
_.db=null
_.dx=!1
_.dy=null
_.fr=!1
_.fx=!0
_.fy=null
_.go=!0
_.id=null
_.a=0
_.c=_.b=null},
atB:function atB(d){this.a=d},
b4X:function(d,e,f,g,h,i){return new F.TB(d,f,g,i,e,h)},
TB:function TB(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.y=g
_.c=h
_.a=i}}
a.setFunctionNamesIfNecessary([R,F])
C=c[0]
H=c[1]
J=c[2]
P=c[3]
W=c[4]
Y=c[5]
U=c[6]
N=c[7]
R=a.updateHolder(c[8],R)
B=c[9]
A=c[10]
G=c[11]
V=c[12]
S=c[13]
T=c[14]
M=c[15]
D=c[16]
Z=c[17]
L=c[18]
E=c[19]
K=c[20]
O=c[21]
Q=c[22]
X=c[23]
F=a.updateHolder(c[24],F)
R.a39.prototype={
tV:function(d){return P.b85(this.a,this.b,d)}}
F.Bu.prototype={
j:function(d){return this.b}}
F.a1W.prototype={
akz:function(d,e,f,g,h,i,j,k){var x,w=this,v=G.by(C.v,null,h,0,i,1,null,k)
v.r6()
x=v.op$
x.b=!0
x.a.push(new F.atB(w))
if(w.qF)H.j(H.v("Field '_controller' has already been initialized."))
else{w.qF=!0
w.qD=v}v=S.bw(g,w.gus(),null)
if(w.qy)H.j(H.v("Field '_animation' has already been initialized."))
else{w.qy=!0
w.ql=v}},
gus:function(){return this.qF?this.qD:H.j(H.v("Field '_controller' has not been initialized."))},
gRu:function(){return this.qy?this.ql:H.j(H.v("Field '_animation' has not been initialized."))},
sW7:function(d,e){if(e.p(0,this.gus().e))return
this.gus().e=e},
saLF:function(d){if(d==this.gus().f)return
this.gus().f=d},
saGh:function(d,e){if(e===this.gRu().b)return
this.gRu().b=e},
sKa:function(d){var x=this
if(d===x.tg)return
x.tg=d
x.gus().XZ(x.tg)},
aa:function(d){this.gus().ru(0)
this.a_C(0)},
qk:function(){var x,w,v,u,t=this
t.ty=t.gus().goa()
t.tf=!0
t.tC=!1
x=y.a.a(K.C.prototype.gE.call(t))
w=t.q$
if(w!=null)v=x.a>=x.b&&x.c>=x.d
else v=!0
if(v){t.gus().ru(0)
w=t.r7
t.r1=w.a=w.b=new P.av(C.d.P(0,x.a,x.b),C.d.P(0,x.c,x.d))
t.tL=C.xS
w=t.q$
if(w!=null)w.vT(0,x)
return}w.pE(0,x,!0)
switch(t.tL){case C.xS:w=t.r7
v=t.q$.r1
v.toString
w.a=w.b=v
t.tL=C.rH
break
case C.rH:w=t.r7
v=w.b
u=t.q$.r1
u.toString
if(!J.m(v,u)){v=t.r1
v.toString
w.a=v
v=t.q$.r1
v.toString
w.b=v
t.ty=0
t.gus().xg(0,0)
t.tL=C.Kn}else if(t.gus().goa()===t.gus().b){v=t.q$.r1
v.toString
w.a=w.b=v}else if(!t.gus().gtc())t.gus().nX(0)
break
case C.Kn:w=t.r7
v=w.b
u=t.q$.r1
u.toString
if(!J.m(v,u)){v=t.q$.r1
v.toString
w.a=w.b=v
t.ty=0
t.gus().xg(0,0)
t.tL=C.Ko}else{t.tL=C.rH
if(!t.gus().gtc())t.gus().nX(0)}break
case C.Ko:w=t.r7
v=w.b
u=t.q$.r1
u.toString
if(!J.m(v,u)){v=t.q$.r1
v.toString
w.a=w.b=v
t.ty=0
t.gus().xg(0,0)}else{t.gus().ru(0)
t.tL=C.rH}break
default:throw H.e(H.t("`null` encountered as case in a switch expression with a non-nullable enum type."))}v=t.gRu()
v=w.S(0,v.gk(v))
v.toString
t.r1=x.qj(v)
t.Dg()
v=t.r1
u=v.a
w=w.b
if(u<w.a||v.b<w.b)t.tC=t.tf=!0},
nz:function(d,e){var x,w,v=this
if(v.q$!=null)x=(v.tf?v.tC:H.j(H.v("Field '_hasVisualOverflow' has not been initialized.")))&&v.rm!==C.e
else x=!1
if(x){x=v.r1
w=x.a
x=x.b
v.ux=d.xp(v.gtp(),e,new P.O(0,0,0+w,0+x),T.kD.prototype.guE.call(v),v.rm,v.ux)}else{v.ux=null
v.L_(d,e)}}}
F.TB.prototype={
nq:function(d){var x=this
return F.bnx(x.e,C.x,x.f,x.r,null,T.aV(d),x.y)},
nv:function(d,e){var x=this
e.stK(0,x.e)
e.sW7(0,x.r)
e.saLF(null)
e.saGh(0,x.f)
e.sKa(x.y)
e.spG(0,T.aV(d))
if(C.x!==e.rm){e.rm=C.x
e.ab()
e.nr()}}}
var z=a.updateTypes([])
F.atB.prototype={
$0:function(){var x=this.a
if(x.gus().goa()!=x.ty)x.Z()},
$C:"$0",
$R:0,
$S:0};(function inheritance(){var x=a.inherit
x(R.a39,R.aG)
x(F.Bu,P.ap)
x(F.a1W,T.xg)
x(F.atB,H.bJ)
x(F.TB,N.bS)})()
H.a_(b.typeUniverse,JSON.parse('{"a1":"k","aa":"k","a3":"V","a2":"f","ah":"f","ai":"f","a0":"o","ab":"o","am":"P","a4":"l","af":"l","aj":"n","a9":"n","ac":"T","al":"Q","a6":"U","a8":"S","a5":"p","ak":"p","ag":"Y","ae":"X","ad":"W","a7":"M","a39":{"aG":["av?"],"aC":["av?"],"aC.T":"av?","aG.T":"av?"},"a1W":{"F":[],"bF":["F"],"C":[],"aB":[]},"TB":{"bS":[],"aY":[],"d":[]}}'))
0
var y={a:H.B("aI")};(function constants(){C.xS=new F.Bu("RenderAnimatedSizeState.start")
C.rH=new F.Bu("RenderAnimatedSizeState.stable")
C.Kn=new F.Bu("RenderAnimatedSizeState.changed")
C.Ko=new F.Bu("RenderAnimatedSizeState.unstable")})()}
$__dart_deferred_initializers__["I2tQkh9RM7IiRBNtERQQ90NXpZo="] = $__dart_deferred_initializers__.current