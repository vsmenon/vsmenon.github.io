self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,H,J,P,W,Y,U,N,R,B,A,G,V,S,T,M,D,Z,L,E,K,O,Q={
b5O:function(d,e,f,g,h,i,j,k,l){return new Q.GY(e,d,l,f,j,g,k,h,i)},
hC:function hC(d){this.b=d},
GY:function GY(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.a=l},
a7J:function a7J(d,e,f){this.b=d
this.c=e
this.a=f},
O9:function O9(d){this.b=d},
NK:function NK(d,e,f){var _=this
_.e=_.d=null
_.f=!1
_.x=_.r=null
_.y=0
_.z=!1
_.Q=null
_.uz$=d
_.nc$=e
_.a=null
_.b=f
_.c=null},
aI3:function aI3(d){this.a=d},
aI4:function aI4(d){this.a=d},
aI5:function aI5(d){this.a=d},
aI6:function aI6(d){this.a=d},
Sg:function Sg(){},
Sh:function Sh(){}},X,F
a.setFunctionNamesIfNecessary([Q])
C=c[0]
H=c[1]
J=c[2]
P=c[3]
W=c[4]
Y=c[5]
U=c[6]
N=c[7]
R=c[8]
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
Q=a.updateHolder(c[22],Q)
X=c[23]
F=c[24]
Q.hC.prototype={
j:function(d){return this.b}}
Q.GY.prototype={
G:function(){return new Q.NK(null,null,C.k)}}
Q.a7J.prototype={
GK:function(d){var w,v,u
switch(this.b){case C.y:w=this.c
v=w.b
w=w.a
w=v.S(0,w.gk(w)).a
v=d.a
u=w*v
if(u<0)return new P.O(v+u,0,v,d.b)
return new P.O(0,0,u,d.b)
case C.p:w=this.c
v=w.b
w=w.a
w=v.S(0,w.gk(w)).b
v=d.b
u=w*v
if(u<0)return new P.O(0,v+u,d.a,v)
return new P.O(0,0,d.a,u)
default:throw H.e(H.t(y.b))}},
Yu:function(d){return this.GK(d)},
KB:function(d){var w,v,u
if(d.b===this.b){w=d.c
v=w.b
w=w.a
w=v.S(0,w.gk(w))
v=this.c
u=v.b
v=v.a
v=!J.m(w,u.S(0,v.gk(v)))
w=v}else w=!0
return w}}
Q.O9.prototype={
j:function(d){return this.b}}
Q.NK.prototype={
a7:function(){var w,v=this
v.ajb()
v.a.toString
w=G.by(C.v,null,C.t,0,null,1,null,v)
w.r5(v.gas3())
v.d=w
v.UD()},
gTo:function(){return this.f?this.e:H.j(H.v("Field '_moveAnimation' has not been initialized."))},
gCE:function(){var w=this.d
if((w==null?null:w.gtc())!==!0){w=this.r
w=(w==null?null:w.gtc())===!0}else w=!0
return w},
m:function(d){var w
this.d.m(0)
w=this.r
if(w!=null)w.m(0)
this.aja(0)},
gx5:function(){var w=this.a.y
return w===C.vj||w===C.et||w===C.i0},
Ac:function(d){var w
if(d===0)return null
if(this.gx5()){w=this.c
w.toString
w=T.aV(w)
w.toString
switch(w){case C.r:return d<0?C.i0:C.et
case C.q:return d>0?C.i0:C.et
default:throw H.e(H.t(y.b))}}return d>0?C.vl:C.vk},
ga4w:function(){var w=this.c
w=w.guX(w)
w.toString
return this.gx5()?w.a:w.b},
api:function(d){var w=this
w.z=!0
if(w.d.gtc()){w.y=w.d.goa()*w.ga4w()*J.f9(w.y)
w.d.ru(0)}else{w.y=0
w.d.sk(0,0)}w.C(new Q.aI3(w))},
apj:function(d){var w,v,u,t=this,s=y.b
if(!(t.z||t.d.gtc())||t.d.gtc())return
w=d.c
w.toString
v=t.y
switch(t.a.y){case C.vj:case C.WA:t.y=v+w
break
case C.vk:w=v+w
if(w<0)t.y=w
break
case C.vl:w=v+w
if(w>0)t.y=w
break
case C.et:u=t.c
u.toString
u=T.aV(u)
u.toString
switch(u){case C.r:w=t.y+w
if(w>0)t.y=w
break
case C.q:w=t.y+w
if(w<0)t.y=w
break
default:throw H.e(H.t(s))}break
case C.i0:u=t.c
u.toString
u=T.aV(u)
u.toString
switch(u){case C.r:w=t.y+w
if(w<0)t.y=w
break
case C.q:w=t.y+w
if(w>0)t.y=w
break
default:throw H.e(H.t(s))}break
default:throw H.e(H.t(s))}if(J.f9(v)!==J.f9(t.y))t.C(new Q.aI4(t))
if(!t.d.gtc()){w=t.d
w.toString
w.sk(0,Math.abs(t.y)/t.ga4w())}},
UD:function(){var w,v,u=this,t=J.f9(u.y),s=u.d
s.toString
w=u.gx5()
v=u.a
if(w){v.toString
w=new P.r(t,0)}else{v.toString
w=new P.r(0,t)}v=x.A
x.v.a(s)
u.f=!0
u.e=new R.an(s,new R.aG(C.m,w,v),v.i("an<aC.T>"))},
ap7:function(d){var w,v,u,t,s=this
if(s.y===0)return C.tr
w=d.a
v=w.a
u=w.b
if(s.gx5()){w=Math.abs(v)
if(w-Math.abs(u)<400||w<700)return C.tr
t=s.Ac(v)}else{w=Math.abs(u)
if(w-Math.abs(v)<400||w<700)return C.tr
t=s.Ac(u)}if(t==s.Ac(s.y))return C.Mg
return C.Mh},
Lv:function(d){return this.asd(d)},
asd:function(d){var w=0,v=P.bl(x.q),u,t=this,s,r,q,p,o
var $async$Lv=P.bg(function(e,f){if(e===1)return P.bi(f,v)
while(true)switch(w){case 0:if(!(t.z||t.d.gtc())||t.d.gtc()){w=1
break}s=t.z=!1
r=t.d
w=r.gol(r)===C.P?3:5
break
case 3:o=J
w=6
return P.bp(t.Lm(),$async$Lv)
case 6:f=o.m(f,!0)
w=4
break
case 5:f=s
case 4:if(f){t.a6h()
w=1
break}if(t.gx5()){s=d.a
q=s.a.a}else{s=d.a
q=s.a.b}d.toString
switch(t.ap7(s)){case C.Mg:s=t.a.Q.h(0,t.Ac(t.y))
if((s==null?0.4:s)>=1){t.d.qe(0)
break}t.y=J.f9(q)
t.d.xf(Math.abs(q)*0.0033333333333333335)
break
case C.Mh:t.y=J.f9(q)
t.d.xf(-Math.abs(q)*0.0033333333333333335)
break
case C.tr:s=t.d
if(s.gol(s)!==C.H){s=t.d.goa()
r=t.a.Q.h(0,t.Ac(t.y))
if(r==null)r=0.4
p=t.d
if(s>r)p.nX(0)
else p.qe(0)}break
default:throw H.e(H.t(y.b))}case 1:return P.bj(u,v)}})
return P.bk($async$Lv,v)},
LV:function(d){return this.as4(d)},
as4:function(d){var w=0,v=P.bl(x.q),u=this,t
var $async$LV=P.bg(function(e,f){if(e===1)return P.bi(f,v)
while(true)switch(w){case 0:w=d===C.P&&!u.z?2:3
break
case 2:t=J
w=4
return P.bp(u.Lm(),$async$LV)
case 4:if(t.m(f,!0))u.a6h()
else u.d.qe(0)
case 3:u.B6()
return P.bj(null,v)}})
return P.bk($async$LV,v)},
Lm:function(){var w=0,v=P.bl(x.h),u,t=this,s
var $async$Lm=P.bg(function(d,e){if(d===1)return P.bi(e,v)
while(true)switch(w){case 0:if(t.a.f!=null){s=t.Ac(t.y)
s.toString
u=t.a.f.$1(s)
w=1
break}u=!0
w=1
break
case 1:return P.bj(u,v)}})
return P.bk($async$Lm,v)},
a6h:function(){var w,v=this,u=v.a.z
if(u==null){u=v.Ac(v.y)
u.toString
v.a.x.$1(u)}else{u=G.by(C.v,null,u,0,null,1,null,v)
u.r6()
w=u.op$
w.b=!0
w.a.push(v.gaug())
u.r5(new Q.aI5(v))
v.r=u
u.nX(0)
v.C(new Q.aI6(v))}},
auh:function(){var w=this,v=w.r
if(v.gol(v)===C.P){w.a.toString
v=w.Ac(w.y)
v.toString
w.a.x.$1(v)}else w.a.toString},
l:function(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.KN(0,e)
w=n.a
v=w.d
if(w.e!=null){u=n.Ac(n.y)
if(u===C.et||u===C.vk)v=n.a.e}w=n.x
if(w!=null){t=n.gx5()?C.p:C.y
s=n.Q
r=s.a
return K.a38(t,0,T.bM(v,s.b,r),w)}w=n.gTo()
q=K.oE(n.a.c,w,m,!0)
if(v!=null){w=H.b([],x.u)
t=n.gTo()
if(t.gol(t)!==C.H){t=n.gx5()?C.y:C.p
s=n.gTo()
w.push(T.a1v(T.kf(v,new Q.a7J(t,s,s))))}w.push(q)
q=T.cB(C.V,w,C.x,C.a4,m,m)}w=n.gx5()?n.ga1C():m
t=n.gx5()?n.ga1D():m
s=n.gx5()?n.ga1B():m
r=n.gx5()?m:n.ga1C()
p=n.gx5()?m:n.ga1D()
o=n.gx5()?m:n.ga1B()
n.a.toString
return D.d0(C.aW,q,C.D,!1,m,m,m,m,s,w,t,m,m,m,m,m,m,m,m,m,m,m,m,o,r,p)}}
Q.Sg.prototype={
m:function(d){this.at(0)},
a9:function(){var w,v=this.c
v.toString
w=!U.c2(v)
v=this.nc$
if(v!=null)for(v=P.cC(v,v.r);v.w();)v.d.sqg(0,w)
this.nQ()}}
Q.Sh.prototype={
a7:function(){this.af()
if(this.gCE())this.EZ()},
uw:function(){var w=this.uz$
if(w!=null){w.qo()
this.uz$=null}this.Bk()}}
var z=a.updateTypes(["~(eM)","~(eZ)","bd<~>(dN)","bd<~>(dd)","~()"])
Q.aI3.prototype={
$0:function(){this.a.UD()},
$S:0}
Q.aI4.prototype={
$0:function(){this.a.UD()},
$S:0}
Q.aI5.prototype={
$1:function(d){return this.a.B6()},
$S:13}
Q.aI6.prototype={
$0:function(){var w,v,u=this.a,t=u.c
u.Q=t.guX(t)
t=u.r
t.toString
w=x.v
v=x.g
u.x=new R.an(w.a(new R.an(w.a(t),new R.dG(C.a17),x.n.i("an<aC.T>"))),new R.aG(1,0,v),v.i("an<aC.T>"))},
$S:0};(function aliases(){var w=Q.Sg.prototype
w.aja=w.m
w=Q.Sh.prototype
w.ajb=w.a7})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u
var u
w(u=Q.NK.prototype,"ga1C","api",0)
w(u,"ga1D","apj",1)
w(u,"ga1B","Lv",2)
w(u,"gas3","LV",3)
v(u,"gaug","auh",4)})();(function inheritance(){var w=a.mixin,v=a.inheritMany,u=a.inherit
v(P.ap,[Q.hC,Q.O9])
u(Q.GY,N.D)
u(Q.a7J,E.mm)
u(Q.Sg,N.I)
u(Q.Sh,Q.Sg)
u(Q.NK,Q.Sh)
v(H.bJ,[Q.aI3,Q.aI4,Q.aI5,Q.aI6])
w(Q.Sg,U.d4)
w(Q.Sh,L.nB)})()
H.a_(b.typeUniverse,JSON.parse('{"a1":"k","aa":"k","a3":"V","a2":"f","ah":"f","ai":"f","a0":"o","ab":"o","am":"P","a4":"l","af":"l","aj":"n","a9":"n","ac":"T","al":"Q","a6":"U","a8":"S","a5":"p","ak":"p","ag":"Y","ae":"X","ad":"W","a7":"M","GY":{"D":[],"d":[]},"a7J":{"mm":["O"],"bu":[]},"NK":{"I":["GY"]}}'))
var y={b:"`null` encountered as case in a switch expression with a non-nullable enum type."}
var x={v:H.B("aZ<z>"),n:H.B("dG"),u:H.B("y<d>"),A:H.B("aG<r>"),g:H.B("aG<z>"),h:H.B("ao?"),q:H.B("~")};(function constants(){var w=a.makeConstList
C.WA=new Q.hC("DismissDirection.vertical")
C.vj=new Q.hC("DismissDirection.horizontal")
C.et=new Q.hC("DismissDirection.endToStart")
C.i0=new Q.hC("DismissDirection.startToEnd")
C.vk=new Q.hC("DismissDirection.up")
C.vl=new Q.hC("DismissDirection.down")
C.a17=new Z.co(0.4,1,C.a5)
C.a7t=H.b(w([]),H.B("y<hC*>"))
C.afF=new H.as(0,{},C.a7t,H.B("as<hC*,z*>"))
C.tr=new Q.O9("_FlingGestureKind.none")
C.Mg=new Q.O9("_FlingGestureKind.forward")
C.Mh=new Q.O9("_FlingGestureKind.reverse")})()}
$__dart_deferred_initializers__["cp+GqFf3F3AzHVOBCzszJOvrHwM="] = $__dart_deferred_initializers__.current