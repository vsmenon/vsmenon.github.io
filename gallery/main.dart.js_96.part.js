self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,H,J,P,W,Y,U,N,R,B,A,G={o8:function o8(d,e){this.a=d
this.b=e}},V,S,T,M,D,Z,L,E={
b7L:function(){var y=new Float64Array(4)
y[3]=1
return new E.ra(y)},
ra:function ra(d){this.a=d}},K,O,Q,X,F
a.setFunctionNamesIfNecessary([G,E])
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
G=a.updateHolder(c[11],G)
V=c[12]
S=c[13]
T=c[14]
M=c[15]
D=c[16]
Z=c[17]
L=c[18]
E=a.updateHolder(c[19],E)
K=c[20]
O=c[21]
Q=c[22]
X=c[23]
F=c[24]
G.o8.prototype={
tV:function(a7){var y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=new E.cy(new Float64Array(3)),a2=new E.cy(new Float64Array(3)),a3=E.b7L(),a4=E.b7L(),a5=new E.cy(new Float64Array(3)),a6=new E.cy(new Float64Array(3))
this.a.a9n(a1,a3,a5)
this.b.a9n(a2,a4,a6)
y=1-a7
x=a1.z7(y).a0(0,a2.z7(a7))
w=a3.z7(y).a0(0,a4.z7(a7))
v=new Float64Array(4)
u=new E.ra(v)
u.qh(w)
u.aJN(0)
t=a5.z7(y).a0(0,a6.z7(a7))
y=new Float64Array(16)
w=new E.bZ(y)
s=v[0]
r=v[1]
q=v[2]
p=v[3]
o=s+s
n=r+r
m=q+q
l=s*o
k=s*n
j=s*m
i=r*n
h=r*m
g=q*m
f=p*o
e=p*n
d=p*m
a0=x.a
y[0]=1-(i+g)
y[1]=k+d
y[2]=j-e
y[3]=0
y[4]=k-d
y[5]=1-(l+g)
y[6]=h+f
y[7]=0
y[8]=j+e
y[9]=h-f
y[10]=1-(l+i)
y[11]=0
y[12]=a0[0]
y[13]=a0[1]
y[14]=a0[2]
y[15]=1
w.qP(0,t)
return w}}
E.ra.prototype={
qh:function(d){var y=d.a,x=this.a
x[0]=y[0]
x[1]=y[1]
x[2]=y[2]
x[3]=y[3]},
aez:function(d){var y,x,w,v,u,t=d.a,s=t[0],r=t[4],q=t[8],p=0+s+r+q
if(p>0){y=Math.sqrt(p+1)
s=this.a
s[3]=y*0.5
y=0.5/y
s[0]=(t[5]-t[7])*y
s[1]=(t[6]-t[2])*y
s[2]=(t[1]-t[3])*y}else{if(s<r)x=r<q?2:1
else x=s<q?2:0
w=(x+1)%3
v=(x+2)%3
s=x*3
r=w*3
q=v*3
y=Math.sqrt(t[s+x]-t[r+w]-t[q+v]+1)
u=this.a
u[x]=y*0.5
y=0.5/y
u[3]=(t[r+v]-t[q+w])*y
u[w]=(t[s+w]+t[r+x])*y
u[v]=(t[s+v]+t[q+x])*y}},
aJN:function(d){var y,x,w=Math.sqrt(this.gE_())
if(w===0)return 0
y=1/w
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
x[3]=x[3]*y
return w},
gE_:function(){var y=this.a,x=y[0],w=y[1],v=y[2],u=y[3]
return x*x+w*w+v*v+u*u},
gt:function(d){var y=this.a,x=y[0],w=y[1],v=y[2],u=y[3]
return Math.sqrt(x*x+w*w+v*v+u*u)},
T:function(d,e){var y=e.a,x=this.a
x[0]=x[0]+y[0]
x[1]=x[1]+y[1]
x[2]=x[2]+y[2]
x[3]=x[3]+y[3]},
z7:function(d){var y=new Float64Array(4),x=new E.ra(y)
x.qh(this)
y[3]=y[3]*d
y[2]=y[2]*d
y[1]=y[1]*d
y[0]=y[0]*d
return x},
as:function(a4,a5){var y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=i[3],g=i[2],f=i[1],e=i[0],d=a5.gaMF(),a0=d.h(0,3),a1=d.h(0,2),a2=d.h(0,1),a3=d.h(0,0)
i=C.h.as(h,a3)
y=C.h.as(e,a0)
x=C.h.as(f,a1)
w=C.h.as(g,a2)
v=C.h.as(h,a2)
u=C.h.as(f,a0)
t=C.h.as(g,a3)
s=C.h.as(e,a1)
r=C.h.as(h,a1)
q=C.h.as(g,a0)
p=C.h.as(e,a2)
o=C.h.as(f,a3)
n=C.h.as(h,a0)
m=C.h.as(e,a3)
l=C.h.as(f,a2)
k=C.h.as(g,a1)
j=new Float64Array(4)
j[0]=i+y+x-w
j[1]=v+u+t-s
j[2]=r+q+p-o
j[3]=n-m-l-k
return new E.ra(j)},
a0:function(d,e){var y=new E.ra(new Float64Array(4))
y.qh(this)
y.T(0,e)
return y},
nf:function(d,e){var y,x=new Float64Array(4),w=new E.ra(x)
w.qh(this)
y=e.a
x[0]=x[0]-y[0]
x[1]=x[1]-y[1]
x[2]=x[2]-y[2]
x[3]=x[3]-y[3]
return w},
h:function(d,e){return this.a[e]},
u:function(d,e,f){this.a[e]=f},
j:function(d){var y=this.a
return H.c(y[0])+", "+H.c(y[1])+", "+H.c(y[2])+" @ "+H.c(y[3])}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(G.o8,R.aG)
y(E.ra,P.ap)})()
H.a_(b.typeUniverse,JSON.parse('{"a1":"k","aa":"k","a3":"V","a2":"f","ah":"f","ai":"f","a0":"o","ab":"o","am":"P","a4":"l","af":"l","aj":"n","a9":"n","ac":"T","al":"Q","a6":"U","a8":"S","a5":"p","ak":"p","ag":"Y","ae":"X","ad":"W","a7":"M","o8":{"aG":["bZ"],"aC":["bZ"],"aC.T":"bZ","aG.T":"bZ"}}'))
0
0}
$__dart_deferred_initializers__["zLymy6U8ohhaNx80VC82QtOL6us="] = $__dart_deferred_initializers__.current