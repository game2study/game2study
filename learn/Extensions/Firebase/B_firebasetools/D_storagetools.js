var gdjs;(function(r){let m;(function(g){let h;(function(p){let x;(function(t){t.uploads=new Map,t.uploadFile=(f,e,n,s,i,y)=>{try{var o=firebase.storage().ref(n).putString(e,s==="none"?void 0:s)}catch(d){typeof i!="undefined"&&i.setString(d.message);return}t.uploads.set(f,o),o.on(firebase.storage.TaskEvent.STATE_CHANGED,()=>{},d=>{typeof i!="undefined"&&i.setString(d.message)},()=>{t.uploads.delete(f),typeof i!="undefined"&&i.setString("ok"),typeof y!="undefined"&&o.snapshot.ref.getDownloadURL().then(d=>y.setString(d))})},t.getDownloadURL=(f,e,n)=>{firebase.storage().ref(f).getDownloadURL().then(function(s){typeof e!="undefined"&&e.setString(s),typeof n!="undefined"&&n.setString("ok")}).catch(function(s){typeof n!="undefined"&&n.setString(s.message)})},t.deleteFile=(f,e)=>{firebase.storage().ref(f).delete().then(function(){typeof e!="undefined"&&e.setString("ok")}).catch(function(n){typeof e!="undefined"&&e.setString(n.message)})}})(x=p.storage||(p.storage={}))})(h=g.firebaseTools||(g.firebaseTools={}))})(m=r.evtTools||(r.evtTools={}))})(gdjs||(gdjs={}));
//# sourceMappingURL=D_storagetools.js.map